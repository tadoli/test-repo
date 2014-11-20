var marked = require('marked');
var fs = require('fs');
var renderer = new marked.Renderer();

baseUrl = "https://raw.githubusercontent.com/tadoli/test-repo/master/"

renderer.image = function (href, title, text) {
  return "<img alt=\""+text+"\" src=\""+baseUrl+href+"\"/>";
}

fs.readFile('./README.md', {encoding:'utf-8'}, function (err, data) {

  console.log(marked(data, {renderer: renderer}));
});