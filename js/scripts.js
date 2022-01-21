
//Business logic

function beepboop(number) {
  let beepboopArray= [];
    for(let i=0; i <= number; i++){
      let beepboopString =i.toString();
    }
}


// UI Logic

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const formInput = $("input#input").val();
    let result = beepboop(formInput)
    $("#output").text(result);
  });
});


