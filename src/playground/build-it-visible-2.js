const appRoot = document.getElementById('app');

let visibility = false;

let toggleVis = () => {
  visibility = !visibility;
  render();
}

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVis}>
        { visibility ? 'Show Details' : 'Hide Details' }
      </button>
      { visibility && (
        <p>Details are written here!</p>
      )}
    </div>
  );
  ReactDOM.render(jsx, appRoot);
};



render();