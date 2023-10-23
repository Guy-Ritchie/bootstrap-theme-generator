// $(document).ready(function () {
//     // Initialize modals
//     var myModal = new bootstrap.Modal(document.getElementById('myModal'));
// });

// $(document).ready(function () {
//     // Initialize popovers
//     var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
//     popoverTriggerList.map(function (popoverTriggerEl) {
//         return new bootstrap.Popover(popoverTriggerEl);
//     });

//     // Initialize tooltips
//     var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
//     tooltipTriggerList.map(function (tooltipTriggerEl) {
//         return new bootstrap.Tooltip(tooltipTriggerEl);
//     });
// });

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))