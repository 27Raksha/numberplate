// document.addEventListener("DOMContentLoaded", function() {
//     const dropdown = document.getElementById('dropdown');
//     const logoutBtn = document.getElementById('logout');

//     // Toggle dropdown on click
//     dropdown.addEventListener('click', function() {
//         this.querySelector('.dropdown-content').classList.toggle('show');
//     });

//     // Logout functionality
//     logoutBtn.addEventListener('click', function(event) {
//         event.preventDefault();
//         // Perform logout operation here, such as redirecting to a logout endpoint
//         // window.location.href = '/logout';
//         console.log('Logged out');
//     });

//     // Close the dropdown if the user clicks outside of it
//     window.addEventListener('click', function(event) {
//         if (!event.target.closest('.dropdown')) {
//             const dropdowns = document.querySelectorAll('.dropdown-content');
//             dropdowns.forEach(function(dropdown) {
//                 if (dropdown.classList.contains('show')) {
//                     dropdown.classList.remove('show');
//                 }
//             });
//         }
//     });

//     // Fetch username from backend
//     fetchUsername();

//     function fetchUsername() {
//         // Simulated username retrieval from the backend
//         const username = "JohnDoe"; // Replace with actual username fetched from backend
//         document.getElementById('username').textContent = username;
//     }
// });

// // Function to handle file upload
// function handleFileUpload(event) {
//     const file = event.target.files[0];
//     // You can add further processing logic here, like displaying the file name or uploading it to a server
// }

// // Event listener for file input change
// document.getElementById('video-upload').addEventListener('change', handleFileUpload);

// // Function to handle upload button click
// function handleUploadButtonClick() {
//     document.getElementById('video-upload').click();
// }

// // Event listener for upload button click
// document.getElementById('upload-button').addEventListener('click', handleUploadButtonClick);

// // Function to handle option box click
// function handleOptionBoxClick(event) {
//     // Add logic here to handle the click event for each option box
// }

// // Get all option boxes and add event listener
// const optionBoxes = document.querySelectorAll('.option-box');
// optionBoxes.forEach(box => {
//     box.addEventListener('click', handleOptionBoxClick);
// });

// // Function to handle download button click
// function handleDownloadButtonClick() {
//     // Add logic here to download the numberplate excel file
// }

// // Event listener for download button click
// document.getElementById('download-excel').addEventListener('click', handleDownloadButtonClick);
