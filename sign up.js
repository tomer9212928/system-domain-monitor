function validate1()
{
    var Firstname=document.getElementById("First name").value;
    var Lastname=document.getElementById("Last name").value;
    var Email=document.getElementById("Email").value;
    var password=document.getElementById("password").value;
    
    
    var nemail=Email.length;
    var iemail=Email.includes("@gmail.com");
    if(nemail==0 || iemail==false )   
    {
        alert("error");
        
        return;
    }
    else
    {
        alert("ok");
        alert(nemail);
        return;
        
    }
    /*
    alert("succesfull");
    alert(users);
    alert(userlogin);
    */
}