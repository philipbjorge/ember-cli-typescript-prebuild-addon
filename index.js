var fs = require('fs');
var path = require('path');

module.exports = {
  name: 'ember-cli-typescript-prebuild-addon',
  warnMissingDependencyChecker: function() {
    var dependencies = this.project.dependencies();

    if (!dependencies['ember-cli-dependency-checker']) {
      console.warn('Usage of "ember-cli-dependency-checker" is strongly advised to ensure your project cache is in sync with the project\'s requirements.');
    }
  },

  init: function() {
    this.warnMissingDependencyChecker();
  },

  buildError: function(error) {
    console.warn(error);
  },

  preBuild: function(result) {
    var sys = require('sys')
    var exec = require('child_process').exec;
    var child;

    console.log(result);
    // or more concisely
    var sys = require('sys')
    var exec = require('child_process').exec;
    function puts(error, stdout, stderr) { sys.puts(stdout) }
    exec("pwd", puts);
  },
  postBuild: function(result){
    // TODO: Clean up
  }
};
