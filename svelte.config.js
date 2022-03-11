import preprocess from "svelte-preprocess"

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: preprocess({ typescript: { compilerOptions: { target: "es2020" } } }),
    kit: {
        files: {
            template: "./src/component.html",
            lib: "./src/lib",
            assets: "public",
        },
        package: {
            dir: "./dist",
            emitTypes: true,
            // excludes all .d.ts and files starting with _ as the name
            exports: filepath => !/^_|\/_|\.d\.ts$/.test(filepath),
            files: () => true,
        },
    },
}

export default config
