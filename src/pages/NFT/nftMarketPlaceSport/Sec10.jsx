import React, { useState } from 'react';

const ScrollComponent = () => {
  const [data, setData] = useState([
    { id: 1, heading: 'Heading 1', paragraph: 'Content 1' },
    { id: 2, heading: 'Heading 2', paragraph: 'Content 2' },
    // Add more data as needed
  ]);

  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);

    setCurrentItemIndex((prevIndex) => {
      let newIndex = prevIndex + delta;
      if (newIndex < 0) {
        newIndex = data.length - 1;
      } else if (newIndex >= data.length) {
        newIndex = 0;
      }
      return newIndex;
    });
  };

  // Disable scrolling on the body and html elements
  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  };

  // Enable scrolling on the body and html elements
  const enableScroll = () => {
    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
  };

  return (
    <>
    <div
      style={{ height: '300px', overflowY: 'auto' }}
      onWheel={(event) => {
        handleScroll(event);
        disableScroll();
      }}
      onMouseLeave={enableScroll}
    >
      {data.map((item, index) => (
        <div key={item.id} style={{ display: index === currentItemIndex ? 'block' : 'none' }}>
          <h2>{item.heading}</h2>
          <p>{item.paragraph}</p>
        </div>
      ))}
    </div>
      
      </>
  );
};

export default ScrollComponent;
