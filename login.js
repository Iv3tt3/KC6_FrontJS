import { notificationController } from "./notifications/notification-controller.js";
import { loginController } from "./login/login-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";

const notificationContainer = document.querySelector('.notifications');
const spinnerContainer = document.querySelector('.spinner')
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('notification-event', (event) => {
    notificationController(notificationContainer, event.detail.msg, event.detail.type)
    event.stopPropagation();
})

loginForm.addEventListener('spinner-event', (event) => {
    spinnerController(spinnerContainer, event.detail.action)
    event.stopPropagation();
})

loginController(loginForm);

