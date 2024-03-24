function parseAds(data){
  return data.map(data => ({
    id: data.id,
    name: data.name,
    description: data.description, 
    price: data.price,
    type: data.type,
    img: data.img
  }))
}

export async function getAds() {
    const url = 'http://localhost:8000/api/ads';
    let ads = [];
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      ads = parseAds(data)
    } catch (error) {
      throw new Error('Sorry, we encountered an issue while loading ads from our database. Please try again later or contact support for assistance.')
    }
    
    return ads;
  
}