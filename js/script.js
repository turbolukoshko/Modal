let btn = document.getElementById('button-open');
let modal = document.getElementById('modal');
let modalClose = document.querySelector('.modal__close');

btn.addEventListener('click', function(){
  modal.style.display = 'block';
});

modalClose.addEventListener('click', function(){
  modal.style.display = 'none';
});

window.addEventListener('click', function(event){
  if(event.target == modal){
    modal.style.display = 'none';
  }
});