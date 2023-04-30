console.log("Hello World! Welcome to my portfolio.")

const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/AKfycby7ogGoNAinUdGEnCuToqavXSDfEa0jrJekIoRSTkDTEUYxrkTBUG4D1rap0yJmGHT2/exec'

  form.addEventListener('submit', e => {
     submitButton.disabled = true
     e.preventDefault()
     let requestBody = new FormData(form)
     fetch(scriptURL, { method: 'POST', body: requestBody})
       .then(response => {
          alert('Success!', response)
          submitButton.disabled = false
         })
       .catch(error => {
       alert('Error!', error.message)
         submitButton.disabled = false

       }
       )
  })
