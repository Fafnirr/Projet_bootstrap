function myFunction(){
    const pseudo = document.getElementById('pseudo').value;
    const password = document.getElementById('password').value;
    let ok = true;

    if (pseudo != "admin" || password != "Admin"){
        alert('Identifiant ou Mot de passe incorrect');
        ok = false;
    }
    else {
        document.location.href = "tab.html"; 
        alert(); 
        ok = true;
    }
    return ok;
}
