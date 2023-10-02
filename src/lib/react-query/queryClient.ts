import { QueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';

interface PossibleError {
  response?: {
    data?: {
      alert: {
        title: string;
        message: string;
      };
    };
  };
  message?: string;
  toString: () => string;
}

export function queryErrorHandler(err: unknown): void {
  const error = err as PossibleError;

  const message: string =
    (error.response &&
      error.response.data &&
      error.response.data.alert.message) ||
    error.message ||
    error.toString();

  toast.error(message);
}

export default new QueryClient({
  defaultOptions: {
    queries: {
      onError: queryErrorHandler,
    },
    mutations: {
      onError: queryErrorHandler,
    },
  },
});
