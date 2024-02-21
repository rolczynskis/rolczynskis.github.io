const { EleventyRenderPlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
  eleventyConfig.setServerPassthroughCopyBehavior("passthrough");
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPlugin(EleventyRenderPlugin);

  return {
    dir: {
      input: "src"
    }
  }
};