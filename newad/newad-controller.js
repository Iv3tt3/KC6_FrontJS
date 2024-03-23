import { createAd } from "./newad-model.js";

export function newAdController (newAdForm) {

    newAdForm.addEventListener('submit', (event) => {
        event.preventDefault();

        handleSubmit();
        
    })  

    async function handleSubmit() {
        const formData = new FormData(newAdForm);
        const adData = {
            name: formData.get("name"),
            price: formData.get("name"),
            img: formData.get("img"),
            type: formData.get("typeAd"),
            description: formData.get("description")
        }


        try {
            spinner('active')
            await createAd(adData);
            dispatchNotification('success', 'Your ad has been published!')
                
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
        newAdForm.dispatchEvent(event)
    }

    function spinner(action) {
        const event = new CustomEvent('spinner-event', {
            detail: {
                action
            }
        })
        newAdForm.dispatchEvent(event)
    }

};