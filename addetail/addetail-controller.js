import { getAdData } from "./addetail-model.js";
import { buildAdDetail } from "./addetail-view.js";

export async function adDetailController(adDetailContainer) {

    const params = new URLSearchParams(window.location.search)
    const adId = params.get('adId');
    if (!adId) {
      window.location.href = './index.html'
    }
  
    try {
      const ad = await getAdData(adId)
      adDetailContainer.innerHTML = buildAdDetail(ad)
    } catch (error) {
      // Dispatch notification
    }
}