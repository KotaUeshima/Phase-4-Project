import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Blog() {

  const [blog, setBlog] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    fetch(`/blogs/${id}`)
    .then(res => res.json())
    .then(setBlog)
  }, [])

  if(blog == null) return <div>Loading...</div>
  const {title, content, likes, dislikes, category} = blog

  return (
    <h2>
      {title}
    </h2>
  )
}

export default Blog