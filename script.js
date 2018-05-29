$(document).ready(function() {
    let streams = ["freecodecamp", "timthetatman", "summit1g", "drdisrespectlive"];
    let url = "https://wind-bow.glitch.me/twitch-api/streams/";
    let channel = "https://wind-bow.glitch.me/twitch-api/channels/";
    
    for(let i in streams) {
       let streamUrl = url + streams[i];
       let channelUrl = channel + streams[i];

        $.getJSON(streamUrl, function(data){
            if(data.stream === null) {
                $.getJSON(channelUrl, function(data){
                    let date = (String(data.updated_at).split("").slice(0,10).join(""));
                    $("#content").append(`<a id='a-${streams[i]}'href=''><div id='${streams[i]}' style='background: white; border-radius: 5px; display: block; margin-top: 5px; margin-bottom: 5px; padding-left: 10px; padding-top: 10px'></div></a>`);
                    $(`#a-${streams[i]}`).attr('href', data.url); 
                    $(`#${streams[i]}`).append(`<img style='max-width: 150px; margin-bottom: 10px' src="${data.logo}">`);
                    $(`#${streams[i]}`).append(`<p>${data.display_name} was last online ${date}</p>`);
                });
            } else {
                $("#content").append(`<a id='a-${streams[i]}' href=''><div id='${streams[i]}' style='background: white; border-radius: 5px; margin-top: 5px; margin-bottom: 5px; padding-left: 10px; padding-top: 10px''></div></a>`);
                $(`#a-${streams[i]}`).attr('href', data.stream.channel.url); 
                $(`#${streams[i]}`).append(`<img style='max-width: 150px; margin-bottom: 10px' src="${data.stream.channel.logo}">`);
                $(`#${streams[i]}`).append(`<p> ${data.stream.channel.display_name} is online playing ${data.stream.channel.game} for ${data.stream.viewers} viewers.<p>`);
            }  
        });
    }
});