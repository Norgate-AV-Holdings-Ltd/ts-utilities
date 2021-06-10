import babel from "rollup-plugin-babel";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const input = "src/index.ts";

const extensions = [".ts", ".tsx"];

const babelOptions = {
    extensions,
    babelrc: false, // to ignore @babel/transform-runtime
    exclude: "node_modules/**",
    presets: ["@babel/typescript", "@babel/env"],
};

export default {
    input,
    output: [
        {
            file: "dist/bundle.cjs.js",
            format: "cjs",
        },
        {
            file: "dist/bundle.esm.js",
            format: "esm",
        },
        {
            name: "TS-Utilities",
            file: "dist/bundle.umd.js",
            format: "umd",
        },
    ],
};
