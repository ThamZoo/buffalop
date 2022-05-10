import { ErrorBoundary } from "./er-bound";
import { Portal } from "./portal";
import React from "react";

export const Slot = ({
  locationRef,
  children,
  append = false,
  ...other
}: any) => {
  return (
    <ErrorBoundary>
      <Portal {...{ locationRef, children, append, ...other }} />
    </ErrorBoundary>
  );
};
