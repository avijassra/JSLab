; (function() {
    angular.module('todoApp')
        .directive('materialDesign', _materialDesignDrct);
    
    function _materialDesignDrct() {
        return {
            restrict: 'A',
            link: _link,
        };
        
        function _link(scope, elements, attrs) {
            var sliderElems = $('.slider');
            
            if(sliderElems.length > 0 ) {
                $('.slider').noUiSlider({
                    start: 40,
                    connect: "lower",
                    range: {
                        min: 0,
                        max: 100
                    }
                });
            }
        }
    }
})();