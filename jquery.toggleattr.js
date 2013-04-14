/*
 * jQuery Toggle Attribute Plugin - v1.0 - 2013-04-11
 * Created by Andreas Nylin
 * andreas.nylin@gmail.com / @andreasnylin / http://andreasnylin.com
 */
(function ($) {

    $.fn.toggleAttr = function(attribute, attributeValues) {

        function getNextValue(value) {
            var i, l, nextValue;

            for(i = 0, l = attributeValues.length; i < l; i++) {
                if(attributeValues[i] === value) {
                    break;
                }
            }

            if(i + 1 >= attributeValues.length) {
                nextValue = attributeValues[0];
            } else {
                nextValue = attributeValues[i + 1];
            }

            return nextValue;
        }

        return this.each(function () {
            var $this = $(this),
                hasValues = typeof attributeValues !== 'undefined',
                arrayValues = hasValues && attributeValues instanceof Array,
                value = $this.attr(attribute);

            if(!hasValues && !$this.is('[' + attribute + ']')) {
                $this.attr(attribute, attribute);
            } else if(!hasValues) {
                $this.removeAttr(attribute);
            } else if(!arrayValues && value === attributeValues) {
                $this.removeAttr(attribute);
            } else if(!arrayValues) {
                $this.attr(attribute, attributeValues);
            } else if(arrayValues) {
                $this.attr(attribute, getNextValue(value));
            }

        });

    };

})(jQuery);