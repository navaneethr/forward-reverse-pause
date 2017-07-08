var forwardInter;
var revInterval;

function forward() {
    pause();
    var i = 0;
    var strLength = document.getElementById("startBox").value.length;

    forwardInter = setInterval(function () {
        var text = document.getElementById("startBox").value;
        document.getElementById("endBox").value += text.charAt(0);
        console.log(text.charAt(0));
        document.getElementById("startBox").value = text.substring(1);
        i++;
        if (i > strLength) {
            pause();
        }
    }, 1000);
}

function pause() {

    clearInterval(forwardInter);
    clearInterval(revInterval);

}

function reverse(){

    pause();
    var j =0;
    var revTextLength = document.getElementById("endBox").value.length;
    revInterval = setInterval(function(){

        var revText = document.getElementById("endBox").value; //abc
        var n = revText.length; //3
        var startText = document.getElementById("startBox").value; //d

        document.getElementById("startBox").value += revText.charAt(n-1); //dc
        console.log(revText.charAt(n-1)); //c
        document.getElementById("endBox").value = revText.substring(0,n-1); //ab
        j++;

        if(j>revTextLength){
            pause();
        }
    }, 1000);    
}









