var wedit = module.exports;

// Expose the version number, but only load package JSON if it's requested.
Object.defineProperty(wedit, 'version', {
  get: function () {
    return require('./package.json').version;
  }
});
