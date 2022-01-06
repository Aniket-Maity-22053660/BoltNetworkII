app.controller('MainController', ['$scope', function($scope) {
    $scope.program = {
    series: "Scarface",
    series_img: "https://www.gruv.com/assets/images/site/product/61029798.jpg",
    genre: "Crime drama",
    description: "Scarface is a 1983 American crime drama film directed by Brian De Palma and written by Oliver Stone. A remake of the 1932 film of the same name, it tells the story of Cuban refugee Tony Montana (Al Pacino), who arrives penniless in 1980s Miami and goes on to become a powerful drug lord.",
    datetime: new Date(1989, 11, 31, 21, 00, 00, 00)
  }
  $scope.anothershow = {
    series: "Castlevania",
    series_img: "https://s.ecrater.com/stores/340271/59f348997fbc9_340271b.jpg",
    genre: "horror",
    season: 1,
    episode: "Witchbottle",
    description: "A headstrong young woman seeks out forbidden knowledge; A corrupt bishop courts disaster by enraging a legend.",
    datetime: new Date(2021, 11, 31, 21, 00, 00, 00) }
    
    $scope.anothershow1 = {
      series: "Tupac Ressurection",
      series_img: "https://th.bing.com/th/id/OIP.YjwooDW3pYTkNqRgF7RYaQHaKs?pid=ImgDet&rs=1",
      genre: "Biography",
      description: "Tupac: Resurrection is a 2003 American documentary film about the life and death of rapper Tupac Shakur. The film, directed by Lauren Lazin and released by Paramount Pictures, is narrated by Tupac Shakur himself. The film was in theaters from November 16, 2003 to December 21, 2003.",
      datetime: new Date(2003, 11, 21, 21, 00, 00, 00) }
  }]);