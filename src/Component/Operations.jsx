import React from 'react'
import { useState } from 'react';

const count = 1;

const Operations = () => {
    
    const [count, setCount] = useState(1); 
  return (
    <div>
        <p>total count: {count}</p>

        <button onClick={() => setCount(count * 2)>+1}>multiply</button> &nbsp;
        {/* <button onClick={() => setCount(count - 1)>-1}>decrease</button> &nbsp; */}
        <button onClick={() => setCount(1)}>reset</button>
    </div>
  )
}

export default Operations