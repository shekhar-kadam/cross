import React, { Suspense } from "react";
import "./App.css";
// import AppRoutes from "./routes/routes";

const AppRoutes = React.lazy(() => import("./routes/routes"));

function App() {
  return (
    <Suspense fallback={<div className="text-center">Loading</div>}>
      <AppRoutes />
    </Suspense>
  );
}

export default App;
