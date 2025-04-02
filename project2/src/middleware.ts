import { NextRequest, NextResponse, NextMiddleware } from "next/server";

export function middleware(request:NextRequest){
    const response = NextResponse.next();
    const themePreference = request.cookies.get('theme');
    if(!themePreference){
        response.cookies.set('theme', "dark");
    }
    // return NextResponse.redirect(new URL("/",request.url));
    return response;
}

export const  config = {
    matcher:"/api/time",
}


// export function middleware(request:NextRequest){
//     if(request.nextUrl.pathname === "/hello"){
//         return NextResponse.redirect(new URL("/",request.url));
//     }
// }
