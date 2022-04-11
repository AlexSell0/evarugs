const modalWindow = document.querySelector('.modal');
const playBtns = document.querySelectorAll('.button-play');
const video = document.querySelector('iframe');

playBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        modalWindow.classList.add('active');
    })
})

modalWindow.addEventListener('click', () =>{
    // let src = video.src;
    video.src = video.src;
    modalWindow.classList.remove('active');
    // video.src = src;
})