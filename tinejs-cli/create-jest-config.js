const fs = require("fs");
const Handlebars = require("handlebars");

const outputFile = "./src/useCases/jest.config.js";

const template = `
const nextJest = require('next/jest');
const createJestConfig = nextJest({
  dir: './',
});
const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
};
module.exports = createJestConfig(customJestConfig);
`;

const compiledTemplate = Handlebars.compile(template);

const generatedCode = compiledTemplate();

fs.writeFileSync(outputFile, generatedCode);
