
import React from 'react';
import Header from './header';
import Form from './Form';
import Result from './Result';
import Footer from './footer';
import History from './history';


import './style/header.scss';
import './style/Form.scss';
import './style/footer.scss';
import './style/Result.scss';
import './style/history.scss';




let history = JSON.parse(localStorage.getItem('history')) || [];


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result : [],
      count : 0,
     
      storageArray: history,
    };
  }

  

  handleButton = (data, state) => {
    
    
    // this.setState({ result: data, count: number});
    console.log("state", state);
    // console.log("data.body",data.body);
   

    if (data.headers && data.body) {
      let storageObj = {
        id: state.method+state.url,
        url: state.url,
        method: state.method,
        body: state.body,
        
      };
      console.log(storageObj);
      this.state.storageArray.push(storageObj);
    
    const result = [];
    const map = new Map();
    for (const item of this.state.storageArray) {
        if(!map.has(item.id)){
            map.set(item.id, true);    // set any value to Map
            result.push({
                id: item.id,
                url: item.url,
                method: item.method,
                body: item.body,
            });
        }
    }
      this.setState({
        count: data.body.count || 0,
        result: data,
        storageArray: result,

      });
      console.log(this.state);
      localStorage.setItem('history', JSON.stringify(result));
    } else {
      this.setState({
        // count: data.body.count || 0,
        result: data,
      });
    }
  

   
  };
  render()
  {
  return (
   <>
    <Header/>
    <Form handler={this.handleButton}/>
    <History result = {this.state.storageArray}/>
    <Result  count= {this.state.count} result = {this.state.result}/>
    <Footer/>
    
   </>
  );
}
}
export default App;
