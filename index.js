// Выбор кнопок и ссылок для открытия и закрытия меню 

const popup = document.querySelector('.popup');
const headerPopupButton = document.querySelector('.header__button-popup');
const popupCloseButton = document.querySelector('.popup__button-close');
const popupLinks = document.querySelectorAll ('.popup__link');
const popupButton = document.querySelector('.popup__popup-button');

function handlePopupClose() {
  popup.classList.remove('popup_opened');
}

headerPopupButton.addEventListener('click', () => {
  popup.classList.add('popup_opened');
})

popupCloseButton.addEventListener('click', () => {
  handlePopupClose();
})

popupLinks.forEach((link)=> {
  link.addEventListener('click', () => {
    handlePopupClose();
  })
})

popupButton.addEventListener('click', () => {
  handlePopupClose();
})

// Функция для изменения изображений в presentation

const presentationImage = document.querySelector('.presentation__image');
const presentationCards = document.querySelectorAll('.presentation__card')

presentationCards.forEach((card, i) => {
  card.addEventListener('click', () => {
    for (c of presentationCards) {
      c.classList.remove('presentation__card_active');
    }
    presentationImage.src = `./images/presentation-image${i+1}.svg`;
    card.classList.add('presentation__card_active');
  })
})

// Функция для открытия и закрытия вопросов

const questionList = document.querySelectorAll('.support__question');

questionList.forEach((question) => {
  question.addEventListener('click', () => {
    question.querySelector('.support__answer').classList.toggle('support__answer_opened');
    question.querySelector('.support__button').classList.toggle('support__button_type_close');
  })
})




const forwardButton = document.querySelector('.slider__button_type_forward');
const backButton = document.querySelector('.slider__button_type_back');


forwardButton.addEventListener('click', () => {
  const slideList = document.querySelectorAll('.slider__card');
  document.querySelector('.slider__card-box').append(slideList[0].cloneNode(true));
  slideList[0].remove(); 
})

backButton.addEventListener('click', () => {
  const slideList = document.querySelectorAll('.slider__card');
  document.querySelector('.slider__card-box').prepend(slideList[slideList.length - 1].cloneNode(true));
  slideList[slideList.length - 1].remove(); 
})
