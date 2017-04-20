function myFunction() {
    var x = document.getElementById("textBox").value;
    // var words = x.length/5;
    // document.write('There are ' + words + 'words');
    var averageWords = 0;
    var spaceCounter = 0;
    var sentenceCounter = 0;
    var wordCounter = 1;
    for(var i=0; i<=x.length; i++){
        //x[i] does the same thing as x.charAt(i)
        if (x[i] == ' ') {
            spaceCounter++;
            wordCounter++;
        }
        if (x[i] == '.' || x[i] == '?' || x[i] == '!') {
            sentenceCounter++;
        }
    }
    averageWords = wordCounter/sentenceCounter;
    document.getElementById("row1").innerHTML = ('There are an average of ' + averageWords + ' words per sentence. <br>');
    document.getElementById("row2").innerHTML = ('There are ' + spaceCounter + ' spaces in this text. <br>');
    document.getElementById("row3").innerHTML = ('There are ' + wordCounter + ' words in this text. <br>');
    document.getElementById("row4").innerHTML = ('There are ' + sentenceCounter + ' sentences in this text. <br>');
}
