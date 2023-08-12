import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
};

const FormData = {};

refs.form.addEventListener('submit', formSubmit);
refs.form.addEventListener('input', throttle(textareaInput, 500));

manipulateText();

//  1) Получаем значения TextArea и мейл
//     кидаем єто в переменную FormData и в локалсторедж
//     Сохраняем его в хранилище
//     тротл 500

function textareaInput(evt) {
  FormData[evt.target.name] = evt.target.value;
  console.log(FormData);
  localStorage.setItem('feedback-form-state', JSON.stringify(FormData));
}

//   2) Убираем ПОУМОЛЧАНИЮ
//      убираем сообщение из хранилища
//      очищаем форму
function formSubmit(evt) {
  evt.preventDefault();
  //   console.log('jnghfdrf');
  evt.target.reset();
  localStorage.removeItem('feedback-form-state');
}

//   3) Получаем Значение из хранилища
//      Если есть значение обновляем ДОМ
function manipulateText() {
  const saveText = localStorage.getItem('feedback-form-state');
  if (saveText) {
    refs.textarea.value = saveText;
  }
}

console.log('werf');

// ЮзерКейс Форма инпут меседж и емеил отправка через ЛокалСторедж
// С Тротлем
