import { deleteAd, getAdData, getUserData } from "./addetail-model.js";
import { buildAdDetail, buildButton } from "./addetail-view.js";

export async function adDetailController(adDetailContainer, token) {

    const params = new URLSearchParams(window.location.search)
    const adId = params.get('adId');
    if (!adId) {
        window.location.href = './index.html'
    }
  
    try {
        spinner('active')
        const ad = await getAdData(adId)
        adDetailContainer.innerHTML = buildAdDetail(ad)
        adRemoveButton(ad)
    } catch (error) {
        dispatchError(error)
    } finally{
        spinner('inactive')
    }

    function adRemoveButton(ad) {
        const isAvailable = ad.userId === ad.userId //checkUser(ad)
        ? '' 
        : 'disabled';
        const AdContainer = document.createElement('div');
        AdContainer.innerHTML = buildButton(isAvailable);
        adDetailContainer.appendChild(AdContainer);
        
        const removeButton = adDetailContainer.querySelector('#removeButton')
        removeButton.addEventListener('click', () => { removeAd(ad.id, token)})
    }

    async function checkUser(ad) {
        try {userData = await getUserData(token)
        } catch (error) {
            dispatchError(error)
        }
    }

    async function removeAd(adId, token) {
        if (window.confirm('Are you surte you want to delete this ad?')) {
          try {
            await deleteAd(adId, token);
            setTimeout(() => {
              window.location.href = 'index.html'
            }, 2000);
          } catch (error) {
            dispatchError(error)
          }
        }
      }
    

    function dispatchError(error) {
        const event = new CustomEvent('notification-event', {
            detail: {
                msg: error,
                type: 'error'
              }
          });
        adDetailContainer.dispatchEvent(event)
    }

    function spinner(action) {
        const event = new CustomEvent('spinner-event', {
            detail: {
                action
            }
        })
        adDetailContainer.dispatchEvent(event)
    }
}