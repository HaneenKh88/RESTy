import React from 'react';
import ReactJson from 'react-json-view';
import { NavLink } from 'react-router-dom';
import { If, Then, Else } from '../src/if/index';

class HistoryPage extends React.Component {
  constructor(props) {

    super(props);


    this.state = {
      api: JSON.parse(localStorage.getItem('history')) || [],
      body: [],
      // trigger: false,
      // data:[],
    };
  }
  dataHandling = (data) => {

    this.setState({ body: data });
    console.log("data", data);
    localStorage.setItem('data', JSON.stringify(data));
  };

  // AutoHandler(e) {

  //   let method = e.currentTarget.childNodes[0].innerHTML;
  //   let url = e.currentTarget.childNodes[1].innerHTML;
  //   console.log("target", e.currentTarget.childNodes[1].innerHTML);
  //   console.log(e);
  // }

  render() {

    return (
      <section id="history">
        <h3 className="history"> History</h3>

        <table>



          <tbody>
            <If condition={this.state.api.length}>
              <Then>
                {this.state.api.map((val, i) => {
                  return (
                    <tr key={i + val.method + val.url + val.body} data-testid="url" onClick={() => { this.dataHandling(val) }}>

                      <td className="methodClass">{val.method}</td>
                      <td>{val.url}</td>
                      <NavLink
                        to={{
                          pathname: '/',
                          body: {
                            method: this.state.body.method,
                            url: this.state.body.url,
                            data: this.state.body.data,
                          },
                        }}
                      >
                        Re-Run
					</NavLink>
                    </tr>
                  );

                })}
              </Then>
            </If>

          </tbody>
        </table>

        <div className="result">
          <If condition={!this.state.body || this.state.body.length === 0}>
            <Then>
              <div>No data shown</div>
            </Then>
            <Else>
              {console.log(this.props.body)}
              <ReactJson
                src={this.state.headers}
                name="Headers"
                iconStyle={'circle'}
                collapsed={1}
                enableClipboard={false}
                displayDataTypes={false}
                IndentWidth={1}
              />
              <ReactJson
                src={this.state}
                name="Response"
                iconStyle={'circle'}
                collapsed={1}
                enableClipboard={false}
                displayDataTypes={false}
                IndentWidth={1}
              />
            </Else>
          </If>

        </div>

      </section>
    );
  }
}

export default HistoryPage;