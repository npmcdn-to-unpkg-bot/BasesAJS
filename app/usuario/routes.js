(function() {
  'use strict';

  angular.module('app.usuario');

  function getRoutes() {
    return [
      {
        url: '/usuario',
        config: {
            templateUrl: 'app/usuario/usuario.html',
            controller: 'Usuario',
            controllerAs: 'vm',
        }
      }
    ];
  }
})();
