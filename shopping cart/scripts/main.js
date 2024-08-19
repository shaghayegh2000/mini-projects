const shop = document.querySelector('.shop');

const shopItems = [    
  { 
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "../assets/img-1.jpg",
  },
  {
    id: "ioytrhndcv",
    name: "Office Shirt",
    price: 100,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "../assets/img-2.jpg",
  },
  {
    id: "wuefbncxbsn",
    name: "T Shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "../assets/img-3.jpg",
  },
  {
    id: "thyfhcbcv",
    name: "Mens Suit",
    price: 300,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "../assets/img-4.jpg",
  },];

// const basket = [{
//     id:"cvkjlklk",
//     item: 1
// }]; 
 

const generateShop = () => {
    return (
        shop.innerHTML = shopItems.map((x) => {
            const {id , name , price , img , desc} = x;
            return `
            <div class="item" id="product-${id}">
                <img src=${img} alt="">
                <div class="details">
                    <h3>${name}</h3>
                    <p>${desc}</p>
                    <div class="price">
                    <h2>${price}</h2>
                    <div class="btns">
                        <i class="fa-solid fa-minus"></i>
                        <p class="quantity" id="${id}">0</p>
                        <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
            `
        }).join('')
    );
}

generateShop();

// let increment = (id) => {
//     console.log(id)
// };


const faPlus = document.querySelectorAll('.fa-plus');
const faMinus = document.querySelectorAll('.fa-minus'); 

faPlus.forEach(Plus => {
    Plus.addEventListener('click', () => {
        (Plus.previousElementSibling.innerHTML)++;
        const plusquantities = document.querySelector('.quantity').innerHTML;
        localStorage.setItem("plusquantities" , plusquantities);
        localStorage.getItem("plusquantities")
    });
});

faMinus.forEach(Minus => {
    Minus.addEventListener('click', () => {
        if (Minus.nextElementSibling.innerHTML != 0) {
            (Minus.nextElementSibling.innerHTML)--;            
        }
        const minquantities = document.querySelector('.quantity');
        
    });
});

// const quantities = document.querySelectorAll('.quantity');
// quantities.forEach((num) => {
//     console.log(num.innerHTML)
// })

// localStorage.setItem('cuantities' , cuantities);
// localStorage.getItem(cuantities);

