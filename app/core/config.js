(function() {
    'use strict';

    var core = angular.module('app.core');

    var config = {
        appErrorPrefix: '[NG-Modular Error] ', //Configure the exceptionHandler decorator
        appTitle: 'Angular Modular Demo',
        version: '1.0.0'
    };

    core.value('config', config);

    core.config(configure);

    /* @ngInject */
    configure.$inject = ["$logProvider", "$routeProvider"];

    function configure ($logProvider, $routeProvider) {
        console.log( $logProvider );

        console.log($routeProvider);

        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }

        $routeProvider
            .when("/usuarios", {
              templateUrl: 'app/usuario/usuario.html',
              controller: 'Usuario',
              controllerAs: 'vm',
            })
            .when("/autos", {
              templateUrl: 'app/auto/auto.html',
              controller: 'Auto',
              controllerAs: 'vm',
            })
            .otherwise({redirectTo: '/usuarios'});

        console.log( $logProvider );

        console.log($routeProvider);

    }
})();
