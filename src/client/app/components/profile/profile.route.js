(function() {
    angular.module('app.profile')
    .run(appRun);
    
    /* @ngInject */
    appRun.$inject = ['routerHelper'];
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }
    
    function getStates() {
        return [
            {
                state: 'profile',
                config: {
                    url: '/profile',
                    templateUrl: 'app/components/profile/profile.html',
                    controller: 'ProfileController',
                    controllerAs: 'vm',
                    title: 'Profile'
                }   
            }
        ];
    }
})();