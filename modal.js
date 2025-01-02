(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
      checkbox: document.getElementById("accept"),
      formSendBtn:document.getElementById("form_btn")
    };

    refs.formSendBtn.addEventListener("click", (event) => {
      event.preventDefault()
      if (!refs.checkbox.checked) {
        alert("Будь ласка, ознайомтесь з правилами договора.")
      } else {
        toggleModal()
      }
    })
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();