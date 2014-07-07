var app = angular.module('dragNdropApp', []);

app.factory('lodashSrvc', function () {
    //'use strict'
    return _;
});

app.factory('getDataSrvc', function() {
    var usersName = ['Ana', 'Aayan', 'Ansh', 'Chandu', 'Monu', 'Avi', 'Sonu', 'Ritu', 'Ashish', 'Nirmala', 'Kamal', 'Bua', 'IJ', 'Ratish', 'Puneet', 'Tayee Ji', 'Taya Ji', 'Dadi', 'Dadu', 'Nani', 'Nanu'],
        userList = [];
    
    for(var i = 0, user; user = usersName[i++];) {
        userList.push({
            id: i,
            name: user,
            selected: false,
            order: -1
        });
    }
    
    return {
        users: userList
    };
});


app.directive('draggable', function() {
	return function(scope, element) {
		// this gives us the native JS object
		var el = element[0];

		el.draggable = true;

		el.addEventListener('dragstart', function(e) {
            e.dataTransfer.effectAllowed = 'move';
			e.dataTransfer.setData('Index', this.id);
			this.classList.add('drag');
			return false;
		  }, false);

		el.addEventListener('dragend', function(e) {
			this.classList.remove('drag');
			return false;
		  }, false);
  }
});

app.directive('droppable', function() {
	return {
		scope: {
			drop: '&',
			bin: '='
		},
		link: function(scope, element) {
			// again we need the native object
			var el = element[0];

			el.addEventListener('dragover', function(e) {
				e.dataTransfer.dropEffect = 'move';
				// allows us to drop
				if (e.preventDefault) e.preventDefault();
				this.classList.add('over');
				return false;
			}, false);

			el.addEventListener('dragenter', function(e) {
				this.classList.add('over');
				return false;
			}, false);

			el.addEventListener('dragleave', function(e) {
				this.classList.remove('over');
				return false;
			}, false);

			el.addEventListener('drop', function(e) {
				// Stops some browsers from redirecting.
				if (e.stopPropagation) e.stopPropagation();
				this.classList.remove('over');
                var index = e.dataTransfer.getData('Index');
				// call the passed drop function
				scope.$apply(function(scope) {
					var fn = scope.drop();
					if ('undefined' !== typeof fn) {            
					   fn(index);
					}
				});

				return false;
			}, false);
		}
	}
});

// directive for a single list
app.directive('dndList', function () {
    return function (scope, element, attrs) {
        debugger;
        // variables used for dnd
        var toUpdate;
        var startIndex = -1;
        // watch the model, so we always know what element
        // is at a specific position
        scope.$watch(attrs.dndList, function (value) {
            toUpdate = value;
        }, true);
        // use jquery to make the element sortable (dnd). This is called
        // when the element is rendered
        $(element[0]).sortable({
            items: 'div.dgble',
            //items: 'div.masterFeeLineItemGridStyle div.ng-scope.ngRow',
            start: function (event, ui) {
                console.log('Start sorting - ' + event.target.id);
                // on start we define where the item is dragged from
                startIndex = ($(ui.item).index());
            },
            stop: function (event, ui) {
                console.log('Stop sorting - ' + event.target.id);
                // on stop we determine the new index of the
                // item and store it there
                var newIndex = ($(ui.item).index());
                var toMove = toUpdate[startIndex];
                toUpdate.splice(startIndex, 1);
                toUpdate.splice(newIndex, 0, toMove);
                // we move items in the array, if we want
                // to trigger an update in angular use $apply()
                // since we're outside angulars lifecycle
                scope.$apply(scope.model);
            },
            axis: 'y'
        })
    }
});

app.controller('MainCtrl', function($scope, getDataSrvc, lodashSrvc) {
    $scope.users = getDataSrvc.users;
    $scope.selectedUsers = [];
    
  $scope.handleDrop = function(id) {
      selectedUser = lodashSrvc.filter($scope.users, {'id': parseInt(id)})[0];
      debugger;
      if(selectedUser && !selectedUser.selected) {
        selectedUser.selected = true;
        $scope.selectedUsers.push(selectedUser);
      }
      //alert('Item ' + item + ' has been dropped into ' + bin);
  }
});

