import { NextResponse,NextRequest } from "next/server";
import { comments } from "./data"; // Ensure this file exists and exports 'comments'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filterComments = query ? comments.filter(comment => comment.text.includes(query)) : comments;
  return NextResponse.json(filterComments);
}


export async function POST(request: Request) {
  const commnet = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: commnet.text,
  }
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers:{
      "Content-Type": "application/json",
    },
    status: 201,
  });
}