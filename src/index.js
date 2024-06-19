import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App';
import './index.css';
//Localization
import { I18nextProvider } from 'react-i18next';
import i18n from './locales/i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/PhoneBook">
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </I18nextProvider>
  </BrowserRouter>
);
