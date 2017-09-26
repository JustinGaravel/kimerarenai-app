import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action.js';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };
  
  handleDeleteOptions = () => {
    this.setState(() => ({ options:[] }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() => ({
      selectedOption: option
    }))
  };

  handleSelectedOption = () => {
    this.setState(() => ({
      selectedOption: undefined
    }))
  }

  handleAddOption = (option) => {
    if (!option) {
      return '正しい選択枝を入力してください';
      // indexOf returns the location in array or -1 if doesn't exist
    } else if (this.state.options.indexOf(option) > -1) {
      return '選択枝はもう存在しています';
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  };

  componentDidMount () {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }))      
      }
    } catch(e) {
      // Do nothing at all
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const title = 'Indecision';
    const subtitle ="インタネットに決めてもらおう！";

    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <div className="widget">
            <AddOption 
              handleAddOption={this.handleAddOption}
            />
          </div>
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
          </div>
          <Action 
            hasOptions={this.state.options.length > 0} 
            handlePick={this.handlePick}
          />
        </div>
        <OptionModal
          handleSelectedOption={this.handleSelectedOption}
          selectedOption={this.state.selectedOption}
        />
        
      </div>
    )
  }
}
