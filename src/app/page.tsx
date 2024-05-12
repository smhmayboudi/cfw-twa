"use client";

import { TmaSDKLoader } from "@/components/TmaSDKLoader";
import { useState } from "react";

function App() {
  // const mainButton = useMainButton();
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>My application!</div>
      <div>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter((prev) => prev + 1)}>+1</button>
      </div>
    </>
  );
}

export default function Page() {
  return (
    <TmaSDKLoader>
      <App />
    </TmaSDKLoader>
  );
}
