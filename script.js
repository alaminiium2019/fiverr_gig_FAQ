var faqButton = document.getElementById('addFAQ');
    faqButton.addEventListener('click',function(){
        document.getElementById('addFAQ').style.display="none";      
        document.getElementById('FAQ_Answer').style.display='block';
        document.getElementById('acordian').style.display="none";
    
})


var faqAnswerCancel= document.getElementById('faqAnswerCancel');
    faqAnswerCancel.addEventListener('click',function(){
        console.log('Cancel button working')
        document.getElementById('FAQ_Answer').style.display='none';
        document.getElementById('addFAQ').style.display="block";
        document.getElementById('addFAQ2').style.display="block";   
    })

var addAcordian = document.getElementById('addQuestion');
    addAcordian.addEventListener('click',function(){
    document.getElementById('FAQ_Answer').style.display="none"; 
    document.getElementById('addFAQ').style.display="block";
    document.getElementById('acordian').style.display="block";

        //set question value
    var question = document.getElementById('question').value;
    document.getElementById('acordian_question').innerText=question;
    //set answer value
    var answer = document.getElementById('answer').value;
    document.querySelector('.editQuestion').value=question;
    document.querySelector('.editAnswer').value=answer;

})



var acordianHideShow = document.getElementById('acordian_hideQestion');
    acordianHideShow.addEventListener('click',function(){
        var x = document.getElementById("acordian-hidesection");
        if (x.style.display === "none") {
          x.style.display = "block";
          document.getElementById("iconSHow").style.transform = "rotate(90deg)";
        } else {
          x.style.display = "none";
          document.getElementById("iconSHow").style.transform = "rotate(0deg)";

        }
    })