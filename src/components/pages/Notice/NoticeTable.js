import React from "react";
import { Link } from "react-router-dom";
const NoticeTable = (prop) => {
    // console.log(prop.pdfaddress);
  return (
    // <tbody>
    
    <tr>
      <td>
        <a id={prop.id} href={prop.href} target="_blank">
          {prop.title}
        </a>
      </td>
    </tr>
    // </tbody>
  );
};

export default NoticeTable;
