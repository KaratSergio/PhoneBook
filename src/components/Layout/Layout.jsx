import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';

const Layout = () => {
  return (
    <div>
      <section>
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
