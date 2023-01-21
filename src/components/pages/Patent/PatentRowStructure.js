import React from "react";

const PatentRowStructure = (prop) => {
  return (
    <tr>
      <th scope="row">{prop.count}</th>
      <td>{prop.date}</td>
      <td>{prop.no}</td>
      <td>{prop.name}</td>
      <td>
        <a href={prop.href}>
          Certificate
        </a>
      </td>
    </tr>
  );
};

export default PatentRowStructure;
