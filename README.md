element-markdown
==================

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Downloads][downloads-image]][downloads-url]
[![js-standard-style][standard-image]][standard-url]

A yo-yo component for rendering Markdown with [marked](https://github.com/chjj/marked).

### Intall

```sh
$ npm i element-markdown
```

### Usage

### Example

```JavaScript
var yo = require('yo-yo')
var Markdown = require('element-markdown')

function render () {
  var opts = {
    gfm: false
  }

  return yo`
    <div>
    ${Markdown('I\'m a [marked](https://github.com/chjj/marked) rendered **markdown** content.', opts)}
    </div>
  `
}

var app = render()
document.body.appendChild(app)
```

* source - Markdown source String
* opts - Marked options

Check [marked](https://github.com/chjj/marked) for available options.

### License

MIT

[npm-image]: https://img.shields.io/npm/v/element-markdown.svg?style=flat-square
[npm-url]: https://npmjs.org/package/element-markdown
[travis-image]: https://img.shields.io/travis/fraserxu/element-markdown/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/fraserxu/element-markdown
[downloads-image]: http://img.shields.io/npm/dm/element-markdown.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/element-markdown
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
