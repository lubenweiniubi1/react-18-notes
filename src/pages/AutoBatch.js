import React, { Component, useRef, useState } from 'react';
import { flushSync } from 'react-dom';
// import { flushSync } from 'react-dom';

export const AutoBatch = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  const h1 = useRef(null);

  const handleClick = () => {
    console.log(h1.current.style.color);

    flushSync(() => {
      setFlag((f) => !f);
    });

    console.log(h1.current.style.color);

    setCount((c) => c + 1);
  };

  console.log('render');

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 ref={h1} style={{ color: flag ? 'pink' : 'black' }}>
        {count}
      </h1>
    </div>
  );
};

export class ClassAutoBatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
      flag: false,
    };
  }

  handleClick = () => {
    setTimeout(() => {
      console.log(this.state);
      this.setState(({ count }) => ({ count: count + 1 }));
      console.log(this.state);
      this.setState(({ flag }) => ({ flag: !flag }));
      console.log(this.state);
    });
  };

  render() {
    console.log('render class');

    return (
      <div>
        <button onClick={this.handleClick}>Next</button>
        <h1 style={{ color: this.state.flag ? 'pink' : 'black' }}>{this.state.count}</h1>
      </div>
    );
  }
}

// console.log(this.state);
// this.setState((pre) => ({ count: pre.count + 1 }));
// console.log(this.state);
// this.setState((pre) => ({ flag: !pre.flag }));
// console.log(this.state);

// setTimeout(() => {
//   console.log(this.state);
//   this.setState((pre) => ({ count: pre.count + 1 }));
//   console.log(this.state);
//   this.setState((pre) => ({ flag: !pre.flag }));
//   console.log(this.state);
// }, 0);

// ---

// setCount((c) => c + 1);
// setFlag((f) => !f);

// setTimeout(() => {
//   setCount((c) => c + 1);
//   setFlag((f) => !f);
// }, 0);

// console.log(h1.current.style.color);
// flushSync(() => {
//   setCount((c) => c + 1);
// });
// console.log(h1.current.style.color);

// flushSync(() => {
//   setFlag((f) => !f);
// });
// console.log(h1.current.style.color);
