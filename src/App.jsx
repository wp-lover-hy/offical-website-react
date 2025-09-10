import React, { useState, useEffect } from 'react';
import { ViewMyCardBlock } from './components/MyCardBlock/ViewMyCardBlock';
import { EditMyCardBlock } from './components/MyCardBlock/EditMyCardBlock';

function App() {
  // Simulate Gutenberg attributes state management
  const [attributes, setAttributes] = useState({
    title: 'Hello World',
    content: 'This is a responsive card component ready for Gutenberg.',
    showCta: true,
  });

  const workbenchStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const appStyles = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '40px',
    backgroundColor: '#f0f0f1',
    padding: '20px',
    borderRadius: '8px',
  };

  // Media query for larger screens
  if (window.matchMedia('(min-width: 768px)').matches) {
    appStyles.gridTemplateColumns = '1fr 1fr';
    appStyles.padding = '40px';
  }

  const columnStyles = {
    padding: '24px',
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '4px'
  };

  const headingStyles = {
    borderBottom: '2px solid #ddd',
    paddingBottom: '16px',
    marginBottom: '24px',
    color: '#1e1e1e',
    fontSize: '20px'
  };

  console.log('App component rendered, attributes:', attributes);
  console.log('Current time:', new Date().toISOString());

  // 使用 useEffect 确保在组件挂载时也能看到日志
  useEffect(() => {
    console.log('App component mounted, initial attributes:', attributes);
  }, []);

  // 监听 attributes 变化
  useEffect(() => {
    console.log('Attributes changed:', attributes);
  }, [attributes]);

  return (
    <main style={workbenchStyles}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Component Workbench</h1>
      <div style={appStyles}>
        <section style={columnStyles}>
          <h2 style={headingStyles}>EDIT View (Editor Experience)</h2>
          <EditMyCardBlock attributes={attributes} setAttributes={setAttributes} />
        </section>
        <section style={columnStyles}>
          <h2 style={headingStyles}>VIEW (Frontend Output)</h2>
          <ViewMyCardBlock attributes={attributes} />
        </section>
      </div>
    </main>
  );
}

export default App;
