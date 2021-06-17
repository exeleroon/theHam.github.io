const graphicEl = document.querySelectorAll('.graphic-design');
const servicesEl = document.querySelectorAll('.services-photo-text');

function showElem(event) {
    for (let i = 0; i < graphicEl.length; i++) {
        if (graphicEl[i] === event.target) {
        event.target.classList.add('active-td');
        servicesEl[i].classList.add('active');
        servicesEl[i].style.display = 'block';
        } else { 
            graphicEl[i].classList.remove('active-td');
            servicesEl[i].classList.remove('active');
            servicesEl[i].style.display = 'none';
    } 
    }
}

document.querySelector('.our-services').addEventListener('click', showElem);


let ourPhoto = document.querySelectorAll('.amazing-menu');

function showBlock(event) {
const imagesCreate = document.querySelectorAll('.images-create');
        for (let i = 0; i < ourPhoto.length; i++) {
            if (event.target == ourPhoto[i]) {
                event.target.classList.add('active');
            } 
            else {
                ourPhoto[i].classList.remove('active');
            }
    }
    for (let i = 0; i < imagesCreate.length; i++) {
        if (imagesCreate[i].dataset.ref == event.target.dataset.ref || event.target.dataset.op) {
            imagesCreate[i].style.display = 'block'; 
            ourAmazing.style.height = '1612px';
        } else {
            imagesCreate[i].style.display = 'none';
            ourAmazing.style.height = '1212px';
        } 
    }
};

document.querySelector('.our-amazing-photo').addEventListener('click', showBlock);




const btnLoad = document.querySelector('.load-more');
const addImg = document.querySelector('.add-img');

btnLoad.addEventListener('click', function () {
    btnLoad.style.display = 'none';
  setTimeout(() => {
        for (let i = 0; i < imagesAdd.length; i++) {
            if (btnLoad) {
                imagesAdd[i].style.display = 'block';
                imagesAdd[i].classList.remove('images-add');
                imagesAdd[i].classList.add('images-create');
                ourAmazing.style.height = '1650px';
                
            }
    
            else {
                ourAmazing.style.height = '1212px';
                imagesAdd[i].style.display = 'none';
                imagesAdd[i].classList.remove('images-create'); 
                imagesAdd[i].classList.remove('images-add');
            } 
        } 
    addImg.style.display = 'block';
  }, 1000);  
})

const imagesAdd = document.querySelectorAll('.images-add');
const imgBlock = document.querySelector('.add-img');
const ourAmazing = document.querySelector('.our-amazing');





const activeEl = document.querySelectorAll('.imgWho');
const personsEl = document.querySelectorAll('.persons');

const btnLeft = document.querySelector('.left')
const btnRight = document.querySelector('.right');
let counter = 0;

btnRight.addEventListener('click', function (event) {
    personsEl[counter].style.display = 'none';
    activeEl[counter].classList.remove('activeElem');
    counter++;
        if(counter === personsEl.length) {
            counter = 0;
        }
    activeEl[counter].classList.add('activeElem');
    personsEl[counter].style.display = 'block';
})

btnLeft.addEventListener('click', function (event) {
    console.log(counter);
    activeEl[counter].classList.remove('activeElem');
    personsEl[counter].style.display = 'none';
    if(counter === 0) {
        counter = personsEl.length;
    }
    counter--;
    activeEl[counter].classList.add('activeElem');
    personsEl[counter].style.display = 'block';
})





function persons(event) {
    for (let i = 0; i < personsEl.length; i++) {
        if (personsEl[i].dataset.n == event.target.dataset.n) {
            counter = i;
            personsEl[i].style.display = 'block';
            activeEl[i].classList.add('activeElem');
        } else {
            activeEl[i].classList.remove('activeElem');
            personsEl[i].style.display = 'none';
        }
    }
};
activeEl.forEach(items => {
    items.addEventListener('click', persons)
})











// document.querySelector('.carousel').addEventListener('click', persons);

// window.addEventListener('keydown', function (event) {
// const pos = document.querySelector('.activeElem');

//             if (event.code === 'ArrowRight') {
//             const nextX = +pos.dataset.xs + 1;
//             const selector = `.imgWho[data-xs="${nextX}"]`;
//             nextEl = document.querySelector(selector);
            
//                 if (nextEl) {
//                     pos.className =`imgWho`;
//                     nextEl.classList.add('activeElem');
//                 }
//         } else if (event.code === 'ArrowLeft') {
//             const nextX = +pos.dataset.xs - 1;
//             const selector = `.imgWho[data-xs="${nextX}"]`;
//             nextEl = document.querySelector(selector);
//                 if (nextEl) {
//                     pos.className =`imgWho`;
//                     nextEl.classList.add('activeElem')
//                 }

//    }
// }) 


// window.addEventListener('keydown', function (event) {
//     const pers = document.querySelector('.activePerson');
//          if (event.code === 'ArrowRight') {
//             const nextPer = +pers.dataset.x + 1;
//             const select = `.persons[data-x="${nextPer}"]`;
//             nextP = document.querySelector(select);
//                 if (nextP) {
//                     pers.className = `persons`;
//                     nextP.classList.add('activePerson');
//                 } 
//             }   else if (event.code === 'ArrowLeft') {
//                 const nextPer = +pers.dataset.x - 1;
//                 const select = `.persons[data-x="${nextPer}"]`;
//                 nextP = document.querySelector(select);
//                     if (nextP) {
//                         pers.className = `persons`;
//                         nextP.classList.add('activePerson');
//                     } 
//     }
// })





// btnRight.addEventListener('click', function (event) {
//     new KeyboardEvent("keydown", {
//         key: 'ArrowRight',
//         code: "ArrowRight",
//         keyCode: 39, 
//         bubbles: true,
//         cancelable: true,
//       })
// })


// var keyboardEvent = document.createEvent("KeyboardEvent");
// var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";

// keyboardEvent[initMethod](
//   "keydown", // event type: keydown, keyup, keypress
//   true,      // bubbles
//   true,      // cancelable
//   window,    // view: should be window
//   false,     // ctrlKey
//   false,     // altKey
//   false,     // shiftKey
//   false,     // metaKey
//   39,        // keyCode: unsigned long - the virtual key code, else 0
//   0          // charCode: unsigned long - the Unicode character associated with the depressed key, else 0
// );
// document.querySelector('.btnRight');

// const eventOne = document.createEvent('KeyboardEvent');

// eventOne.initKeyEvent('keypress', 'ArrowRight');

// btnRight.createEvent("KeyboardEvent").initKeyEvent('ArrowRight')

// // KeyboardEvent.initKeyEvent('ArrowRight')
