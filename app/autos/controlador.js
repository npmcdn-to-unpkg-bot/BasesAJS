/**
 * Autos Controller
 * @namespace Controller
 */

(function() {
  'use strict';
  angular
    .module('app.autos', ['app.autos.factory'])
    .controller("Autos", Autos);
  Autos.$inject = ["Marcas"];

  /**
   * @namespace Autos
   * @desc Mostrar marcas de Autos
   * @memberOf Controller
   */

  function Autos(Marcas) {
    /* jshint validthis: true */
    var vm = this;
    vm.marcas = Marcas.porPais("usa");
  }
})();
