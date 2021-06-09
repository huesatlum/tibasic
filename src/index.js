;(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.TiBasic = factory();
    }
})(this, function () {
  var TiBasic = {};

  TiBasic.VERSION = '0.1.0';

  TiBasic.ans = 0;

  TiBasic.run = function (code) {
    this.code = code.trim();
    this.disp('Running...')
    // this.getInput('A?', function (input) {
    //   TiBasic.disp(input);
    // });
    return '> '+ code.length;
  }

  return TiBasic;
});
