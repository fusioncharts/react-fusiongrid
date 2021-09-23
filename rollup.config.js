import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import css from "rollup-plugin-import-css";

export default {
  input: pkg.source,
  output: [
    // { file: pkg.main, format: "cjs" }, 
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    external(),
    resolve(),
    css(),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: "bundled",
    }),
    commonjs(),
    del({ targets: ["dist/*"] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
