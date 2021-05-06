import React from 'react';
import Form from './Form';
import Result from './Result';
import History from './history';



let history = JSON.parse(localStorage.getItem('history')) || [];

export class Home extends React.Component {
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
        // console.log("state", state);
        console.log("data.body",data);
       
    
        if (data.headers && data.body) {
          let storageObj = {
            id: state.method+state.url,
            url: state.url,
            method: state.method,
            body: data.body,
            
          };
          // console.log("storge" ,storageObj);
          this.state.storageArray.push(storageObj);
          console.log("storge" ,this.state.storageArray);
        
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
          console.log("res",result);
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
       
        <Form handler={this.handleButton}/>
        <History result = {this.state.storageArray}/>
        <Result  count= {this.state.count} result = {this.state.result}/>
       </>
      );
    }
}
export default Home;