import { buildSpinnner } from "./spinner-view.js";

export function spinnerController (spinnerContainer, action) {

        if (action === "active"){
        spinnerContainer.classList.add('active');
        spinnerContainer.innerHTML = buildSpinnner();
        } else {
        spinnerContainer.classList.remove('active');
        spinnerContainer.innerHTML = '';
    }
    
}