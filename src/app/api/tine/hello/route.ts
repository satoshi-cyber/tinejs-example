import hello from "@/useCases/hello";
import { tineCtx } from "tinejs";

export const config = {
  runtime: "edge",
};

export async function POST(req: Request) {
  try {
    const ctx = tineCtx({ headers: req.headers });

    const json = await req.json();

    const res = await hello.rawInput(json).run({ ctx });

    return new Response(JSON.stringify(res));
  } catch (e) {
    return new Response(JSON.stringify({ error: e }));
  }
}
