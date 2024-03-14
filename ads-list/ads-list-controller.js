import { getAds } from "./ads-list-model.js"
import { buildAd } from "./ads-list-view.js"

export async function adsListController(adsList){
    const ads = await getAds()
    ads.forEach (ad => {
        const AdContainer = document.createElement('div')
        AdContainer.innerHTML = buildAd(ad)
        adsList.appendChild(AdContainer)
    })
}