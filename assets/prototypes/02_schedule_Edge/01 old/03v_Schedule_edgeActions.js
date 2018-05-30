/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         
         ////// Resets Keydown Variables \\\\\\\
         
         // --------- Reset Main Timeline ---------------
            LeftKey             = 'OFF' // ←
            RightKey            = 'OFF' // →
            UpKey               = 'OFF' // ↑
            DownKey             = 'OFF' // ↓
         
            SelectKey           = 'OFF' // SPACE
            BackKey             = 'OFF' // B
            RedKey              = 'OFF' // R
         
            ReverseLeftKey      = 'OFF' // ←
            ReverseRightKey     = 'OFF' // →
            ReverseUpKey        = 'OFF' // ↑
         
         // -------- Reset Symbol 1 Timeline -------------
         
            symTimeline_1       = "symVariable" // Control Symbol 1 Timeline
            SymLeftKey          = 'OFF' // ←
            SymRightKey         = 'OFF' // →
         	SymUpKey            = 'OFF' // ↑
            SymDownKey          = 'OFF'
         
            SymSelectKey        = 'OFF' // SPACE
            SymBackKey          = 'OFF' // B
            SymRedKey           = 'OFF' // R
         
            SymReverseLeftKey   = 'OFF' // ←
            SymReverseRightKey  = 'OFF' // →
            SymReverseUpKey     = 'OFF' // ↑
         
         // -------- Reset Symbol 2 Timeline -------------
         
            symTimeline_2       = "symVariable" // Control Symbol 2 Timeline
            SymLeftKey2         = 'OFF' // ←
            SymRightKey2        = 'OFF' // →
            SymUpKey2           = 'OFF' // ↑
            SymDownKey2         = 'OFF' // R
         
            SymSelectKey2       = 'OFF' // SPACE
            SymBackKey2         = 'OFF' // B
            SymRedKey2          = 'OFF' // R
         
            SymReverseLeftKey2  = 'OFF' // ←
            SymReverseRightKey2 = 'OFF' // →
            SymReverseUpKey2    = 'OFF' // ↑
         
         // -------- Nested Symbol 3 Timeline -------------
         
            nestedSymTimelineParent_1 = "nestedSymVariable_1" // Select Symbol Parent Timeline
            nestedSymTimelineChild_1  = "nestedSymVariable_2"
         
            SymLeftKey3         = 'OFF' // ←
            SymRightKey3        = 'OFF' // →
            SymUpkey3           = 'OFF' // ↑
            SymDownKey3         = 'OFF' // R
         
            SymSelectKey3       = 'OFF' // SPACE
            SymBackKey3         = 'OFF' // B
            SymRedKey3          = 'OFF' // R
         
            SymReverseLeftKey3  = 'OFF' // ←
            SymReverseRightKey3 = 'OFF' // →
            SymReverseUpKey3    = 'OFF' // ↑
         
         // -------- Nested Symbol 4 Timeline -------------
         
            nestedSymTimelineParent_2 = "nestedSymVariable_1" // Select Symbol Parent Timeline
            nestedSymTimelineChild_2  = "nestedSymVariable_2"
         
            SymLeftKey4         = 'OFF' // ←
            SymRightKey4        = 'OFF' // →
            SymUpkey4           = 'OFF' // ↑
            SymDownKey4         = 'OFF' // R
         
            SymSelectKey4       = 'OFF' // SPACE
            SymBackKey4         = 'OFF' // B
            SymRedKey4          = 'OFF' // R
         
            SymReverseLeftKey4  = 'OFF' // ←
            SymReverseRightKey4 = 'OFF' // →
            SymReverseUpKey4    = 'OFF' // ↑
         
            // -------- Nested Symbol 5 Timeline -------------
         
            nestedSymTimelineParent_3 = "nestedSymVariable_1" // Select Symbol Parent Timeline
            nestedSymTimelineChild_3  = "nestedSymVariable_2"
         
            SymLeftKey5         = 'OFF' // ←
            SymRightKey5        = 'OFF' // →
            SymUpKey5           = 'OFF' // ↑
            SymDownKey5         = 'OFF' // R
         
            SymSelectKey5       = 'OFF' // SPACE
            SymBackKey5         = 'OFF' // B
            SymRedKey5          = 'OFF' // R
         
            SymReverseLeftKey5  = 'OFF' // ←
            SymReverseRightKey5 = 'OFF' // →
            SymReverseUpKey5    = 'OFF' // ↑
         
         /////////////////////////////////////////////////////////////////////
         
         var stageHeight = sym.$('Stage').height(); // Set a variable for the height of the stage
         sym.$("#Stage").css({ // Set the transform origin so we always scale to the top left corner of the stage
         "transform-origin":"0 0",
         "-ms-transform-origin":"0 0",
         "-webkit-transform-origin":"0 0",
         "-moz-transform-origin":"0 0",
         "-o-transform-origin":"0 0"
         });
         
         function scaleStage() {
             var stage = sym.$('Stage'); // Set a reusable variable to reference the stage
             var parent = sym.$('Stage').parent(); // Set a reusable variable to reference the parent container of the stage
         
             var parentWidth = stage.parent().width(); // Get the parent of the stage width
             var stageWidth = stage.width(); // Get the stage width
             var desiredWidth = Math.round(parentWidth * 1); // Set the new width of the stage as it scales
             var rescale = (desiredWidth / stageWidth); // Set a variable to calculate the new width of the stage as it scales
         
         
         
         
         
         // Rescale the stage!
         	 stage.css('transform', 'scale(' + rescale + ')'); 
             stage.css(  '-o-transform', 'scale(' + rescale + ')');
         	 stage.css('-ms-transform', 'scale(' + rescale + ')');
             stage.css('-webkit-transform', 'scale(' + rescale + ')');
         	 stage.css('-moz-transform', 'scale(' + rescale + ')');
             stage.css('-o-transform', 'scale(' + rescale + ')');
             parent.height(stageHeight * rescale); // Reset the height of the parent container so the objects below it will reflow as the height adjusts
         }
         
         // Make it happen when the browser resizes
         $(window).on('resize', function(){ 
         	 scaleStage(); 
         });
         
         // Make it happen when the page first loads
         $(document).ready(function(){
             scaleStage();
         });
         
         
         
         var vid = $("<video width='1280' height='720'  autoplay='autoplay' muted='muted'>" + "<source src='video/doctorwho.mp4' type='video/mp4' />" +
         
            "This browser is not compatible with HTML 5" +
         "</video>");
         
         sym.$("video").append(vid);
         $("video").prop('muted', true);
         
         
         
         sym.$('webPageDisplayPort').html('<ul><li>item</><li>item</><li>item</>');

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         
         var UP = 38;
         var DOWN = 40;
         var LEFT = 37;
         var RIGHT = 39;
         var SPACE = 32;
         var BACK = 66;
         var RED = 82;
         var UPNEW = 38;
         
         $(document).keydown(function(e)
         { 
         if (e.which==UP)
         	{
         		if(SymUpKey != 'OFF')
         		{
         			sym.getSymbol(symTimeline_1).play(SymUpKey); 
         			}
         		else if(SymReverseUpKey != 'OFF')
         		{			
         			sym.getSymbol(symTimeline_1).playReverse(SymReverseUpKey);
         			}
         	}
         });
         
         $(document).keydown(function(e)
         { 
         if (e.which==UP)
         	{
         		if(SymUpKey2 != 'OFF')
         		{
         			sym.getSymbol(symTimeline_2).play(SymUpKey2); 
         			}
         		else if(SymReverseUpKey2 != 'OFF')
         		{			
         			sym.getSymbol(symTimeline_2).playReverse(SymReverseUpKey2);
         			}
         	}
         });
         
         $(document).keydown(function(e)
         { 
         if (e.which==UP)
         	{
         		if(SymUpKey4 != 'OFF')
         		{
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_2).getSymbol(nestedSymTimelineChild_2).play(SymUpKey4);	
         			}
         		else if(SymReverseUpKey4 != 'OFF')
         		{			
         		sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_2).getSymbol(nestedSymTimelineChild_2).playReverse(SymUpKey4);	
         			}
         	}
         });
         
         $(document).keydown(function(e)
         { 
         if (e.which==UP)
         	{
         		if(SymUpKey5 != 'OFF')
         		{
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_3).getSymbol(nestedSymTimelineChild_3).play(SymUpKey5);	
         			}
         		else if(SymReverseUpKey5 != 'OFF')
         		{			
         		sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_3).getSymbol(nestedSymTimelineChild_3).playReverse(SymUpKey5);	
         			}
         	}
         });
         
         
         $(document).keydown(function(e)
         { 
         	if (e.which==UP)
         	{
         		if(UpKey != 'OFF')
         		{
         			sym.play(UpKey);
         			}
         		else if(ReverseUpKey != 'OFF')
         		{			
         			sym.playReverse(ReverseUpKey);
         			}
         	}
         	else if (e.which==DOWN)
         	{
         		if(DownKey != 'OFF')
         		{		
         			sym.play(DownKey);
         			}
         	}
         	else if (e.which==LEFT)
         	{
         		if(LeftKey != 'OFF')
         		{			
         			sym.play(LeftKey);			
         			}
         		else if(ReverseLeftKey != 'OFF')
         		{			
         			sym.playReverse(ReverseLeftKey);
         			}
         	}
         	else if (e.which==RIGHT)
         	{
         		if(RightKey != 'OFF')
         		{		
                 sym.play(RightKey);
         			}	
         		else if(ReverseRightKey != 'OFF')
         		{
         			sym.playReverse(ReverseRightKey);
         			}	
         	}
         	else if (e.which==SPACE)
         	{
         		if(SelectKey != 'OFF')
         		{		
         			sym.play(SelectKey);	
         			}
         	}
         	else if (e.which==BACK)
         	{
         		if(BackKey != 'OFF')
         		{		
         			sym.play(BackKey);		
         			}
         	}
         	else if (e.which==RED)
         	{
         		if(RedKey != 'OFF')
         		{		
         			sym.play(RedKey);	
         			}
         	}
         
         });
         /////////////////////// 01 ////////////////////////////////
         $(document).keydown(function(e)
         { 
         
         	 if (e.which==SPACE)
         	{
         		if(SymSelectKey != 'OFF')
         		{
         			sym.getSymbol(symTimeline_1).play(SymSelectKey);	
         			}
         	}
         	else if (e.which==DOWN)
         	{
         		if(SymDownKey != 'OFF')
         		{			
         			sym.getSymbol(symTimeline_1).play(SymDownKey);	
         			}
         	}
         	else if (e.which==LEFT)
         	{
         		if(SymLeftKey != 'OFF')
         		{	
         			sym.getSymbol(symTimeline_1).play(SymLeftKey);
         			}
         		else if(SymReverseLeftKey != 'OFF')
         		{
         			sym.getSymbol(symTimeline_1).playReverse(SymReverseLeftKey);			
         			}
         	}
         	else if (e.which==RIGHT)
         	{
         		if(SymRightKey != 'OFF')
         		{
         			sym.getSymbol(symTimeline_1).play(SymRightKey);				
         			}	
         		else if(SymReverseRightKey != 'OFF')
         		{	
         			sym.getSymbol(symTimeline_1).playReverse(SymReverseRightKey);	
         			}	
         	}
         	else if (e.which==BACK)
         	{
         		if(SymBackKey != 'OFF')
         		{	
         			sym.getSymbol(symTimeline_1).play(SymBackKey);				
         		}
         	}
         	else if (e.which==RED)
         	{
         		if(SymRedKey != 'OFF')
         		{			
         			sym.getSymbol(symTimeline_1).play(SymRedKey);	
         		}
         	}
         });
         /////////////////////// 02 ////////////////////////////////
         	$(document).keydown(function(e)
         	{
         	 if (e.which==DOWN)
         	{
         		if(SymDownKey2 != 'OFF')
         		{			
         			sym.getSymbol(symTimeline_2).play(SymDownKey2);	
         			}
         	}
         	else if (e.which==LEFT)
         	{
         		if(SymLeftKey2 != 'OFF')
         		{	
         			sym.getSymbol(symTimeline_2).play(SymLeftKey2);
         		}
         		else if(SymReverseLeftKey2 != 'OFF')
         		{
         			sym.getSymbol(symTimeline_2).playReverse(SymReverseLeftKey2);			
         		}
         	}
         	else if (e.which==RIGHT)
         	{
         		if(SymRightKey2 != 'OFF')
         		{
         			sym.getSymbol(symTimeline_2).play(SymRightKey2);				
         		}	
         		else if(SymReverseRightKey2 != 'OFF')
         		{	
         			sym.getSymbol(symTimeline_2).playReverse(SymReverseRightKey2);	
         		}	
         	}
         	else if (e.which==SPACE)
         	{
         		if(SymSelectKey2 != 'OFF')
         		{
         			sym.getSymbol(symTimeline_2).play(SymSelectKey2);	
         		}
         	}
         	else if (e.which==BACK)
         	{
         		if(SymBackKey2 != 'OFF')
         		{	
         			sym.getSymbol(symTimeline_2).play(SymBackKey2);				
         		}
         	}
         	else if (e.which==RED)
         	{
         		if(SymRedKey2 != 'OFF')
         		{			
         			sym.getSymbol(symTimeline_2).play(SymRedKey2);	
         		}
         	}
         });
         
         /////////////////////// Nested Symbol 03 ////////////////////////////////
         	$(document).keydown(function(e)
         	{
         	 if (e.which==DOWN)
         	{
         		if(SymDownKey3 != 'OFF')
         		{			
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_1).getSymbol(nestedSymTimelineChild_1).play(SymDownKey3);	
         			}
         	}
         	else if (e.which==LEFT)
         	{
         		if(SymLeftKey3 != 'OFF')
         		{	
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_1).getSymbol(nestedSymTimelineChild_1).play(SymLeftKey3);
         		}
         		else if(SymReverseLeftKey3 != 'OFF')
         		{
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_1).getSymbol(nestedSymTimelineChild_1).playReverse(SymReverseLeftKey3);			
         		}
         	}
         	else if (e.which==RIGHT)
         	{
         		if(SymRightKey3 != 'OFF')
         		{
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_1).getSymbol(nestedSymTimelineChild_1).play(SymRightKey3);				
         		}	
         		else if(SymReverseRightKey3 != 'OFF')
         		{	
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_1).getSymbol(nestedSymTimelineChild_1).playReverse(SymReverseRightKey3);	
         		}	
         	}
         	else if (e.which==SPACE)
         	{
         		if(SymSelectKey3 != 'OFF')
         		{
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_1).getSymbol(nestedSymTimelineChild_1).play(SymSelectKey3);	
         		}
         	}
         	else if (e.which==BACK)
         	{
         		if(SymBackKey3 != 'OFF')
         		{	
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_1).getSymbol(nestedSymTimelineChild_1).play(SymBackKey3);				
         		}
         	}
         	else if (e.which==RED)
         	{
         		if(SymRedKey3 != 'OFF')
         		{			
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_1).getSymbol(nestedSymTimelineChild_1).play(SymRedKey3);	
         		}
         	}
         });
         /////////////////////// Nested Symbol 04 ////////////////////////////////
         	$(document).keydown(function(e)
         	{
         	 if (e.which==DOWN)
         	{
         		if(SymDownKey4 != 'OFF')
         		{			
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_2).getSymbol(nestedSymTimelineChild_2).play(SymDownKey4);	
         			}
         	}
         	else if (e.which==LEFT)
         	{
         		if(SymLeftKey4 != 'OFF')
         		{	
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_2).getSymbol(nestedSymTimelineChild_2).play(SymLeftKey4);
         		}
         		else if(SymReverseLeftKey4 != 'OFF')
         		{
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_2).getSymbol(nestedSymTimelineChild_2).playReverse(SymReverseLeftKey4);			
         		}
         	}
         	else if (e.which==RIGHT)
         	{
         		if(SymRightKey4 != 'OFF')
         		{
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_2).getSymbol(nestedSymTimelineChild_2).play(SymRightKey4);				
         		}	
         		else if(SymReverseRightKey4 != 'OFF')
         		{	
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_2).getSymbol(nestedSymTimelineChild_2).playReverse(SymReverseRightKey4);	
         		}	
         	}
         	else if (e.which==SPACE)
         	{
         		if(SymSelectKey4 != 'OFF')
         		{
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_2).getSymbol(nestedSymTimelineChild_2).play(SymSelectKey4);	
         		}
         	}
         	else if (e.which==BACK)
         	{
         		if(SymBackKey4 != 'OFF')
         		{	
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_2).getSymbol(nestedSymTimelineChild_2).play(SymBackKey4);				
         		}
         	}
         	else if (e.which==RED)
         	{
         		if(SymRedKey4 != 'OFF')
         		{			
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_2).getSymbol(nestedSymTimelineChild_2).play(SymRedKey4);	
         		}
         	}
         });
         
         /////////////////////// Nested Symbol 05 ////////////////////////////////
         	$(document).keydown(function(e)
         	{
         	 if (e.which==DOWN)
         	{
         		if(SymDownKey5 != 'OFF')
         		{			
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_3).getSymbol(nestedSymTimelineChild_3).play(SymDownKey5);	
         			}
         	}
         	else if (e.which==LEFT)
         	{
         		if(SymLeftKey5 != 'OFF')
         		{	
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_3).getSymbol(nestedSymTimelineChild_3).play(SymLeftKey5);
         		}
         		else if(SymReverseLeftKey5 != 'OFF')
         		{
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_3).getSymbol(nestedSymTimelineChild_3).playReverse(SymReverseLeftKey5);			
         		}
         	}
         	else if (e.which==RIGHT)
         	{
         		if(SymRightKey5 != 'OFF')
         		{
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_3).getSymbol(nestedSymTimelineChild_3).play(SymRightKey4);				
         		}	
         		else if(SymReverseRightKey5 != 'OFF')
         		{	
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_3).getSymbol(nestedSymTimelineChild_3).playReverse(SymReverseRightKey5);	
         		}	
         	}
         	else if (e.which==SPACE)
         	{
         		if(SymSelectKey5 != 'OFF')
         		{
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_3).getSymbol(nestedSymTimelineChild_3).play(SymSelectKey5);	
         		}
         	}
         	else if (e.which==BACK)
         	{
         		if(SymBackKey5 != 'OFF')
         		{	
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_3).getSymbol(nestedSymTimelineChild_3).play(SymBackKey5);				
         		}
         	}
         	else if (e.which==RED)
         	{
         		if(SymRedKey5 != 'OFF')
         		{			
         			sym.getComposition().getStage().getSymbol(nestedSymTimelineParent_3).getSymbol(nestedSymTimelineChild_3).play(SymRedKey5);	
         		}
         	}
         });
         
         
         

      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      
		
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.$("Text").html("N1");
         
         // --------- Main Timeline ---------------
         // LeftKey             = 'OFF' // ←
            RightKey            = 'N1'          // →
         // UpKey               = 'OFF' // ↑
         // DownKey             = 'OFF' // ↓
         
         // SelectKey           = 'OFF' // SPACE
         // BackKey             = 'OFF' // B
         // RedKey              = 'OFF' // R
         
         // ReverseLeftKey      = 'OFF' // ←
         // ReverseRightKey     = 'OFF' // →
         // ReverseUpKey        = 'OFF' // ↑
         
         // -------- Symbol 1 Timeline -------------
         
            symTimeline_1       = "symTopNav" // Control Symbol 1 Timeline
         // SymLeftKey          = 'OFF' // ←
            SymRightKey         = 'navLink_1'   // →
			
         // SymDownKey          = 'OFF' // ↓
         
         // SymSelectKey        = 'OFF' // SPACE
         // SymBackKey          = 'OFF' // B
         // SymRedKey           = 'OFF' // R
         
         // SymReverseLeftKey   = 'OFF' // ←
         // SymReverseRightKey  = 'OFF' // →
         // SymReverseUpKey     = 'OFF' // ↑
         
         // -------- Symbol 2 Timeline -------------
         
            symTimeline_2       = "symDoubleHeight" // Control Symbol 2 Timeline
         // SymLeftKey2         = 'OFF' // ←
            SymRightKey2        = 'item_1'      // →
         // SymUpkey2           = 'OFF' // ↑
         // SymDownKey2         = 'OFF' // ↓
         
         // SymSelectKey2       = 'OFF' // SPACE
         // SymBackKey2         = 'OFF' // B
         // SymRedKey2          = 'OFF' // R
         
         // SymReverseLeftKey2  = 'OFF' // ←
         // SymReverseRightKey2 = 'OFF' // →
         // SymReverseUpKey2    = 'OFF' // ↑
         
         // -------- Nested Symbol 3 Timeline -------------
         
            nestedSymTimelineParent_1 = "symDoubleHeight" // Control Symbol 2 Timeline
            nestedSymTimelineChild_1  = "symItem_01"
         
         // SymLeftKey3         = 'OFF' // ←
         // SymRightKey3        = 'OFF' // →
         // SymUpkey3           = 'OFF' // ↑
         // SymDownKey3         = 'OFF' // ↓
         
         // SymSelectKey3       = 'OFF' // SPACE
         // SymBackKey3         = 'OFF' // B
         // SymRedKey3          = 'OFF' // R
         
         // SymReverseLeftKey3  = 'OFF' // ←
         // SymReverseRightKey3 = 'OFF' // →
         // SymReverseUpKey3    = 'OFF' // ↑
         
         // -------- Nested Symbol 4 Timeline -------------
         
            nestedSymTimelineParent_2 = "nestedSymVariable_1" // Control Symbol 2 Timeline
            nestedSymTimelineChild_2  = "nestedSymVariable_2"
         
         // SymLeftKey4         = 'OFF' // ←
         // SymRightKey4        = 'OFF' // →
         // SymUpkey4           = 'OFF' // ↑
         // SymDownKey4         = 'OFF' // ↓
         
         // SymSelectKey4       = 'OFF' // SPACE
         // SymBackKey4         = 'OFF' // B
         // SymRedKey4          = 'OFF' // R
         
         // SymReverseLeftKey4  = 'OFF' // ←
         // SymReverseRightKey4 = 'OFF' // →
         // SymReverseUpKey4    = 'OFF' // ↑
         
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.$("Text").html("N2");
         
         // --------- Main Timeline ---------------
         // LeftKey             = 'OFF' // ←
            RightKey            = 'N2'          // →
         // UpKey               = 'OFF' // ↑
            DownKey             = 'DHC_START' // ↓
         
         // SelectKey           = 'OFF' // SPACE
         // BackKey             = 'OFF' // B
         // RedKey              = 'OFF' // R
         
            ReverseLeftKey      = 'N2'          // ←
         // ReverseRightKey     = 'OFF' // →
         // ReverseUpKey        = 'OFF' // ↑
         
         // -------- Symbol 1 Timeline -------------
         
            symTimeline_1       = "symTopNav" // Control Symbol 1 Timeline
         // SymLeftKey          = 'OFF' // ←
            SymRightKey         = 'navLink_2'   // →
         // // ↑
            SymDownKey          = 'navLink_1_out'
         
         // SymSelectKey        = 'OFF' // SPACE
         // SymBackKey          = 'OFF' // B
         // SymRedKey           = 'OFF' // R
         
            SymReverseLeftKey   = 'navLink_2'   // ←
         // SymReverseRightKey  = 'OFF' // →
         // SymReverseUpKey     = 'OFF' // ↑
         
         // -------- Symbol 2 Timeline -------------
         
            symTimeline_2       = "symDoubleHeight" // Control Symbol 2 Timeline
         // SymLeftKey2         = 'OFF' // ←
            SymRightKey2        = 'item_1'      // →
         // SymUpkey2           = 'OFF' // ↑
         // SymDownKey2         = 'OFF' // R
         
         // SymSelectKey2       = 'OFF' // SPACE
         // SymBackKey2         = 'OFF' // B
         // SymRedKey2          = 'OFF' // R
         
         // SymReverseLeftKey2  = 'OFF' // ←
         // SymReverseRightKey2 = 'OFF' // →
         // SymReverseUpKey2    = 'OFF' // ↑
         
         // -------- Nested Symbol 3 Timeline -------------
         
            nestedSymTimelineParent_1 = "symDoubleHeight" // Control Symbol 2 Timeline
            nestedSymTimelineChild_1  = "symItem_01"
         
         // SymLeftKey3         = 'OFF' // ←
         // SymRightKey3        = 'OFF' // →
         // SymUpkey3           = 'OFF' // ↑
            SymDownKey3         = 'in'          // ↓
         
         // SymSelectKey3       = 'OFF' // SPACE
         // SymBackKey3         = 'OFF' // B
         // SymRedKey3          = 'OFF' // R
         
         // SymReverseLeftKey3  = 'OFF' // ←
         // SymReverseRightKey3 = 'OFF' // →
         // SymReverseUpKey3    = 'OFF' // ↑
         
         // -------- Nested Symbol 4 Timeline -------------
         
            nestedSymTimelineParent_2 = "nestedSymVariable_1" // Control Symbol 2 Timeline
            nestedSymTimelineChild_2  = "nestedSymVariable_2"
         
         // SymLeftKey4         = 'OFF' // ←
         // SymRightKey4        = 'OFF' // →
         // SymUpkey4           = 'OFF' // ↑
         // SymDownKey4         = 'OFF' // ↓
         
         // SymSelectKey4       = 'OFF' // SPACE
         // SymBackKey4         = 'OFF' // B
         // SymRedKey4          = 'OFF' // R
         
         // SymReverseLeftKey4  = 'OFF' // ←
         // SymReverseRightKey4 = 'OFF' // →
         // SymReverseUpKey4    = 'OFF' // ↑
         
         sym.stop();
         

      });
      //Edge binding end

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Text").html("DCH_STOP_1");
         
         // --------- Reset Main Timeline ---------------
            LeftKey             = 'DHC_STOP_1'  // ←
            RightKey            = 'DHC_ITEM_3_in' // →
            UpKey               = 'OFF' // ↑
            DownKey             = 'DHC_ITEM_2_in' // ↓
         
            SelectKey           = 'OFF' // SPACE
            BackKey             = 'OFF' // B
            RedKey              = 'OFF' // R
         
            ReverseLeftKey      = 'OFF' // ←
            ReverseRightKey     = 'OFF' // →
            ReverseUpKey        = 'OFF' // ↑
         
         // -------- Reset Symbol 1 Timeline -------------
         
            symTimeline_1       = "symScheduleBox" // Control Symbol 1 Timeline
            SymLeftKey          = 'in' 			// ←
            SymRightKey         = 'OFF' // →
            // ↑
            SymDownKey          = 'OFF'
         
            SymSelectKey        = 'OFF' // SPACE
            SymBackKey          = 'OFF' // B
            SymRedKey           = 'OFF' // R
         
            SymReverseLeftKey   = 'OFF' // ←
            SymReverseRightKey  = 'OFF' // →
            SymReverseUpKey     = 'OFF' // ↑
         
         // -------- Reset Symbol 2 Timeline -------------
         
            symTimeline_2       = "symVariable" // Control Symbol 2 Timeline
            SymLeftKey2         = 'OFF' // ←
            SymRightKey2        = 'OFF' // →
            SymUpkey2           = 'OFF' // ↑
            SymDownKey2         = 'OFF' // ↓
         
            SymSelectKey2       = 'OFF' // SPACE
            SymBackKey2         = 'OFF' // B
            SymRedKey2          = 'OFF' // R
         
            SymReverseLeftKey2  = 'OFF' // ←
            SymReverseRightKey2 = 'OFF' // →
            SymReverseUpKey2    = 'OFF' // ↑
         
         // -------- Nested Symbol 3 Timeline -------------
         
            nestedSymTimelineParent_1 = "symDoubleHeight" // Select Symbol Parent Timeline
            nestedSymTimelineChild_1  = "symItem_01"
         
            SymLeftKey3         = 'OFF' // ←
            SymRightKey3        = 'OFF' // →
            SymUpkey3           = 'OFF' // ↑
            SymDownKey3         = 'out' // ↓
         
            SymSelectKey3       = 'OFF' // SPACE
            SymBackKey3         = 'OFF' // B
            SymRedKey3          = 'OFF' // R
         
            SymReverseLeftKey3  = 'focusDelayIn' // ←
            SymReverseRightKey3 = 'focusDelayIn' // →
            SymReverseUpKey3    = 'OFF' // ↑
         
         // -------- Nested Symbol 4 Timeline -------------
         
            nestedSymTimelineParent_2 = "symDoubleHeight" // Select Symbol Parent Timeline
            nestedSymTimelineChild_2  = "symItem_03"
         
            SymLeftKey4         = 'OFF' // ←
            SymRightKey4        = 'in' // →
            SymUpKey4           = 'OFF' // ↑
            SymDownKey4         = 'OFF' // R
         
            SymSelectKey4       = 'OFF' // SPACE
            SymBackKey4         = 'OFF' // B
            SymRedKey4          = 'OFF' // R
         
            SymReverseLeftKey4  = 'OFF' // ←
            SymReverseRightKey4 = 'OFF' // →
            SymReverseUpKey4    = 'OFF' // ↑
         
         
         // -------- Nested Symbol 5 Timeline -------------
         
            nestedSymTimelineParent_3 = "symDoubleHeight" // Select Symbol Parent Timeline
            nestedSymTimelineChild_3  = "symItem_02"
         
            SymLeftKey5         = 'OFF' // ←
            SymRightKey5        = 'OFF' // →
            SymUpKey5           = 'OFF' // ↑
            SymDownKey5         = 'in' // R
         
            SymSelectKey5       = 'OFF' // SPACE
            SymBackKey5         = 'OFF' // B
            SymRedKey5          = 'OFF' // R
         
            SymReverseLeftKey5  = 'OFF' // ←
            SymReverseRightKey5 = 'OFF' // →
            SymReverseUpKey5    = 'OFF' // ↑
         
         
         
         
         
         
         sym.stop();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.$("Text").html("DCH_STOP_2");
         
         // --------- Reset Main Timeline ---------------
            LeftKey             = 'OFF'  // ←
            RightKey            = 'OFF' // →
            UpKey               = 'N2' // ↑
            DownKey             = 'DCH_STOP_2' // ↓
         
            SelectKey           = 'OFF' // SPACE
            BackKey             = 'OFF' // B
            RedKey              = 'OFF' // R
         
            ReverseLeftKey      = 'OFF' // ←
            ReverseRightKey     = 'DHC_STOP_2' // →
         
         
         // -------- Reset Symbol 1 Timeline -------------
         
            symTimeline_1       = "symScheduleBox" // Control Symbol 1 Timeline
            SymLeftKey          = 'OFF' // ←
            SymRightKey         = 'OFF' // →
            // ↑
            SymDownKey          = 'Link_1'      // ↓
         
            SymSelectKey        = 'OFF' // SPACE
            SymBackKey          = 'OFF' // B
            SymRedKey           = 'OFF' // R
         
            SymReverseLeftKey   = 'OFF' // ←
            SymReverseRightKey  = 'Link_1' // →
            SymReverseUpKey     = 'Link_1'	   // ↑
         
         // -------- Reset Symbol 2 Timeline -------------
         
            symTimeline_2       = "symTopNav" // Control Symbol 2 Timeline
            SymLeftKey2         = 'OFF' // ←
            SymRightKey2        = 'OFF' // →
            SymUpKey2           = 'navLink_2_in' // ↑
            SymDownKey2         = 'OFF' // ↓
         
            SymSelectKey2       = 'OFF' // SPACE
            SymBackKey2         = 'OFF' // B
            SymRedKey2          = 'OFF' // R
         
            SymReverseLeftKey2  = 'OFF' // ←
            SymReverseRightKey2 = 'OFF' // →
            SymReverseUpKey2    = 'OFF' // ↑
         
         // -------- Nested Symbol 3 Timeline -------------
         
            nestedSymTimelineParent_1 = "symDoubleHeight" // Select Symbol Parent Timeline
            nestedSymTimelineChild_1  = "symItem_01"
         
            SymLeftKey3         = 'OFF' // ←
            SymRightKey3        = 'in' // →
            SymUpKey3           = 'OFF' // ↑
            SymDownKey3         = 'OFF' // ↓
         
            SymSelectKey3       = 'OFF' // SPACE
            SymBackKey3         = 'OFF' // B
            SymRedKey3          = 'OFF' // R
         
            SymReverseLeftKey3  = 'OFF' // ←
            SymReverseRightKey3 = 'OFF' // →
            SymReverseUpKey3    = 'OFF' // ↑
         
         	SymLeftKey4         = 'OFF' // ←
            SymRightKey4        = 'OFF' // →
            SymUpKey4           = 'OFF' // ↑
            SymDownKey4         = 'OFF' // R
         
            SymSelectKey4       = 'OFF' // SPACE
            SymBackKey4         = 'OFF' // B
            SymRedKey4          = 'OFF' // R
         
            SymReverseLeftKey4  = 'OFF' // ←
            SymReverseRightKey4 = 'OFF' // →
            SymReverseUpKey4    = 'OFF' // ↑
         
         sym.stop();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.$("Text").html("DCH_Start");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "keyup", function(sym, e) {
         // insert code to be run when the user stops pressing a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 13 = enter
         var UP = 38;
         var DOWN = 40;
         var LEFT = 37;
         var RIGHT = 39;
         var SPACE = 32;
         var BACK = 66;
         var RED = 82;
         
         // insert code to be run when the user stops pressing a key.
         // The variable “e.which” tells you the key code of the key that was pressed, e.g. 13 = enter
         var UP = 38;
         var DOWN = 40;
         var LEFT = 37;
         var RIGHT = 39;
         var SPACE = 32;
         var BACK = 66;
         var RED = 82;
         
         	if (e.which==UP)
         	{
         		UpKey               = 'OFF'
         	   SymUpKey            = 'OFF'
         	   SymUpKey2           = 'OFF'
         	   SymUpKey3           = 'OFF'
         	   SymUpKey4           = 'OFF'
         	   SymUpKey5           = 'OFF'
         	   ReverseUpKey        = 'OFF'
         	   SymReverseUpKey     = 'OFF'
         	   SymReverseUpKey2    = 'OFF'
         	   SymReverseUpKey3    = 'OFF'
         	   SymReverseUpKey4    = 'OFF'
         	   SymReverseUpKey5    = 'OFF'
         
         	}
         	else if (e.which==DOWN)
         	{
         		DownKey             = 'OFF'
         		SymDownKey          = 'OFF'
         		SymDownKey2         = 'OFF'
         		SymDownKey3         = 'OFF'
         		SymDownKey4         = 'OFF'
         		SymDownKey5         = 'OFF'
         	}
         	else if (e.which==LEFT)
         	{
         		 LeftKey             = 'OFF'
         		 SymLeftKey          = 'OFF'
         		 SymLeftKey2         = 'OFF'
         		 SymLeftKey3         = 'OFF'
         		 SymLeftKey4         = 'OFF'
         		 SymLeftKey5         = 'OFF'
         		 ReverseLeftKey      = 'OFF'
         		 SymReverseLeftKey   = 'OFF'
         		 SymReverseLeftKey2  = 'OFF'
         		 SymReverseLeftKey3  = 'OFF'
         		 SymReverseLeftKey4  = 'OFF'
         		 SymReverseLeftKey5  = 'OFF'
         	}
         	else if (e.which==RIGHT)
         	{
         		 RightKey             = 'OFF'
         		 SymRightKey          = 'OFF'
         		 SymRightKey2         = 'OFF'
         		 SymRightKey3         = 'OFF'
         		 SymRightKey4         = 'OFF'
         		 SymRightKey5         = 'OFF'
         		 ReverseRightKey      = 'OFF'
         		 SymReverseRightKey   = 'OFF'
         		 SymReverseRightKey2  = 'OFF'
         		 SymReverseRightKey3  = 'OFF'
         		 SymReverseRightKey4  = 'OFF'
         		 SymReverseRightKey5  = 'OFF'
         
         	}
         	else if (e.which==SPACE)
         	{
                SelectKey            = 'OFF'
                SymSelectKey         = 'OFF'
                SymSelectKey2        = 'OFF'
                SymSelectKey3        = 'OFF'
                SymSelectKey4        = 'OFF'
                SymSelectKey5        = 'OFF'
         	}
         	else if (e.which==BACK)
         	{
                BackKey             = 'OFF'
                SymBackKey          = 'OFF'
                SymBackKey2         = 'OFF'
                SymBackKey3         = 'OFF'
                SymBackKey4         = 'OFF'
                SymBackKey5         = 'OFF'
         	}
         	else if (e.which==RED)
         	{
         		 RedKey              = 'OFF'
         		 SymRedKey           = 'OFF'
         		 SymRedKey2          = 'OFF'
         		 SymRedKey3          = 'OFF'
         		 SymRedKey4          = 'OFF'
         		 SymRedKey5          = 'OFF'
         	}
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // insert code here
         sym.$("Text").html("DCH_STOP_3");
         
         // --------- Reset Main Timeline ---------------
            LeftKey             = 'OFF'  // ←
            RightKey            = 'OFF' // →
            UpKey               = 'OFF' // ↑
            DownKey             = 'DCH_STOP_3' // ↓
         
            SelectKey           = 'OFF' // SPACE
            BackKey             = 'OFF' // B
            RedKey              = 'OFF' // R
         
            ReverseLeftKey      = 'OFF' // ←
            ReverseRightKey     = 'OFF' // →
            ReverseUpKey        = 'DCH_STOP_3' // ↑
         
         // -------- Reset Symbol 1 Timeline -------------
         
            symTimeline_1       = "symScheduleBox" // Control Symbol 1 Timeline
            SymLeftKey          = 'OFF' // ←
            SymRightKey         = 'OFF' // →
            // ↑
            SymDownKey          = 'Link_2' // ↓
         
            SymSelectKey        = 'OFF' // SPACE
            SymBackKey          = 'OFF' // B
            SymRedKey           = 'OFF' // R
         
            SymReverseLeftKey   = 'OFF' // ←
            SymReverseRightKey  = 'OFF' // →
            SymReverseUpKey     = 'Link_2' // ↑
         	SymUpKey2           = 'OFF' // ↑
         
         
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.$("Text").html("DCH_STOP_4");
         
         
         // --------- Reset Main Timeline ---------------
            LeftKey             = 'OFF'  // ←
            RightKey            = 'OFF' // →
            UpKey               = 'OFF' // ↑
            DownKey             = 'DCH_STOP_4' // ↓
         
            SelectKey           = 'OFF' // SPACE
            BackKey             = 'OFF' // B
            RedKey              = 'OFF' // R
         
            ReverseLeftKey      = 'OFF' // ←
            ReverseRightKey     = 'OFF' // →
            ReverseUpKey        = 'DCH_STOP_4' // ↑
         
         // -------- Reset Symbol 1 Timeline -------------
         
            symTimeline_1       = "symScheduleBox" // Control Symbol 1 Timeline
            SymLeftKey          = 'OFF' // ←
            SymRightKey         = 'OFF' // →
            // ↑
            SymDownKey          = 'Link_3' // ↓
         
            SymSelectKey        = 'OFF' // SPACE
            SymBackKey          = 'OFF' // B
            SymRedKey           = 'OFF' // R
         
            SymReverseLeftKey   = 'OFF' // ←
            SymReverseRightKey  = 'OFF' // →
            SymReverseUpKey     = 'Link_3' // ↑
         
         // -------- Reset Symbol 2 Timeline -------------
         
         sym.stop();
         
         
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.$("Text").html("DCH_STOP_5");
         
         // --------- Reset Main Timeline ---------------
            LeftKey             = 'OFF'  // ←
            RightKey            = 'OFF' // →
            UpKey               = 'OFF' // ↑
            DownKey             = 'DCH_STOP_5' // ↓
         
            SelectKey           = 'OFF' // SPACE
            BackKey             = 'OFF' // B
            RedKey              = 'OFF' // R
         
            ReverseLeftKey      = 'OFF' // ←
            ReverseRightKey     = 'OFF' // →
            ReverseUpKey        = 'DCH_STOP_5' // ↑
         
         // -------- Reset Symbol 1 Timeline -------------
         
            symTimeline_1       = "symScheduleBox" // Control Symbol 1 Timeline
            SymLeftKey          = 'OFF' // ←
            SymRightKey         = 'OFF' // →
            // ↑
            SymDownKey          = 'Link_4' // ↓
         
            SymSelectKey        = 'OFF' // SPACE
            SymBackKey          = 'OFF' // B
            SymRedKey           = 'OFF' // R
         
            SymReverseLeftKey   = 'OFF' // ←
            SymReverseRightKey  = 'OFF' // →
            SymReverseUpKey     = 'Link_4' // ↑
         
         // -------- Reset Symbol 2 Timeline -------------
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         sym.$("Text").html("DCH_STOP_6");
         
         // --------- Reset Main Timeline ---------------
            LeftKey             = 'OFF'  // ←
            RightKey            = 'OFF' // →
            UpKey               = 'OFF' // ↑
            DownKey             = 'OFF' // ↓
         
            SelectKey           = 'OFF' // SPACE
            BackKey             = 'OFF' // B
            RedKey              = 'OFF' // R
         
            ReverseLeftKey      = 'OFF' // ←
            ReverseRightKey     = 'OFF' // →
            ReverseUpKey        = 'DCH_STOP_6' // ↑
         
         // -------- Reset Symbol 1 Timeline -------------
         
            symTimeline_1       = "symScheduleBox" // Control Symbol 1 Timeline
            SymLeftKey          = 'OFF' // ←
            SymRightKey         = 'OFF' // →
            // ↑
            SymDownKey          = 'OFF' // ↓
         
            SymSelectKey        = 'OFF' // SPACE
            SymBackKey          = 'OFF' // B
            SymRedKey           = 'OFF' // R
         
            SymReverseLeftKey   = 'OFF' // ←
            SymReverseRightKey  = 'OFF' // →
            SymReverseUpKey     = 'Link_5' // ↑
         
         // -------- Reset Symbol 2 Timeline -------------
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         sym.$("Text").html("DHC_ITEM_1");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4500, function(sym, e) {
         
         // stop the timeline at the given position (ms or label)
         sym.stop('DHC_STOP_1');
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         
         sym.$("Text").html("DHC_ITEM_3");
         
         // --------- Reset Main Timeline ---------------
            LeftKey             = 'OFF'  // ←
            RightKey            = 'OFF' // →
            UpKey               = 'OFF' // ↑
            DownKey             = 'OFF' // ↓
         
            SelectKey           = 'OFF' // SPACE
            BackKey             = 'OFF' // B
            RedKey              = 'OFF' // R
         
            ReverseLeftKey      = 'DHC_ITEM_3' // ←
            ReverseRightKey     = 'OFF' // →
            ReverseUpKey        = 'OFF' // ↑
         
         // -------- Reset Symbol 1 Timeline -------------
         
            symTimeline_1       = "symScheduleBox" // Control Symbol 1 Timeline
            SymLeftKey          = 'OFF' 			// ←
            SymRightKey         = 'OFF' // →
            // ↑
            SymDownKey          = 'OFF'
         
            SymSelectKey        = 'OFF' // SPACE
            SymBackKey          = 'OFF' // B
            SymRedKey           = 'OFF' // R
         
            SymReverseLeftKey   = 'OFF' // ←
            SymReverseRightKey  = 'OFF' // →
            SymReverseUpKey     = 'OFF' // ↑
         
         // -------- Reset Symbol 2 Timeline -------------
         
            symTimeline_2       = "symVariable" // Control Symbol 2 Timeline
            SymLeftKey2         = 'OFF' // ←
            SymRightKey2        = 'OFF' // →
            SymUpkey2           = 'OFF' // ↑
            SymDownKey2         = 'OFF' // ↓
         
            SymSelectKey2       = 'OFF' // SPACE
            SymBackKey2         = 'OFF' // B
            SymRedKey2          = 'OFF' // R
         
            SymReverseLeftKey2  = 'OFF' // ←
            SymReverseRightKey2 = 'OFF' // →
            SymReverseUpKey2    = 'OFF' // ↑
         
         // -------- Nested Symbol 3 Timeline -------------
         
            nestedSymTimelineParent_1 = "symDoubleHeight" // Select Symbol Parent Timeline
            nestedSymTimelineChild_1  = "symItem_01"
         
            SymLeftKey3         = 'in' // ←
            SymRightKey3        = 'OFF' // →
            SymUpkey3           = 'OFF' // ↑
            SymDownKey3         = 'OFF' // ↓
         
            SymSelectKey3       = 'OFF' // SPACE
            SymBackKey3         = 'OFF' // B
            SymRedKey3          = 'OFF' // R
         
            SymReverseLeftKey3  = 'OFF' // ←
            SymReverseRightKey3 = 'OFF' // →
            SymReverseUpKey3    = 'OFF' // ↑
         
         // -------- Nested Symbol 4 Timeline -------------
         
            nestedSymTimelineParent_2 = "symDoubleHeight" // Select Symbol Parent Timeline
            nestedSymTimelineChild_2  = "symItem_03"
         
            SymLeftKey4         = 'OFF' // ←
            SymRightKey4        = 'OFF' // →
            SymUpKey4           = 'OFF' // ↑
            SymDownKey4         = 'OFF' // R
         
            SymSelectKey4       = 'OFF' // SPACE
            SymBackKey4         = 'OFF' // B
            SymRedKey4          = 'OFF' // R
         
            SymReverseLeftKey4  = 'focusDelayIn' // ←
            SymReverseRightKey4 = 'OFF' // →
            SymReverseUpKey4    = 'OFF' // ↑
         
         sym.stop();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.$("Text").html("DHC_ITEM_2");
         
         // insert code here
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         
         // --------- Reset Main Timeline ---------------
            LeftKey             = 'OFF'  // ←
            RightKey            = 'OFF' // →
            UpKey               = 'OFF' // ↑
            DownKey             = 'OFF' // ↓
         
            SelectKey           = 'OFF' // SPACE
            BackKey             = 'OFF' // B
            RedKey              = 'OFF' // R
         
            ReverseLeftKey      = 'OFF' // ←
            ReverseRightKey     = 'OFF' // →
            ReverseUpKey        = 'OFF' // ↑
         
         // -------- Reset Symbol 1 Timeline -------------
         
            symTimeline_1       = "symScheduleBox" // Control Symbol 1 Timeline
            SymLeftKey          = 'OFF' 			// ←
            SymRightKey         = 'OFF' // →
            // ↑
            SymDownKey          = 'OFF'
         
            SymSelectKey        = 'OFF' // SPACE
            SymBackKey          = 'OFF' // B
            SymRedKey           = 'OFF' // R
         
            SymReverseLeftKey   = 'OFF' // ←
            SymReverseRightKey  = 'OFF' // →
            SymReverseUpKey     = 'OFF' // ↑
         
         // -------- Reset Symbol 2 Timeline -------------
         
            symTimeline_2       = "symVariable" // Control Symbol 2 Timeline
            SymLeftKey2         = 'OFF' // ←
            SymRightKey2        = 'OFF' // →
            SymUpkey2           = 'OFF' // ↑
            SymDownKey2         = 'OFF' // ↓
         
            SymSelectKey2       = 'OFF' // SPACE
            SymBackKey2         = 'OFF' // B
            SymRedKey2          = 'OFF' // R
         
            SymReverseLeftKey2  = 'OFF' // ←
            SymReverseRightKey2 = 'OFF' // →
            SymReverseUpKey2    = 'OFF' // ↑
         
         // -------- Nested Symbol 3 Timeline -------------
         
            nestedSymTimelineParent_1 = "symDoubleHeight" // Select Symbol Parent Timeline
            nestedSymTimelineChild_1  = "symItem_01"
         
            SymLeftKey3         = 'OFF' // ←
            SymRightKey3        = 'OFF' // →
            SymUpKey3           = 'focusDelayIn' // ↑
            SymDownKey3         = 'OFF' // ↓
         
            SymSelectKey3       = 'OFF' // SPACE
            SymBackKey3         = 'OFF' // B
            SymRedKey3          = 'OFF' // R
         
            SymReverseLeftKey3  = 'OFF' // ←
            SymReverseRightKey3 = 'OFF' // →
            SymReverseUpKey3    = 'OFF' // ↑
         
         // -------- Nested Symbol 4 Timeline -------------
         
            nestedSymTimelineParent_2 = "symDoubleHeight" // Select Symbol Parent Timeline
            nestedSymTimelineChild_2  = "symItem_03"
         
            SymLeftKey4         = 'OFF' // ←
            SymRightKey4        = 'OFF' // →
            SymUpKey4           = 'OFF' // ↑
            SymDownKey4         = 'OFF' // R
         
            SymSelectKey4       = 'OFF' // SPACE
            SymBackKey4         = 'OFF' // B
            SymRedKey4          = 'OFF' // R
         
            SymReverseLeftKey4  = 'OFF' // ←
            SymReverseRightKey4 = 'OFF' // →
            SymReverseUpKey4    = 'OFF' // ↑
         
         
         // -------- Nested Symbol 5 Timeline -------------
         
            nestedSymTimelineParent_3 = "symDoubleHeight" // Select Symbol Parent Timeline
            nestedSymTimelineChild_3  = "symItem_02"
         
            SymLeftKey5         = 'OFF' // ←
            SymRightKey5        = 'OFF' // →
            SymUpKey5           = 'out' // ↑
            SymDownKey5         = 'OFF' // R
         
            SymSelectKey5       = 'OFF' // SPACE
            SymBackKey5         = 'OFF' // B
            SymRedKey5          = 'OFF' // R
         
            SymReverseLeftKey5  = 'OFF' // ←
            SymReverseRightKey5 = 'OFF' // →
            SymReverseUpKey5    = 'focusDelayIn' // ↑
         
         
         
         
         
         
         sym.stop();
         
         
         
         
         
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'item_01'
   (function(symbolName) {   
   
      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("item_01");
   //Edge symbol end:'item_01'

   //=========================================================
   
   //Edge symbol: 'collections'
   (function(symbolName) {   
   
   })("collections");
   //Edge symbol end:'collections'

   //=========================================================
   
   //Edge symbol: 'SymbCollection'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="1")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="2")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="3")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="4")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6301, function(sym, e) {
         if (sym.getParentSymbol().getVariable("currentLabel")=="5")
         {
           sym.stop();
         }

      });
      //Edge binding end

   })("SymbCollection");
   //Edge symbol end:'SymbCollection'

   //=========================================================
   
   //Edge symbol: 'btn5'
   (function(symbolName) {   
   
   })("btn5");
   //Edge symbol end:'btn5'

   //=========================================================
   
   //Edge symbol: 'btn4'
   (function(symbolName) {   
   
   })("btn4");
   //Edge symbol end:'btn4'

   //=========================================================
   
   //Edge symbol: 'btn3'
   (function(symbolName) {   
   
   })("btn3");
   //Edge symbol end:'btn3'

   //=========================================================
   
   //Edge symbol: 'btn2'
   (function(symbolName) {   
   
   })("btn2");
   //Edge symbol end:'btn2'

   //=========================================================
   
   //Edge symbol: 'btn1'
   (function(symbolName) {   
   
   })("btn1");
   //Edge symbol end:'btn1'

   //=========================================================
   
   //Edge symbol: 'item_01_2'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("item_03");
   //Edge symbol end:'item_03'

   //=========================================================
   
   //Edge symbol: 'item_01_1'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("item_02");
   //Edge symbol end:'item_02'

   //=========================================================
   
   //Edge symbol: 'numbers'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="2")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5500, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="3")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6348, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="4")
         {
           sym.stop();
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6848, function(sym, e) {
         sym.stop();
         
         if (sym.getParentSymbol().getVariable("currentLabel")=="5")
         {
           sym.stop();
         }

      });
      //Edge binding end

   })("numbers");
   //Edge symbol end:'numbers'

   //=========================================================
   
   //Edge symbol: 'video'
   (function(symbolName) {   
   
   })("video");
   //Edge symbol end:'video'

   //=========================================================
   
   //Edge symbol: 'left_carousel'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

      

   })("left_carousel");
   //Edge symbol end:'left_carousel'

   //=========================================================
   
   //Edge symbol: 'currentPosition'
   (function(symbolName) {   
   
   })("currentPosition");
   //Edge symbol end:'currentPosition'

//=========================================================
   //Edge symbol: 'TimelineControler'
   (function(symbolName) {


      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // flag of use keyboard event.
         var useKeyBoardEvent = true;
         // key code of right/left key
         var KEY_RIGHT = 39;
         var KEY_LEFT =  37;
         // params
         var power = 2;
         var declineRate = 0.5;
         var speedWidth = 10;
         
         // try to hide the location bar at Safari,if need, comment out it. 
         // setTimeout(function() { window.scrollTo(0, 0); }, 250);
         
         var fps = 60;
         var interval = (1000/fps)|0;
         var speed = 0;
         var isKeyPress = false, isMousePress = false;
         
         var centerX,target,v;
         
         if(useKeyBoardEvent)$(window).bind("keydown",onStartControll).bind("keyup",onStopControll);  
         
         var el = $(sym.getSymbolElement());
         el.mousedown(onStartControll)
           .mouseup(onStopControll)
           .mouseout(onStopControll)
           .mousemove(onMouseMove)
           .bind("touchstart",onStartControll)
           .bind("touchmove",onMouseMove)
           .bind("touchend",onStopControll);
         
         function onStartControll(evt){
           evt.preventDefault();
           target = sym.getParentSymbol();
           centerX = el.offset().left+el.width()/2;
           if(evt.type=="keydown" && isKeyPress===false){
             speed = 
               (evt.which==KEY_RIGHT)*interval*power
                  + (evt.which==KEY_LEFT)*interval*-1*power;
             speed|=0;
             isKeyPress = true;
           }else if(evt.type=="mousedown" || evt.type=="touchstart"){
             isMousePress = true;
           }
           if(v===undefined)v=setInterval(onControll,interval);
         }
         function onStopControll(evt){
           if(evt.type=="keyup"){
             isKeyPress = false;
           }else{
             isMousePress = false;
           }
         }
         function onControll(){
           if(isKeyPress===false && isMousePress===false){
             speed = (speed*declineRate)|0;
             if(-1<speed && speed<1){
               clearInterval(v);
               v = undefined;
             }
           }
           var n = target.getPosition()+speed;
           if(-1<n && n<=target.getDuration())target.stop(n);
         }
         function onMouseMove(evt){
           evt.preventDefault();
           evt = (evt.originalEvent.touches && evt.originalEvent.touches[0]) || evt;
           if(isMousePress===true){
             speed = (((evt.clientX - centerX)/speedWidth)*power*interval)|0;
           }
         }
         

      });
      //Edge binding end

   })("TimelineController");
   //Edge symbol end:'TimelineController'

   //=========================================================
   
   //Edge symbol: 'symItem_01'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         
         
         sym.$("Text2").html("END");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.$("Text2").html("focusDelayOut");
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Text2").html("focusDelayIn");
         
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Text2").html("In");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.$("Text2").html("Out");

      });
      //Edge binding end

   })("symItem_01");
   //Edge symbol end:'symItem_01'

   //=========================================================
   
   //Edge symbol: 'symTopNav'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         
         sym.stop();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code heresym.stop();
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("symTopNav");
   //Edge symbol end:'symTopNav'

   //=========================================================
   
   //Edge symbol: 'symDoubleHeight_01'
   (function(symbolName) {   
   
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Text2").html("In");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         sym.$("Text2").html("focusDelayOut");
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.$("Text2").html("Out");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // stop the timeline at the given position (ms or label)
         sym.stop('in');
         
         sym.$("Text2").html("END");

      });
      //Edge binding end

   })("symDoubleHeight_01");
   //Edge symbol end:'symDoubleHeight_01'

   //=========================================================
   
   //Edge symbol: 'symScheduleBox'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 375, function(sym, e) {
         // Change an Element's contents.
         //  (sym.$("name") resolves an Edge Animate element name to a DOM
         //  element that can be used with jQuery)
         sym.$("Link_1").html("Link_1");
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         // insert code to be run when the symbol is created here
         var Live = sym.$("Live");
         
         Live.css("font-size", 100);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 625, function(sym, e) {
         // insert code here
         sym.$("Link_2").html("Link_2");
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 875, function(sym, e) {
         // insert code here
         sym.$("Link_3").html("Link_3");
         sym.stop();
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1125, function(sym, e) {
         sym.$("Link_4").html("Link_4");
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1375, function(sym, e) {
         sym.$("Link_5").html("Link_5");
         sym.stop();
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("symScheduleBox");
   //Edge symbol end:'symScheduleBox'

   //=========================================================
   
   //Edge symbol: 'symDoubleHeight'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("symDoubleHeight");
   //Edge symbol end:'symDoubleHeight'

})(jQuery, AdobeEdge, "lower_third");