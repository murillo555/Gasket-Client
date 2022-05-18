module.exports = {
  plugins: {
    presets: [
      '@gasket/nextjs',
    ],
    add: [
      '@gasket/jest',
    ],
  },
  enviroments: {
    dev: {
      gasketTesting: {
        url: 'http://localhost:8080'
      }
    }
  }
};

