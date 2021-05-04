import logo from './logo.svg';
import React from 'react';
import Header from './header';
import Form from './Form';
import Result from './Result';
import Footer from './footer';
import './style/header.scss';
import './style/Form.scss';
import './style/footer.scss';
import './style/Result.scss';





export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result : [],
      count : 0,
    };
  }

  handleButton = (data, number) => {
    
    
    this.setState({ result: data, count: number});
    
   
  };
  render()
  {
  return (
   <>
    <Header/>
    <Form handler={this.handleButton}/>
    <Result  count= {this.state.count} result = {this.state.result}/>
    <Footer/>
    
   </>
  );
}
}
export default App;
