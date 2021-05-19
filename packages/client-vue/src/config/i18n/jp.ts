import type { Locale } from './typings';

const jpLocale: Locale = {
  nick: 'ニックネーム',
  nickError: '3バイト以上のニックネームをご入力ください.',
  mail: 'メールアドレス',
  mailError: 'メールアドレスをご確認ください.',
  link: 'サイト(http://)',
  placeholder: 'ここにコメント',
  sofa: 'コメントしましょう~',
  submit: '提出する',
  reply: '返信する',
  cancelReply: 'キャンセル',
  comment: 'コメント',
  cancel: 'キャンセル',
  confirm: '確認する',
  continue: '继续',
  more: 'さらに読み込む...',
  preview: 'プレビュー',
  emoji: '絵文字',
  expand: 'もっと見る',
  seconds: '秒前',
  minutes: '分前',
  hours: '時間前',
  days: '日前',
  now: 'たっだ今',
  uploading: 'アップロード中...',
  uploadDone: 'アップロードが完了しました!',
  busy: '20 秒間隔で提出してください    ...',
  login: 'ログインする',
  logout: 'ログアウト',
  admin: '管理者',
  word: 'ワード',
  wordHint:
    'コメントは $0 から $1 ワードの間でなければなりません!\n 現在の単語番号: $2',
  'code-98': 'ロードエラーです。av-min.js のバージョンを確認してください.',
  'code-99': 'ロードエラーです。initにある`el`エレメントを確認ください.',
  'code-100': 'ロードエラーです。AppIdとAppKeyを確認ください.',
  'code-140': '今日のAPIコールの総数が開発バージョンの上限を超えた.',
  'code-401': '権限が制限されています。AppIdとAppKeyを確認ください.',
  'code-403':
    'アクセスがAPIなどに制限されました、ドメイン名のセキュリティ設定を確認ください',
};

export default jpLocale;
