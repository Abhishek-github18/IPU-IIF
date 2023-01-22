import React from "react";
// import { Link } from "react-router-dom";
const NoticeTable = (prop) => {
    // console.log(prop.pdfaddress);
  return (
    // <tbody>
    
    <tr>
      <td>
        <a href={prop.href} target="_blank" rel="noopener noreferrer">
          {prop.title}
        </a>
      </td>
    </tr>
    // </tbody>
  );
};

export default NoticeTable;
