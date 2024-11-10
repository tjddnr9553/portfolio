import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '/src/index.css';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import App from '/src/App.tsx';
createRoot(document.getElementById('root')).render(
// eslint-disable-next-line react/react-in-jsx-scope
_jsx(StrictMode, { children: _jsx(App, {}) }));
