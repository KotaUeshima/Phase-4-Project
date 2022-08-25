import React, {useState} from 'react'
import './CreateBlog.css'
import {useNavigate} from 'react-router-dom'

import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

import {userState} from '../components/atoms.js'
import {useRecoilValue} from 'recoil'

function CreateBlog() {

      const user = useRecoilValue(userState)
      const defaultObj = {
        title: "",
        content: "",
        category: "",
        likes: 0,
        dislikes: 0,
        user_id: user.id,
      }
      const [formObj, setFormObj] = useState(defaultObj)
      const categories = ['NFL', 'NHL', 'MLB', 'NBA', 'Tennis', 'Boxing']
      let navigate = useNavigate()
    
      function handleChange(e){
        setFormObj(obj => ({...obj, [e.target.id]: e.target.value}))
      }

      function handleSelect(e){
        setFormObj(obj => ({...obj, category: e.target.value}))
      }

      function handleSubmit(e){
        e.preventDefault()
        fetch(`/blogs`,{
          method: "POST",
          headers: { "Content-Type": 'application/json'},
          body: JSON.stringify(formObj)
        })
        .then(res => res.json())
        .then(() => {
            setFormObj(defaultObj)
            navigate('/my_blogs')
        })
      }

      const backgroundStyle = {
        height: '85vh',
        backgroundColor: 'white',
        overflow: 'auto',
      }
    
      const pageStyle = {
        height: '85vh',
        backgroundColor: 'white',
        margin: '10vh',
        marginTop: '30px'
      }

      const array = categories.map(category => {
        return <MenuItem key={category} value={category}>{category}</MenuItem>
      })
    
      return (
        <Container style={backgroundStyle}>
          <Box style={pageStyle}>
            <form className="create__blog" onSubmit={handleSubmit}>
              <TextField
                label="Title"
                id='title'
                value={formObj.title}
                onChange={handleChange}
                placeholder="Enter Title"
                fullwidth
                required
              />
              <TextField
                label="Content"
                id='content'
                value={formObj.content}
                onChange={handleChange}
                placeholder="Enter Content"
                fullwidth
                multiline
                rows={12}
                required/>
              <TextField
                select
                label="Category"
                id="category"
                value={formObj.category}
                onChange={handleSelect}
              >
               {array}
              </TextField>
              <Button
                variant="contained"
                type="submit"
                className='login__submit'
                fullwidth
              >
              Post Blog
              </Button>
            </form>
          </Box>
        </Container>
      )
}

export default CreateBlog