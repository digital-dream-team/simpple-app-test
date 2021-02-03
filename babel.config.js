module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      '@vue/babel-plugin-jsx',
      {
        transformOn: true
      }
    ],
    ['@ant-design-vue/babel-plugin-jsx'],
    [
      'import',
      {
        libraryName: 'ant-design-vue',
        libraryDirectory: 'es',
        style: false
      }
    ]
  ]
}
