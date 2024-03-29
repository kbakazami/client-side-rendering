import {NextResponse} from "next/server";

export async function GET() {
    const res = await fetch('https://dummyjson.com/posts?limit=10', {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await res.json()

    return NextResponse.json({data});
}
