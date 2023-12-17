import { ImageResults } from "../models/Images";

import { ImagesSchemaWithPhotos } from "../models/Images";
import env from "./env"


export default async function fetchImages(url: string):
Promise<ImageResults | undefined>{
    try{
        const res = await fetch(url, {
            headers: {
                Authorization: "dmGaUGrjTtUV6o59aQ8KLg7iV9rutEi0uyvEqTFjvNYxhcCH8HaTswdk"
            }
        })
        if(!res.ok) throw new Error("Fetch Images Error\n")
        const imagesResults: ImageResults = await res.json()

        console.log(imagesResults)

        // Parse data with Zod schema
        // const parsedData = ImagesSchemaWithPhotos.safeParse(imagesResults)

        // if(parsedData.total_results === 0 ) return undefined

        return imagesResults


    } catch(e){
       
        

        // will show in terminal console
        if(e instanceof Error ) console.log(e.stack)

    }
}