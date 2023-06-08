export default {
    "data": [
        {
            id: 1,
            breadCrumbs: "Men / Clothing / Tops / Adidas / Adidas Black T-Shirt",
            name: "Adidas black t-shirt lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
            mainCategory: "Men",
            price: 526,
            rate: 4.9,
            reviews: 22,
            discount: 30,
            defaultImage: "../src/images/product-1-1.jpg", 
            brandImage:"../public/images/adidas.svg",
            sizes:[
                {
                    id:1,
                    name:'small'
                },
                {
                    id:2,
                    name:'medium'
                },
                {
                    id:3,
                    name:'large'
                },
                {
                    id:4,
                    name:'x-large'
                },
            ],
            colors:[
                {
                    id:1,
                    name: "default", 
                    defaultImage: "../src/images/product-1-1.jpg",                                      
                    images: [
                        {
                            id: 1,
                            image: '../src/images/product-1-1.jpg'
                        },
                        {
                            id: 2,
                            image: '../src/images/product-1-2.jpg'
                        },
                        {
                            id: 3,
                            image: '../src/images/product-1-3.jpg'
                        },
                    ]
                },
                {
                    id:2,
                    name: "black",
                    defaultImage: "../src/images/product-1-colpr-1.jpg", 
                    images: [
                        {
                            id: 1,
                            image: '../src/images/product-1-colpr-1.jpg'
                        },                     
                        {
                            id: 1,
                            image: '../src/images/product-1-colpr-2.jpg'
                        },                     
                    ]
                },
            ],
            relatedProducts: [2,3]
        },
        {
            id: 2,
            breadCrumbs: "Women / Clothing / dress / miss venus / dress",
            name: "Fashionable Pleated Chiffon Skirt",
            price: 735,
            mainCategory: "Women",
            rate: 3,
            reviews: 20,
            discount: 60,
            brandImage:"../public/images/miss-logo.png",
            defaultImage: "../src/images/product-2-1.jpg",
            sizes:[
                {
                    id:1,
                    name:'small'
                },
                {
                    id:2,
                    name:'medium'
                },
                {
                    id:3,
                    name:'large'
                },
                {
                    id:4,
                    name:'x-large'
                },
            ],
            colors:[
                {
                    id:1,
                    name: "default",
                    defaultImage: "../src/images/product-2-1.jpg",                                       
                    images: [
                        {
                            id: 1,
                            image: '../src/images/product-2-1.jpg'
                        },
                        {
                            id: 2,
                            image: '../src/images/product-2-2.jpg'
                        },
                    ]
                },
                {
                    id:2,
                    name: "black",
                    defaultImage: "../src/images/product-2-color-1-1.jpg", 
                    images: [
                        {
                            id: 1,
                            image: '../src/images/product-2-color-1-1.jpg'
                        },                     
                        {
                            id: 2,
                            image: '../src/images/product-2-color-1-2.jpg'
                        },                     
                    ]
                },
            ],
            relatedProducts: [1,3]
        },
        {
            id: 3,
            breadCrumbs: "Women / Clothing / jacket / miss venus / jacket",
            name: "Classic Jacket With 2 Pockets",
            price: 2000,
            mainCategory: "Women",
            rate: 3,
            reviews: 20,
            discount: 30,
            defaultImage: "../src/images/product-3-1.jpg", 
            brandImage:"../public/images/miss-logo.png",
            sizes:[
                {
                    id:1,
                    name:'small'
                },
                {
                    id:2,
                    name:'medium'
                },
                {
                    id:3,
                    name:'large'
                },
                {
                    id:4,
                    name:'x-large'
                },
            ],
            colors:[
                {
                    id:1,
                    name: "default",
                    defaultImage: "../src/images/product-3-1.jpg",                                       
                    images: [
                        {
                            id: 1,
                            image: '../src/images/product-3-1.jpg'
                        },
                        {
                            id: 2,
                            image: '../src/images/product-3-2.jpg'
                        },
                    ]
                },
                {
                    id:2,
                    name: "black",
                    defaultImage: "../src/images/product-3-color-1-1.jpg", 
                    images: [
                        {
                            id: 1,
                            image: '../src/images/product-3-color-1-1.jpg'
                        },                     
                        {
                            id: 2,
                            image: '../src/images/product-3-color-1-2.jpg'
                        },                     
                    ]
                },
            ],
            relatedProducts: [1,2]
        },
    ]
}