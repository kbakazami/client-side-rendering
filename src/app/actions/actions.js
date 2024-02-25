'use server';

import {uploadImage} from "@/app/services/uploadImage";
export async function createArticle(formData){


    const image = formData.get('image');
    const fileName = await uploadImage(image, 'public/upload/articles');

    const rawFormData = {
        author: formData.get('author'),
        title: formData.get('title'),
        image: fileName,
        content: formData.get('content'),
    }
    const res = await fetch('http://localhost:3000/api/articles', {
        method: "POST",
        body: JSON.stringify(rawFormData),
    })

    console.log(res);
}