const addToDb = (product_id)=>{


    let product ={};
    let prevProduct= getDataFromLocal('shopping_cart');

    let quantity = prevProduct.find(obj => obj[product_id]);
    if(quantity){
        // const index = prevProduct.indexOf(quantity);
        // console.log(index);
        const newQuantity = quantity[product_id]+1;
        quantity[product_id] = newQuantity;
    } else{
        product[product_id]=1;
        console.log(product)
        prevProduct.push(product);
    }

    localStorage.setItem('shopping_cart',JSON.stringify(prevProduct));
}

const getDataFromLocal= (dB)=>{
    let prevDb = [];
    const data = localStorage.getItem(dB);
    if(data){
        prevDb = JSON.parse(data);
    }
    return prevDb;
}


export { addToDb };
