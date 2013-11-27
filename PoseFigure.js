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
		
		this.getStartPointFromLast = function(partId){
		
			var drawNow = parts[partId];
			var drawFromLast = drawNow.GetDrawFromLast();
//console.log("DRAW drawNow Name: ", drawNow.GetName(), "drawFromLast: ", drawFromLast.part, "at", drawFromLast.site);


			//loop the parts to find the last part's index
			for(var k = 0; k < parts.length; k++){
			
//console.log("FIND: ", k, drawFromLast.part);
			
				if (parts[k].GetName() == drawFromLast.part){
//console.log("FOUND IT: ", k, " new startPoint: ", //parts[k].GetNextStartPoint(drawFromLast.site));						
					return parts[k].GetNextStartPoint(drawFromLast.site);
					
				}
			}	
			//assume main startpoint
			return false;				
		};
						
		this.drawAllParts = function(layerParts, layerPoints, diffInMotion, partName){
		
			//must draw in order, and retrieve the attachment startPoint from previous
		
			//loop the parts in draw order 
			for(var j = 0; j < parts.length; j++){
				
				var startPoint = this.getStartPointFromLast(j);	
				if(!startPoint){			
					
//console.log("drawAllParts no startPoint", j);

				}

				parts[j].Draw(layerParts, layerPoints, startPoint, diffInMotion, partName);
				
//console.log("just drew", j);
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
		
		};	

		//constructor code
		
		name = poseConfig.name;
		if(1==2){
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
PoseFigure.DrawChain = function() {

	var chain = {};
	chain[0] = [7,8,9,10];
	chain[1] = [2];
	chain[2] = [];
	chain[3] = [5];
	chain[4] = [6];
	chain[5] = [];
	chain[6] = [];		
	chain[7] = [9];
	chain[8] = [10];
	chain[9] = [];
	chain[10] = [];	
	
	return chain;

};
PoseFigure.IsInDrawChain = function (drawIdx){

	var res = false;

	var activePartIndex = controller.GetActivePartIndex();

	$.each(PoseFigure.DrawChain()[activePartIndex], function(idx,partInChain){
//console.log("isInDrawChain", activePartIndex, drawIdx, partInChain, drawIdx == partInChain );
		if(drawIdx == partInChain){
			res = true;
		}
	});
	
	return res;
};

//public nonprivileged methods
PoseFigure.prototype = {
	
	Draw: function(layerParts, layerPoints, diffInMotion, partName){
	
		layerParts.removeChildren();
		this.currentPartName = partName;	
		this.drawAllParts(layerParts, layerPoints, diffInMotion, partName);		
		layerParts.draw();
	},
	
	GetParts: function(){
		return this.getParts();
	},
	
	Write: function(poseName){
		return this.writeFile(poseName);
	}

};
