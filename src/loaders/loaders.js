import { getDataFromLocal } from "../CRUD/crudToLocal";

const cartDataLoader = async ()=>{
    const fetchShopData = await fetch('products.json');
    const shopData = await fetchShopData.json();

    // console.log(fetchShopData)
    const cartDataFromLocalStorage = getDataFromLocal();
    let filteredData = [];
    cartDataFromLocalStorage.forEach(x => {
       for(let idL in x){
        const data = shopData.find(p => p.id === idL);
        if(data){
            data.quantity = x[idL];
            filteredData.push(data);
        }
        
       }
    })
    
    return filteredData;
}

export default cartDataLoader;