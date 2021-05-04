import React from 'react';
import ReactJson from 'react-json-view';

 function Result( props ) {
    return (
      <div className="result">
      
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
      </div>
    );
  }

  export default Result;