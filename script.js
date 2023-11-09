const areaPole = document.querySelector('.form-lessons-group__input')
const areaClear = document.querySelector('.form-lessons-group__clear')
const fornIntup = document.querySelector('.form-lessons-group')
const selectMenu = document.querySelector('.select')
const textarea = document.querySelector('textarea');
const counter = document.querySelector('.current');
const formobj = document.querySelector('.form-objective')
const formBtn = document.querySelector('.form-buttons__next')
const maxlength = 200;

function checkIsValid() {
    let isValid = document.querySelectorAll('[data-valid="true"]')
   
    if(isValid.length === 2) {
        formBtn.classList.add('form-buttons__next--is-active')
        formBtn.removeAttribute('disabled')
    } else {
        formBtn.setAttribute('disabled', '')
        formBtn.classList.remove('form-buttons__next--is-active')
    }
}

// Очистить поле ввода
areaClear.addEventListener('click' , function() {
    areaPole.value = "";
    fornIntup.classList.remove('form-lessons-group--is-pull')
    delete fornIntup.dataset.valid
    checkIsValid()
})

areaPole.addEventListener('input', function() {

    if(areaPole.value !== '') {
        fornIntup.classList.add('form-lessons-group--is-pull')
        fornIntup.dataset.valid = true
    } else {
        fornIntup.classList.remove('form-lessons-group--is-pull')
        delete fornIntup.dataset.valid
    }
    checkIsValid()
})

// Открытие меню 
let selectHeader = document.querySelector('.select__header');
let selectItem = document.querySelectorAll('.select__item');
const selectIcon = document.querySelector('.select__icon');
const selectBody = document.querySelector('.select__body');
const selectGroup = document.querySelector('.class-group');

let select = function () {
    selectHeader.addEventListener('click', selectToggle)

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        selectBody.classList.toggle('is-active');
        selectIcon.classList.toggle('select__icon-active')
    }

    function selectChoose() {
        let flag = document.querySelector('.select__item--si-active') 
        if(flag !== null) {
            flag.classList.remove('select__item--si-active')
        }
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
            
            this.classList.add('select__item--si-active')
            currentText.innerText = text;
            selectBody.classList.remove('is-active');
            selectIcon.classList.remove('select__icon-active')


            selectGroup.classList.add('class-group--is-active')
    }
};
selectMenu.addEventListener('click', select())

const menuMore = document.querySelector('.form-tags__more')
const menuViss = document.querySelectorAll('.form-tags__item-hidden')

// Раскрыть все теги-меню
menuMore.addEventListener('click' , function() {
    menuViss.forEach(function(e) {
        e.classList.toggle('visible-block')
    })
})

textarea.addEventListener('input', onInput)

function onInput(event) {
  const length = event.target.value.length;
    if(event.target.value !== '') {
        formobj.classList.add('form-objective--is-pull')
        formobj.dataset.valid = true
        if (length > maxlength) {
            formobj.classList.add('error')
            document.querySelector('.form-objective__wrapper').classList.add('form-objective__numb-error')
            document.querySelector('.error-text').classList.add('visible-block')   
        } else {
            formobj.classList.remove('error')
            document.querySelector('.form-objective__wrapper').classList.remove('form-objective__numb-error')
            document.querySelector('.error-text').classList.remove('visible-block')   
        }
    } else {
        formobj.classList.remove('form-objective--is-pull')
        delete formobj.dataset.valid
    }
    checkIsValid()
  counter.textContent = length;
}



