import React from 'react';
import ReactDOM from 'react-dom/client';
import '~/assets/scss/tailwind.scss';
import App from '~/App.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'sonner';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
      <Toaster richColors position="bottom-right" />
      <ReactQueryDevtools buttonPosition="bottom-right" position="right" />
    </QueryClientProvider>
  </React.StrictMode>,
);
