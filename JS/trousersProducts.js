var list3 = [{
    name: "Blue-Faded standard fit jeans",
    price: 25,
    img: "https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/519/800/8676519800_4_1_8.jpg?t=1632235002863&imwidth=563",
    a:"trouser1.html",
    value:7,
    img2:"https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/519/800/8676519800_2_8_8.jpg?t=1628690507138&imwidth=750",
},
{
    name: "Black-Faded standard fit jeans",
    price: 35,
    img: "https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/519/806/8676519806_4_1_8.jpg?t=1632238040653&imwidth=563",
    a:"trouser2.html",
    value:5,  
},
{
    name: "Black-Faded standard fit jeans",
    price: 38,
    img: "https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/519/712/8676519712_4_1_8.jpg?t=1632235002775&imwidth=563",
    value:5,
    a:"trouser3.html"
},
{
    name: "Black-Faded standard fit jeans",
    price: 40,
    img: "https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/519/506/8676519506_4_1_8.jpg?t=1631722920155&imwidth=563",
    value:5,
    a:"trouser3.html"
},
{
    name: "Black-Premium fabric joggers with logo",
    price: 45,
    img: "https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/533/712/8676533712_4_1_8.jpg?t=1632734710030&imwidth=563",
    value:5,
},
{
    name: "Black-Faded wide-leg jeans",
    price: 45,
    img: "https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/527/700/8676527700_4_1_8.jpg?t=1632734701191&imwidth=563",
    value:5,
},
{
    name: "Navy blue joggers",
    img: "https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/518/800/8676518800_4_1_8.jpg?t=1631549716380&imwidth=563",
    price: 45,
    value:7,
},
{
    name: "Black-Coloured carpenter jeans",
    price: 20,
    img: "https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/526/800/8676526800_4_1_8.jpg?t=1630670909165&imwidth=563",
    value:5,
},
{
    name: "Navy blue Basic piqué joggers",
    price: 18,
    img: "https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/503/809/8676503809_4_1_8.jpg?t=1631628505370&imwidth=563",
    value:7,
},
{
    name: "Navy blue joggers",
    price: 15,
    img: "https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/518/827/8676518827_4_1_8.jpg?t=1631628449244&imwidth=563",
    value:7,
 },
{
    name: "Navy blue joggers",
    img: "https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/518/401/8676518401_4_1_8.jpg?t=1630001356272&imwidth=563",
    price: 26,
    value:7,
},
{
    name: "Black-Standard fit chino trousers",
    img: "https://static.pullandbear.net/2/photos//2021/I/0/2/p/8676/514/712/8676514712_4_1_8.jpg?t=1629463027114&imwidth=563",
    price: 16,
    value:5,
}];
var total = 0;
var parent = document.getElementById("products");
function showproducts(arr) {
    parent.innerHTML = null;
    list3.forEach(function (products) {
        let divimg2 = document.createElement("div");
        divimg2.setAttribute("id","divimg2")
        let div = document.createElement("div");
        div.setAttribute("id","imgdiv")
        // let filterdiv=document.createElement("div")
        // filterdiv.setAttribute("id","filterdiv")
        var Al=products.a
        var array=[]
        array.push(products.a)
       div.addEventListener("click",productpage)
       function productpage(){
        window.location.href=products.a
       }
        let img2=document.createElement("img")
        img2.setAttribute("id","hoverimg")
        img2.src=products.img2
        let img = document.createElement("img");
        img.src = products.img;
        let product_price = document.createElement("p");
        product_price.setAttribute("id","pprice")
        product_price.textContent = "$" + products.price;
        let product_name = document.createElement("p");
        product_name.setAttribute("id","ptxt")
        product_name.textContent = products.name;
        total = total + products.price;

        let addtocart_btn = document.createElement("button");
        addtocart_btn.setAttribute("id","cartbtn")
        addtocart_btn.innerText = "Add to Cart";
        addtocart_btn.style.marginLeft = "20%";
        div.append(img,img2)
        divimg2.append(div,product_name,product_price);
        parent.append(divimg2);

    });

    var filterbtn=document.getElementById("flt2")
filterbtn.addEventListener("click",filterg)
var fildiv=document.getElementById("filterdiv")
var parentg= document.getElementById("products");
console.log(fildiv);
function filterg(){
 fildiv.style.display="block"
 fildiv.style.width="40%"
 parentg.style.width="60%"
 parentg.style.margin="0px";
//  parentg.style.backgroundColor="red"
//  fildiv.style.m="10px"
}
var hfd=document.getElementById("hidefilterbtn")
var parentgh= document.getElementById("products");
hfd.addEventListener("click",hidefilter)
function hidefilter(){
    fildiv.style.display="none"
    parentgh.style.width="100%"
    parentg.style.gridTemplateColumns="20% 20% 20% 20%"
}
var parentg= document.getElementById("products");
var flt2=document.getElementById("flt1")
flt2.addEventListener("click",seeTwo)
var c=0;
function seeTwo(){
    c++;
    if(c%2!==0){
        parentg.style.gridTemplateColumns="300px 300px"
        flt2.textContent="See 4"
    }
    else if(c%2==0){
        parentg.style.width="100%"
        parentg.style.gridTemplateColumns="20% 20% 20% 20%"
        flt2.innerText="See 2"
    }
}
};
showproducts();
console.log(total);
if (localStorage.getItem("pullandbearProductCart") === null) {
    localStorage.setItem("pullandbearProductCart", JSON.stringify([]));
};
var txt = document.getElementById("btxt")
function addtoCart(p) {
    products_cart = JSON.parse(localStorage.getItem("pullandbearProductCart"));
    products_cart.push(p);
    txt.innerText="Items :"+products_cart.length
           localStorage.setItem("pullandbearProductCart", JSON.stringify(products_cart));
};
function slh() {
    var arr = list3.sort(function (a, b) {
        return a.price - b.price;
    });
    showproducts(arr);
}
function shl() {
    var arr = list3.sort(function (a, b) {
        return b.price - a.price;

    });
    showproducts(arr);
}
console.log(list3);
var blackSelect=document.getElementById("blackSelect")
 blackSelect.addEventListener("click",selBlack)
//  var black=list3.filter(function(el){
//      return el.value==5
//  })
//  console.log(black);
var k=0;
function selBlack(){
    k++
    var bl=list3.sort(function(a,b){
    if(k%2!==0){
        return (a.value-b.value);
    }
    else{
        window.location.href="trousersProducts.html"
    }
    
    })
    console.log(bl);
    showproducts(bl);
}
var b=0;
var blueSelect=document.getElementById("blueSelect")
blueSelect.addEventListener("click",selBlack)
function selBlue(){
    b++;
    var blu=list3.sort(function(a,b){
        if(b%2==0){
        return (b.value-a.value);
    }else{
        window.location.href="trousersProducts.html"
    }
    })
    console.log(blu);
    showproducts(blu);
}
var hm=document.getElementById("home")
hm.addEventListener("click",home)
function home(){
    window.location.href="trousersProducts.html"
}