import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import fetchImages from "../lib/fetchimages";
import type { ImageResults } from "../models/Images";

export default async function Gallery(){
    const url = 'https://api.pexels.com/v1/curated'
    const images: ImageResults | undefined = await fetchImages(url)

    if(!images) return <h2 className="m-4 text-2xl font-bold">No Images found</h2>
    
    return (

        <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
            <ul>
                {images.photos.map((photo: { id: Key | null | undefined; src: { large: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }; }) => (
                    <li key={photo.id}>{photo.src.large}</li>
                ))}
            </ul>
        </section>
 

  
    )
}