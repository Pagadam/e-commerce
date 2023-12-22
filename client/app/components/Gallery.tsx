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
        auto-rows-[10px] w-5/6 m-auto">
          
                {photosWithBlur.map(photo => (
                    <ImgContainer  key={photo.id}  photo={photo} />
                ))}
        
        </section>


        // <div className="bg-white">
        //     <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        //         <h2 className="sr-only">
        //         Products
        //         </h2>

        //         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        //             <a href="#" className="group">
        //                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        //                 <img src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="h-full w-full object-cover object-center group-hover:opacity-75"></img>

        //                 </div>

        //             </a>

        //         </div>
        //     </div>
        // </div>
     

  
    )
}