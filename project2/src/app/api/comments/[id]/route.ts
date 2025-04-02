import { NextResponse } from "next/server";
import { comments } from "../data"; // Ensure correct import path
import { redirect } from "next/navigation";
export async function DELETE(
    req: Request, 
    { params }: { params: { id: string } }
) {
    if (!params || !params.id) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
        return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const index = comments.findIndex(comment => comment.id === id);
    if (index === -1) {
        return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    comments.splice(index, 1); // Remove the comment
    return NextResponse.json({ message: "Comment deleted successfully" });
}



export async function GET(
    request: Request, 
    { params }: { params: { id: string } }
) {
    console.log("Received params:", params); // Debugging

    if (!params || !params.id) {
        return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    if (Number(params.id) > comments.length) {
        redirect("/comments");
    }
    const id = Number(params.id); // Convert to number
    if (isNaN(id)) {
        return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const comment = comments.find(comment => comment.id === id);
    if (!comment) {
        return NextResponse.json({ error: "Comment not found" }, { status: 404 });
    }

    return NextResponse.json(comment, { status: 200 });
}


export async function PATCH(request: Request,{params}:{
    params:{id:string
    }
}){
    const {id} = params;
    const index = comments.findIndex(comment => comment.id === parseInt(id));
    if(!index){
        return NextResponse.json({error:"Comment not found"},{status:404});
    }
    const body = await request.json();
    const { text } = body;
    comments[index].text =  text;
    return NextResponse.json({message:"Comment updated successfully"},{status:200});
}