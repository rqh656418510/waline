# (2021-06-14)

### Version

- 2.1.5
- 2.1.4

### Features

- optimize upload pictures to [qiniu](https://www.qiniu.com)

# (2021-06-14)

### Version

- 2.1.3

### Features

- update docs

# (2021-06-13)

### Version

- 2.1.2

### Features

- optimize upload pictures to [qiniu](https://www.qiniu.com)

# (2021-06-12)

### Version

- 2.1.1

### Features

- support upload pictures to [qiniu](https://www.qiniu.com)

``` yml
waline:
  enable: true
  qiniuDomain: https://qiniu.example.cn                       # The custom domain for qiniu
  qiniuTokenUrl: https://api.example.cn/qiniu/sdk/token       # The url to get qiniu token
```

# (2021-06-05)

### Version

- 2.1.0

### Features

- update deps
- update repo links

# (2021-05-19)

### Version

- 2.0.9

### Features

- update options

``` yml
waline:
  enable: true
  requiredMeta: [] # Set required fields: [nick] | [nick, mail]
  copyright: true # Display the footer copyright information
```

# (2021-05-18)

### Version

- 2.0.8

### Features

- update READE.md and CHANGELOG.md

# (2021-05-17)

### Version

- 2.0.7

### Features

- support dark mode

``` yml
waline:
  enable: true
  dark: auto # Dark mode css selector, for more information: https://waline.js.org/client/basic.html#dark
```

# (2021-05-05)

### Version

- 2.0.6

### Features

- add custom configuration for gravatar cdn url

``` yml
waline:
  enable: true
  avatarCDN: https://cdn.v2ex.com/gravatar/
```

# (2021-04-30)

### Version

- 2.0.5

### Features

- merge upstream code, compat with NexT theme 8.4.0

### Bug Fixes

- fix the problem that the comment list doesn't refresh automatically when pjax enabled
