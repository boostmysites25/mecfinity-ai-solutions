import { createContext, useContext, useState } from "react";
import { LoadingSpinner } from "./common/LoadingSpinner";

export const SpinnerContext = createContext(null);

const SpinnerContextProvider = ({ children }) => {
  const [spinner, setSpinner] = useState(false);
  return (
    <SpinnerContext.Provider
      value={{
        spinner,
        setSpinner,
      }}
    >
      {children}
    </SpinnerContext.Provider>
  );
};

export default SpinnerContextProvider;

// component to manage loading spinner based on context
export const LoadingSpinnerContext = () => {
  const { spinner } = useContext(SpinnerContext);
  return spinner && <LoadingSpinner />;
};
