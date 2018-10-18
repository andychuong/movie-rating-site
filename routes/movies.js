const express = require('express')
const router = express.Router()
const knex = require('../knex')

// READ ALL records for this table
router.get('/', (req, res, next) => {
  // res.send('ALL RECORDS')
  knex('movies')
    .then((records) => {
      res.send(records)
    })
    .catch((err) => {
      next(err)
    })
})

// READ ONE record for this table
router.get('/:id', (req, res, next) => {
  knex('movies')
    .where('id', req.params.id)
    .then((records) => {
      res.send(records)
    })
    .catch((err) => {
      next(err)
    })
})

// CREATE ONE record for this table
router.post('/', (req, res, next) => {
  let newMovie = {
    title: req.body.title,
    director: req.body.director,
    year: req.body.year,
    myRating: req.body.myRating,
    posterUrl: req.body.posterUrl
  }

  knex('movies')
    .insert(newMovie)
    .returning('*')
    .then((insertedMovie) => {
      res.send(insertedMovie)
    })
    .catch((err) => {
      next(err)
    })
})

// UPDATE ONE record for this table

router.patch('/:id', (req, res, next) => {

  // Using the given id, look up if that record actually exists
  // req.params.id

  knex('movies')
    .where('id', req.params.id)
    .then((results) => {
      console.log('record', results);
      // If found, go ahead and update it
      if (results.length > 0) {
        // all good, it was found-- update it
        let updatedMovie = results[0]

        if (req.body.title) {
          updatedRecord.title = req.body.title
        }
        if (req.body.director) {
          updatedRecord.director = req.body.director
        }
        if (req.body.year) {
          updatedRecord.year = req.body.year
        }
        if (req.body.myRating) {
          updatedRecord.myRating = req.body.myRating
        }
        if (req.body.posterUrl) {
          updatedRecord.posterUrl = req.body.posterUrl
        }

        // UPDATE the record in the DB
        knex('movies')
          .update(updatedMovie)
          .where('id', req.params.id)
          .returning('*')
          .then((resUpdate) => {

            // Send back the newly updated record object
            res.send(resUpdate)
          })

      } else {
        throw new Error('NOT FOUND.')
      }
    })
    .catch((err) => {
      next(err)
    })
})


// DELETE ONE record for this table
router.delete('/:id', (req, res, next) => {
  // lookup or verify that the record specified by the given id, actually exists
  // req.params.id
  knex('movies')
    .where('id', req.params.id)
    .then((theMovies) => {
      // if it exists, delete it
      if (theMovies.length > 0) {
        // delete it
        knex('movies')
          .del()
          .where('id', req.params.id)
          .returning('*')
          .then((result) => {
            res.send(result[0])
          })
      } else {
        throw new Error(`Can't delete what does not exist`)
      }
    })
    .catch((err) => {
      next(err)
    })
})

module.exports = router
