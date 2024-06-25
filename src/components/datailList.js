import React from "react";
import Detail from "./detail";

const DetailList = ({ details }) => {
  return (
      <table className="table table-bordered table-hover ">
        <thead>
          <tr>
            <th scope="col">Skills</th>
            <th scope="col">Ratings</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {details.map((detail, index) => (
            <Detail key={index} detail={detail} />
          ))}
        </tbody>
      </table>
  );
};

export default DetailList;
