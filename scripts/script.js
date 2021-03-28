// Function menu hamburuger
const Modal = {
    open() {
        // Add modal
        // Add class active modal
        document
            .querySelector('.nav__modal')
            .classList.add('active')
    },
    close() {
        // Close modal
        // Remove class active modal
        document
            .querySelector('.nav__modal')
            .classList.remove('active')
    }
}