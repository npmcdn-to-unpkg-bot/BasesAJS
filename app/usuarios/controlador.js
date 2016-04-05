/**
 * Usuario Controller
 * @namespace Controller
 */

(function() {
  'use strict';
  angular
    .module('app.usuario')
    .controller("Usuario", Usuario);
  Usuario.$inject = [];

  /**
   * @namespace Usuario
   * @desc Mostrar nombre propio
   * @memberOf Controller
   */

  function Usuario() {
    /* jshint validthis: true */
    var vm = this;
    vm.nombre = "Miguel";
    vm.textInput = "";
  }
})();
