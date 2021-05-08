import React from 'react';

async function  AutoHandler(e)
{

  let method = e.currentTarget.childNodes[0].innerHTML;
  let url =  e.currentTarget.childNodes[1].innerHTML;
  // console.log("target" ,e.currentTarget.childNodes[1].innerHTML    );
  // console.log(e);
  
  
  // let content = JSON.parse(e.view.localStorage.history);
  // console.log(content[0].id);
  const inputURL = document.getElementById('url-input');
  inputURL.value = url;
  
  const inputMethod = document.getElementById(method);
  await inputMethod.click();

  const Button = document.getElementById('GO');
  await Button.click();
  
  // const method = document.getElementById(selectedMethod);
  //   method.checked = true;
  //   const button = document.getElementById('GO');
  //   button.click();
}

function History({ result}) {
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
            // {console.log(val)};
            return (
              
              <tr key={i} data-testid="url" onClick={AutoHandler}>
                <td className="methodClass">{val.method}</td>
                <td>{val.url}</td>
                {/* <td style={{ display: 'none' }}> {val.body.data}</td> */}
              </tr>
              
            );
            

          })}
        </tbody>
      </table>
    </section>
  );
}

export default History;