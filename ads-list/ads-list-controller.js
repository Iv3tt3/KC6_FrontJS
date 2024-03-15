import { getAds } from "./ads-list-model.js"
import { buildAd, noAdsMsg } from "./ads-list-view.js"

export async function adsListController(adsList){
   
    try {
        let ads = await getAds()
        ads = []
        if (ads.length > 0){
            displayAds(ads)
        } else {
            displayNoAdsMsg ()
        }
        
    } catch (error) {
        alert(error) // Change when notification part is implemented
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