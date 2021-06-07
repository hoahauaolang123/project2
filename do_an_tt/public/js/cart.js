import xhr, {createPost } from "./common.js";


    fetch('http://localhost:3000/cart')
        .then(response => response.json())
        .then((data) => {
         let post =document.getElementById("cart");
         data.forEach((cart)=>{
             let html=createPost(cart);
             post.insertAdjacentHTML("afterbegin",html)
         })
        })
        .catch(error => console.log(error));
let btn= document.getElementById("btn-province-ha-noi")
// let btn= document.getElementById("btn-province-ho-chi-minh")
        
// btn.addEventListener('click', ()=>{
//     fetch('http://localhost:3000/cart?address_like=minh')
//     .then(response => response.json())
//     .then((res) => {
//         let post =document.getElementById("cart");
//         res.forEach((cart)=>{
//             let html=createPost(cart);
//             post.insertAdjacentHTML("afterbegin",html)
   
//     })})
//     .catch(error => console.log(error));


//   })
document.getElementById("btn-province-ha-noi").onclick = function () {
    location.href = "http://localhost:3000/search-hn.html";
};
document.getElementById("btn-province-ho-chi-minh").onclick = function () {
    location.href = "http://localhost:3000/search-hcm.html";}
