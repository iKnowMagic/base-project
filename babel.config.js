module.exports = {
  presets: ['@babel/preset-env', 'babel-preset-typescript-vue3'],
  plugins: [
    function () {
      return {
        visitor: {
          MetaProperty(path) {
            path.replaceWithSourceString('process')
          }
        }
      }
    }
  ]
}
