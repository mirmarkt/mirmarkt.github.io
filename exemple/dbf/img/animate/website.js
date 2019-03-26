(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



// stage content:
(lib.网址 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// a                         复制 25
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AhHBqQgTAAAAgQQAAgHAMgRIBWiFIgNAAQgUAAgMAMQgIAIgKAYIgfAAIAGhSIAZAAQAFAHAMAAIB6AAIAAAcIhcCRIASAAQAbAAAZgqIAdAAIgHBJg");
	this.shape.setTransform(481.6,32.8);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(497).to({_off:false},0).wait(20));

	// a                        复制 24
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AhcCEQgOgJAAgRQAAgMAIgIQAJgIAMAAQAJAAAMAJQALAJAFAAQAIAAALgUIAMgVIhHiTQgJgUgSAAIAAgbIBtAAIAAAbQgRAAgBAIQABAFAHAQIAdBBIAZg+QAEgIAAgKQAAgOgWAAIAAgbIBQAAIAAAbQgTAAgIATIhFCiQgcBHguAAQgSAAgMgIg");
	this.shape_1.setTransform(483.3,37);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(477).to({_off:false},0).to({_off:true},20).wait(20));

	// a                       复制 23
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("AgFBmIAAgbQAQAAAAgIQAAgDgCgDIgWgeIgVAaQgDAEAAAEQAAAKARAAIAAAbIhaAAIAAgbQAWAAAVgYIAmgqIgug8QgRgXgPAAIAAgbIBtAAIAAAbQgMAAAAAFQAAADAHAKIAOAVIAPgRQAGgHAAgFQAAgKgQAAIAAgbIBXAAIAAAbQgUAAgSATIglApIA1BFQAOAUAQAAIAAAbg");
	this.shape_2.setTransform(483.6,33.2);
	this.shape_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(457).to({_off:false},0).to({_off:true},20).wait(40));

	// a                      复制 22
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AArBmIgnhhIgoBhIgdAAIhAibQgGgQgOgBIAAgfIBiAAIAAAfQgNAAAAAIIAGANIAaA/IAVgxIgLgZQgEgLgNAAIAAgeIBjAAIAAAfQgOAAAAAGQAAAEAFANIAWA6IAUg3IADgOQABgMgZAAIAAgfIBPAAIAAAfQgSAAgEAOIg4Ceg");
	this.shape_3.setTransform(483.6,33.2);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(437).to({_off:false},0).to({_off:true},20).wait(60));

	// a                     复制 21
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AgQBmIhBieQgEgKgFgDQgEgCgMAAIAAgeIBsAAIAAAeQgQAAAAAHQAAAEACAGIAeBOIAZhBQAEgMAAgKQAAgIgWAAIAAgeIBSAAIAAAeQgUAAgGAOIg9Cfg");
	this.shape_4.setTransform(482.2,33.2);
	this.shape_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(417).to({_off:false},0).to({_off:true},20).wait(80));

	// a                    复制 20
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AhGBcQgRgPAAgaIAAhpQAAgTgVAAIAAgcQASAABCgGIAACJQABAcAXAAQAKAAAKgMIAAhkQABgTgVAAIAAgcQAfAAA1gGIAACWQAAASAZAAIAAAeIhHAMIgTAAIAAgSQgSAXgcAAQgaAAgRgQg");
	this.shape_5.setTransform(482.5,33.2);
	this.shape_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(397).to({_off:false},0).to({_off:true},20).wait(100));

	// a                   复制 19
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgqBJIAAh6IgWAAIAAgeQAogGASgsIAaAAIAAAxIArAAIAAAfIgrAAIAABxQAAATAMAAQAJAAAYgJIAAAiQgdAWgbAAQgzAAAAg5g");
	this.shape_6.setTransform(478,31);
	this.shape_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(377).to({_off:false},0).to({_off:true},20).wait(120));

	// a                  复制 18
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s().p("AhLBYIgDg6IAbAAQAZAtAdAAQAaAAAAgQQAAgPg4gaQgzgWAAgnQgBggAZgRQAWgPAgAAQAcAAAmAQIAFA3IgbAAQgTgogbAAQgaAAAAAQQAAAKAcALQAlAPAOALQAdAUAAAjQAAAhgXARQgUAQgjAAQgnAAgmgUg");
	this.shape_7.setTransform(479.5,33.2);
	this.shape_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(357).to({_off:false},0).to({_off:true},20).wait(140));

	// a                 复制 17
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s().p("AhWBmIAAgeQAaAAAAgVIAAhbIgagRIAAgVIBHgXIARAAIAAAgQAWgdAZAAQAOAAAMAKQAMALAAAOQAAAPgHAMQgJAQgPAAQgHAAgLgMQgLgLgEAAQgKAAgLAWIAABIQAAANAKAFQAGADAQAAIAAAeg");
	this.shape_8.setTransform(480.2,33.2);
	this.shape_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(337).to({_off:false},0).to({_off:true},20).wait(160));

	// a                复制 16
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s().p("AgOCPIAAgeQAQAAAGgCQAMgEAAgOIAAg2QgVAVgegBQgjAAgXggQgVgcAAgmQAAgtAegdQAegdAtAAQAeAAAZAQIAAgQIAiAAIAADrQAAAUAbAAIAAAegAgjhdQgIAOAAAVQAAAZAIASQAKAYAVAAQALAAANgLIAAhEQAAgpgZAAQgTAAgLASg");
	this.shape_9.setTransform(482.6,36.7);
	this.shape_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(317).to({_off:false},0).to({_off:true},20).wait(180));

	// a               复制 15
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AhtCPIAAgeQAaAAAAgSIAAizIgcgRIAAgTIBIgWIAUAAIAAAVQAXgVAbAAQAkAAAYAeQAVAcAAAiQAAAugdAfQgeAggwAAQgMAAgMgGIAAAqQgBAMAIADQAFADARAAIAAAegAgThSIAABDQAAAqAaAAQAUAAAKgVQAIgOAAgWQAAgVgIgSQgLgVgVAAQgMAAgMAIg");
	this.shape_10.setTransform(482.7,36.7);
	this.shape_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(297).to({_off:false},0).to({_off:true},20).wait(200));

	// a              复制 14
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AhIBNQgagdAAgtQAAgtAcghQAdggApAAQAuAAAaAdQAbAeAAAwQAAAtgdAgQgdAfgqAAQgtAAgagfgAgfgOQAABaAiAAQAcAAAAg6QAAhdggAAQgeAAAAA9g");
	this.shape_11.setTransform(481.4,33.2);
	this.shape_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(277).to({_off:false},0).to({_off:true},20).wait(220));

	// a             复制 13
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AAHBpIAAgeQARAAABgVIAAhKQgBgjgSAAQgIAAgTAPIAABeQAAAVAVAAIAAAeIhuAAIAAgeQAaAAAAgVIAAhcIgagRIAAgVIBGgWIATAAIAAATQAZgZAdAAQAaAAAOAQQAPAQAAAaIAABkQAAAVAYAAIAAAeg");
	this.shape_12.setTransform(482.7,32.9);
	this.shape_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(257).to({_off:false},0).to({_off:true},20).wait(240));

	// a            复制 12
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s().p("ABBBpIAAgeQATAAABgWIAAhOQAAgegTAAQgPAAgSAPIAABdQAAAWAXAAIAAAeIhqAAIAAgeQAVAAgBgWIAAhNQABgfgTAAQgKAAgWARIAABbQAAAWAWAAIAAAeIhxAAIAAgeQAbAAAAgWIAAhZIgcgSIAAgUIBKgYIASAAIAAAYQAkgeAXAAQAjAAAOAeQAggeAhAAQA4AAAABAIAABdQAAAWAYAAIAAAeg");
	this.shape_13.setTransform(482.8,32.9);
	this.shape_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(237).to({_off:false},0).to({_off:true},20).wait(260));

	// a           复制 11
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s().p("Ag1CbIAAgfQAYAAAAgUIAAjDIgYgSIAAgUIBDgZIASAAIAAECQAAAUAXAAIAAAfg");
	this.shape_14.setTransform(477.8,27.9);
	this.shape_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(217).to({_off:false},0).to({_off:true},20).wait(280));

	// a          复制 10
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s().p("AAvCbQgMgIgjgoIgbgfIAAAcQAAAUAZAAIAAAfIhyAAIAAgfQAZAAABgUIAAjEIgagSIAAgVIBGgXIATAAIAAC2IAUgUQAOgNABgGQgBgIgPAAIAAgeIBgAAIAAAeQgXAAgRARIghAgIBCBIQAUAWARAAIAAAfg");
	this.shape_15.setTransform(483.3,28);
	this.shape_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(197).to({_off:false},0).to({_off:true},20).wait(300));

	// a         复制 9
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s().p("Ag2ClQApggAAgmIAAh3IgYgSIAAgVIBEgXIARAAIAAClQAAA/hSAygAgMh7QgMgMAAgQQAAgRAMgMQAMgLAPAAQARAAALALQAMAMAAARQAAAQgMAMQgLALgRAAQgPAAgMgLg");
	this.shape_16.setTransform(477,31.7);
	this.shape_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(177).to({_off:false},0).to({_off:true},20).wait(320));

	// a        复制 8
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s().p("Ag0CbIAAgfQAYAAAAgTIAAhdIgZgRIAAgUIBCgXIARAAIAACZQAAAMAHAEQAEADANAAIAAAfgAgZhWQgLgLAAgRQAAgQALgMQAMgMAQAAQAQAAAMAMQAMAMAAAQQAAARgMALQgMAMgQAAQgQAAgMgMg");
	this.shape_17.setTransform(477.8,27.9);
	this.shape_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(157).to({_off:false},0).to({_off:true},20).wait(340));

	// a       复制 7
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s().p("AAGCaIAAgeQAVAAAAgUIAAhOQAAgegSAAQgPAAgRAFIAABnQABAUAUAAIAAAeIhsAAIAAgeQAYAAAAgUIAAjDIgagSIAAgUIBHgZIATAAIAAB2QAZgTAgAAQA4AAAABAIAABfQAAAUAWAAIAAAeg");
	this.shape_18.setTransform(482.8,29);
	this.shape_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(137).to({_off:false},0).to({_off:true},20).wait(360));

	// a      复制 6
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s().p("AhKCHQgjgMAAgZQAAgKAHgLQAIgLAJgFQgUgJAAgbQAAgYAlgRQgjgTAAgjQAAgmAegTQAZgPAoAAQAPAAAfADIAvACIAZAAIAAAuIgGAAIgagCQAEAJAAAKQAAAlgcASQgXAOgmAAIgNgBIgNgBQgLAAAAAIQAAAKAMAAIAZgBIAYgBQAeAAAYAPQAcASAAAdQAAAogpASQgeAOgtAAQghAAgYgIgAg8BbQAAARAsAAQATAAASgEQAagGAAgMQAAgQgkAAIgSAAIgTAAIgQAAQgSAJAAAMgAgghMQAAAkAYAAQATAAAAgjQAAgRgDgGQgFgLgNAAQgWAAAAAhg");
	this.shape_19.setTransform(482.5,33.7);
	this.shape_19._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(117).to({_off:false},0).to({_off:true},20).wait(380));

	// a     复制 5
	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AhYCbIAAgfQAaAAAAgUIAAh7IgfAAIAAgfIAPAAQANAAADgLQAKgwARgUQAWgZAtAAQAWAAASAIQAWAKAAAWQAAANgJAKQgKAKgOAAQgOAAgOgSQgNgTgJAAQgLAAAAAaIAAAqIAlAAIAAAfIglAAIAAB7QAAAOALAEQAGACARAAIAAAfg");
	this.shape_20.setTransform(480.9,28.9);
	this.shape_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(97).to({_off:false},0).to({_off:true},20).wait(400));

	// a    复制 4
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s().p("AhBBQQgagcAAgnQAAgxAZgiQAcglAvAAQAnAAAXAiQAUAeAAAoIh1AAQACAZAMAQQAMARAVAAQAYAAAYgYIAXASQglA7g3AAQgnAAgagcgAgThAQgHANgBAPIAzABQgBgpgXAAQgMAAgHAMg");
	this.shape_21.setTransform(480.7,34.2);
	this.shape_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(77).to({_off:false},0).to({_off:true},20).wait(420));

	// a   复制 3
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s().p("AAVCeIAAgWQgTAVghABQgmgBgWghQgTgeAAgsQAAgsAageQAbgiArAAQATAAAQAHIAAgrIgagSIAAgUIBFgZIAVAAIAAD/QAAAUAPAAIALAAIAAAfIhHAJgAgigEQgIAQAAAVQAAAbAJAUQALAaAVgBQALAAALgIIAAhKQAAgxgcAAQgRAAgKAWg");
	this.shape_22.setTransform(482.6,29.3);
	this.shape_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(57).to({_off:false},0).to({_off:true},20).wait(440));

	// a  复制 2
	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s().p("AhDBLQgVgdAAgrQAAgvAYgeQAaghAuAAQAcAAAVAMQAZAPAAAZQAAANgIAJQgIAJgOAAQgYAAgHgdQgEgWgPAAQgPAAgJAMQgIANAAASQAAAoAOAXQAOAYAYAAQAVAAAWgZIAYAUQgnA6g1AAQgoAAgYghg");
	this.shape_23.setTransform(480.4,34.2);
	this.shape_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(38).to({_off:false},0).to({_off:true},19).wait(460));

	// a 复制
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s().p("AhTCDIAAjhIgagSIAAgVIBHgYIASAAIAAB5QAYgWAcAAQAlAAAVAdQAUAbAAAmQAAA1geAiQgfAjgyAAQgmAAgsgbgAgUAHIAABXQAAANAGAJQAHAJALAAQAUAAAKgYQAJgTAAgZQAAgYgJgRQgJgTgVAAQgJAAgPAKg");
	this.shape_24.setTransform(482.5,29.2);
	this.shape_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(19).to({_off:false},0).to({_off:true},19).wait(479));

	// a
	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s().p("AAJBWQgbAWgaAAQgYAAgQgNQgQgNAAgYQAAghAngZQAcgSAngLIAAgSQAAgbgUAAQgTAAAAAWIADAOIg9AVQgHgUAAgKQAAg8BaAAQAlAAASANQAXAPAAAkIAABWQAAASAKAAQAJAAAMgPIAAAoQgcAWgYAAQgfAAgJgWgAggAtQAAASAPAAQAMAAALgLIAAgxQgmATAAAXg");
	this.shape_25.setTransform(481.6,34.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_25).to({_off:true},19).wait(498));

	// 图层 1
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCC33").s().p("AhBBQQgagcAAgnQAAgxAZgiQAcglAvAAQAnAAAXAiQAUAeAAAoIh1AAQACAZAMAQQAMARAVAAQAYAAAYgYIAXASQglA7g3AAQgnAAgagcgAgThAQgHANgBAPIAzABQgBgpgXAAQgMAAgHAMg");
	this.shape_26.setTransform(561.3,33.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFCC33").s().p("ABABpIAAgeQAVAAgBgWIAAhOQAAgegSAAQgPAAgRAPIAABdQAAAWAWAAIAAAeIhqAAIAAgeQAUAAABgWIAAhNQgBgfgSAAQgKAAgWARIAABbQABAWAUAAIAAAeIhwAAIAAgeQAbAAABgWIAAhZIgcgSIAAgUIBJgYIASAAIAAAYQAkgeAXAAQAiAAAPAeQAggeAgAAQA4AAAABAIAABdQAAAWAYAAIAAAeg");
	this.shape_27.setTransform(531.9,32.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFCC33").s().p("AgdAeQgMgMAAgSQAAgQAMgNQANgMAQAAQARAAANAMQAMANAAAQQAAASgMAMQgNAMgRAAQgQAAgNgMg");
	this.shape_28.setTransform(506,39.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFCC33").s().p("AhaCfQgYgHAAgNQAAgKALgMQAKgMALAAQAKAAAXAIQAXAJAMAAQAQAAAQgLQAUgMgBgQQABgjg3gXQgjgQgygIIBBiSIBeAAQAUAAALgSIAbAMIgUAmQgQAcghAAIhLAAIgMAaQBDASAaAOQAzAbAAAxQAAA6g1AfQgtAag9AAQgSAAgQgFg");
	this.shape_29.setTransform(451.4,27.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCC33").s().p("AhbCfQgWgHAAgNQAAgKAKgMQAKgMAKAAQAMAAAWAIQAWAJANAAQAQAAARgLQATgMAAgQQAAgjg3gXQgjgQgzgIIBCiSIBeAAQAUAAAKgSIAbAMIgUAmQgPAcggAAIhNAAIgLAaQBDASAaAOQAzAbAAAxQAAA6g2AfQgsAag9AAQgSAAgRgFg");
	this.shape_30.setTransform(423,27.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC33").s().p("AhNCNQgkgTgBgoQABgtA7glQg6gkAAgnQAAgpAmgWQAfgSArAAQAnAAAcAPQAiATAAAkQAAAZgNAQQgMAOgYAMQAaAQASAXQATAaAAAdQAAArgpAWQggASgvAAQgqgBgegQgAg3BOQAAArAvAAQApAAAAgjQgBgTgSgSQgGgGgcgUQgjAdAAAagAgXh2QgMAJAAAPQAAAVA4AiQAYgSAAgbQAAgTgMgLQgNgMgSAAQgOAAgLAIg");
	this.shape_31.setTransform(394.6,28.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFCC33").s().p("AhbCfQgWgHAAgNQAAgKAKgMQAKgMAKAAQAMAAAWAIQAWAJANAAQAPAAARgLQAUgMAAgQQAAgjg3gXQgjgQgygIIBBiSIBeAAQAUAAAKgSIAbAMIgTAmQgQAcggAAIhNAAIgLAaQBDASAaAOQAzAbAAAxQAAA6g1AfQgtAag9AAQgSAAgRgFg");
	this.shape_32.setTransform(366.2,27.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC33").s().p("AggB0QgNgNAAgUQAAgTANgPQAOgNASAAQAUAAANANQANAPAAATQAAAUgNANQgNAOgUAAQgSAAgOgOgAgggxQgNgOAAgTQAAgUANgNQAOgOASAAQAUAAANAOQANANAAAUQAAATgNAOQgNANgUAAQgSAAgOgNg");
	this.shape_33.setTransform(314.5,31.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFCC33").s().p("AhfDkIgKgmIBDAAIAAlYIBLAKIAAFOIAjAAIAAmhIBNAKIAACjIANAAIAbgXIAtAnIgVAVIhAAAIAADPIALAAIAdgbIAwArIgWAWgAjsCHIAwgLIAAiwIgkAAIgKgkIAuAAIAAiJIBNAKIAAB/IAFAAIAXgVIAoAlIgTAUIgxAAIAACaIAvgRIARAkQhAArhbAqg");
	this.shape_34.setTransform(277.1,25.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFCC33").s().p("AjijmIBIAIIAAASIETAAIAegfIBMAvIgZAVIAAFXQAAA4gyAAIgsAAQAAgygvAAIACgfQAXACAeAAQAMAAAAgSIAAgsIgtAuQgPgngRgiQgpBIg5A7IgZgVQAfgtAWgwIgpArQgKgdgLgaQgZAtggAnIgQgOIAABYIhIAJgAiaBuQAYg3AQg5QgTgkgVgfgABSADQAdAkARAkIAAjKQgSBFgcA9gAgHiEQgPBHgZA9QAWAhAMAjQAPgjAMghQgRgcgTgYIAXgcQAPAMANAOQAMguAFguIBSAOIAAghIkaAAIAABCIANgQQAWAVATAXQAHglADgmg");
	this.shape_35.setTransform(228.1,26.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFCC33").s().p("AjpDTQAphWAAhnIAAj+IBSAMIAAARIDuAAIAdgiIBNAxIgVAUIAAFaQAAA5g1AAIguAAQABgzgyAAIACggQAWACAeAAQALAAABgSIAAg+IhQAAIAACVIhWAIIAAidIhNAAQgGAsgPAfQgVAxgpAogAAzAhIBQAAIAAhNIhQAAgAhuAhIBLAAIAAhNIhLAAgAAzhVIBQAAIAAhNIhQAAgAhuhVIBLAAIAAhNIhLAAg");
	this.shape_36.setTransform(176.8,25.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFCC33").s().p("Ai0AEQgUACgWABIgMgfQBpgSA/gXQgigUgcgaQgiAWgnAMIgUghQBMg2AdhFIBdAUIgKAOIB7AAIAhgeIBQA5IghALQgqAzgyAhIAAAAQA3AOBmADIgZBFIgqgDIAVAQIgQAUIAACzIhKAJIAAgdIjHAAIAAAXIhQAKgAAgCjIBDAAIAAgrIhDAAgAhkCjIBBAAIAAgrIhBAAgAAgBSIBDAAIAAgrIhDAAgAhkBSIBBAAIAAgrIhBAAgAhkgHIAAAHIDFAAIAGgDQg9gLgwgVQgsARgyALgAhXiOQAtAZAwASQAwgdAWggIiPAAIgUASg");
	this.shape_37.setTransform(127.3,26.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFCC33").s().p("AjqDMQBvhXgBiGIAAhiIhkAAIgKgmIDOAAQgUgcgTgUIAtggQAyAfAZAYIgcAZICFAAIAegbIAvArIgWAWIj7AAIAABPICDAAIAkgeIBHA3IgYATQAAArgEAuQgEBbgdAWQgZAXgtAAIgmAAQAAg3g8gCIAEgfQAfAIA5AAQAMAAAEgLQAGgJAEg2QAEgiAAgsIiEAAQgGCQikBZg");
	this.shape_38.setTransform(77,25.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFCC33").s().p("AichZIgMAiIhBgjQAigyATg7IAuANIgCAQIByAAQgRgPgRgMIAbghQA2APAhAUIgWAZIBeAAIAigeIBFAwIgfAPIgyA9IAcAVIgRARIAABLIhVAPIAAgQIiaAAIAAAmICvAAIAYgZIBHA2IgUAQIAABdIhVAOIAAgbIilAAIAAAVIhQALgAhMCiIClAAIAAgzIilAAgAhMAAICaAAIAAgtIiaAAgAiVhsIBJAIIAAASICgAAIAYgcIAKAHIALgcIkRAAIgFAXg");
	this.shape_39.setTransform(26.9,25.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]},516).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(287.5,24,574.2,55);
// library properties:
lib.properties = {
	width: 575,
	height: 50,
	fps: 24,
	color: "#000000",
	opacity: 0.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;