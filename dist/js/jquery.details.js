!function(a,b){var c,d=b.fn,e="[object Opera]"==Object.prototype.toString.call(window.opera),f=function(a){var b,c,d,e=a.createElement("details");return"open"in e?(c=a.body||function(){var c=a.documentElement;return b=!0,c.insertBefore(a.createElement("body"),c.firstElementChild||c.firstChild)}(),e.innerHTML="<summary>a</summary>b",e.style.display="block",c.appendChild(e),d=e.offsetHeight,e.open=!0,d=d!=e.offsetHeight,c.removeChild(e),b&&c.parentNode.removeChild(c),d):!1}(a),g=function(a,b,c,d){var e=a.prop("open"),f=e&&d||!e&&!d;f?(a.removeClass("open").prop("open",!1).triggerHandler("close.details"),b.attr("aria-expanded",!1),c.hide()):(a.addClass("open").prop("open",!0).triggerHandler("open.details"),b.attr("aria-expanded",!0),c.show())};d.noSelect=function(){var a="none";return this.bind("selectstart dragstart mousedown",function(){return!1}).css({MozUserSelect:a,msUserSelect:a,webkitUserSelect:a,userSelect:a})},f?(c=d.details=function(){return this.each(function(){var a=b(this),c=b("summary",a).first();c.attr({role:"button","aria-expanded":a.prop("open")}).on("click",function(){var b=a.prop("open");c.attr("aria-expanded",!b),a.triggerHandler((b?"close":"open")+".details")})})},c.support=f):(c=d.details=function(){return this.each(function(){var a=b(this),c=b("summary",a).first(),d=a.children(":not(summary)"),f=a.contents(":not(summary)");c.length||(c=b("<summary>").text("Details").prependTo(a)),d.length!=f.length&&(f.filter(function(){return 3==this.nodeType&&/[^ \t\n\f\r]/.test(this.data)}).wrap("<span>"),d=a.children(":not(summary)")),a.prop("open","string"==typeof a.attr("open")),g(a,c,d),c.attr("role","button").noSelect().prop("tabIndex",0).on("click",function(){c.focus(),g(a,c,d,!0)}).keyup(function(a){(32==a.keyCode||13==a.keyCode&&!e)&&(a.preventDefault(),c.click())})})},c.support=f)}(document,jQuery);