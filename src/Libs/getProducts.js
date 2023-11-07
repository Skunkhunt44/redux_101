async function  getProducts() {

    const res=await fetch('http://localhost:3000/products',{ method : 'Get'})
    
    return await res.json();
   //  dispatch(fetchProducts(products))


}
export default getProducts