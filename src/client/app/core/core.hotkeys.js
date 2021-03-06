(function() {
    angular.module('app.core')
    .run(runHotKeys);

    runHotKeys.$inject = ['$rootScope', 'hotkeys'];
    /* @ngInject */
    function runHotKeys($rootScope, hotkeys) {
        hotkeys.add({
            combo: 'shift+c',
            description: 'Toggle Chat',
            callback: function() {
                $rootScope.$emit('chat::toggle');
            }
        });
    }
})();