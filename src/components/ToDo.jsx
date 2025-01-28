import React from 'react'
import { BiEdit, BiTrash } from 'react-icons/bi'

const ToDo = ({text, updateMode, deleteToDo}) => {
  return (
    <>
    <div className='bg-black/70 mt-4 p-4 rounded-md flex justify-between'>
      <h2 className='text-white/80'>{text}</h2>
      <div className='flex text-2xl text-white gap-2 items-center'>
        <BiEdit onClick={updateMode} />
        <BiTrash onClick={deleteToDo} />
      </div>
    </div>
    

    </>
  )
}

export default ToDo;