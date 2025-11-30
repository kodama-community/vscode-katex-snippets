const layoutEnvironment = (name) => ({
  label: name,
  detail: "\\begin{" + name + "}",
  apply: "\\begin{" + name + "}\n{$0}\n\\end{" + name + "}"
});

const matrixEnvironment = (name) => ({
  label: "matrix",
  detail: "\\begin{" + name + "}",
  apply: "\\begin{" + name + "}\n  a & b \\\\\n  c & d\n\\end{" + name + "}"
});

export const generic = [
  {
    label: "def", 
    detail: "\\def",
    apply: "\\def$0{$1}"
  },
  {
    label: "gdef", 
    detail: "\\gdef",
    apply: "\\gdef$0{$1}"
  },

  {
    label: "newcommand", 
    detail: "\\newcommand",
    apply: "\\newcommand$0[$1]{$2}"
  },

  {
    label: "renewcommand",
    detail: "\\renewcommand",
    apply: "\\renewcommand$0[$1]{$2}"
  },

  {
    label: "providecommand", 
    detail: "\\providecommand",
    apply: "\\providecommand$0[$1]{$2}"
  },

  {
    label: "displaystyle",
    detail: "\\displaystyle",
    apply: "\\displaystyle {$0}"
  },
  
  {
    label: "textstyle",
    detail: "\\textstyle",
    apply: "\\textstyle {$0}"
  },

  {
    label: "binom",
    detail: "\\binom",
    apply: "\\binom{$0}{$1}"
  },

  {
    label: "dbinom", 
    detail: "\\dbinom",
    apply: "\\dbinom{$0}{$1}"
  },

  {
    label: "tbinom",
    detail: "\\tbinom",
    apply: "\\tbinom{$0}{$1}"
  },
  
  {
    label: "brace", 
    detail: "\\brace",
    apply: "{$0 \\brace $1}"
  },

  {
    label: "brack", 
    detail: "\\brack",
    apply: "{$0 \\brack $1}"
  },

  {
    label: "choose",
    detail: "\\choose",
    apply: "{$0 \\choose $1}"
  },

  {
    label: "over",
    detail: "\\over",
    apply: "{$0 \\over $1}"
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
    apply: "\\begin{cases}\n0, & p \\\\\n1, & q\n\\end{cases}"
  },

  {
    label: "rcases",
    detail: "\\begin{rcases}",
    apply: "\\begin{rcases}\n0, & p \\\\\n1, & q\n\\end{cases}"
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
    apply: "\\begin{CD}\nA @>a>> B \\\\\n@VbVV @AAcA \\\\\nC @= D\n \\end{CD}"
  },
];
