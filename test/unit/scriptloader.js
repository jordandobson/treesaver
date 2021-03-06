goog.require('treesaver.scriptloader');

$(function() {
  module('scriptloader', {
    setup: function () {
    },
    teardown: function () {
    }
  });

  test('script loading', function () {
    stop(2000);

    treesaver.scriptloader.load('../test/assets/dummy_script.js', function () {
      ok(true, "Load callback recieved");
      ok(window.dummy_loaded, "Script was executed");
      start();
    });
  });

  test('helpers', function () {
    // TODO: Find a portable way to test this
    //equals(treesaver.scriptloader.getScriptPath_(), '../../src/', 'getScriptPath_');
    equals(treesaver.scriptloader.getDirectoryName_('/path/to/directory'), '/path/to/', 'getDirectoryName_');
    equals(treesaver.scriptloader.getDirectoryName_('path'), '', 'getDirectoryName_');
    equals(treesaver.scriptloader.getDirectoryName_('/path'), '/', 'getDirectoryName_');

    equals(treesaver.scriptloader.getUrlFromName_('path.js'), treesaver.scriptloader.getScriptPath_() + 'path.js', 'getUrlFromName_: Relative path');
    equals(treesaver.scriptloader.getUrlFromName_('/dir/path.js'), '/dir/path.js', 'getUrlFromName_: Absolute path');
    equals(treesaver.scriptloader.getUrlFromName_('http://example.com/path.js'), 'http://example.com/path.js', 'getUrlFromName_: http path');
    equals(treesaver.scriptloader.getUrlFromName_('https://example.com/path.js'), 'https://example.com/path.js', 'getUrlFromName_: https path');
    equals(treesaver.scriptloader.getUrlFromName_('file://example.com/path.js'), 'file://example.com/path.js', 'getUrlFromName_: file path');
  });
});
