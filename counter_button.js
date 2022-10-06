class CounterButton extends React.Component {
  render() {
    return React.createElement(
      'button',
      { onClick: this.props.onClick, className:"counter-button" },
      this.props.text
    );
  }
}
