import { createAd } from "./newad-model.js";

export function newAdController (newAdForm) {

    newAdForm.addEventListener('submit', (event) => {
        event.preventDefault();

        handleSubmit();
        
    })  

    function handleSubmit() {

        const formData = new FormData(newAdForm);
        const adData = {
            name: formData.get("name"),
            price: formData.get("price"),
            img: (formData.get("img") === '' ? './images/noimg.png' : formData.get("img")),
            type: `To ${formData.get("typeAd")}`,
            description: formData.get("description")
        }

        let errors = [];

        if (!priceValid(adData.price)) {
            errors.push('Not a valid price. Price must be greater than 0 and have a maximum of 2 decimals.')
        }

        if (!imgValid(adData.img)) {
            errors.push('Image not valid')
        }

        showErrors(errors);

        if (errors.length === 0) {
            sendDataToModel(adData)
        }
    }

    async function sendDataToModel(adData){
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


    function showErrors(errors) {
        for (const error of errors) {
            dispatchNotification('error', error)
        }
    }

    function priceValid(price) {
        return new RegExp(/^[1-9]\d{0,2}(?:[.,]\d{3})*(?:,\d[1-9])?$/).test(price)
    }

    function imgValid(img) {
        return new RegExp(/.\/images\/\w+\.(jpg|png|jpeg)/).test(img)
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

}