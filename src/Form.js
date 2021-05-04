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
    // handleSubmit = (e) => {
      
    //   
    // }
    handleURL = async (e) => {
      const value = e.target.value;
      console.log('url', value);
      this.setState({ value });

      try
      {
        const data=  await superagent.get(value);
        console.log(data);
        let counter = data.body.count;
        this.props.handler(data, counter)
        console.log(counter);
      }
      catch(error){
          console.error(error)
      }
      // document.getElementById('form').reset();
     
    };

    handleclick = (e) => {
      console.log(this.state)
      e.preventDefault();
      this.setState({ url: this.state.value, methodVal: this.state.method });
    };

    render() {
      return (
        <main>
          <div className="Main-Class">
          <form id= "form" onSubmit={this.handleclick}> 
           <label>URL:  </label>
           <input id="url-input" type="text" placeholder = "URL" name="url" onChange={this.handleURL} />
           <input className = "GO" type="submit" value="GO!" />
           <br></br>
           <br></br>
           <input className = "method" type="button"name= "method" value= "GET" onClick={() => this.setState({method: 'GET'})} />
           <input className = "method" type="button" value= "POST" onClick={() => this.setState({method: 'POST'})} />
           <input className = "method" type="button" value= "PUT" onClick={() => this.setState({method: 'PUT'})} />
           <input className = "method" type="button" value= "Delete" onClick={() => this.setState({method: 'Delete'})} />
           
          </form>
  
          <div className = "User-Input">
             <p>
              {this.state.methodVal}        {this.state.url} 
              
             </p>
          </div>
          </div>
         
        </main>
      );
    }
  }

  export default Form;