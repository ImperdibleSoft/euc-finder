import React from 'react';

export const useSidebar = () => {
  const [open, setOpen] = React.useState(false);

  const handleCloseSidebar = () => {
    setOpen(false);
  };

  const handleOpenSidebar = () => {
    setOpen(true);
  };

  return {
    handleCloseSidebar,
    handleOpenSidebar,
    open
  };
};