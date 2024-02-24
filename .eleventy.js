const { EleventyRenderPlugin } = require("@11ty/eleventy");
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return {
    dir: {
      input: "src"
    }
  }
};