import css from './Home.module.css'

export const Home = () => {
  return (
    <section className={css['container']}>
      <h1>
        Welcome to <span>Phonebook</span>!
      </h1>
      <p>enjoy every moment</p>
    </section>
  );
};

export default Home;
