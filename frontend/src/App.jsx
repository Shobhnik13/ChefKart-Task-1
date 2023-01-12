import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import DataTableComp from './Components/DataTableComp'
import data from './data'
function App() {
  const [Data,setData]=useState(data)

  return (
    <div className="App ">
     <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Ip address</th>
          <th>Airport code</th>
          <th>Time </th>
          <th>status</th>
          <th>Mobile</th>
          <th>Area</th>
        </tr>
      </thead>
      <tbody>
        {Data.map((item)=>(
          <tr>
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
