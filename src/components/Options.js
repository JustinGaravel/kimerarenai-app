import React from 'react';
import Option from './Option';


const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">選択枝</h3>
      <button
        className="button button--link button--delete-all"
        onClick={props.handleDeleteOptions}
      >
        全て削除
      </button>
    </div>
    
    { props.options.length === 0 && <p className="widget__message">選択枝を追加してください</p>}
    
    {
      props.options.map((option, index) => (
        <Option
          count={index + 1}
          key={option}
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    }
  </div>
);

export default Options;