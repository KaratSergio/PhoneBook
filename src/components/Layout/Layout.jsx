import { useState } from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import { useTranslation } from 'react-i18next';

import css from './Layout.module.css';

export const Layout = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = lang => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <div className={css['container']}>
      <div className={css['language-switch']}>
        <button
          onClick={() => changeLanguage('ua')}
          disabled={currentLanguage === 'ua'}
        >
          UA
        </button>
        <button
          onClick={() => changeLanguage('en')}
          disabled={currentLanguage === 'en'}
        >
          EN
        </button>
      </div>

      <section className={css['navigation']}>
        <Navigation />
      </section>
      <section>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default Layout;
