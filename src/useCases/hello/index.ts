import { z } from 'zod';
import { tineVar } from 'tinejs';
import payload from 'tinejs.payload';

const input = z.object({ name: z.string().nullable().optional() });

const hello = payload({
  message: tineVar(input, ({ name }) => `Hello ${name || 'World'}`)
});

export default hello.withInput(input);
