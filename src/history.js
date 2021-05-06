import React from 'react';


function History({ result }) {
  // console.log(result);
  return (
    <section id="history">
      <table>
        <thead>
          <tr>
            <th className="methodClass">Method</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>

          {result.map((val, i) => {
            return (
              <tr key={i} data-testid="url">
                <td className="methodClass">{val.method}</td>
                <td>{val.url}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default History;