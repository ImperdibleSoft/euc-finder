import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  target?: 'modal' | 'sidebar' | 'tutorial' | 'buddy';
}

const Portal: React.FC<PropsWithChildren<Props>> = ({ children, target = 'modal' }) => {
  const rootElemRef = useRef(global.document.createElement('div'));
  const [portalRoot, setPortalRoot] = useState(global.document.getElementById(`${ target }-root`));

  useEffect(() => {
    if (!portalRoot) {
      setPortalRoot(global.document.getElementById(`${ target }-root`));
    }
  }, [portalRoot, target]);

  useEffect(() => {
    if (portalRoot) {
      portalRoot.appendChild(rootElemRef.current);
    }

    return () => {
      if (portalRoot) {
        // Fix for IE11
        portalRoot.removeChild(rootElemRef.current);
        // @ts-ignore
        rootElemRef.current = undefined;
      }
    };
  }, [portalRoot]);

  if (!portalRoot) {
    return null;
  }

  return createPortal(children, rootElemRef.current);
};

export default Portal;