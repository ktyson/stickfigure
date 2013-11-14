var PoseFigure = (function() {

	//private static attributes

	//private static methods

	//return constructor
	return function(poseConfig) {


		//private attributes
		var name;
		var parts = [];

		//privileged methods
		this.getParts = function(){
			return parts;
		};
		
						
		this.drawAllParts = function(layerParts, layerPoints, diffInMotion){
		
			//must draw in order, and retrieve the attachment startPoint from previous

			var startPoint;
						
			//test loop
			//for(var i = 0; i < parts.length; i++){			
//console.log(i, parts[i].GetName());							
			//}
		
			//loop the parts in draw order 
			for(var j = 0; j < parts.length; j++){

				//if(j >= 1){
				
					var drawFrom = parts[j].GetDrawFromLast();
//console.log("in j loop draw", parts[j].GetName(), "from", drawFrom.part, "at", drawFrom.site);
					//loop the parts to find the last part's index
					for(var k = 0; k < parts.length; k++){
						if (parts[k].GetName() == drawFrom.part){
							startPoint = parts[k].GetNextStartPoint(drawFrom.site);
						}
					}
//console.log("after k loop startPoint", startPoint || "none");					
					parts[j].Draw(layerParts, layerPoints, startPoint, diffInMotion);
					
				//}else{
					//first part has no attach 
				//	parts[j].Draw(layerParts, layerPoints);
				//}
					
			}							
		
		};	
		
		this.writeFile = function(poseName){
			
			var beginTxt = [];
			var mainTxt = [];
			var endTxt = [];
	
			beginTxt.push("Pose[\"" + poseName + "\"] = {");
			beginTxt.push("name: \"" + poseName + "\",");
			beginTxt.push("parts: [");
			
			for(var i = 0; i < parts.length; i++){
			
				mainTxt.push(parts[i].Write());
			
			}
			
			endTxt.push("]};");
			
			return beginTxt.join('\n') + mainTxt.join(',\n') + endTxt.join('\n');
		
		}	

		//constructor code
		
		name = poseConfig.name;
		if(1==1){
			console.log("constructing new PoseFigure with name " + name);
		}
//	console.log(this.parentNode);
		
		poseConfig.parts.sort(function(a,b){return a.drawOrder-b.drawOrder});
		
		$.each(poseConfig.parts, function(idx, prt){
			
			var newPart = new PosePart(idx, prt);			
			
			parts.push(newPart);
			
//console.log(prt.name, prt.drawOrder);

		});

	}

})();

//public static method
PoseFigure.ScaleFactor = function() {
	return 75;
};
PoseFigure.OffsetX = function() {
	return 50;
};
PoseFigure.OffsetY = function() {
	return 50;
};

//public nonprivileged methods
PoseFigure.prototype = {
	
	Draw: function(layerParts, layerPoints, diffInMotion){
	
		layerParts.removeChildren();	
		//layerPoints.removeChildren();
	
		
		this.drawAllParts(layerParts, layerPoints, diffInMotion);		
		layerParts.draw();
	},
	
	GetParts: function(){
		return this.getParts();
	},
	
	Write: function(poseName){
		return this.writeFile(poseName);
	}

};
