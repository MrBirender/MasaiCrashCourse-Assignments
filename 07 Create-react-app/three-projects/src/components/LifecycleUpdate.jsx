import React, { useState, useEffect } from 'react';

const LifecycleUpdate = () => {
  const [count, setCount] = useState(0);

  // Simulating componentDidMount (runs once when the component mounts)
  useEffect(() => {
    console.log('Component mounted');
    document.title = 'Welcome to the Counter App'; // Initial title

    // Cleanup function for when the component unmounts (optional)
    return () => {
      console.log('Component will unmount');
      document.title = 'React App'; // Reset title when unmounting
    };
  }, []); // Empty dependency array ensures this runs only on mount

  // Simulating componentDidUpdate (runs when 'count' changes)
  useEffect(() => {
    if (count > 0) {
      document.title = `You clicked ${count} times`; // Update title after count changes
      console.log(`Count updated to ${count}`);
    }
  }, [count]); // Runs whenever the 'count' state changes

  return (
    <div>
      <h1>Document Title Updater</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default LifecycleUpdate;
