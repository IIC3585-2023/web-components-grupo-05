const template = document.createElement('template');
template.innerHTML = `
<style>
::slotted(div) {
    margin-left: 2em;
}
div {
    padding: 0.5em;
    background-color: rgba(50,100,200,0.15);
    border-radius: 5px;
    margin-bottom: 0.5em;
}
button {
    background-color: transparent;
    border: none;
    border-radius: 5px;
}
button:hover {
    cursor: pointer;
    background-color: rgba(50,100,200,0.25);
} 
</style>
<div><button>v</button><span></span><slot></slot></div>
`;
customElements.define('tree-item', class extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.open = false;
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const slotToHide = this.shadowRoot.querySelector('slot');
    const prevDisplay = slotToHide.style.display;
    const button = this.shadowRoot.querySelector('button');
    const span = this.shadowRoot.querySelector('span');
    span.textContent = this.shadowRoot.querySelector('slot').assignedNodes()[0].textContent;
    const prevDisplaySpan = span.style.display;
    if (this.shadowRoot.querySelector('slot').assignedNodes().length == 1) {
      button.style.display = 'none';
    }
    slotToHide.style.display = 'none';
    button.textContent = '>';

    button.addEventListener('click', () => {
      if (this.open) {
        slotToHide.style.display = 'none';
        button.textContent = '>';
        span.style.display = prevDisplaySpan;
      }
      else {
        slotToHide.style.display = prevDisplay;
        button.textContent = 'v';
        span.style.display = 'none';
      }
      this.open = !this.open;
    });
  }
});
