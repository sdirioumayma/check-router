import React from 'react'
import { movies } from './Movies'
import {  Link, useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'


function Trailer() {
    const {id} = useParams()
    const movie= movies.find(movie=> movie.id===Number(id))

  return (
    <div style={{textAlign:"center",padding:"50px"}}>
        <div>
        <iframe width="560" 
        height="315" 
        src={movie.trailer}
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen></iframe>
        <p>{movie.description}</p>
        
        </div>
        <Link to={'/'}>
        <Button> back </Button>
        </Link>
        
    </div>
  )
}

export default Trailer