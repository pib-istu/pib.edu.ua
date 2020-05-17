const withCSS = require("@zeit/next-css");
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require('next-fonts');

module.exports = withSass(withCSS(withFonts(withImages({
    inlineImageLimit: 0,
    webpack(config, options) {
        return config
    }
}))));

