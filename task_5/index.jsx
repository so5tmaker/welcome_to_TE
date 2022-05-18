import { useSelector } from "react-redux";
import { createSelector } from "reselect";

// our redux state
const reduxState = {
  isOnline: true,
  userData: {
    name: "Peter",
    surname: "Pen",
  },
};

export const MainComponent = () => {
  const selectUserData = createSelector(
    (state) => state.userData,
    (data) => data
  );
  const userData = useSelector(selectUserData(reduxState)); // subscribe and get only userData object
  // ... other code
};
