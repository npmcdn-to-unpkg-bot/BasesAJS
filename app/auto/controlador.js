/**
 * Auto Controller
 * @namespace Controller
 */

(function() {
  'use strict';
  angular
    .module('app.auto', ['app.auto.factory'])
    .controller("Auto", Auto);
  Auto.$inject = ["Marcas"];

  /**
   * @namespace Auto
   * @desc Mostrar marcas de Autos
   * @memberOf Controller
   */

  function Auto(Marcas) {
    /* jshint validthis: true */
    var vm = this;
    vm.marcas = Marcas.porPais("usa");
  }
})();
