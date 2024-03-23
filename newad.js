import { newAdController } from "./newad/newad-controller.js";
import { notificationController } from "./notifications/notification-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";


document.addEventListener('DOMContentLoaded', () => {

    const token = localStorage.getItem('token');
  
    if (!token) {
      window.location.href = 'index.html'
    }
    
    const notificationContainer = document.querySelector('.notifications');
    const spinnerContainer = document.querySelector('.spinner')
    const newAdForm = document.querySelector('#newad-form');


    newAdForm.addEventListener('notification-event', (event) => {
        notificationController(notificationContainer, event.detail.msg, event.detail.type)
        event.stopPropagation();
    })

    newAdForm.addEventListener('spinner-event', (event) => {
        spinnerController(spinnerContainer, event.detail.action)
        event.stopPropagation();
    })
    newAdController(newAdForm)
})