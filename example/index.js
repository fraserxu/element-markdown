var yo = require('yo-yo')
var Markdown = require('../index.js')

function render () {
  return yo`
    <div>
    ${Markdown('I\'m a [marked](https://github.com/chjj/marked) rendered **markdown** content.')}
    </div>
  `
}

var app = render()
document.body.appendChild(app)
