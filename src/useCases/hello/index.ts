import { z } from 'zod';
import { tineInput, tineVar } from 'tinejs';
import payload from 'tinejs.payload';

const schema = z.object({ name: z.string().nullable().optional() });

const input = tineInput(schema, {
  name: 'helloInput',
});

const hello = payload(
  tineVar(input, ({ name }) => `Hello ${name || 'World'}`),
  { name: 'hello' },
);

const result = hello.withInput(input);

export default result;
