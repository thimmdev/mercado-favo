var modal = document.getElementById("hero-modal");
var btn = document.getElementById("btn-open-modal");
var span = document.getElementsByClassName("close")[0];

var body = document.body

function bodyFreezeScroll ( ) {
  var bodyWidth = body.innerWidth();
  body.css('overflow', 'hidden');
  body.css('marginRight', (body.css('marginRight') ? '+=' : '') + (body.innerWidth() - bodyWidth))
}

function bodyUnfreezeScroll() {
  var bodyWidth = $body.innerWidth();
  $body.css('marginRight', '-=' + (bodyWidth - $body.innerWidth()))
  $body.css('overflow', 'auto');
}


btn.onclick = function() {
  modal.style.display = "block";
  body.classList.add('scrollLock')
}

span.onclick = function() {
  modal.style.display = "none";
  body.classList.remove('scrollLock')
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.classList.remove('scrollLock')
  }
}