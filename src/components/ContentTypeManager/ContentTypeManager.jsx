import React from 'react'
import Table from '../Table/Table'
import Search from '../Search/Search'
const ContentTypeManager = () => {
  return (
    <div>
      <div className="container mt-4">
      <h3 className='mb-5'>Content Type Manager</h3>
      <Table url = 'https://62a492ef47e6e40063951ec5.mockapi.io/api/contentTypes' isParent = {true} whoseParent = "contents"/>
      </div>
     
    </div>
  )
}

export default ContentTypeManager