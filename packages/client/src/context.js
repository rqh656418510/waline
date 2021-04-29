import React, { useState } from 'react';
import locales from './i18n';

const emojiCDN = 'https://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/';
const emojiMaps = {
  smile: 'e3/2018new_weixioa02_org.png',
  lovely: '09/2018new_keai_org.png',
  happy: '1e/2018new_taikaixin_org.png',
  clap: '6e/2018new_guzhang_thumb.png',
  whee: '33/2018new_xixi_thumb.png',
  haha: '8f/2018new_haha_thumb.png',
  'laugh and cry': '4a/2018new_xiaoku_thumb.png',
  wink: '43/2018new_jiyan_org.png',
  greddy: 'fa/2018new_chanzui_org.png',
  awkward: 'a3/2018new_heixian_thumb.png',
  sweat: '28/2018new_han_org.png',
  'pick nose': '9a/2018new_wabi_thumb.png',
  hum: '7c/2018new_heng_thumb.png',
  angry: 'f6/2018new_nu_thumb.png',
  grievance: 'a5/2018new_weiqu_thumb.png',
  poor: '96/2018new_kelian_org.png',
  disappoint: 'aa/2018new_shiwang_thumb.png',
  sad: 'ee/2018new_beishang_org.png',
  tear: '6e/2018new_leimu_org.png',
  'no way': '83/2018new_kuxiao_org.png',
  shy: 'c1/2018new_haixiu_org.png',
  dirt: '10/2018new_wu_thumb.png',
  'love you': 'f6/2018new_aini_org.png',
  kiss: '2c/2018new_qinqin_thumb.png',
  amorousness: '9d/2018new_huaxin_org.png',
  longing: 'c9/2018new_chongjing_org.png',
  desire: '3e/2018new_tianping_thumb.png',
  'bad laugh': '4d/2018new_huaixiao_org.png',
  blackness: '9e/2018new_yinxian_org.png',
  'laugh without word': '2d/2018new_xiaoerbuyu_org.png',
  titter: '71/2018new_touxiao_org.png',
  cool: 'c4/2018new_ku_org.png',
  'not easy': 'aa/2018new_bingbujiandan_thumb.png',
  think: '30/2018new_sikao_org.png',
  question: 'b8/2018new_ningwen_org.png',
  'no idea': '2a/2018new_wenhao_thumb.png',
  dizzy: '07/2018new_yun_thumb.png',
  bomb: 'a2/2018new_shuai_thumb.png',
  bone: 'a1/2018new_kulou_thumb.png',
  'be quiet': 'b0/2018new_xu_org.png',
  'shut up': '62/2018new_bizui_org.png',
  stupid: 'dd/2018new_shayan_org.png',
  'surprise ': '49/2018new_chijing_org.png',
  vomit: '08/2018new_tu_org.png',
  cold: '40/2018new_kouzhao_thumb.png',
  sick: '3b/2018new_shengbing_thumb.png',
  bye: 'fd/2018new_baibai_thumb.png',
  'look down on': 'da/2018new_bishi_org.png',
  'white eye': 'ef/2018new_landelini_org.png',
  'left hum': '43/2018new_zuohengheng_thumb.png',
  'right hum': 'c1/2018new_youhengheng_thumb.png',
  crazy: '17/2018new_zhuakuang_org.png',
  'scold ': '87/2018new_zhouma_thumb.png',
  'hit on face': 'cb/2018new_dalian_org.png',
  wow: 'ae/2018new_ding_org.png',
  fan: '86/2018new_hufen02_org.png',
  money: 'a2/2018new_qian_thumb.png',
  yawn: '55/2018new_dahaqian_org.png',
  sleepy: '3c/2018new_kun_thumb.png',
  sleep: 'e2/2018new_shuijiao_thumb.png',
  'watermelon ': '01/2018new_chigua_thumb.png',
  doge: 'a1/2018new_doge02_org.png',
  dog: '22/2018new_erha_org.png',
  cat: '7b/2018new_miaomiao_thumb.png',
  thumb: 'e6/2018new_zan_org.png',
  good: '8a/2018new_good_org.png',
  ok: '45/2018new_ok_org.png',
  yeah: '29/2018new_ye_thumb.png',
  'shack hand': 'e9/2018new_woshou_thumb.png',
  bow: 'e7/2018new_zuoyi_org.png',
  come: '42/2018new_guolai_thumb.png',
  punch: '86/2018new_quantou_thumb.png',
};

const gravatarSetting = {
  cdn: 'https://cdn.v2ex.com/gravatar/',
  ds: ['mp', 'identicon', 'monsterid', 'wavatar', 'robohash', 'retro', ''],
  params: '',
};

export const ConfigContext = React.createContext({
  locales,
  locale: {},
  emojiCDN,
  emojiMaps,
  gravatarSetting,
  userInfo: {
    nick: '',
    mail: '',
  },
});

export default function Context(props) {
  const locale = locales[props.lang] || locales['zh-CN'];
  if (typeof props.langMode === 'object') {
    for (const k in props.langMode) {
      if (!props.langMode[k]) {
        continue;
      }
      locale[k] = props.langMode[k];
    }
  }

  let initUser = {};
  try {
    const KEY = 'WALINE_USER';
    initUser =
      JSON.parse(localStorage.getItem(KEY) || sessionStorage.getItem(KEY)) ||
      {};
  } catch (e) {}
  const [userInfo, setUserInfo] = useState(initUser);

  const context = {
    locales,
    locale,
    lang: props.lang,
    wordLimit: Array.isArray(props.wordLimit)
      ? props.wordLimit
      : props.wordLimit === 0
      ? false
      : [0, props.wordLimit],
    emojiCDN: props.emojiCDN || emojiCDN,
    emojiMaps: props.emojiMaps || emojiMaps,
    gravatarSetting: {
      cdn: props.avatarCDN || gravatarSetting.cdn,
      ds: gravatarSetting.ds,
      params: `?d=${
        gravatarSetting.ds.indexOf(props.avatar) > -1 ? props.avatar : 'mp'
      }${
        props.avatarForce ? '&q=' + Math.random().toString(32).substring(2) : ''
      }`,
    },
    uploadImage:
      typeof props.uploadImage === 'function'
        ? props.uploadImage
        : function (file) {
            const formData = new FormData();
            formData.append('image', file);

            return fetch('https://pic.alexhchu.com/api/upload', {
              method: 'POST',
              body: formData,
            })
              .then((resp) => resp.json())
              .then((resp) => resp.data.url);
          },
    userInfo,
    setUserInfo,
    anonymous: props.anonymous,
  };

  return (
    <ConfigContext.Provider value={context}>
      {props.children}
    </ConfigContext.Provider>
  );
}
