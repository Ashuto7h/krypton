import { useEffect, useState } from 'react';

const useAlert = (open: boolean, timer = 0) => {
  const [showAlert, setShowAlert] = useState<boolean>(open);
  useEffect(() => {
    if (open && timer !== 0 && timer) {
      setTimeout(() => {
        setShowAlert(false);
      }, timer);
    } else if (!open) {
      setShowAlert(false);
    }
  }, [open]);
  return { showAlert };
};
export { useAlert };
