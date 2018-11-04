// Data for the "HTML Audio" Page

var audio = {
    controls: true, 
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.mp3", type: "audio/mpeg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/Track03.ogg", type: "audio/ogg"}
    ]
};

window.onload = function()
{
    var divAudio = document.querySelector("#audios");
    var outputStr = "";

    for(var i = 0; i < audio.source.length; i++)
    {
        outputStr += "<source src='" + audio.source[i].src +"' type='" + audio.source[i].type + "'> </source>"
    }

    divAudio.innerHTML += outputStr; 
}