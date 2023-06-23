import React from 'react'

export const Card = ({title, id, body, clickHandler}) => {

  return (
    <div className='listWrapper'>
    <div className='listcard'>
    <div>
    <h5 className='listtitle'>{title}</h5>
    <p>{body.substring(0,50) + "..."}</p>
    </div>
    <div>
        <button onClick= {() => clickHandler(id)}>Show comments</button>
    </div>
    </div>
</div>
  )
}
