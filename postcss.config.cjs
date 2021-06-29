const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const purgecss = require("@fullhuman/postcss-purgecss");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
	plugins: [
		autoprefixer(),
		// @ts-ignore - Says it's not callable but it is
		!dev && purgecss({
			content: ["./src/**/*.html", "./src/**/*.svelte"],
			safelist: [/svelte-/],
		}),

		!dev && cssnano({
			preset: "default",
		}),
	],
};

module.exports = config;