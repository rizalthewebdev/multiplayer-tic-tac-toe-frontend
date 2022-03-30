import React from 'react'

const Input = ({name, type, label, setValue, value}) => {
  return (
    <div className='relative w-64'>
        <input 
          type="text" 
          name="name" 
          className='peer w-full px-1 py-1 bg-transparent focus:outline-none border-b-2 border-gray-500/50 focus:border-fuchsia-600 desc placeholder:text-transparent' 
          placeholder='Name' 
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <label 
          htmlFor="name" 
          className='absolute left-1 -top-4 text-sm text-fuchsia-500 peer-placeholder-shown:top-1.5 peer-placeholder-shown:left-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 desc transition-all duration-200 peer-focus:text-fuchsia-700'
        >
          Name
        </label>
    </div>
  )
}

export default Input