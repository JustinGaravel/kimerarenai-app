import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action.js';
import Header from './Header';

export default class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    }
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
  }

  componentDidMount () {
    try {
      console.log('retrieving data');
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({ options }))      
      }
    } catch(e) {
      // Do nothing at all
    }
    
    // // same thing as above...
    // this.setState(() => {
    //   return {
    //     options: options        
    //   }
    // });
  }
  componentDidUpdate (prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data');      
    }

  }
  handleDeleteOptions() {
    this.setState(() => ({ options:[] }));
  }

  handlePick () {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption (option) {
    if (!option) {
      return 'Enter valid value to add option';
      // indexOf returns the location in array or -1 if doesn't exist
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists'
    }
    this.setState((prevState) => ({ options: prevState.options.concat(option) }));
  }

  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));

  }

  render() {
    const title = 'Indecision App';
    const subtitle ="Let the internet decide for you!";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasOptions={this.state.options.length > 0} 
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    )
  }
}