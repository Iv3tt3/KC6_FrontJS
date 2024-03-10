export function adsListController(adsList){
    const ads = ["anuncio1", "anuncio2"]
    ads.forEach (ad => {
        const AdContainer = document.createElement('div')
        AdContainer.innerHTML = `${ad}`
        adsList.appendChild(AdContainer)
    })
}