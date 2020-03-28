const ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
  }


  // PART : PORTFOLIO
  const PORTFOLIO = document.querySelector('.project-wrapper');

  function randomFunction(n, m) {
    return Math.floor(Math.random() * (m - n + 1)) +n;
  }

  function makeRandomImages(event) {
    const element = event.target;
  
    if (element.className.includes('tag_bordered') && !element.className.includes('active')) {
      const imagesList = [...PORTFOLIO.querySelectorAll('.project-image')];
      let lengthList = imagesList.length;

      while (lengthList > 0) {
        let randomIndex = randomFunction(0, lengthList - 1);

        PORTFOLIO.append(imagesList[randomIndex]);
        imagesList.splice(randomIndex, 1);
        lengthList--;
      }
    }
  }

const navigateSetActivity = () => {
  const navigationBlock = document.querySelector('.navigation'),
        navigationItemsList = navigationBlock.querySelectorAll('.navigation__link');

  const clearActivity = () => {
    [...navigationItemsList].forEach(element => {
      element.classList.remove('navigation__link--active');
    })
  };

  navigationBlock.addEventListener('click', (event) => {
    const target = event.target;

    if (target.classList.contains('navigation__link')) {
      clearActivity();
      target.classList.add('navigation__link--active');
    }
  });
}


const sliderGenerator = () => {
  const slider = document.querySelector('.slider'),
        imageSection = slider.querySelectorAll('.image__phone'),
        classColorScreen = ['image__phone--yellow', 'image__phone--blue'];
  
  const createNewPhons = () => {
    [...imageSection].forEach(element => {
      element.classList.remove('image__phone--yellow', 'image__phone--blue');
      element.classList.add(classColorScreen[Math.floor(Math.random() * 2)]);
    })
  };
  
  slider.addEventListener('click', (event) => {
    const target = event.target.closest('.slider__button');

    if (target) {
      createNewPhons();
    }
  });
}


ready(() => { 
  navigateSetActivity();
  sliderGenerator();
})