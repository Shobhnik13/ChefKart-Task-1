import React from 'react'
import data from '../data'
const ToggleMenu = (props) => {
  return (
    <div>
        <div className='flex flex-col bg-slate-200 p-4 rounded-md'>
            <button className='w-[200px] p-2 bg-slate-500 my-2 rounded-xl hover:bg-slate-400'>Sort by Ascending</button>
            <button className='w-[200px] p-2  bg-slate-500 rounded-xl  hover:bg-slate-400'>Sort by descending</button>
        </div>
    </div>
  )
}

export default ToggleMenu