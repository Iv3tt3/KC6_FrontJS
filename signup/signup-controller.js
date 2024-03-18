
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
            // Create user in API --> singup-models.js
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
            const event = new CustomEvent('notification-event', {
                detail: {
                    msg: error,
                    type: 'error'
                }
            });
            signupForm.dispatchEvent(event)
        }
    }
}
