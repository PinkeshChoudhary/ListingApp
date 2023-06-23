import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { CommentCard } from './CommentCard'

const dialogStyle = {
    bottom: '0px',
    top: '0px',
    right: '0px',
    left: '0px',
    width: '100%',
    height: '100%',
    position: 'fixed',
    zIndex: '99',
    backgroundColor: 'rgb(0,0,0, 0.4)',
    borderRadius: '10px',
    minWidth: '40%'
  }
  
  const flexbox = {
    display: 'flex', alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
  
  const modelContent = {
    minWidth: 'fit-content',
    border: '1px solid grey',
    borderRadius: '10px',
    margin: 'auto',
    padding: '15px 25px',
    width: '70%',
    height: 'auto',
    backgroundColor: 'white',
    maxWidth : '40%',
    minHeight: '40vh'
  }
  const closeButton = {
    width: '30px',
    height: '30px',
    border: '1px solid rgb(215, 215, 280)',
    borderRadius: '50%',
    fontSize: 'x-large',
    textDecoration: 'none',
    marginLeft: 'auto'
  }

export default function Comments ({id, clickHandler}) {
     const[comments, setComments] = useState([])

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => {
            setComments(res.data)
        })
    },[])
  return (
    <div className="dialogstyle" style={dialogStyle}>

      <div className="flexbox" style={flexbox}>

        <div className='modelcontant' style={modelContent}>


          <div style={{ textAlign: 'right', paddingTop: '0px', display: 'flex', flexDirection: 'row' }}>
            <p style={{ fontSize: '22px', marginTop: '0' }}>Comments</p>

            <button style={closeButton} onClick={() => clickHandler(null)}>X</button>
          </div>
          <div>
          {comments.map(el => <CommentCard {...el} />)}
          </div>
        </div>
      </div>
    </div>
  )
}


