module.exports = {
    plugins: {
      'postcss-px-to-viewport-8-plugin': {
        viewportWidth: 1512,
        exclude: [/node_modules/],
        unitToConvert: 'px',
        unitPrecision: 5,
        propList: ['*'],
        viewportUnit: 'vw',
        fontViewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: true,
        replace: true,
        exclude: [],
        landscape: false,
        landscapeUnit: 'vw',
        landscapeWidth: 568
      }
    }
  }