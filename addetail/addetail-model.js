function parseAd(data) {
    return {
        name: data.name,
        description: data.description,
        price: data.price,
        type: data.type,
        img: data.img,
        id: data.id
    }
}

export async function getAdData(adId) {
    const url = `http://localhost:8000/api/ads/${adId}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      const ad = parseAd(data);
      return ad;
    } catch (error) {
      throw new Error('Sorry, it is not possible to load the ad details. Please try it later or contact support')
    }
  
  }