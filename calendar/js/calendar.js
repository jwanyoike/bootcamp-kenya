function render_month(elem,date){
	$(elem).empty();

	//day is a Date object
	var day = date.getDay(),
		year = date.getFullYear(),
		month = date.getMonth(),
		last_day = (new Date(year,month+1,0)).getDate();

	var el = $(elem),
		days = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];

	el.append("<table class='month'></table>");
	el.find("table").append("<tr></tr>");
	days.forEach(function(day){
		el.find("tr").append("<th>" + day + "</th>");
	});

	var count = 0;
	for(var i = 0; i < 5; i++){
		el.find("table").append("<tr></tr>");
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

			$(".month tr:last-child").append("<td>" + pcount + "</td>");

			// if(count == last_day) break;
		}
	}
}

var date = new Date(2015,5,1);

// render_month("#month",date);

$("select[name=month],select[name=year]").change(function(){

	var month = $("select[name=month]").val(),
		year = $("select[name=year]").val(),
		date = new Date(year,month,1);

	render_month("#month",date);
});