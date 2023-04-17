node ./tinejs-cli/use-case-output.js
node ./tinejs-cli/tine-output-json.js
node ./tinejs-cli/create-jest-config.js

jest --config=./src/useCases/jest.config.js 

rm ./src/useCases/.types.ts
rm ./src/useCases/jest.config.js
rm ./src/useCases/useCases.test.ts
rm -fr ./src/app/api/tine

mkdir ./src/app/api
mkdir ./src/app/api/tine

node ./tinejs-cli/use-case-types.js
node ./tinejs-cli/tine-types.js
node ./tinejs-cli/tine-apis.js

rm ./src/useCases/useCases.json

prettier --write ./src/useCases/index.ts
prettier --write ./src/useCases/types.ts
prettier --write ./src/app/api/tine/*
