const fs = require("fs");
const path = require("path");
const Handlebars = require("handlebars");

const filePath = "./src/useCases/useCases.json";

const useCasesOutput = JSON.parse(fs.readFileSync(filePath));

const useCases = useCasesOutput.map(([useCase, hasInput]) => ({
  useCase,
  hasInput,
}));

const template = `
import {{useCase}} from '@/useCases/{{useCase}}';
import { tineCtx } from 'tinejs'

export const config = {
  runtime: 'edge',
};

export async function POST(req: Request) {
  try {
    const ctx = tineCtx({ headers: req.headers })

    {{#if hasInput}}
    const json = await req.json();

    const res = await {{useCase}}.rawInput(json).run({ ctx });
    {{else}}
    const res = await {{useCase}}.run({ ctx });
    {{/if}}

    return new Response(JSON.stringify(res))
  } catch (e) {
    return new Response(JSON.stringify({ error: e }))
  }
};

`;

useCases.forEach(({ useCase, hasInput }) => {
  fs.mkdirSync(`./src/app/api/tine/${useCase}`);
  const outputFile = `./src/app/api/tine/${useCase}/route.ts`;

  const compiledTemplate = Handlebars.compile(template);
  const generatedCode = compiledTemplate({ useCase, hasInput });

  fs.writeFileSync(outputFile, generatedCode);
});
