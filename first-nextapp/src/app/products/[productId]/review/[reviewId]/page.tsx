import {notFound} from 'next/navigation';
export default function reviewdetails( {params}:{
    params:{
        reviewId :string
        productId:string
    }
} ){
    if(parseInt(params.reviewId) > 1000){
        notFound();
    }
    return (
        <>
            <h1>
                hello {params.reviewId} from {params.productId}
            </h1>
        </>
    )
}