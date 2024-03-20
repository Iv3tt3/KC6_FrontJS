import { getAds } from "./ads-list-model.js"
import { buildAd, noAdsMsg } from "./ads-list-view.js"

export async function adsListController(adsList){
   
    try {
        spinner('active')
        let ads = await getAds()
        if (ads.length > 0){
            displayAds(ads)
        } else {
            displayNoAdsMsg ()
        }
        
    } catch (error) {
        dispatchError(error)
        
    } finally{
        spinner('inactive')
    }
    
    function displayAds (ads) {
        ads.forEach (ad => {
            const AdContainer = document.createElement('div')
            AdContainer.innerHTML = buildAd(ad)
            adsList.appendChild(AdContainer)
        })
    }

    function displayNoAdsMsg() {
        adsList.innerHTML = noAdsMsg(adsList)
    }

    function dispatchError(error) {
        const event = new CustomEvent('notification-event', {
            detail: {
                msg: error,
                type: 'error'
              }
          });
        adsList.dispatchEvent(event)
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