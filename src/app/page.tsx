"use client";

import { useState } from "react";

export default function Page() {
  const [counter, setCounter1] = useState(0);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter1((prev) => prev + 1)}>+1</button>
    </div>
  );
}
