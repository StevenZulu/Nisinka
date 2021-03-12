//redirect to another webpage
//location.href = "https://stevensanie.netlify.app/projects";
//alert("StevenSanie chose to redirect you. It is not a bug. 😉");

document.querySelector("#submitBtn").addEventListener('click', function(){

    //getting user data from inputs
    openingCash = parseInt(document.getElementById('openingCash').value);
    airtel  = parseInt(document.getElementById('airtelBalance').value);
    mtn = parseInt(document.getElementById('mtnBalance').value);
    kazang = parseInt(document.getElementById('kazangBalance').value);
    zanaco = parseInt(document.getElementById('zanacoBalance').value);
    credits = parseInt(document.getElementById('totalCredits').value);

    //calculating for total balances and closing cash
    totalOfBalnces = airtel + mtn + kazang + zanaco ;
    closingCash = openingCash - ( totalOfBalnces + credits);

    //outputing data in coresponding cells
    document.querySelector("#opening-cash").textContent = openingCash;
    document.querySelector("#airtel").textContent = airtel;
    document.querySelector("#mtn").textContent = mtn;
    document.querySelector("#kazang").textContent = kazang;
    document.querySelector("#zanaco").textContent = zanaco;
    document.querySelector("#credits").textContent = credits;
    document.querySelector("#closingCash").textContent = closingCash;

    // displaing the results of the entered data
    if(isNaN(closingCash)){
        document.querySelector('#form-container h1').textContent 
        = "Can't calculate with incomplete data. Make sure you fill all the balances."
        document.querySelector('#form-container h1').style.display = 'block';
    }else{
        document.querySelector('#form-container h1').style.display = 'none';
        document.querySelector("#results-container").style.display = "block";
        document.querySelector("#form-container").style.display = "none";
    }

    document.querySelector("#prevBtn").addEventListener('click', function(){
        document.querySelector("#results-container").style.display = "none";
        document.querySelector("#form-container").style.display = "block";
    })
})


