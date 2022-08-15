import { useEffect, useState } from 'react';
import { invalidThemeException } from '../../exceptions';
import { THEMES, themeKeyList } from '../../themes';
import type { TThemeKeys } from '../../themes/themes.types';

const useAlert = (open: boolean, theme?: TThemeKeys, timer = 0, delay = 0) => {
  const themeStyles = THEMES[theme ?? 'primary'] || THEMES.primary;
  const [showAlert, setShowAlert] = useState(open);
  const [isClosing, setIsClosing] = useState(false);
  // eslint-disable-next-line init-declarations, @typescript-eslint/init-declarations
  let timeout: NodeJS.Timeout;

  const closeAlert = () => {
    setIsClosing(true);
    setTimeout(() => {
      setShowAlert(false);
    }, delay);
    clearTimeout(timeout);
  };

  useEffect(() => {
    if (open) {
      if (!showAlert) {
        setShowAlert(true);
      }
      if (isClosing) {
        setIsClosing(false);
      }
      if (timer !== 0 && timer) {
        timeout = setTimeout(() => {
          closeAlert();
        }, timer);
      }
    } else {
      closeAlert();
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [open]);

  if (theme && !themeKeyList.includes(theme)) {
    invalidThemeException(theme);
  }

  return { isClosing, showAlert, themeStyles };
};
export { useAlert };
