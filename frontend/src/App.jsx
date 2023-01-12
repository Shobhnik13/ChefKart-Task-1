import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DataTableComp from './Components/DataTableComp'
import data from './data'
function App() {
  const [Data,setData]=useState(data)

  return (
    <div className="App  flex flex-col w-[100%] max-w-[100%]">
     <table >
      <thead >
        <tr className=' border-b-4 '>
          <th className='w-[200px] border-r-4'>First Name</th>
          <th className='w-[200px] border-r-4'>Last Name</th>
          <th className='w-[200px] border-r-4'>Email</th>
          <th className='w-[200px] border-r-4'>Gender</th>
          <th className='w-[200px] border-r-4'>Ip address</th>
          <th className='w-[200px] border-r-4'>Airport code</th>
          <th className='w-[200px] border-r-4'>Time </th>
          <th className='w-[200px] border-r-4'>status</th>
          <th className='w-[200px] border-r-4'>Mobile</th>
          <th className='w-[200px] border-r-4'>Area</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((item)=>(
          <tr className='text-center'>
            <td className=''>{item.first_name}</td>
            <td className=''>{item.last_name}</td>
            <td className=''>{item.email}</td>
            <td className=''>{item.gender}</td>
            <td className=''>{item.ip_address}</td>
            <td className=''>{item['airport code']}</td>
            <td className=''>{item.time}</td>
            <td className=''>{item.status}</td>
            <td className=''>{item.mobile}</td>
            <td className=''>{item.area}</td>
            </tr>
          ))}
      </tbody>
     </table>
          </div>
  )
}

export default App
