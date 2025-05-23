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
      { type: "line", content: "<!DOCTYPE html>", id: "html-1" },
      { type: "line", content: "<html>", id: "html-2" },
      { type: "line", content: "  <head>", id: "html-3" },
      { type: "line", content: "    <title>Ma Page</title>", id: "html-4" },
      { type: "line", content: "  </head>", id: "html-5" },
      { type: "line", content: "  <body>", id: "html-6" },
      { type: "line", content: "    <h1>Bonjour le monde!</h1>", id: "html-7" },
      { type: "line", content: "  </body>", id: "html-8" },
      { type: "line", content: "</html>", id: "html-9" },
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
      { type: "line", content: "body {", id: "css-1" },
      {
        type: "line",
        content: "  font-family: Arial, sans-serif;",
        id: "css-2",
      },
      { type: "line", content: "  margin: 0;", id: "css-3" },
      { type: "line", content: "  padding: 20px;", id: "css-4" },
      { type: "line", content: "}", id: "css-5" },
      { type: "line", content: "", id: "css-6" },
      { type: "line", content: "h1 {", id: "css-7" },
      { type: "line", content: "  color: #333;", id: "css-8" },
      { type: "line", content: "  text-align: center;", id: "css-9" },
      { type: "line", content: "}", id: "css-10" },
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
        type: "line",
        content: "function verifierNombre(nombre) {",
        id: "js-1",
      },
      {
        type: "line",
        content: "  if (nombre > 0) {",
        id: "js-2",
      },
      {
        type: "line",
        content: "    return 'positif';",
        id: "js-3",
      },
      {
        type: "line",
        content: "  } else if (nombre < 0) {",
        id: "js-4",
      },
      {
        type: "line",
        content: "    return 'négatif';",
        id: "js-5",
      },
      {
        type: "line",
        content: "  } else {",
        id: "js-6",
      },
      {
        type: "line",
        content: "    return 'zéro';",
        id: "js-7",
      },
      {
        type: "line",
        content: "  }",
        id: "js-8",
      },
      {
        type: "line",
        content: "}",
        id: "js-9",
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
