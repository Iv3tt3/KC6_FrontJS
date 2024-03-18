import { adsListController } from "./ads-list/ads-list-controller.js"
import { notificationController } from "./notifications/notification-controller.js";

const notificationContainer = document.querySelector('.notifications');
const adsList = document.querySelector(".ads-list")

adsList.addEventListener('notification-event', (event) => {
    notificationController(notificationContainer, event.detail.msg, event.detail.type)
    event.stopPropagation();
  })

adsListController(adsList);