import { getAds } from "./ads-list-model.js"
import { buildAd } from "./ads-list-view.js"

export async function adsListController(adsList){
   
    try {
        let ads = await getAds()
        ads = []
        if (ads.length > 0){
            ads.forEach (ad => {
                const AdContainer = document.createElement('div')
                AdContainer.innerHTML = buildAd(ad)
                adsList.appendChild(AdContainer)
            })
        } else {
            adsList.innerHTML = "No ads yet"
        }
        
    } catch (error) {
        alert(error) // Change when notification part is implemented
    }
    
}