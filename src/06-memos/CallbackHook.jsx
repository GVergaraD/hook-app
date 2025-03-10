import { useCallback, useEffect, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((value) => {
    setCounter((c) => c + value);
  }, []);

  //   const incrementFather = (factor) => {
  //     setCounter((counter) => counter + factor);
  //   };

  useEffect(() => {
    // ???
  }, [incrementFather]);

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />
      <ShowIncrement increment={incrementFather} />
    </>
  );
};

export default CallbackHook;
