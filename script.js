//Date selector

var Date = new Date();
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November','December'];
document.querySelector('.date').innerHTML = Date.getDate() + '      ' + months[Date.getMonth()] + '     ' + Date.getFullYear();

// Add new Item 
var newText = document.querySelector('.newItemText');
var btn = document.querySelector('.addItem');
var par = document.getElementById('list');

function addnew() {
    var para = document.createElement("p");
    var node = document.createTextNode(newText.value);
    para.appendChild(node);
    par.appendChild(para);
    newText.value = '';
    newText.focus();
    console.log(typeof(node))
};

    btn.addEventListener("click", addnew);

  newText.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      btn.click();
    }
  });

  // Delete items that are done

  par.addEventListener("click",function(e) {
  if (e.target && e.target.matches("p")) {
    e.target.innerHTML='';
	}
  });

