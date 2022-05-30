import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Routers } from './routers/Routers';
import { setupStore } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore()

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers/>
    </Provider>
  </React.StrictMode>
);
