var PoseController = (function() {

	//private static attributes
var stage,
	figure,
	layerParts,
	layerPoints,
	activePartIndex,
	isPart;


	//private static methods

	//return constructor
	return function() {


		//private attributes


		
		//privileged methods
				
		this.makePoseSelector = function(){	
		
			var c=[];
			
			c.push("Select Starting Pose: <select id='poses'></select>");
			
			return c.join('');
			
		};
			
		this.makeTensionSelector = function(){	
		
			var c=[];	
			
			c.push("<br/>Roundness:");
			c.push("<input id='tens' value='' size='6'></input>");
			c.push("<input type='button' class='btnRound' value='1.0' ></input>");
			c.push("<input type='button' class='btnRound' value='0.8' ></input>");
			c.push("<input type='button' class='btnRound' value='0.6' ></input>");
			c.push("<input type='button' class='btnRound' value='0.4' ></input>");
			c.push("<input type='button' class='btnRound' value='0.2' ></input>");
			c.push("<input type='button' class='btnRound' value='0.0' ></input>");
			
			return c.join('');
			
		};
				
		this.makeNumberPointsSelector = function(){	
		
			var c=[];
		
			c.push("<br/>Number Mid Points:");
			c.push("<input id='numMid' value='' size='6'></input>");
			c.push("<input type='button' class='btnNumMid' value='1' ></input>");
			c.push("<input type='button' class='btnNumMid' value='2' ></input>");
			c.push("<input type='button' class='btnNumMid' value='3' ></input>");
			c.push("<input type='button' class='btnNumMid' value='4' ></input>");
			c.push("<input type='button' class='btnNumMid' value='5' ></input>");
			c.push("<input type='button' class='btnNumMid' value='6' ></input>"); 
			
			return c.join('');
			
		};	

		this.makeDownloadControls = function(){
		
			var c=[];	
	
			c.push("Download an Image File:"); 
			c.push("<div id='saveImageDiv'>");
				c.push("<input type='button' id='exportImage' value='Export Image'></input>");
			c.push("</div>");
			
			c.push("<div id='exportedImageDiv'>");
				c.push("<img id='exportedImage' src='' download='stickposer.png'>");
				c.push("<br/>");
				c.push("<input type='button' id='downloadImage' value='Download Image'></input>");
				c.push("Note: Open in an image program.");
			c.push("</div>");
			
			return c.join('');
			
		};
		
		this.makeSaveControls = function(){
		
			var c=[];	
	
					
			c.push("<br/>Get Pose File Text:"); 
    		c.push("<input type='button' id='getFile' value='Get File'></input> ");
    		c.push("<br/><textarea id='writeFile'></textarea> ");
    		c.push("<br/>Note: Copy and Paste code into PoseFile.js.");
    		
			
			return c.join('');
			
		};
		
		this.makeAllHtml = function(){
			var c=[];	
		
			c.push("<div id='mainCtl' class='pose_controller'>");			
	
				c.push("<div id='posesCtl' class='pose_controller_sub'>" + this.makePoseSelector() + "</div>");
	
				c.push("<div id='tensionCtl' class='pose_controller_sub'>" + this.makeTensionSelector() + "</div>");
		
				c.push("<div id='numPointsCtl' class='pose_controller_sub'>" + this.makeNumberPointsSelector() + "</div>");

				c.push("<div id='downloadCtl' class='pose_controller_sub'>" + this.makeDownloadControls() + "</div>");
		
				c.push("<div id='saveCtl' class='pose_controller_sub'>" + this.makeSaveControls() + "</div>");
		
			c.push("</div>");		
		
			return c.join("");		
		};
		
		this.initializeEvents = function(){


	stage = new Kinetic.Stage({
        container: 'container',
        width: 600,
        height: 600
    });

    layerParts = new Kinetic.Layer();
    layerPoints = new Kinetic.Layer();
    stage.add(layerParts);
    stage.add(layerPoints);      

    figure = new PoseFigure(Pose["BASE"]);
    figure.Draw(layerParts, layerPoints);


		
			$.each(Pose, function(idx, pose){
//console.log(pose);
				$('<option>').val(idx).text(idx).appendTo('#poses');
			});	
			//set to blank first
			//$("#poses").prop("selectedIndex", -1);
			
				
			$("#container").on("click", function(){
	
				clickTimer = setTimeout(function(){
					if(!isPart){
						layerPoints.clear();				
					}
					isPart = false;
				}, 500);
	
			});
	
			$(".btnRound").on("click", function(){
				var tens = $(this).val();

				figure.GetParts()[activePartIndex].SetTension(parseFloat(tens));
			});
	
			$(".btnNumMid").on("click", function(){
				var num = $(this).val();

				figure.GetParts()[activePartIndex].SetNumMidPts(parseInt(num), layerPoints);
			}); 


	
			$("#exportImage").on("click", function(){
				stage.toDataURL({
					callback: function(dataUrl) {
						 // This forces download when navigated to
						// var downloadUrl = dataUrl.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
						 var downloadUrl = dataUrl.replace(/^data:image\/[^;]/, 'data:image/octet-stream');
		//console.log(downloadUrl);
				 
						 $("#exportedImageDiv").show();
						 $("#exportedImage").attr("src", dataUrl);
						 $("#downloadImage").click(function(event) {
							// This will cause download
							location.href = downloadUrl;
						 });
					}
				});
				stage.toDataURL();
			});  
	
			$("#getFile").on("click", function(){
				var txt = "";
				var name = prompt("Enter Name");
				if(name){
					txt = figure.Write(name);
					$("#writeFile").text(txt);
				}
			});  
	
			$("#poses").on("change", function(){
				figure = new PoseFigure(Pose[this.value]);
				figure.Draw(layerParts, layerPoints);	

			});

		


		
		};
		
		this.redrawFigure = function(diffInMotion, currentPartName){

			figure.Draw(layerParts, layerPoints, diffInMotion, currentPartName);

		};
		
		this.setActivePart = function(part_idx){
			activePartIndex = part_idx;
			isPart = true;
		};
		
		this.getActivePartIndex = function(){
			return activePartIndex;
		};

		//constructor code
	
	}

})();

//public static method
//PoseController.StaticMethod = function() {
//	return 100;
//};
 	
//public nonprivileged methods
PoseController.prototype = {
	
	Build: function(elName){

		var el = $("#" + elName).get();

		$("#"+elName).append(this.makeAllHtml());
		this.initializeEvents();

		
	},
	
	SetActivePart: function(part_idx){
	
		this.setActivePart(part_idx);


	},
	
	RedrawFigure: function(diffInMotion, currentPartName){
	
		this.redrawFigure(diffInMotion, currentPartName);
		
	},
	
	GetActivePartIndex: function(){
	
		return this.getActivePartIndex();
	
	}



};
