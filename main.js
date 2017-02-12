jQuery(document).ready(function(){
	jQuery("#grid").jqGrid({
		datatype: 'clientSide',
		colNames:['Inv No','Date', 'Amount','Tax','Total','Notes'],
		colModel :[
			{name:'id',index:'invid', width:55, sorttype:'int'},
			{name:'invdate',index:'invdate', width:90, sorttype:'date', datefmt:'Y-m-d'},
			{name:'amount',index:'amount', width:80, align:'right',sorttype:'float'},
			{name:'tax',index:'tax', width:80, align:'right',sorttype:'float'},
			{name:'total',index:'total', width:80,align:'right',sorttype:'float'},
			{name:'note',index:'note', width:150, sortable:false}
		],
		data: mydata,
		width: 700,
    viewrecords: true,
		caption: "Show query in search"
	});
});


var mydata = [
	{id:"1",invdate:"2007-10-01",name:"test",note:"note",amount:"200.00",tax:"12.00",total:"210.00"},
	{id:"2",invdate:"2007-10-02",name:"test2",note:"note2",amount:"300.00",tax:"27.00",total:"320.00"},
	{id:"3",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"37.00",total:"430.00"},
	{id:"4",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
	{id:"5",invdate:"2007-10-05",name:"test2",note:"note2",amount:"300.00",tax:"21.00",total:"320.00"},
	{id:"6",invdate:"2007-09-06",name:"test3",note:"note3",amount:"400.00",tax:"62.00",total:"430.00"},
	{id:"7",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
	{id:"8",invdate:"2007-10-03",name:"test2",note:"note2",amount:"300.00",tax:"29.00",total:"320.00"},
	{id:"9",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"35.00",total:"430.00"}
];


function filterGrid(){
	jQuery("#grid").jqGrid("clearGridData");

	var field1 =  ($('#searchfield1').val());
	var field2 =  ($('#searchfield2').val());

	var option1 = ($('#option1')).val();
	var option2 = ($('#option2')).val();

	var boolean = ($('#boolean')).val();

	if (field1 && field2 && boolean === 'AND') {
		var result = $.grep(mydata, function(e){ return (e[option1] == field1 && e[option2] == field2); });
	} else if (field1 && field2 && boolean === 'OR') {
		var result = $.grep(mydata, function(e){ return (e[option1] == field1 || e[option2] == field2); });
	} else if (field1) {
		var result = $.grep(mydata, function(e){ return (e[option1] == field1); });
	} else if (field2) {
		var result = $.grep(mydata, function(e){ return (e[option2] == field2); });
	} else {
		var result = mydata
	}


	jQuery("#grid").jqGrid('setGridParam', {url: '/newurl1', data: result, page: 1}).trigger("reloadGrid");

}