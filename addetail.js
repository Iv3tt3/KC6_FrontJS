import { adDetailController } from "./addetail/addetail-controller.js";
import { notificationController } from "./notifications/notification-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";

const notificationContainer = document.querySelector('.notifications');
const spinnerContainer = document.querySelector('.spinner')
const adDetail = document.querySelector(".addetail")

adDetail.addEventListener('notification-event', (event) => {
    notificationController(notificationContainer, event.detail.msg, event.detail.type)
    event.stopPropagation();
  })

adDetail.addEventListener('spinner-event', (event) => {
  spinnerController(spinnerContainer, event.detail.action)
  event.stopPropagation();
})

const token = localStorage.getItem('token');
adDetailController(adDetail, token);