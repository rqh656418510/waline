const { version } = require('../../package.json');

module.exports = class extends think.Controller {
  indexAction() {
    this.type = 'html';
    this.body = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Waline Example</title>
    </head>
    <body>
      <script>
        var serverURL = location.protocol + '//' + location.host + location.pathname.replace(/\\/+$/, '') + '/ui';
        window.location.replace(serverURL);
      </script>

      <!--
      <div id="waline" style="max-width: 800px;margin: 0 auto;"></div> <script src="https://cdn.jsdelivr.net/npm/@waline/client/dist/Waline.min.js"></script>
      <script>
        console.log(
          '%c @waline/server %c v${version} ',
          'color: white; background: #0078E7; padding:5px 0;',
          'padding:4px;border:1px solid #0078E7;'
        );
        const waline = new Waline({
          el: '#waline',
          path: '/',
          lang: new URLSearchParams(location.search.slice(1)).get('lng'),
          serverURL: location.protocol + '//' + location.host + location.pathname.replace(/\\/+$/, '')
        });
      </script>
      -->

    </body>
    </html>`;
  }
};
