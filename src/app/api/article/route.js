import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    const res = await fetch(`https://dummyjson.com/posts/${id}`, {
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const data = await res.json()

    return NextResponse.json({data});
}

export async function POST(request) {

    const body = await request.json();

    try {
        const article = await prisma.article.create({
            data: {
                title: body.title,
                author: body.author,
                image: body.image,
                content: body.content
            }
        });

        return NextResponse.json(article);
    }catch (e){
        return NextResponse.json({message: "error"});
    }
}

