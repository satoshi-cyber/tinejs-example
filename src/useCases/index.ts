import type { Hello } from "./types";

export const UseCases = {
  hello: {
    input: (input: Parameters<Hello["input"]>[0]) =>
      [
        ["hello", input],
        () =>
          fetch("/api/tine/hello", {
            method: "POST",
            body: JSON.stringify(input),
          })
            .then((res) => res.json())
            .then(
              (data) =>
                data as Awaited<ReturnType<ReturnType<Hello["input"]>["run"]>>
            ),
      ] as const,
    rawInput: (input: unknown) =>
      [
        ["hello", input],
        () =>
          fetch("/api/tine/hello", {
            method: "POST",
            body: JSON.stringify(input),
          })
            .then((res) => res.json())
            .then(
              (data) =>
                data as Awaited<ReturnType<ReturnType<Hello["input"]>["run"]>>
            ),
      ] as const,
  },
};
