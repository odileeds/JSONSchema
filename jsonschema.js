/*!
 * stuQuery version 1.0.1
 */
var eventcache={};function S(h){function f(m,e){var s=new Array();var q,r,p,n,l,o;if(e.indexOf(":eq")>=0){q=e.split(" ");for(p=0;p<q.length;p++){if(p==0){o=c(m,q[p])}else{r=new Array();for(n=0;n<o.length;n++){r=r.concat(c(o[n],q[p]))}o=r.splice(0)}}}else{o=m.querySelectorAll(e)}for(l=0;l<o.length;l++){s.push(o[l])}return s}function c(p,o){var n=-1;var l=new Array();if(o.indexOf(":eq")>0){var j=o.replace(/(.*)\:eq\(([0-9]+)\)/,"$1 $2").split(" ");o=j[0];n=parseInt(j[1])}if(o[0]=="."){els=p.getElementsByClassName(o.substr(1))}else{if(o[0]=="#"){els=p.getElementById(o.substr(1))}else{els=p.getElementsByTagName(o)}}if(!els){els=[]}if(els.nodeName&&els.nodeName=="SELECT"){l.push(els)}else{if(typeof els.length!=="number"){els=[els]}for(k=0;k<els.length;k++){l.push(els[k])}if(n>=0&&l.length>0){if(n<l.length){l=[l[n]]}else{l=[]}}}return l}function a(n,m){var j=false;if(m[0]=="."){m=m.substr(1);for(var l=0;l<n.classList.length;l++){if(n.classList[l]==m){return true}}}else{if(m[0]=="#"){if(n.id==m.substr(1)){return true}}else{if(n.tagName==m.toUpperCase()){return true}}}return false}function d(e){var j;if(typeof e==="string"){this.e=f(document,e)}else{if(typeof e==="object"){this.e=(typeof e.length=="number")?e:[e]}}this.length=(this.e?this.e.length:0);return this}d.prototype.ready=function(e){/in/.test(document.readyState)?setTimeout("S(document).ready("+e+")",9):e()};d.prototype.html=function(j){if(typeof j==="number"){j=""+j}if(typeof j!=="string"&&this.e.length==1){return this.e[0].innerHTML}if(typeof j==="string"){for(var e=0;e<this.e.length;e++){this.e[e].innerHTML=j}}return this};d.prototype.append=function(j){if(!j&&this.e.length==1){return this.e[0].innerHTML}if(j){for(var e=0;e<this.e.length;e++){this.e[e].innerHTML+=j}}return this};d.prototype.prepend=function(l){if(!l&&this.e.length==1){return this.e[0].innerHTML}if(l){for(var m=0;m<this.e.length;m++){this.e[m].innerHTML=l+this.e[m].innerHTML}}return this};d.prototype.before=function(n){var p=document.createElement("div");p.innerHTML=n;var o=p.childNodes;for(var m=0;m<el.length;m++){for(var l=0;l<o.length;l++){el[m].parentNode.insertBefore(o[l],el[m])}}return this};d.prototype.after=function(j){for(var e=0;e<this.e.length;e++){this.e[e].insertAdjacentHTML("afterend",j)}return this};function i(e,l){if(e&&e.length>0){for(var j=0;j<e.length;j++){if(e[j].node==l){return{success:true,match:j}}}}return{success:false}}function g(o,m,l,j,n){if(!eventcache[m]){eventcache[m]=new Array()}eventcache[m].push({node:o,fn:l,fn2:j,data:n})}function b(l){if(eventcache[l.type]){var j=i(eventcache[l.type],l.currentTarget);if(j.success){if(j.match.data){l.data=eventcache[l.type][j.match].data}return{fn:eventcache[l.type][j.match].fn,data:l}}}return function(){return{fn:""}}}d.prototype.off=function(l){if(typeof Element.prototype.removeEventListener!=="function"){Element.prototype.removeEventListener=function(s,p){if(!oListeners.hasOwnProperty(s)){return}var o=oListeners[s];for(var m=-1,n=0;n<o.aEls.length;n++){if(o.aEls[n]===this){m=n;break}}if(m===-1){return}for(var r=0,q=o.aEvts[m];r<q.length;r++){if(q[r]===p){q.splice(r,1)}}}}for(var j=0;j<this.e.length;j++){var e=i(eventcache[l],this.e[j]);if(e.success){this.e[j].removeEventListener(l,eventcache[l][e.match].fn2,false);eventcache[l].splice(e.match,1)}}return this};d.prototype.on=function(m,n,l){m=m||window.event;this.cache=[4,5,6];if(typeof n==="function"&&!l){l=n;n=""}if(typeof l!=="function"){return this}if(this.e.length>0){var o=this;var e=function(p){var q=b({currentTarget:this,type:m,data:n,originalEvent:p});if(typeof q.fn==="function"){return q.fn.call(o,q.data)}};for(var j=0;j<this.e.length;j++){g(this.e[j],m,l,e,n);if(this.e[j].addEventListener){this.e[j].addEventListener(m,e,false)}else{if(this.e[j].attachEvent){this.e[j].attachEvent(m,e)}}}}return this};d.prototype.trigger=function(m){var l;if(document.createEvent){l=document.createEvent("HTMLEvents");l.initEvent(m,true,true)}else{l=document.createEventObject();l.eventType=m}l.eventName=m;for(var j=0;j<this.e.length;j++){if(document.createEvent){this.e[j].dispatchEvent(l)}else{this.e[j].fireEvent("on"+l.eventType,l)}}return this};d.prototype.focus=function(){if(this.e.length==1){this.e[0].focus()}return this};d.prototype.blur=function(){if(this.e.length==1){this.e[0].blur()}return this};d.prototype.remove=function(){if(!this.e){return this}for(var e=this.e.length-1;e>=0;e--){if(!this.e[e]){return}if(typeof this.e[e].remove==="function"){this.e[e].remove()}else{if(typeof this.e[e].parentElement.removeChild==="function"){this.e[e].parentElement.removeChild(this.e[e])}}}return S(this.e)};d.prototype.hasClass=function(j){var e=true;for(var l=0;l<this.e.length;l++){if(!this.e[l].className.match(new RegExp("(\\s|^)"+j+"(\\s|$)"))){e=false}}return e};d.prototype.toggleClass=function(e){for(var j=0;j<this.e.length;j++){if(this.e[j].className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))){this.e[j].className=this.e[j].className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)","g")," ").replace(/ $/,"")}else{this.e[j].className=(this.e[j].className+" "+e).replace(/^ /,"")}}return S(this.e)};d.prototype.addClass=function(e){for(var j=0;j<this.e.length;j++){if(!this.e[j].className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))){this.e[j].className=(this.e[j].className+" "+e).replace(/^ /,"")}}return S(this.e)};d.prototype.removeClass=function(e){for(var j=0;j<this.e.length;j++){while(this.e[j].className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))){this.e[j].className=this.e[j].className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)","g")," ").replace(/ $/,"").replace(/^ /,"")}}return S(this.e)};d.prototype.css=function(m){var o;for(var l=0;l<this.e.length;l++){o={};var n=this.e[l].getAttribute("style");if(n){var q=this.e[l].getAttribute("style").split(";");for(var j=0;j<q.length;j++){var p=q[j].split(":");if(p.length==2){o[p[0]]=p[1]}}}if(typeof m==="object"){for(key in m){o[key]=m[key]}var e="";for(key in o){if(e){e+=";"}if(o[key]){e+=key+":"+o[key]}}this.e[l].setAttribute("style",e)}}if(this.e.length==1&&typeof m==="string"){return o[m]}return S(this.e)};d.prototype.parent=function(){var j=[];for(var e=0;e<this.e.length;e++){j.push(this.e[e].parentElement)}return S(j)};d.prototype.children=function(m){if(typeof m==="string"){var e=[];for(var j=0;j<this.e.length;j++){for(var l=0;l<this.e[j].children.length;l++){if(a(this.e[j].children[l],m)){e.push(this.e[j].children[l])}}}return S(e)}else{for(var j=0;j<this.e.length;j++){this.e[j]=(this.e[j].children.length>m?this.e[j].children[m]:this.e[j])}return S(this.e)}};d.prototype.find=function(j){var m=[];var e=new Array();for(var l=0;l<this.e.length;l++){e=e.concat(f(this.e[l],j))}return S(e)};d.prototype.attr=function(e,m){var l=[];for(var j=0;j<this.e.length;j++){l.push(this.e[j].getAttribute(e));if(typeof m==="string"||typeof m==="number"){if(m){this.e[j].setAttribute(e,m)}else{this.e[j].removeAttribute(e)}}}if(l.length==1){l=l[0]}if(typeof m==="undefined"){return l}else{return S(this.e)}};d.prototype.prop=function(e,m){var l=[];for(var j=0;j<this.e.length;j++){l.push(this.e[j].getAttribute(e));if(typeof m==="boolean"){if(m){this.e[j].setAttribute(e,e)}else{this.e[j].removeAttribute(e)}}}if(l.length==1){l=l[0]}return l};d.prototype.clone=function(){var e=document.createElement("div");e.appendChild(this.e[0].cloneNode(true));return e.innerHTML};d.prototype.replaceWith=function(j){var l=document.createElement("span");l.innerHTML=j;var m=S(this.e);for(var e=0;e<this.e.length;e++){m.e[0].parentNode.replaceChild(l,m.e[0])}return m};d.prototype.ajax=function(m,l){if(typeof m!=="string"){return false}if(!l){l={}}l.url=m+(typeof l.cache==="boolean" && !l.cache ? '?'+(new Date()).valueOf():'');var o=(window.XMLHttpRequest)?new XMLHttpRequest():new ActiveXObject("Microsoft.XMLHTTP");o.addEventListener("load",e);o.addEventListener("error",j);function e(p){if(o.status===200){l.header=o.getAllResponseHeaders();if(typeof l.complete==="function"){l.complete.call((l["this"]?l["this"]:this),(l.dataType=="json")?JSON.parse(o.responseText):o.responseText,l)}}else{j(p)}}function j(p){if(typeof l.error==="function"){l.error.call((l["this"]?l["this"]:this),p,l)}}try{o.open("GET",m)}catch(n){j(n)}try{o.send()}catch(n){j(n)}return this};d.prototype.loadJSON=function(j,l,e){if(!e){e={}}e.dataType="json";e.complete=l;this.ajax(j,e);return this};return new d(h)};

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
	return  window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60); };
})();

/*!
 * ODI Leeds JSON Schema generator (version 1.1)
 */
S(document).ready(function(){


	// Function to parse a CSV file and return a JSON structure
	// Guesses the format of each column based on the data in it.
	function CSV2JSON(data,start,end){

		// If we haven't sent a start row value we assume there is a header row
		if(typeof start!=="number") start = 1;
		// Split by the end of line characters
		if(typeof data==="string") data = data.split(/[\n\r]+/);
		// The last row to parse
		if(typeof end!=="number") end = data.length;

		if(end > data.length){
			// Cut down to the maximum length
			end = data.length;
		}


		var line,datum,header,types;
		var newdata = new Array();
		var formats = new Array();
		var req = new Array();

		for(var i = 0, rows = 0 ; i < end; i++){

			// If there is no content on this line we skip it
			if(data[i] == "") continue;

			// Split the line by commas (but not commas within quotation marks
			line = data[i].split(/,(?=(?:[^\"]*\"[^\"]*\")*(?![^\"]*\"))/);

			datum = new Array(line.length);
			types = new Array(line.length);

			// Loop over each column in the line
			for(var j=0; j < line.length; j++){

				// Remove any quotes around the column value
				datum[j] = (line[j][0]=='"' && line[j][line[j].length-1]=='"') ? line[j].substring(1,line[j].length-1) : line[j];

				// If the value parses as a float
				if(typeof parseFloat(datum[j])==="number" && parseFloat(datum[j]) == datum[j]){
					types[j] = "float";
					// Check if it is actually an integer
					if(typeof parseInt(datum[j])==="number" && parseInt(datum[j])+"" == datum[j]){
						types[j] = "integer";
						// If it is an integer and in the range 1700-2100 we'll guess it is a year
						if(datum[j] >= 1700 && datum[j] < 2100) types[j] = "year";
					}
				}else if(datum[j].search(/^(true|false)$/i) >= 0){
					// The format is boolean
					types[j] = "boolean";
				}else if(datum[j].search(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/) >= 0){
					// The value looks like a URL
					types[j] = "URL";
				}else if(!isNaN(Date.parse(datum[j]))){
					// The value parses as a date
					types[j] = "datetime";
				}else{
					// Default to a string
					types[j] = "string";
					// If the string value looks like a time we set it as that
					if(datum[j].search(/^[0-2]?[0-9]\:[0-5][0-9]$/) >= 0) types[j] = "time";
				}
			}

			if(i == 0 && start > 0) header = datum;
			if(i >= start){
				newdata[rows] = datum;
				formats[rows] = types;
				rows++;
			}
		}

		// Now, for each column, we sum the different formats we've found
		var format = new Array(header.length);
		for(var j = 0; j < header.length; j++){
			var count = {};
			var empty = 0;
			for(var i = 0; i < newdata.length; i++){
				if(!newdata[i][j]) empty++;
			}
			for(var i = 0 ; i < formats.length; i++){
				if(!count[formats[i][j]]) count[formats[i][j]] = 0;
				count[formats[i][j]]++;
			}
			var mx = 0;
			var best = "";
			for(var k in count){
				if(count[k] > mx){
					mx = count[k];
					best = k;
				}
			}
			// Default
			format[j] = "string";

			// If more than 80% (arbitrary) of the values are a specific format we assume that
			if(mx > 0.8*newdata.length) format[j] = best;

			// If we have a few floats in with our integers, we change the format to float
			if(format[j] == "integer" && count['float'] > 0.1*newdata.length) format[j] = "float";

			req.push(empty == 0);

		}

		// Return the structured data
		return { 'fields': {'name':header,'title':clone(header),'format':format,'required':req }, 'rows': newdata };
	}

	// Function to clone a hash otherwise we end up using the same one
	function clone(hash) {
		var json = JSON.stringify(hash);
		var object = JSON.parse(json);
		return object;
	}

	function dropOver(evt){
		evt.stopPropagation();
		evt.preventDefault();
		S(this).addClass('drop');
	}
	function dragOff(){ S('.drop').removeClass('drop'); }

	String.prototype.regexLastIndexOf = function(regex, startpos) {
		regex = (regex.global) ? regex : new RegExp(regex.source, "g" + (regex.ignoreCase ? "i" : "") + (regex.multiLine ? "m" : ""));
		if(typeof (startpos) == "undefined") {
			startpos = this.length;
		} else if(startpos < 0) {
			startpos = 0;
		}
		var stringToWorkWith = this.substring(0, startpos + 1);
		var lastIndexOf = -1;
		var nextStop = 0;
		while((result = regex.exec(stringToWorkWith)) != null) {
			lastIndexOf = result.index;
			regex.lastIndex = ++nextStop;
		}
		return lastIndexOf;
	}

	// Main function
	function Schemer(file){

		this.maxrows = 1000;	// Limit on the number of rows to display
		this.maxcells = 3000;	// The row limit can be over-ridden by the maximum number of cells to show

		// The supported data types as specified in http://csvlint.io/about
		//this.datatypes = [{"label":"string","ref":"http://www.w3.org/2001/XMLSchema#string"},{"label":"integer","ref":"http://www.w3.org/2001/XMLSchema#int"},{"label":"float","ref":"http://www.w3.org/2001/XMLSchema#float"},{"label":"double","ref":"http://www.w3.org/2001/XMLSchema#double"},{"label":"URL","ref":"http://www.w3.org/2001/XMLSchema#anyURI"},{"label":"boolean","ref":"http://www.w3.org/2001/XMLSchema#boolean"},{"label":"non-positive integer","ref":"http://www.w3.org/2001/XMLSchema#nonPositiveInteger"}, {"label":"positive integer","ref":"http://www.w3.org/2001/XMLSchema#positiveInteger"}, {"label":"non-negative integer","ref":"http://www.w3.org/2001/XMLSchema#nonNegativeInteger"}, {"label":"negative integer","ref":"http://www.w3.org/2001/XMLSchema#negativeInteger"},{"label":"date","ref":"http://www.w3.org/2001/XMLSchema#date"}, {"label":"date & time","ref":"http://www.w3.org/2001/XMLSchema#dateTime"},{"label":"year","ref":"http://www.w3.org/2001/XMLSchema#gYear"},{"label":"year & month","ref":"http://www.w3.org/2001/XMLSchema#gYearMonth"},{"label":"time","ref":"http://www.w3.org/2001/XMLSchema#time "}];
		this.datatypes = [{"label":"string","ref":"http://www.w3.org/2001/XMLSchema#string"},{"label":"integer","ref":"http://www.w3.org/2001/XMLSchema#int"},{"label":"float","ref":"http://www.w3.org/2001/XMLSchema#float"},{"label":"double","ref":"http://www.w3.org/2001/XMLSchema#double"},{"label":"URL","ref":"http://www.w3.org/2001/XMLSchema#anyURI"},{"label":"boolean","ref":"http://www.w3.org/2001/XMLSchema#boolean"},{"label":"date","ref":"http://www.w3.org/2001/XMLSchema#date"}, {"label":"datetime","ref":"http://www.w3.org/2001/XMLSchema#dateTime"},{"label":"year","ref":"http://www.w3.org/2001/XMLSchema#gYear"},{"label":"time","ref":"http://www.w3.org/2001/XMLSchema#time "}];

		// If we provided a filename we load that now
		if(file) S().ajax(file,{'complete':this.parseCSV,'this':this,'cache':false});

		// When the user focuses on the schema output, it all gets selected
		S('#schema textarea').on('focus',function(){
			this.e[0].select()
		});

		S('#save').on('click',{me:this},function(e){
			e.data.me.save();
		});

		var _obj = this;

		// Setup the dnd listeners.
		var dropZone = document.getElementById('drop_zone');
		dropZone.addEventListener('dragover', dropOver, false);
		dropZone.addEventListener('dragout', dragOff, false);

		var dropZone2 = document.getElementById('drop_zone_json');
		dropZone2.addEventListener('dragover', dropOver, false);
		dropZone2.addEventListener('dragout', dragOff, false);


		document.getElementById('standard_files').addEventListener('change', function(evt){
			return _obj.handleFileSelect(evt,'csv');
		}, false);
		document.getElementById('schema_file').addEventListener('change',function(evt){
			return _obj.handleFileSelect(evt,'json');
		}, false);

		return this;
	}

	// Return an HTML select box for the data types
	Schemer.prototype.buildSelect = function(typ,row,col){
		var html = '<select id="'+row+'-'+col+'" data-row="'+row+'" data-col="'+col+'">';
		for(var t = 0; t < this.datatypes.length; t++) html += "<option"+(this.datatypes[t].label == typ ? " selected=\"selected\"":"")+" value=\""+this.datatypes[t].label+"\">"+this.datatypes[t].label+"</option>";
		html += "</select>";
		return html;
	}

  // Guess a date format for a date column
  Schemer.prototype.buildDateFormat = function(rows, index) {
    var formats = []
    var counts = {}

    // Get a date format for each row
    for(var i = 0; i < rows.length; i++) {
      var date = rows[i][index]
      formats.push(moment.parseFormat(date))
    }

    // Get a count for each unique type
    formats.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });

    for(var i = 0; i < Object.keys(counts).length; i++) {
      var format = Object.keys(counts)[i]
      for(var c = 0; c < rows.length; c++) {
        if (moment(rows[c][index], format).isValid()) {
          possibleFormat = format
        }
      }
    }

    return this.convertFormat(possibleFormat)
  }

  Schemer.prototype.convertFormat = function(format) {
    years = {
      'MMMM': '%B',
      'MMM': '%b',
      'MM': '%m',
      'M': '%-m',
      'Mo': '%-m',
      'dddd': '%A',
      'ddd': '%a',
      'YYYY': '%Y',
      'YY': '%y',
      'DD': '%d',
      'Do': '%e',
      'D': '%e',
      'A': '%p',
      'a': '%P',
      'HH': '%H',
      'H': '%-H',
      'hh': '%l',
      'h': '%-l',
      'mm': '%M',
      'm': '%-M',
      'ss': '%S',
      's': '%-s',
      'zz': '%Z',
      'ZZ': '%Z',
      'z': '%Z',
      'Z': '%Z'
    }

    for (var i = 0; i < Object.keys(years).length; i++) {
      var find = Object.keys(years)[i]
      var replace = Object.values(years)[i]
      format = format.replace(find, replace)
    }
    return format
  }

	// Return an HTML true/false select box
	Schemer.prototype.buildTrueFalse = function(yes,row,col){
		var html = '<select id="'+row+'-'+col+'" data-row="'+row+'" data-col="'+col+'">';
		html += '<option'+(yes ? " selected=\"selected\"":"")+' value="true">True</option>';
		html += '<option'+(!yes ? " selected=\"selected\"":"")+' value="false">False</option>';
		html += "</select>";
		return html;
	}

	// Parse the CSV file
	Schemer.prototype.parseCSV = function(data,attr){

		this.csv = data;

		if(attr.cols*this.maxrows > this.maxcells){
			// We have lots of columns meaning that we have more cells that we're allowing
			// so limit the number of rows
			this.maxrows = Math.floor(this.maxcells/attr.cols);
		}
		this.records = attr.rows;

		// Convert the CSV to a JSON structure
		this.data = CSV2JSON(data,1,this.maxrows+1);

		// Construct the HTML table
		this.buildTable()
		// and the JSON schema
		this.buildSchema();

		return;
	}

	// Construct the HTML table
	Schemer.prototype.buildTable = function(){

		// Create the data table
		var table = "";
		var mx = Math.min(this.data.rows.length,this.maxrows);
		if(mx == this.maxrows){
			table += '<p>We only processed the <em>first '+this.maxrows+" records</em> so that we don't crash your browser.</p>";
		}else{
			table += "<p>We loaded <em>"+this.records+" records</em>.</p>";
		}
		table += "<div class=\"table-holder\"><table>";
		table += '<tr><th>Title:</th>';

		for(var c in this.data.fields.name){
			table += '<th><input id="title-'+c+'" type="text" value="'+this.data.fields.title[c]+'" data-row="title" data-col="'+c+'" /></th>';
		}

		table += '</tr>';
		table += '<tr><th>Type:</th>';
    dateFormats = {}
		for(var c in this.data.fields.name){
			table +=  '<th>' + this.buildSelect(this.data.fields.format[c],"format",c) + '</th>'
      // If the format is datetime, get a format
      if (this.data.fields.format[c] == 'datetime') {
        dateFormats[c] = this.buildDateFormat(this.data.rows, c)
      }
		}
		table += '</tr>';

    // If we have any dateFormats, add them to the relevant column
    if (Object.keys(dateFormats).length > 0) {
      this.data.dateFormats = new Array(this.data.fields.length)
      table += '<tr id="formats"><th>Date Format:</th>';
      for (i = 0 ; i < this.data.fields.name.length; i++) {
        if (typeof(dateFormats[i]) == 'undefined') {
          table += '<th></th>'
        } else {
          table += '<th><input type="text" value="' + dateFormats[i] +'" /></th>'
          this.data.dateFormats[i] = dateFormats[i]
        }
      }
      table += '</tr>'
    }

		table += '<tr><th></th>';
		for(var c in this.data.fields.name){
			table += '<th class="constraint"><label>Required?</label>'+this.buildTrueFalse(this.data.fields.required[c],"required",c)+'<!--<button class="delete" title="Remove this constraint from this column">&times;</button><button class="add" title="Add a constraint to this column">&plus;</button>--></th>';
		}
		table += '</tr>';

		for(var i = 0; i < mx; i++){
			table += '<tr><td class="rn">'+(i+1)+'</td>';
			for(var c = 0; c < this.data.rows[i].length; c++){
				table += '<td '+(this.data.fields.format[c] == "float" || this.data.fields.format[c] == "integer" || this.data.fields.format[c] == "year" || this.data.fields.format[c] == "date" || this.data.fields.format[c] == "datetime" ? ' class="n"' : '')+'>'+this.data.rows[i][c]+'</td>';
			}
			table += '</tr>';
		}
		table += '</table></div>';
		S('#contents').html(table);

		S('#contents select').on('change',{me:this},function(e,i){
			var el = document.getElementById(e.currentTarget.id);
			var value = el.options[el.selectedIndex].value;
			e.data.me.update(e.currentTarget.id,value);
		});
		S('#contents input').on('change',{me:this},function(e,i){
			e.data.me.update(e.currentTarget.id,e.currentTarget.value);
		});
		return this;
	}

	// Process a form element and update the data structure
	Schemer.prototype.update = function(id,value){
		var el = S('#'+id);
		var row = el.attr('data-row');
		var col = el.attr('data-col');
		if(row == "title") this.data.fields.title[col] = value;
		if(row == "format") this.data.fields.format[col] = value;
		if(row == "required") this.data.fields.required[col] = value;

		// Go through form elements and update the format/constraints
		this.buildSchema();

		return this;
	}

	// Build the JSON schema
	Schemer.prototype.buildSchema = function(){
		var ref,t,c,json,i,lines;
		json = "{\n";
		json += '\t"fields": [\n';
		i = 0;
		for(c in this.data.fields.name){
			ref = "";
			for(t = 0 ; t < this.datatypes.length; t++){
				if(this.datatypes[t].label == this.data.fields.format[c]) ref = this.datatypes[t].ref;
			}
			json += '\t\t{\n';
			json += '\t\t\t"name": "'+this.data.fields.name[c]+'",\n';
			json += '\t\t\t"title": "'+this.data.fields.title[c]+'",\n';
			json += '\t\t\t"constraints": {\n';
			json += '\t\t\t\t"required": '+this.data.fields.required[c]+',\n';
      if (this.data.dateFormats[c]) {
        json += '\t\t\t\t"type": "'+ref+'",\n';
        json += '\t\t\t\t"datePattern": "'+this.data.dateFormats[c]+'"\n';
      } else {
        json += '\t\t\t\t"type": "'+ref+'"\n';
      }
			json += '\t\t\t}\n';
			json += '\t\t}'+(i < this.data.fields.format.length-1 ? ',':'')+'\n';
			i++;
		}
		json += '\t]\n';
		json += '}';
		lines = json.split(/\n/);
		this.json = json;
		// Set the content of the output and resize the textarea so it is all visible
		S('#schema textarea').html(''+json+'').css({'height':(lines.length+1)+'em','line-height':'1em'});

		return this;
	}

	Schemer.prototype.save = function(){

		// Bail out if there is no Blob function
		if(typeof Blob!=="function") return this;

		var textFileAsBlob = new Blob([this.json], {type:'text/plain'});
		if(!this.file) this.file = "schema.json";
		var fileNameToSaveAs = this.file.substring(0,this.file.lastIndexOf("."))+".json";

		function destroyClickedElement(event){ document.body.removeChild(event.target); }

		var dl = document.createElement("a");
		dl.download = fileNameToSaveAs;
		dl.innerHTML = "Download File";
		if(window.webkitURL != null){
			// Chrome allows the link to be clicked
			// without actually adding it to the DOM.
			dl.href = window.webkitURL.createObjectURL(textFileAsBlob);
		}else{
			// Firefox requires the link to be added to the DOM
			// before it can be clicked.
			dl.href = window.URL.createObjectURL(textFileAsBlob);
			dl.onclick = destroyClickedElement;
			dl.style.display = "none";
			document.body.appendChild(dl);
		}
		dl.click();
		S('.step3').addClass('checked');

		return this;
	}

	Schemer.prototype.handleFileSelect = function(evt,typ){

		evt.stopPropagation();
		evt.preventDefault();
		dragOff();

		var files;
		if(evt.dataTransfer && evt.dataTransfer.files) files = evt.dataTransfer.files; // FileList object.
		if(!files && evt.target && evt.target.files) files = evt.target.files;

		function niceSize(b){
			if(b > 1e12) return (b/1e12).toFixed(2)+" TB";
			if(b > 1e9) return (b/1e9).toFixed(2)+" GB";
			if(b > 1e6) return (b/1e6).toFixed(2)+" MB";
			if(b > 1e3) return (b/1e3).toFixed(2)+" kB";
			return (b)+" bytes";
		}

		if(typ == "csv"){

			// files is a FileList of File objects. List some properties.
			var output = "";
			for (var i = 0, f; i < files.length; i++) {
				f = files[i];

				this.file = f.name;
				output += '<div><strong>'+ escape(f.name)+ '</strong> ('+ (f.type || 'n/a')+ ') - ' + niceSize(f.size) + ', last modified: ' + (f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a') + '</div>';

				// DEPRECATED as not reliable // Only process csv files.
				//if(!f.type.match('text/csv')) continue;

				var start = 0;
				var stop = Math.min(100000, f.size - 1);

				var reader = new FileReader();

				// Closure to capture the file information.
				reader.onloadend = function(evt) {
					if (evt.target.readyState == FileReader.DONE) { // DONE == 2
						if(stop > f.size - 1){
							var l = evt.target.result.regexLastIndexOf(/[\n\r]/);
							result = (l > 0) ? evt.target.result.slice(0,l) : evt.target.result;
						}else result = evt.target.result;

						var lines = result.match(/[\n\r]+/g);
						var cols = result.slice(0,result.indexOf("\n")).split(/,(?=(?:[^\"]*\"[^\"]*\")*(?![^\"]*\"))/);
						// Render table
						scheme.parseCSV(result,{'url':f.name,'cols':cols.length,'rows':lines.length});
					}
				};

				// Read in the image file as a data URL.
				//reader.readAsText(f);
				var blob = f.slice(start,stop+1);
				reader.readAsText(blob);
			}
			//document.getElementById('list').innerHTML = '<p>File loaded:</p><ul>' + output.join('') + '</ul>';
			S('#drop_zone').append(output).addClass('loaded');
			S('.step1').addClass('checked');
		}else if(typ == "json"){

			f = files[0];
			output = '<div><strong>'+ escape(f.name)+ '</strong> ('+ (f.type || 'n/a')+ ') - ' + f.size + ' bytes, last modified: ' + (f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a') + '</div>';
			S('#drop_zone_json').append(output).addClass('loaded');
			S('#validate').css({'display':'block'});
			S('.step4').addClass('checked');
		}
		return this;
	}

	Schemer.prototype.validate = function(){
		return false;
	}

	// Define a new instance of the Schemer
	var scheme = new Schemer();

});
