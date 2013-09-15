/* 
	jQuery TextAreaResizer plugin
	Created on 17th January 2008 by Ryan O'Dell 
	Version 1.0.4
	
	Converted from Drupal -> textarea.js
	Found source: http://plugins.jquery.com/misc/textarea.js
	$Id: textarea.js,v 1.11.2.1 2007/04/18 02:41:19 drumm Exp $

	1.0.1 Updates to missing global 'var', added extra global variables, fixed multiple instances, improved iFrame support
	1.0.2 Updates according to textarea.focus
	1.0.3 Further updates including removing the textarea.focus and moving private variables to top
	1.0.4 Re-instated the blur/focus events, according to information supplied by dec

	
*/
(function($) {
	/* private variable "oHover" used to determine if you're still hovering over the same element */
	var textarea, staticOffset;  // added the var declaration for 'staticOffset' thanks to issue logged by dec.
	var iLastMousePos = 0;
	var iMin = 32;
	var grip;
	/* TextAreaResizer plugin */
	$.fn.TextAreaResizer = function() {
		return this.each(function() {
		    textarea = $(this).addClass('processed'), staticOffset = null;

			// 18-01-08 jQuery bind to pass data element rather than direct mousedown - Ryan O'Dell
		    // When wrapping the text area, work around an IE margin bug.  See:
		    // http://jaspan.com/ie-inherited-margin-bug-form-elements-and-haslayout
		    $(this).wrap('<div class="resizable-textarea"><span></span></div>')
		      .parent().append($('<div class="grippie"></div>').bind("mousedown",{el: this} , startDrag));

		    var grippie = $('div.grippie', $(this).parent())[0];
		    grippie.style.marginRight = (grippie.offsetWidth - $(this)[0].offsetWidth) +'px';

		});
	};
	/* private functions */
	function startDrag(e) {
		textarea = $(e.data.el);
		textarea.blur();
		iLastMousePos = mousePosition(e).y;
		staticOffset = textarea.height() - iLastMousePos;
		textarea.css('opacity', 0.25);
		$(document).mousemove(performDrag).mouseup(endDrag);
		return false;
	}

	function performDrag(e) {
		var iThisMousePos = mousePosition(e).y;
		var iMousePos = staticOffset + iThisMousePos;
		if (iLastMousePos >= (iThisMousePos)) {
			iMousePos -= 5;
		}
		iLastMousePos = iThisMousePos;
		iMousePos = Math.max(iMin, iMousePos);
		textarea.height(iMousePos + 'px');
		if (iMousePos < iMin) {
			endDrag(e);
		}
		return false;
	}

	function endDrag(e) {
		$(document).unbind('mousemove', performDrag).unbind('mouseup', endDrag);
		textarea.css('opacity', 1);
		textarea.focus();
		textarea = null;
		staticOffset = null;
		iLastMousePos = 0;
	}

	function mousePosition(e) {
		return { x: e.clientX + document.documentElement.scrollLeft, y: e.clientY + document.documentElement.scrollTop };
	};
})(jQuery);
// auto
/*!
jQuery Autosize v1.16.7
(c) 2013 Jack Moore - jacklmoore.com
updated: 2013-03-20
license: http://www.opensource.org/licenses/mit-license.php
*/


(function ($) {
var
defaults = {
	className: 'autosizejs',
	append: '',
	callback: false
},
hidden = 'hidden',
borderBox = 'border-box',
lineHeight = 'lineHeight',
supportsScrollHeight,

// border:0 is unnecessary, but avoids a bug in FireFox on OSX (http://www.jacklmoore.com/autosize#comment-851)
copy = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>',

// line-height is conditionally included because IE7/IE8/old Opera do not return the correct value.
copyStyle = [
	'fontFamily',
	'fontSize',
	'fontWeight',
	'fontStyle',
	'letterSpacing',
	'textTransform',
	'wordSpacing',
	'textIndent'
],
oninput = 'oninput',
onpropertychange = 'onpropertychange',

// to keep track which textarea is being mirrored when adjust() is called.
mirrored,

// the mirror element, which is used to calculate what size the mirrored element should be.
mirror = $(copy).data('autosize', true)[0];

// test that line-height can be accurately copied.
mirror.style.lineHeight = '99px';
if ($(mirror).css(lineHeight) === '99px') {
	copyStyle.push(lineHeight);
}
mirror.style.lineHeight = '';

$.fn.autosize = function (options) {
	options = $.extend({}, defaults, options || {});

	if (mirror.parentNode !== document.body) {
		$(document.body).append(mirror);

		mirror.value = "\n\n\n";
		mirror.scrollTop = 9e4;
		supportsScrollHeight = mirror.scrollHeight === mirror.scrollTop + mirror.clientHeight;
	}

	return this.each(function () {
		var
		ta = this,
		$ta = $(ta),
		minHeight,
		active,
		resize,
		boxOffset = 0,
		callback = $.isFunction(options.callback);

		if ($ta.data('autosize')) {
			// exit if autosize has already been applied, or if the textarea is the mirror element.
			return;
		}

		if ($ta.css('box-sizing') === borderBox || $ta.css('-moz-box-sizing') === borderBox || $ta.css('-webkit-box-sizing') === borderBox){
			boxOffset = $ta.outerHeight() - $ta.height();
		}

		minHeight = Math.max(parseInt($ta.css('minHeight'), 10) - boxOffset, $ta.height());

		resize = ($ta.css('resize') === 'none' || $ta.css('resize') === 'vertical') ? 'none' : 'horizontal';

		$ta.css({
			overflow: hidden,
			overflowY: hidden,
			wordWrap: 'break-word',
			resize: resize
		}).data('autosize', true);

		function initMirror() {
			mirrored = ta;
			mirror.className = options.className;

			// mirror is a duplicate textarea located off-screen that
			// is automatically updated to contain the same text as the
			// original textarea.  mirror always has a height of 0.
			// This gives a cross-browser supported way getting the actual
			// height of the text, through the scrollTop property.
			$.each(copyStyle, function(i, val){
				mirror.style[val] = $ta.css(val);
			});
		}

		// Using mainly bare JS in this function because it is going
		// to fire very often while typing, and needs to very efficient.
		function adjust() {
			var height, overflow, original;

			if (mirrored !== ta) {
				initMirror();
			}

			// the active flag keeps IE from tripping all over itself.  Otherwise
			// actions in the adjust function will cause IE to call adjust again.
			if (!active) {
				active = true;
				mirror.value = ta.value + options.append;
				mirror.style.overflowY = ta.style.overflowY;
				original = parseInt(ta.style.height,10);

				// Update the width in case the original textarea width has changed
				// A floor of 0 is needed because IE8 returns a negative value for hidden textareas, raising an error.
				mirror.style.width = Math.max($ta.width(), 0) + 'px';

				if (supportsScrollHeight) {
					height = mirror.scrollHeight;
				} else { // IE6 & IE7
					mirror.scrollTop = 0;
					mirror.scrollTop = 9e4;
					height = mirror.scrollTop;
				}

				var maxHeight = parseInt($ta.css('maxHeight'), 10);
				// Opera returns '-1px' when max-height is set to 'none'.
				maxHeight = maxHeight && maxHeight > 0 ? maxHeight : 9e4;
				if (height > maxHeight) {
					height = maxHeight;
					overflow = 'scroll';
				} else if (height < minHeight) {
					height = minHeight;
				}
				height += boxOffset;
				ta.style.overflowY = overflow || hidden;

				if (original !== height) {
					ta.style.height = height + 'px';
					if (callback) {
						options.callback.call(ta);
					}
				}

				// This small timeout gives IE a chance to draw it's scrollbar
				// before adjust can be run again (prevents an infinite loop).
				setTimeout(function () {
					active = false;
				}, 1);
			}
		}

		if (onpropertychange in ta) {
			if (oninput in ta) {
				// Detects IE9.  IE9 does not fire onpropertychange or oninput for deletions,
				// so binding to onkeyup to catch most of those occassions.  There is no way that I
				// know of to detect something like 'cut' in IE9.
				ta[oninput] = ta.onkeyup = adjust;
			} else {
				// IE7 / IE8
				ta[onpropertychange] = adjust;
			}
		} else {
			// Modern Browsers
			ta[oninput] = adjust;
		}

		$(window).on('resize', function(){
			active = false;
			adjust();
		});

		// Allow for manual triggering if needed.
		$ta.on('autosize', function(){
			active = false;
			adjust();
		});

		// Call adjust in case the textarea already contains text.
		adjust();
	});
};
}(window.jQuery || window.Zepto));

