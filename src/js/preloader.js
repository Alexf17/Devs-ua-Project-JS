

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


export function prelouderOn() {
  window.addEventListener('DOMContentLoaded', loader);
}

function loader(e) {
  
  setTimeout(() => {
    const preloaderRef = document.querySelector('.preloader');
    const precentsRef = document.querySelector('#precents');

    console.log(precentsRef);
    const mediaFiles = document.getElementsByClassName('film-item__img');
    let i = 0;
    // console.log(e)
    console.log(mediaFiles);
    
    Array.from(mediaFiles).forEach((el, index) => {
      el.onload = () => {
        i++
        
        precentsRef.innerHTML = ((i * 100) / mediaFiles.length).toFixed();

        if (i === mediaFiles.length) {
          precentsRef.innerHTML = 100;
          preloaderRef.classList.add('preloader--hide');
          
          window.removeEventListener('DOMContentLoaded', loader);
          // console.log("Cлушатель DOMContentLoaded c window снят!");
        }
      }
    
    })
  },100)

}

prelouderOn()





