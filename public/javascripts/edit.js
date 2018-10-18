document.addEventListener('DOMContentLoaded', () => {
  // GET QUERY PARAM ID
  let urlParams = new URLSearchParams(window.location.search);
  let myParam = urlParams.get('id');
  // AXIOS GET FOR ID
  if (myParam) {
    axios.get(`https://andy-moviedb.herokuapp.com/movies/${myParam}`)
      .then((response) => {
        // handle success
        let data = response.data[0]
        // DOM DEFINITIONS
        let title = document.getElementById('title')
        let director = document.getElementById('director')
        let year = document.getElementById('year')
        let url = document.getElementById('posterUrl')
        let rating = document.getElementById('myRating')

        // FORM PLACEHOLDERS
        title.placeholder = data.title
        director.placeholder = data.director
        year.placeholder = data.year
        url.placeholder = data.posterUrl
        rating.placeholder = data.myRating

      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
  }

  // SUBMIT BUTTON
  let form = document.getElementById('create-report')
  form.addEventListener('submit', (ev) => {
    ev.preventDefault()

    // CREATE NEW MOVIE OBJ
    let postData = {}
    let formElements = ev.target.elements
    for (var i = 0; i < formElements.length; i++) {
      let inputName = formElements[i].name
      if (inputName && formElements[i].value) {
        postData[inputName] = formElements[i].value
      }
    }
    // AXIOS PATCH
    console.log(postData)
    axios.patch(`https://andy-moviedb.herokuapp.com/movies/${myParam}`, postData)
      .then((response) => {
        console.log(response)
        location.href = '../'
      })
      .catch((error) => {
        console.log(error)
      })
  })
})
