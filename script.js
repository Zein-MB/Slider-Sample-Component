let prvBtn = document.querySelector(".prev");
let nxtBtn = document.querySelector(".next");
let cards = document.getElementsByClassName("card");
let wrapper = document.querySelector('.wrapper');

// Initial Values
let index = 0;
let start = 0;
console.log(index);
let itemsLength = cards.length - 1;


// Next Button
nxtBtn.addEventListener("click", () => {
  index++;
  console.log(index, "ItemsLength: " + itemsLength);

  if (index > itemsLength) {
    
    wrapper.style.animation = 'flip-card .3s ease-out';

    index = 0;

  } else {
    wrapper.style.animation = 'none'  
  }

  goForward();
});

function goForward() {
  cards[start].style.marginLeft = `-${index * 100}%`;
}

// Previous Button
prvBtn.addEventListener('click', () => {
  
  index--;
  console.log(index)

  if (index < start) {
    
    wrapper.style.animation = 'flip-card .3s ease-out';

    index = itemsLength;

  } else {
    wrapper.style.animation = 'none';
  }

  goBackward();

})

function goBackward() {
  cards[start].style.marginLeft = `-${index * 100}%`;
}