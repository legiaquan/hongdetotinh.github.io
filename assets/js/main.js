const modalQuestionStart = document.querySelector('.modal-question-block--start');
const modalQuestionEnd = document.querySelector('.modal-question-block--end');
const btnNo = document.querySelector('.modal-question-block .btn-no');
const btnPlease = document.querySelector('.modal-question-block .btn-please');
const showPlayWithMe = document.querySelector('.play-with-me__block');
const btnNoAgree = document.querySelector('.play-with-me__block .btn-no-agree');
const btnAgree = document.querySelector('.play-with-me__block .btn-agree');
const soundStart = document.querySelector('.sound-start');

const popup = document.querySelector('.popup');
let clickedBtnNo = false;
let isClickedBtnPlease = false;


function loadMain() {
    modalQuestionStart.style.opacity = '1';
    // modalQuestionStart.style.display = 'none';
    showPlayWithMe.style.display = 'none';
    modalQuestionEnd.style.display = 'none';
    btnNo.addEventListener('click', handleClickBtnNo);
    btnPlease.addEventListener('click', handleClickBtnPlease);
    btnNoAgree.addEventListener('mouseover', handleClickBtnNoAgree);
    btnNoAgree.addEventListener('click', handleClickBtnNoAgree);
    btnAgree.addEventListener('click', handleClickBtnAgree);
}


handleClickBtnNo = () => {
    if(clickedBtnNo){
        return;
    }

    clickedBtnNo = true;
    popup.style.display = 'flex';

    setTimeout(function() {
        popup.style.display = 'none';
        clickedBtnNo = false;
    }, 1300);
};

handleClickBtnAgree = () => {
    const audio = new Audio('../../assets/sounds/CoEmDoiBongVui-Chillies.mp3');

    soundStart.pause();
    audio.play();
    modalQuestionEnd.style.display = 'block';
    modalQuestionEnd.style.opacity = '1';
    showPlayWithMe.style.display = 'none';
    
}

handleClickBtnPlease = () => {
    if(isClickedBtnPlease){
        return;
    }

    isClickedBtnPlease = true;

    showPlayWithMe.style.display = 'flex';
    modalQuestionStart.style.display = 'none';
}

handleClickBtnNoAgree = () => {
    const audio = new Audio('../../assets/sounds/duck.mp3');
    audio.play();
    let OffsetX = 0;
    let OffsetY = 0;
    if (screen.width <= 767) {
        OffsetX = Math.random() * 300;
        OffsetY = Math.random() * 500;
    } else {
        OffsetX = Math.random() * 500;
        OffsetY = Math.random() * 500;
    }

    btnNoAgree.style.left = `${OffsetX}px`;
    btnNoAgree.style.top = `${OffsetY}px`;
}

loadMain()
