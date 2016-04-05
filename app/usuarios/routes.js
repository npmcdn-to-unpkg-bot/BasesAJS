(function() {
  'use strict';

  angular
    .module('app.usuario')
    .run(appRun);

  function appRun() {
    return getRoutes()
  }

  function getRoutes() {
    return [
      {
        url: '/usuarios',
        config: {
            templateUrl: 'app/usuarios/usuarios.html',
            controller: 'Usuario',
            controllerAs: 'vm',
            title: 'usuarios',
        }
      }
    ];
  }
})();
