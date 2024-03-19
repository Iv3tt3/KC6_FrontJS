import { createUser } from "./signup-models.js";

export function signupController(signupForm) {

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        
        handleSubmit();
      })

    function handleSubmit() {
        let errors = [];

        if (!emailValid()) {
            errors.push('Email format is not correct')      
        }

        if (!passwordsEqual(signupForm)) {
            errors.push('Passwords do not match')
        }

        showErrors(errors);

        if (errors.length === 0) {
            sendDataToModel()
        }

    }

    function emailValid() {
        const email = signupForm.querySelector('#email');
        const emailRegExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        return emailRegExp.test(email.value)
    }

    function passwordsEqual() {
        const password = signupForm.querySelector('#password');
        const passwordConfirmation = signupForm.querySelector('#password-confirmation');
        return password.value === passwordConfirmation.value;
    }

    function showErrors(errors) {
        for (const error of errors) {
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
        signupForm.dispatchEvent(event)
    }

    async function sendDataToModel() {
        const email = signupForm.querySelector('#email');
        const password = signupForm.querySelector('#password');

        try {
            await createUser(email.value, password.value)
            dispatchNotification('success', 'Welcome on board! You have just sign up')
            
            setTimeout(() => {
                window.location.href = 'index.html';
              }, 2000);
        }
        catch (error) {
            dispatchNotification('error', error)
        }
    } 
}
