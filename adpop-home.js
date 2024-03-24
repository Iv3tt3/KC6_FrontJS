import { adsListController } from "./ads-list/ads-list-controller.js"
import { notificationController } from "./notifications/notification-controller.js";
import { sessionController } from "./session/session-controller.js";
import { spinnerController } from "./spinner/spinner-controller.js";

const notificationContainer = document.querySelector('.notifications');
const spinnerContainer = document.querySelector('.spinner')
const adsList = document.querySelector(".ads-list")
const session = document.querySelector('#session');

sessionController(session);

adsList.addEventListener('notification-event', (event) => {
    notificationController(notificationContainer, event.detail.msg, event.detail.type)
    event.stopPropagation();
  })

adsList.addEventListener('spinner-event', (event) => {
  spinnerController(spinnerContainer, event.detail.action)
  event.stopPropagation();
})

adsListController(adsList);