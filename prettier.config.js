module.exports = {
  importOrder: [
    "^.*/lib/.*$",
    "^.*/components/.*$",
    "^.*/pages/(?!.*.css$).*$",
    "^[./](?!.*.css$).*$",
    "^.*(css)$",
  ],
  importOrderSeparation: false,
  tabWidth: 2,
  // useTabs: true,
  printWidth: 100,
  plugins: [require("prettier-plugin-tailwindcss")],
};
