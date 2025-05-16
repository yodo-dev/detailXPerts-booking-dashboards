import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeltonLoader({
  rows = 5,
  columns = [200, 150, 100, 200],
  showHeader = true,
}) {
  return (
    <div className="" style={{ padding: "20px" }}>
      {/* Header skeleton */}
      {showHeader && (
        <div
          style={{
            display: "flex",
            marginBottom: "10px",
            gap: "20px",
            fontWeight: "bold",
          }}
        >
          {columns.map((width, index) => (
            <Skeleton
              key={index}
              width="110px"
              height={15}
              style={{ color: "#E5E7EB" }}
              highlightColor="#E1EBEE"
            />
          ))}
        </div>
      )}

      {/* Body skeleton */}
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            marginBottom: "10px",
            gap: "20px",
          }}
        >
          {columns.map((width, colIndex) => (
            <Skeleton
              key={colIndex}
              width="110px"
              height={15}
              highlightColor="#F1F3FB"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default SkeltonLoader;
