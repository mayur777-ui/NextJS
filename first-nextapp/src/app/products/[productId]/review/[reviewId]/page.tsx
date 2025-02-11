import {notFound} from 'next/navigation';

function  getRandomInt(max:number){
    return Math.floor(Math.random() * max);
}
export default function reviewdetails( {params}:{
    params:{
        reviewId :string
        productId:string
    }
} ){

    const random = getRandomInt(2);
    if(random === 1){
        throw new Error('Error in review details page');
    }
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