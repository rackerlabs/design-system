/* jshint esversion: 6 */

//TODO: Create perm open attr.
//TODO: Create disabled attr.
//TODO: Create slide open/closed attr.
//TODO: Decide on overlay over content or shift content for slide open/closed.
//TODO: Set perm open and disabled for large breakpoints.
//TODO: Set slide open/closed attr for small breakpoints.

var slideButton = document.getElementsByClassName('fakeHxSlide__button');

class FakeHXSlideNav extends HTMLElement {
  static $define () {
    customElements.define(this.is, this);
  }
  // A getter/setter for an open property.
  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    // Reflect the value of the open property as an HTML attribute.
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
    this.toggleDrawer();
  }

  // A getter/setter for a disabled property.
  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(val) {
    // Reflect the value of the disabled property as an HTML attribute.
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  // Can define constructor arguments if you wish.
  constructor() {
    // If you define a ctor, always call super() first!
    // This is specific to CE and required by the spec.
    super();

    // Setup a click listener on <app-drawer> itself.
    this.addEventListener('click', e => {
      // Don't toggle the drawer if it's disabled.
      if (this.disabled) {
        return;
      }
      this.toggleDrawer();
    });
  }

  // connectedCallback() {
  //   if
  // }

  // disconnectedCallback() {
  //   ...
  // }
  //
  // Only called for the disabled and open attributes due to observedAttributes
  attributeChangedCallback(name, oldValue, newValue) {
    // When the drawer is disabled, update keyboard/screen reader behavior.
    if (this.disabled) {
      this.setAttribute('tabindex', '-1');
      this.setAttribute('aria-disabled', 'true');
    } else {
      this.setAttribute('tabindex', '0');
      this.setAttribute('aria-disabled', 'false');
    }
    // TODO: also react to the open attribute changing.
  }

  toggleDrawer() {
    console.log("Element was clicked!");
    if (this.open){
      this.setAttribute('hidden', 'false');
      slideButton.setAttribute('hidden', 'true');
    } else {
      this.setAttribute('hidden', 'true');
      slideButton.setAttribute('hidden', 'false');
    }
  }
}

customElements.define('fake-hx-slide-nav', FakeHXSlideNav);

// slideButton.onclick(this.open);
//
// customElements.define('x-foo-with-markup', class extends HTMLElement {
//   constructor() {
//     // If you define a ctor, always call super() first!
//     // This is specific to CE and required by the spec.
//     super();
//   }
//   connectedCallback() {
//     this.innerHTML = "<b>I'm an x-foo-with-markup!</b>";
//     console.log('element called');
//   }
// });
