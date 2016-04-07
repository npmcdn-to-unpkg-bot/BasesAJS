(function() {
  'use strict';

  angular.module('app.auto');

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
