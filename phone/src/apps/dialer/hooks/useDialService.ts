import { useNuiEvent } from 'fivem-nui-react-lib';
import { CallEvents } from '@typings/call';
import { IAlert, useSnackbar } from '@os/snackbar/hooks/useSnackbar';
import { useTranslation } from 'react-i18next';
import { PhoneApps } from '../../../../../typings/phone';

export const useDialService = () => {
  const { addAlert } = useSnackbar();
  const [t] = useTranslation();

  const handleAddAlert = ({ message, type }: IAlert) => {
    addAlert({
      message: t(`APPS_${message}`),
      type,
    });
  };

  useNuiEvent(PhoneApps.DIALER, CallEvents.SEND_ALERT, handleAddAlert);
};
