import { useTranslation } from 'react-i18next';
import iconReact from '../../img/react-logo.png';
import { Logo } from './Logo/Logo';

import css from './Home.module.css';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <section className={css['container']}>
      <div>
        <h1>{t('homeWelcome')}</h1>
        <div className={css['react-logo-box']}>
          <p>
            {t('homeCreatedOn')}
            <span>React</span>
          </p>
          <img className={css['react-logo']} src={iconReact} alt="Icon" />
        </div>
      </div>
      <div>
        <Logo />
      </div>
    </section>
  );
};

export default Home;
