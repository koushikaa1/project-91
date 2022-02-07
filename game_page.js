function addUser()
{
    player1_name = document.getElementById("player_1").value
    player2_name =  document.getElementById("player_2").value

    localStorage.setItem("player1_name" , player1_name);
    localStorage.setItem("player2_name" , player1_name);

    window.location = "game_page.html";
}

function Send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    Answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " x " + number2 + "</h4>";
    input_box = "<br> Answer: <input type = 'text' id='input_check_box'>";
    check_button = "<br> <br> <button class='btn btn-info'onclick='Check()'>Check</button>";
    row=input_box + question_number + check_button
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}