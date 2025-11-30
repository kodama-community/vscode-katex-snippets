export const binary = {
  "frac": (a, b) => `${a}/${b}`,
  "tfrac": (a, b) => `${a}/${b}`,
  "dfrac": (a, b) => `${a}/${b}`,
  "cfrac": (a, b) => `${a}/${b}`,

  "href": (url, content) => `\href{${url}}{${content}}`,
  "htmlId": (id, content) => `\htmlId{${id}}{${content}`,
  "htmlClass": (cls, content) => `\htmlClass{${cls}}{${content}`,
  "htmlStyle": (style, content) => `\htmlStyle{${style}}{${content}`,
  "htmlData": (data, content) => `\htmlData{${data}}{${content}`,
};
