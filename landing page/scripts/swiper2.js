

    let swiper = new Swiper(".mySwiper", {
        slidesPerView: 6,
        centeredSlides: false,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            type: "none",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

var swiper2=[

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1261/1261402_sd.jpg;maxHeight=272;maxWidth=400",
    name:"Logitech-MK550 Ergonomic Full-size Wireless Alkaline Wave",
    price:4999,
    discount:59.99,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1802/1802042_ra.jpg;maxHeight=272;maxWidth=400",
    name:"Sunpak-PlatinumPlus 5858D 58 Tripod-Black",
    price:19.90,
    discount:299.9,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6289/6289641_sd.jpg;maxHeight=272;maxWidth=400",
    name:"Razer-Kiyo Webcam with Adjustable Ring Light-Black",
    price:61.50,
    discount:99.99,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6425/6425046_sd.jpg;maxHeight=272;maxWidth=400",
    name:"Asus-14.0 Chromebook-Intel Celeron N3350-4GB",
    price:14900,
    discount:269.00,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6482/6482753_rd.jpg;maxHeight=272;maxWidth=400",
    name:"VerZon-Aispeed 4G Mobile Hotspot",
    price:5999,
    discount:232,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1440/1440638_sd.jpg;maxHeight=272;maxWidth=400",
    name:"Logitech-Mk270 Full-size Wireless Membrane Romer-G Keyboard",
    price:273.90,
    discount:225,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6356/6356399cv16d.jpg;maxHeight=272;maxWidth=400",
    name:"Joby-GorrilaPod 1K SMART kit Tripod-Black",
    price:4999,
    discount:342,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5761/5761912_sd.jpg;maxHeight=272;maxWidth=400",
    name:"Logitech-4K Pro4k/1080p/720 Webcam with noise",
    price:15.99,
    discount:199.99,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6449/6449513_sd.jpg;maxHeight=272;maxWidth=400",
    name:"ASUS-11.6 Chromebook-Intel Celeron-4Gb Memory",
    price:109.00,
    discount:219.00,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6337/6337080_rd.jpg;maxHeight=272;maxWidth=400",
    name:"Verizon-Jetpack MiFi 88OOl 4G LTE Mobile Hotspot-Gray",
    price:199.99,
    discount:241.00,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5761/5761911_sd.jpg;maxHeight=272;maxWidth=400",
    name:"Logitech-Mk850 Performance Full-size Wireless Optical",
    price:89.99,
    discount:12.00,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6244/6244901_rd.jpg;maxHeight=272;maxWidth=400",
    name:"Msnfrotto-compact Action Smart 61 tripod-Black",
    price:74.99,
    discount:45.00,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2588/2588445_sd.jpg;maxHeight=272;maxWidth=400L",
    name:"Logitech-C615 1080p Webcam with HD Light Correction-Black",
    price:39.99,
    discount:69.99,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6469/6469578_sd.jpg;maxHeight=272;maxWidth=400",
    name:"Asus-14 Chromebook-FHD Display-Intel Celeron N3350-4GB",
    price:169.00,
    discount:299.00,
},

{
    img:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1294/1294039_sd.jpg;maxHeight=272;maxWidth=400",
    name:"Logitech-MK320 Full-size Wireless optional keyboard and Mouse",
    price:29.99,
    discount:12.00,
},


];




appendSponsered(swiper2)

function appendSponsered(arr) {
    let x = ` `;
    arr.map((el) => {
        x += `  <div class="swiper-slide">
      <img src= ${el.img} alt="">
       
      <p><b>${el.name}</b></p>
      <h5> ${el.price} </h5>
      <h5> ${el.discount}/h5>
      <button><b>Add To Cart</b></button>
    </div>`
    });
    document.querySelector(".swiper-wrapper2").innerHTML = x;
}