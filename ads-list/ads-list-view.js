export function buildAd (ad) {
    return `
    <div>
    <img src="${ad.img}" />
    <p>${ad.name}</p>
    <p>${ad.description}</p>
    <p>${ad.price}</p>
    <p>${ad.type}</p>
    </div>
    `
}

export function noAdsMsg(adList) {
    return `No ads yet`
}