addLoadListener(initSliders);

function initSliders()
{
  var sliderReplacements = getElementsByAttribute("class", "slider");

  for (var i = 0; i < sliderReplacements.length; i++)
  {
    var container = document.createElement("div");
    var slider = document.createElement("div");
    var newInput = document.createElement("input");
    var sliderReplacementID = sliderReplacements[i].getAttribute("id");

    if (sliderReplacementID != null || sliderReplacementID != "")
    {
      container.setAttribute("id", sliderReplacementID + "SliderContainer");
    }

    container.className = "sliderContainer";
    slider.className = "sliderWidget";
    slider.style.left = sliderReplacements[i].getAttribute("value") + "px";
    slider.valueX = parseInt(sliderReplacements[i].getAttribute("value"), 10);

    try
    {
      newInput.setAttribute("id", sliderReplacements[i].getAttribute("id"));
      newInput.setAttribute("name", sliderReplacements[i].getAttribute("name"));
      newInput.setAttribute("type", "hidden");
      newInput.setAttribute("value", sliderReplacements[i].getAttribute("value"));
    }
    catch(error)
    {
      return false;
    }

    container.appendChild(slider);
    sliderReplacements[i].parentNode.insertBefore(container, sliderReplacements[i]);
    sliderReplacements[i].parentNode.replaceChild(newInput, sliderReplacements[i]);

    container.input = newInput;

    attachEventListener(slider, "mousedown", mousedownSlider, false);
  }

  return true;
}

function mousedownSlider(event)
{
  if (typeof event == "undefined")
  {
    event = window.event;
  }

  var target = getEventTarget(event);

  while (!/(^| )sliderWidget( |$)/.test(target.className))
  {
    target = target.parentNode;
  }

  document.currentSlider = target;
  target.originX = event.clientX;

  attachEventListener(document, "mousemove", mousemoveSlider, false);
  attachEventListener(document, "mouseup", mouseupSlider, false);

  stopDefaultAction(event);

  return true;
}

function mousemoveSlider(event)
{
  if (typeof event == "undefined")
  {
    event = window.event;
  }

  var slider = document.currentSlider;
  var sliderLeft = slider.valueX;
  var increment = 1;

  if (isNaN(sliderLeft))
  {
    sliderLeft = 0;
  }

  sliderLeft += event.clientX - slider.originX;

  if (sliderLeft < 0)
  {
    sliderLeft = 0;
  }
  else if (sliderLeft > (slider.parentNode.offsetWidth - slider.offsetWidth))
  {
    sliderLeft = slider.parentNode.offsetWidth - slider.offsetWidth;
  }
  else
  {
    slider.originX = event.clientX;
  }

  slider.style.left = Math.round(sliderLeft / increment) * increment + "px";
  slider.parentNode.input.setAttribute("value", Math.round(sliderLeft / increment) * increment);
  slider.valueX = sliderLeft;

  var data1 = parseInt(document.getElementById("data1").getAttribute("value"));
  var data2 = parseInt(document.getElementById("data2").getAttribute("value"));
  var data3 = parseInt(document.getElementById("data3").getAttribute("value"));
  var data4 = parseInt(document.getElementById("data4").getAttribute("value"));
  var data5 = parseInt(document.getElementById("data5").getAttribute("value"));
  var data6 = parseInt(document.getElementById("data6").getAttribute("value"));

  new PieChart([data1, data2, data3, data4, data5, data6], 180);

  stopDefaultAction(event);

  return true;
}

function mouseupSlider()
{
  detachEventListener(document, "mousemove", mousemoveSlider, false);
  detachEventListener(document, "mouseup", mouseupSlider, false);

  return true;
}

function addLoadListener(fn)
{
  if (typeof window.addEventListener != 'undefined')
  {
    window.addEventListener('load', fn, false);
  }
  else if (typeof document.addEventListener != 'undefined')
  {
    document.addEventListener('load', fn, false);
  }
  else if (typeof window.attachEvent != 'undefined')
  {
    window.attachEvent('onload', fn);
  }
  else
  {
    var oldfn = window.onload;
    if (typeof window.onload != 'function')
    {
      window.onload = fn;
    }
    else
    {
      window.onload = function()
      {
        oldfn();
        fn();
      };
    }
  }
}

function attachEventListener(target, eventType, functionRef, capture)
{
  if (typeof target.addEventListener != "undefined")
  {
    target.addEventListener(eventType, functionRef, capture);
  }
  else if (typeof target.attachEvent != "undefined")
  {
    target.attachEvent("on" + eventType, functionRef);
  }
  else
  {
    eventType = "on" + eventType;

    if (typeof target[eventType] == "function")
    {
      var oldListener = target[eventType];

      target[eventType] = function()
      {
        oldListener();

        return functionRef();
      }
    }
    else
    {
      target[eventType] = functionRef;
    }
  }

  return true;
}

function detachEventListener(target, eventType, functionRef, capture)
{
  if (typeof target.removeEventListener != "undefined")
  {
    target.removeEventListener(eventType, functionRef, capture)
  }
  else if (typeof target.detachEvent != "undefined")
  {
    target.detachEvent("on" + eventType, functionRef);
  }
  else
  {
    target["on" + eventType] = null;
  }

  return true;
}

function getEventTarget(event)
{
  var targetElement = null;

  if (typeof event.target != "undefined")
  {
    targetElement = event.target;
  }
  else
  {
    targetElement = event.srcElement;
  }

  while (targetElement.nodeType == 3 && targetElement.parentNode != null)
  {
    targetElement = targetElement.parentNode;
  }

  return targetElement;
}

function stopDefaultAction(event)
{
  event.returnValue = false;

  if (typeof event.preventDefault != "undefined")
  {
    event.preventDefault();
  }

  return true;
}

function getElementsByAttribute(attribute, attributeValue)
{
  var elementArray = new Array();
  var matchedArray = new Array();

  if (document.all)
  {
    elementArray = document.all;
  }
  else
  {
    elementArray = document.getElementsByTagName("*");
  }

  for (var i = 0; i < elementArray.length; i++)
  {
    if (attribute == "class")
    {
      var pattern = new RegExp("(^| )" + attributeValue + "( |$)");

      if (typeof elementArray[i].className != "undefined" && elementArray[i].className.match(pattern))
      {
        matchedArray[matchedArray.length] = elementArray[i];
      }
    }
    else if (attribute == "for")
    {
      if (elementArray[i].getAttribute("htmlFor") || elementArray[i].getAttribute("for"))
      {
        if (elementArray[i].htmlFor == attributeValue)
        {
          matchedArray[matchedArray.length] = elementArray[i];
        }
      }
    }
    else if (elementArray[i].getAttribute(attribute) == attributeValue)
    {
      matchedArray[matchedArray.length] = elementArray[i];
    }
  }

  return matchedArray;
}