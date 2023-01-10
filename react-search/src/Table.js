import React from "react";

function Table({ data }) {
  return (
    <table>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Author</th>
          <th>Page</th>
        </tr>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.author}</td>
            <td>{item.page}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
