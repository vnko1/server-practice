const BASE_URL = 'http://localhost:3000/books/';

// !GET;
// function fetchBooks(id = '') {
//   fetch(`${BASE_URL}/${id}`)
//     .then(resp => resp.json())
//     .then(console.log);
// }

// DELETE;

// function deleteBook(id) {
//   const options = {
//     method: 'DELETE',
//   };
//   fetch(`${BASE_URL}${id}`, options)
//     .then(resp => resp.json())
//     .then(console.log)
//     .catch(console.log);
// }

// !POST

// const newBook = {
//   title: 'Тестовая книга по HTML',
//   author: 'Me',
//   genres: ['JS'],
//   rating: 100,
// };

// function addBook(newBook) {
//   const options = {
//     method: 'POST',
//     body: JSON.stringify(newBook),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   fetch(`${BASE_URL}`, options)
//     .then(resp => resp.json())
//     .then(console.log)
//     .catch(console.log);
// }

// PATCH

// const book = { title: 'New JS books', rating: 1000 };

// function updateBook(bookId, newData) {
//   const options = {
//     method: 'PATCH',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(newData),
//   };
//   fetch(`${BASE_URL}${bookId}`, options)
//     .then(resp => resp.json())
//     .then(console.log)
//     .catch(console.log);
// }
