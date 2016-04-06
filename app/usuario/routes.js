(function() {
  'use strict';

  angular
    .module('app.usuario')
    .run(appRun);

  appRun.$inject = [];

  function appRun() {
    getRoutes();
  }

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
