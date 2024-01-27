import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css['container']}>
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
