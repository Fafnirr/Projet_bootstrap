function myFunction(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    let ok = true;

    if (username != "admin" || password != "Admin"){
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
