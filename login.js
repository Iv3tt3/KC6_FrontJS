import { notificationController } from "./notifications/notification-controller.js";
import { loginController } from "./login/login-controller.js";

const notificationContainer = document.querySelector('.notifications');
const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('notification-event', (event) => {
    notificationController(notificationContainer, event.detail.msg, event.detail.type)
    event.stopPropagation();
})

loginController(loginForm);

