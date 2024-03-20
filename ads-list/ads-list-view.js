export function buildAd (ad) {
    return `
    <div class='adblock'>
    <p class='price'>${ad.price} EUR</p>
    <img src="${ad.img}" />
    <p class='name'>${ad.name}</p>
    <p class='description'>${ad.description}</p>
    <p class='type'>${ad.type}</p>
    </div>
    `
}

export function noAdsMsg(adList) {
    return `No ads yet`
}