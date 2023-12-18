import { getPlaiceholder } from "plaiceholder";
import type { Photo, ImageResults } from "../models/Images"

async function getBase64(imageUrl: string) {


    // try {
    //     const src = "https://images.unsplash.com/photo-1621961458348-f013d219b50c";
       
    //     const buffer = await fetch(src).then(async (res) =>
    //       Buffer.from(await res.arrayBuffer())
    //     );
       
    //     const { base64 } = await getPlaiceholder(buffer);
       
    //     console.log(base64);
    //   } 


      try{
        const res = await fetch(imageUrl)

        if (!res.ok){
            throw new Error(`Failed to fetch image: ${res.status} $
            {res.statusText}`)
        }

        const buffer = await res.arrayBuffer()

        const { base64 } = await getPlaiceholder(Buffer.from 
        (buffer))
    

        return base64
      }catch(e){
        if(e instanceof Error ) console.log(e.stack)
      }
    
}

export default async function addBlurredDataURLS(images:
    ImageResults): Promise<Photo[]>{
        // Make all requests at once instead of awaiting each one

        const base64Promises = images.photos.map(photo => getBase64 
            (photo.src.large))

        // Resolve all requests in order

        const base64Results = await Promise.all(base64Promises)
        const photoswithBlur: Photo[] = images.photos.map((photo, i)=> {
            photo.addBlurredDataURLS = base64Results[i]
            return photo
        })
        return photoswithBlur
    }