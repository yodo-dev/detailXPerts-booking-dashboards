import React, { Suspense } from "react";
import AllRoutes from "@routes/AllRoutes";
const App: React.FC = () => {
  return (
    <div>
      <Suspense fallback="loading..........">
        <AllRoutes />
      </Suspense>
    </div>
  );
};

export default App;
