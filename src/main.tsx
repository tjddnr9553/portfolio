import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/index.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import App from '@/App';

createRoot(document.getElementById('root')!).render(
  // eslint-disable-next-line react/react-in-jsx-scope
  <StrictMode>
    {/* eslint-disable-next-line react/react-in-jsx-scope */}
    <App />
  </StrictMode>,
);
