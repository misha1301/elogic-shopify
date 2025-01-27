class ButtonWrapper extends HTMLElement {
  constructor() {
    super();
    this.activateButton = null;
    this.hiddenModal = null;
    this.productLink = this.getAttribute("product-link") || "#";
    this.activateButton = this.querySelector(".activate-button");
    this.hiddenModal = this.querySelector(".hidden-modal");
  }

  connectedCallback() {
    this.activateButton.addEventListener("click", this.toggleBuyNow.bind(this));
  }

  disconnectedCallback() {
    this.activateButton.removeEventListener("click", this.toggleBuyNow.bind(this));
  }

  toggleBuyNow() {
    if (window.innerWidth <= 989) {
      window.location.href = this.productLink;
    } else {
      if(!this.hiddenModal.classList.contains("visible")){
        const openedModals = document.querySelectorAll(".hidden-modal.visible");
        if(openedModals){
          openedModals.forEach(modal => {
            modal.classList.remove("visible");
          })
        }
      }
      this.hiddenModal.classList.toggle("visible");
    }
  }
}

customElements.define("button-wrapper", ButtonWrapper);