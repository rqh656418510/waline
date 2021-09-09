const jwt = require('jsonwebtoken');
const helper = require('think-helper');

module.exports = class extends think.Logic {
  constructor(...args) {
    super(...args);
    this.modelInstance = this.service(
      `storage/${this.config('storage')}`,
      'Users'
    );
  }

  async __before() {
    const referrer = this.ctx.referrer(true);
    let { secureDomains } = this.config();
    if (secureDomains && referrer && this.ctx.host.indexOf(referrer) !== 0) {
      secureDomains = think.isArray(secureDomains)
        ? secureDomains
        : [secureDomains];
      secureDomains.push('localhost', '127.0.0.1', 'github.com');

      const match = secureDomains.some((domain) =>
        think.isFunction(domain.test)
          ? domain.test(referrer)
          : domain === referrer
      );
      if (!match) {
        return this.ctx.throw(403);
      }
    }

    this.ctx.state.userInfo = {};
    const { authorization } = this.ctx.req.headers;
    const { state } = this.get();
    if (!authorization && !state) {
      return;
    }
    const token = state || authorization.replace(/^Bearer /, '');
    const userMail = jwt.verify(token, think.config('jwtKey'));
    if (think.isEmpty(userMail) || !think.isString(userMail)) {
      return;
    }

    const user = await this.modelInstance.select(
      { email: userMail },
      { field: ['email', 'url', 'display_name', 'type', 'github', 'avatar'] }
    );
    if (!think.isEmpty(user)) {
      const userInfo = user[0];
      userInfo.mailMd5 = helper.md5(userInfo.email);
      if (/(github)/i.test(userInfo.avatar)) {
        userInfo.avatar =
          this.config('avatarProxy') +
          '?url=' +
          encodeURIComponent(userInfo.avatar);
      }
      this.ctx.state.userInfo = userInfo;
    }
  }
};
