import React, { useDeferredValue, useState, useTransition } from 'react';

export const TransitionDemo = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const deferredValue = useDeferredValue(list);

  // const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value);

    // startTransition(() => {

    // });

    let l = [];
    for (let i = 0; i < 10000; i++) {
      l.push(e.target.value);
    }
    setList(l);
  };

  console.log('render');

  return (
    <div>
      <input
        type='text'
        value={input}
        style={{
          height: '50px',
          width: '500px',
          fontSize: '25px',
          margin: '30px',
        }}
        onChange={handleChange}
      />
      <br />
      {deferredValue.map((value, index) => (
        <div key={index}>{value}</div>
      ))}
    </div>
  );
};
