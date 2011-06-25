function ColumnDrag(id) {
	this.tbl = document.getElementById(id);
	if (this.tbl && this.tbl.nodeName == 'TABLE') {
		this.state = null;
		this.prevX = null;
		this.cols = this.tbl.getElementsByTagName('col');
		this.makeDraggable();
	}
}


ColumnDrag.prototype.makeDraggable = function() {
	for (var i=0; this.tbl.rows[i]; i++) {
		var td = document.createElement('td');
		td.style.display = 'none';
		this.tbl.rows[i].appendChild(td);
	}
	
	var headings = this.tbl.tHead.rows[0].cells;
	for (var i=0; headings[i]; i++) {
		headings[i].cIdx = i;
		var a = document.createElement('a');
		a.href = '#';
		a.innerHTML = '&larr; ' + headings[i].innerHTML + ' &rarr;';
		a.onclick = function() {
			return false;
		}
		headings[i].className += ' draggable';
		
		headings[i].onmousedown = function (that) {
			return function(e) {
				that.mousedown(e);
				return false;
			}
		}(this);
		
		document.onmousemove = function(that) {
			return function(e) {
				that.mousemove(e);
				return false;
			};
		}(this);
		
		document.onmouseup = function (that) {
			return function() {
				var e = that.clearAllHeadings();
				if (e) that.mouseup(e)
			};
		}(this);
		
		document.onmouseout = function(that) {
			return function (e) {
				e = e ? e : window.event;
				related = e.relatedTarget ? e.relatedTarget : e.toElement;
				if (related == null) {
					var e = that.clearAllHeadings();
					if (e) that.mouseup(e);
				}
			}
		}(this);
		
		a.onkeyup = function (that) {
			return function (e) {
				that.keyup(e);
				return false;
			}
		}(this);
		
		headings[i].onmouseover = addHover;
		headings[i].onmouseout = removeHover;
		
		headings[i].innerHTML = '';
		headings[i].appendChild(a);
	};
};

ColumnDrag.prototype.clearAllHeadings = function () {
	var e = false;
	for (var i=0; this.cols[i]; i++) {
		var th = this.tbl.tHead.rows[0].cells[i];
		if (th.className.match(/down/)) {
			e = {target: th};
		}
	};
	return e;
};

ColumnDrag.prototype.mousedown = function (e) {
	e = e ? e : window.event;
	var elm = e.target ? e.target : e.srcElement;
	elm = elm.nodeName == 'A' ? elm.parentNode : elm;
	
	// Set state and clicked "from" element
	this.state = 'drag';
	elm.className += " down";
	this.cols[elm.cIdx].className = "drag";
	this.from = elm;
	operaRefresh();
}

ColumnDrag.prototype.mousemove = function(e) {
	e = e ? e : window.event;
	var x = e.clientX ? e.clientX : e.pageX;
	var elm = e.target ? e.target : e.srcElement;
	
	if (this.state == 'drag' && elm != this.form) {
		var from = this.from.cIdx;
		var to = elm.cIdx;
		
		// Make sure that mouse is moving in same dir as swap (to avoid swap flickering)
		if ((from > to && x < this.prevX) || (from < to && x > this.prevX)) { // @TODO debug these values the first time.
			// highlight column
			this.cols[from].className = '';
			this.cols[to].className = 'drag';
			
			// increase 'to' by one if direction is positive because we're inserting
			// 'before' and so we have to refer to the target columns neighbor
			if (from < to) to++;
			
			// shift all cells belonging to head
			var rows = this.tbl.rows;
			for (var i=0; rows[i]; i++) {
				rows[i].insertBefore(rows[i].cells[from], rows[i].cells[to]);
			}
			
			// update cIdx value (fix for Safari 2.0.4 "cellIndex always equals 0" bug)
			var headings = this.tbl.tHead.rows[0].cells;
			for (var i=0; headings[i]; i++) {
				headings[i].cIdx = i;
			}
		}
	}
	this.prevX = x;
}

ColumnDrag.prototype.mouseup = function (e) {
	e = e ? e : window.event;
	var elm = e.target? e.target : e.srcElement;
	elm = elm.nodeName == "A" ? elm.parentNode : elm;
	this.state = null;
	var col = this.cols[elm.cellIndex];
	col.className = "dropped";
	operaRefresh();
	window.setTimeout(function (cols, el) {
		return function () {
			el.className = el.className.replace(/ down/g, "");
			for (var i=0; cols[i]; i++) {
				cols[i].className = ""; operaRefresh();
			}
		}
	}(this.cols, this.from), 1000);
}

ColumnDrag.prototype.keyup = function (e) {
	e = e ? e : window.event;
	var elm = e.target ? e.target : e.srcElement;
	var a = elm;
	elm = elm.parentNode;
	var headings = this.tbl.tHead.rows[0].cells;
	
	switch (e.keyCode) {
		case 37:
			this.mousedown({target:elm});
			var prevCellIdx = elm.cIdx == 0 ? 0 : elm.cellIndex - 1;
			this.prevX = 2;
			this.mousemove({
				target: headings[prevCellIdx],
				clientX: 1
			});
			this.mouseup({target:elm});
			a.focus();
		break;
		case 39:
			this.mousedown({target:elm});
			var nextCellIdx = elm.cellIndex == headings.length - 2 ? headings.length - 2 : elm.cellIndex + 1;
			this.prevX = 0;
			this.mousemove({
				target: headings[nextCellIdx],
				clientX: 1
			});
			this.mouseup({target:elm});
			a.focus();
		break;
	}
}

addHover = function () {
	this.className += " hover";
}

removeHover = function () {
	this.className = this.className.replace(/ hover/, '');
}

/**
 * Hack for Opera to so that class names on col elements are applied properly
 */
operaRefresh = function () {
	document.body.style.position = "relative";
	document.body.style.position = "static";
}