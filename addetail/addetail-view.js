export function buildAdDetail(ad) {

    return `
    <div class='addetail'>
        <div>
            <img src="${ad.img}" />
        </div>
        <div>
            <p class='name'>${ad.name}</p>
            <p class='price'>${ad.price} EUR</p>
            <p class='description'>${ad.description}</p>
            <p class='type'>${ad.type}</p>
        </div>
    </div>
    `
  }
  