const moreBtn = document.querySelector('.info .metadata .titleAndbutton .moreBtn');
const title = document.querySelector('.info .metadata .titleAndbutton .title');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});