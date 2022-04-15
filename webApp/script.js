


const scriptURL = 'https://script.google.com/macros/s/AKfycbwk1Y_wQScuQ7cbMj_zd3EsJUhCfUbu8GwPQvoWxMEYqhTexRv3k9BZjREuDe6w8lchQA/exec'
const postForm = document.forms['google-sheet-post']

postForm.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(postForm) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

const getForm = document.forms['google-sheet-get'];

getForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = new FormData(getForm).get("fname");
  fetch(scriptURL+"?name="+name, { method: "GET"})
    .then(response => (response.json()
      .then(data => {
        document.querySelector("#res").innerHTML = "<p>Last Name is "+data.lname+"</p>";
      })))
    .catch(error => console.log(error))
})


document.querySelectorAll(".toggle").forEach(
  (element) => {
    element.addEventListener("click", function () {
      document.querySelector("#saveform").classList.toggle("hidden")
      document.querySelector("#fetchform").classList.toggle("hidden")
    })
  }
)