import { StateCreator } from "zustand"

type Notification = { 
    text : string 
    error : boolean
    show : boolean
}

export type notificacionSliceType = { 
    notification : Notification
}

export const notificacionSlice : StateCreator<notificacionSliceType> = ( set , get ) => ({ 
    notification : { 
        text : '',
        error : false ,
        show : false 
    }
})