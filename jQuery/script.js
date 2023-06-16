$("h1").css("color","red");// to change color using jq
// adding event listners:
$("button").click(function(){
    $("h1").html("hii Paras");
    setTimeout(() => {
        $("h1").html("heading 1");
    },400);
})