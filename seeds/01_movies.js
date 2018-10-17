exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function() {
      // Inserts seed entries
      return knex('movies').insert([
        {
          id: 1,
          title: "Harry Potter and the Sorcerer's Stone",
          director: "Chris Columbus",
          year: 2001,
          myRating: 4,
          posterUrl: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg"
        },
        {
          id: 2,
          title: "Harry Potter and the Chamber of Secrets",
          director: "Chris Columbus",
          year: 2002,
          myRating: 4,
          posterUrl: "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          id: 3,
          title: "Harry Potter and the Prisoner of Azkaban",
          director: "Chris Columbus",
          year: 2004,
          myRating: 4,
          posterUrl: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          id: 4,
          title: "Harry Potter and the Goblet of Fire",
          director: "Mike Newell",
          year: 2005,
          myRating: 4,
          posterUrl: "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          id: 5,
          title: "Harry Potter and the Order of the Pheonix",
          director: "	David Yates",
          year: 2007,
          myRating: 4,
          posterUrl: "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          id: 6,
          title: "Harry Potter and the Half-Blood Prince",
          director: "	David Yates",
          year: 2009,
          myRating: 4,
          posterUrl: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          id: 7,
          title: "Harry Potter and the Deathly Hallows: Part 1",
          director: "	David Yates",
          year: 2010,
          myRating: 4,
          posterUrl: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          id: 8,
          title: "Harry Potter and the Deathly Hallows: Part 2",
          director: "	David Yates",
          year: 2011,
          myRating: 4,
          posterUrl: "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          id: 9,
          title: "Toy Story",
          director: "John Lasseter",
          year: 1995,
          myRating: 5,
          posterUrl: "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          id: 10,
          title: "Toy Story 2",
          director: "John Lasseter",
          year: 1999,
          myRating: 5,
          posterUrl: "https://m.media-amazon.com/images/M/MV5BMWM5ZDcxMTYtNTEyNS00MDRkLWI3YTItNThmMGExMWY4NDIwXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg"
        },
        {
          id: 11,
          title: "Toy Story 3",
          director: "John Lasseter",
          year: 2010,
          myRating: 5,
          posterUrl: "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_UY268_CR3,0,182,268_AL_.jpg"
        },
      ]);
    })
    .then( () => {
      return knex.raw(
        `SELECT setval('movies_id_seq', (SELECT MAX(id) FROM movies));`)
    })
};
