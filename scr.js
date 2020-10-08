//let promise = fetch('http://127.0.0.1:3000/cards?_start=1&_end=10').then(r=>r.json()).then(r=>console.log(r))

/*let response = await fetch('http://127.0.0.1:3000/cards');
let fotos = await response.json();
console.log(fotos)*/
const ourSlider = document.querySelector('#overview');



const getImages = async ()=>{
    let response = await fetch('http://127.0.0.1:3000/cards');
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
       /* {
          "id": 1,
          "title": "We are Humans",
          "text": "We act like humans, we talk like humans, and we think like humans. And we call out anyone who does the opposite.",
          "author": "António Capelo",
          "image_url": "http://lorempixel.com/300/150/"
        },*/
        let imagesArr = await response.json();
        sliderFunc(imagesArr);
      } else {
        alert("Ошибка HTTP: " + response.status); 
      }
}
//getImages();

const sliderFunc = (imagesArr)=>{
  imagesArr.forEach(element => {
    const image = document.createElement('img');
    image.setAttribute('src',element.image_url);
    ourSlider.appendChild(image);
  });

}

const getImages1 = ()=> {
  fetch('http://127.0.0.1:3000/cards')
  .then(response => response.json())
  .then(response => sliderFunc(response))
  .catch(error => alert('error'))
};

//getImages1();




//buttons


const plusButton = document.querySelector('#plus');
const minusButton = document.querySelector('#minus');
const imgContainer = document.querySelector('#overview')
let i = 0; 
const imageWidth = -300;
const margAttr = (index)=>{  
  const currentMarginValue = imageWidth*index;
  imgContainer.style.marginLeft = `${currentMarginValue}px`;
  console.log(currentMarginValue)
}

const positiveCounter = ()=>{
  if(i<7){
    i++;
    margAttr(i)
  }
}

const negativeCounter = ()=>{
  if(i>0){
    i--;
  margAttr(i)
  }
}

 plusButton.onclick=()=>positiveCounter()
 minusButton.onclick= ()=>negativeCounter()