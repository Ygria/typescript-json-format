// const transformer = useCallback(
//     async ({ value }) => {
//       const result = JSON.stringify
//         (eval("("
//           + value
//           + ")"), null, 2);

//       const { run } = await import("json_typegen_wasm");

//   return run(
//     "Root",
//     result,
//     JSON.stringify({
//       output_mode: settings.typealias
//         ? "typescript/typealias"
//         : "typescript"
//     })
//   );
// },
//     [settings]
//   );

export async function transformJSON2Typescript(value: string) {




    const { run } = await import("json_typegen_wasm");
    const parsedResult = run(
        "Root",
        value,
        JSON.stringify({
            output_mode:
                "typescript/typealias"
            // : "typescript"
        })
    )
    return parsedResult

}