// import type { Photo } from "../models/Images";

// import Image from "next/image"
import Link from "next/link"

// type Props = {
//     photo: Photo
// }

// export default function ImgContainer({ photo }: Props){
//     const widthHeightRatio = photo.height/photo.width
//     const galleryHeight = Math.ceil(250 * widthHeightRatio)
//     const photoSpans = Math.ceil(galleryHeight/10) + 1



//     return (




        
//         // <div className="w-[250px] justify-self-center"
//         // style={{gridRow: `span ${photoSpans}`}}
//         // >
//         // <Link href={photo.url} target="_blank" className="grid place-content-center">
//         //    <div className="rounded-xl overflow-hidden group">
//         //     <div>
//         //     <Image src={photo.src.large} alt={photo.alt}
//         //     width={photo.width}
//         //     height= {photo.width}
//         //     sizes="250px"
//         //     placeholder="blur"
//         //     blurDataURL={photo.addBlurredDataURLS}
//         //     className="group-hover:opacity-75"/>
//         //     </div>
//         //     <div className="mt-4 flex justify-between">
//         //         <div>
//         //             <h3 className="text-sm text-gray-700">
//         //                 <span aria-hidden="true" className="absolute inset-0"></span>
//         //                 Basic Tee
//         //             </h3>
//         //             <p className="mt-1 text-sm text-gray-500">Black</p>
//         //         </div>
//         //         <p className="text-sm font-medium text-gray-900">$35</p>
//         //     </div>
//         //   </div>
//         // </Link>

//         // </div>

//         <div className="bg-white w-[250px] justify-self-center" style={{gridRow: `span ${photoSpans}`}}>
//             <Link href="/productOverview">
//             <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//                 <div className="mt-6 grid grid-cols-1 gap-x-2">
//                 <div className="group relative">
//                 <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//                   <Image src={photo.src.large} alt={photo.alt}
//                         width={photo.width}
//                         height= {photo.width}
//                         // sizes="250px"
//                         placeholder="blur"
//                         blurDataURL={photo.addBlurredDataURLS}
//                         className="group-hover:opacity-75"/>
//                 </div>
//                 <div className="mt-4 flex justify-between">
//                     <div>
//                         <h3 className="text-sm text-gray-700">
//                         <a href="#">
//                             <span aria-hidden="true" className="absolute inset-0"></span>
//                             Basic Tee
//                         </a>
//                         </h3>
//                         <p className="mt-1 text-sm text-gray-500">Black</p>
//                     </div>
//                 <p className="text-sm font-medium text-gray-900">$35</p>
//                 </div>

//                 </div>


//                 </div>

//             </div>

//             </Link>

//         </div>
        

//     )
// }


/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Earthen Bottle',
      href: '#',
      price: '$48',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Nomad Tumbler',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Focus Paper Refill',
      href: '#',
      price: '$89',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Machined Mechanical Pencil',
      href: '#',
      price: '$35',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {

        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 6,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 7,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
      {
        id: 8,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
      },
    // More products...
  ]
  
  export default function ImgContainer() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
                <Link href= {{
                    pathname: '/productOverview',
                    query: {
                        productImage: product.imageSrc,
                        productId: product.id,
                        productName: product.name,
                        productPrice: product.price
                    }
                }} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                </Link>

            ))}
          </div>
        </div>
      </div>
    )
  }
  