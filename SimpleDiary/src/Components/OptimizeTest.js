import React, { useState, useEffect } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - count: ${count}`);
  });

  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update - count: ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqal = (prevProps, nextProps) => {
  return prevProps.obj.count === nextProps.obj.count;
  // if (prevProps.obj.count === nextProps.obj.count) {
  //   return true; // 이전 프롭스 현재 프롭스가 같다 -> 리렌더링을 일으키지 않는다.
  // }
  // return false; // 카운트가 달라지면 그 때 리렌더링해 !
};

const MemoizedCounterB = React.memo(CounterB, areEqal);

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });
  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A Button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button
          onClick={() =>
            setObj({
              count: obj.count,
            })
          }
        >
          B Button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
