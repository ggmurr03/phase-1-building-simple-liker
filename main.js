// // Defining text characters for the empty and full hearts for you to use later.
// const EMPTY_HEART = '♡'
// const FULL_HEART = '♥'

// // Your JavaScript code goes here!
// const liker = () => {
//   const heartIcons = document.querySelectorAll(".like-glyph")
//   heartIcons.forEach(addEventListener("click", handleHeart))
//   function handleHeart(event) {
//     const heart = event.target
//     mimicServerCall()
//     .then(() =>{
//       if (heart.innerText === FULL_HEART){
//         heart.innerText = EMPTY_HEART
//         heart.classList.remover(activated-heart)
//       }
//       else {
//         heart.innerText = FULL_HEART
//         heart.classList.remove("activated-heart")
//       }
//     })
//     .catch(error =>{
//       const errorModal = document.getElementById("error-modal")
//       errorModal.classList.remove("hidden")
//       errorModal.querySelector("#modal-message").innerText = error

//       setTimeout(()=>(errorModal.classList.add('hidden');
//     }, 3000)
    
//   }

    

    
  
  


// document.addEventListener('DOMContentLoaded', liker) 
// //------------------------------------------------------------------------------
// // Don't change the code below: this function mocks the server response
// //------------------------------------------------------------------------------

// function mimicServerCall(url="http://mimicServer.example.com", config={}) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       let isRandomFailure = Math.random() < .2
//       if (isRandomFailure) {
//         reject("Random server error. Try again.");
//       } else {
//         resolve("Pretend remote server notified of action!");
//       }
//     }, 300);
//   });
// }
