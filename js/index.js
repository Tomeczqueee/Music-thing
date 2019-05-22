window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("header").style.padding = "10px 10px";
        document.getElementById("logo").style.fontSize = "25px";
      } else {
        document.getElementById("header").style.padding = "80px 10px";
        document.getElementById("logo").style.fontSize = "35px";
      }
      console.log("działa");
}

//https://developer.spotify.com/documentation/general/guides/authorization-guide/#client-credentials-flow

const app = {};
//https://www.youtube.com/watch?v=f5OLDvwP-Ug
//https://developer.spotify.com/console/get-artist/?id=
//base64 c7236ae5231e4ef992670b2889beb6d7:39989bd86c8a44e9af3f0470cb9e9270
//https://feel-music.com
//
app.tokenOptions = {
    url: 'https://accounts.spotify.com/authorize',
    client_id: 'client_id=c7236ae5231e4ef992670b2889beb6d7',
    headers:{
        'Content-Type':"application/json"
    },
    response_type: 'response_type=token',
    redirect_uri: `redirect_uri=${encodeURIComponent(`http://127.0.0.1:8080/`)}`,

    parseToUrl: () => {
        return `${app.tokenOptions.url}?${app.tokenOptions.client_id}&${app.tokenOptions.redirect_uri}&${app.tokenOptions.response_type}`
        }
    };
};

// app.tokenRefresh = () => {
//     fetch("https://accounts.spotify.com/api/token", {
//         body: "grant_type=client_credentials",
//         mode: 'no-corps',
//         headers: {
//             Authorization: "Basic YzcyMzZhZTUyMzFlNGVmOTkyNjcwYjI4ODliZWI2ZDc6Mzk5ODliZDg2YzhhNDRlOWFmM2YwNDcwY2I5ZTkyNzA=",
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         method: "POST"
//     })
//         .then(result => console.log(result));
// };
//
// app.tokenRefresh();

//
// app.requestOptions = {
//     method:"GET",
//     headers: new Headers({
//         "Accept":"application/json",
//         "Content-Type":"application/json",
//         "Authorization":`Bearer ${app.token}`
//     })
// };
//
//
// app.request = nameToSend =>{
//     fetch(`https://api.spotify.com/v1/search?q=${nameToSend}&type=track&limit=5`,app.requestOptions)
//         .then(response => response.json()
//             .then(data => {
//                 if(response.status===401) app.tokenRefresh(app.token);
//             })
//             .then(data =>({
//                 data: data,
//                 status: response.status
//             }))
//             .then(res => console.log(res.data))
//         )
//
//         .catch(error => console.error(error));
// };
//
//
// app.spaceToPlus = givenSong => {
//     (givenSong[0] === ' ') ? app.request(givenSong.replace(' ', ''))
//     : app.request(givenSong.replace(' ', '+'));
// };
//
//
// app.masterCallback = songName => {app.spaceToPlus(songName)};
// app.masterCallback('Icon');
//
//
//
