export type LevelType = "html" | "css" | "js";

export type Level = {
  instructions: string;
};

export const levels: Record<LevelType, Level> = {
  html: {
    instructions:
      "Complétez le code HTML pour créer une page web simple. Placez les balises aux bons endroits.",
  },
  css: {
    instructions:
      "Complétez le code CSS pour styliser une page web simple. Ajoutez les propriétés manquantes.",
  },
  js: {
    instructions:
      "Complétez la fonction JavaScript qui détermine si un nombre est positif, négatif ou zéro.",
  },
};
