export type LevelType = "html" | "css" | "js";

export type Level = {
  instructions: string;
  code: CodeLine[];
  blocks: string[];
  solutions: Record<string, string>;
};

export type CodeLine = {
  id: string;
  type: "line";
  content: string;
  class?: string;
  dropzone?: string;
};

export const levels: Record<LevelType, Level> = {
  html: {
    instructions:
      "Complétez le code HTML pour créer une page web simple. Placez les balises aux bons endroits.",
    code: [
      { id: "html-1", type: "line", content: "<!DOCTYPE html>" },
      { id: "html-2", type: "line", content: "<html>" },
      { id: "html-3", type: "line", content: "  <head>" },
      {
        id: "html-4",
        type: "line",
        content: "    <title>Ma Page</title>",
        dropzone: "title",
      },
      { id: "html-5", type: "line", content: "  </head>" },
      { id: "html-6", type: "line", content: "  <body>" },
      {
        id: "html-7",
        type: "line",
        content: "    <h1>Bonjour le monde!</h1>",
        dropzone: "h1",
      },
      { id: "html-8", type: "line", content: "    ", dropzone: "p" },
      { id: "html-9", type: "line", content: "    ", dropzone: "img" },
      { id: "html-10", type: "line", content: "    ", dropzone: "ul" },
      { id: "html-11", type: "line", content: "  </body>" },
      { id: "html-12", type: "line", content: "</html>" },
    ],
    blocks: [
      "title>Ma première page web</title>",
      "h1>Bienvenue sur ma page</h1>",
      "p>Ceci est un paragraphe de texte simple.</p>",
      'img src="image.jpg" alt="Une image">',
      "ul>",
    ],
    solutions: {
      title: "title>Ma première page web</title>",
      h1: "h1>Bienvenue sur ma page</h1>",
      p: "p>Ceci est un paragraphe de texte simple.</p>",
      img: 'img src="image.jpg" alt="Une image">',
      ul: "ul>",
    },
  },

  css: {
    instructions:
      "Complétez le code CSS pour styliser une page web simple. Ajoutez les propriétés manquantes.",
    code: [
      { id: "css-1", type: "line", content: "body {" },
      { id: "css-2", type: "line", content: "  ", dropzone: "font-family" },
      { id: "css-3", type: "line", content: "  margin: 0;" },
      { id: "css-4", type: "line", content: "  padding: 20px;" },
      {
        id: "css-5",
        type: "line",
        content: "  ",
        dropzone: "background-color",
      },
      { id: "css-6", type: "line", content: "}" },
      { id: "css-7", type: "line", content: "" },
      { id: "css-8", type: "line", content: "h1 {" },
      { id: "css-9", type: "line", content: "  ", dropzone: "color" },
      { id: "css-10", type: "line", content: "  text-align: center;" },
      { id: "css-11", type: "line", content: "  ", dropzone: "font-size" },
      { id: "css-12", type: "line", content: "}" },
      { id: "css-13", type: "line", content: "" },
      { id: "css-14", type: "line", content: ".container {" },
      { id: "css-15", type: "line", content: "  ", dropzone: "width" },
      { id: "css-16", type: "line", content: "}" },
    ],

    blocks: [
      "font-family: Arial, sans-serif;",
      "background-color: #f0f0f0;",
      "color: #333333;",
      "font-size: 16px;",
      "width: 100%;",
    ],
    solutions: {
      "font-family": "font-family: Arial, sans-serif;",
      "background-color": "background-color: #f0f0f0;",
      color: "color: #333333;",
      "font-size": "font-size: 16px;",
      width: "width: 100%;",
    },
  },
  js: {
    instructions:
      "Complétez la fonction JavaScript qui détermine si un nombre est positif, négatif ou zéro.",
    code: [
      {
        id: "js-1",
        type: "line",
        content: "function verifierNombre(nombre) {",
      },
      { id: "js-2", type: "line", content: "  ", dropzone: "if" },
      { id: "js-3", type: "line", content: "    return 'positif';" },
      { id: "js-4", type: "line", content: "  } ", dropzone: "else" },
      { id: "js-5", type: "line", content: "    ", dropzone: "return" },
      { id: "js-6", type: "line", content: "  } else {" },
      { id: "js-7", type: "line", content: "    return 'zéro';" },
      { id: "js-8", type: "line", content: "  }" },
      { id: "js-9", type: "line", content: "}" },
      { id: "js-10", type: "line", content: "" },
      { id: "js-11", type: "line", content: "// Exemple d'utilisation" },
      { id: "js-12", type: "line", content: "", dropzone: "const" },
      {
        id: "js-13",
        type: "line",
        content: "console.log(verifierNombre(monNombre));",
      },
    ],

    blocks: [
      "if (nombre > 0) {",
      "else if (nombre < 0) {",
      'return "Négatif";',
      "const monNombre = 42;",
    ],

    solutions: {
      if: "if (nombre > 0) {",
      else: "else if (nombre < 0) {",
      return: 'return "Négatif";',
      const: "const monNombre = 42;",
    },
  },
};
