module.exports = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "^react$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^(@lib|@components|@ui|@assets)(/.*)$",
    "",
    "^(?!.*[.]css$)[./].*$",
    "",
    ".css$",
    "",
    "^[.]",
  ],
};
