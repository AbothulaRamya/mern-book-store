import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Addbook() {
  const navigate = useNavigate()
  let userId = localStorage.getItem("userId")
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  function addBook(e) {
    alert()
    e.preventDefault()
    const newBook = { userId, title, author, price, description, imageUrl }
    console.log(newBook)
    axios.post("http://localhost:5000/api/book/add", newBook)
      .then((res) => {
        console.log(res)
        if (res.status === 201) {
          alert("Book added successfully")
          navigate("/")
        }
      })
  }

  return (
    <div className="container mt-5">

      <form className="row g-3" onSubmit={addBook}>
        <div className="col-12 text-center">
          <h1>Add new Book</h1>
        </div>
        <div className="col-md-6">
          <label htmlfor="inputTitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="inputTitle" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlfor="inputAuthor" className="form-label">Author</label>
          <input type="text" className="form-control" id="inputAuthor" onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlfor="inputPrice" className="form-label">Price</label>
          <input type="text" className="form-control" id="inputPrice" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlfor="inputDescription" className="form-label">Description</label>
          <input type="text" className="form-control" id="inputDescription" onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label htmlfor="inputImageUrl" className="form-label">ImageUrl</label>
          <input type="text" className="form-control" id="inputImageUrl" onChange={(e) => setImageUrl(e.target.value)} />
        </div>


        <div className="col-12">
          <button className="btn btn-primary">Add books</button>
        </div>
      </form>

    </div>
  )
}