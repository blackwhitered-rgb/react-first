import React from 'react'
import {useState, useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'
 

function Github() {

  const data = useLoaderData()

  console.log(data)

  //const [data, setState] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log(data)
  //     setState(data)
  //   })
  // }, [])
  return (
    <>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: {data.followers}
      </div>
      <img src={data.avatar_url} width={300} alt="" />
      <p>
        {data.bio}
      </p>
    </>
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  return response.json()
}