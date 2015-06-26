var days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"]; //days of the week
//function that will print the calendar
function render_month(elem,date){
	$(elem + ",#week").empty();

	//day is a Date object
	var day = date.getDay(),//gets the day of the week(0-6)
		year = date.getFullYear(),
		month = date.getMonth(),//gets the day of the month(0-11)
		last_day = (new Date(year,month+1,0)).getDate();

	var el = $(elem);
		
	el.append("<table class='month'></table>");
	el.find("table:last-child").append("<tr></tr>");
	days.forEach(function(day){
		el.find("tr:last-child").append("<th>" + day + "</th>");//prints the day of week at the beginning of table
	});

	var count = 0;
	for(var i = 0; i < 5; i++){
		el.find("table:last-child").append("<tr></tr>");//prints the table rows
		for(var j=0; j < 7; j++){
			if(count >= 1){
				count ++;
			}

			if(i==0 && j==day){
				count++;
			}

			if(count == 0 || count >= last_day + 1){
				pcount = "";
			}
			else{
				pcount = count;
			}

			$(".month tr:last-child").append("<td>" + pcount + "</td>"); //prints the data in the table

			// if(count == last_day) break;
		}
	}
}

var date = new Date(2015,5,1);//date takes 3 arguments year, month, day

// render_month("#month",date);

$("select[name=month],select[name=year]").change(function(){

	var month = $("select[name=month]").val(),
		year = $("select[name=year]").val(),
		date = new Date(year,month,1);

	render_month("#month",date);
});

function display_week () {
  el = $("#week");
	el.empty();
  date = new Date();

  var day = date.getDay();
   
  var today = date.getDate();
  

  el.append("<table class='week'></table>");
  el.find("table.week").append("<tr></tr>");
  days.forEach(function(day){
    el.find("tr").append("<th>" + day + "</th>");
  });
  
  var sun = today - day;
  el.find("table.week").append("<tr></tr>");

  for(var i = 0; i < 7; i++) {
      $(".week tr:last-child").append("<td>" + (sun+i) + "</td>");


  	}
  }

  function yearDiv() {
  	$("#yearDiv").show();
  	
   };

  function todayDate(elem) {
  	date = new Date();
  	var month = $("select[name=month]").val();

  	
  }
  