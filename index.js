var yo = require('yo-yo')
var marked = require('marked')

module.exports = function (source, opts) {
  if (opts) {
    marked.setOptions(opts)
  }

  var markedHtml = marked(source)
  var container = document.createElement('span')
  container.innerHTML = marked(source)

  return yo`${container}`
}
