import NotificationService, {NOTIF_WISHLIST_CHANGED} from "./notification-service";

let ns = new NotificationService();

let instance = null;
var wishlist = [];

class DataService {
    constructor() {
        if(!instance) {
            instance = this;
        }
        return instance;
    }

    addItem = item => {
        wishlist.push(item);
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishlist);
    }

    removeItem = item => {
        for(var i = 0; i < wishlist.length; i++) {
            if(wishlist[i]._id === item._id) {
                wishlist.splice(i, 1);
                ns.postNotification(NOTIF_WISHLIST_CHANGED, wishlist);
                break;
            }
        }
    }

    itemOnWishlist = item => {
        for(var i = 0; i < wishlist.length; i++) {
            if(wishlist[i]._id === item._id)
                return true;
        }
        return false;
    }
}

export default DataService;