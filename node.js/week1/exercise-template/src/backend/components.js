const { json } = require("express");

const head = (title) => `
    <head>
      <title>${title}</title>
    </head>
`;

module.exports = {
  'head': head
};