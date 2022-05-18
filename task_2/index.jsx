import { useState, Fragment, memo, useCallback } from "react";

export const MainComponent = () => {
  const [updateComponent] = useState(); // change state for force component updating

  const makeLog = useCallback(() => console.log("hi from MainComponent"), []); // function to make a log from MainComponent

  // second solution
  // const makeLog = () => console.log("hi from MainComponent");

  return (
    <Fragment>
      <button onClick={updateComponent}>update MainComponent</button>
      <ChildComponent makeLog={makeLog} />
    </Fragment>
  );
};

// memoized component
const ChildComponent = memo(({ makeLog }) => {
  return <button onClick={makeLog}>say Hi from MainComponent</button>;
});

// memoized component second solution
// const ChildComponent = memo(({ makeLog }) => {
//   const onClick = () => makeLog();

//   return <button onClick={onClick}>say Hi from MainComponent</button>;
// });
