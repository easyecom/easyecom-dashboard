import { Link } from "react-router-dom";
import React from "react";

const TableSimple = ({ header, datas }) => {
  return (
    <div className="table-simple">
      <table className="simple">
        <thead>
          <thead>
            <tr>
              {header.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {datas.map((line, index) => {
                return (
                  <tr key={index}>
                    {header.map((item, index) => {
                      return <td key={index}>{line[item] || ""}</td>;
                    })}
                    {line["buttonDetails"] && (
                      <td>
                        <Link to={line["buttonDetails"]}>
                          <button>DETALHES</button>
                        </Link>
                      </td>
                    )}{" "}
                  </tr>
                );
              })}
            </tr>
          </tbody>
        </thead>
      </table>
    </div>
  );
};

export default TableSimple;
