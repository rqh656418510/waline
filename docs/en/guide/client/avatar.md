# Avatar Configuration

Waline currently uses [Gravatar][1] as the comment list avatar.

> Thanks for the mirroring service provided by [geekzu](https://cdn.geekzu.org/cached.html), [v2ex](https://v2ex.com).

Users should log in or register by themselves [Gravatar][1], then set or modify their avatar.When commenting, just leave the email address you used when registering in [Gravatar][1].

<!-- more -->

## Options

You should use `avatar` option to set the default avatar image, e.g.:

Currently there are 7 types of `default values` for `non-custom avatar`:

```js
Waline({
  // ...
  avatar: '',
});
```

## Available Values

|     Value     |                                                               Demo                                                               | Style                                               |
| :-----------: | :------------------------------------------------------------------------------------------------------------------------------: | --------------------------------------------------- |
|     `''`      |                   ![Gravatar official graphics](//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40)                   | Gravatar official graphics                          |
|    `'mp'`     |                  ![Mystic man (a grayhead)](//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&d=mp)                  | Mystic man (a grayhead)                             |
| `'identicon'` |                 ![Abstract geometry](//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&d=identicon)                  | Abstract geometry                                   |
| `'monsterid'` |                   ![little monster](//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&d=monsterid)                   | little monster                                      |
|  `'wavatar'`  |   ![A combination of different faces and backgrounds](//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&d=wavatar)   | A combination of different faces and backgrounds    |
| `'robohash'`  | ![a generated robot with different colors, faces, etc](//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&d=robohash) | a generated robot with different colors, faces, etc |
|   `'retro'`   |               ![Eight-pixel retro portrait](//sdn.geekzu.org/avatar/d41d8cd98f00b204e9800998ecf8427e?s=40&d=retro)               | Eight-pixel retro portrait                          |
|   `'hide'`    |                                                               N/A                                                                | Hidden avatar                                       |

[1]: http://gravatar.com/
