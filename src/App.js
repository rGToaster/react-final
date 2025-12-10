import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // Props for Banner component
  const bannerProps = {
    title: "ADD 147 Final"
  };

  // Props for Main component
  const mainProps = {
    heading: "React Components & jQuery Demonstrations",
    description: "This page demonstrates React components with props, JSON data display, jQuery animations, and jQuery AJAX functionality. All sections are labeled with appropriate titles and descriptions."
  };

  // Props for Footer component
  const footerProps = {
    copyright: "© Anthony Cervantes Brito.",
    date: "December 9, 2025"
  };

  return (
    <div className="App">
      <Banner {...bannerProps} />
      <Main {...mainProps} />
      <Footer {...footerProps} />
    </div>
  );
}

export default App;
