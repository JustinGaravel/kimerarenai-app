// Create VisibilityToggle
// render, constructor(to bind methos for click, set up state), handleToggleVisibility
// state: visibility: false

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);

    this.state = {
      visibility: false
    }
  }
  render() {
    return (
      <div>
      <h1>Visibility Toggle</h1>
      <button onClick={this.handleToggleVisibility}>
        { this.state.visibility ? 'Show Details' : 'Hide Details' }
      </button>
      { this.state.visibility && (
        <p>Details are written here!</p>
      )}
      </div>
    )
  }
  handleToggleVisibility () {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility       
      }
    });
  }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));