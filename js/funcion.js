function getData(){
$.ajax(
{
url: "https://reqres.in/api/users?page=1",
method: "get",
dataType: "json"
}).done(function(res){
  res.data.map((item)=>
  {
    $("body").css("background-image", "url(images/grey.png)");
    $("body").css("color","white")
    $("body").css("font-size", "30px");
    $("body").css({
               position:'absolute',
               left: ($(window).width() - $('body').outerWidth())/2,
               top: ($(window).height() - $('body').outerHeight())/2
    });
    var result = item.first_name.length + item.last_name.length;
    document.write(item.first_name + " " + item.last_name + " tiene " + result + " caracteres " + "<br/>");
    }
  );
});
}
