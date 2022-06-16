import React from 'react'

const Table = () => {
  return (
    <div class="container">
  <div class="row">
    <div class="col-12">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Day</th>
            <th scope="col">Article Name</th>
            <th scope="col">Author</th>
            <th scope="col">Shares</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bootstrap 4 CDN and Starter Template</td>
            <td>Cristina</td>
            <td>2.846</td>
            <td className='d-flex justify-content-evenly'>
              <button type="button" class="btn btn-primary"><i class="far fa-eye"></i></button>
              <button type="button" class="btn btn-success"><i class="fas fa-edit"></i></button>
            <button type="button" class="btn btn-danger"><i class="far fa-trash-alt"></i></button>
            </td>
          </tr>
          
          
        </tbody>
      </table>
    </div>
  </div>
</div>
  )
}

export default Table