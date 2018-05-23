$(document).ready(function() {
    let streams = ["freecodecamp", "timthetatman", "summit1g"];
    let url = "https://wind-bow.glitch.me/twitch-api/streams/";
    let channel = "https://wind-bow.glitch.me/twitch-api/channels/";
    
    for(let i = 0; i < streams.length; i++) {
       let streamUrl = url + streams[i];
       let channelUrl = channel + streams[i];

        $.getJSON(streamUrl, function(data){
            if(data.stream === null) {
                $.getJSON(channelUrl, function(data){
                    console.log(data);
                    let date = (String(data.updated_at).split("").slice(0,10).join(""));
                    $("#content").append("<div class='item' style='border: black 1px solid; margin-top: 5px; margin-bottom: 5px'><p>" + data.display_name +" was last online " + date + "</p></div>");
                });
            } else {
                $("#content").append(`<div id='channel${i}' class='item' style='border: black 1px solid; margin-top: 5px; margin-bottom: 5px'><p> ${streams[i]} is online playing ${data.stream.channel.game} for ${data.stream.viewers} viewers.<p></div>`);
                $(`#channel${i}`).append(`<img src="${data.stream.preview.medium}">`)
            }   
        });
    }
});