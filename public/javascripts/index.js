document.addEventListener('DOMContentLoaded', () => {
  axios.get('https://andy-moviedb.herokuapp.com/movies/')
    .then((response) => {
      // handle success
      // console.log(response.data);
      let movies = document.getElementById('movieContainer')
      // console.log(movies);
      for (var i = 0; i < response.data.length; i++) {
        // COLLECTION ITEM
        let li = document.createElement('li')
        li.className = "collection-item avatar"

        // IMAGE
        let img = document.createElement('img')
        img.src = response.data[i].posterUrl
        img.alt = `${response.data[i].title} poster`
        img.className = "circle"

        // TITLE
        let title = document.createElement('span')
        title.className = "title"
        title.innerText = response.data[i].title

        // PARAGRAPH
        let p = document.createElement('p')
        p.innerHTML = `
        <span class= 'info'>Director:</span> ${response.data[i].director}<br>
        <span class= 'info'>Year:</span> ${response.data[i].year}<br>
        <span class= 'info'>My Rating:</span> ${response.data[i].myRating}
      `

        // DELETE
        let del = document.createElement('a')
        del.href="#"
        del.className = "secondary-content"
        del.innerHTML = `<i class="material-icons" data-id=${response.data[i].id}>delete_forever</i>`
        del.setAttribute('data-id', response.data[i].id)
        del.addEventListener('click', (ev) => {
          ev.preventDefault()
          // console.log(ev.target.getAttribute('data-id'))
          let recordId = ev.target.getAttribute('data-id')
          // console.log(ev.target.parentElement.parentElement)

          console.log("recordId: " + recordId)
          // DELETE THIS RECORD!
          axios.delete(`https://andy-moviedb.herokuapp.com/movies/${recordId}`)
            .then((response) => {
              console.log(response)
              ev.target.parentElement.parentElement.remove()
            })
            .catch((err) => {
              console.log(err)
            })
        })

        // APPEND ELEMENTS
        li.appendChild(img)
        li.appendChild(title)
        li.appendChild(p)
        li.appendChild(del)
        movies.appendChild(li)
      }
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })


})
