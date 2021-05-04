import React from 'react';
const superagent = require('superagent');

class Form extends React.Component {
    constructor(props) {
      super(props);
      //initial state of the component
      this.state = {
        value: '',
        method: '',
        url: '',
        methodVal : '',
      };
      // this line is needed if you create a function in the class without using arrow functions
     
    }
    handleclick = async (e) => {
     
      e.preventDefault();
      await this.setState ({ url: e.target.url.value, methodVal: this.state.method });

      try
      {
        // console.log("state",this.state);
        let reqBody = e.target.body.value;
        if (this.state.methodVal === 'POST' || this.state.methodVal === 'PUT') {
          const result = await superagent[this.state.methodVal.toLowerCase()](
            e.target.url.value
          ).send(reqBody);
          
        
          this.props.handler( result, this.state);
        } else {
        const data=  await superagent[this.state.methodVal.toLowerCase()](e.target.url.value);
        // console.log(data);
        // let counter = data.body.count;
        this.props.handler(data, this.state)
        // console.log(counter);
      
      }
      }
      catch(error){
        console.error(error)
      }
        
    };

    render() {
      return (
        <main>
          <div className="Main-Class">
          <form id= "form" onSubmit={this.handleclick}> 
           <label>URL:  </label>
           <input id="url-input" type="text" placeholder = "URL" name="url"  />
           <input className = "GO" type="submit" value="GO!" />
           <br></br>
           <br></br>
           <textarea
            type="text"
            name="body"
            placeholder="Request body..."
            rows="6"
            cols="40"
          />
           <br></br>
           <br></br>
           <input className={`method ${this.state.method === 'GET'}`} type="button"name= "method" value= "GET" onClick={() => this.setState({method: 'GET'})} />
           <input className={`method ${this.state.method === 'POST'}`} type="button" value= "POST" onClick={() => this.setState({method: 'POST'})} />
           <input className={`method ${this.state.method === 'PUT'}`} type="button" value= "PUT" onClick={() => this.setState({method: 'PUT'})} />
           <input className={`method ${this.state.method === 'DELETE'}`} type="button" value= "Delete" onClick={() => this.setState({method: 'Delete'})} />
           
          </form>
  
       
          </div>
         
        </main>
      );
    }
  }

  export default Form;