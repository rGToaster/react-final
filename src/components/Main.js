import React, { useEffect } from 'react';
import './Main.css';

function Main({ heading, description }) {
  // JSON Data - TV Shows
  const tvShows = [
    {
      name: "Breaking Bad",
      mainCharacter: "Walter White",
      network: "AMC",
      startDate: "January 20, 2008"
    },
    {
      name: "The Office",
      mainCharacter: "Michael Scott",
      network: "NBC",
      startDate: "March 24, 2005"
    },
    {
      name: "Stranger Things",
      mainCharacter: "Eleven",
      network: "Netflix",
      startDate: "July 15, 2016"
    },
    {
      name: "Game of Thrones",
      mainCharacter: "Jon Snow",
      network: "HBO",
      startDate: "April 17, 2011"
    },
    {
      name: "The Crown",
      mainCharacter: "Queen Elizabeth II",
      network: "Netflix",
      startDate: "November 4, 2016"
    }
  ];

  useEffect(() => {
    // Wait for jQuery to be available and DOM to be ready
    const initJQuery = () => {
      if (window.jQuery) {
        const $ = window.jQuery;

        // Reset animation position first
        $('#animateDiv').css({
          left: '-400px',
          marginLeft: '0'
        });

        // jQuery Animation - Button to trigger animation
        $('#animateBtn').off('click').on('click', function () {
          const $div = $('#animateDiv');

          // Stop any ongoing animation
          $div.stop(true, false);

          // Reset to starting position
          $div.css({
            left: '-400px',
            marginLeft: '0'
          });

          // Animate to center
          $div.animate({
            left: '50%',
            marginLeft: '-200px'
          }, 'slow', function () {
            // After animation completes, reset back to starting position
            setTimeout(() => {
              $div.animate({
                left: '-400px',
                marginLeft: '0'
              }, 'slow');
            }, 1000); // Wait 1 second before resetting
          });
        });

        // jQuery AJAX - Load text file content
        // Remove any existing handlers first to prevent duplicates
        $('#loadContentBtn').off('click').on('click', function () {
          $.ajax({
            url: '/content.txt',
            method: 'GET',
            dataType: 'text',
            success: function (data) {
              $('#ajaxContent').html(data);
            },
            error: function (xhr, status, error) {
              $('#ajaxContent').html('<p style="color: red;">Error loading content: ' + error + '</p>');
            }
          });
        });
      } else {
        // Retry if jQuery isn't loaded yet
        setTimeout(initJQuery, 100);
      }
    };

    initJQuery();
  }, []);

  return (
    <main className="main-content">
      <h2>{heading}</h2>
      <p className="description">{description}</p>

      {/* JSON Section */}
      <section className="json-section">
        <h2>TV Shows Database</h2>
        <p className="section-description">
          This section displays 5 TV show records stored in JSON format. Each record contains
          the show name, main character, network/streaming service, and start date.
        </p>
        <div className="tv-shows-container">
          {tvShows.map((show, index) => (
            <div key={index} className="tv-show-card">
              <h3>{show.name}</h3>
              <p><strong>Main Character:</strong> {show.mainCharacter}</p>
              <p><strong>Network/Streaming Service:</strong> {show.network}</p>
              <p><strong>Start Date:</strong> {show.startDate}</p>
            </div>
          ))}
        </div>
      </section>

      {/* jQuery Animation Section */}
      <section className="jquery-animation-section">
        <h2>jQuery Animation Demo</h2>
        <p className="section-description">
          This section demonstrates jQuery animation. A div containing an h2 heading,
          paragraph, and small image starts positioned off-screen to the left and animates
          to the center of the browser window using jQuery's animate function with 'slow' speed.
          Click the button below to trigger the animation.
        </p>
        <button id="animateBtn" className="animate-button">
          Start Animation
        </button>
        <div className="animation-container">
          <div id="animateDiv" className="animated-div">
            <h2>Animated Content</h2>
            <p>This div animates from the left side of the screen to the center!</p>
            <img
              src="/logo192.png"
              alt="Small stamp-sized image"
              className="stamp-image"
            />
          </div>
        </div>
      </section>

      {/* jQuery AJAX Section */}
      <section className="jquery-ajax-section">
        <h2>jQuery AJAX Content Loader</h2>
        <p className="section-description">
          This section demonstrates jQuery AJAX functionality. Click the button below to
          load and display content from a text file using jQuery's AJAX method.
        </p>
        <button id="loadContentBtn" className="ajax-button">
          Load Content from Text File
        </button>
        <div id="ajaxContent" className="ajax-content"></div>
      </section>
    </main>
  );
}

export default Main;

