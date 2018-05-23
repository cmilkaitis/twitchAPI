$(document).ready(function() {
    let streams = ["freecodecamp", "timthetatman", "summit1g"];
    let url = "https://wind-bow.glitch.me/twitch-api/streams/";

    for(let i = 0; i < streams.length; i++) {
        streamUrl = url + streams[i];  
        console.log(streamUrl) 
        $.getJSON(streamUrl, function(data){
            console.log(data)
            if(data.stream === null) {
                $("#content").append("<div><p>" + streams[i] + " is not online</p></div>");
            } else {
                $("#content").append("<div id='channel'" + i + ">" + streams[i] + "  is online </div><br>");
                $(`#channel`).append("<p>Playing " + data.stream.channel.game + " for " + data.stream.viewers +"</p>")
            }
        })
    }
})