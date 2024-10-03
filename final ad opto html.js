(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF4C6").s().p("AhOBPQgfgfAAgvQAAgvAfggQAfgfAugBQAxABAfAfQAfAgAAAzIAAAKIioAAQADAWAQAOQAQANAYAAQAeAAAVgVIAsAVQgQAYgYALQgXAMggAAQgwAAgfgggAglg0QgKAHgJAUIBxAAQgFgSgPgLQgQgLgUAAQgVAAgRANg");
	this.shape.setTransform(-257.125,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFF4C6").s().p("Ag3BsIAAjSIAtAAIAAAbQAHgQALgIQAMgIAPAAQAKAAALAFIgQAuQgJgFgGAAQgMAAgJAPQgHAPAAArIAAALIAABVg");
	this.shape_1.setTransform(-275.825,0.175);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFF4C6").s().p("AhOBPQgfgfAAgvQAAgvAfggQAfgfAugBQAxABAfAfQAfAgAAAzIAAAKIioAAQADAWAQAOQAQANAYAAQAeAAAVgVIAsAVQgQAYgYALQgXAMggAAQgwAAgfgggAglg0QgKAHgJAUIBxAAQgFgSgPgLQgQgLgUAAQgVAAgRANg");
	this.shape_2.setTransform(-295.925,0.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFF4C6").s().p("AAvCOIAAh8IheAAIAAB8Ig2AAIAAkbIA2AAIAABrIBeAAIAAhrIA3AAIAAEbg");
	this.shape_3.setTransform(-322.475,-3.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFF4C6").s().p("Ag3BsIAAjSIAtAAIAAAbQAHgQALgIQAMgIAPAAQAKAAALAFIgQAuQgJgFgGAAQgMAAgJAPQgHAPAAArIAAALIAABVg");
	this.shape_4.setTransform(-353.425,0.175);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFF4C6").s().p("AhOBPQgfgfAAgvQAAgvAfggQAfgfAugBQAxABAfAfQAfAgAAAzIAAAKIioAAQADAWAQAOQAQANAYAAQAeAAAVgVIAsAVQgQAYgYALQgXAMggAAQgwAAgfgggAglg0QgKAHgJAUIBxAAQgFgSgPgLQgQgLgUAAQgVAAgRANg");
	this.shape_5.setTransform(-373.525,0.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFF4C6").s().p("AhOB1QgeggAAgvQAAgwAdgeQAdggApAAQASAAAQAHQARAIAOAOIAAhoIA1AAIAAEiIg1AAIAAgWQgPAOgQAHQgPAGgSABQgogBgegfgAgngFQgQAPAAAbQAAAcAQARQARASAXAAQAZAAAQgRQAQgRAAgdQAAgbgQgQQgQgRgZAAQgYAAgQASg");
	this.shape_6.setTransform(-400.225,-3.35);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF4C6").s().p("Ag3BsIAAjSIAtAAIAAAbQAHgQALgIQAMgIAPAAQAKAAALAFIgQAuQgJgFgGAAQgMAAgJAPQgHAPAAArIAAALIAABVg");
	this.shape_7.setTransform(-418.775,0.175);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFF4C6").s().p("AhpBpQgqgsAAg9QAAgoAUgiQAUgiAigUQAjgUAnAAQA8AAArArQAsAsAAA+QAAA+grArQgrArg9AAQg/AAgrgsgAhBhEQgbAcAAApQAAAvAhAcQAbAVAhAAQAmAAAcgcQAbgcAAgoQAAgogcgcQgbgcgnAAQgnAAgaAbg");
	this.shape_8.setTransform(-442.875,-3.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#382020").s().p("AsfEOIAAobIY/AAIAAIbg");
	this.shape_9.setTransform(-348.2496,0.0114,1.5838,1.5838);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-474.9,-42.7,253.39999999999998,85.5), null);


// stage content:
(lib.finaladopto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		/* Click to Go to Web Page
		Clicking on the specified symbol instance loads the URL in a new browser window.
		
		Instructions:
		1. Replace http://www.adobe.com with the desired URL address.
		   Keep the quotation marks ("").
		*/
		
		this.movieClip_1.addEventListener("click", fl_ClickToGoToWebPage_2);
		
		function fl_ClickToGoToWebPage_2() {
			window.open("https://www.red-dot.org/project/optor-31643", "_blank");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(255));

	// Layer_3
	this.movieClip_1 = new lib.Symbol1();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.setTransform(890.2,1008.2);

	this.timeline.addTween(cjs.Tween.get(this.movieClip_1).wait(255));

	// Layer_1
	this.instance = new lib.an_Video({'id': '', 'src':'videos/opto%20banner%20ad%20with%20button.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'', 'preload':true, 'class':'video'});

	this.instance.setTransform(540.15,516.3,2.1999,2.9332,0,0,0,200.1,150.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(255));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(638.9,614.6,342.1,436.4);
// library properties:
lib.properties = {
	id: '7E223E0B3B3C9D4DBA9137065042AFC9',
	width: 1080,
	height: 1080,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7E223E0B3B3C9D4DBA9137065042AFC9'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;