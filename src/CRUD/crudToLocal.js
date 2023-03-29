const addToDb = (product_id)=>{


    let product ={};
    let prevShoppingCart= getDataFromLocal('shopping_cart');

    let selectedData = prevShoppingCart.find(obj => obj[product_id]);
    let restData = prevShoppingCart.filter(x => !x[product_id]);

    if(selectedData){
        selectedData[product_id] = selectedData[product_id]+1;
        prevShoppingCart = [...restData, selectedData];
    } else{
        product[product_id]=1;
        prevShoppingCart.push(product);
    }

    localStorage.setItem('shopping_cart',JSON.stringify(prevShoppingCart));
}

const getDataFromLocal= (dB = 'shopping_cart')=>{
    let prevDb = [];
    const data = localStorage.getItem(dB);
    if(data){
        prevDb = JSON.parse(data);
    }
    return prevDb;
}


export { addToDb, getDataFromLocal };
