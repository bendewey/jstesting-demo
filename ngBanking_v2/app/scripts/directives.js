/**
 * @ngdoc directives
 * @name ngBanking
 * @description
 * # ngBanking
 *
 * directives for the main application
 */
function directiveSettings(tooltipOrPopover) {
    'use strict';

    if (typeof tooltipOrPopover === "undefined") {
        tooltipOrPopover = 'tooltip';
    }

    var directiveName = tooltipOrPopover;

    // events to handle show & hide of the tooltip or popover
    var showEvent = 'show-' + directiveName;
    var hideEvent = 'hide-' + directiveName;

    // set up custom triggers
    var directiveConfig = ['$tooltipProvider', function ($tooltipProvider) {
        var trigger = {};
        trigger[showEvent] = hideEvent;
        $tooltipProvider.setTriggers(trigger);
    }];

    var directiveFactory = function () {
        return ['$timeout', function ($timeout) {
            var d = {
                name: directiveName,
                restrict: 'A',
                link: function (scope, element, attr) {
                    if (angular.isUndefined(attr[directiveName + 'Toggle'])) {
                        return;
                    }

                    // set the trigger to the custom show trigger
                    attr[directiveName + 'Trigger'] = showEvent;

                    // redraw the popover when responsive UI moves its source
                    var redrawPromise;
                    $(window).on('resize', function () {
                        if (redrawPromise) {$timeout.cancel(redrawPromise);}
                        redrawPromise = $timeout(function () {
                            //if (!popoverScope.isOpen) { return; }
                            //element.triggerHandler(hideEvent);
                            //element.triggerHandler(showEvent);
                        }, 100);
                    });

                    scope.$watch(attr[directiveName + 'Toggle'], function (value) {
                        if (value){//} && !popover.length == 0) {
                            // tooltip provider will call scope.$apply, so need to get out of this digest cycle first
                            $timeout(function () {
                                element.triggerHandler(showEvent);
                            });
                        }
                        else if (!value){//} && popoverScope.isOpen) {
                            $timeout(function () {
                                element.triggerHandler(hideEvent);
                            });
                        }
                    });
                }
            };
            return d;
        }];
    };

    var directive = directiveFactory();

    var settings = {
        directiveName: directiveName,
        directive: directive,
        directiveConfig: directiveConfig,
    };

    return settings;
}

var popoverToggle = directiveSettings('popover');

angular
    .module('ngBanking')
    .directive(popoverToggle.directiveName, popoverToggle.directive)
    .config(popoverToggle.directiveConfig);
