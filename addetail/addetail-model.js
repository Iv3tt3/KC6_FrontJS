function parseAd(data) {
    return {
        name: data.name,
        description: data.description,
        price: data.price,
        type: data.type,
        img: data.img,
        id: data.id,
        userId: data.userId
    }
}

function parseUser(user) {
  return {
    id: user.id
  }
}

export async function getAdData(adId) {
    const url = `http://localhost:8000/api/ads/${adId}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message);
      }
      const ad = parseAd(data);
      return ad;
    } catch (error) {
      throw new Error('Sorry, it is not possible to load the ad details. Please try it later or contact support')
    }
  
}

export async function getUserData(token) {
  const url = 'http://localhost:8000/auth/me';

  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json(); // ERROR Porque?? Devuelve 200 y response es un objeto
    return parseUser(data);
  } catch (error) {
    throw new Error('Error datos del usuario')
  }
}

export async function deleteAd(adId, token) {
  const url = `http://localhost:8000/api/ads/${adId}`;

  try {
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      const data = await response.json()
      throw new Error(data.message);
    }
  } catch (error) {
    throw new Error('Error removing ad')
  }
}