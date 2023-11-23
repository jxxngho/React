import React, { useState, useEffect } from "react";

const UnMountTest = () => {
  useEffect(() => {
    console.log("MOUNT");

    return () => {
      // Unmount 시점에 실행됨.
      console.log("Unmount!");
    };
  }, []);
  //  dependency array에 있는 값이 변화하게 되면 그 순간 콜백함수가 실행된다.
  return <div>Unmount Testing Component</div>;
};
const LifeCycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);
  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnMountTest />}
    </div>
  );
};

export default LifeCycle;
