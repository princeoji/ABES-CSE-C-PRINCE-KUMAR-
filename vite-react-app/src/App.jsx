
import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const books = [
  {
    id: 1,
    title: 'Physics',
    price: '800',
    img: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1b0f3e3a2a6f7df6c9f7a7b4a5f8b9d1'
  },
  {
    id: 2,
    title: 'Math',
    price: '1200',
    img: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=3e2b6f8d8d3f2b2f3b4d5c6a7e8f9a0b'
  },
  {
    id: 3,
    title: 'Chemistry',
    price: '1000',
    img: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5b6e7c8d9f0a1b2c3d4e5f6a7b8c9d0e'
  }
]

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">My Bookstore</a>
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="books-grid">
          {books.map((b) => (
            <div className="book-card" key={b.id}>
              <div className="cover">
                <img src={b.img} alt={b.title} />
              </div>
              <div className="meta">
                <h3>Title:{b.title}</h3>
                <p className="price">Price:{b.price}</p>
              </div>
              <div className="actions">
                <button className="btn-square">◻</button>
                <button className="btn-square">◻</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
