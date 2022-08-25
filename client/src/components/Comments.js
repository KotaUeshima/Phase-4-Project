import React, {useState, useEffect} from 'react'

import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';



function Comments({id, user_id}) {
    const [comment, setComment] = useState("")
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`/comments/${id}`)
        .then(res => res.json())
        .then(setComments)
    },[])

    function handleChange(e){
        setComment(e.target.value)
    }

    function createComment(){
        fetch('/comments', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                content: comment,
                blog_id: id,
                user_id: user_id
            })
        })
        .then(res => res.json())
        .then(data => {
            setComment("")
            setComments([...comments, data])
        })
    }

  return (
    <>
        <Grid item xs={11}>
            <TextField
            style={{width: "60vw"}}
            value={comment}
            onChange={handleChange}
            />
        </Grid>
        <Grid item xs={1}>
            <Button
            variant="contained"
            onClick={createComment}
            >
            Comment
            </Button>
        </Grid>
        <List>
        {comments.map(comment => {
        return <>
           <ListItem>
                <ListItemAvatar>
                    <Avatar>{comment.user.username.substring(0,1)}</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={comment.content}
                />
            </ListItem>
            <Divider variant="inset" component="li" />
         </>
        })}
        </List>
    </>
  )
}

export default Comments