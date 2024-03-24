import { loginUser } from "./login-model.js";

export function loginController (loginForm) {

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        submitLogin()
    })

    
    async function submitLogin() {
        try{
            spinner('active')
            const email = loginForm.querySelector('#email');
            const password = loginForm.querySelector('#password');
            const jwt = await loginUser(email.value, password.value)
            dispatchNotification('sucess', "Welcome! You are logged in")
            localStorage.setItem('token', jwt);
            setTimeout(() => {
                window.location.href = 'index.html';
              }, 2000);
    
        } catch (error) {
            dispatchNotification('error', error)
        } finally{
            spinner('inactive')
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

    function spinner(action) {
        const event = new CustomEvent('spinner-event', {
            detail: {
                action
            }
        })
        loginForm.dispatchEvent(event)
    }
}