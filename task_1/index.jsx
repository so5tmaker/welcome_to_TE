import { Component, PureComponent, memo } from "react";

// functional component
export const FirstComponent = memo(({ name }) => <div>my name is {name}</div>);

// class component
export class SecondComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.name !== nextProps.name;
  }

  render() {
    return <div>my name is {this.props.name}</div>;
  }
}

// second solution
// export class SecondComponent extends PureComponent {
//   render() {
//     return <div>my name is {this.props.name}</div>;
//   }
// }
