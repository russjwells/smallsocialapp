angular.module('app')
.controller('PostsCtrl', function ($scope, PostsSvc) {
	$scope.addPost = function () {
		if ($scope.postBody) {
			PostsSvc.create({
				username: 'user33',
				body: $scope.postBody
			}).success(function (post) {
				//unnneed with websockets
				//$scope.posts.unshift(post)
				$scope.postBody = null
			})
		}
	}

	$scope.$on('ws:new_post', function (_, post) {
		console.log("posts ctrl is handling websockets")

		$scope.$apply(function () {
			$scope.posts.unshift(post)

		})
	})

	PostsSvc.fetch().success(function (posts) {
		$scope.posts = posts
	})
})