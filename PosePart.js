//prototype class pattern
var PosePart = (function() {
	
	//private static attributes
	var m = PoseFigure.ScaleFactor(); //scale multiplier
	var o = PoseFigure.OffsetX(); //offset

	//private static methods
	function checkThisOut(someVar) {
		doSomething;
	}

	//return constructor
	return function(idx, configPart) {


		//private attributes
		var name, startPoint, endPoint;
		var drawOrder;
		var drawFromLast = {};
		var midPoints = [];
		var drawIdx;
		var partIdx;
		var tension;
		var numMidPts;	

		//privileged methods
		
		this.write = function(){
		
			var j = {};
			j.drawOrder = drawOrder;
			j.drawFromLast = drawFromLast;
			j.name = name;
			j.startPoint = startPoint;
			j.midPoints = midPoints;
			j.endPoint = endPoint;
			j.numMidPoints = numMidPts;
			j.tension = tension;
			
			return JSON.stringify(j);		
		
		};
		
		this.getXformedPointArray = function(){
		
			var arrPoints = [];

			//flatten points to array
			$.each(startPoint, function(idx, coord){
				arrPoints.push(coord*m+o);
			});
			$.each(midPoints, function(idx, pair){
				arrPoints.push(pair[0]*m+o);
				arrPoints.push(pair[1]*m+o);
			});
			$.each(endPoint, function(idx, coord){
				arrPoints.push(coord*m+o);
			});
						
			return arrPoints;
				
		};
	
		
		this.drawPoints = function(layerPoint){
		
			var arrPoints = [];

			var obj = {};
			var point;
			
			layerPoint.removeChildren();
			
			//startPoint
			this.drawPoint(layerPoint, startPoint[0]*m+o,startPoint[1]*m+o, "gray");

			//midPoints
			for(var i = 0; i < midPoints.length; i++){
				this.drawPoint(layerPoint, midPoints[i][0]*m+o,midPoints[i][1]*m+o, "aqua");
			}			
			
			//endPoint
			this.drawPoint(layerPoint, endPoint[0]*m+o,endPoint[1]*m+o, "orange");
				
			layerPoint.draw();
			this.TriggerPartChange(partIdx);
		
		};
		
		this.drawPoint = function(layerPoint, x, y, color){
			// touchscreen needs larger circles to target
			var isTouch = 'ontouchstart' in document.documentElement;
			
			var obj = {
			  x: x,
			  y: y,		
			  radius: (isTouch == true ? 20 : 5),
			  fill: color,
			  stroke: 'red',
			  strokeWidth: 1,
			  draggable:true
			};
			
			var point = new Kinetic.Circle(obj);

			var me = this; //for events 'this' wont work			
			
			point.on("dragmove touchmove", function(){
				if(this.index == 0){
					this.setDraggable(false);
				}
				
				var container = this.parent.parent.attrs.container;
				$(container).css("cursor", "move");

				if(this.index > 0){
					if(me.resetMidPoints(this.index, this.getX(), this.getY())){
//console.log("drag redraw");	
						me.TriggerRedraw();
					}
				}

			});
			point.on("dragend touchend", function(){
				var container = this.parent.parent.attrs.container;
				$(container).css("cursor", "default");
				
				if(this.index > 0){
					if(me.resetMidPoints(this.index, this.getX(), this.getY())){
//console.log("end drag");	
						me.TriggerRedraw();
					}
				}
				
			});

			point.on("mouseover", function(){
				var container = point.parent.parent.attrs.container;
				$(container).css("cursor", "move");
			});
			
			point.on("mouseout", function(){
				// hpsmart touchscreen sometimes triggers a mouseout error when using it as a touch device
				try {
					var container = point.parent.parent.attrs.container;
					$(container).css("cursor", "default");
				}
				catch(err) {
					// just want to avoid printing errors to the console
				}
			});				
			
			layerPoint.add(point);
		
		}
		
		this.resetMidPoints = function(myIndex, myX, myY){
		


			var refX;
			var refY;
			
			for(var i = 0; i < midPoints.length; i++){
				//how match?
//console.log("reset match",i,myIndex-1);				
				if(i == (myIndex-1)){
//console.log("reset success",i,myIndex-1);	
					refX = ((myX-o)/m);
					refY = ((myY-o)/m);	
					midPoints[i] = [refX, refY];				
					return true;		
				}
	
			}
			
			if(myIndex != 0){
				//must be end point
				refX = ((myX-o)/m);
				refY = ((myY-o)/m);	
					
				endPoint = [refX, refY];
				return true;
			}
			
//console.log("new mids", refX, refY);

			
		
		}
				
		this.drawPart = function(layerPart, layerPoint, startPointFromLast){
		
			if(startPointFromLast){
				startPoint = startPointFromLast;
			}
			
			// touchscreen needs thicker lines to target
			var isTouch = 'ontouchstart' in document.documentElement;

			var obj = {
			  points: this.getXformedPointArray(),
			  stroke: 'black',
			  tension: tension,
			  strokeWidth: (isTouch == true ? 24 : 10),
			  lineCap:"round",
			  lineJoin:"round"
			};
			
//console.log("draw",obj.points.toString());
			
			var spline = new Kinetic.Spline(obj);
			
			var me = this; //for events 'this' wont work
			
			spline.on("mouseover", function(){
				var container = spline.parent.parent.attrs.container;
				$(container).css("cursor", "pointer");
			});
			
			spline.on("mouseout", function(){
				// hpsmart touchscreen sometimes triggers a mouseout error when using it as a touch device
				try {
					var container = spline.parent.parent.attrs.container;
					$(container).css("cursor", "default");
				}
				catch(err) {
					// just want to avoid printing errors to the console
				}
			});
			
			spline.on("click touchstart", function(){
				console.log("click", spline.index, name, drawIdx, this.index);
				me.drawPoints(layerPoint);
			});
			
			layerPart.add(spline);	
			
			drawIdx = spline.index;
//console.log(name + " drawIdx set to " + drawIdx);
		};


		
		this.insertMidPoints = function(numMidPts, layerPoint){
		
//console.log("old midpts", midPoints.toString());	

			//clear midPoints
			midPoints = [];
		
			//recalc midPts of part
			//var dist = lineDistance({x:startPoint[0],y:startPoint[1]},
			//	{x:endPoint[0],y:endPoint[1]});
			var num = numMidPts+1;//num must be 2 or above
			var newX;
			var newY;
			
			for(var i = 1; i < num; i++){

				newX = startPoint[0] + (endPoint[0] - startPoint[0]) * i/num;
				newY = startPoint[1] + (endPoint[1] - startPoint[1]) * i/num;
				midPoints.push([newX, newY]);	
//console.log("new midpts", i, i/num, midPoints.toString());			
			}
		
		}

		
		this.setDrawIdx = function(idx){
			drawIdx = idx;
		};
		
		this.getName = function(){
		
			//console.log("Clicked", name);
			return name;
		};
		
		this.getDrawFromLast = function(){
			return drawFromLast;
		};
		
		this.getNextStartPoint = function(which){
			if(which == "start"){
				return startPoint;
			}else{
				return endPoint;
			}
		};
		
		this.setTension = function(val){
//console.log(name,"old tension", tension);
			tension = val;
//console.log(name,"new tension", tension);
			this.TriggerRedraw();
		};

		this.setNumMidPts = function(val, layerPoint){
			
//console.log(name,"old num", numMidPts);
			numMidPts = val;			
			this.insertMidPoints(numMidPts, layerPoint);			
			this.drawPoints(layerPoint);
			this.TriggerRedraw();
//console.log(name,"new num", numMidPts);			
		};

		//constructor code
		
		partIdx = idx;
		
		name = configPart.name;
		startPoint = configPart.startPoint;		
			
		endPoint = configPart.endPoint;
		
		drawOrder = configPart.drawOrder;
		drawFromLast = configPart.drawFromLast;

		tension = configPart.tension;
		numMidPts = configPart.numMidPts;
		
		if(configPart.midPoints.length == 0){
			this.insertMidPoints(numMidPts);
		}else{
			midPoints = configPart.midPoints;
		}	
	}
})();

//public static method
// PosePart.PoseParent = function(obj) {
// 	this.setParent(obj);
// 
// };

//public nonprivileged methods
PosePart.prototype = {
	Draw: function(layerPart, layerPoint, startPointFromLast){
		console.log("drawing " + this.getName());
		this.drawPart(layerPart, layerPoint, startPointFromLast);
	},	
	TriggerRedraw: function(){		
		RedrawFigure();
	},	
	TriggerPartChange: function(idx){	
		SetActivePart(idx);
	},	
	GetDrawFromLast: function(){
		return this.getDrawFromLast();
	},	
	GetNextStartPoint: function(which){		
		return this.getNextStartPoint(which);
	},	
	GetName: function(){
		return this.getName();
	},	
	SetTension: function(val){
		this.setTension(val);
	},
	SetNumMidPts: function(val, layerPoint){
		this.setNumMidPts(val, layerPoint);
	},	
	Write: function(){
		return this.write();
	}	
};
