import "../assets/styles/AboutPage.css";

function AboutPage() {
  return (
    <main className="main-about">
      <h2>
        Créé par 4 devs à bout d’énergie. Cette image résume bien la fin du
        ProtoJam.
      </h2>
      <img
        src="about-image.png"
        alt="img de poussins avec nos prénoms"
        className="logo"
      />
      <h2>Voici nos liens GitHub :</h2>
      <div className="github-links">
        <a
          href="https://github.com/messicaa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button">
            <img src="icone-github.png" alt="Icone de github" />
            Messica
          </button>
        </a>
        <a
          href="https://github.com/K-Smagghe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button">
            <img src="icone-github.png" alt="Icone de github" />
            Kévin
          </button>
        </a>
        <a
          href="https://github.com/sadnxssdlm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button">
            <img src="icone-github.png" alt="Icone de github" />
            Alexandre
          </button>
        </a>
        <a
          href="https://github.com/Tristanzubi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button">
            <img src="icone-github.png" alt="Icone de github" />
            Tristan
          </button>
        </a>
      </div>
    </main>
  );
}

export default AboutPage;
