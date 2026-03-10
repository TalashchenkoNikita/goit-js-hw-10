// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = new FormData(form);
  const delay = data.get('delay');
  const state = data.get('state');
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  promise.then(delay => 
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        color: 'green',
        position: 'topRight',
      })).catch (delay => 
       iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        color: 'red',
        position: 'topRight',
      }));
    }
)
