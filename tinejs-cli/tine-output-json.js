const fs = require("fs");
const Handlebars = require("handlebars");

const outputFile = "./src/useCases/useCases.test.ts";

const template = `
import fs from 'fs'

import { output } from './.types'

describe('Tine', () => {

  it('compiles', () => {
    const jsonString = JSON.stringify(output, null, 2);

    fs.writeFileSync('./src/useCases/useCases.json', jsonString);
  
    expect(true).toEqual(true);
  })
});
`;

const compiledTemplate = Handlebars.compile(template);

const generatedCode = compiledTemplate();

fs.writeFileSync(outputFile, generatedCode);
