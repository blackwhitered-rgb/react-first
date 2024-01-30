import React from 'react'

function Contact() {
  return (
    <div className="mx-auto items-center  h-screen w-full max-w-7xl mb-4">
        <h2 className='text-center text-3xl text-red-600 mb-4 font-extrabold'>Contact Us</h2>
        <form action="">
            <div className='flex flex-row  space-between hawdow-lg bg-transparent mb-4'>
                <div className='w-1/2 pr-2'>
                    <label htmlFor="username">First Name:</label>
                    <input type="text" 
                    className='shawdow-sm 
                    bg-gray-50 border 
                    border-gray-300 
                    text-gray-900
                    text-sm rounded-lg 
                    block w-full p-2.5'
                    placeholder='Enter First Name'
                    required
                    />
                </div>
                <div className='w-1/2 pl-2'>
                    <label htmlFor="username">Last Name:</label>
                    <input type="text" 
                    className='shawdow-sm 
                    bg-gray-50 border 
                    border-gray-300 
                    text-gray-900
                    text-sm rounded-lg 
                    block w-full p-2.5'
                    placeholder='Enter Last Name'
                    required
                    />
                </div>
            </div>
            <div>
                <label htmlFor="email">Your Email</label>
                <input type="text" 
                    className='shawdow-sm 
                    bg-gray-50 border 
                    border-gray-300 
                    text-gray-900
                    text-sm rounded-lg 
                    block w-full p-2.5'
                    placeholder='Enter Email'
                    required
                    />
            </div>
            <div>
                <label htmlFor="subject">Your Email</label>
                <input type="text" 
                    className='shawdow-sm 
                    bg-gray-50 border 
                    border-gray-300 
                    text-gray-900
                    text-sm rounded-lg 
                    block w-full p-2.5'
                    placeholder='Enter Subject'
                    required
                    />
            </div>
            <div>
                <label htmlFor="messages">Your Mesages</label>
                <textarea rows="6"
                className='w-full block my-2 
                text-left text-gray-900 
                bg-gray-50 rounded-lg
                shawdow-sm border border-gray-300'
                placeholder='Query/suggestions...'
                ></textarea>
            </div>
            <div>
                <button type='submit'
                className=' block mt-2 p-2 float-right
                text-white rounded-lg
                border-green-600 bg-green-600 hover:scale-105'
                >Send Message</button>
            </div>
        </form>
    </div>
  )
}

export default Contact