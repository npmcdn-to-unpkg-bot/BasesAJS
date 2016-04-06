(function() {
  'use strict';

  angular
    .module('app.auto')
    .run(appRun);

    appRun.$inject = [];

    function appRun() {
      getRoutes();
    }

  function getRoutes() {
    return [
      {
        url: '/auto',
        config: {
            templateUrl: 'app/auto/auto.html',
            controller: 'Auto',
            controllerAs: 'vm',
        }
      }
    ];
  }
})();
