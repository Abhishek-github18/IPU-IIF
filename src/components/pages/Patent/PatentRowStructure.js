import React from "react";

const PatentRowStructure = (props) => {
  // console.log(props.id);
  return (
    < >
    <tr >
      <th scope="row" >{props.count}</th>
      <td>{props.date}</td>
      <td>{props.no}</td>
      <td>{props.name}</td>
      <td>
        <a href={props.href}>
          Certificate
        </a>
      </td>
    </tr>
    </>
    );
};

export default PatentRowStructure;
