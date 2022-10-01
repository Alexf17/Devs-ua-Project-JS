import { refs } from "./refs";

export function preloaderRefresh() {
  refs.preloaderEl.classList.remove('preloader--hide');
  setTimeout(() => {
    refs.bodyEl.scrollIntoView({ top: 0, behavior: 'smooth' });
  },100)
  // console.log("ЗАПУСК ПРЕЛОУДЕРА");
}

export function preloaderRefreshOFF() {
  const arrElements = Array.from(refs.imgElArr);
  // console.log(arrElements);
  
  if (arrElements.length === 0) {
      refs.preloaderEl.classList.add('preloader--hide');
  }
  
    arrElements.forEach((el, index) => {
      el.onload = () => {

        if (index === arrElements.length - 1) {
          refs.preloaderEl.classList.add('preloader--hide');
          // console.log("ВЫКЛ ПРЕЛОУДЕРА");
        }
        // console.log("мы молодцы")
      }
    });
}



function preloaderOn() {
  refs.preloaderEl.classList.remove('preloader--hide');
   window.addEventListener('load', onLoad);
  }
    
function  onLoad(e) {
    refs.preloaderEl.classList.add('preloader--hide');
  
    window.removeEventListener('load', onLoad);
    // console.log('C window слушатель успешно снят');
  }

preloaderOn();





// export class Preloader {
  
//   constructor() {
//     this.preloaderEl = document.querySelector('.preloader');
  
//   }

//   preloaderOn() {
//    window.addEventListener('load', this.onLoad);
//   }
    
//   onLoad(e) {
//     console.log(this.preloaderEl.classList);
//     this.preloaderEl.classList.add('preloader--hide');
//     // window.removeEventListener('load', onLoad);
//     // console.log('C window слушатель успешно снят');
//   }


// }

// const preloaderApp = new Preloader();
// console.log(preloaderApp);
// preloaderApp.preloaderOn()







//  class Preloader {

//   constructor() {
//     this.preloderEl = document.querySelector('#preloader');
//     this.precentsEl = document.querySelector('#precents');
//     this.dataLength = 20;
//     this.counter = 0;
// }

//   showPreloader() {
//     this.preloderEl.classList.remove('preloader--hide')
//   }
//   hidePreloader() {
//     this.preloderEl.classList.add('preloader--hide')
//   }
//   setCounter(dataLength) {
//     this.dataLength = dataLength;
//     console.log(dataLength)
//   }
//    precentsLoader() {
//      let inc = 100 / this.dataLength;

//      let timerId = setInterval(() => {
//        this.counter++
//        this.precentsEl.innerHTML = ((this.counter * 100) / this.dataLength).toFixed();

//        if (this.counter === this.dataLength) {
//          clearInterval(timerId);
//          this.hidePreloader();
//        }
//      }, 100)
    
//   }

// }



// window.addEventListener('load', (e) => {
//   // console.log("страничка загрузилась");
//   // const mediaFiles = document.querySelectorAll('img');
//   // console.log(mediaFiles.length);
//   // preloader.dataLength = mediaFiles.length;
//   preloader.precentsLoader()
  
// })


// export function prelouderOn() {
//   window.addEventListener('DOMContentLoaded', loader);
// }

// function loader(e) {
  
//   setTimeout(() => {
//     const preloaderRef = document.querySelector('.preloader');
//     const precentsRef = document.querySelector('#precents');

//     console.log(precentsRef);
//     const mediaFiles = document.querySelectorAll('film-item__img');
//     let i = 0;
//     // console.log(e)
//     console.log(mediaFiles);
    
//     Array.from(mediaFiles).forEach((el, index) => {
//       el.onload = () => {
//         i++
        
//         precentsRef.innerHTML = ((i * 100) / mediaFiles.length).toFixed();

//         if (i === mediaFiles.length) {
//           precentsRef.innerHTML = 100;
//           preloaderRef.classList.add('preloader--hide');
          
//           window.removeEventListener('DOMContentLoaded', loader);
//           // console.log("Cлушатель DOMContentLoaded c window снят!");
//         }
//       }
    
//     })
//   },200)

// }

// prelouderOn()





