import { notificationController } from "./notifications/notification-controller.js";
import { signupController } from "./signup/signup-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";

const notificationContainer = document.querySelector('.notifications');
const spinnerContainer = document.querySelector('.spinner')
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('notification-event', (event) => {
    notificationController(notificationContainer, event.detail.msg, event.detail.type)
    event.stopPropagation();
})

signupForm.addEventListener('spinner-event', (event) => {
    spinnerController(spinnerContainer, event.detail.action)
    event.stopPropagation();
})

signupController(signupForm)
