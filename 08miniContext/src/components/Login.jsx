import React, {useContext, useState} from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input 
        className='block my-3'
        type="text" 
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder='UserName'
        />
        {" "}
        <input 
        className='block mb-2'
        type="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='PassWord'
        />
        <button 
        className='bg-blue-300 p-1 rounded-sm text-white'
        type='submit' 
        onClick={handleSubmit}
        >
            Submit
        </button>
    </div>
  )
}

export default Login
