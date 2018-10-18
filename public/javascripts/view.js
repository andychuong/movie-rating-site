document.addEventListener('DOMContentLoaded', () => {
  // Get Query # => axios.get/movies/:id??? ?
  let urlParams = new URLSearchParams(window.location.search);
  let myParam = urlParams.get('id');
  // console.log(myParam)
  axios.get(`https://andy-moviedb.herokuapp.com/movies/${myParam}`)
    .then((response) => {
      // handle success
      // console.log(response.data)

      let movies = document.getElementById('movieContainer')
      let img = document.createElement('img')
      img.src = response.data[0].posterUrl
      console.log(response.data[0].posterUrl)
      img.alt = `${response.data[0].title} poster`
      movies.appendChild(img)

    })
    .catch((error) => {
      // handle error
      console.log(error);
    })


})


//https://andy-moviedb.herokuapp.com/view/?id=1
