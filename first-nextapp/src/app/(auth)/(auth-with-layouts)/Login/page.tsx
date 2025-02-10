"use client";  
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();  // ✅ useRouter() must be inside the component

    let handleClick = () => {
        // alert("You are logged in");
        router.push("/");
        // router.back(); //=> this is for going back
        router.forward(); //=>this is for going forward
    };

    return (
        <div>
            <h1>
                <button onClick={handleClick}>LogIn</button>
            </h1>
        </div>
    );
}
