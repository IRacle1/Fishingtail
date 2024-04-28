import authors from "./authors.json";

export default function load(creditInfo) {
  const mappedAuthors = [];

  for (const [key, value] of Object.entries(creditInfo)) {
    mappedAuthors.push({ ...authors[key], title: value });
  }
  return mappedAuthors;
};