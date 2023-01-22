import React from 'react'

const queryStructure = (prop) => {
  return (
 
    <tr>
      <th scope="row" key={prop.id}>{prop.count}</th>
      <td>{prop.name}</td>
      <td>{prop.email}</td>
      <td>{prop.message}</td>
    </tr>

  )
}

export default queryStructure
