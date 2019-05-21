'use strict'
import { a11yTemplate } from './a11yTemplate';
console.log('in web');

const template = document.createElement('template');
template.innerHTML = a11yTemplate;

class AccMenu extends HTMLElement {

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ 'mode': 'open' });
    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$menu = this._shadowRoot.querySelector('ul');

    this.$accButton = this._shadowRoot.querySelector('button');
    this.$accButton.addEventListener('click', () => this._toggleMenu());

    this.$desaturateBtn = this._shadowRoot.querySelector('.desaturate').children[0];
    this.$desaturateBtn.addEventListener('click', this._toggleDesaturate);

    this.$contrastBtn = this._shadowRoot.querySelector('.contrast').children[0];
    this.$contrastBtn.addEventListener('click', this._toggleContrast);

    this.$keyboardBtn = this._shadowRoot.querySelector('.keyboard').children[0];
    this.$keyboardBtn.addEventListener('click', this._toggleKeyboard);

    this.$cursorBtn = this._shadowRoot.querySelector('.cursor').children[0];
    this.$cursorBtn.addEventListener('click', () => this._toggleCursor(this));
  }

  _toggleMenu() {
    this.$menu.classList.toggle('hide');
  }

  _toggleDesaturate() {
    document.documentElement.classList.toggle('acc-s5');
  }

  _toggleContrast() {
    this.classList.toggle('heigher');
    document.documentElement.classList.toggle('acc-s3-1');
  }

  _toggleKeyboard() {
    const elTypes = ['A', 'INPUT', 'BUTTON'];
    elTypes.reduce((acc, elType) => acc.concat(Array.from(document.body.querySelectorAll(elType))), [])
      .map(el => {
        el.tabIndex = 0;
        el.classList.toggle('accOutline');
      });
  }

  _toggleCursor() {
    document.documentElement.classList.toggle('big-cursor');
  }

}

window.customElements.define('acc-menu', AccMenu);
