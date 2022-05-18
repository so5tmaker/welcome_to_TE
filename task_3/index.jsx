import { useState, Fragment, memo } from "react";

export const MainComponent = ({
  user = { name: "unknown", age: null }, // default value for `props.user`
}) => {
  const [_, updateComponent] = useState(); // change state for force component updating

  return (
    <Fragment>
      <button onClick={updateComponent}>update MainComponent</button>
      <ChildComponent user={user} />
    </Fragment>
  );
};

function AreEqual(prevProps, nextProps) {
  return prevProps.name === nextProps.name && prevProps.age === nextProps.age;
}

// memorized component
const ChildComponent = memo(({ user: { name, age } }) => {
  console.log(
    "Rendering ChildComponent:",
    `user name: ${name}, user age: ${age}`
  );
  return (
    <div>
      user name: {name}, user age: {age}
    </div>
  );
}, AreEqual);
