import { context } from "../context/useUser";
import { useContext } from "react";
import { productContext } from "../context/productsContext";
import { dropProviderContext } from "../context/drop-menu";
import { categoriesProvider } from "../context/categoriesProvider";


export const HandleContext = () => {
   
    const currrentcontext = useContext(context)
    if(!currrentcontext){
        throw Error ("Not context Area")
    }
   
    return currrentcontext;
}  

export const HandleProductContext = () => {
    const products = useContext(productContext) 
  
    if(!products){
        throw Error ("Not context Area")
    }
    return products;
}  


export const HandleDropDown = () => {
    const drops = useContext(dropProviderContext) 
  
    if(!drops){
        throw Error ("Not context Area")
    }
    return drops;

}

export const HandleCategories = () => {
    const categories = useContext(categoriesProvider) 
  
    if(!categories){
        throw Error ("Not context Area")
    }
    return categories;

}

