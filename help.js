import authors from "./authors.json";

export function load(creditInfo) {
  const mappedAuthors = [];

  for (const [key, value] of Object.entries(creditInfo)) {
    mappedAuthors.push({ ...authors[key], title: value });
  }
  return mappedAuthors;
};

export function textColor(text, color) {
  return `<span style="color: ${color}">${text}</span>`;
};