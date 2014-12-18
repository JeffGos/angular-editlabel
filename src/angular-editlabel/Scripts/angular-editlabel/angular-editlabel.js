angular.module('angularEditLabel', [])

.directive('editLabel', ['$timeout', function ($timeout) {
	function link(scope, element, attrs) {

		scope.editing = false;

		scope.onLabelClick = function() {
			scope.editing = true;

			$timeout(function() {
				angular.element(element[0].children[1]).focus();
			});
		}

		scope.onTextAreaBlur = function () {

			if (scope.ngModel) {
				scope.editing = false;
			}
		}
	}

	return {
		restrict: 'E',
		scope: {
			ngModel: '='
		},
		templateUrl: 'angular-editlabel.html',
		link: link
	}
}]);