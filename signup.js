import { notificationController } from "./notifications/notification-controller.js";
import { signupController } from "./signup/signup-controller.js";

const notificationContainer = document.querySelector('.notifications');
const signupForm = document.querySelector('#signup-form');

signupForm.addEventListener('notification-event', (event) => {
    notificationController(notificationContainer, event.detail.msg, event.detail.type)
    event.stopPropagation();
})

signupController(signupForm)
