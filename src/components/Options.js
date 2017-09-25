import React from 'react';
import Option from './Option';


const Options = (props) => (
  <div>
  <button
    className="button button--link"
    onClick={props.handleDeleteOptions}
  >
    全て削除
  </button>
  { props.options.length === 0 && <p>選択を追加してください</p>}
  
  {
    props.options.map((option) => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))
  }
</div>
);

export default Options;