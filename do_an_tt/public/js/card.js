import xhr, {createPost } from "./common.js";
    fetch('http://localhost:3000/cart?address_like=nội')
    .then(response => response.json())
    .then((res) => {
        let post =document.getElementById("cart");
        res.forEach((cart)=>{
            let html=createPost(cart);
            post.insertAdjacentHTML("afterbegin",html)
   
    })})
    .catch(error => console.log(error));
    document.getElementById("btn-province-ha-noi").onclick = function () {
        location.href = "http://localhost:3000/search-hn.html";
    };
    document.getElementById("btn-province-ho-chi-minh").onclick = function () {
        location.href = "http://localhost:3000/search-hcm.html";}
