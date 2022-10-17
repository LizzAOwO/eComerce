const productData = [
    {
        index: '01',
        name: 'yellow tracksuit',
        image: 'img1.jpg',
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non asperiores libero molestiae aut minus. Possimus enim sapiente officia, maxime accusamus asperiores saepe vero odio eligendi facere reprehenderit reiciendis a soluta?'
    },
    {
        index: '02',
        name: 'designer outfit',
        image: 'img2.jpg',
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non asperiores libero molestiae aut minus. Possimus enim sapiente officia, maxime accusamus asperiores saepe vero odio eligendi facere reprehenderit reiciendis a soluta?'
    },
    {
        index: '03',
        name: 'chilling mood',
        image: 'img3.jpg',
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non asperiores libero molestiae aut minus. Possimus enim sapiente officia, maxime accusamus asperiores saepe vero odio eligendi facere reprehenderit reiciendis a soluta?'
    }
]

const nxtBtn = document.querySelector('.nxt-btn')
let smImgContainer=document.querySelector('.sm-product-img-container')
let smImg=document.querySelector('.sm-product-img')
let productIndex = document.querySelector('.product-index')
let smProductDes = document.querySelector('.sm-product-des')

let productImgContainer = document.querySelector('.product-img-container')
let productImg = document.querySelector('.product-img')
let backdropImg = document.querySelector('.backdrop-img')

let productDetail = document.querySelector('product-detail')
let productName = document.querySelector('.product-name')
let productDes = document.querySelector('.product-des')

let currentProduct = 0
nxtBtn.addEventListener('click', () =>{
    if(currentProduct >= productData.length -1){
        currentProduct = 0
    }
    else{
        currentProduct++
    }
    productIndex.innerHTML = productData[currentProduct].index 
    smProductDes.innerHTML = ProductData[currentProduct].des.slice(0, 80)
})