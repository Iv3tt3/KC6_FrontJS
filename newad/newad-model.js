export const createAd = async (adData) => {
    const url = "http://localhost:8000/api/ads";
    const token = localStorage.getItem('token');
  
    let response;
    try {
      response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(adData),
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.message);
      }
    } catch (error) {
      if (error.message) {
        throw error.message;
      } else {
        throw error;
      }
    }
  }
  