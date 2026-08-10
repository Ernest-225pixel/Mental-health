import Disclaimer from "../components/Disclaimer";

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <p className="hero-label">WELCOME TO MINDSPACE</p>

        <h1>
          You don't have to face
          <span> everything alone.</span>
        </h1>

        <p className="hero-text">
          A student community where you can share academic or personal
          problems and receive ideas from other students.
        </p>

        <div className="hero-buttons">
          <a href="/create" className="primary-button">
            Share a Problem
          </a>

          <a href="/feed" className="secondary-button">
            Explore Community
          </a>
        </div>
      </section>

      <Disclaimer />
    </main>
  );
}

export default Home;
