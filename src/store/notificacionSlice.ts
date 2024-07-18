import { StateCreator } from "zustand"
import { favoriteSliceType } from "./favoriteSlice"

type Notificacion  = { 
    text : string,
    error : boolean,
    show : boolean
}

export type notificacionSliceType = { 
    notificacion : Notificacion
    showNotificacion : ( payload : Pick <Notificacion, 'text'| 'error'> ) => void
    closeNotificacion : () => void
}


export const notificacionSlice : StateCreator<notificacionSliceType & favoriteSliceType , [] , [] , notificacionSliceType> = (set) => ({ 
    notificacion : { 
        text: '',
        error : false ,
        show : false ,
    }, 


    showNotificacion : ( payload ) => { 

        set({ 
            notificacion : {
                text : payload.text,
                error : payload.error,
                show : true
            }
        })
    },

    closeNotificacion : () => { 
        set({ 
            notificacion : { 
                text : '',
                error : false ,
                show : false
            }
        })
    }
})