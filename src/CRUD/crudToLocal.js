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

const removeFromDb =(id)=>{
    const localData = getDataFromLocal('shopping_cart');
    let newData = [...localData];

    localData.forEach(pd => {
        // console.log(pd)
        
        for(let x in pd){
            if(x === id){
                const idx = newData.indexOf(pd);
                newData.splice(idx, 1);
            }
        }
    });

    // console.log(newData)

    localStorage.setItem('shopping_cart', JSON.stringify(newData));
}

const removeAllFromLocal =()=>{
    localStorage.removeItem('shopping-cart');
}
const getDataFromLocal= (dB = 'shopping_cart')=>{
    let prevDb = [];
    const data = localStorage.getItem(dB);
    if(data){
        prevDb = JSON.parse(data);
    }
    return prevDb;
}


export { addToDb, getDataFromLocal, removeFromDb, removeAllFromLocal };
