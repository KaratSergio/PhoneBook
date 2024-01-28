import {Logo} from './Logo/Logo'
import css from './Home.module.css'

export const Home = () => {
  return (
    <section className={css['container']}>
      <div>
        <h1>
          Welcome to <span>Phonebook</span>!
        </h1>
        <p>enjoy every moment</p>
      </div>
    <div>
      <Logo />
    </div>
    </section>
  );
};

export default Home;
