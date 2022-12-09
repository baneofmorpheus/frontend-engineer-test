import axios, { AxiosError } from 'axios';
import { ToastMessage } from 'primereact/toast';

const errorHandler = (error: any | AxiosError): ToastMessage => {
  /**Handle normal errors */
  if (!axios.isAxiosError(error)) {
    return {
      severity: 'error',
      summary: 'System error',
      detail: error.message,
    };
  }

  if (!error.response) {
    return {
      severity: 'error',
      summary: 'Network error',
      detail: error.message,
      life: 10000,
    };
  }
  /**Handle axios errors */
  const data: any = error.response!.data;

  return {
    severity: 'error',
    summary: 'System error',
    detail: data.message || 'Something went wrong',
    life: 10000,
  };
};
export default errorHandler;
