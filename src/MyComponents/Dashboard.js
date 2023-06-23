import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
    const navigate = useNavigate()
  return (
    <div>
        please Login to continue to Dashboard
        <div>
            <button onClick={() => navigate('/login')}>Login</button>
        </div>
    </div>
    
  )
}
