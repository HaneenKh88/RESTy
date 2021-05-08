import { If, Then, Else } from 'react-if';
import React from 'react';
import ReactJson from 'react-json-view';

 function Result( props ) {
    return (
      <div className="result">
       <If condition= {!props.result.body} >
         <Then>
           {/* <p> There Is No data To show</p> */}
         </Then>
         
         <Else>
         <p> count: {props.count} </p>
        
        <ReactJson
          src={props.result.headers}
          name="Headers"
          iconStyle={'circle'}
          collapsed={1}
          enableClipboard={false}
          displayDataTypes={false}
          IndentWidth = {1}
        />
        <ReactJson
          src={props.result.body}
          name="Response"
          iconStyle={'circle'}
          collapsed={1}
          enableClipboard={false}
          displayDataTypes={false}
          IndentWidth = {1}
        />
         </Else>
       </If>
       
       
      </div>

      
    );
  }

  export default Result;