import { useSnackbar } from 'notistack';

export const useToast = () => {
  const { enqueueSnackbar } = useSnackbar();

  return {
    showSuccess: (msg) => enqueueSnackbar(msg, { variant: 'success' }),
    showError: (msg) => enqueueSnackbar(msg, { variant: 'error' }),
    showInfo: (msg) => enqueueSnackbar(msg, { variant: 'info' }),
  };
};
