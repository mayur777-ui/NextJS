import { NextRequest } from "next/server";
import { headers,cookies } from "next/headers";
export async function GET(request: NextRequest){
    const reqHeader = new Headers(request.headers);
    const HeaderList = headers();
    console.log(reqHeader.get("Authorization"));
    console.log((await HeaderList).get("Authorization"));
    // return new Response("Hello World");
    const theme = request.cookies.get('theme');
    console.log(theme);
    // cookies().set("res","20");
    return new Response("<h1>Hello from api get</h1>",{
        headers:{
            'Content-type':'text/html',
            'Set-Cookie': "theme=dak",
        }
    })
}