type PoussinKey = "" | "poussinyavuz" | "poussinnicolas" | "poussinayoub";

interface CartesCoursProps {
  poussin: PoussinKey;
}

const cartes: Record<
  Exclude<PoussinKey, "">,
  { titre: string; contenu: React.ReactNode }
> = {
  poussinyavuz: {
    titre: "Poussin 1 : HTML",
    contenu: (
      <>
        <p>
          Une page web commence toujours par :{" "}
          <code>&lt;!DOCTYPE html&gt;</code>.
        </p>
        <p>
          Dans <code>&lt;body&gt;</code>, tu y mets tout le contenu visible.
        </p>
        <p>
          Pour afficher ton texte, tu utilises la balise p :{" "}
          <code>&lt;p&gt;Bonjour&lt;/p&gt;</code>.
        </p>
        <p>
          Pour afficher une image, tu utilises la balise img :{" "}
          <code>&lt;img src="chemin-ou-url" /&gt;</code>.
        </p>
      </>
    ),
  },
  poussinnicolas: {
    titre: "Poussin 2 : CSS",
    contenu: (
      <>
        <p>Le CSS sert à styliser ta page (couleurs, tailles...).</p>
        <p>
          On écrit les règles ainsi : <code>{"{ color: blue; }"}</code>.
        </p>
        <p>
          Exemple : <code>color: blue;</code> → texte en bleu.
        </p>
      </>
    ),
  },
  poussinayoub: {
    titre: "Poussin 3 : JavaScript",
    contenu: (
      <>
        <p>JavaScript rend ta page interactive !</p>
        <p>
          On écrit dans <code>&lt;script&gt;&lt;/script&gt;</code>
        </p>
        <p>
          Exemple : <code>alert("Coucou !");</code>
        </p>
      </>
    ),
  },
};

function CartesCours({ poussin }: CartesCoursProps) {
  if (poussin === "") return null;

  const carte = cartes[poussin];

  return (
    <div className="carte">
      <h2>{carte.titre}</h2>
      <div className="contenu">{carte.contenu}</div>
    </div>
  );
}

export default CartesCours;
