import  {Metadata} from 'next';

export const metadata: Metadata = {
    title: "Blog",
}
export default function About(){
    return(
        <h1>
            About section
        </h1>
    )
}