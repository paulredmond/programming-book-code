
window.onload = init;




function init()
{
	var data1 = parseInt(document.getElementById("data1").getAttribute("value"));
	var data2 = parseInt(document.getElementById("data2").getAttribute("value"));
	var data3 = parseInt(document.getElementById("data3").getAttribute("value"));
	var data4 = parseInt(document.getElementById("data4").getAttribute("value"));
	var data5 = parseInt(document.getElementById("data5").getAttribute("value"));
	var data6 = parseInt(document.getElementById("data6").getAttribute("value"));

	var data = [data1, data2,  data3,  data4,  data5,  data6];
	var radius = 180;
	
	setTimeout(function()
		{
			new PieChart(data, radius);
		},
		1
	);
};




function PieChart(data, radius)
{
	this.data = data;
	this.radius = radius;
	
	this.startColor = [204, 0, 0];
	this.endColor = [115, 12, 243];
	this.shadowOffset = 7;

	this.canvas = document.getElementById("chart");

	if (typeof this.canvas.getContext != "undefined")
	{
		this.context = this.canvas.getContext("2d");
		
		this.draw();
	}
};




PieChart.prototype.draw = function()
{
	var cx = this.canvas.width / 2;
	var cy = this.canvas.height / 2;
	
	this.context.globalCompositeOperation = "source-over";
	this.context.clearRect(0, 0, this.canvas.getAttribute("width"), this.canvas.getAttribute("height"));
	
	var dataTotal = 0;
	
	for (var i = 0; i < this.data.length; i++)
	{
		dataTotal +=  this.data[i];
	}
	
	var dataSubTotal = 0;
	
	for (var i = 0; i < this.data.length; i++)
	{
		var red = Math.round(this.startColor[0] - ((this.startColor[0] - this.endColor[0]) / (this.data.length - 1) * i));
		var green = Math.round(this.startColor[1] - ((this.startColor[1] - this.endColor[1]) / (this.data.length - 1) * i));
		var blue = Math.round(this.startColor[2] - ((this.startColor[2] - this.endColor[2]) / (this.data.length - 1) * i));

		this.context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";

		this.context.beginPath();
		this.context.moveTo(cx, cy);
		this.context.arc(cx, cy, this.radius, dataSubTotal / dataTotal * Math.PI * 2, (dataSubTotal + this.data[i]) / dataTotal * Math.PI * 2, false);
		this.context.closePath();
		this.context.fill();

		this.context.beginPath();
		this.context.moveTo(cx, cy);
		this.context.arc(cx, cy, this.radius, dataSubTotal / dataTotal * Math.PI * 2, (dataSubTotal + this.data[i]) / dataTotal * Math.PI * 2, false);
		
		if (i == this.data.length - 1)
		{
			this.context.closePath();
		}
		
		this.context.stroke();

		dataSubTotal += this.data[i];
	}
	
	this.context.beginPath();
	this.context.moveTo(cx + this.shadowOffset, cy + this.shadowOffset);
	this.context.arc(cx + this.shadowOffset, cy + this.shadowOffset, this.radius, 0, Math.PI * 2, false);
	this.context.closePath();
	this.context.globalCompositeOperation = "destination-over";
	this.context.fillStyle = "rgba(0, 0, 0, 0.25)";
	this.context.fill();
};