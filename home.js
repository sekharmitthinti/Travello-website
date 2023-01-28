function login()
{
    var uname=document.getElementById("email").value;
    var pwd=document.getElementById("pwd1").value;
    var filter=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(uname =='')
    {
        alert("please enter user name.");
    }
    else if(pwd=='')
    {
        alert("enter the password");
    }
    else if(!filter.test(uname))
    {
        alert("Enter valid email id.");
    }
    else if(pwd.length < 6 || pwd.length > 12)
    {
        alert("password min and max length is 6.");
    }
    
    else
    {
        alert('Thank You for login & redirected to college website');
        window.location="https://sves.org.in";
    }
}
function clearFunc()
{
    document.getElementById("email").value="";
    document.getElementById("pwd1").value="";
}