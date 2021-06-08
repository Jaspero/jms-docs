const main = typeof window !== 'undefined' ? import(__dirname + "../../editor/dist/editor/main.js") : "";
const polyfills = typeof window !== 'undefined' ? import(__dirname + "../../editor/dist/editor/polyfills.js") : "";
const runtime = typeof window !== 'undefined' ? import(__dirname + "../../editor/dist/editor/runtime.js") : "";
const style = typeof window !== 'undefined' ? import(__dirname + "../../editor/dist/editor/styles.scss") : "";
