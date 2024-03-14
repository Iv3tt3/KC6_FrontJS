function parseAds(data){
  return data.map(data => ({
    name: data.name
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