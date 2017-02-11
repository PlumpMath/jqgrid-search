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
	{id:"1",invdate:"2007-10-01",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
	{id:"2",invdate:"2007-10-02",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
	{id:"3",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
	{id:"4",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
	{id:"5",invdate:"2007-10-05",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
	{id:"6",invdate:"2007-09-06",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
	{id:"7",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00"},
	{id:"8",invdate:"2007-10-03",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
	{id:"9",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"}
];


function filterGrid(){
	jQuery("#grid").jqGrid("clearGridData");

	var note =  ($('#searchnote').val())
	var tax =  ($('#searchtax').val())

	if (note) {
		if (tax) {
			var result = $.grep(mydata, function(e){ return (e.note == note && e.tax == tax); });
		} else {
			var result = $.grep(mydata, function(e){ return (e.note == note); });
		}
	} else if (tax) {
		var result = $.grep(mydata, function(e){ return (e.tax == tax); });
	} else {
		var result = mydata
	}

	jQuery("#grid").jqGrid('setGridParam', {url: '/newurl1', data: result, page: 1}).trigger("reloadGrid");

}