//htmlのul要素（id = 'messages'）を呼び出し
var messageList = $('#footer marquee');

//openweathermap（天気予報API）に接続
var request = new XMLHttpRequest();
var targetCityName = "osaka";
var appId = "557b466129cf7d7427b03e5b7886a4bb";
var owmURL = "https://api.openweathermap.org/data/2.5/weather?APPID=" + appId + "&lang=ja&units=metric&q=" + targetCityName + ",jp;";


request.open('GET', owmURL, true);
//結果をjson型で受け取る
request.responseType = 'json';

request.onload = function() {
    var data = this.response;
    console.log(data);
    var messageElement = $(
        "<span>" +
        data["name"] +
        " - " +
        data["weather"][0]["description"] +
        " | " +
        data["weather"][0]["main"] +
        " | 気温 " +
        data["main"]["temp"] +
        " ℃ | 最高気温 " +
        data["main"]["temp_max"] +
        "℃ | 最低気温 " +
        data["main"]["temp_min"] +
        "℃ | 風速 " +
        data["wind"]["speed"] +
        " ㎞ | 雲量 " +
        data["clouds"]["all"] +
        " % </span>"
    );
    //HTMLに取得したデータを追加する
    messageList.append(messageElement);
};

request.send();