import authors from "./authors.json";

export default {
  load(creditInfo) {
    const mappedAuthors = []

    for (const [key, value] of Object.entries(creditInfo)) {
      if (authors.has(key)) {
        mappedAuthors.push({...authors[key], title: value});
      }
    }
    return mappedAuthors;
  },
};