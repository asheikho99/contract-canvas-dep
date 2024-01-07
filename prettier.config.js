module.exports = {
  plugins: [
    "prettier-plugin-tailwindcss",
    "@ianvs/prettier-plugin-sort-imports",
  ],
  importOrder: [
    "^react$",
    "",
    "^(@/lib|@/components|@/assets)(/.*)$",
    "",
    "<THIRD_PARTY_MODULES>",
    "",
    "^(?!.*[.]css$)[./].*$",
    "",
    ".css$",
    "",
    "^[.]",
  ],
};
