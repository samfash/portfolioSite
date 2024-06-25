import React from "react";

const Detail = ({ detail }) => {
  return (
      <tr>
        <td>{detail.skill}</td>
        <td>{detail.rate}</td>
      </tr>
  );
};

export default Detail;
