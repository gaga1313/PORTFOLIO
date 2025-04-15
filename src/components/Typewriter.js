import React from "react";

class TypeWriter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.unmounted = false;
    this.loopNum = 0;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  tick() {
    if (this.unmounted) return;

    const { data: toRotate } = this.props;
    const i = this.loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    const newText = fullTxt.substring(0, this.state.text.length + 1);
    this.setState({ text: newText });

    if (newText !== fullTxt) {
      setTimeout(this.tick, 100); // Adjust speed here
    }
  }

  render() {
    return <span className="typewriter">{this.state.text}</span>;
  }
}

export default TypeWriter;
