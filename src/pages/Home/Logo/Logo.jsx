import css from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={css['container']}>
      <div className={css['main-box']}>
        <div className={css['rectangle-left']}>
          <p className={css['logo-text']}>GO</p>
        </div>
        <div className={css['triangle']}></div>
      </div>
      <div>
        <div className={css['rectangle-right']}>
          <p className={css['logo-text']}>IT</p>
        </div>
        <div className={css['accent-text']}>
          <p>school</p>
        </div>
      </div>
    </div>
  );
};

export default Logo;
