import { StateCreator } from "zustand"
import { createFavoriteType } from "./favoriteSlice"

type Notification = { 
    text : string 
    error : boolean
    show : boolean
}

export type notificacionSliceType = { 
    notification : Notification
    showNotification : ( payload : Pick <Notification, 'text' | 'error'>) => void 
}

export const notificacionSlice : StateCreator<notificacionSliceType & createFavoriteType , [] , [] , notificacionSliceType> = ( set  ) => ({ 
    notification : { 
        text : '',
        error : false ,
        show : false 
    },

    showNotification : ( payload ) => { 
        set(() => ({ 
            notification : { 
                text : payload.text,
                error : payload.error,
                show : true
            }
        }))
    }

})