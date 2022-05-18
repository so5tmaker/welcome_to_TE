import { Component } from "react";

export class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { isActive: true };
    this.toggleChildVisibility = this.toggleChildVisibility.bind(this);
  }

  toggleChildVisibility = () => {
    this.setState({
      isActive: !this.state.isActive,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toggleChildVisibility}>
          toggle child component
        </button>
        <ChildComponent isActive={this.state.isActive} />{" "}
      </>
    );
  }
}

const ChildComponent = ({ isActive }) => {
  return isActive ? <div>child component</div> : null;
};
