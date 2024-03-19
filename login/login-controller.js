import { loginUser } from "./login-model.js";

export function loginController (loginForm) {

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        submitLogin()
    })

    
    async function submitLogin() {
        try{
            const email = loginForm.querySelector('#email');
            const password = loginForm.querySelector('#password');
            const jwt = await loginUser(email.value, password.value)
            dispatchNotification('sucess', "Welcome! You are logged in")
            localStorage.setItem('token', jwt);
            window.location = './index.html';
    
        } catch (error) {
            dispatchNotification('error', error)
        }
    }
    
    function dispatchNotification(type, msg) {
        const event = new CustomEvent('notification-event', {
            detail: {
                msg:  msg,
                type: type
            }
        });
        loginForm.dispatchEvent(event)
    }
}