import React from 'react';


class Main extends React.Component {
    constructor(props) {
      super(props);
      //initial state of the component
      this.state = {
        value: '',
        method: '',
      };
      // this line is needed if you create a function in the class without using arrow functions
     
    }
    // handleSubmit = (e) => {
      
    //   e.preventDefault();
    // }
    handleURL = (e) => {
      const value = e.target.value;
      // we never ever ever change the state directly
      // DONT DO THIS >>>>>> this.state = {words}
      this.setState({ value });
    };
    render() {
      return (
        <main>
          <div className="Main-Class">
          <form> 
           <label>URL:  </label>
           <input id="url-input" type="text" placeholder = "URL" onChange={this.handleURL} />
           <input className = "GO" type="button" value="GO!" />
           <br></br>
           <br></br>
           <input className = "method" type="button" value= "GET" onClick={() => this.setState({method: 'GET'})} />
           <input className = "method" type="button" value= "POST" onClick={() => this.setState({method: 'POST'})} />
           <input className = "method" type="button" value= "PUT" onClick={() => this.setState({method: 'PUT'})} />
           <input className = "method" type="button" value= "Delete" onClick={() => this.setState({method: 'Delete'})} />
           
          </form>
  
          <div className = "User-Input">
             <p>
              {this.state.method}        {this.state.value} 
              
             </p>
          </div>
          </div>
         
        </main>
      );
    }
  }

  export default Main;