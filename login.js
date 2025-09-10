function validate()
{
    var Username=document.getElementById("Username").value
    var password=document.getElementById("password").value
    
    if(Username == "admin" && password == "admin" )
    {
        alert("login succesfully");
        return
    }
    else
    {
        alert("login error");
        return
        
    }
}
