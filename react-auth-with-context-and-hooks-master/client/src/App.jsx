import React from "react";
import Router from "./Router";
import ContextProvider from "./context/contextProvider";
import ErrorBoundary from "./errorBoundary";

export default function App(props) {
  return (
    <ErrorBoundary>
      <ContextProvider>
        <div className="container">
          <Router />
        </div>
      </ContextProvider>
    </ErrorBoundary>
  );
}
