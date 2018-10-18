document.addEventListener('DOMContentLoaded', () => {
  // Get Query # => axios.get/movies/:id??? ?
  let urlParams = new URLSearchParams(window.location.search);
  let myParam = urlParams.get('id');
  // console.log(myParam)
  axios.get(`https://andy-moviedb.herokuapp.com/movies/${myParam}`)
    .then((response) => {
      // handle success
      console.log(response.data)

    })
    .catch((error) => {
      // handle error
      console.log(error);
    })


})
