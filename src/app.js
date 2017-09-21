
class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision App';
    const subtitle ="Let the internet decide for you!";
    const options = ['Thing One', 'Thing Two', 'Thing Four'];

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('Picking...');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?!</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor (props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    alert('handleRemoveAll clicked!');
    console.log(this.props.options);
  }

  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
      
        {
          this.props.options.map((option) => <Option key={option} optionText={option}/>)
        }
      </div>
    )
  }
}

// Option class -> option component here
class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    )
  }
}


// set up form as same in jsx-indecision
// wire up onSubmit
// call a method -> handleAddOption
//   fetch value typeed -> if exist, alert it to screen
class AddOption extends React.Component {
  handleAddOption (e) {
    e.preventDefault();
    
    const option = e.target.elements.option.value.trim();

    if(option) {
      alert(option);
      e.target.elements.option.value = '';      
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    )
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOption />
    
  </div>
);

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
