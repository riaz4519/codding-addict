import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article class="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return <img alt="book_image" src="./images/book_1.jpg" />
}
const Title = () => <h2>Fourth Wing (The Empyrean, 1) </h2>
const Author = () => <h2>Rebecca Yarros</h2>

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
