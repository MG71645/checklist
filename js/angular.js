function CardsCtrl($scope) {
    $scope.cards = [
        {text: 'Новая задача'},
        {text: 'Еще одна задача'}
    ];

    $scope.addCard = function() {
        $scope.cards.push({text:$scope.cardText});
        $scope.cardText = '';
    };
}