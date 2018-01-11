var add = document.getElementById('btn');
var list = document.getElementById('list');
add.addEventListener('click', function() {
  var element = document.getElementsByTagName('li');
  list.innerHTML += '<li>item ' + element.length +'</li>'
});

