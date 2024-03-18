import { getAds } from "./ads-list-model.js"
import { buildAd, noAdsMsg } from "./ads-list-view.js"

export async function adsListController(adsList){
   
    try {
        let ads = await getAds()
        if (ads.length > 0){
            displayAds(ads)
        } else {
            displayNoAdsMsg ()
        }
        
    } catch (error) {
        const event = new CustomEvent('notification-event', {
            detail: {
                msg: error,
                type: 'error'
              }
          });
        adsList.dispatchEvent(event)
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

}