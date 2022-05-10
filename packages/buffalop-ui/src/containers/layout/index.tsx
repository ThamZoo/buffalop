import React, { createRef, useEffect } from 'react';

import { ErrorBoundary, Slot } from '../../components/layout-util';
import $ from './layout.module.scss';

const navRef: any = createRef();
const sideRef: any = createRef();

export default function Router({ children }: any) {
  return (
    <ErrorBoundary>
      <div className={$.layout}>
        <nav ref={navRef}></nav>
        <div className="sidebar" ref={sideRef}></div>
        {children}
      </div>
    </ErrorBoundary>
  );
}

Router.Nav = function (props: any) {
  return <Slot {...props} locationRef={navRef} />;
};

Router.Sidebar = function (props: any) {
  return <Slot {...props} locationRef={sideRef} />;
};
