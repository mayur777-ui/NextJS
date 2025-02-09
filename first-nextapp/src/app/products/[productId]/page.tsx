export default function ProductDetails( {params}:{
    params: {
        productId:string
    }
} ){
    return <>
        Details about products {params.productId}
    </>
}