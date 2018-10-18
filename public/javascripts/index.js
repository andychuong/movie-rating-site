document.addEventListener('DOMContentLoaded', () => {
  axios.get('https://andy-moviedb.herokuapp.com/movies/')
    .then((response) => {
      // handle success
      let movies = document.getElementById('movieContainer')
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
        <span class= 'info'>My Rating:</span> ${response.data[i].myRating}`

        // LEFT CONTAINER
        let left = document.createElement('div')
        left.className= 'secondary-content'

        // VIEW SITE
        let link = `/view/?id=${response.data[i].id}`
        let view = document.createElement('a')
        view.href = link
        view.innerHTML = `<i class="material-icons">info_outline</i>`

        // EDIT
        let edit = document.createElement('a')
        edit.href=`/edit/?id=${response.data[i].id}`
        edit.innerHTML = `<i class="material-icons" data-id=${response.data[i].id}>edit</i>`
        edit.setAttribute('data-id', response.data[i].id)

        // DELETE
        let del = document.createElement('a')
        del.href="#"
        del.innerHTML = `<i class="material-icons" data-id=${response.data[i].id}>delete_forever</i>`
        del.setAttribute('data-id', response.data[i].id)
        del.addEventListener('click', (ev) => {
          ev.preventDefault()
          let recordId = ev.target.getAttribute('data-id')

          // DELETE THIS RECORD!
          axios.delete(`https://andy-moviedb.herokuapp.com/movies/${recordId}`)
            .then((response) => {
              console.log(response)
              ev.target.parentElement.parentElement.parentElement.remove()
            })
            .catch((err) => {
              console.log(err)
            })
        })

        // APPEND ELEMENTS
        li.appendChild(img)
        li.appendChild(title)
        li.appendChild(p)
        left.appendChild(view)
        left.appendChild(edit)
        left.appendChild(del)
        li.appendChild(left)
        // li.appendChild(edit)
        movies.appendChild(li)
      }
    })
    .catch((error) => {
      // handle error
      console.log(error);
    })


})
