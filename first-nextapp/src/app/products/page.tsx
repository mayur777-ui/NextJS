import Link from 'next/link';
export default function Products(){
    const productId = 100;
    return(
        <>
            <ol>
                <li><Link href="/products/1">Product1</Link></li>
                <li><Link href="/products/1">Product2</Link></li>
                <li><Link href="/products/1">Product3</Link></li>
                <li><Link href={`products/${productId}`}>Product{productId}</Link></li>
            </ol>
        </>
    )
}