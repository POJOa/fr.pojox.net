angular.module('app.modules')
       .service('beatsService',beatsService);

function beatsService ($http, $state, $document, APP_CONST) {
  var service = {
    fetchAll: fetchAll,
    fetchByMonth: fetchByMonth,
    fetchBySkipAndLimit : fetchBySkipAndLimit,
    fetchAvailableMonths : fetchAvailableMonths
  }
  return service;

  function fetchAll(){
    return $http.get(APP_CONST.api + 'v1/beats');
  }

  function fetchBySkipAndLimit(skip ,limit){
    return $http.get(APP_CONST.api + 'v1/beats?sort=-time&skip=' + skip + '&limit=' + limit);
  }

  function fetchByMonth(yymm, duration){
    return $http.get(APP_CONST.api + 'beats/yymm/' + yymm + '/duration/' + duration);
  }

  function fetchAvailableMonths(){
    return $http.get(APP_CONST.api + 'beats/months');
  }

}
