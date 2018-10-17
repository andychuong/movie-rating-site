document.addEventListener('DOMContentLoaded', () => {
  handleFormSubmit()
  function handleFormSubmit() {
    let form = document.getElementById('create-report')
    form.addEventListener('submit', (ev) => {
      ev.preventDefault()

      // grab all values from the form
      let postData = {}
      let formElements = ev.target.elements
      console.log(formElements)

      for (var i = 0; i < formElements.length; i++) {
        let inputName = formElements[i].name
        if (inputName && formElements[i].value) {
          postData[inputName] = formElements[i].value
        }
      }

      console.log('postData', postData);

      axios.post('https://andy-moviedb.herokuapp.com/movies/', postData)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }
})

// http POST https://andy-moviedb.herokuapp.com/movies/ title="Can You Forgive Me" year=2019 director="Marielle Heller" posterUrl='https://m.media-amazon.com/images/M/MV5BMjQzMzEzNDU2NV5BMl5BanBnXkFtZTgwMzQ4NTUwNTM@._V1_UX182_CR0,0,182,268_AL_.jpg' myRating=7
