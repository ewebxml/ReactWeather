var axios = require('axios');
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9742cfd1b5608aa724b490dff9c73e8c&units=imperial';
//9742cfd1b5608aa724b490dff9c73e8c

module.exports ={
    getTemp:function(location){
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function(res){
            if(res.data.code && res.data.message) {
                throw new Error(res.data.message);
            }
            else {
                console.log(res.data.main.temp);
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);


        } );
    }
}
