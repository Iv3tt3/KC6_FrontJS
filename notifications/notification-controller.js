import { buildNotification } from "./notification-view.js";

export function notificationController(notificationContainer, msg, type) {

    const notification = document.createElement('div');
    notification.classList.add(type)
    notification.innerHTML = buildNotification(msg)
    notificationContainer.appendChild(notification)

    setTimeout(() => {
        notification.remove()
    }, 4000);
}