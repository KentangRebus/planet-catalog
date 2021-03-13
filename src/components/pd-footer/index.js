import React from "react";
import Wave from "react-wavify";

function PdFooter() {
  return (
    <div className='mt-5'>
      <Wave fill='url(#gradient)'>
        <defs>
          <linearGradient id='gradient' gradientTransform='rotate(90)'>
            <stop offset='10%' stopColor='#bf6ddb' />
            <stop offset='90%' stopColor='#6f4aaa' />
          </linearGradient>
        </defs>
      </Wave>
      <div
        className='text-center py-1'
        style={{ color: "white", backgroundColor: "#6f4aa9" }}>
        @Copyright by Steve 2021
      </div>
    </div>
  );
}

export default PdFooter;
