import React, { useRef } from 'react';

const AppScroll = () => {
  const scollToRef = useRef();

  return (
    <div className="container">
      <button onClick={() => scollToRef.current.scrollIntoView()}>
        Scroll
      </button>
      <div ref={scollToRef}>You scrolled to me</div>
    </div>
  );
};
export default AppScroll;
