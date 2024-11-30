module.exports = {
    "plugins": [
      "postcss-flexbugs-fixes",
      [
        "postcss-preset-env",
        {
          "autoprefixer": {
            "flexbox": "no-2009"
          },
          "stage": 3,
          "features": {
            "custom-properties": false
          }
        }
      ],
      [
        '@fullhuman/postcss-purgecss',
        {
          content: [
              './src/pages/*.{js,jsx,ts,tsx}',  
              './src/pages/**/*.{js,jsx,ts,tsx}',
              './src/components/**/*.{js,jsx,ts,tsx}',
              './node_modules/react-bootstrap/**/*.js',
          ],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
          safelist: {
            standart: ["html", "body"],
            deep: [/^row/, /^col/, /^header/, /^nav/, /^container-fluid/]
          } 
        }
      ],
    ]
  }