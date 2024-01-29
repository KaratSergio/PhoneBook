import { Logo } from './Logo/Logo';
import css from './Home.module.css';
import iconReact from '../../img/react-logo.png';

export const Home = () => {
  return (
    <section className={css['container']}>
      <div>
        <h1>
          Welcome to <span>Phonebook</span>!
        </h1>
        <div className={css['react-logo-box']}>
          <p>created on <span>React</span></p>
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
