class TodoApp extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>My Todo App!</div>
      );
    }
  }
  

ReactDOM.render(
    <TodoApp />,
    document.getElementById('todoApp')
  );