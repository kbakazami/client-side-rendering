'use server';

import * as fs from "fs";
import { join } from 'path';
import { writeFile } from 'fs/promises';
export async function uploadImage(image, dir){
    const file = image;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = Date.now() + "_" + file.name;

    if(!fs.existsSync(dir))
    {
        fs.mkdirSync(dir, {recursive: true});
    }

    const path = join(process.cwd(), dir, fileName);

    await writeFile(path, buffer);

    return fileName;
}