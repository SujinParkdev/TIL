var elem = document.getElementById('username');

function func() {
  aler('Click!!!');
}

if (elem.addEventListener) { // IE 9~
  elem.addEventListener('click', func);
} else if (elem.attachEvent) { // ~ IE 8
  elem.attachEvent('onclick', func);
}