const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config
}