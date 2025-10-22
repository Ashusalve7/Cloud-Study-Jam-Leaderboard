import React from "react";
import TableRow from "./TableRow";

function TableBody({ Participationdata }) {
  return (
    <tbody className="text-xs">
      {Participationdata.length > 0 ? (
        Participationdata.map((participant) => (
          <TableRow
            key={participant["User Email"] || participant["User Name"]}
            participant={participant}
          />
        ))
      ) : (
        <tr>
          <td colSpan="6" className="text-center p-4">
            No User Found
          </td>
        </tr>
      )}
    </tbody>
  );
}

export default TableBody;
