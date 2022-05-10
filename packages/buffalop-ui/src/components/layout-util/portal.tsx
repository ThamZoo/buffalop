import React, { useMemo, useLayoutEffect, forwardRef, useImperativeHandle } from 'react';

import { createPortal } from 'react-dom';

export const Portal = forwardRef(function (props: any, parentRef) {
  let { append, children, locationRef, className, parent, element = 'div' } = props;

  if (typeof locationRef == 'string') {
    let modal: any = document.querySelector(locationRef);

    if (!modal) {
      modal = document.createElement('div');

      if (locationRef.startsWith('#')) {
        modal.id = locationRef.replace('#', '');
      } else if (locationRef.startsWith('.')) {
        modal.className = locationRef.replace('.', '');
      }

      document.body.appendChild(modal);
    }

    locationRef = { current: modal };
  }

  const el = parent || useMemo(() => document.createElement(element), []);

  el.setAttribute('data-slot', '');

  useImperativeHandle(parentRef, () => locationRef.current);

  useLayoutEffect(() => {
    if (!locationRef.current) return;

    if (!append) {
      locationRef.current.innerHTML = '';
    }

    if (className) {
      locationRef.current.classList.add(className);
    }

    locationRef.current.appendChild(el);

    return () => {
      if (locationRef.current) {
        locationRef.current.removeChild(el);
      }
    };
  }, [locationRef.current]);

  return createPortal(children, el);
});
