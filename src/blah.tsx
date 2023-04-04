import React from 'react';

function TopBanner(props: any) {
  return (
    <>
      <div>
        <h1>This is Joel Hilton's website for Movies!!!</h1>
        <p>This is a list of movies that Joel Hilton has in his possession</p>
        <img
          src="./JoelHiltonHeadshot.jpg"
          alt="JoelHiltonHeadshot"
          style={{ width: '500px', height: 'auto' }}
        />
      </div>
    </>
  );
}

export default TopBanner;
