document.addEventListener('DOMContentLoaded', () => {
  // GET QUERY PARAM ID
  let urlParams = new URLSearchParams(window.location.search);
  let myParam = urlParams.get('id');
  // AXIOS GET FOR ID
  axios.get(`https://andy-moviedb.herokuapp.com/movies/${myParam}`)
    .then((response) => {
      // handle success
      let data = response.data[0]
      let posterDiv = document.getElementById('imgContainer')
      let infoDiv = document.getElementById('infoContainer')

      // TITLE
      let titleText = document.createElement('h3')
      titleText.innerText = data.title

      // IMG
      let img = document.createElement('img')
      img.src = data.posterUrl
      img.alt = `${data.title} poster`
      img.className = "posterImg"

      // DIRECTOR
      let directorHeader = document.createElement('h4')
      directorHeader.innerText = "Director:"
      let director = document.createElement('span')
      director.innerText = "  " + data.director

      // YEAR
      let yearHeader = document.createElement('h4')
      yearHeader.innerText = "Year:"
      let year = document.createElement('span')
      year.innerText = "  " + data.year

      // APPEND ELEMENTS
      posterDiv.appendChild(img)
      infoDiv.appendChild(titleText)
      infoDiv.appendChild(directorHeader)
      infoDiv.appendChild(director)
      infoDiv.appendChild(yearHeader)
      infoDiv.appendChild(year)

    })
    .catch((error) => {
      // handle error
      console.log(error);
    })

})


//https://andy-moviedb.herokuapp.com/view/?id=1
