import React from 'react'
import '../components/css/searchdata.css'
import { useParams } from 'react-router-dom'
const Searchdata = () => {
  const {term}=useParams();
  return (
    <div id='search-data-main'>
      search data-{term}
      console.log({term})
    </div>
  )
}

export default Searchdata
