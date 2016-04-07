(function() {
  'use strict';
  angular.module('app',['ngRoute',
    'app.auto',
    'app.usuario',
    ]
  )
  .config(config);

  config.$inject = ["$routeProvider"];

  function config($routeProvider){

    $routeProvider.caseInsensitiveMatch = true;

    $routeProvider
      .when("/usuario", {
        controller: "Usuario",
        controllerAs: "vm",
        templateUrl: 'app/usuario/usuario.html',
      })
      .when("/auto", {
        controller: "Auto",
        controllerAs: "vm",
        templateUrl: 'app/auto/auto.html',
      });
    }
})();
