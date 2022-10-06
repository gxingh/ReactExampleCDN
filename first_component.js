class FirstComponent extends React.Component {
  render() {
    return React.createElement(
      'div',
      null,
      'This is my first React component'
    );
  }
}

const counterRoot = ReactDOM.createRoot(document.querySelector('.first_component'));
counterRoot.render(React.createElement(FirstComponent));
