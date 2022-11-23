const modalHandler = document.querySelectorAll(".project")
const modal = document.querySelectorAll(".modal_wrapper")
const closeModal = document.querySelectorAll(".close")

modalHandler.forEach((item, i) => {

    item.addEventListener("click", () => {

        if (!modal[i].classList.contains("active")) {
            modal[i].classList.add("active")
            document.body.classList.add("modal_active")
        }
    })
})

closeModal.forEach((item, i) => {

    item.addEventListener("click", () => {

        modal[i].classList.remove("active")
        document.body.classList.remove("modal_active")
    })
})