import React from "react";
import Image from "next/image";

const Rating = ({ rating }) => {
  return (
    <div className="flex my-1">
      {rating < 1 ? (
        <Image
          src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
          alt="star"
        />
      ) : (
        <Image src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" alt="star" />
      )}
      {rating < 2 ? (
        <Image
          src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
          alt="star"
        />
      ) : (
        <Image src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" alt="star" />
      )}
      {rating < 3 ? (
        <Image
          src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
          alt="star"
        />
      ) : (
        <Image src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" alt="star" />
      )}
      {rating < 4 ? (
        <Image
          src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
          alt="star"
        />
      ) : (
        <Image src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png" alt="star" />
      )}
      {rating < 5 ? (
        <Image
          src="https://img.icons8.com/fluency-systems-regular/18/6b7280/star--v1.png"
          alt="star"
        />
      ) : (
        <Image
          src="https://img.icons8.com/fluency-systems-filled/18/6b7280/star.png"
          alt="star"
        />
      )}
    </div>
  );
};

export default Rating;
