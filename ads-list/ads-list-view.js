export function buildAd (ad) {
    return `
    <div class='adblock'>
    <a class="ad" href="addetail.html?adId=${ad.id}">
        <p class='price'>${ad.price} EUR</p>
        <img src="${ad.img}" />
        <p class='name'>${ad.name}</p>
        <p class='description'>${ad.description}</p>
        <p class='type'>${ad.type}</p>
    </a>
    </div>
    `
}

export function noAdsMsg(adList) {
    return `No ads yet`
}