var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function() {
    var element = document.createElement('li');
    element.innerHTML = 'item';
    var number = document.getElementByTagName('li');
    var repetition = number.length;
    		for (var i = 0; i <= repetition; i++) {
        		element[i].innerHTML = i
    		}
    list.appendChild(element);
	};
)