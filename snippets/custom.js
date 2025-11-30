
const customFixedMacros = [
  ["Q", "ℚ", "\\mathbb{Q}"],
  ["C", "ℂ", "\\mathbb{C}"],
  ["A", "𝔸", "\\mathbb{A}"],
  ["F", "𝔽", "\\mathbb{F}"],
  ["S", "𝕊", "\\mathbb{S}"],
].map(([label, detail, apply]) => ({ label, detail, apply }))

export const custom = [
  ...customFixedMacros,
];
