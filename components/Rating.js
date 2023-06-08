import React from 'react'

const Rating = ({rating}) => {
  return (
    <div className="flex my-1">
      {rating < 1 ? (
        <img
          src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
          alt="star"
        />
      ) : (
        <img src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" />
      )}
      {rating < 2 ? (
        <img
          src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
          alt="star"
        />
      ) : (
        <img src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" />
      )}
      {rating < 3 ? (
        <img
          src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
          alt="star"
        />
      ) : (
        <img src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" />
      )}
      {rating < 4 ? (
        <img
          src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
          alt="star"
        />
      ) : (
        <img src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" />
      )}
      {rating < 5 ? (
        <img
          src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
          alt="star"
        />
      ) : (
        <img src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" />
      )}
    </div>
  );
}

export default Rating