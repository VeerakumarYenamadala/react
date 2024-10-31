import React from 'react';
import Header from './Header';

const App: React.FC = () => {
  const menuItems = [
    { label: 'Home', link: '#home' },
    { label: 'About', link: '#about' },
    { label: 'Services', link: '#services' },
    { label: 'Contact', link: '#contact' },
  ];

  return (
    <div className="App">
      <Header menuItems={menuItems} />
      <main>
        <h2>Welcome to MyApp!</h2>
        <p>This is the main content of the application.</p>
      </main>
    </div>
  );
};

export default App;
