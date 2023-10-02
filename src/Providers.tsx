import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';

import queryClient from './lib/react-query/queryClient';
import CustomToast from './components/ui/CustomToast';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {/* Toast, Customized */}
      <Toaster>{(t) => <CustomToast toastInstance={t} />}</Toaster>
    </QueryClientProvider>
  );
};

export default Providers;
