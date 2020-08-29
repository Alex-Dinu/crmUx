import React from "react";
import Skeleton from "react-loading-skeleton";

function SkeletonCustomers() {
  return (
    <>
      <div className="search">
        <Skeleton height={30} width={300} />
      </div>

      <ul className="customers">
        {Array(6)
          .fill()
          .map((item, index) => (
            <li key={index}>
              <Skeleton height={100} />
            </li>
          ))}
      </ul>
    </>
  );
}

export default SkeletonCustomers;
