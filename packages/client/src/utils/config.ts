import {
  defaultGravatarCDN,
  defaultLang,
  defaultUploadImage,
  getAvatar,
  getMeta,
  locales,
} from '../config';

import { decodePath, removeEndingSplash } from '.';
import { getEmojis, resolveOldEmojiMap } from './emoji';

import type { EmojiInfo, EmojiMaps, Locale, WalineOptions } from '../config';

export interface EmojiConfig {
  tabs: Pick<EmojiInfo, 'name' | 'icon' | 'items'>[];
  map: EmojiMaps;
}

export interface Config
  extends Required<
      Pick<
        WalineOptions,
        | 'el'
        | 'path'
        | 'lang'
        | 'meta'
        | 'pageSize'
        | 'requiredMeta'
        | 'uploadImage'
        | 'copyright'
        | 'login'
      >
    >,
    Pick<WalineOptions, 'dark' | 'serverURL' | 'visitor' | 'highlight'> {
  locale: Locale;
  wordLimit: [number, number] | false;
  emoji: Promise<EmojiConfig>;
  avatar: { cdn: string; param: string; default: boolean; hide: boolean };
}

export const getConfig = ({
  el = '#waline',
  serverURL,

  // TODO: remove
  placeholder,
  langMode,
  emojiCDN,
  emojiMaps,
  requiredFields = [],
  anonymous,
  avatarCDN,
  avatar,
  avatarForce,

  path = location.pathname,
  lang = defaultLang,
  locale = langMode,
  emoji = ['https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo'],
  meta = ['nick', 'mail', 'link'],
  requiredMeta = requiredFields,
  pageSize = 10,
  wordLimit,
  uploadImage,
  copyright = true,
  // TODO: changed to `login = 'enable'`
  login = anonymous === true
    ? 'disable'
    : anonymous === false
    ? 'force'
    : 'enable',
  ...more
}: WalineOptions): Config => {
  const $locale = locales[lang] || locales[defaultLang];

  // TODO: remove
  if (placeholder) $locale.placeholder = placeholder;

  // TODO: remove
  const $emoji =
    emojiCDN && typeof emojiMaps === 'object'
      ? Promise.resolve(resolveOldEmojiMap(emojiMaps, emojiCDN))
      : getEmojis(emoji);

  return {
    el,
    // remove ending slash
    serverURL: removeEndingSplash(serverURL),
    path: decodePath(path),
    lang,
    locale: {
      ...$locale,
      ...(typeof locale === 'object' ? locale : {}),
    },
    emoji: $emoji,
    wordLimit: Array.isArray(wordLimit)
      ? wordLimit
      : wordLimit
      ? [0, wordLimit]
      : false,
    meta: getMeta(meta),
    requiredMeta: getMeta(requiredMeta),
    pageSize,
    avatar: {
      cdn: avatarCDN || defaultGravatarCDN,
      param: `?d=${getAvatar(avatar)}${
        avatarForce ? `&q=${Math.random().toString(32).substring(2)}` : ''
      }`,
      default: !avatar && !avatarCDN,
      hide: avatar === 'hide',
    },
    uploadImage:
      typeof uploadImage === 'function'
        ? uploadImage
        : uploadImage === false
        ? false
        : defaultUploadImage,
    copyright,
    login,
    ...more,
  };
};
