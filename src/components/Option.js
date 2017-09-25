import React from 'react';

const Option = (props) => (
  <div>
    {props.optionText}
    <button 
      onClick={(e) => {
        props.handleDeleteOption(props.optionText)
      }}
    >
      削除
    </button>
  </div>
);

export default Option;