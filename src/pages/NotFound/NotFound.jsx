import css from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={css['container']}>
      <h1>404 - Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
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
