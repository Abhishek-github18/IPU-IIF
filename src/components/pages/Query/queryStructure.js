import React from 'react'

const queryStructure = (prop) => {
  return (
 
    <tr>
      <th scope="row">{prop.count}</th>
      <td>{prop.name}</td>
      <td>{prop.email}</td>
      <td>{prop.message}</td>
    </tr>

  )
}

export default queryStructure
