class Counter extends React.Component {
  constructor(props) {
    super(props);

  this.state = {
      count: 0,
    }

    this.increment = this.increment.bind(this);
    this.decreement = this.decreement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }
  decreement() {
    this.setState({ count: this.state.count - 1});
  }

  render() {
    return (
      React.createElement(
      'div',
      { className:"counter-wrapper" },
      React.createElement(CounterButton, { onClick:this.decreement, text:"-" }),
      React.createElement('div', { className:"count" }, 'Counter: '+this.state.count),
      React.createElement(CounterButton, { onClick:this.increment, text:"+" })

    ))
  }
}

const root = ReactDOM.createRoot(document.querySelector('.counter'));
root.render(React.createElement(Counter));
