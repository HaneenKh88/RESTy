import React from 'react';


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
    handleURL = (e) => {
      const value = e.target.value;
    
      this.setState({ value });
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
          <form> 
           <label>URL:  </label>
           <input id="url-input" type="text" placeholder = "URL" onChange={this.handleURL} />
           <input className = "GO" type="button" value="GO!" onClick= {this.handleclick} />
           <br></br>
           <br></br>
           <input className = "method" type="button" value= "GET" onClick={() => this.setState({method: 'GET'})} />
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