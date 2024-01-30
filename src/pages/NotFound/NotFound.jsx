import { useTranslation } from 'react-i18next';

import css from './NotFound.module.css';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className={css['container']}>
      <h1>{t('notFoundTitle')}</h1>
      <p>{t('notFoundMessage')}</p>
      <div className={css['glow']}></div>
      <div className={css['frame']}>
        <div className={css['top']}></div>
        <div className={css['body-lamp']}>
          <div className={css['gooey']}>
            <div className={css['bubble']}></div>
            <div className={css['bubble']}></div>
            <div className={css['bubble']}></div>
            <div className={css['bubble']}></div>
            <div className={css['bubble']}></div>
          </div>
        </div>
        <div className={css['base-lamp']}></div>
        <div className={css['base']}></div>
      </div>
    </div>
  );
};

export default NotFound;
