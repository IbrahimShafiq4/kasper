var icon = document.querySelector('.fa-bars');
var close = document.querySelector('.fa-close');
var unOrderList = document.querySelector('.links ul');
icon.onclick = () => {
    unOrderList.classList.add('active');
    icon.classList.add('active');
}

close.onclick = () => {
    unOrderList.classList.remove('active');
    close.classList.toggle('active')
    icon.classList.remove('active');
}