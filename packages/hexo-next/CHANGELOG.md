# (2021-05-17)

### Version

- 2.0.7

### Features

- support dark mode for waline

``` yml
waline:
  enable: true
  dark: auto  # Dark mode css selector, for more information: https://waline.js.org/client/basic.html#dark
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
