import React, { useState } from 'react'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

function DeleteBook() {
  const [loading,setLoading] = useState(false);
  const {id} = useParams();
  const navigate = useNavigate();
  const handleDeleteBook = () => {
    setLoading(true);
    axios.delete(`http://localhost:5555/booklist/${id}`)
    .then(() => {
      setLoading(false)
      navigate("/")
    })
    .catch((error) => {
      console.log(error)
      alert("An error occured")
    })
  }
  return (
    <div>
      <BackButton></BackButton>
      <h1 className='text-3xl my-4'>DeleteBook</h1>
      {loading?<Spinner/>:""}
      <div className=''>
        <h3 className='flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600] p-8 mx-auto'>Are you sure you want to delete book?</h3>
        <button className='p-4 bg-red-400 text-white m-8 w-full' onClick={handleDeleteBook}>Yes,delete it</button>
      </div>
    </div>
  )
}

export default DeleteBook