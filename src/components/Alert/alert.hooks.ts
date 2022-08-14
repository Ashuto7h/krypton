import { useEffect, useState } from 'react';
import { invalidThemeException } from '../../exceptions';
import { THEMES, themeKeyList } from '../../themes';
import type { TThemeKeys } from '../../themes/themes.types';

const useAlert = (open: boolean, theme?: TThemeKeys, timer = 0) => {
  if (theme && !themeKeyList.includes(theme)) {
    invalidThemeException(theme);
  }
  const themeStyles = THEMES[theme ?? 'primary'] || THEMES.primary;
  const [showAlert, setShowAlert] = useState<boolean>(open);
  useEffect(() => {
    if (open) {
      if (!showAlert) {
        setShowAlert(true);
      }
      if (timer !== 0 && timer) {
        setTimeout(() => {
          if (showAlert) {
            setShowAlert(false);
          }
        }, timer);
      }
    } else if (!open) {
      if (showAlert) {
        setShowAlert(false);
      }
    }
  }, [open]);
  return { showAlert, themeStyles };
};
export { useAlert };
