
//Business logic

function beepBoop(number, name) {
  let beepBoopArray= [];
    for(let i=0; i <= number; i++){
      let beepBoopString =i.toString();
      if (beepBoopString.includes("3")) {
        beepBoopArray.push(name + "... wont you be my neighbor?");
      } else if (beepBoopString.includes("2")) {
        beepBoopArray.push("boop");
      } else if (beepBoopString.includes("1")){
        beepBoopArray.push("beep");
      } else {
        beepBoopArray.push(" " + beepBoopString);
      }
    }
    return beepBoopArray;
  }


// UI Logic

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const formInput = $("input#input").val();
    const name =$("input#name").val();
    let result = beepBoop(formInput, name);
    $("#output").text(result);
    $("#robot").show();
  });
});


