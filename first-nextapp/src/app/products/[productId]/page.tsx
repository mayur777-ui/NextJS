import { Metadata } from "next"

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Product ${params.productId}`);
        }, 100);
    });

    return {
        title: title as string, // Ensure the resolved value is treated as a string
        description: `Details about product ${params.productId}`
    };
};

type Props = {
    params: {
        productId:string,
    }
}
export default function ProductDetails( {params}:{
    params: {
        productId:string
    }
} ){
    return <>
        Details about products {params.productId}
    </>
}