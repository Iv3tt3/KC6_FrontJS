import { getAdData } from "./addetail-model.js";
import { buildAdDetail } from "./addetail-view.js";

export async function adDetailController(adDetailContainer) {

    const params = new URLSearchParams(window.location.search)
    const adId = params.get('adId');
    if (!adId) {
        window.location.href = './index.html'
    }
  
    try {
        spinner('active')
        const ad = await getAdData(adId)
        adDetailContainer.innerHTML = buildAdDetail(ad)
    } catch (error) {
        dispatchError(error)
    } finally{
        spinner('inactive')
    }

    function dispatchError(error) {
        const event = new CustomEvent('notification-event', {
            detail: {
                msg: error,
                type: 'error'
              }
          });
        adDetailContainer.dispatchEvent(event)
    }

    function spinner(action) {
        const event = new CustomEvent('spinner-event', {
            detail: {
                action
            }
        })
        adsList.dispatchEvent(event)
    }
}