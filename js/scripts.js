
//Business logic

function beepBoop(number) {
  let beepBoopArray= [];
    for(let i=0; i <= number; i++){
      let beepBoopString =i.toString();
      if (beepBoopString.includes("3")) {
        beepBoopArray.push("wontyou be my neighbor")
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
    const nameInput = $("input#name").val();
    let result = beepBoop(formInput, nameInput);
    $("#output").text(result);
  });
});


