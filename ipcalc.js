// entering initial and final prices of the tokens in the pool 


function IP() {
    initA = document.getElementById("initialA").value;
    initB = document.getElementById("initialB").value;
    finalA = document.getElementById("finalA").value;
    finalB = document.getElementById("finalB").value;
    const finalratio = finalB / finalA;
    const initialratio = initB / initA;
    const k = finalratio / initialratio;
    const IP = (((2 * (k ** 0.5)) / (1 + k)) - 1)*100;
    document.getElementById('initialA').value = '';
    document.getElementById('initialB').value = '';
    document.getElementById('finalA').value = '';
    document.getElementById('finalB').value = '';
    alert("Impermanent loss : " + Math.abs(IP));
    
}

