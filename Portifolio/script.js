const $html = document.querySelector('html')
const $chekbox = document.querySelector('#switch')

$chekbox.addEventListener('change',function(){
    $html.classList.toggle('white-mode')
})