import { createContext, useState } from "react";

const initValue = {
    name : "Carlos Catalan",
    email : "contactocatalan@gmail.com"
};

export const userContext = createContext()
export const userContextProvider = ({children})=>{


}
//children puede recibir otros componentes colocandolo como parametro