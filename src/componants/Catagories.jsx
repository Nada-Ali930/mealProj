import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function Catagories() {
    let [cats,setCats] = useState([])
    async function getCat(){
      let {data} =await axios.get(`www.themealdb.com/api/json/v1/1/search.php?s=pizza`)
         console.log(data)

      }
  
  useEffect(()=>{
  getCat()
  },[])
  return (
    <div>
      
    </div>
  )
}

