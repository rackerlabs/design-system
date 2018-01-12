/* jshint esversion: 6 */

//TODO: Create perm open attr.
//TODO: Create disabled attr.
//TODO: Create slide open/closed attr.
//TODO: Decide on overlay over content or shift content for slide open/closed.
//TODO: Set perm open and disabled for large breakpoints.
//TODO: Set slide open/closed attr for small breakpoints.

const supportsCustomElementsV1 = 'customElements' in window;

function loadScript(src) {
 return new Promise(function(resolve, reject) {
   const script = document.createElement('script');
   script.src = src;
   script.onload = resolve;
   script.onerror = reject;
   document.head.appendChild(script);
 });
}

// Lazy load the polyfill if necessary.
if (!supportsCustomElementsV1) {
  console.log("no custom elements");
  loadScript('https://rawgit.com/webcomponents/custom-elements/master/custom-elements.min.js').then(e => {
    console.log("Polyfill loaded.");
    var slideButton = document.getElementById('fakeHxSlide__button');

    class FakeHXSlideNav extends HTMLElement {
      constructor() {
        super();
        var navSection = this.querySelector('nav');
        slideButton.addEventListener('click', e => {
          this.classList.toggle("m-slideIn");
          this.classList.toggle("m-slideOut");
          slideButton.classList.toggle("b-slideOut");
          slideButton.classList.toggle("b-slideIn");
        });
      }
    }

    customElements.define('fake-hx-slide-nav', FakeHXSlideNav);
    customElements.whenDefined('fake-hx-slide-nav').then(() => {
      console.log("loaded");
    });
  });
} else {
  console.log("custom elements supported");
  var slideButton = document.getElementById('fakeHxSlide__button');

  class FakeHXSlideNav extends HTMLElement {
    constructor() {
      super();
      var navSection = this.querySelector('nav');
      slideButton.addEventListener('click', e => {
        this.classList.toggle("m-slideIn");
        this.classList.toggle("m-slideOut");
        slideButton.classList.toggle("b-slideOut");
        slideButton.classList.toggle("b-slideIn");
      });
    }
  }

  customElements.define('fake-hx-slide-nav', FakeHXSlideNav);
  customElements.whenDefined('fake-hx-slide-nav').then(() => {
    console.log("loaded");
  });
}
