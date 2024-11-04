// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const liker = () => {
  const heartIcons = document.querySelectorAll(".like-glyph")
  heartIcons.forEach(addEventListener("click", handleHeart))
  function handleHeart(event) {
    const heart = event.target
    mimicServerCall()
    .then(() =>{
      if (heart.innerText === FULL_HEART){
        heart.innerText = EMPTY_HEART
        heart.classList.remover(activated-heart)
      }
      else {
        heart.innerText = FULL_HEART
        heart.classList.remove("activated-heart")
      }
    }

    )
  }
  
 

  fetch(`http://localhost:3000/movies/${input.value}`)
  .then((response)=>response.json())
  .then((data)=>{
      const title = document.querySelector("section#movieDetails h4");
      const summary = document.querySelector("section#movieDetails p");

      title.innerText = data.title;
      summary.innerText = data.summary;
  })


})

}

document.addEventListener('DOMContentLoaded', liker);




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
