const doubleBackslash = "\\\\\\\\";

const layoutEnvironment = (name) => ({
  label: name,
  detail: "\\begin{" + name + "}",
  apply: "\\begin{" + name + "}\n$1\n\\end{" + name + "}"
});

const matrixEnvironment = (name) => ({
  label: name,
  detail: "\\begin{" + name + "}",
  apply: "\\begin{" + name + "}\n  a & b "
    + doubleBackslash
    + "\n  c & d\n\\end{" + name + "}"
});

export const generic = [
  {
    label: "def",
    detail: "\\def",
    apply: "\\def$1{$2}"
  },
  {
    label: "gdef",
    detail: "\\gdef",
    apply: "\\gdef$1{$2}"
  },

  {
    label: "newcommand",
    detail: "\\newcommand",
    apply: "\\newcommand$1[$2]{$2}"
  },

  {
    label: "renewcommand",
    detail: "\\renewcommand",
    apply: "\\renewcommand$1[$2]{$2}"
  },

  {
    label: "providecommand",
    detail: "\\providecommand",
    apply: "\\providecommand$1[$2]{$2}"
  },

  {
    label: "displaystyle",
    detail: "\\displaystyle",
    apply: "\\displaystyle {$1}"
  },

  {
    label: "textstyle",
    detail: "\\textstyle",
    apply: "\\textstyle {$1}"
  },

  {
    label: "binom",
    detail: "\\binom",
    apply: "\\binom{$1}{$2}"
  },

  {
    label: "dbinom",
    detail: "\\dbinom",
    apply: "\\dbinom{$1}{$2}"
  },

  {
    label: "tbinom",
    detail: "\\tbinom",
    apply: "\\tbinom{$1}{$2}"
  },

  {
    label: "brace",
    detail: "\\brace",
    apply: "{$1 \\brace $2}"
  },

  {
    label: "brack",
    detail: "\\brack",
    apply: "{$1 \\brack $2}"
  },

  {
    label: "choose",
    detail: "\\choose",
    apply: "{$1 \\choose $2}"
  },

  {
    label: "over",
    detail: "\\over",
    apply: "{$1 \\over $2}"
  },

  layoutEnvironment("align"),
  layoutEnvironment("aligned"),
  layoutEnvironment("alignat"),
  layoutEnvironment("gather"),
  layoutEnvironment("gathered"),
  layoutEnvironment("equation"),

  layoutEnvironment("align*"),
  layoutEnvironment("alignat*"),
  layoutEnvironment("gather*"),
  layoutEnvironment("equation*"),

  {
    label: "cases",
    detail: "\\begin{cases}",
    apply: "\\begin{cases}\n0, & p " + doubleBackslash + "\n1, & q\n\\end{cases}"
  },

  {
    label: "rcases",
    detail: "\\begin{rcases}",
    apply: "\\begin{rcases}\n0, & p " + doubleBackslash + "\n1, & q\n\\end{cases}"
  },

  matrixEnvironment("matrix"),
  matrixEnvironment("pmatrix"),
  matrixEnvironment("bmatrix"),
  matrixEnvironment("vmatrix"),
  matrixEnvironment("Vmatrix"),
  matrixEnvironment("Bmatrix"),
  matrixEnvironment("smallmatrix"),

  {
    label: "CD",
    detail: "\\begin{CD}",
    apply: "\\begin{CD}\nA @>a>> B " + doubleBackslash + "\n@VbVV @AAcA " + doubleBackslash + "\nC @= D\n \\end{CD}"
  },

  {
    label: "array",
    detail: "\\begin{array}",
    apply: "\\def\\arraystretch{1.5}\n\\begin{array}{c|c}\n  a & b " + doubleBackslash + "\n  c & d\n\\end{array}"
  }
];
