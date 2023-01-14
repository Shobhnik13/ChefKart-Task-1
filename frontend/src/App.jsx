import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './data'
function App() {
  const [Data,setData]=useState(data)
  const[way,setWay]=useState('asc')
  const sorting=(dummyData)=>{
      if(way==='asc'){
        const sorted=[...Data].sort((a,b)=>
        a[dummyData].toLowerCase()>b[dummyData].toLowerCase()? 1 : -1
        )
        setData(sorted)
        setWay('dsc')
      }
      if(way==='dsc'){
        const sorted=[...Data].sort((a,b)=>
        a[dummyData].toLowerCase()<b[dummyData].toLowerCase()? 1 : -1
        )
        setData(sorted)
        setWay('asc')
      }
  }
  return (
 <div className="App  flex flex-col w-[100%] max-w-[100%] relative">
     <table >
      <thead >
        <tr className=' border-b-4 '>
          <th className='w-[200px] border-r-4 hover:cursor-pointer' onClick={()=>sorting('first_name')}>First Name</th>
          <th className='w-[200px] border-r-4 hover:cursor-pointer' onClick={()=>sorting('last_name')}>Last Name</th>
          
          <th className='w-[200px] border-r-4 hover:cursor-pointer' onClick={()=>sorting('email')}>Email</th>
          <th className='w-[200px] border-r-4 ' >Gender</th>
          <th className='w-[200px] border-r-4 '>Ip address</th>
          <th className='w-[200px] border-r-4 hover:cursor-pointer' onClick={()=>sorting('airport code')}>Airport code</th>
          <th className='w-[200px] border-r-4' >Time </th>
          <th className='w-[200px] border-r-4' >status</th>
          <th className='w-[200px] border-r-4' >Mobile</th>
          <th className='w-[200px] border-r-4 hover:cursor-pointer' onClick={()=>sorting('area')}>Area</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((item)=>(
          <tr className='text-center'>
            <td className=''>{item.first_name}</td>
            <td className=''>{item.last_name}</td>
            <td className=''>{item.email}</td>
            <td className=''>{item.gender}</td>
            <td className='py-4'>{item.ip_address}</td>
            <td className=''>{item['airport code']}</td>
            <td className=''>{item.time}</td>
            <td className=''>{item.status ? <div className='bg-green-600 w-[40px] m-auto text-white'>true</div> : <div className='bg-red-600 w-[40px] m-auto text-white'>false</div>}</td>
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
