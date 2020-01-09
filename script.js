// Wait until Jquery is ready
$( document ).ready(function() {
  //Variable to append cols
  var row = ""
  //loop to dispaly 9am-18pm
    for (var i= 9 ; i<=18; i++){
      // Creation of the row elements
      row = $(`<div class="row">`)
      col1 = $(`<div class ="col-lg-2">${i} AM</div>`)
      col2 = $(`<div class ="col-lg-8"><input class="form-control" type="text" name="userInput"></div>`)
      col3 = $(`<div class ="col-lg-2"><button id="savePlanner" class="btn btn-success btn-block"><i class="fas fa-save"></i> Save</button></div>`)
      row.append(col1)
      row.append(col2)
      row.append(col3)
      $("#display-planner").append(row)
    }
   $("button#savePlanner").click(function(e){
     alert("save")
   })
  });
