import { If, Then} from 'react-if';
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
        Loading: false,
      };
      // this line is needed if you create a function in the class without using arrow functions
     
    }
    handleclick = async (e) => {
     
      e.preventDefault();
      await this.setState ({ url: e.target.url.value, methodVal: this.state.method });

      try
      {
        console.log("state",this.state);
        let reqBody = e.target.body.value;
        this.setState({  Loading: true })
        if (this.state.methodVal === 'POST' || this.state.methodVal === 'PUT' ) {
          const result = await superagent[this.state.methodVal.toLowerCase()](
            e.target.url.value
          ).send(reqBody);
          console.log("this data" ,result )
         
        
          this.props.handler( result, this.state);
          this.setState({ Loading: false })
        } else {
          this.setState({ Loading: true })
        const data=  await superagent[this.state.methodVal.toLowerCase()](e.target.url.value);
        this.setState({ Loading: false })
        this.props.handler(data, this.state)
       
      
      }
      }
      catch(error){
        this.setState({ Loading: false })
        console.error(error);
        this.props.handler(error.message , "Error in geting data")
      }
        
    };

    componentDidMount ()
    {
      
      let HomeData = JSON.parse(localStorage.getItem("data"))
      if(HomeData)
      {
        const inputURL = document.getElementById('url-input');
        inputURL.value = HomeData.url;
        
        const inputMethod = document.getElementById(HomeData.method);
        inputMethod.click();
      
      }
    }

    render() {
      return (
        <main>
          <div className="Main-Class">
          <form id= "form" onSubmit={this.handleclick}> 
           <label>URL:  </label>
           <input id="url-input" type="text" placeholder = "URL" name="url"  />
           <input id="GO" className = "GO" type="submit" value="GO!" />
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
           <input id="GET" className={`method ${this.state.method === 'GET'}`} type="button"name= "method" value= "GET" onClick={() => this.setState({method: 'GET'})} />
           <input id="POST" className={`method ${this.state.method === 'POST'}`} type="button" value= "POST" onClick={() => this.setState({method: 'POST'})} />
           <input id="PUT" className={`method ${this.state.method === 'PUT'}`} type="button" value= "PUT" onClick={() => this.setState({method: 'PUT'})} />
           <input id="DELETE" className={`method ${this.state.method === 'DELETE'}`} type="button" value= "DELETE" onClick={() => this.setState({method: 'DELETE'})} />
           
          </form>
          <If condition={this.state.Loading === true}>
            <Then>
                <div id='loading'></div>
                <img id="loadingImg" src="https://media.istockphoto.com/videos/loading-circle-icon-on-white-background-animation-video-id1093418606?s=640x640" alt="loading"/>
            </Then>
          </If>
       
          </div>
         
        </main>
      );
    }
  }

  export default Form;