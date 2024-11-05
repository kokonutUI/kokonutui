"use server";

import path from "path";
import { promises as fs } from 'fs';


export async function getComponent(fileName: string, folder: string) {
    const prePath = path.join(process.cwd(), "components", folder);

    const file = await fs.readFile(path.join(prePath, fileName), "utf-8");


    return file;
}
