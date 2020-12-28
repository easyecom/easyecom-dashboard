import { Link } from "react-router-dom";
import React from "react";

import { Container } from "./styles";

const TableSimple = ({ header, datas }) => (
  <Container>
    <div className="table-simple">
      <table className="simple">
        <thead>
          <tr>
            {header.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datas.map((line, idx) => (
            <tr key={idx}>
              {header.map((item, index) => (
                <td className="list-order" key={index}>
                  {line[item] || ""}
                </td>
              ))}
              {line["buttonDetails"] ? (
                <td className="button-details">
                  <Link to={line["buttonDetails"]}>
                    <button>DETALHES</button>
                  </Link>
                </td>
              ) : null}{" "}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Container>
);

export default TableSimple;
