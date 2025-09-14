import React, { useState } from 'react';
const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Counter Exercise</h2>
      <div style={{ fontSize: '32px', margin: '20px 0' }}>{count}</div>
      <button style={{ background: 'green', color: 'white', marginRight: '8px' }} onClick={handleIncrement}>+ เพิ่ม</button>
      <button style={{ background: 'red', color: 'white', marginRight: '8px' }} onClick={handleDecrement}>- ลด</button>
      <button style={{ background: 'orange', color: 'white' }} onClick={handleReset}>Reset</button>
    </div>
  );
};
export default Counter;
