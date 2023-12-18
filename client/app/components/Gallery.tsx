import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import fetchImages from "../lib/fetchimages";
import type { ImageResults } from "../models/Images";
import ImgContainer from "./ImageContainer";
import addBlurredDataURLS from "../lib/getBase64";

type Props ={
    topic?: string | undefined
}

export default async function Gallery({topic}: Props){


    const url = !topic
     ? 'https://api.pexels.com/v1/curated'
     : `https://api.pexels.com/v1/search?query=${topic}`


    const images: ImageResults | undefined = await fetchImages(url)

    if(!images) return <h2 className="m-4 text-2xl font-bold">No Images found</h2>


    const photosWithBlur = await addBlurredDataURLS(images)
    
    return (

        <section className="px-2 my-3 grid grid-cols-gallery 
        auto-rows-[10px]
        ">
          
                {photosWithBlur.map(photo => (
                    <ImgContainer  key={photo.id}  photo={photo} />
                ))}
        
        </section>
 

  
    )
}