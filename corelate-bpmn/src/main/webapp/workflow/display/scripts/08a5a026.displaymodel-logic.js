function _bpmnGetColor(t, e) {
  var i;
  return i = t.current ? CURRENT_COLOR : t.completed ? COMPLETED_COLOR : e
}

function _drawPool(t) {
  var e = paper.rect(t.x, t.y, t.width, t.height);
  if (e.attr({
    "stroke-width": 1,
    stroke: "#000000",
    fill: "white"
  }), t.name) {
    var i = paper.text(t.x + 14, t.y + t.height / 2, t.name).attr({
      "text-anchor": "middle",
      "font-family": "Arial",
      "font-size": "12",
      fill: "#000000"
    });
    i.transform("r270")
  }
  if (t.lanes)
    for (var r = 0; t.lanes.length > r; r++) {
      var n = t.lanes[r];
      _drawLane(n)
    }
}

function _drawLane(t) {
  var e = paper.rect(t.x, t.y, t.width, t.height);
  if (e.attr({
    "stroke-width": 1,
    stroke: "#000000",
    fill: "white"
  }), t.name) {
    var i = paper.text(t.x + 10, t.y + t.height / 2, t.name).attr({
      "text-anchor": "middle",
      "font-family": "Arial",
      "font-size": "12",
      fill: "#000000"
    });
    i.transform("r270")
  }
}

function _drawSubProcess(t) {
  var e = paper.rect(t.x, t.y, t.width, t.height, 4),
    i = _bpmnGetColor(t, MAIN_STROKE_COLOR);
  e.attr({
    "stroke-width": 1,
    stroke: i,
    fill: "white"
  })
}

function _drawEventSubProcess(t) {
  var e = paper.rect(t.x, t.y, t.width, t.height, 4),
    i = _bpmnGetColor(t, MAIN_STROKE_COLOR);
  e.attr({
    "stroke-width": 1,
    stroke: i,
    "stroke-dasharray": ".",
    fill: "white"
  })
}

function _drawStartEvent(t) {
  var e = _drawEvent(t, NORMAL_STROKE, 15);
  e.click(function() {
    _zoom(!0)
  }), _addHoverLogic(t, "circle", MAIN_STROKE_COLOR)
}

function _drawEndEvent(t) {
  var e = _drawEvent(t, ENDEVENT_STROKE, 14);
  e.click(function() {
    _zoom(!1)
  }), _addHoverLogic(t, "circle", MAIN_STROKE_COLOR)
}

function _drawEvent(t, e, i) {
  var r = t.x + t.width / 2,
    n = t.y + t.height / 2,
    s = paper.circle(r, n, i),
    o = _bpmnGetColor(t, MAIN_STROKE_COLOR),
    a = _determineCustomFillColor(t, "#ffffff"),
    l = 1;
  return customActivityBackgroundOpacity && (l = customActivityBackgroundOpacity), s.attr({
    "stroke-width": e,
    stroke: o,
    fill: a,
    "fill-opacity": l
  }), s.id = t.id, _drawEventIcon(paper, t), s
}

function _drawServiceTask(t) {
  _drawTask(t), "mail" === t.taskType ? _drawSendTaskIcon(paper, t.x + 4, t.y + 4) : "camel" === t.taskType ? _drawCamelTaskIcon(paper, t.x + 4, t.y + 4) : "mule" === t.taskType ? _drawMuleTaskIcon(paper, t.x + 4, t.y + 4) : "alfresco_publish" === t.taskType ? _drawAlfrescoPublishTaskIcon(paper, t.x + 4, t.y + 4) : "box_publish" === t.taskType ? _drawBoxPublishTaskIcon(paper, t.x + 4, t.y + 4) : "google_drive_publish" === t.taskType ? _drawGoogleDrivePublishTaskIcon(paper, t.x + 4, t.y + 4) : "rest_call" === t.taskType ? _drawRestCallTaskIcon(paper, t.x + 4, t.y + 4) : t.stencilIconId ? paper.image("../service/stencilitem/" + t.stencilIconId + "/icon", t.x + 4, t.y + 4, 16, 16) : _drawServiceTaskIcon(paper, t.x + 4, t.y + 4), _addHoverLogic(t, "rect", ACTIVITY_STROKE_COLOR)
}

function _drawCallActivity(t) {
  var e = t.width - CALL_ACTIVITY_STROKE / 2,
    i = t.height - CALL_ACTIVITY_STROKE / 2,
    r = paper.rect(t.x, t.y, e, i, 4),
    n = _bpmnGetColor(t, ACTIVITY_STROKE_COLOR),
    s = _determineCustomFillColor(t, ACTIVITY_FILL_COLOR),
    o = 1;
  customActivityBackgroundOpacity && (o = customActivityBackgroundOpacity), r.attr({
    "stroke-width": CALL_ACTIVITY_STROKE,
    stroke: n,
    fill: s,
    "fill-opacity": o
  }), r.id = t.id, t.name && this._drawMultilineText(t.name, t.x, t.y, t.width, t.height, "middle", "middle", 11), _addHoverLogic(t, "rect", ACTIVITY_STROKE_COLOR)
}

function _drawScriptTask(t) {
  _drawTask(t), _drawScriptTaskIcon(paper, t.x + 4, t.y + 4), _addHoverLogic(t, "rect", ACTIVITY_STROKE_COLOR)
}

function _drawUserTask(t) {
  _drawTask(t), _drawUserTaskIcon(paper, t.x + 4, t.y + 4), _addHoverLogic(t, "rect", ACTIVITY_STROKE_COLOR)
}

function _drawBusinessRuleTask(t) {
  _drawTask(t), _drawBusinessRuleTaskIcon(paper, t.x + 4, t.y + 4), _addHoverLogic(t, "rect", ACTIVITY_STROKE_COLOR)
}

function _drawManualTask(t) {
  _drawTask(t), _drawManualTaskIcon(paper, t.x + 4, t.y + 4), _addHoverLogic(t, "rect", ACTIVITY_STROKE_COLOR)
}

function _drawSendTask(t) {
  _drawTask(t), _drawSendTaskIcon(paper, t.x + 4, t.y + 4), _addHoverLogic(t, "rect", ACTIVITY_STROKE_COLOR)
}

function _drawReceiveTask(t) {
  _drawTask(t), _drawReceiveTaskIcon(paper, t.x, t.y), _addHoverLogic(t, "rect", ACTIVITY_STROKE_COLOR)
}

function _drawTask(t) {
  var e = {},
    i = _bpmnGetColor(t, ACTIVITY_STROKE_COLOR);
  e.stroke = i;
  var r;
  r = i === ACTIVITY_STROKE_COLOR ? TASK_STROKE : TASK_HIGHLIGHT_STROKE;
  var n = t.width - r / 2,
    s = t.height - r / 2,
    o = paper.rect(t.x, t.y, n, s, 4);
  e["stroke-width"] = r;
  var a = _determineCustomFillColor(t, ACTIVITY_FILL_COLOR);
  e.fill = a, customActivityBackgroundOpacity && (e["fill-opacity"] = customActivityBackgroundOpacity), o.attr(e), o.id = t.id, t.name && this._drawMultilineText(t.name, t.x, t.y, t.width, t.height, "middle", "middle", 11)
}

function _drawExclusiveGateway(t) {
  _drawGateway(t);
  var e = t.width / 4,
    i = t.height / 4,
    r = paper.path("M" + (t.x + e + 3) + " " + (t.y + i + 3) + "L" + (t.x + 3 * e - 3) + " " + (t.y + 3 * i - 3) + "M" + (t.x + e + 3) + " " + (t.y + 3 * i - 3) + "L" + (t.x + 3 * e - 3) + " " + (t.y + i + 3)),
    n = _bpmnGetColor(t, MAIN_STROKE_COLOR),
    s = _determineCustomFillColor(t, ACTIVITY_FILL_COLOR),
    o = 1;
  customActivityBackgroundOpacity && (o = customActivityBackgroundOpacity), r.attr({
    "stroke-width": 3,
    stroke: n,
    fill: s,
    "fill-opacity": o
  }), _addHoverLogic(t, "rhombus", MAIN_STROKE_COLOR)
}

function _drawParallelGateway(t) {
  _drawGateway(t);
  var e = _bpmnGetColor(t, MAIN_STROKE_COLOR),
    i = paper.path("M 6.75,16 L 25.75,16 M 16,6.75 L 16,25.75"),
    r = _determineCustomFillColor(t, ACTIVITY_FILL_COLOR),
    n = 1;
  customActivityBackgroundOpacity && (n = customActivityBackgroundOpacity), i.attr({
    "stroke-width": 3,
    stroke: e,
    fill: r,
    "fill-opacity": n
  }), i.transform("T" + (t.x + 4) + "," + (t.y + 4)), _addHoverLogic(t, "rhombus", MAIN_STROKE_COLOR)
}

function _drawInclusiveGateway(t) {
  _drawGateway(t);
  var e = _bpmnGetColor(t, MAIN_STROKE_COLOR),
    i = paper.circle(t.x + t.width / 2, t.y + t.height / 2, 9.75),
    r = _determineCustomFillColor(t, ACTIVITY_FILL_COLOR),
    n = 1;
  customActivityBackgroundOpacity && (n = customActivityBackgroundOpacity), i.attr({
    "stroke-width": 2.5,
    stroke: e,
    fill: r,
    "fill-opacity": n
  }), _addHoverLogic(t, "rhombus", MAIN_STROKE_COLOR)
}

function _drawEventGateway(t) {
  _drawGateway(t);
  var e = _bpmnGetColor(t, MAIN_STROKE_COLOR),
    i = paper.circle(t.x + t.width / 2, t.y + t.height / 2, 10.4),
    r = _determineCustomFillColor(t, ACTIVITY_FILL_COLOR),
    n = 1;
  customActivityBackgroundOpacity && (n = customActivityBackgroundOpacity), i.attr({
    "stroke-width": .5,
    stroke: e,
    fill: r,
    "fill-opacity": n
  });
  var s = paper.circle(t.x + t.width / 2, t.y + t.height / 2, 11.7);
  s.attr({
    "stroke-width": .5,
    stroke: e,
    fill: r,
    "fill-opacity": n
  });
  var o = paper.path("M 20.327514,22.344972 L 11.259248,22.344216 L 8.4577203,13.719549 L 15.794545,8.389969 L 23.130481,13.720774 L 20.327514,22.344972 z");
  o.attr({
    "stroke-width": 1.39999998,
    stroke: e,
    fill: r,
    "fill-opacity": n,
    "stroke-linejoin": "bevel"
  }), o.transform("T" + (t.x + 4) + "," + (t.y + 4)), _addHoverLogic(t, "rhombus", MAIN_STROKE_COLOR)
}

function _drawGateway(t) {
  var e = _bpmnGetColor(t, MAIN_STROKE_COLOR),
    i = paper.path("M" + t.x + " " + (t.y + t.height / 2) + "L" + (t.x + t.width / 2) + " " + (t.y + t.height) + "L" + (t.x + t.width) + " " + (t.y + t.height / 2) + "L" + (t.x + t.width / 2) + " " + t.y + "z"),
    r = _determineCustomFillColor(t, ACTIVITY_FILL_COLOR),
    n = 1;
  return customActivityBackgroundOpacity && (n = customActivityBackgroundOpacity), i.attr("stroke-width", 2), i.attr("stroke", e), i.attr("fill", r), i.attr("fill-opacity", n), i.id = t.id, i
}

function _drawBoundaryEvent(t) {
  var e = t.x + t.width / 2,
    i = t.y + t.height / 2,
    r = paper.circle(e, i, 15),
    n = _bpmnGetColor(t, MAIN_STROKE_COLOR);
  r.attr({
    "stroke-width": 1,
    stroke: n,
    fill: "white"
  });
  var s = paper.circle(e, i, 12);
  s.attr({
    "stroke-width": 1,
    stroke: n,
    fill: "none"
  }), _drawEventIcon(paper, t), _addHoverLogic(t, "circle", MAIN_STROKE_COLOR), r.id = t.id, s.id = t.id + "_inner"
}

function _drawIntermediateCatchEvent(t) {
  var e = t.x + t.width / 2,
    i = t.y + t.height / 2,
    r = paper.circle(e, i, 15),
    n = _bpmnGetColor(t, MAIN_STROKE_COLOR);
  r.attr({
    "stroke-width": 1,
    stroke: n,
    fill: "white"
  });
  var s = paper.circle(e, i, 12);
  s.attr({
    "stroke-width": 1,
    stroke: n,
    fill: "none"
  }), _drawEventIcon(paper, t), _addHoverLogic(t, "circle", MAIN_STROKE_COLOR), r.id = t.id, s.id = t.id + "_inner"
}

function _drawThrowEvent(t) {
  var e = t.x + t.width / 2,
    i = t.y + t.height / 2,
    r = paper.circle(e, i, 15),
    n = _bpmnGetColor(t, MAIN_STROKE_COLOR);
  r.attr({
    "stroke-width": 1,
    stroke: n,
    fill: "white"
  });
  var s = paper.circle(e, i, 12);
  s.attr({
    "stroke-width": 1,
    stroke: n,
    fill: "none"
  }), _drawEventIcon(paper, t), _addHoverLogic(t, "circle", MAIN_STROKE_COLOR), r.id = t.id, s.id = t.id + "_inner"
}

function _drawMultilineText(t, e, i, r, n, s, o, a) {
  if (t && "" != t) {
    var l, h, c = r - 2 * TEXT_PADDING;
    "middle" === s ? l = e + r / 2 : "start" === s && (l = e), h = i + n / 2;
    var u = paper.text(l + TEXT_PADDING, h + TEXT_PADDING).attr({
        "text-anchor": s,
        "font-family": "Arial",
        "font-size": a,
        fill: "#373e48"
      }),
      d = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    u.attr({
      text: d
    });
    var p = u.getBBox().width / d.length;
    u.attr({
      text: t
    });
    for (var f = t.split("\n"), e = 0, g = [], v = 0; f.length > v; v++) {
      for (var m = f[v].split(" "), y = 0; m.length > y; y++) {
        var x = m[y].length;
        e + x * p > c && (g.push("\n"), e = 0), e += x * p, g.push(m[y] + " ")
      }
      g.push("\n"), e = 0
    }
    u.attr({
      text: g.join("")
    }), o && "top" === o && u.attr({
      y: i + u.getBBox().height / 2
    })
  }
}

function _drawTextAnnotation(t) {
  var e = paper.path("M20,1 L1,1 L1,50 L20,50");
  e.attr({
    stroke: "#585858",
    fill: "none"
  });
  var i = paper.set();
  i.push(e), i.transform("T" + t.x + "," + t.y), t.text && this._drawMultilineText(t.text, t.x + 2, t.y, t.width, t.height, "start", "middle", 11)
}

function _drawFlow(t) {
  var e = new Polyline(t.id, t.waypoints, SEQUENCEFLOW_STROKE, paper),
    i = _bpmnGetColor(t, MAIN_STROKE_COLOR);
  e.element = paper.path(e.path), e.element.attr({
    "stroke-width": SEQUENCEFLOW_STROKE
  }), e.element.attr({
    stroke: i
  }), e.element.id = t.id;
  var r = e.getLinesCount() - 1,
    n = e.getLine(r);
  if (void 0 != n) {
    if ("connection" == t.type && t.conditions) {
      var s = (n.x1 + n.x2) / 2,
        o = (n.y1 + n.y2) / 2;
      paper.image("../editor/images/condition-flow.png", s - 8, o - 8, 16, 16)
    }
    var a = new Polyline(t.id, t.waypoints, SEQUENCEFLOW_STROKE, paper);
    a.element = paper.path(e.path), a.element.attr({
      opacity: 0,
      "stroke-width": 8,
      stroke: "#000000"
    }), _showTip(jQuery(a.element.node), t), a.element.mouseover(function() {
      paper.getById(e.element.id).attr({
        stroke: "blue"
      })
    }), a.element.mouseout(function() {
      paper.getById(e.element.id).attr({
        stroke: "#585858"
      })
    }), _drawArrowHead(n)
  }
}

function _drawAssociation(t) {
  var e = new Polyline(t.id, t.waypoints, ASSOCIATION_STROKE, paper);
  e.element = paper.path(e.path), e.element.attr({
    "stroke-width": ASSOCIATION_STROKE
  }), e.element.attr({
    "stroke-dasharray": ". "
  }), e.element.attr({
    stroke: "#585858"
  }), e.element.id = t.id;
  var i = new Polyline(t.id, t.waypoints, ASSOCIATION_STROKE, paper);
  i.element = paper.path(e.path), i.element.attr({
    opacity: 0,
    "stroke-width": 8,
    stroke: "#000000"
  }), _showTip(jQuery(i.element.node), t), i.element.mouseover(function() {
    paper.getById(e.element.id).attr({
      stroke: "blue"
    })
  }), i.element.mouseout(function() {
    paper.getById(e.element.id).attr({
      stroke: "#585858"
    })
  })
}

function _drawArrowHead(t) {
  var e = 2 * ARROW_WIDTH,
    i = paper.path("M0 0L-" + (ARROW_WIDTH / 2 + .5) + " -" + e + "L" + (ARROW_WIDTH / 2 + .5) + " -" + e + "z");
  return 1 == this.strokeWidth % 2 && (t.x2 += .5, t.y2 += .5), i.transform("t" + t.x2 + "," + t.y2), i.transform("...r" + Raphael.deg(t.angle - Math.PI / 2) + " " + 0 + " " + 0), i.attr("fill", "#585858"), i.attr("stroke-width", SEQUENCEFLOW_STROKE), i.attr("stroke", "#585858"), i
}

function _determineCustomFillColor(t, e) {
  var i;
  return customActivityColors && customActivityColors[t.name] && (i = customActivityColors[t.name]), null !== i && void 0 !== i ? i : (customActivityColors && customActivityColors[t.id] && (i = customActivityColors[t.id]), null !== i && void 0 !== i ? i : e)
}

function _drawUserTaskIcon(t, e, i) {
  var r = t.path("m 1,17 16,0 0,-1.7778 -5.333332,-3.5555 0,-1.7778 c 1.244444,0 1.244444,-2.3111 1.244444,-2.3111 l 0,-3.0222 C 12.555557,0.8221 9.0000001,1.0001 9.0000001,1.0001 c 0,0 -3.5555556,-0.178 -3.9111111,3.5555 l 0,3.0222 c 0,0 0,2.3111 1.2444443,2.3111 l 0,1.7778 L 1,15.2222 1,17 17,17");
  r.attr({
    opacity: 1,
    stroke: "none",
    fill: "#d1b575"
  });
  var n = t.set();
  n.push(r), n.transform("T" + e + "," + i)
}

function _drawServiceTaskIcon(t, e, i) {
  var r = t.path("M 8,1 7.5,2.875 c 0,0 -0.02438,0.250763 -0.40625,0.4375 C 7.05724,3.330353 7.04387,3.358818 7,3.375 6.6676654,3.4929791 6.3336971,3.6092802 6.03125,3.78125 6.02349,3.78566 6.007733,3.77681 6,3.78125 5.8811373,3.761018 5.8125,3.71875 5.8125,3.71875 l -1.6875,-1 -1.40625,1.4375 0.96875,1.65625 c 0,0 0.065705,0.068637 0.09375,0.1875 0.002,0.00849 -0.00169,0.022138 0,0.03125 C 3.6092802,6.3336971 3.4929791,6.6676654 3.375,7 3.3629836,7.0338489 3.3239228,7.0596246 3.3125,7.09375 3.125763,7.4756184 2.875,7.5 2.875,7.5 L 1,8 l 0,2 1.875,0.5 c 0,0 0.250763,0.02438 0.4375,0.40625 0.017853,0.03651 0.046318,0.04988 0.0625,0.09375 0.1129372,0.318132 0.2124732,0.646641 0.375,0.9375 -0.00302,0.215512 -0.09375,0.34375 -0.09375,0.34375 L 2.6875,13.9375 4.09375,15.34375 5.78125,14.375 c 0,0 0.1229911,-0.09744 0.34375,-0.09375 0.2720511,0.147787 0.5795915,0.23888 0.875,0.34375 0.033849,0.01202 0.059625,0.05108 0.09375,0.0625 C 7.4756199,14.874237 7.5,15.125 7.5,15.125 L 8,17 l 2,0 0.5,-1.875 c 0,0 0.02438,-0.250763 0.40625,-0.4375 0.03651,-0.01785 0.04988,-0.04632 0.09375,-0.0625 0.332335,-0.117979 0.666303,-0.23428 0.96875,-0.40625 0.177303,0.0173 0.28125,0.09375 0.28125,0.09375 l 1.65625,0.96875 1.40625,-1.40625 -0.96875,-1.65625 c 0,0 -0.07645,-0.103947 -0.09375,-0.28125 0.162527,-0.290859 0.262063,-0.619368 0.375,-0.9375 0.01618,-0.04387 0.04465,-0.05724 0.0625,-0.09375 C 14.874237,10.52438 15.125,10.5 15.125,10.5 L 17,10 17,8 15.125,7.5 c 0,0 -0.250763,-0.024382 -0.4375,-0.40625 C 14.669647,7.0572406 14.641181,7.0438697 14.625,7 14.55912,6.8144282 14.520616,6.6141566 14.4375,6.4375 c -0.224363,-0.4866 0,-0.71875 0,-0.71875 L 15.40625,4.0625 14,2.625 l -1.65625,1 c 0,0 -0.253337,0.1695664 -0.71875,-0.03125 l -0.03125,0 C 11.405359,3.5035185 11.198648,3.4455201 11,3.375 10.95613,3.3588185 10.942759,3.3303534 10.90625,3.3125 10.524382,3.125763 10.5,2.875 10.5,2.875 L 10,1 8,1 z m 1,5 c 1.656854,0 3,1.3431458 3,3 0,1.656854 -1.343146,3 -3,3 C 7.3431458,12 6,10.656854 6,9 6,7.3431458 7.3431458,6 9,6 z");
  r.attr({
    opacity: 1,
    stroke: "none",
    fill: "#72a7d0"
  });
  var n = t.set();
  n.push(r), n.transform("T" + e + "," + i)
}

function _drawScriptTaskIcon(t, e, i) {
  var r = t.path("m 5,2 0,0.094 c 0.23706,0.064 0.53189,0.1645 0.8125,0.375 0.5582,0.4186 1.05109,1.228 1.15625,2.5312 l 8.03125,0 1,0 1,0 c 0,-3 -2,-3 -2,-3 l -10,0 z M 4,3 4,13 2,13 c 0,3 2,3 2,3 l 9,0 c 0,0 2,0 2,-3 L 15,6 6,6 6,5.5 C 6,4.1111 5.5595,3.529 5.1875,3.25 4.8155,2.971 4.5,3 4.5,3 L 4,3 z");
  r.attr({
    opacity: 1,
    stroke: "none",
    fill: "#72a7d0"
  });
  var n = t.set();
  n.push(r), n.transform("T" + e + "," + i)
}

function _drawBusinessRuleTaskIcon(t, e, i) {
  var r = t.path("m 1,2 0,14 16,0 0,-14 z m 1.45458,5.6000386 2.90906,0 0,2.7999224 -2.90906,0 z m 4.36364,0 8.72718,0 0,2.7999224 -8.72718,0 z m -4.36364,4.1998844 2.90906,0 0,2.800116 -2.90906,0 z m 4.36364,0 8.72718,0 0,2.800116 -8.72718,0 z");
  r.attr({
    stroke: "none",
    fill: "#72a7d0"
  });
  var n = t.set();
  n.push(r), n.transform("T" + e + "," + i)
}

function _drawSendTaskIcon(t, e, i) {
  var r = t.path("M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z");
  r.attr({
    stroke: "none",
    fill: "#16964d"
  });
  var n = t.set();
  n.push(r), n.transform("T" + e + "," + i)
}

function _drawManualTaskIcon(t, e, i) {
  var r = t.path("m 17,9.3290326 c -0.0069,0.5512461 -0.455166,1.0455894 -0.940778,1.0376604 l -5.792746,0 c 0.0053,0.119381 0.0026,0.237107 0.0061,0.355965 l 5.154918,0 c 0.482032,-0.0096 0.925529,0.49051 0.919525,1.037574 -0.0078,0.537128 -0.446283,1.017531 -0.919521,1.007683 l -5.245273,0 c -0.01507,0.104484 -0.03389,0.204081 -0.05316,0.301591 l 2.630175,0 c 0.454137,-0.0096 0.872112,0.461754 0.866386,0.977186 C 13.619526,14.554106 13.206293,15.009498 12.75924,15 L 3.7753054,15 C 3.6045812,15 3.433552,14.94423 3.2916363,14.837136 c -0.00174,0 -0.00436,0 -0.00609,0 C 1.7212035,14.367801 0.99998255,11.458641 1,11.458641 L 1,7.4588393 c 0,0 0.6623144,-1.316333 1.8390583,-2.0872584 1.1767614,-0.7711868 6.8053358,-2.40497 7.2587847,-2.8052901 0.453484,-0.40032 1.660213,1.4859942 0.04775,2.4010487 C 8.5332315,5.882394 8.507351,5.7996113 8.4370292,5.7936859 l 6.3569748,-0.00871 c 0.497046,-0.00958 0.952273,0.5097676 0.94612,1.0738232 -0.0053,0.556126 -0.456176,1.0566566 -0.94612,1.0496854 l -4.72435,0 c 0.01307,0.1149374 0.0244,0.2281319 0.03721,0.3498661 l 5.952195,0 c 0.494517,-0.00871 0.947906,0.5066305 0.940795,1.0679848 z");
  r.attr({
    opacity: 1,
    stroke: "none",
    fill: "#d1b575"
  });
  var n = t.set();
  n.push(r), n.transform("T" + e + "," + i)
}

function _drawReceiveTaskIcon(t, e, i) {
  var r = t.path("m 0.5,2.5 0,13 17,0 0,-13 z M 2,4 6.5,8.5 2,13 z M 4,4 14,4 9,9 z m 12,0 0,9 -4.5,-4.5 z M 7.5,9.5 9,11 10.5,9.5 15,14 3,14 z");
  r.attr({
    opacity: 1,
    stroke: "none",
    fill: "#16964d"
  }), e += 4, i += 2, r.transform("T" + e + "," + i)
}

function _drawCamelTaskIcon(t, e, i) {
  var r = t.path("m 8.1878027,15.383782 c -0.824818,-0.3427 0.375093,-1.1925 0.404055,-1.7743 0.230509,-0.8159 -0.217173,-1.5329 -0.550642,-2.2283 -0.106244,-0.5273 -0.03299,-1.8886005 -0.747194,-1.7818005 -0.712355,0.3776 -0.9225,1.2309005 -1.253911,1.9055005 -0.175574,1.0874 -0.630353,2.114 -0.775834,3.2123 -0.244009,0.4224 -1.741203,0.3888 -1.554386,-0.1397 0.651324,-0.3302 1.13227,-0.9222 1.180246,-1.6705 0.0082,-0.7042 -0.133578,-1.3681 0.302178,-2.0083 0.08617,-0.3202 0.356348,-1.0224005 -0.218996,-0.8051 -0.694517,0.2372 -1.651062,0.6128 -2.057645,-0.2959005 -0.696769,0.3057005 -1.102947,-0.611 -1.393127,-1.0565 -0.231079,-0.6218 -0.437041,-1.3041 -0.202103,-1.9476 -0.185217,-0.7514 -0.39751099,-1.5209 -0.35214999,-2.301 -0.243425,-0.7796 0.86000899,-1.2456 0.08581,-1.8855 -0.76078999,0.1964 -1.41630099,-0.7569 -0.79351899,-1.2877 0.58743,-0.52829998 1.49031699,-0.242 2.09856399,-0.77049998 0.816875,-0.3212 1.256619,0.65019998 1.923119,0.71939998 0.01194,0.7333 -0.0031,1.5042 -0.18417,2.2232 -0.194069,0.564 -0.811196,1.6968 0.06669,1.9398 0.738382,-0.173 1.095723,-0.9364 1.659041,-1.3729 0.727298,-0.3962 1.093982,-1.117 1.344137,-1.8675 0.400558,-0.8287 1.697676,-0.6854 1.955367,0.1758 0.103564,0.5511 0.9073983,1.7538 1.2472763,0.6846 0.121868,-0.6687 0.785541,-1.4454 1.518183,-1.0431 0.813587,0.4875 0.658233,1.6033 1.285504,2.2454 0.768715,0.8117 1.745394,1.4801 2.196633,2.5469 0.313781,0.8074 0.568552,1.707 0.496624,2.5733 -0.35485,0.8576005 -1.224508,-0.216 -0.64725,-0.7284 0.01868,-0.3794 -0.01834,-1.3264 -0.370249,-1.3272 -0.123187,0.7586 -0.152778,1.547 -0.10869,2.3154 0.270285,0.6662005 1.310741,0.7653005 1.060553,1.6763005 -0.03493,0.9801 0.294343,1.9505 0.148048,2.9272 -0.320479,0.2406 -0.79575,0.097 -1.185062,0.1512 -0.165725,0.3657 -0.40138,0.921 -1.020848,0.6744 -0.564671,0.1141 -1.246404,-0.266 -0.578559,-0.7715 0.679736,-0.5602 0.898618,-1.5362 0.687058,-2.3673 -0.529674,-1.108 -1.275984,-2.0954005 -1.839206,-3.1831005 -0.634619,-0.1004 -1.251945,0.6779 -1.956789,0.7408 -0.6065893,-0.038 -1.0354363,-0.06 -0.8495673,0.6969005 0.01681,0.711 0.152396,1.3997 0.157345,2.1104 0.07947,0.7464 0.171287,1.4944 0.238271,2.2351 0.237411,1.0076 -0.687542,1.1488 -1.414811,0.8598 z m 6.8675483,-1.8379 c 0.114364,-0.3658 0.206751,-1.2704 -0.114466,-1.3553 -0.152626,0.5835 -0.225018,1.1888 -0.227537,1.7919 0.147087,-0.1166 0.265559,-0.2643 0.342003,-0.4366 z");
  r.attr({
    opacity: 1,
    stroke: "none",
    fill: "#bd4848"
  }), e += 4, i += 2, r.transform("T" + e + "," + i)
}

function _drawMuleTaskIcon(t, e, i) {
  var r = t.path("M 8,0 C 3.581722,0 0,3.5817 0,8 c 0,4.4183 3.581722,8 8,8 4.418278,0 8,-3.5817 8,-8 L 16,7.6562 C 15.813571,3.3775 12.282847,0 8,0 z M 5.1875,2.7812 8,7.3437 10.8125,2.7812 c 1.323522,0.4299 2.329453,1.5645 2.8125,2.8438 1.136151,2.8609 -0.380702,6.4569 -3.25,7.5937 -0.217837,-0.6102 -0.438416,-1.2022 -0.65625,-1.8125 0.701032,-0.2274 1.313373,-0.6949 1.71875,-1.3125 0.73624,-1.2317 0.939877,-2.6305 -0.03125,-4.3125 l -2.75,4.0625 -0.65625,0 -0.65625,0 -2.75,-4 C 3.5268433,7.6916 3.82626,8.862 4.5625,10.0937 4.967877,10.7113 5.580218,11.1788 6.28125,11.4062 6.063416,12.0165 5.842837,12.6085 5.625,13.2187 2.755702,12.0819 1.238849,8.4858 2.375,5.625 2.858047,4.3457 3.863978,3.2112 5.1875,2.7812 z");
  r.attr({
    opacity: 1,
    stroke: "none",
    fill: "#bd4848"
  }), e += 4, i += 2, r.transform("T" + e + "," + i)
}

function _drawAlfrescoPublishTaskIcon(t, e, i) {
  e += 2, i += 2;
  var r = t.path("M4.11870968,2.12890323 L6.12954839,0.117935484 L3.10993548,0.118064516 L3.10270968,0.118064516 C1.42941935,0.118064516 0.0729032258,1.47458065 0.0729032258,3.14774194 C0.0729032258,4.82116129 1.42929032,6.17754839 3.10258065,6.17754839 C3.22967742,6.17754839 3.35470968,6.16877419 3.47767742,6.15354839 C2.8163871,4.85083871 3.02954839,3.21793548 4.11870968,2.12890323M6.57032258,3.144 L6.57032258,0.300258065 L4.43522581,2.4356129 L4.43006452,2.44064516 C3.24683871,3.62387097 3.24683871,5.54219355 4.43006452,6.72541935 C5.61329032,7.90864516 7.5316129,7.90864516 8.71483871,6.72541935 C8.80464516,6.6356129 8.88529032,6.54025806 8.96154839,6.44270968 C7.57341935,5.98864516 6.57045161,4.68387097 6.57032258,3.144");
  r.attr({
    fill: "#87C040",
    "stroke-width": "0"
  });
  var n = e + 1.419355,
    s = i + 8.387097;
  r.transform("T" + n + "," + s), r = t.path("M10.4411613,10.5153548 L8.43032258,8.50451613 L8.43032258,11.5313548 C8.43032258,13.2047742 9.78683871,14.5611613 11.460129,14.5611613 C13.1334194,14.5611613 14.4899355,13.2047742 14.4899355,11.5314839 C14.4899355,11.4043871 14.4811613,11.2793548 14.4659355,11.1563871 C13.1632258,11.8178065 11.5303226,11.6045161 10.4411613,10.5153548M15.0376774,5.91935484 C14.947871,5.82954839 14.8526452,5.74890323 14.7550968,5.67264516 C14.3010323,7.06064516 12.996129,8.06374194 11.4563871,8.06374194 L8.61277419,8.06374194 L10.7529032,10.204 C11.936129,11.3872258 13.8545806,11.3872258 15.0376774,10.204 C16.2209032,9.02077419 16.2209032,7.10245161 15.0376774,5.91935484"), r.attr({
    fill: "#87C040",
    "stroke-width": "0"
  }), r.transform("T" + e + "," + i), r = t.path("M5.9083871,1.5636129 C5.78129032,1.5636129 5.65625806,1.57225806 5.53329032,1.58748387 C6.19458065,2.89032258 5.98141935,4.52309677 4.89225806,5.61225806 L2.88154839,7.62309677 L5.9083871,7.62309677 C7.58154839,7.62309677 8.93806452,6.26658065 8.93806452,4.59329032 C8.93819355,2.92 7.58167742,1.5636129 5.9083871,1.5636129"), r.attr({
    fill: "#ED9A2D",
    "stroke-width": "0"
  });
  var o = e + 5.548387;
  r.transform("T" + o + "," + i), r = t.path("M4.58090323,1.0156129 C3.39767742,-0.167483871 1.47935484,-0.167483871 0.296129032,1.01574194 C0.206451613,1.10554839 0.125806452,1.20077419 0.0495483871,1.29845161 C1.43754839,1.75251613 2.44064516,3.05729032 2.44064516,4.59703226 L2.44064516,7.44077419 L4.57574194,5.30554839 L4.58090323,5.30051613 C5.76412903,4.11729032 5.76412903,2.19896774 4.58090323,1.0156129"), r.attr({
    fill: "#5698C6",
    "stroke-width": "0"
  }), r.transform("T" + o + "," + i), r = t.path("M5.54051613,5.61432258 L5.62670968,5.70425806 L7.54632258,7.62387097 L7.5483871,7.62387097 L7.5483871,4.604 L7.5483871,4.59677419 C7.5483871,2.92348387 6.19187097,1.56696774 4.51858065,1.56696774 C2.84529032,1.56696774 1.48877419,2.92335484 1.48890323,4.59664516 C1.48890323,4.72348387 1.49754839,4.84812903 1.51264516,4.97083871 C2.81625806,4.30993548 4.45122581,4.52503226 5.54051613,5.61432258M1.23251613,10.4292903 C1.25625806,10.3588387 1.28180645,10.2894194 1.30980645,10.2210323 C1.31329032,10.2123871 1.3163871,10.2036129 1.32,10.1952258 C1.35070968,10.1216774 1.38451613,10.0500645 1.42,9.97935484 C1.42774194,9.96374194 1.43574194,9.9483871 1.44387097,9.93277419 C1.4803871,9.86258065 1.51883871,9.79354839 1.55987097,9.72632258 C1.56425806,9.71909677 1.56903226,9.71225806 1.57341935,9.70529032 C1.6123871,9.64245161 1.65354839,9.58141935 1.6963871,9.52141935 C1.70516129,9.50903226 1.71380645,9.49651613 1.72283871,9.48425806 C1.76890323,9.42154839 1.81690323,9.36064516 1.86683871,9.30129032 C1.87703226,9.28916129 1.88735484,9.27741935 1.89780645,9.26567742 C1.94658065,9.20916129 1.99690323,9.15406452 2.04916129,9.10090323 C2.05380645,9.09625806 2.05806452,9.09135484 2.06270968,9.08670968 C2.11832258,9.03083871 2.17625806,8.97741935 2.23548387,8.92554839 C2.2483871,8.91419355 2.26129032,8.90296774 2.27432258,8.89187097 C2.33393548,8.84103226 2.39496774,8.79212903 2.45780645,8.74529032 C2.46606452,8.73922581 2.47470968,8.73354839 2.48296774,8.7276129 C2.54167742,8.68490323 2.60180645,8.64412903 2.66322581,8.60503226 C2.67535484,8.59729032 2.68735484,8.58929032 2.6996129,8.58167742 C2.76593548,8.54064516 2.83380645,8.50206452 2.90296774,8.46541935 C2.91754839,8.45780645 2.93225806,8.45045161 2.94696774,8.44296774 C3.016,8.40774194 3.08593548,8.37406452 3.15741935,8.34348387 C3.16090323,8.34206452 3.16425806,8.3403871 3.16774194,8.33883871 C3.24167742,8.30748387 3.31729032,8.27948387 3.39380645,8.25316129 C3.41032258,8.24748387 3.42670968,8.24180645 3.44335484,8.2363871 C3.51909677,8.21174194 3.59587097,8.18903226 3.67380645,8.16929032 C3.68567742,8.16645161 3.69793548,8.16387097 3.70980645,8.16116129 C3.78206452,8.14374194 3.85509677,8.12877419 3.92890323,8.116 C3.94270968,8.11367742 3.9563871,8.11083871 3.97019355,8.10877419 C4.05032258,8.09587097 4.13148387,8.08619355 4.21329032,8.07896774 C4.23096774,8.07741935 4.24877419,8.07625806 4.26645161,8.07483871 C4.35109677,8.06877419 4.43612903,8.06451613 4.52232258,8.06451613 L7.36606452,8.0643871 L5.22580645,5.92412903 C4.04258065,4.74103226 2.12412903,4.74090323 0.941032258,5.92412903 C-0.242193548,7.10735484 -0.242193548,9.02567742 0.941032258,10.2089032 C1.03070968,10.2985806 1.12464516,10.3814194 1.22206452,10.4575484 C1.22529032,10.448 1.22929032,10.4388387 1.23251613,10.4292903"), r.attr({
    fill: "#5698C6",
    "stroke-width": "0"
  }), r.transform("T" + e + "," + i), r = t.path("M5.23290323,5.92412903 L6.92748387,7.61870968 L4.64980645,7.61870968 L4.52064516,7.62141935 C3.13354839,7.62141935 1.96425806,6.68929032 1.60477419,5.41729032 C2.75870968,4.77019355 4.24619355,4.93754839 5.22787097,5.91909677 L5.23290323,5.92412903M7.54722581,4.59612903 L7.54722581,6.99264516 L5.93664516,5.38206452 L5.84348387,5.29264516 C4.86258065,4.31187097 4.69483871,2.82580645 5.34012903,1.67225806 C6.61367742,2.03070968 7.54722581,3.20090323 7.54722581,4.58890323 L7.54722581,4.59612903M10.1385806,5.29819355 L8.444,6.99290323 L8.444,4.71522581 L8.44129032,4.58606452 C8.44129032,3.19896774 9.37341935,2.02954839 10.6454194,1.67019355 C11.2925161,2.82412903 11.1251613,4.3116129 10.1436129,5.29316129 L10.1385806,5.29819355"), r.attr({
    fill: "#446BA5",
    "stroke-width": "0"
  }), r.transform("T" + e + "," + i), r = t.path("M11.4548387,7.61677419 L9.05832258,7.61677419 L10.6689032,6.00619355 L10.7583226,5.91303226 C11.7390968,4.93212903 13.2251613,4.7643871 14.3787097,5.40967742 C14.0202581,6.68322581 12.8500645,7.61677419 11.4620645,7.61677419 L11.4548387,7.61677419"), r.attr({
    fill: "#FFF101",
    "stroke-width": "0"
  }), r.transform("T" + e + "," + i), r = t.path("M10.7470968,10.192 L9.05251613,8.49741935 L11.3301935,8.49741935 L11.4593548,8.49470968 C12.8464516,8.49483871 14.0157419,9.42696774 14.3752258,10.6989677 C13.2211613,11.3459355 11.7338065,11.1787097 10.752129,10.1970323 L10.7470968,10.192M8.43729032,11.5174194 L8.43729032,9.12090323 L10.047871,10.7314839 L10.1411613,10.8209032 C11.1219355,11.8018065 11.2896774,13.2876129 10.6443871,14.4412903 C9.37083871,14.0828387 8.43729032,12.9127742 8.43729032,11.5245161 L8.43729032,11.5174194M5.86193548,10.8296774 L7.55651613,9.13496774 L7.55651613,11.4126452 L7.55922581,11.5418065 C7.55922581,12.9289032 6.62709677,14.0983226 5.35509677,14.4578065 C4.708,13.3036129 4.87535484,11.8162581 5.85690323,10.8347097 L5.86193548,10.8296774M4.53251613,8.50993548 L6.92903226,8.50993548 L5.31845161,10.1205161 L5.22903226,10.2136774 C4.24812903,11.1945806 2.76219355,11.3623226 1.60851613,10.7170323 C1.96709677,9.44335484 3.13716129,8.50993548 4.52529032,8.50993548 L4.53251613,8.50993548"), r.attr({
    fill: "#45AB47",
    "stroke-width": "0"
  }), r.transform("T" + e + "," + i)
}

function _drawBoxPublishTaskIcon(t, e, i) {
  e += 2, i += 2;
  var r = t.image();
  r.attr({
    x: e
  }), r.attr({
    y: i
  }), r.attr({
    id: "image3398"
  }), r.attr({
    preserveAspectRatio: "none"
  }), r.attr({
    height: "16"
  }), r.attr({
    width: "17"
  }), r.attr({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAABmJLR0QA/wD/AP+gvaeTAAAACXBI WXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH3wQXDxwCFNe28AAACsdJREFUWMOVmGmMXtV5x3/POfe+ y2yeGc/mwbMZG9tDMGBTKC5GCU4pbYmSRlmowlIFJWnUprSiy4dI/UA/9EsVifZDmyZIxEpo1Cql UKICqbABG+x4X4M9iz2bxzOefXnfee+95zz9cN9Z7NqVeqSje3XPec/5n/Ns//8rAAd6xvj0lmYA VJWTI9fN2d5BikslrDEYY0ABIX0aUBUUUJS1TZB0HZSlUsz8fBHF09neKnFU0t964B5trcoqwA8O fsI3HtmW/u7Hx3p5+oHNqCr7DpzLX3dh1+xC4Z7p2dnGKE7UGmOsNTYFIuXtUlQqsgJkGSdrgBRL 8dLCYlRUUTa1NrYXiqWZjqb6q/vPDHz43S/vXHika0Phr984yUufv5/llfnJ0f473z9/7c+P9E8+ 3zdRCAuJR8SU1zUpBhFWL0BATAqhvIqIlCEIqK65JfDOIHgqpUT3HesW9mxreOWejfUvPfPrm6de fu8Sgary2sm+5v84NvT9d85P7Z1zhkwmTyZD+dSAKFI2jyAgqQEMkoJFQR1ZC1W5gMowxAgkzlOI HPMlh3ceFUtCjuPXtap3cuSFL9ybdKrq10RkMfi7Nz42g/P+2YP9i3sjm6E6a8snS0+ogBcwIki5 g2AkPXGAsqk+z/YNVWxuyLBxXZ66XIbQQimOmSgkDM9G9IwVODda5OpcEc0YYs3xbs/C73z39VMv Ai8FP/rlqG1vafjLGZenusKn121W7jr1TxFE0tsQI/iyibbVBTzZvZ6H22vY1lJDQ0WW27Vrs4uc G5vj/d453jw7yWQxomQqwiODs59T1X1yaHh+17dfPXxswuXAWlTBiCcbQmANiVOiRMBabGgJ8YiB xzqreW5nM/e31pALLKjiEXTVZW5oxnjAML2UcGJoin86PMbxy9Osr8n3/enu9q8HxVLcsCBVhLkM m+vgs1tquW9DDY1VGUJrSBLPeCHh+Ng8H12Z4+oiPHlXNd9+cANNFVkExTmHUvYVuCmg0+a9AVXW ZSyfvrORtroKXj6YZf/lJekfnzNB7EPfWak8/UgLj29dzzoLYRAgxiCSRoDz8FBHFc/c18CV2ZjN 9TmachY0wavBi8Gs2V3XRMvab6Lg1QHQWV/Jd/ZspCE3zPTEJHJqaPpJE9j/3Lo+g8Ou5AK95QWv 5gu5jS/oTUBuNc+veU4Xo/5LvUPPB1XJXKmtaQOJBy+G5Xwp3L7pmsXkFmM3g+Y2cwxQH0J3SwVB oF5iNXhA8MwWI2bmCzTWVJLPhssZ/fZgbtpJ1jirQpqHuPUcRfHe4zwYZy0JDu89onDw3AB/9f23 OdU/jqriVHH+f3fvFbyCu7FrecyV328eT+c4vDq8ehwCJiRQ9ah68EKMUIqU2FuKCTinGFG8rta7 /09bk+XT5Kg3FUgRvFdUlQA1OA9oeiPOe6JE8R7EeMQYAgSngHN4XWN5gdAYjKRm8gqJdxgVQptG W+I9qecp1gjGGiLn0nKhgvfg1BMYsXgVVD1GhSRRojiBQBgan2N4bIal2FNRmWFLWwP1VXmiOCaw lmKUcGHkOlOzi6gIrfXVbG5vpFhIOHplmNb6dWxsqsEliljPxGLCJ5eHufuuNirCEJzHe/B4AqVs V1VUDbFXPCH/fbSPn5c8Y9MFlhzks8qm5jy/vauL3Xd3cunqJG8e6uHc0CKzxRIiSktVhvs6a7l3 +0b+4d9PcO+2dp7bu536qiyJwr53z3Csd5pvSciD3R2oJqh6BJMC8d7jUcQrSRnUsb4ZjFvioe2t 1FXn6RuZ5YPTE4xMR4xMFjk7MMGBs9fobKzm4a2NJAkcPj/I5fEi50fnaaqv5t2TA7TUZXjqM3fz swOXOHB+nHwIHRvW45wDPIpHRctA1OMUrNG0dMdKpS3ywlceYEdHE3nxLMbCW0f6eW1/H+NjPRSi iIe33sFzn+2mqTbE43li9xb+9tX36BldYPeWOhpmS7x+qJ/J2QJHL00zO1/gxT94lLqqLN4nqfNq enADoF5RlEQdcaLMLSh7793KrrZGqoMAE+aorgj4zQc6aGsMGC0uEeQse3dtoLU5AyHYTEBbfZ4v fuY+xq8vMF8SvvToVqbmIn52ZJSe0SmeeqybHe1VpJGaRov3HlQxKCu5QhWcV6J4kfaWPCYTgkaI i1CvZMXQsq6G+SWhtrKC9ZWWRAOs8+ASrEvYvqGK+WKJycWYXXc1cc+mJuYWCmxsruOJnW3ENkS9 T3ORLqcEg1FNP3hVRIR8JsCZkMtjBeKlmIiQJbEk4lmMPSMTc+Airs8sMDnnMV6JsSQIkVF6xhZA IGOFU73XOXFpDGOy9A5e54MLw5jYk6zsCd4L6srZ22uaDb1Tupqr6Wqs4Y0PL3Cy9xoLhRgflZiZ KfLeyUGOX54jlw0Znlzg5ycG6RufphTHRMUSV8aK7Hv7LLlcnqxVXnnnIpE37OluoKaqgu/962nO DU0ABvW+nIU9Xj32j1/4sztNmH0mNY1j/boKioWYD341wcELw0wvRPSPFXj98BV+8ovztDXV8IXf 6MAay9tHB+i7OsvkfMzRnkl++NYZLo4ssq1jHQtFz/GeCb766Cb+5Ev3Uygucax3itN9E+zZ0UJF NkiTo+q0c8mbAWVeqmVfMVb53T2bSIzjv45d46f7L7EQRdRVV7Jz60Z+b3c7TzzYydm+KSozliMX J/no7AmMtWxsruTzezr5te1NvPTKIR75VCuf29NFzsJTj22l7+oivzh2hV8NTdF4d2vqqGXaKZcu Dz1uK6reiZYLFoKx6ZVdHJpm4FqBQqLUVgTc1VpDZ2sdLooIg4Dx2QIXBme5PlPEWENLXYYdXQ0k GA6dHqSjtZbu9lqS2GMtXJ4ocubSKA99qp3mKluWSaaf0tLzcrF/4PFMde07S7HDeY9XA+IRlMBa UmmTclH1CbEvs3hVjBGsTTWPR1Dv8c6hCJkgIFGfyohyBbTWYIwldh4rihXBCv2+VHw+ACFOkrI+ AVUHKB5wSZKWt7U0UFZ5qfdpkVzhHivVVSlG0YosWZayPnGIeIwIxhhCa7CizJWWMKoq10avYa1d ob5ry7X+HyzNAQkpZ7m5xC9vrrcYMyiBKNnQEEURx48fwyg6MHBlgFwuR2ADjLHp7SzTK13loemp pdxZUX6p8DJrWOqNXcQgRhBjMNZggpBcGOCimJ6+y766pt7Zjs3ds9bIsyC1dzTXpYuLsLyskbL2 Lj9FTDpuZGVsZW5ZKouk7+k/CZKaQiAwQmgt+UAIrGFgZJSPD//y9Lee/vL3gj0P7XRDV6/9zcGD B39obEBXexvWeJwX3HJNuNFJVo0jssJPV+XoKpsTkbJUNRj1ZeAGj/JJ/xAffvD+bPuGxn8TkUUB +MdX9mUix99fm5r7eldXV9jR3ka+IpdGg9eyxExt4ctJR8vMWVbASJmHKcYuy1NTHhdEPOphYXGR viuDjA4Nz9XlzasvfucPXwCQH+z7Kd949il6e3qCt97d/xdjUzNfyVTUbAyy2bwxqWwymBuqpV/z XMtlRTXVyUawYjDWrgDxeESdxHFpJi4sjqyvrXntxT/65ssAR06dSw/zzz/6F7753O8D8NHHR9rO nL+wZ2pqYl0cxyoIoqsm0LK49ehKKLNGp3gE1JRF+9qoU3JBIDVVuZGvffWLZ2oa7rgCcPLMBe7f 0c3/APbD8KaWhlC3AAAAAElFTkSuQmCC "
  })
}

function _drawGoogleDrivePublishTaskIcon(t, e, i) {
  e += 2, i += 2;
  var r = t.image();
  r.attr({
    x: e
  }), r.attr({
    y: i
  }), r.attr({
    id: "image3398"
  }), r.attr({
    preserveAspectRatio: "none"
  }), r.attr({
    height: "16"
  }), r.attr({
    width: "17"
  }), r.attr({
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIHSURBVDiNpVI7a1RREP7mzLl3d+9mScxaiBLFwohxQcXCwjwao/gqFAQhRGOphQgmgs9oGxaVgFhpYPUPGMFCCzEqCgETg0uK4CuFoLhZyWNf994zFrqy9xJWwQ+mOB8z33wzZ4D/BIWJppG+plstc+mjK9yttbzALHExcoDaRxdqeRUWcFkGBz7G1s152CCQ7dUAqNOLuZfqOmi439MmhifF86e6uLj4MFXoCuVXWPkp2vZkZlkHYvRNAJYwtz79oXdMLfFMSMD2Dd9YdoSGTO9hQLoBQBESQvLpUNaZD1sGsN8d390dFBjpiwooHVBW6tvXCr2H4EFo6LwR97pkj9h/BByWfgDrA4lRTWDvHIPOAihVaWO8txCkygu50wBAsbsnWpT2pwHEA/sgXC30Zq4BwJfHHRdY0R4nxp5mbFGEJIB5l2SjVtoMhYsBfC5EikPVh7Z4uFyqnKq43hoQFrXCIydCjZbWlyl+79gzCDprq1dPnnyhS8nNZDmvRVmbAIDhKyL5/e2kjKi4pbwxLQZniDAOgAHAybW90aXmncp2xoSsvdVDMWBAAi69sqsvqsLxzARB7vxaMHvJDwcTZCVeClnhIwqC5Pb08Kp3CgBUxT4PINc4u+u54uY8FLfXLQa+sx0dRNV2eXSi6OzryK2c7Wkl0msB5OuG0JVsOvnqL03+DT8BxkC5RkIpSlIAAAAASUVORK5CYII="
  })
}

function _drawRestCallTaskIcon(t, e, i) {
  var r = t.path("m 16.704699,5.9229055 q 0.358098,0 0.608767,0.2506681 0.250669,0.250668 0.250669,0.6087677 0,0.3580997 -0.250669,0.6087677 -0.250669,0.2506679 -0.608767,0.2506679 -0.358098,0 -0.608767,-0.2506679 -0.250669,-0.250668 -0.250669,-0.6087677 0,-0.3580997 0.250669,-0.6087677 0.250669,-0.2506681 0.608767,-0.2506681 z m 2.578308,-2.0053502 q -2.229162,0 -3.854034,0.6759125 -1.624871,0.6759067 -3.227361,2.2694472 -0.716197,0.725146 -1.575633,1.7457293 L 7.2329969,8.7876913 Q 7.0897576,8.8055849 7.000233,8.9309334 L 4.9948821,12.368677 q -0.035811,0.06267 -0.035811,0.143242 0,0.107426 0.080572,0.205905 l 0.5729577,0.572957 q 0.125334,0.116384 0.2864786,0.07162 l 2.4708789,-0.760963 2.5156417,2.515645 -0.76096,2.470876 q -0.009,0.02687 -0.009,0.08057 0,0.125338 0.08058,0.205905 l 0.572957,0.572958 q 0.170096,0.152194 0.349146,0.04476 l 3.437744,-2.005351 q 0.125335,-0.08953 0.143239,-0.232763 l 0.17905,-3.392986 q 1.02058,-0.859435 1.745729,-1.575629 1.67411,-1.6830612 2.309735,-3.2049805 0.635625,-1.5219191 0.635625,-3.8585111 0,-0.1253369 -0.08505,-0.2148575 -0.08505,-0.089526 -0.201431,-0.089526 z");
  r.attr({
    opacity: 1,
    stroke: "none",
    fill: "#bd4848"
  }), e += -2, i += -2, r.transform("T" + e + "," + i)
}

function _drawEventIcon(t, e) {
  e.eventDefinition && e.eventDefinition.type && ("timer" === e.eventDefinition.type ? _drawTimerIcon(t, e) : "error" === e.eventDefinition.type ? _drawErrorIcon(t, e) : "signal" === e.eventDefinition.type ? _drawSignalIcon(t, e) : "message" === e.eventDefinition.type && _drawMessageIcon(t, e))
}

function _drawTimerIcon(t, e) {
  var i = e.x + e.width / 2,
    r = e.y + e.height / 2,
    n = t.circle(i, r, 10);
  n.attr({
    "stroke-width": 1,
    stroke: "black",
    fill: "none"
  });
  var s = t.path("M 10 0 C 4.4771525 0 0 4.4771525 0 10 C 0 15.522847 4.4771525 20 10 20 C 15.522847 20 20 15.522847 20 10 C 20 4.4771525 15.522847 1.1842379e-15 10 0 z M 9.09375 1.03125 C 9.2292164 1.0174926 9.362825 1.0389311 9.5 1.03125 L 9.5 3.5 L 10.5 3.5 L 10.5 1.03125 C 15.063526 1.2867831 18.713217 4.9364738 18.96875 9.5 L 16.5 9.5 L 16.5 10.5 L 18.96875 10.5 C 18.713217 15.063526 15.063526 18.713217 10.5 18.96875 L 10.5 16.5 L 9.5 16.5 L 9.5 18.96875 C 4.9364738 18.713217 1.2867831 15.063526 1.03125 10.5 L 3.5 10.5 L 3.5 9.5 L 1.03125 9.5 C 1.279102 5.0736488 4.7225326 1.4751713 9.09375 1.03125 z M 9.5 5 L 9.5 8.0625 C 8.6373007 8.2844627 8 9.0680195 8 10 C 8 11.104569 8.8954305 12 10 12 C 10.931981 12 11.715537 11.362699 11.9375 10.5 L 14 10.5 L 14 9.5 L 11.9375 9.5 C 11.756642 8.7970599 11.20294 8.2433585 10.5 8.0625 L 10.5 5 L 9.5 5 z");
  return s.attr({
    stroke: "none",
    fill: "#585858"
  }), s.transform("T" + (e.x + 5) + "," + (e.y + 5)), s
}

function _drawErrorIcon(t, e) {
  var i = t.path("M 22.820839,11.171502 L 19.36734,24.58992 L 13.54138,14.281819 L 9.3386512,20.071607 L 13.048949,6.8323057 L 18.996148,16.132659 L 22.820839,11.171502 z"),
    r = "none",
    n = e.x - 1,
    s = e.y - 1;
  return "EndEvent" === e.type && (r = "black", n -= 1, s -= 1), i.attr({
    stroke: "black",
    "stroke-width": 1,
    fill: r
  }), i.transform("T" + n + "," + s), i
}

function _drawSignalIcon(t, e) {
  var i = "none";
  "ThrowEvent" === e.type && (i = "black");
  var r = t.path("M 8.7124971,21.247342 L 23.333334,21.247342 L 16.022915,8.5759512 L 8.7124971,21.247342 z");
  return r.attr({
    stroke: "black",
    "stroke-width": 1,
    fill: i
  }), r.transform("T" + (e.x - 1) + "," + (e.y - 1)), r
}

function _drawMessageIcon(t, e) {
  var i = t.path("M 1 3 L 9 11 L 17 3 L 1 3 z M 1 5 L 1 13 L 5 9 L 1 5 z M 17 5 L 13 9 L 17 13 L 17 5 z M 6 10 L 1 15 L 17 15 L 12 10 L 9 13 L 6 10 z");
  return i.attr({
    stroke: "none",
    "stroke-width": 1,
    fill: "#585858"
  }), i.transform("T" + (e.x + 6) + "," + (e.y + 6)), i
}

function Anchor(t, e, i, r) {
  this.uuid = t, this.x = i, this.y = r, this.type = e == ANCHOR_TYPE.middle ? ANCHOR_TYPE.middle : ANCHOR_TYPE.main
}

function Polyline(t, e, i, r) {
  this.points = e, this.path = [], this.anchors = [], i && (this.strokeWidth = i), this.paper = r, this.closePath = !1, this.init()
}

function Polygone(t, e) {
  this.points = t, this.path = [], this.anchors = [], e && (this.strokeWidth = e), this.closePath = !0, this.init()
}

function _showTip(t, e) {
  var i = void 0;
  if (customActivityToolTips && (i = customActivityToolTips[e.name] ? customActivityToolTips[e.name] : customActivityToolTips[e.id] ? customActivityToolTips[e.id] : ""), void 0 === i) {
    var i = "";
    if (e.name && e.name.length > 0 && (i += "<b>Name</b>: <i>" + e.name + "</i><br/><br/>"), e.properties)
      for (var r = 0; e.properties.length > r; r++) {
        var n = e.properties[r].name;
        if (e.properties[r].type && "list" === e.properties[r].type) {
          i += "<b>" + n + "</b>:<br/>";
          for (var s = 0; e.properties[r].value.length > s; s++) i += "<i>" + e.properties[r].value[s] + "</i><br/>"
        } else i += "<b>" + n + "</b>: <i>" + e.properties[r].value + "</i><br/>"
      }
  }
  var o = e.type + " ";
  o += e.name && e.name.length > 0 ? e.name : e.id, t.qtip({
    content: {
      text: i,
      title: {
        text: o
      }
    },
    position: {
      my: "top left",
      at: "bottom center",
      viewport: jQuery("#bpmnModel")
    },
    hide: {
      fixed: !0,
      delay: 500,
      event: "click mouseleave"
    },
    style: {
      classes: "ui-tooltip-kisbpm-bpmn"
    }
  })
}

function _addHoverLogic(t, e, i) {
  var r = _bpmnGetColor(t, i),
    n = null;
  if ("rect" === e) n = paper.rect(t.x, t.y, t.width, t.height);
  else if ("circle" === e) {
    var s = t.x + t.width / 2,
      o = t.y + t.height / 2;
    n = paper.circle(s, o, 15)
  } else "rhombus" === e && (n = paper.path("M" + t.x + " " + (t.y + t.height / 2) + "L" + (t.x + t.width / 2) + " " + (t.y + t.height) + "L" + (t.x + t.width) + " " + (t.y + t.height / 2) + "L" + (t.x + t.width / 2) + " " + t.y + "z"));
  var a = 0,
    l = "#ffffff";
  jQuery.inArray(t.id, elementsAdded) >= 0 && (a = .2, l = "green"), jQuery.inArray(t.id, elementsRemoved) >= 0 && (a = .2, l = "red"), n.attr({
    opacity: a,
    stroke: "none",
    fill: l
  }), _showTip(jQuery(n.node), t), n.mouseover(function() {
    paper.getById(t.id).attr({
      stroke: HOVER_COLOR
    })
  }), n.mouseout(function() {
    paper.getById(t.id).attr({
      stroke: r
    })
  })
}

function _zoom(t) {
  var e, i;
  t ? (e = canvasWidth * (1 / .9), i = canvasHeight * (1 / .9)) : (e = canvasWidth * (1 / 1.1), i = canvasHeight * (1 / 1.1)), (e != canvasWidth || i != canvasHeight) && (canvasWidth = e, canvasHeight = i, paper.setSize(canvasWidth, canvasHeight))
}! function(t, e, i) {
  ! function(t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : jQuery && !jQuery.fn.qtip && t(jQuery)
  }(function(r) {
    "use strict";

    function n(t, e, i, n) {
      this.id = i, this.target = t, this.tooltip = B, this.elements = {
        target: t
      }, this._id = W + "-" + i, this.timers = {
        img: {}
      }, this.options = e, this.plugins = {}, this.cache = {
        event: {},
        target: r(),
        disabled: S,
        attr: n,
        onTooltip: S,
        lastClass: ""
      }, this.rendered = this.destroyed = this.disabled = this.waiting = this.hiddenDuringWait = this.positioning = this.triggering = S
    }

    function s(t) {
      return t === B || "object" !== r.type(t)
    }

    function o(t) {
      return !(r.isFunction(t) || t && t.attr || t.length || "object" === r.type(t) && (t.jquery || t.then))
    }

    function a(t) {
      var e, i, n, a;
      return s(t) ? S : (s(t.metadata) && (t.metadata = {
        type: t.metadata
      }), "content" in t && (e = t.content, s(e) || e.jquery || e.done ? e = t.content = {
        text: i = o(e) ? S : e
      } : i = e.text, "ajax" in e && (n = e.ajax, a = n && n.once !== S, delete e.ajax, e.text = function(t, e) {
        var s = i || r(this).attr(e.options.content.attr) || "Loading...",
          o = r.ajax(r.extend({}, n, {
              context: e
            })).then(n.success, B, n.error).then(function(t) {
            return t && a && e.set("content.text", t), t
          }, function(t, i, r) {
            e.destroyed || 0 === t.status || e.set("content.text", i + ": " + r)
          });
        return a ? s : (e.set("content.text", s), o)
      }), "title" in e && (s(e.title) || (e.button = e.title.button, e.title = e.title.text), o(e.title || S) && (e.title = S))), "position" in t && s(t.position) && (t.position = {
        my: t.position,
        at: t.position
      }), "show" in t && s(t.show) && (t.show = t.show.jquery ? {
        target: t.show
      } : t.show === O ? {
        ready: O
      } : {
        event: t.show
      }), "hide" in t && s(t.hide) && (t.hide = t.hide.jquery ? {
        target: t.hide
      } : {
        event: t.hide
      }), "style" in t && s(t.style) && (t.style = {
        classes: t.style
      }), r.each(D, function() {
        this.sanitize && this.sanitize(t)
      }), t)
    }

    function l(t, e) {
      for (var i, r = 0, n = t, s = e.split("."); n = n[s[r++]];) s.length > r && (i = n);
      return [i || t, s.pop()]
    }

    function h(t, e) {
      var i, r, n;
      for (i in this.checks)
        for (r in this.checks[i])(n = RegExp(r, "i").exec(t)) && (e.push(n), ("builtin" === i || this.plugins[i]) && this.checks[i][r].apply(this.plugins[i] || this, e))
    }

    function c(t) {
      return X.concat("").join(t ? "-" + t + " " : " ")
    }

    function u(i) {
      return i && {
        type: i.type,
        pageX: i.pageX,
        pageY: i.pageY,
        target: i.target,
        relatedTarget: i.relatedTarget,
        scrollX: i.scrollX || t.pageXOffset || e.body.scrollLeft || e.documentElement.scrollLeft,
        scrollY: i.scrollY || t.pageYOffset || e.body.scrollTop || e.documentElement.scrollTop
      } || {}
    }

    function d(t, e) {
      return e > 0 ? setTimeout(r.proxy(t, this), e) : (t.call(this), void 0)
    }

    function p(t) {
      return this.tooltip.hasClass(te) ? S : (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this.timers.show = d.call(this, function() {
        this.toggle(O, t)
      }, this.options.show.delay), void 0)
    }

    function f(t) {
      if (this.tooltip.hasClass(te)) return S;
      var e = r(t.relatedTarget),
        i = e.closest(K)[0] === this.tooltip[0],
        n = e[0] === this.options.show.target[0];
      if (clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this !== e[0] && "mouse" === this.options.position.target && i || this.options.hide.fixed && /mouse(out|leave|move)/.test(t.type) && (i || n)) try {
        t.preventDefault(), t.stopImmediatePropagation()
      } catch (s) {} else this.timers.hide = d.call(this, function() {
        this.toggle(S, t)
      }, this.options.hide.delay, this)
    }

    function g(t) {
      return this.tooltip.hasClass(te) || !this.options.hide.inactive ? S : (clearTimeout(this.timers.inactive), this.timers.inactive = d.call(this, function() {
        this.hide(t)
      }, this.options.hide.inactive), void 0)
    }

    function v(t) {
      this.rendered && this.tooltip[0].offsetWidth > 0 && this.reposition(t)
    }

    function m(t, i, n) {
      r(e.body).delegate(t, (i.split ? i : i.join(ae + " ")) + ae, function() {
        var t = T.api[r.attr(this, G)];
        t && !t.disabled && n.apply(t, arguments)
      })
    }

    function y(t, i, s) {
      var o, l, h, c, u, d = r(e.body),
        p = t[0] === e ? d : t,
        f = t.metadata ? t.metadata(s.metadata) : B,
        g = "html5" === s.metadata.type && f ? f[s.metadata.name] : B,
        v = t.data(s.metadata.name || "qtipopts");
      try {
        v = "string" == typeof v ? r.parseJSON(v) : v
      } catch (m) {}
      if (c = r.extend(O, {}, T.defaults, s, "object" == typeof v ? a(v) : B, a(g || f)), l = c.position, c.id = i, "boolean" == typeof c.content.text) {
        if (h = t.attr(c.content.attr), c.content.attr === S || !h) return S;
        c.content.text = h
      }
      if (l.container.length || (l.container = d), l.target === S && (l.target = p), c.show.target === S && (c.show.target = p), c.show.solo === O && (c.show.solo = l.container.closest("body")), c.hide.target === S && (c.hide.target = p), c.position.viewport === O && (c.position.viewport = l.container), l.container = l.container.eq(0), l.at = new L(l.at, O), l.my = new L(l.my), t.data(W))
        if (c.overwrite) t.qtip("destroy", !0);
        else if (c.overwrite === S) return S;
      return t.attr(Y, i), c.suppress && (u = t.attr("title")) && t.removeAttr("title").attr(ie, u).attr("title", ""), o = new n(t, c, i, !!h), t.data(W, o), t.one("remove.qtip-" + i + " removeqtip.qtip-" + i, function() {
        var t;
        (t = r(this).data(W)) && t.destroy(!0)
      }), o
    }

    function x(t) {
      return t.charAt(0).toUpperCase() + t.slice(1)
    }

    function b(t, e) {
      var r, n, s = e.charAt(0).toUpperCase() + e.slice(1),
        o = (e + " " + ye.join(s + " ") + s).split(" "),
        a = 0;
      if (me[e]) return t.css(me[e]);
      for (; r = o[a++];)
        if ((n = t.css(r)) !== i) return me[e] = r, n
    }

    function _(t, e) {
      return Math.ceil(parseFloat(b(t, e)))
    }

    function w(t, e) {
      this._ns = "tip", this.options = e, this.offset = e.offset, this.size = [e.width, e.height], this.init(this.qtip = t)
    }

    function C(t, e) {
      this.options = e, this._ns = "-modal", this.init(this.qtip = t)
    }
    var T, A, L, k, I, O = !0,
      S = !1,
      B = null,
      E = "x",
      R = "y",
      M = "width",
      N = "height",
      z = "top",
      q = "left",
      P = "bottom",
      F = "right",
      H = "center",
      j = "flipinvert",
      V = "shift",
      D = {},
      W = "qtip",
      Y = "data-hasqtip",
      G = "data-qtip-id",
      X = ["ui-widget", "ui-tooltip"],
      K = "." + W,
      U = "click dblclick mousedown mouseup mousemove mouseleave mouseenter".split(" "),
      J = W + "-fixed",
      Q = W + "-default",
      Z = W + "-focus",
      $ = W + "-hover",
      te = W + "-disabled",
      ee = "_replacedByqTip",
      ie = "oldtitle",
      re = {
        ie: function() {
          for (var t = 3, i = e.createElement("div");
               (i.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->") && i.getElementsByTagName("i")[0];);
          return t > 4 ? t : 0 / 0
        }(),
        iOS: parseFloat(("" + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")) || S
      };
    A = n.prototype, A._when = function(t) {
      return r.when.apply(r, t)
    }, A.render = function(t) {
      if (this.rendered || this.destroyed) return this;
      var e, i = this,
        n = this.options,
        s = this.cache,
        o = this.elements,
        a = n.content.text,
        l = n.content.title,
        h = n.content.button,
        c = n.position,
        u = ("." + this._id + " ", []);
      return r.attr(this.target[0], "aria-describedby", this._id), this.tooltip = o.tooltip = e = r("<div/>", {
        id: this._id,
        "class": [W, Q, n.style.classes, W + "-pos-" + n.position.my.abbrev()].join(" "),
        width: n.style.width || "",
        height: n.style.height || "",
        tracking: "mouse" === c.target && c.adjust.mouse,
        role: "alert",
        "aria-live": "polite",
        "aria-atomic": S,
        "aria-describedby": this._id + "-content",
        "aria-hidden": O
      }).toggleClass(te, this.disabled).attr(G, this.id).data(W, this).appendTo(c.container).append(o.content = r("<div />", {
          "class": W + "-content",
          id: this._id + "-content",
          "aria-atomic": O
        })), this.rendered = -1, this.positioning = O, l && (this._createTitle(), r.isFunction(l) || u.push(this._updateTitle(l, S))), h && this._createButton(), r.isFunction(a) || u.push(this._updateContent(a, S)), this.rendered = O, this._setWidget(), r.each(D, function(t) {
        var e;
        "render" === this.initialize && (e = this(i)) && (i.plugins[t] = e)
      }), this._unassignEvents(), this._assignEvents(), this._when(u).then(function() {
        i._trigger("render"), i.positioning = S, i.hiddenDuringWait || !n.show.ready && !t || i.toggle(O, s.event, S), i.hiddenDuringWait = S
      }), T.api[this.id] = this, this
    }, A.destroy = function(t) {
      function e() {
        if (!this.destroyed) {
          this.destroyed = O;
          var t = this.target,
            e = t.attr(ie);
          this.rendered && this.tooltip.stop(1, 0).find("*").remove().end().remove(), r.each(this.plugins, function() {
            this.destroy && this.destroy()
          }), clearTimeout(this.timers.show), clearTimeout(this.timers.hide), this._unassignEvents(), t.removeData(W).removeAttr(G).removeAttr(Y).removeAttr("aria-describedby"), this.options.suppress && e && t.attr("title", e).removeAttr(ie), this._unbind(t), this.options = this.elements = this.cache = this.timers = this.plugins = this.mouse = B, delete T.api[this.id]
        }
      }
      return this.destroyed ? this.target : (t === O && "hide" !== this.triggering || !this.rendered ? e.call(this) : (this.tooltip.one("tooltiphidden", r.proxy(e, this)), !this.triggering && this.hide()), this.target)
    }, k = A.checks = {
      builtin: {
        "^id$": function(t, e, i, n) {
          var s = i === O ? T.nextid : i,
            o = W + "-" + s;
          s !== S && s.length > 0 && !r("#" + o).length ? (this._id = o, this.rendered && (this.tooltip[0].id = this._id, this.elements.content[0].id = this._id + "-content", this.elements.title[0].id = this._id + "-title")) : t[e] = n
        },
        "^prerender": function(t, e, i) {
          i && !this.rendered && this.render(this.options.show.ready)
        },
        "^content.text$": function(t, e, i) {
          this._updateContent(i)
        },
        "^content.attr$": function(t, e, i, r) {
          this.options.content.text === this.target.attr(r) && this._updateContent(this.target.attr(i))
        },
        "^content.title$": function(t, e, i) {
          return i ? (i && !this.elements.title && this._createTitle(), this._updateTitle(i), void 0) : this._removeTitle()
        },
        "^content.button$": function(t, e, i) {
          this._updateButton(i)
        },
        "^content.title.(text|button)$": function(t, e, i) {
          this.set("content." + e, i)
        },
        "^position.(my|at)$": function(t, e, i) {
          "string" == typeof i && (t[e] = new L(i, "at" === e))
        },
        "^position.container$": function(t, e, i) {
          this.rendered && this.tooltip.appendTo(i)
        },
        "^show.ready$": function(t, e, i) {
          i && (!this.rendered && this.render(O) || this.toggle(O))
        },
        "^style.classes$": function(t, e, i, r) {
          this.rendered && this.tooltip.removeClass(r).addClass(i)
        },
        "^style.(width|height)": function(t, e, i) {
          this.rendered && this.tooltip.css(e, i)
        },
        "^style.widget|content.title": function() {
          this.rendered && this._setWidget()
        },
        "^style.def": function(t, e, i) {
          this.rendered && this.tooltip.toggleClass(Q, !!i)
        },
        "^events.(render|show|move|hide|focus|blur)$": function(t, e, i) {
          this.rendered && this.tooltip[(r.isFunction(i) ? "" : "un") + "bind"]("tooltip" + e, i)
        },
        "^(show|hide|position).(event|target|fixed|inactive|leave|distance|viewport|adjust)": function() {
          if (this.rendered) {
            var t = this.options.position;
            this.tooltip.attr("tracking", "mouse" === t.target && t.adjust.mouse), this._unassignEvents(), this._assignEvents()
          }
        }
      }
    }, A.get = function(t) {
      if (this.destroyed) return this;
      var e = l(this.options, t.toLowerCase()),
        i = e[0][e[1]];
      return i.precedance ? i.string() : i
    };
    var ne = /^position\.(my|at|adjust|target|container|viewport)|style|content|show\.ready/i,
      se = /^prerender|show\.ready/i;
    A.set = function(t, e) {
      if (this.destroyed) return this;
      var i, n = this.rendered,
        s = S,
        o = this.options;
      return this.checks, "string" == typeof t ? (i = t, t = {}, t[i] = e) : t = r.extend({}, t), r.each(t, function(e, i) {
        if (n && se.test(e)) return delete t[e], void 0;
        var a, h = l(o, e.toLowerCase());
        a = h[0][h[1]], h[0][h[1]] = i && i.nodeType ? r(i) : i, s = ne.test(e) || s, t[e] = [h[0], h[1], i, a]
      }), a(o), this.positioning = O, r.each(t, r.proxy(h, this)), this.positioning = S, this.rendered && this.tooltip[0].offsetWidth > 0 && s && this.reposition("mouse" === o.position.target ? B : this.cache.event), this
    }, A._update = function(t, e) {
      var i = this,
        n = this.cache;
      return this.rendered && t ? (r.isFunction(t) && (t = t.call(this.elements.target, n.event, this) || ""), r.isFunction(t.then) ? (n.waiting = O, t.then(function(t) {
        return n.waiting = S, i._update(t, e)
      }, B, function(t) {
        return i._update(t, e)
      })) : t === S || !t && "" !== t ? S : (t.jquery && t.length > 0 ? e.empty().append(t.css({
        display: "block",
        visibility: "visible"
      })) : e.html(t), this._waitForContent(e).then(function(t) {
        t.images && t.images.length && i.rendered && i.tooltip[0].offsetWidth > 0 && i.reposition(n.event, !t.length)
      }))) : S
    }, A._waitForContent = function(t) {
      var e = this.cache;
      return e.waiting = O, (r.fn.imagesLoaded ? t.imagesLoaded() : r.Deferred().resolve([])).done(function() {
        e.waiting = S
      }).promise()
    }, A._updateContent = function(t, e) {
      this._update(t, this.elements.content, e)
    }, A._updateTitle = function(t, e) {
      this._update(t, this.elements.title, e) === S && this._removeTitle(S)
    }, A._createTitle = function() {
      var t = this.elements,
        e = this._id + "-title";
      t.titlebar && this._removeTitle(), t.titlebar = r("<div />", {
        "class": W + "-titlebar " + (this.options.style.widget ? c("header") : "")
      }).append(t.title = r("<div />", {
          id: e,
          "class": W + "-title",
          "aria-atomic": O
        })).insertBefore(t.content).delegate(".qtip-close", "mousedown keydown mouseup keyup mouseout", function(t) {
        r(this).toggleClass("ui-state-active ui-state-focus", "down" === t.type.substr(-4))
      }).delegate(".qtip-close", "mouseover mouseout", function(t) {
        r(this).toggleClass("ui-state-hover", "mouseover" === t.type)
      }), this.options.content.button && this._createButton()
    }, A._removeTitle = function(t) {
      var e = this.elements;
      e.title && (e.titlebar.remove(), e.titlebar = e.title = e.button = B, t !== S && this.reposition())
    }, A.reposition = function(i, n) {
      if (!this.rendered || this.positioning || this.destroyed) return this;
      this.positioning = O;
      var s, o, a = this.cache,
        l = this.tooltip,
        h = this.options.position,
        c = h.target,
        u = h.my,
        d = h.at,
        p = h.viewport,
        f = h.container,
        g = h.adjust,
        v = g.method.split(" "),
        m = l.outerWidth(S),
        y = l.outerHeight(S),
        x = 0,
        b = 0,
        _ = l.css("position"),
        w = {
          left: 0,
          top: 0
        },
        C = l[0].offsetWidth > 0,
        T = i && "scroll" === i.type,
        A = r(t),
        L = f[0].ownerDocument,
        k = this.mouse;
      if (r.isArray(c) && 2 === c.length) d = {
        x: q,
        y: z
      }, w = {
        left: c[0],
        top: c[1]
      };
      else if ("mouse" === c) d = {
        x: q,
        y: z
      }, !k || !k.pageX || !g.mouse && i && i.pageX ? i && i.pageX || ((!g.mouse || this.options.show.distance) && a.origin && a.origin.pageX ? i = a.origin : (!i || i && ("resize" === i.type || "scroll" === i.type)) && (i = a.event)) : i = k, "static" !== _ && (w = f.offset()), L.body.offsetWidth !== (t.innerWidth || L.documentElement.clientWidth) && (o = r(e.body).offset()), w = {
        left: i.pageX - w.left + (o && o.left || 0),
        top: i.pageY - w.top + (o && o.top || 0)
      }, g.mouse && T && k && (w.left -= (k.scrollX || 0) - A.scrollLeft(), w.top -= (k.scrollY || 0) - A.scrollTop());
      else {
        if ("event" === c ? i && i.target && "scroll" !== i.type && "resize" !== i.type ? a.target = r(i.target) : i.target || (a.target = this.elements.target) : "event" !== c && (a.target = r(c.jquery ? c : this.elements.target)), c = a.target, c = r(c).eq(0), 0 === c.length) return this;
        c[0] === e || c[0] === t ? (x = re.iOS ? t.innerWidth : c.width(), b = re.iOS ? t.innerHeight : c.height(), c[0] === t && (w = {
          top: (p || c).scrollTop(),
          left: (p || c).scrollLeft()
        })) : D.imagemap && c.is("area") ? s = D.imagemap(this, c, d, D.viewport ? v : S) : D.svg && c && c[0].ownerSVGElement ? s = D.svg(this, c, d, D.viewport ? v : S) : (x = c.outerWidth(S), b = c.outerHeight(S), w = c.offset()), s && (x = s.width, b = s.height, o = s.offset, w = s.position), w = this.reposition.offset(c, w, f), (re.iOS > 3.1 && 4.1 > re.iOS || re.iOS >= 4.3 && 4.33 > re.iOS || !re.iOS && "fixed" === _) && (w.left -= A.scrollLeft(), w.top -= A.scrollTop()), (!s || s && s.adjustable !== S) && (w.left += d.x === F ? x : d.x === H ? x / 2 : 0, w.top += d.y === P ? b : d.y === H ? b / 2 : 0)
      }
      return w.left += g.x + (u.x === F ? -m : u.x === H ? -m / 2 : 0), w.top += g.y + (u.y === P ? -y : u.y === H ? -y / 2 : 0), D.viewport ? (w.adjusted = D.viewport(this, w, h, x, b, m, y), o && w.adjusted.left && (w.left += o.left), o && w.adjusted.top && (w.top += o.top)) : w.adjusted = {
        left: 0,
        top: 0
      }, this._trigger("move", [w, p.elem || p], i) ? (delete w.adjusted, n === S || !C || isNaN(w.left) || isNaN(w.top) || "mouse" === c || !r.isFunction(h.effect) ? l.css(w) : r.isFunction(h.effect) && (h.effect.call(l, this, r.extend({}, w)), l.queue(function(t) {
        r(this).css({
          opacity: "",
          height: ""
        }), re.ie && this.style.removeAttribute("filter"), t()
      })), this.positioning = S, this) : this
    }, A.reposition.offset = function(t, i, n) {
      function s(t, e) {
        i.left += e * t.scrollLeft(), i.top += e * t.scrollTop()
      }
      if (!n[0]) return i;
      var o, a, l, h, c = r(t[0].ownerDocument),
        u = !!re.ie && "CSS1Compat" !== e.compatMode,
        d = n[0];
      do "static" !== (a = r.css(d, "position")) && ("fixed" === a ? (l = d.getBoundingClientRect(), s(c, -1)) : (l = r(d).position(), l.left += parseFloat(r.css(d, "borderLeftWidth")) || 0, l.top += parseFloat(r.css(d, "borderTopWidth")) || 0), i.left -= l.left + (parseFloat(r.css(d, "marginLeft")) || 0), i.top -= l.top + (parseFloat(r.css(d, "marginTop")) || 0), o || "hidden" === (h = r.css(d, "overflow")) || "visible" === h || (o = r(d))); while (d = d.offsetParent);
      return o && (o[0] !== c[0] || u) && s(o, 1), i
    };
    var oe = (L = A.reposition.Corner = function(t, e) {
      t = ("" + t).replace(/([A-Z])/, " $1").replace(/middle/gi, H).toLowerCase(), this.x = (t.match(/left|right/i) || t.match(/center/) || ["inherit"])[0].toLowerCase(), this.y = (t.match(/top|bottom|center/i) || ["inherit"])[0].toLowerCase(), this.forceY = !!e;
      var i = t.charAt(0);
      this.precedance = "t" === i || "b" === i ? R : E
    }).prototype;
    oe.invert = function(t, e) {
      this[t] = this[t] === q ? F : this[t] === F ? q : e || this[t]
    }, oe.string = function() {
      var t = this.x,
        e = this.y;
      return t === e ? t : this.precedance === R || this.forceY && "center" !== e ? e + " " + t : t + " " + e
    }, oe.abbrev = function() {
      var t = this.string().split(" ");
      return t[0].charAt(0) + (t[1] && t[1].charAt(0) || "")
    }, oe.clone = function() {
      return new L(this.string(), this.forceY)
    }, A.toggle = function(t, i) {
      var n = this.cache,
        s = this.options,
        o = this.tooltip;
      if (i) {
        if (/over|enter/.test(i.type) && /out|leave/.test(n.event.type) && s.show.target.add(i.target).length === s.show.target.length && o.has(i.relatedTarget).length) return this;
        n.event = u(i)
      }
      if (this.waiting && !t && (this.hiddenDuringWait = O), !this.rendered) return t ? this.render(1) : this;
      if (this.destroyed || this.disabled) return this;
      var a, l, h, c = t ? "show" : "hide",
        d = this.options[c],
        p = (this.options[t ? "hide" : "show"], this.options.position),
        f = this.options.content,
        g = this.tooltip.css("width"),
        v = this.tooltip.is(":visible"),
        m = t || 1 === d.target.length,
        y = !i || 2 > d.target.length || n.target[0] === i.target;
      return (typeof t).search("boolean|number") && (t = !v), a = !o.is(":animated") && v === t && y, l = a ? B : !!this._trigger(c, [90]), this.destroyed ? this : (l !== S && t && this.focus(i), !l || a ? this : (r.attr(o[0], "aria-hidden", !t), t ? (n.origin = u(this.mouse), r.isFunction(f.text) && this._updateContent(f.text, S), r.isFunction(f.title) && this._updateTitle(f.title, S), !I && "mouse" === p.target && p.adjust.mouse && (r(e).bind("mousemove." + W, this._storeMouse), I = O), g || o.css("width", o.outerWidth(S)), this.reposition(i, arguments[2]), g || o.css("width", ""), d.solo && ("string" == typeof d.solo ? r(d.solo) : r(K, d.solo)).not(o).not(d.target).qtip("hide", r.Event("tooltipsolo"))) : (clearTimeout(this.timers.show), delete n.origin, I && !r(K + '[tracking="true"]:visible', d.solo).not(o).length && (r(e).unbind("mousemove." + W), I = S), this.blur(i)), h = r.proxy(function() {
        t ? (re.ie && o[0].style.removeAttribute("filter"), o.css("overflow", ""), "string" == typeof d.autofocus && r(this.options.show.autofocus, o).focus(), this.options.show.target.trigger("qtip-" + this.id + "-inactive")) : o.css({
          display: "",
          visibility: "",
          opacity: "",
          left: "",
          top: ""
        }), this._trigger(t ? "visible" : "hidden")
      }, this), d.effect === S || m === S ? (o[c](), h()) : r.isFunction(d.effect) ? (o.stop(1, 1), d.effect.call(o, this), o.queue("fx", function(t) {
        h(), t()
      })) : o.fadeTo(90, t ? 1 : 0, h), t && d.target.trigger("qtip-" + this.id + "-inactive"), this))
    }, A.show = function(t) {
      return this.toggle(O, t)
    }, A.hide = function(t) {
      return this.toggle(S, t)
    }, A.focus = function(t) {
      if (!this.rendered || this.destroyed) return this;
      var e = r(K),
        i = this.tooltip,
        n = parseInt(i[0].style.zIndex, 10),
        s = T.zindex + e.length;
      return i.hasClass(Z) || this._trigger("focus", [s], t) && (n !== s && (e.each(function() {
        this.style.zIndex > n && (this.style.zIndex = this.style.zIndex - 1)
      }), e.filter("." + Z).qtip("blur", t)), i.addClass(Z)[0].style.zIndex = s), this
    }, A.blur = function(t) {
      return !this.rendered || this.destroyed ? this : (this.tooltip.removeClass(Z), this._trigger("blur", [this.tooltip.css("zIndex")], t), this)
    }, A.disable = function(t) {
      return this.destroyed ? this : ("toggle" === t ? t = !(this.rendered ? this.tooltip.hasClass(te) : this.disabled) : "boolean" != typeof t && (t = O), this.rendered && this.tooltip.toggleClass(te, t).attr("aria-disabled", t), this.disabled = !!t, this)
    }, A.enable = function() {
      return this.disable(S)
    }, A._createButton = function() {
      var t = this,
        e = this.elements,
        i = e.tooltip,
        n = this.options.content.button,
        s = "string" == typeof n,
        o = s ? n : "Close tooltip";
      e.button && e.button.remove(), e.button = n.jquery ? n : r("<a />", {
        "class": "qtip-close " + (this.options.style.widget ? "" : W + "-icon"),
        title: o,
        "aria-label": o
      }).prepend(r("<span />", {
          "class": "ui-icon ui-icon-close",
          html: "&times;"
        })), e.button.appendTo(e.titlebar || i).attr("role", "button").click(function(e) {
        return i.hasClass(te) || t.hide(e), S
      })
    }, A._updateButton = function(t) {
      if (!this.rendered) return S;
      var e = this.elements.button;
      t ? this._createButton() : e.remove()
    }, A._setWidget = function() {
      var t = this.options.style.widget,
        e = this.elements,
        i = e.tooltip,
        r = i.hasClass(te);
      i.removeClass(te), te = t ? "ui-state-disabled" : "qtip-disabled", i.toggleClass(te, r), i.toggleClass("ui-helper-reset " + c(), t).toggleClass(Q, this.options.style.def && !t), e.content && e.content.toggleClass(c("content"), t), e.titlebar && e.titlebar.toggleClass(c("header"), t), e.button && e.button.toggleClass(W + "-icon", !t)
    }, A._storeMouse = function(t) {
      (this.mouse = u(t)).type = "mousemove"
    }, A._bind = function(t, e, i, n, s) {
      var o = "." + this._id + (n ? "-" + n : "");
      e.length && r(t).bind((e.split ? e : e.join(o + " ")) + o, r.proxy(i, s || this))
    }, A._unbind = function(t, e) {
      r(t).unbind("." + this._id + (e ? "-" + e : ""))
    };
    var ae = "." + W;
    r(function() {
      m(K, ["mouseenter", "mouseleave"], function(t) {
        var e = "mouseenter" === t.type,
          i = r(t.currentTarget),
          n = r(t.relatedTarget || t.target),
          s = this.options;
        e ? (this.focus(t), i.hasClass(J) && !i.hasClass(te) && clearTimeout(this.timers.hide)) : "mouse" === s.position.target && s.hide.event && s.show.target && !n.closest(s.show.target[0]).length && this.hide(t), i.toggleClass($, e)
      }), m("[" + G + "]", U, g)
    }), A._trigger = function(t, e, i) {
      var n = r.Event("tooltip" + t);
      return n.originalEvent = i && r.extend({}, i) || this.cache.event || B, this.triggering = t, this.tooltip.trigger(n, [this].concat(e || [])), this.triggering = S, !n.isDefaultPrevented()
    }, A._bindEvents = function(t, e, i, n, s, o) {
      if (n.add(i).length === n.length) {
        var a = [];
        e = r.map(e, function(e) {
          var i = r.inArray(e, t);
          return i > -1 ? (a.push(t.splice(i, 1)[0]), void 0) : e
        }), a.length && this._bind(i, a, function(t) {
          var e = this.rendered ? this.tooltip[0].offsetWidth > 0 : !1;
          (e ? o : s).call(this, t)
        })
      }
      this._bind(i, t, s), this._bind(n, e, o)
    }, A._assignInitialEvents = function(t) {
      function e(t) {
        return this.disabled || this.destroyed ? S : (this.cache.event = u(t), this.cache.target = t ? r(t.target) : [i], clearTimeout(this.timers.show), this.timers.show = d.call(this, function() {
          this.render("object" == typeof t || n.show.ready)
        }, n.show.delay), void 0)
      }
      var n = this.options,
        s = n.show.target,
        o = n.hide.target,
        a = n.show.event ? r.trim("" + n.show.event).split(" ") : [],
        l = n.hide.event ? r.trim("" + n.hide.event).split(" ") : [];
      /mouse(over|enter)/i.test(n.show.event) && !/mouse(out|leave)/i.test(n.hide.event) && l.push("mouseleave"), this._bind(s, "mousemove", function(t) {
        this._storeMouse(t), this.cache.onTarget = O
      }), this._bindEvents(a, l, s, o, e, function() {
        clearTimeout(this.timers.show)
      }), (n.show.ready || n.prerender) && e.call(this, t)
    }, A._assignEvents = function() {
      var i = this,
        n = this.options,
        s = n.position,
        o = this.tooltip,
        a = n.show.target,
        l = n.hide.target,
        h = s.container,
        c = s.viewport,
        u = r(e),
        d = (r(e.body), r(t)),
        m = n.show.event ? r.trim("" + n.show.event).split(" ") : [],
        y = n.hide.event ? r.trim("" + n.hide.event).split(" ") : [];
      r.each(n.events, function(t, e) {
        i._bind(o, "toggle" === t ? ["tooltipshow", "tooltiphide"] : ["tooltip" + t], e, null, o)
      }), /mouse(out|leave)/i.test(n.hide.event) && "window" === n.hide.leave && this._bind(u, ["mouseout", "blur"], function(t) {
        /select|option/.test(t.target.nodeName) || t.relatedTarget || this.hide(t)
      }), n.hide.fixed ? l = l.add(o.addClass(J)) : /mouse(over|enter)/i.test(n.show.event) && this._bind(l, "mouseleave", function() {
        clearTimeout(this.timers.show)
      }), ("" + n.hide.event).indexOf("unfocus") > -1 && this._bind(h.closest("html"), ["mousedown", "touchstart"], function(t) {
        var e = r(t.target),
          i = this.rendered && !this.tooltip.hasClass(te) && this.tooltip[0].offsetWidth > 0,
          n = e.parents(K).filter(this.tooltip[0]).length > 0;
        e[0] === this.target[0] || e[0] === this.tooltip[0] || n || this.target.has(e[0]).length || !i || this.hide(t)
      }), "number" == typeof n.hide.inactive && (this._bind(a, "qtip-" + this.id + "-inactive", g), this._bind(l.add(o), T.inactiveEvents, g, "-inactive")), this._bindEvents(m, y, a, l, p, f), this._bind(a.add(o), "mousemove", function(t) {
        if ("number" == typeof n.hide.distance) {
          var e = this.cache.origin || {},
            i = this.options.hide.distance,
            r = Math.abs;
          (r(t.pageX - e.pageX) >= i || r(t.pageY - e.pageY) >= i) && this.hide(t)
        }
        this._storeMouse(t)
      }), "mouse" === s.target && s.adjust.mouse && (n.hide.event && this._bind(a, ["mouseenter", "mouseleave"], function(t) {
        this.cache.onTarget = "mouseenter" === t.type
      }), this._bind(u, "mousemove", function(t) {
        this.rendered && this.cache.onTarget && !this.tooltip.hasClass(te) && this.tooltip[0].offsetWidth > 0 && this.reposition(t)
      })), (s.adjust.resize || c.length) && this._bind(r.event.special.resize ? c : d, "resize", v), s.adjust.scroll && this._bind(d.add(s.container), "scroll", v)
    }, A._unassignEvents = function() {
      var i = [this.options.show.target[0], this.options.hide.target[0], this.rendered && this.tooltip[0], this.options.position.container[0], this.options.position.viewport[0], this.options.position.container.closest("html")[0], t, e];
      this._unbind(r([]).pushStack(r.grep(i, function(t) {
        return "object" == typeof t
      })))
    }, T = r.fn.qtip = function(t, e, n) {
      var s = ("" + t).toLowerCase(),
        o = B,
        l = r.makeArray(arguments).slice(1),
        h = l[l.length - 1],
        c = this[0] ? r.data(this[0], W) : B;
      return !arguments.length && c || "api" === s ? c : "string" == typeof t ? (this.each(function() {
        var t = r.data(this, W);
        if (!t) return O;
        if (h && h.timeStamp && (t.cache.event = h), !e || "option" !== s && "options" !== s) t[s] && t[s].apply(t, l);
        else {
          if (n === i && !r.isPlainObject(e)) return o = t.get(e), S;
          t.set(e, n)
        }
      }), o !== B ? o : this) : "object" != typeof t && arguments.length ? void 0 : (c = a(r.extend(O, {}, t)), this.each(function(t) {
        var e, i;
        return i = r.isArray(c.id) ? c.id[t] : c.id, i = !i || i === S || 1 > i.length || T.api[i] ? T.nextid++ : i, e = y(r(this), i, c), e === S ? O : (T.api[i] = e, r.each(D, function() {
          "initialize" === this.initialize && this(e)
        }), e._assignInitialEvents(h), void 0)
      }))
    }, r.qtip = n, T.api = {}, r.each({
      attr: function(t, e) {
        if (this.length) {
          var i = this[0],
            n = "title",
            s = r.data(i, "qtip");
          if (t === n && s && "object" == typeof s && s.options.suppress) return 2 > arguments.length ? r.attr(i, ie) : (s && s.options.content.attr === n && s.cache.attr && s.set("content.text", e), this.attr(ie, e))
        }
        return r.fn["attr" + ee].apply(this, arguments)
      },
      clone: function(t) {
        var e = (r([]), r.fn["clone" + ee].apply(this, arguments));
        return t || e.filter("[" + ie + "]").attr("title", function() {
          return r.attr(this, ie)
        }).removeAttr(ie), e
      }
    }, function(t, e) {
      if (!e || r.fn[t + ee]) return O;
      var i = r.fn[t + ee] = r.fn[t];
      r.fn[t] = function() {
        return e.apply(this, arguments) || i.apply(this, arguments)
      }
    }), r.ui || (r["cleanData" + ee] = r.cleanData, r.cleanData = function(t) {
      for (var e, i = 0;
           (e = r(t[i])).length; i++)
        if (e.attr(Y)) try {
          e.triggerHandler("removeqtip")
        } catch (n) {}
      r["cleanData" + ee].apply(this, arguments)
    }), T.version = "2.2.0", T.nextid = 0, T.inactiveEvents = U, T.zindex = 15e3, T.defaults = {
      prerender: S,
      id: S,
      overwrite: O,
      suppress: O,
      content: {
        text: O,
        attr: "title",
        title: S,
        button: S
      },
      position: {
        my: "top left",
        at: "bottom right",
        target: S,
        container: S,
        viewport: S,
        adjust: {
          x: 0,
          y: 0,
          mouse: O,
          scroll: O,
          resize: O,
          method: "flipinvert flipinvert"
        },
        effect: function(t, e) {
          r(this).animate(e, {
            duration: 200,
            queue: S
          })
        }
      },
      show: {
        target: S,
        event: "mouseenter",
        effect: O,
        delay: 90,
        solo: S,
        ready: S,
        autofocus: S
      },
      hide: {
        target: S,
        event: "mouseleave",
        effect: O,
        delay: 0,
        fixed: S,
        inactive: S,
        leave: "window",
        distance: S
      },
      style: {
        classes: "",
        widget: S,
        width: S,
        height: S,
        def: O
      },
      events: {
        render: B,
        move: B,
        show: B,
        hide: B,
        toggle: B,
        visible: B,
        hidden: B,
        focus: B,
        blur: B
      }
    };
    var le, he = "margin",
      ce = "border",
      ue = "color",
      de = "background-color",
      pe = "transparent",
      fe = " !important",
      ge = !!e.createElement("canvas").getContext,
      ve = /rgba?\(0, 0, 0(, 0)?\)|transparent|#123456/i,
      me = {},
      ye = ["Webkit", "O", "Moz", "ms"];
    if (ge) var xe = t.devicePixelRatio || 1,
      be = function() {
        var t = e.createElement("canvas").getContext("2d");
        return t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || 1
      }(),
      _e = xe / be;
    else var we = function(t, e, i) {
      return "<qtipvml:" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="qtip-vml" ' + (e || "") + ' style="behavior: url(#default#VML); ' + (i || "") + '" />'
    };
    r.extend(w.prototype, {
      init: function(t) {
        var e, i;
        i = this.element = t.elements.tip = r("<div />", {
          "class": W + "-tip"
        }).prependTo(t.tooltip), ge ? (e = r("<canvas />").appendTo(this.element)[0].getContext("2d"), e.lineJoin = "miter", e.miterLimit = 1e5, e.save()) : (e = we("shape", 'coordorigin="0,0"', "position:absolute;"), this.element.html(e + e), t._bind(r("*", i).add(i), ["click", "mousedown"], function(t) {
          t.stopPropagation()
        }, this._ns)), t._bind(t.tooltip, "tooltipmove", this.reposition, this._ns, this), this.create()
      },
      _swapDimensions: function() {
        this.size[0] = this.options.height, this.size[1] = this.options.width
      },
      _resetDimensions: function() {
        this.size[0] = this.options.width, this.size[1] = this.options.height
      },
      _useTitle: function(t) {
        var e = this.qtip.elements.titlebar;
        return e && (t.y === z || t.y === H && this.element.position().top + this.size[1] / 2 + this.options.offset < e.outerHeight(O))
      },
      _parseCorner: function(t) {
        var e = this.qtip.options.position.my;
        return t === S || e === S ? t = S : t === O ? t = new L(e.string()) : t.string || (t = new L(t), t.fixed = O), t
      },
      _parseWidth: function(t, e, i) {
        var r = this.qtip.elements,
          n = ce + x(e) + "Width";
        return (i ? _(i, n) : _(r.content, n) || _(this._useTitle(t) && r.titlebar || r.content, n) || _(r.tooltip, n)) || 0
      },
      _parseRadius: function(t) {
        var e = this.qtip.elements,
          i = ce + x(t.y) + x(t.x) + "Radius";
        return 9 > re.ie ? 0 : _(this._useTitle(t) && e.titlebar || e.content, i) || _(e.tooltip, i) || 0
      },
      _invalidColour: function(t, e, i) {
        var r = t.css(e);
        return !r || i && r === t.css(i) || ve.test(r) ? S : r
      },
      _parseColours: function(t) {
        var e = this.qtip.elements,
          i = this.element.css("cssText", ""),
          n = ce + x(t[t.precedance]) + x(ue),
          s = this._useTitle(t) && e.titlebar || e.content,
          o = this._invalidColour,
          a = [];
        return a[0] = o(i, de) || o(s, de) || o(e.content, de) || o(e.tooltip, de) || i.css(de), a[1] = o(i, n, ue) || o(s, n, ue) || o(e.content, n, ue) || o(e.tooltip, n, ue) || e.tooltip.css(n), r("*", i).add(i).css("cssText", de + ":" + pe + fe + ";" + ce + ":0" + fe + ";"), a
      },
      _calculateSize: function(t) {
        var e, i, r, n = t.precedance === R,
          s = this.options.width,
          o = this.options.height,
          a = "c" === t.abbrev(),
          l = (n ? s : o) * (a ? .5 : 1),
          h = Math.pow,
          c = Math.round,
          u = Math.sqrt(h(l, 2) + h(o, 2)),
          d = [this.border / l * u, this.border / o * u];
        return d[2] = Math.sqrt(h(d[0], 2) - h(this.border, 2)), d[3] = Math.sqrt(h(d[1], 2) - h(this.border, 2)), e = u + d[2] + d[3] + (a ? 0 : d[0]), i = e / u, r = [c(i * s), c(i * o)], n ? r : r.reverse()
      },
      _calculateTip: function(t, e, i) {
        i = i || 1, e = e || this.size;
        var r = e[0] * i,
          n = e[1] * i,
          s = Math.ceil(r / 2),
          o = Math.ceil(n / 2),
          a = {
            br: [0, 0, r, n, r, 0],
            bl: [0, 0, r, 0, 0, n],
            tr: [0, n, r, 0, r, n],
            tl: [0, 0, 0, n, r, n],
            tc: [0, n, s, 0, r, n],
            bc: [0, 0, r, 0, s, n],
            rc: [0, 0, r, o, 0, n],
            lc: [r, 0, r, n, 0, o]
          };
        return a.lt = a.br, a.rt = a.bl, a.lb = a.tr, a.rb = a.tl, a[t.abbrev()]
      },
      _drawCoords: function(t, e) {
        t.beginPath(), t.moveTo(e[0], e[1]), t.lineTo(e[2], e[3]), t.lineTo(e[4], e[5]), t.closePath()
      },
      create: function() {
        var t = this.corner = (ge || re.ie) && this._parseCorner(this.options.corner);
        return (this.enabled = !!this.corner && "c" !== this.corner.abbrev()) && (this.qtip.cache.corner = t.clone(), this.update()), this.element.toggle(this.enabled), this.corner
      },
      update: function(e, i) {
        if (!this.enabled) return this;
        var n, s, o, a, l, h, c, u, d = this.qtip.elements,
          p = this.element,
          f = p.children(),
          g = this.options,
          v = this.size,
          m = g.mimic,
          y = Math.round;
        e || (e = this.qtip.cache.corner || this.corner), m === S ? m = e : (m = new L(m), m.precedance = e.precedance, "inherit" === m.x ? m.x = e.x : "inherit" === m.y ? m.y = e.y : m.x === m.y && (m[e.precedance] = e[e.precedance])), s = m.precedance, e.precedance === E ? this._swapDimensions() : this._resetDimensions(), n = this.color = this._parseColours(e), n[1] !== pe ? (u = this.border = this._parseWidth(e, e[e.precedance]), g.border && 1 > u && !ve.test(n[1]) && (n[0] = n[1]), this.border = u = g.border !== O ? g.border : u) : this.border = u = 0, c = this.size = this._calculateSize(e), p.css({
          width: c[0],
          height: c[1],
          lineHeight: c[1] + "px"
        }), h = e.precedance === R ? [y(m.x === q ? u : m.x === F ? c[0] - v[0] - u : (c[0] - v[0]) / 2), y(m.y === z ? c[1] - v[1] : 0)] : [y(m.x === q ? c[0] - v[0] : 0), y(m.y === z ? u : m.y === P ? c[1] - v[1] - u : (c[1] - v[1]) / 2)], ge ? (o = f[0].getContext("2d"), o.restore(), o.save(), o.clearRect(0, 0, 6e3, 6e3), a = this._calculateTip(m, v, _e), l = this._calculateTip(m, this.size, _e), f.attr(M, c[0] * _e).attr(N, c[1] * _e), f.css(M, c[0]).css(N, c[1]), this._drawCoords(o, l), o.fillStyle = n[1], o.fill(), o.translate(h[0] * _e, h[1] * _e), this._drawCoords(o, a), o.fillStyle = n[0], o.fill()) : (a = this._calculateTip(m), a = "m" + a[0] + "," + a[1] + " l" + a[2] + "," + a[3] + " " + a[4] + "," + a[5] + " xe", h[2] = u && /^(r|b)/i.test(e.string()) ? 8 === re.ie ? 2 : 1 : 0, f.css({
          coordsize: c[0] + u + " " + (c[1] + u),
          antialias: "" + (m.string().indexOf(H) > -1),
          left: h[0] - h[2] * Number(s === E),
          top: h[1] - h[2] * Number(s === R),
          width: c[0] + u,
          height: c[1] + u
        }).each(function(t) {
          var e = r(this);
          e[e.prop ? "prop" : "attr"]({
            coordsize: c[0] + u + " " + (c[1] + u),
            path: a,
            fillcolor: n[0],
            filled: !!t,
            stroked: !t
          }).toggle(!(!u && !t)), !t && e.html(we("stroke", 'weight="' + 2 * u + 'px" color="' + n[1] + '" miterlimit="1000" joinstyle="miter"'))
        })), t.opera && setTimeout(function() {
          d.tip.css({
            display: "inline-block",
            visibility: "visible"
          })
        }, 1), i !== S && this.calculate(e, c)
      },
      calculate: function(t, e) {
        if (!this.enabled) return S;
        var i, n, s = this,
          o = this.qtip.elements,
          a = this.element,
          l = this.options.offset,
          h = (o.tooltip.hasClass("ui-widget"), {});
        return t = t || this.corner, i = t.precedance, e = e || this._calculateSize(t), n = [t.x, t.y], i === E && n.reverse(), r.each(n, function(r, n) {
          var a, c, u;
          n === H ? (a = i === R ? q : z, h[a] = "50%", h[he + "-" + a] = -Math.round(e[i === R ? 0 : 1] / 2) + l) : (a = s._parseWidth(t, n, o.tooltip), c = s._parseWidth(t, n, o.content), u = s._parseRadius(t), h[n] = Math.max(-s.border, r ? c : l + (u > a ? u : -a)))
        }), h[t[i]] -= e[i === E ? 0 : 1], a.css({
          margin: "",
          top: "",
          bottom: "",
          left: "",
          right: ""
        }).css(h), h
      },
      reposition: function(t, e, r) {
        function n(t, e, i, r, n) {
          t === V && h.precedance === e && c[r] && h[i] !== H ? h.precedance = h.precedance === E ? R : E : t !== V && c[r] && (h[e] = h[e] === H ? c[r] > 0 ? r : n : h[e] === r ? n : r)
        }

        function s(t, e, n) {
          h[t] === H ? g[he + "-" + e] = f[t] = o[he + "-" + e] - c[e] : (a = o[n] !== i ? [c[e], -o[e]] : [-c[e], o[e]], (f[t] = Math.max(a[0], a[1])) > a[0] && (r[e] -= c[e], f[e] = S), g[o[n] !== i ? n : e] = f[t])
        }
        if (this.enabled) {
          var o, a, l = e.cache,
            h = this.corner.clone(),
            c = r.adjusted,
            u = e.options.position.adjust.method.split(" "),
            d = u[0],
            p = u[1] || u[0],
            f = {
              left: S,
              top: S,
              x: 0,
              y: 0
            },
            g = {};
          this.corner.fixed !== O && (n(d, E, R, q, F), n(p, R, E, z, P), h.string() === l.corner.string() || l.cornerTop === c.top && l.cornerLeft === c.left || this.update(h, S)), o = this.calculate(h), o.right !== i && (o.left = -o.right), o.bottom !== i && (o.top = -o.bottom), o.user = this.offset, (f.left = d === V && !!c.left) && s(E, q, F), (f.top = p === V && !!c.top) && s(R, z, P), this.element.css(g).toggle(!(f.x && f.y || h.x === H && f.y || h.y === H && f.x)), r.left -= o.left.charAt ? o.user : d !== V || f.top || !f.left && !f.top ? o.left + this.border : 0, r.top -= o.top.charAt ? o.user : p !== V || f.left || !f.left && !f.top ? o.top + this.border : 0, l.cornerLeft = c.left, l.cornerTop = c.top, l.corner = h.clone()
        }
      },
      destroy: function() {
        this.qtip._unbind(this.qtip.tooltip, this._ns), this.qtip.elements.tip && this.qtip.elements.tip.find("*").remove().end().remove()
      }
    }), le = D.tip = function(t) {
      return new w(t, t.options.style.tip)
    }, le.initialize = "render", le.sanitize = function(t) {
      if (t.style && "tip" in t.style) {
        var e = t.style.tip;
        "object" != typeof e && (e = t.style.tip = {
          corner: e
        }), /string|boolean/i.test(typeof e.corner) || (e.corner = O)
      }
    }, k.tip = {
      "^position.my|style.tip.(corner|mimic|border)$": function() {
        this.create(), this.qtip.reposition()
      },
      "^style.tip.(height|width)$": function(t) {
        this.size = [t.width, t.height], this.update(), this.qtip.reposition()
      },
      "^content.title|style.(classes|widget)$": function() {
        this.update()
      }
    }, r.extend(O, T.defaults, {
      style: {
        tip: {
          corner: O,
          mimic: S,
          width: 6,
          height: 6,
          border: O,
          offset: 0
        }
      }
    }), D.viewport = function(i, r, n, s, o, a, l) {
      function h(t, e, i, n, s, o, a, l, h) {
        var c = r[s],
          d = _[t],
          x = w[t],
          b = i === V,
          C = d === s ? h : d === o ? -h : -h / 2,
          T = x === s ? l : x === o ? -l : -l / 2,
          A = m[s] + y[s] - (f ? 0 : p[s]),
          L = A - c,
          k = c + h - (a === M ? g : v) - A,
          I = C - (_.precedance === t || d === _[e] ? T : 0) - (x === H ? l / 2 : 0);
        return b ? (I = (d === s ? 1 : -1) * C, r[s] += L > 0 ? L : k > 0 ? -k : 0, r[s] = Math.max(-p[s] + y[s], c - I, Math.min(Math.max(-p[s] + y[s] + (a === M ? g : v), c + I), r[s], "center" === d ? c - C : 1e9))) : (n *= i === j ? 2 : 0, L > 0 && (d !== s || k > 0) ? (r[s] -= I + n, u.invert(t, s)) : k > 0 && (d !== o || L > 0) && (r[s] -= (d === H ? -I : I) + n, u.invert(t, o)), m > r[s] && -r[s] > k && (r[s] = c, u = _.clone())), r[s] - c
      }
      var c, u, d, p, f, g, v, m, y, x = n.target,
        b = i.elements.tooltip,
        _ = n.my,
        w = n.at,
        C = n.adjust,
        T = C.method.split(" "),
        A = T[0],
        L = T[1] || T[0],
        k = n.viewport,
        I = n.container,
        O = i.cache,
        B = {
          left: 0,
          top: 0
        };
      return k.jquery && x[0] !== t && x[0] !== e.body && "none" !== C.method ? (p = I.offset() || B, f = "static" === I.css("position"), c = "fixed" === b.css("position"), g = k[0] === t ? k.width() : k.outerWidth(S), v = k[0] === t ? k.height() : k.outerHeight(S), m = {
        left: c ? 0 : k.scrollLeft(),
        top: c ? 0 : k.scrollTop()
      }, y = k.offset() || B, ("shift" !== A || "shift" !== L) && (u = _.clone()), B = {
        left: "none" !== A ? h(E, R, A, C.x, q, F, M, s, a) : 0,
        top: "none" !== L ? h(R, E, L, C.y, z, P, N, o, l) : 0
      }, u && O.lastClass !== (d = W + "-pos-" + u.abbrev()) && b.removeClass(i.cache.lastClass).addClass(i.cache.lastClass = d), B) : B
    }, D.polys = {
      polygon: function(t, e) {
        var i, r, n, s = {
            width: 0,
            height: 0,
            position: {
              top: 1e10,
              right: 0,
              bottom: 0,
              left: 1e10
            },
            adjustable: S
          },
          o = 0,
          a = [],
          l = 1,
          h = 1,
          c = 0,
          u = 0;
        for (o = t.length; o--;) i = [parseInt(t[--o], 10), parseInt(t[o + 1], 10)], i[0] > s.position.right && (s.position.right = i[0]), i[0] < s.position.left && (s.position.left = i[0]), i[1] > s.position.bottom && (s.position.bottom = i[1]), i[1] < s.position.top && (s.position.top = i[1]), a.push(i);
        if (r = s.width = Math.abs(s.position.right - s.position.left), n = s.height = Math.abs(s.position.bottom - s.position.top), "c" === e.abbrev()) s.position = {
          left: s.position.left + s.width / 2,
          top: s.position.top + s.height / 2
        };
        else {
          for (; r > 0 && n > 0 && l > 0 && h > 0;)
            for (r = Math.floor(r / 2), n = Math.floor(n / 2), e.x === q ? l = r : e.x === F ? l = s.width - r : l += Math.floor(r / 2), e.y === z ? h = n : e.y === P ? h = s.height - n : h += Math.floor(n / 2), o = a.length; o-- && !(2 > a.length);) c = a[o][0] - s.position.left, u = a[o][1] - s.position.top, (e.x === q && c >= l || e.x === F && l >= c || e.x === H && (l > c || c > s.width - l) || e.y === z && u >= h || e.y === P && h >= u || e.y === H && (h > u || u > s.height - h)) && a.splice(o, 1);
          s.position = {
            left: a[0][0],
            top: a[0][1]
          }
        }
        return s
      },
      rect: function(t, e, i, r) {
        return {
          width: Math.abs(i - t),
          height: Math.abs(r - e),
          position: {
            left: Math.min(t, i),
            top: Math.min(e, r)
          }
        }
      },
      _angles: {
        tc: 1.5,
        tr: 7 / 4,
        tl: 5 / 4,
        bc: .5,
        br: .25,
        bl: .75,
        rc: 2,
        lc: 1,
        c: 0
      },
      ellipse: function(t, e, i, r, n) {
        var s = D.polys._angles[n.abbrev()],
          o = 0 === s ? 0 : i * Math.cos(s * Math.PI),
          a = r * Math.sin(s * Math.PI);
        return {
          width: 2 * i - Math.abs(o),
          height: 2 * r - Math.abs(a),
          position: {
            left: t + o,
            top: e + a
          },
          adjustable: S
        }
      },
      circle: function(t, e, i, r) {
        return D.polys.ellipse(t, e, i, i, r)
      }
    }, D.svg = function(t, i, n) {
      for (var s, o, a, l, h, c, u, d, p, f, g, v = r(e), m = i[0], y = r(m.ownerSVGElement), x = 1, b = 1, _ = !0; !m.getBBox;) m = m.parentNode;
      if (!m.getBBox || !m.parentNode) return S;
      s = y.attr("width") || y.width() || parseInt(y.css("width"), 10), o = y.attr("height") || y.height() || parseInt(y.css("height"), 10);
      var w = (parseInt(i.css("stroke-width"), 10) || 0) / 2;
      switch (w && (x += w / s, b += w / o), m.nodeName) {
        case "ellipse":
        case "circle":
          f = D.polys.ellipse(m.cx.baseVal.value, m.cy.baseVal.value, (m.rx || m.r).baseVal.value + w, (m.ry || m.r).baseVal.value + w, n);
          break;
        case "line":
        case "polygon":
        case "polyline":
          for (p = m.points || [{
            x: m.x1.baseVal.value,
            y: m.y1.baseVal.value
          }, {
            x: m.x2.baseVal.value,
            y: m.y2.baseVal.value
          }], f = [], d = -1, c = p.numberOfItems || p.length; c > ++d;) u = p.getItem ? p.getItem(d) : p[d], f.push.apply(f, [u.x, u.y]);
          f = D.polys.polygon(f, n);
          break;
        default:
          f = m.getBoundingClientRect(), f = {
            width: f.width,
            height: f.height,
            position: {
              left: f.left,
              top: f.top
            }
          }, _ = !1
      }
      return g = f.position, y = y[0], _ && (y.createSVGPoint && (a = m.getScreenCTM(), p = y.createSVGPoint(), p.x = g.left, p.y = g.top, l = p.matrixTransform(a), g.left = l.x, g.top = l.y), y.viewBox && (h = y.viewBox.baseVal) && h.width && h.height && (x *= s / h.width, b *= o / h.height)), g.left += v.scrollLeft(), g.top += v.scrollTop(), f
    };
    var Ce, Te, Ae = "qtip-modal",
      Le = "." + Ae;
    Te = function() {
      function t(t) {
        if (r.expr[":"].focusable) return r.expr[":"].focusable;
        var e, i, n, s = !isNaN(r.attr(t, "tabindex")),
          o = t.nodeName && t.nodeName.toLowerCase();
        return "area" === o ? (e = t.parentNode, i = e.name, t.href && i && "map" === e.nodeName.toLowerCase() ? (n = r("img[usemap=#" + i + "]")[0], !!n && n.is(":visible")) : !1) : /input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || s : s
      }

      function i(t) {
        1 > c.length && t.length ? t.not("body").blur() : c.first().focus()
      }

      function n(t) {
        if (l.is(":visible")) {
          var e, n = r(t.target),
            a = s.tooltip,
            h = n.closest(K);
          e = 1 > h.length ? S : parseInt(h[0].style.zIndex, 10) > parseInt(a[0].style.zIndex, 10), e || n.closest(K)[0] === a[0] || i(n), o = t.target === c[c.length - 1]
        }
      }
      var s, o, a, l, h = this,
        c = {};
      r.extend(h, {
        init: function() {
          return l = h.elem = r("<div />", {
            id: "qtip-overlay",
            html: "<div></div>",
            mousedown: function() {
              return S
            }
          }).hide(), r(e.body).bind("focusin" + Le, n), r(e).bind("keydown" + Le, function(t) {
            s && s.options.show.modal.escape && 27 === t.keyCode && s.hide(t)
          }), l.bind("click" + Le, function(t) {
            s && s.options.show.modal.blur && s.hide(t)
          }), h
        },
        update: function(e) {
          s = e, c = e.options.show.modal.stealfocus !== S ? e.tooltip.find("*").filter(function() {
            return t(this)
          }) : []
        },
        toggle: function(t, n, o) {
          var c = (r(e.body), t.tooltip),
            u = t.options.show.modal,
            d = u.effect,
            p = n ? "show" : "hide",
            f = l.is(":visible"),
            g = r(Le).filter(":visible:not(:animated)").not(c);
          return h.update(t), n && u.stealfocus !== S && i(r(":focus")), l.toggleClass("blurs", u.blur), n && l.appendTo(e.body), l.is(":animated") && f === n && a !== S || !n && g.length ? h : (l.stop(O, S), r.isFunction(d) ? d.call(l, n) : d === S ? l[p]() : l.fadeTo(parseInt(o, 10) || 90, n ? 1 : 0, function() {
            n || l.hide()
          }), n || l.queue(function(t) {
            l.css({
              left: "",
              top: ""
            }), r(Le).length || l.detach(), t()
          }), a = n, s.destroyed && (s = B), h)
        }
      }), h.init()
    }, Te = new Te, r.extend(C.prototype, {
      init: function(t) {
        var e = t.tooltip;
        return this.options.on ? (t.elements.overlay = Te.elem, e.addClass(Ae).css("z-index", T.modal_zindex + r(Le).length), t._bind(e, ["tooltipshow", "tooltiphide"], function(t, i, n) {
          var s = t.originalEvent;
          if (t.target === e[0])
            if (s && "tooltiphide" === t.type && /mouse(leave|enter)/.test(s.type) && r(s.relatedTarget).closest(Te.elem[0]).length) try {
              t.preventDefault()
            } catch (o) {} else(!s || s && "tooltipsolo" !== s.type) && this.toggle(t, "tooltipshow" === t.type, n)
        }, this._ns, this), t._bind(e, "tooltipfocus", function(t, i) {
          if (!t.isDefaultPrevented() && t.target === e[0]) {
            var n = r(Le),
              s = T.modal_zindex + n.length,
              o = parseInt(e[0].style.zIndex, 10);
            Te.elem[0].style.zIndex = s - 1, n.each(function() {
              this.style.zIndex > o && (this.style.zIndex -= 1)
            }), n.filter("." + Z).qtip("blur", t.originalEvent), e.addClass(Z)[0].style.zIndex = s, Te.update(i);
            try {
              t.preventDefault()
            } catch (a) {}
          }
        }, this._ns, this), t._bind(e, "tooltiphide", function(t) {
          t.target === e[0] && r(Le).filter(":visible").not(e).last().qtip("focus", t)
        }, this._ns, this), void 0) : this
      },
      toggle: function(t, e, i) {
        return t && t.isDefaultPrevented() ? this : (Te.toggle(this.qtip, !!e, i), void 0)
      },
      destroy: function() {
        this.qtip.tooltip.removeClass(Ae), this.qtip._unbind(this.qtip.tooltip, this._ns), Te.toggle(this.qtip, S), delete this.qtip.elements.overlay
      }
    }), Ce = D.modal = function(t) {
      return new C(t, t.options.show.modal)
    }, Ce.sanitize = function(t) {
      t.show && ("object" != typeof t.show.modal ? t.show.modal = {
        on: !!t.show.modal
      } : t.show.modal.on === void 0 && (t.show.modal.on = O))
    }, T.modal_zindex = T.zindex - 200, Ce.initialize = "render", k.modal = {
      "^show.modal.(on|blur)$": function() {
        this.destroy(), this.init(), this.qtip.elems.overlay.toggle(this.qtip.tooltip[0].offsetWidth > 0)
      }
    }, r.extend(O, T.defaults, {
      show: {
        modal: {
          on: S,
          effect: O,
          blur: O,
          stealfocus: O,
          escape: O
        }
      }
    })
  })
}(window, document),
  function(t) {
    var e, i, r = "0.4.2",
      n = "hasOwnProperty",
      s = /[\.\/]/,
      o = "*",
      a = function() {},
      l = function(t, e) {
        return t - e
      },
      h = {
        n: {}
      },
      c = function(t, r) {
        t += "";
        var n, s = i,
          o = Array.prototype.slice.call(arguments, 2),
          a = c.listeners(t),
          h = 0,
          u = [],
          d = {},
          p = [],
          f = e;
        e = t, i = 0;
        for (var g = 0, v = a.length; v > g; g++) "zIndex" in a[g] && (u.push(a[g].zIndex), 0 > a[g].zIndex && (d[a[g].zIndex] = a[g]));
        for (u.sort(l); 0 > u[h];)
          if (n = d[u[h++]], p.push(n.apply(r, o)), i) return i = s, p;
        for (g = 0; v > g; g++)
          if (n = a[g], "zIndex" in n)
            if (n.zIndex == u[h]) {
              if (p.push(n.apply(r, o)), i) break;
              do
                if (h++, n = d[u[h]], n && p.push(n.apply(r, o)), i) break;
              while (n)
            } else d[n.zIndex] = n;
          else if (p.push(n.apply(r, o)), i) break;
        return i = s, e = f, p.length ? p : null
      };
    c._events = h, c.listeners = function(t) {
      var e, i, r, n, a, l, c, u, d = t.split(s),
        p = h,
        f = [p],
        g = [];
      for (n = 0, a = d.length; a > n; n++) {
        for (u = [], l = 0, c = f.length; c > l; l++)
          for (p = f[l].n, i = [p[d[n]], p[o]], r = 2; r--;) e = i[r], e && (u.push(e), g = g.concat(e.f || []));
        f = u
      }
      return g
    }, c.on = function(t, e) {
      if (t += "", "function" != typeof e) return function() {};
      for (var i = t.split(s), r = h, n = 0, o = i.length; o > n; n++) r = r.n, r = r.hasOwnProperty(i[n]) && r[i[n]] || (r[i[n]] = {
        n: {}
      });
      for (r.f = r.f || [], n = 0, o = r.f.length; o > n; n++)
        if (r.f[n] == e) return a;
      return r.f.push(e),
        function(t) {
          +t == +t && (e.zIndex = +t)
        }
    }, c.f = function(t) {
      var e = [].slice.call(arguments, 1);
      return function() {
        c.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
      }
    }, c.stop = function() {
      i = 1
    }, c.nt = function(t) {
      return t ? RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
    }, c.nts = function() {
      return e.split(s)
    }, c.off = c.unbind = function(t, e) {
      if (!t) return c._events = h = {
        n: {}
      }, void 0;
      var i, r, a, l, u, d, p, f = t.split(s),
        g = [h];
      for (l = 0, u = f.length; u > l; l++)
        for (d = 0; g.length > d; d += a.length - 2) {
          if (a = [d, 1], i = g[d].n, f[l] != o) i[f[l]] && a.push(i[f[l]]);
          else
            for (r in i) i[n](r) && a.push(i[r]);
          g.splice.apply(g, a)
        }
      for (l = 0, u = g.length; u > l; l++)
        for (i = g[l]; i.n;) {
          if (e) {
            if (i.f) {
              for (d = 0, p = i.f.length; p > d; d++)
                if (i.f[d] == e) {
                  i.f.splice(d, 1);
                  break
                }!i.f.length && delete i.f
            }
            for (r in i.n)
              if (i.n[n](r) && i.n[r].f) {
                var v = i.n[r].f;
                for (d = 0, p = v.length; p > d; d++)
                  if (v[d] == e) {
                    v.splice(d, 1);
                    break
                  }!v.length && delete i.n[r].f
              }
          } else {
            delete i.f;
            for (r in i.n) i.n[n](r) && i.n[r].f && delete i.n[r].f
          }
          i = i.n
        }
    }, c.once = function(t, e) {
      var i = function() {
        return c.unbind(t, i), e.apply(this, arguments)
      };
      return c.on(t, i)
    }, c.version = r, c.toString = function() {
      return "You are running Eve " + r
    }, "undefined" != typeof module && module.exports ? module.exports = c : "undefined" != typeof define ? define("eve", [], function() {
      return c
    }) : t.eve = c
  }(this),
  function(t, e) {
    "function" == typeof define && define.amd ? define(["eve"], function(i) {
      return e(t, i)
    }) : e(t, t.eve)
  }(this, function(t, e) {
    function i(t) {
      if (i.is(t, "function")) return b ? t() : e.on("raphael.DOMload", t);
      if (i.is(t, X)) return i._engine.create[O](i, t.splice(0, 3 + i.is(t[0], Y))).add(t);
      var r = Array.prototype.slice.call(arguments, 0);
      if (i.is(r[r.length - 1], "function")) {
        var n = r.pop();
        return b ? n.call(i._engine.create[O](i, r)) : e.on("raphael.DOMload", function() {
          n.call(i._engine.create[O](i, r))
        })
      }
      return i._engine.create[O](i, arguments)
    }

    function r(t) {
      if (Object(t) !== t) return t;
      var e = new t.constructor;
      for (var i in t) t[A](i) && (e[i] = r(t[i]));
      return e
    }

    function n(t, e) {
      for (var i = 0, r = t.length; r > i; i++)
        if (t[i] === e) return t.push(t.splice(i, 1)[0])
    }

    function s(t, e, i) {
      function r() {
        var s = Array.prototype.slice.call(arguments, 0),
          o = s.join("␀"),
          a = r.cache = r.cache || {},
          l = r.count = r.count || [];
        return a[A](o) ? (n(l, o), i ? i(a[o]) : a[o]) : (l.length >= 1e3 && delete a[l.shift()], l.push(o), a[o] = t[O](e, s), i ? i(a[o]) : a[o])
      }
      return r
    }

    function o() {
      return this.hex
    }

    function a(t, e) {
      for (var i = [], r = 0, n = t.length; n - 2 * !e > r; r += 2) {
        var s = [{
          x: +t[r - 2],
          y: +t[r - 1]
        }, {
          x: +t[r],
          y: +t[r + 1]
        }, {
          x: +t[r + 2],
          y: +t[r + 3]
        }, {
          x: +t[r + 4],
          y: +t[r + 5]
        }];
        e ? r ? n - 4 == r ? s[3] = {
          x: +t[0],
          y: +t[1]
        } : n - 2 == r && (s[2] = {
          x: +t[0],
          y: +t[1]
        }, s[3] = {
          x: +t[2],
          y: +t[3]
        }) : s[0] = {
          x: +t[n - 2],
          y: +t[n - 1]
        } : n - 4 == r ? s[3] = s[2] : r || (s[0] = {
          x: +t[r],
          y: +t[r + 1]
        }), i.push(["C", (-s[0].x + 6 * s[1].x + s[2].x) / 6, (-s[0].y + 6 * s[1].y + s[2].y) / 6, (s[1].x + 6 * s[2].x - s[3].x) / 6, (s[1].y + 6 * s[2].y - s[3].y) / 6, s[2].x, s[2].y])
      }
      return i
    }

    function l(t, e, i, r, n) {
      var s = -3 * e + 9 * i - 9 * r + 3 * n,
        o = t * s + 6 * e - 12 * i + 6 * r;
      return t * o - 3 * e + 3 * i
    }

    function h(t, e, i, r, n, s, o, a, h) {
      null == h && (h = 1), h = h > 1 ? 1 : 0 > h ? 0 : h;
      for (var c = h / 2, u = 12, d = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], p = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], f = 0, g = 0; u > g; g++) {
        var v = c * d[g] + c,
          m = l(v, t, i, n, o),
          y = l(v, e, r, s, a),
          x = m * m + y * y;
        f += p[g] * F.sqrt(x)
      }
      return c * f
    }

    function c(t, e, i, r, n, s, o, a, l) {
      if (!(0 > l || l > h(t, e, i, r, n, s, o, a))) {
        var c, u = 1,
          d = u / 2,
          p = u - d,
          f = .01;
        for (c = h(t, e, i, r, n, s, o, a, p); V(c - l) > f;) d /= 2, p += (l > c ? 1 : -1) * d, c = h(t, e, i, r, n, s, o, a, p);
        return p
      }
    }

    function u(t, e, i, r, n, s, o, a) {
      if (!(H(t, i) < j(n, o) || j(t, i) > H(n, o) || H(e, r) < j(s, a) || j(e, r) > H(s, a))) {
        var l = (t * r - e * i) * (n - o) - (t - i) * (n * a - s * o),
          h = (t * r - e * i) * (s - a) - (e - r) * (n * a - s * o),
          c = (t - i) * (s - a) - (e - r) * (n - o);
        if (c) {
          var u = l / c,
            d = h / c,
            p = +u.toFixed(2),
            f = +d.toFixed(2);
          if (!(+j(t, i).toFixed(2) > p || p > +H(t, i).toFixed(2) || +j(n, o).toFixed(2) > p || p > +H(n, o).toFixed(2) || +j(e, r).toFixed(2) > f || f > +H(e, r).toFixed(2) || +j(s, a).toFixed(2) > f || f > +H(s, a).toFixed(2))) return {
            x: u,
            y: d
          }
        }
      }
    }

    function d(t, e, r) {
      var n = i.bezierBBox(t),
        s = i.bezierBBox(e);
      if (!i.isBBoxIntersect(n, s)) return r ? 0 : [];
      for (var o = h.apply(0, t), a = h.apply(0, e), l = ~~(o / 5), c = ~~(a / 5), d = [], p = [], f = {}, g = r ? 0 : [], v = 0; l + 1 > v; v++) {
        var m = i.findDotsAtSegment.apply(i, t.concat(v / l));
        d.push({
          x: m.x,
          y: m.y,
          t: v / l
        })
      }
      for (v = 0; c + 1 > v; v++) m = i.findDotsAtSegment.apply(i, e.concat(v / c)), p.push({
        x: m.x,
        y: m.y,
        t: v / c
      });
      for (v = 0; l > v; v++)
        for (var y = 0; c > y; y++) {
          var x = d[v],
            b = d[v + 1],
            _ = p[y],
            w = p[y + 1],
            C = .001 > V(b.x - x.x) ? "y" : "x",
            T = .001 > V(w.x - _.x) ? "y" : "x",
            A = u(x.x, x.y, b.x, b.y, _.x, _.y, w.x, w.y);
          if (A) {
            if (f[A.x.toFixed(4)] == A.y.toFixed(4)) continue;
            f[A.x.toFixed(4)] = A.y.toFixed(4);
            var L = x.t + V((A[C] - x[C]) / (b[C] - x[C])) * (b.t - x.t),
              k = _.t + V((A[T] - _[T]) / (w[T] - _[T])) * (w.t - _.t);
            L >= 0 && 1 >= L && k >= 0 && 1 >= k && (r ? g++ : g.push({
              x: A.x,
              y: A.y,
              t1: L,
              t2: k
            }))
          }
        }
      return g
    }

    function p(t, e, r) {
      t = i._path2curve(t), e = i._path2curve(e);
      for (var n, s, o, a, l, h, c, u, p, f, g = r ? 0 : [], v = 0, m = t.length; m > v; v++) {
        var y = t[v];
        if ("M" == y[0]) n = l = y[1], s = h = y[2];
        else {
          "C" == y[0] ? (p = [n, s].concat(y.slice(1)), n = p[6], s = p[7]) : (p = [n, s, n, s, l, h, l, h], n = l, s = h);
          for (var x = 0, b = e.length; b > x; x++) {
            var _ = e[x];
            if ("M" == _[0]) o = c = _[1], a = u = _[2];
            else {
              "C" == _[0] ? (f = [o, a].concat(_.slice(1)), o = f[6], a = f[7]) : (f = [o, a, o, a, c, u, c, u], o = c, a = u);
              var w = d(p, f, r);
              if (r) g += w;
              else {
                for (var C = 0, T = w.length; T > C; C++) w[C].segment1 = v, w[C].segment2 = x, w[C].bez1 = p, w[C].bez2 = f;
                g = g.concat(w)
              }
            }
          }
        }
      }
      return g
    }

    function f(t, e, i, r, n, s) {
      null != t ? (this.a = +t, this.b = +e, this.c = +i, this.d = +r, this.e = +n, this.f = +s) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0)
    }

    function g() {
      return this.x + R + this.y + R + this.width + " × " + this.height
    }

    function v(t, e, i, r, n, s) {
      function o(t) {
        return ((u * t + c) * t + h) * t
      }

      function a(t, e) {
        var i = l(t, e);
        return ((f * i + p) * i + d) * i
      }

      function l(t, e) {
        var i, r, n, s, a, l;
        for (n = t, l = 0; 8 > l; l++) {
          if (s = o(n) - t, e > V(s)) return n;
          if (a = (3 * u * n + 2 * c) * n + h, 1e-6 > V(a)) break;
          n -= s / a
        }
        if (i = 0, r = 1, n = t, i > n) return i;
        if (n > r) return r;
        for (; r > i;) {
          if (s = o(n), e > V(s - t)) return n;
          t > s ? i = n : r = n, n = (r - i) / 2 + i
        }
        return n
      }
      var h = 3 * e,
        c = 3 * (r - e) - h,
        u = 1 - h - c,
        d = 3 * i,
        p = 3 * (n - i) - d,
        f = 1 - d - p;
      return a(t, 1 / (200 * s))
    }

    function m(t, e) {
      var i = [],
        r = {};
      if (this.ms = e, this.times = 1, t) {
        for (var n in t) t[A](n) && (r[$(n)] = t[n], i.push($(n)));
        i.sort(ue)
      }
      this.anim = r, this.top = i[i.length - 1], this.percents = i
    }

    function y(t, r, n, s, o, a) {
      n = $(n);
      var l, h, c, u, d, p, g = t.ms,
        m = {},
        y = {},
        x = {};
      if (s)
        for (_ = 0, C = li.length; C > _; _++) {
          var b = li[_];
          if (b.el.id == r.id && b.anim == t) {
            b.percent != n ? (li.splice(_, 1), c = 1) : h = b, r.attr(b.totalOrigin);
            break
          }
        } else s = +y;
      for (var _ = 0, C = t.percents.length; C > _; _++) {
        if (t.percents[_] == n || t.percents[_] > s * t.top) {
          n = t.percents[_], d = t.percents[_ - 1] || 0, g = g / t.top * (n - d), u = t.percents[_ + 1], l = t.anim[n];
          break
        }
        s && r.attr(t.anim[t.percents[_]])
      }
      if (l) {
        if (h) h.initstatus = s, h.start = new Date - h.ms * s;
        else {
          for (var T in l)
            if (l[A](T) && (re[A](T) || r.paper.customAttributes[A](T))) switch (m[T] = r.attr(T), null == m[T] && (m[T] = ie[T]), y[T] = l[T], re[T]) {
              case Y:
                x[T] = (y[T] - m[T]) / g;
                break;
              case "colour":
                m[T] = i.getRGB(m[T]);
                var L = i.getRGB(y[T]);
                x[T] = {
                  r: (L.r - m[T].r) / g,
                  g: (L.g - m[T].g) / g,
                  b: (L.b - m[T].b) / g
                };
                break;
              case "path":
                var k = ze(m[T], y[T]),
                  I = k[1];
                for (m[T] = k[0], x[T] = [], _ = 0, C = m[T].length; C > _; _++) {
                  x[T][_] = [0];
                  for (var O = 1, B = m[T][_].length; B > O; O++) x[T][_][O] = (I[_][O] - m[T][_][O]) / g
                }
                break;
              case "transform":
                var E = r._,
                  R = je(E[T], y[T]);
                if (R)
                  for (m[T] = R.from, y[T] = R.to, x[T] = [], x[T].real = !0, _ = 0, C = m[T].length; C > _; _++)
                    for (x[T][_] = [m[T][_][0]], O = 1, B = m[T][_].length; B > O; O++) x[T][_][O] = (y[T][_][O] - m[T][_][O]) / g;
                else {
                  var z = r.matrix || new f,
                    q = {
                      _: {
                        transform: E.transform
                      },
                      getBBox: function() {
                        return r.getBBox(1)
                      }
                    };
                  m[T] = [z.a, z.b, z.c, z.d, z.e, z.f], Fe(q, y[T]), y[T] = q._.transform, x[T] = [(q.matrix.a - z.a) / g, (q.matrix.b - z.b) / g, (q.matrix.c - z.c) / g, (q.matrix.d - z.d) / g, (q.matrix.e - z.e) / g, (q.matrix.f - z.f) / g]
                }
                break;
              case "csv":
                var P = M(l[T])[N](w),
                  F = M(m[T])[N](w);
                if ("clip-rect" == T)
                  for (m[T] = F, x[T] = [], _ = F.length; _--;) x[T][_] = (P[_] - m[T][_]) / g;
                y[T] = P;
                break;
              default:
                for (P = [][S](l[T]), F = [][S](m[T]), x[T] = [], _ = r.paper.customAttributes[T].length; _--;) x[T][_] = ((P[_] || 0) - (F[_] || 0)) / g
            }
          var H = l.easing,
            j = i.easing_formulas[H];
          if (!j)
            if (j = M(H).match(Q), j && 5 == j.length) {
              var V = j;
              j = function(t) {
                return v(t, +V[1], +V[2], +V[3], +V[4], g)
              }
            } else j = pe;
          if (p = l.start || t.start || +new Date, b = {
            anim: t,
            percent: n,
            timestamp: p,
            start: p + (t.del || 0),
            status: 0,
            initstatus: s || 0,
            stop: !1,
            ms: g,
            easing: j,
            from: m,
            diff: x,
            to: y,
            el: r,
            callback: l.callback,
            prev: d,
            next: u,
            repeat: a || t.times,
            origin: r.attr(),
            totalOrigin: o
          }, li.push(b), s && !h && !c && (b.stop = !0, b.start = new Date - g * s, 1 == li.length)) return ci();
          c && (b.start = new Date - b.ms * s), 1 == li.length && hi(ci)
        }
        e("raphael.anim.start." + r.id, r, t)
      }
    }

    function x(t) {
      for (var e = 0; li.length > e; e++) li[e].el.paper == t && li.splice(e--, 1)
    }
    i.version = "2.1.0", i.eve = e;
    var b, _, w = /[, ]+/,
      C = {
        circle: 1,
        rect: 1,
        path: 1,
        ellipse: 1,
        text: 1,
        image: 1
      },
      T = /\{(\d+)\}/g,
      A = "hasOwnProperty",
      L = {
        doc: document,
        win: t
      },
      k = {
        was: Object.prototype[A].call(L.win, "Raphael"),
        is: L.win.Raphael
      },
      I = function() {
        this.ca = this.customAttributes = {}
      },
      O = "apply",
      S = "concat",
      B = "ontouchstart" in L.win || L.win.DocumentTouch && L.doc instanceof DocumentTouch,
      E = "",
      R = " ",
      M = String,
      N = "split",
      z = "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel" [N](R),
      q = {
        mousedown: "touchstart",
        mousemove: "touchmove",
        mouseup: "touchend"
      },
      P = M.prototype.toLowerCase,
      F = Math,
      H = F.max,
      j = F.min,
      V = F.abs,
      D = F.pow,
      W = F.PI,
      Y = "number",
      G = "string",
      X = "array",
      K = Object.prototype.toString,
      U = (i._ISURL = /^url\(['"]?([^\)]+?)['"]?\)$/i, /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
      J = {
        NaN: 1,
        Infinity: 1,
        "-Infinity": 1
      },
      Q = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
      Z = F.round,
      $ = parseFloat,
      te = parseInt,
      ee = M.prototype.toUpperCase,
      ie = i._availableAttrs = {
        "arrow-end": "none",
        "arrow-start": "none",
        blur: 0,
        "clip-rect": "0 0 1e9 1e9",
        cursor: "default",
        cx: 0,
        cy: 0,
        fill: "#fff",
        "fill-opacity": 1,
        font: '10px "Arial"',
        "font-family": '"Arial"',
        "font-size": "10",
        "font-style": "normal",
        "font-weight": 400,
        gradient: 0,
        height: 0,
        href: "http://raphaeljs.com/",
        "letter-spacing": 0,
        opacity: 1,
        path: "M0,0",
        r: 0,
        rx: 0,
        ry: 0,
        src: "",
        stroke: "#000",
        "stroke-dasharray": "",
        "stroke-linecap": "butt",
        "stroke-linejoin": "butt",
        "stroke-miterlimit": 0,
        "stroke-opacity": 1,
        "stroke-width": 1,
        target: "_blank",
        "text-anchor": "middle",
        title: "Raphael",
        transform: "",
        width: 0,
        x: 0,
        y: 0
      },
      re = i._availableAnimAttrs = {
        blur: Y,
        "clip-rect": "csv",
        cx: Y,
        cy: Y,
        fill: "colour",
        "fill-opacity": Y,
        "font-size": Y,
        height: Y,
        opacity: Y,
        path: "path",
        r: Y,
        rx: Y,
        ry: Y,
        stroke: "colour",
        "stroke-opacity": Y,
        "stroke-width": Y,
        transform: "transform",
        width: Y,
        x: Y,
        y: Y
      },
      ne = /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
      se = {
        hs: 1,
        rg: 1
      },
      oe = /,?([achlmqrstvxz]),?/gi,
      ae = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
      le = /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
      he = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
      ce = (i._radial_gradient = /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/, {}),
      ue = function(t, e) {
        return $(t) - $(e)
      },
      de = function() {},
      pe = function(t) {
        return t
      },
      fe = i._rectPath = function(t, e, i, r, n) {
        return n ? [
          ["M", t + n, e],
          ["l", i - 2 * n, 0],
          ["a", n, n, 0, 0, 1, n, n],
          ["l", 0, r - 2 * n],
          ["a", n, n, 0, 0, 1, -n, n],
          ["l", 2 * n - i, 0],
          ["a", n, n, 0, 0, 1, -n, -n],
          ["l", 0, 2 * n - r],
          ["a", n, n, 0, 0, 1, n, -n],
          ["z"]
        ] : [
          ["M", t, e],
          ["l", i, 0],
          ["l", 0, r],
          ["l", -i, 0],
          ["z"]
        ]
      },
      ge = function(t, e, i, r) {
        return null == r && (r = i), [
          ["M", t, e],
          ["m", 0, -r],
          ["a", i, r, 0, 1, 1, 0, 2 * r],
          ["a", i, r, 0, 1, 1, 0, -2 * r],
          ["z"]
        ]
      },
      ve = i._getPath = {
        path: function(t) {
          return t.attr("path")
        },
        circle: function(t) {
          var e = t.attrs;
          return ge(e.cx, e.cy, e.r)
        },
        ellipse: function(t) {
          var e = t.attrs;
          return ge(e.cx, e.cy, e.rx, e.ry)
        },
        rect: function(t) {
          var e = t.attrs;
          return fe(e.x, e.y, e.width, e.height, e.r)
        },
        image: function(t) {
          var e = t.attrs;
          return fe(e.x, e.y, e.width, e.height)
        },
        text: function(t) {
          var e = t._getBBox();
          return fe(e.x, e.y, e.width, e.height)
        },
        set: function(t) {
          var e = t._getBBox();
          return fe(e.x, e.y, e.width, e.height)
        }
      },
      me = i.mapPath = function(t, e) {
        if (!e) return t;
        var i, r, n, s, o, a, l;
        for (t = ze(t), n = 0, o = t.length; o > n; n++)
          for (l = t[n], s = 1, a = l.length; a > s; s += 2) i = e.x(l[s], l[s + 1]), r = e.y(l[s], l[s + 1]), l[s] = i, l[s + 1] = r;
        return t
      };
    if (i._g = L, i.type = L.win.SVGAngle || L.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") ? "SVG" : "VML", "VML" == i.type) {
      var ye, xe = L.doc.createElement("div");
      if (xe.innerHTML = '<v:shape adj="1"/>', ye = xe.firstChild, ye.style.behavior = "url(#default#VML)", !ye || "object" != typeof ye.adj) return i.type = E;
      xe = null
    }
    i.svg = !(i.vml = "VML" == i.type), i._Paper = I, i.fn = _ = I.prototype = i.prototype, i._id = 0, i._oid = 0, i.is = function(t, e) {
      return e = P.call(e), "finite" == e ? !J[A](+t) : "array" == e ? t instanceof Array : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || "array" == e && Array.isArray && Array.isArray(t) || K.call(t).slice(8, -1).toLowerCase() == e
    }, i.angle = function(t, e, r, n, s, o) {
      if (null == s) {
        var a = t - r,
          l = e - n;
        return a || l ? (180 + 180 * F.atan2(-l, -a) / W + 360) % 360 : 0
      }
      return i.angle(t, e, s, o) - i.angle(r, n, s, o)
    }, i.rad = function(t) {
      return t % 360 * W / 180
    }, i.deg = function(t) {
      return 180 * t / W % 360
    }, i.snapTo = function(t, e, r) {
      if (r = i.is(r, "finite") ? r : 10, i.is(t, X)) {
        for (var n = t.length; n--;)
          if (r >= V(t[n] - e)) return t[n]
      } else {
        t = +t;
        var s = e % t;
        if (r > s) return e - s;
        if (s > t - r) return e - s + t
      }
      return e
    }, i.createUUID = function(t, e) {
      return function() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t, e).toUpperCase()
      }
    }(/[xy]/g, function(t) {
      var e = 0 | 16 * F.random(),
        i = "x" == t ? e : 8 | 3 & e;
      return i.toString(16)
    }), i.setWindow = function(t) {
      e("raphael.setWindow", i, L.win, t), L.win = t, L.doc = L.win.document, i._engine.initWin && i._engine.initWin(L.win)
    };
    var be = function(t) {
        if (i.vml) {
          var e, r = /^\s+|\s+$/g;
          try {
            var n = new ActiveXObject("htmlfile");
            n.write("<body>"), n.close(), e = n.body
          } catch (o) {
            e = createPopup().document.body
          }
          var a = e.createTextRange();
          be = s(function(t) {
            try {
              e.style.color = M(t).replace(r, E);
              var i = a.queryCommandValue("ForeColor");
              return i = (255 & i) << 16 | 65280 & i | (16711680 & i) >>> 16, "#" + ("000000" + i.toString(16)).slice(-6)
            } catch (n) {
              return "none"
            }
          })
        } else {
          var l = L.doc.createElement("i");
          l.title = "Raphaël Colour Picker", l.style.display = "none", L.doc.body.appendChild(l), be = s(function(t) {
            return l.style.color = t, L.doc.defaultView.getComputedStyle(l, E).getPropertyValue("color")
          })
        }
        return be(t)
      },
      _e = function() {
        return "hsb(" + [this.h, this.s, this.b] + ")"
      },
      we = function() {
        return "hsl(" + [this.h, this.s, this.l] + ")"
      },
      Ce = function() {
        return this.hex
      },
      Te = function(t, e, r) {
        if (null == e && i.is(t, "object") && "r" in t && "g" in t && "b" in t && (r = t.b, e = t.g, t = t.r), null == e && i.is(t, G)) {
          var n = i.getRGB(t);
          t = n.r, e = n.g, r = n.b
        }
        return (t > 1 || e > 1 || r > 1) && (t /= 255, e /= 255, r /= 255), [t, e, r]
      },
      Ae = function(t, e, r, n) {
        t *= 255, e *= 255, r *= 255;
        var s = {
          r: t,
          g: e,
          b: r,
          hex: i.rgb(t, e, r),
          toString: Ce
        };
        return i.is(n, "finite") && (s.opacity = n), s
      };
    i.color = function(t) {
      var e;
      return i.is(t, "object") && "h" in t && "s" in t && "b" in t ? (e = i.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : i.is(t, "object") && "h" in t && "s" in t && "l" in t ? (e = i.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.hex = e.hex) : (i.is(t, "string") && (t = i.getRGB(t)), i.is(t, "object") && "r" in t && "g" in t && "b" in t ? (e = i.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = i.rgb2hsb(t), t.v = e.b) : (t = {
        hex: "none"
      }, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1)), t.toString = Ce, t
    }, i.hsb2rgb = function(t, e, i, r) {
      this.is(t, "object") && "h" in t && "s" in t && "b" in t && (i = t.b, e = t.s, t = t.h, r = t.o), t *= 360;
      var n, s, o, a, l;
      return t = t % 360 / 60, l = i * e, a = l * (1 - V(t % 2 - 1)), n = s = o = i - l, t = ~~t, n += [l, a, 0, 0, a, l][t], s += [a, l, l, a, 0, 0][t], o += [0, 0, a, l, l, a][t], Ae(n, s, o, r)
    }, i.hsl2rgb = function(t, e, i, r) {
      this.is(t, "object") && "h" in t && "s" in t && "l" in t && (i = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || i > 1) && (t /= 360, e /= 100, i /= 100), t *= 360;
      var n, s, o, a, l;
      return t = t % 360 / 60, l = 2 * e * (.5 > i ? i : 1 - i), a = l * (1 - V(t % 2 - 1)), n = s = o = i - l / 2, t = ~~t, n += [l, a, 0, 0, a, l][t], s += [a, l, l, a, 0, 0][t], o += [0, 0, a, l, l, a][t], Ae(n, s, o, r)
    }, i.rgb2hsb = function(t, e, i) {
      i = Te(t, e, i), t = i[0], e = i[1], i = i[2];
      var r, n, s, o;
      return s = H(t, e, i), o = s - j(t, e, i), r = 0 == o ? null : s == t ? (e - i) / o : s == e ? (i - t) / o + 2 : (t - e) / o + 4, r = 60 * ((r + 360) % 6) / 360, n = 0 == o ? 0 : o / s, {
        h: r,
        s: n,
        b: s,
        toString: _e
      }
    }, i.rgb2hsl = function(t, e, i) {
      i = Te(t, e, i), t = i[0], e = i[1], i = i[2];
      var r, n, s, o, a, l;
      return o = H(t, e, i), a = j(t, e, i), l = o - a, r = 0 == l ? null : o == t ? (e - i) / l : o == e ? (i - t) / l + 2 : (t - e) / l + 4, r = 60 * ((r + 360) % 6) / 360, s = (o + a) / 2, n = 0 == l ? 0 : .5 > s ? l / (2 * s) : l / (2 - 2 * s), {
        h: r,
        s: n,
        l: s,
        toString: we
      }
    }, i._path2string = function() {
      return this.join(",").replace(oe, "$1")
    }, i._preload = function(t, e) {
      var i = L.doc.createElement("img");
      i.style.cssText = "position:absolute;left:-9999em;top:-9999em", i.onload = function() {
        e.call(this), this.onload = null, L.doc.body.removeChild(this)
      }, i.onerror = function() {
        L.doc.body.removeChild(this)
      }, L.doc.body.appendChild(i), i.src = t
    }, i.getRGB = s(function(t) {
      if (!t || (t = M(t)).indexOf("-") + 1) return {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        error: 1,
        toString: o
      };
      if ("none" == t) return {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        toString: o
      };
      !(se[A](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = be(t));
      var e, r, n, s, a, l, h = t.match(U);
      return h ? (h[2] && (n = te(h[2].substring(5), 16), r = te(h[2].substring(3, 5), 16), e = te(h[2].substring(1, 3), 16)), h[3] && (n = te((a = h[3].charAt(3)) + a, 16), r = te((a = h[3].charAt(2)) + a, 16), e = te((a = h[3].charAt(1)) + a, 16)), h[4] && (l = h[4][N](ne), e = $(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), r = $(l[1]), "%" == l[1].slice(-1) && (r *= 2.55), n = $(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), "rgba" == h[1].toLowerCase().slice(0, 4) && (s = $(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100)), h[5] ? (l = h[5][N](ne), e = $(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), r = $(l[1]), "%" == l[1].slice(-1) && (r *= 2.55), n = $(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsba" == h[1].toLowerCase().slice(0, 4) && (s = $(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), i.hsb2rgb(e, r, n, s)) : h[6] ? (l = h[6][N](ne), e = $(l[0]), "%" == l[0].slice(-1) && (e *= 2.55), r = $(l[1]), "%" == l[1].slice(-1) && (r *= 2.55), n = $(l[2]), "%" == l[2].slice(-1) && (n *= 2.55), ("deg" == l[0].slice(-3) || "°" == l[0].slice(-1)) && (e /= 360), "hsla" == h[1].toLowerCase().slice(0, 4) && (s = $(l[3])), l[3] && "%" == l[3].slice(-1) && (s /= 100), i.hsl2rgb(e, r, n, s)) : (h = {
        r: e,
        g: r,
        b: n,
        toString: o
      }, h.hex = "#" + (16777216 | n | r << 8 | e << 16).toString(16).slice(1), i.is(s, "finite") && (h.opacity = s), h)) : {
        r: -1,
        g: -1,
        b: -1,
        hex: "none",
        error: 1,
        toString: o
      }
    }, i), i.hsb = s(function(t, e, r) {
      return i.hsb2rgb(t, e, r).hex
    }), i.hsl = s(function(t, e, r) {
      return i.hsl2rgb(t, e, r).hex
    }), i.rgb = s(function(t, e, i) {
      return "#" + (16777216 | i | e << 8 | t << 16).toString(16).slice(1)
    }), i.getColor = function(t) {
      var e = this.getColor.start = this.getColor.start || {
          h: 0,
          s: 1,
          b: t || .75
        },
        i = this.hsb2rgb(e.h, e.s, e.b);
      return e.h += .075, e.h > 1 && (e.h = 0, e.s -= .2, 0 >= e.s && (this.getColor.start = {
        h: 0,
        s: 1,
        b: e.b
      })), i.hex
    }, i.getColor.reset = function() {
      delete this.start
    }, i.parsePathString = function(t) {
      if (!t) return null;
      var e = Le(t);
      if (e.arr) return Ie(e.arr);
      var r = {
          a: 7,
          c: 6,
          h: 1,
          l: 2,
          m: 2,
          r: 4,
          q: 4,
          s: 4,
          t: 2,
          v: 1,
          z: 0
        },
        n = [];
      return i.is(t, X) && i.is(t[0], X) && (n = Ie(t)), n.length || M(t).replace(ae, function(t, e, i) {
        var s = [],
          o = e.toLowerCase();
        if (i.replace(he, function(t, e) {
          e && s.push(+e)
        }), "m" == o && s.length > 2 && (n.push([e][S](s.splice(0, 2))), o = "l", e = "m" == e ? "l" : "L"), "r" == o) n.push([e][S](s));
        else
          for (; s.length >= r[o] && (n.push([e][S](s.splice(0, r[o]))), r[o]););
      }), n.toString = i._path2string, e.arr = Ie(n), n
    }, i.parseTransformString = s(function(t) {
      if (!t) return null;
      var e = [];
      return i.is(t, X) && i.is(t[0], X) && (e = Ie(t)), e.length || M(t).replace(le, function(t, i, r) {
        var n = [];
        P.call(i), r.replace(he, function(t, e) {
          e && n.push(+e)
        }), e.push([i][S](n))
      }), e.toString = i._path2string, e
    });
    var Le = function(t) {
      var e = Le.ps = Le.ps || {};
      return e[t] ? e[t].sleep = 100 : e[t] = {
        sleep: 100
      }, setTimeout(function() {
        for (var i in e) e[A](i) && i != t && (e[i].sleep--, !e[i].sleep && delete e[i])
      }), e[t]
    };
    i.findDotsAtSegment = function(t, e, i, r, n, s, o, a, l) {
      var h = 1 - l,
        c = D(h, 3),
        u = D(h, 2),
        d = l * l,
        p = d * l,
        f = c * t + 3 * u * l * i + 3 * h * l * l * n + p * o,
        g = c * e + 3 * u * l * r + 3 * h * l * l * s + p * a,
        v = t + 2 * l * (i - t) + d * (n - 2 * i + t),
        m = e + 2 * l * (r - e) + d * (s - 2 * r + e),
        y = i + 2 * l * (n - i) + d * (o - 2 * n + i),
        x = r + 2 * l * (s - r) + d * (a - 2 * s + r),
        b = h * t + l * i,
        _ = h * e + l * r,
        w = h * n + l * o,
        C = h * s + l * a,
        T = 90 - 180 * F.atan2(v - y, m - x) / W;
      return (v > y || x > m) && (T += 180), {
        x: f,
        y: g,
        m: {
          x: v,
          y: m
        },
        n: {
          x: y,
          y: x
        },
        start: {
          x: b,
          y: _
        },
        end: {
          x: w,
          y: C
        },
        alpha: T
      }
    }, i.bezierBBox = function(t, e, r, n, s, o, a, l) {
      i.is(t, "array") || (t = [t, e, r, n, s, o, a, l]);
      var h = Ne.apply(null, t);
      return {
        x: h.min.x,
        y: h.min.y,
        x2: h.max.x,
        y2: h.max.y,
        width: h.max.x - h.min.x,
        height: h.max.y - h.min.y
      }
    }, i.isPointInsideBBox = function(t, e, i) {
      return e >= t.x && t.x2 >= e && i >= t.y && t.y2 >= i
    }, i.isBBoxIntersect = function(t, e) {
      var r = i.isPointInsideBBox;
      return r(e, t.x, t.y) || r(e, t.x2, t.y) || r(e, t.x, t.y2) || r(e, t.x2, t.y2) || r(t, e.x, e.y) || r(t, e.x2, e.y) || r(t, e.x, e.y2) || r(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
    }, i.pathIntersection = function(t, e) {
      return p(t, e)
    }, i.pathIntersectionNumber = function(t, e) {
      return p(t, e, 1)
    }, i.isPointInsidePath = function(t, e, r) {
      var n = i.pathBBox(t);
      return i.isPointInsideBBox(n, e, r) && 1 == p(t, [
        ["M", e, r],
        ["H", n.x2 + 10]
      ], 1) % 2
    }, i._removedFactory = function(t) {
      return function() {
        e("raphael.log", null, "Raphaël: you are calling to method “" + t + "” of removed object", t)
      }
    };
    var ke = i.pathBBox = function(t) {
        var e = Le(t);
        if (e.bbox) return r(e.bbox);
        if (!t) return {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
          x2: 0,
          y2: 0
        };
        t = ze(t);
        for (var i, n = 0, s = 0, o = [], a = [], l = 0, h = t.length; h > l; l++)
          if (i = t[l], "M" == i[0]) n = i[1], s = i[2], o.push(n), a.push(s);
          else {
            var c = Ne(n, s, i[1], i[2], i[3], i[4], i[5], i[6]);
            o = o[S](c.min.x, c.max.x), a = a[S](c.min.y, c.max.y), n = i[5], s = i[6]
          }
        var u = j[O](0, o),
          d = j[O](0, a),
          p = H[O](0, o),
          f = H[O](0, a),
          g = p - u,
          v = f - d,
          m = {
            x: u,
            y: d,
            x2: p,
            y2: f,
            width: g,
            height: v,
            cx: u + g / 2,
            cy: d + v / 2
          };
        return e.bbox = r(m), m
      },
      Ie = function(t) {
        var e = r(t);
        return e.toString = i._path2string, e
      },
      Oe = i._pathToRelative = function(t) {
        var e = Le(t);
        if (e.rel) return Ie(e.rel);
        i.is(t, X) && i.is(t && t[0], X) || (t = i.parsePathString(t));
        var r = [],
          n = 0,
          s = 0,
          o = 0,
          a = 0,
          l = 0;
        "M" == t[0][0] && (n = t[0][1], s = t[0][2], o = n, a = s, l++, r.push(["M", n, s]));
        for (var h = l, c = t.length; c > h; h++) {
          var u = r[h] = [],
            d = t[h];
          if (d[0] != P.call(d[0])) switch (u[0] = P.call(d[0]), u[0]) {
            case "a":
              u[1] = d[1], u[2] = d[2], u[3] = d[3], u[4] = d[4], u[5] = d[5], u[6] = +(d[6] - n).toFixed(3), u[7] = +(d[7] - s).toFixed(3);
              break;
            case "v":
              u[1] = +(d[1] - s).toFixed(3);
              break;
            case "m":
              o = d[1], a = d[2];
            default:
              for (var p = 1, f = d.length; f > p; p++) u[p] = +(d[p] - (p % 2 ? n : s)).toFixed(3)
          } else {
            u = r[h] = [], "m" == d[0] && (o = d[1] + n, a = d[2] + s);
            for (var g = 0, v = d.length; v > g; g++) r[h][g] = d[g]
          }
          var m = r[h].length;
          switch (r[h][0]) {
            case "z":
              n = o, s = a;
              break;
            case "h":
              n += +r[h][m - 1];
              break;
            case "v":
              s += +r[h][m - 1];
              break;
            default:
              n += +r[h][m - 2], s += +r[h][m - 1]
          }
        }
        return r.toString = i._path2string, e.rel = Ie(r), r
      },
      Se = i._pathToAbsolute = function(t) {
        var e = Le(t);
        if (e.abs) return Ie(e.abs);
        if (i.is(t, X) && i.is(t && t[0], X) || (t = i.parsePathString(t)), !t || !t.length) return [
          ["M", 0, 0]
        ];
        var r = [],
          n = 0,
          s = 0,
          o = 0,
          l = 0,
          h = 0;
        "M" == t[0][0] && (n = +t[0][1], s = +t[0][2], o = n, l = s, h++, r[0] = ["M", n, s]);
        for (var c, u, d = 3 == t.length && "M" == t[0][0] && "R" == t[1][0].toUpperCase() && "Z" == t[2][0].toUpperCase(), p = h, f = t.length; f > p; p++) {
          if (r.push(c = []), u = t[p], u[0] != ee.call(u[0])) switch (c[0] = ee.call(u[0]), c[0]) {
            case "A":
              c[1] = u[1], c[2] = u[2], c[3] = u[3], c[4] = u[4], c[5] = u[5], c[6] = +(u[6] + n), c[7] = +(u[7] + s);
              break;
            case "V":
              c[1] = +u[1] + s;
              break;
            case "H":
              c[1] = +u[1] + n;
              break;
            case "R":
              for (var g = [n, s][S](u.slice(1)), v = 2, m = g.length; m > v; v++) g[v] = +g[v] + n, g[++v] = +g[v] + s;
              r.pop(), r = r[S](a(g, d));
              break;
            case "M":
              o = +u[1] + n, l = +u[2] + s;
            default:
              for (v = 1, m = u.length; m > v; v++) c[v] = +u[v] + (v % 2 ? n : s)
          } else if ("R" == u[0]) g = [n, s][S](u.slice(1)), r.pop(), r = r[S](a(g, d)), c = ["R"][S](u.slice(-2));
          else
            for (var y = 0, x = u.length; x > y; y++) c[y] = u[y];
          switch (c[0]) {
            case "Z":
              n = o, s = l;
              break;
            case "H":
              n = c[1];
              break;
            case "V":
              s = c[1];
              break;
            case "M":
              o = c[c.length - 2], l = c[c.length - 1];
            default:
              n = c[c.length - 2], s = c[c.length - 1]
          }
        }
        return r.toString = i._path2string, e.abs = Ie(r), r
      },
      Be = function(t, e, i, r) {
        return [t, e, i, r, i, r]
      },
      Ee = function(t, e, i, r, n, s) {
        var o = 1 / 3,
          a = 2 / 3;
        return [o * t + a * i, o * e + a * r, o * n + a * i, o * s + a * r, n, s]
      },
      Re = function(t, e, i, r, n, o, a, l, h, c) {
        var u, d = 120 * W / 180,
          p = W / 180 * (+n || 0),
          f = [],
          g = s(function(t, e, i) {
            var r = t * F.cos(i) - e * F.sin(i),
              n = t * F.sin(i) + e * F.cos(i);
            return {
              x: r,
              y: n
            }
          });
        if (c) T = c[0], A = c[1], w = c[2], C = c[3];
        else {
          u = g(t, e, -p), t = u.x, e = u.y, u = g(l, h, -p), l = u.x, h = u.y;
          var v = (F.cos(W / 180 * n), F.sin(W / 180 * n), (t - l) / 2),
            m = (e - h) / 2,
            y = v * v / (i * i) + m * m / (r * r);
          y > 1 && (y = F.sqrt(y), i = y * i, r = y * r);
          var x = i * i,
            b = r * r,
            _ = (o == a ? -1 : 1) * F.sqrt(V((x * b - x * m * m - b * v * v) / (x * m * m + b * v * v))),
            w = _ * i * m / r + (t + l) / 2,
            C = _ * -r * v / i + (e + h) / 2,
            T = F.asin(((e - C) / r).toFixed(9)),
            A = F.asin(((h - C) / r).toFixed(9));
          T = w > t ? W - T : T, A = w > l ? W - A : A, 0 > T && (T = 2 * W + T), 0 > A && (A = 2 * W + A), a && T > A && (T -= 2 * W), !a && A > T && (A -= 2 * W)
        }
        var L = A - T;
        if (V(L) > d) {
          var k = A,
            I = l,
            O = h;
          A = T + d * (a && A > T ? 1 : -1), l = w + i * F.cos(A), h = C + r * F.sin(A), f = Re(l, h, i, r, n, 0, a, I, O, [A, k, w, C])
        }
        L = A - T;
        var B = F.cos(T),
          E = F.sin(T),
          R = F.cos(A),
          M = F.sin(A),
          z = F.tan(L / 4),
          q = 4 / 3 * i * z,
          P = 4 / 3 * r * z,
          H = [t, e],
          j = [t + q * E, e - P * B],
          D = [l + q * M, h - P * R],
          Y = [l, h];
        if (j[0] = 2 * H[0] - j[0], j[1] = 2 * H[1] - j[1], c) return [j, D, Y][S](f);
        f = [j, D, Y][S](f).join()[N](",");
        for (var G = [], X = 0, K = f.length; K > X; X++) G[X] = X % 2 ? g(f[X - 1], f[X], p).y : g(f[X], f[X + 1], p).x;
        return G
      },
      Me = function(t, e, i, r, n, s, o, a, l) {
        var h = 1 - l;
        return {
          x: D(h, 3) * t + 3 * D(h, 2) * l * i + 3 * h * l * l * n + D(l, 3) * o,
          y: D(h, 3) * e + 3 * D(h, 2) * l * r + 3 * h * l * l * s + D(l, 3) * a
        }
      },
      Ne = s(function(t, e, i, r, n, s, o, a) {
        var l, h = n - 2 * i + t - (o - 2 * n + i),
          c = 2 * (i - t) - 2 * (n - i),
          u = t - i,
          d = (-c + F.sqrt(c * c - 4 * h * u)) / 2 / h,
          p = (-c - F.sqrt(c * c - 4 * h * u)) / 2 / h,
          f = [e, a],
          g = [t, o];
        return V(d) > "1e12" && (d = .5), V(p) > "1e12" && (p = .5), d > 0 && 1 > d && (l = Me(t, e, i, r, n, s, o, a, d), g.push(l.x), f.push(l.y)), p > 0 && 1 > p && (l = Me(t, e, i, r, n, s, o, a, p), g.push(l.x), f.push(l.y)), h = s - 2 * r + e - (a - 2 * s + r), c = 2 * (r - e) - 2 * (s - r), u = e - r, d = (-c + F.sqrt(c * c - 4 * h * u)) / 2 / h, p = (-c - F.sqrt(c * c - 4 * h * u)) / 2 / h, V(d) > "1e12" && (d = .5), V(p) > "1e12" && (p = .5), d > 0 && 1 > d && (l = Me(t, e, i, r, n, s, o, a, d), g.push(l.x), f.push(l.y)), p > 0 && 1 > p && (l = Me(t, e, i, r, n, s, o, a, p), g.push(l.x), f.push(l.y)), {
          min: {
            x: j[O](0, g),
            y: j[O](0, f)
          },
          max: {
            x: H[O](0, g),
            y: H[O](0, f)
          }
        }
      }),
      ze = i._path2curve = s(function(t, e) {
        var i = !e && Le(t);
        if (!e && i.curve) return Ie(i.curve);
        for (var r = Se(t), n = e && Se(e), s = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, o = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        }, a = (function(t, e) {
          var i, r;
          if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
          switch (!(t[0] in {
            T: 1,
            Q: 1
          }) && (e.qx = e.qy = null), t[0]) {
            case "M":
              e.X = t[1], e.Y = t[2];
              break;
            case "A":
              t = ["C"][S](Re[O](0, [e.x, e.y][S](t.slice(1))));
              break;
            case "S":
              i = e.x + (e.x - (e.bx || e.x)), r = e.y + (e.y - (e.by || e.y)), t = ["C", i, r][S](t.slice(1));
              break;
            case "T":
              e.qx = e.x + (e.x - (e.qx || e.x)), e.qy = e.y + (e.y - (e.qy || e.y)), t = ["C"][S](Ee(e.x, e.y, e.qx, e.qy, t[1], t[2]));
              break;
            case "Q":
              e.qx = t[1], e.qy = t[2], t = ["C"][S](Ee(e.x, e.y, t[1], t[2], t[3], t[4]));
              break;
            case "L":
              t = ["C"][S](Be(e.x, e.y, t[1], t[2]));
              break;
            case "H":
              t = ["C"][S](Be(e.x, e.y, t[1], e.y));
              break;
            case "V":
              t = ["C"][S](Be(e.x, e.y, e.x, t[1]));
              break;
            case "Z":
              t = ["C"][S](Be(e.x, e.y, e.X, e.Y))
          }
          return t
        }), l = function(t, e) {
          if (t[e].length > 7) {
            t[e].shift();
            for (var i = t[e]; i.length;) t.splice(e++, 0, ["C"][S](i.splice(0, 6)));
            t.splice(e, 1), u = H(r.length, n && n.length || 0)
          }
        }, h = function(t, e, i, s, o) {
          t && e && "M" == t[o][0] && "M" != e[o][0] && (e.splice(o, 0, ["M", s.x, s.y]), i.bx = 0, i.by = 0, i.x = t[o][1], i.y = t[o][2], u = H(r.length, n && n.length || 0))
        }, c = 0, u = H(r.length, n && n.length || 0); u > c; c++) {
          r[c] = a(r[c], s), l(r, c), n && (n[c] = a(n[c], o)), n && l(n, c), h(r, n, s, o, c), h(n, r, o, s, c);
          var d = r[c],
            p = n && n[c],
            f = d.length,
            g = n && p.length;
          s.x = d[f - 2], s.y = d[f - 1], s.bx = $(d[f - 4]) || s.x, s.by = $(d[f - 3]) || s.y, o.bx = n && ($(p[g - 4]) || o.x), o.by = n && ($(p[g - 3]) || o.y), o.x = n && p[g - 2], o.y = n && p[g - 1]
        }
        return n || (i.curve = Ie(r)), n ? [r, n] : r
      }, null, Ie),
      qe = (i._parseDots = s(function(t) {
        for (var e = [], r = 0, n = t.length; n > r; r++) {
          var s = {},
            o = t[r].match(/^([^:]*):?([\d\.]*)/);
          if (s.color = i.getRGB(o[1]), s.color.error) return null;
          s.color = s.color.hex, o[2] && (s.offset = o[2] + "%"), e.push(s)
        }
        for (r = 1, n = e.length - 1; n > r; r++)
          if (!e[r].offset) {
            for (var a = $(e[r - 1].offset || 0), l = 0, h = r + 1; n > h; h++)
              if (e[h].offset) {
                l = e[h].offset;
                break
              }
            l || (l = 100, h = n), l = $(l);
            for (var c = (l - a) / (h - r + 1); h > r; r++) a += c, e[r].offset = a + "%"
          }
        return e
      }), i._tear = function(t, e) {
        t == e.top && (e.top = t.prev), t == e.bottom && (e.bottom = t.next), t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next)
      }),
      Pe = (i._tofront = function(t, e) {
        e.top !== t && (qe(t, e), t.next = null, t.prev = e.top, e.top.next = t, e.top = t)
      }, i._toback = function(t, e) {
        e.bottom !== t && (qe(t, e), t.next = e.bottom, t.prev = null, e.bottom.prev = t, e.bottom = t)
      }, i._insertafter = function(t, e, i) {
        qe(t, i), e == i.top && (i.top = t), e.next && (e.next.prev = t), t.next = e.next, t.prev = e, e.next = t
      }, i._insertbefore = function(t, e, i) {
        qe(t, i), e == i.bottom && (i.bottom = t), e.prev && (e.prev.next = t), t.prev = e.prev, e.prev = t, t.next = e
      }, i.toMatrix = function(t, e) {
        var i = ke(t),
          r = {
            _: {
              transform: E
            },
            getBBox: function() {
              return i
            }
          };
        return Fe(r, e), r.matrix
      }),
      Fe = (i.transformPath = function(t, e) {
        return me(t, Pe(t, e))
      }, i._extractTransform = function(t, e) {
        if (null == e) return t._.transform;
        e = M(e).replace(/\.{3}|\u2026/g, t._.transform || E);
        var r = i.parseTransformString(e),
          n = 0,
          s = 0,
          o = 0,
          a = 1,
          l = 1,
          h = t._,
          c = new f;
        if (h.transform = r || [], r)
          for (var u = 0, d = r.length; d > u; u++) {
            var p, g, v, m, y, x = r[u],
              b = x.length,
              _ = M(x[0]).toLowerCase(),
              w = x[0] != _,
              C = w ? c.invert() : 0;
            "t" == _ && 3 == b ? w ? (p = C.x(0, 0), g = C.y(0, 0), v = C.x(x[1], x[2]), m = C.y(x[1], x[2]), c.translate(v - p, m - g)) : c.translate(x[1], x[2]) : "r" == _ ? 2 == b ? (y = y || t.getBBox(1), c.rotate(x[1], y.x + y.width / 2, y.y + y.height / 2), n += x[1]) : 4 == b && (w ? (v = C.x(x[2], x[3]), m = C.y(x[2], x[3]), c.rotate(x[1], v, m)) : c.rotate(x[1], x[2], x[3]), n += x[1]) : "s" == _ ? 2 == b || 3 == b ? (y = y || t.getBBox(1), c.scale(x[1], x[b - 1], y.x + y.width / 2, y.y + y.height / 2), a *= x[1], l *= x[b - 1]) : 5 == b && (w ? (v = C.x(x[3], x[4]), m = C.y(x[3], x[4]), c.scale(x[1], x[2], v, m)) : c.scale(x[1], x[2], x[3], x[4]), a *= x[1], l *= x[2]) : "m" == _ && 7 == b && c.add(x[1], x[2], x[3], x[4], x[5], x[6]), h.dirtyT = 1, t.matrix = c
          }
        t.matrix = c, h.sx = a, h.sy = l, h.deg = n, h.dx = s = c.e, h.dy = o = c.f, 1 == a && 1 == l && !n && h.bbox ? (h.bbox.x += +s, h.bbox.y += +o) : h.dirtyT = 1
      }),
      He = function(t) {
        var e = t[0];
        switch (e.toLowerCase()) {
          case "t":
            return [e, 0, 0];
          case "m":
            return [e, 1, 0, 0, 1, 0, 0];
          case "r":
            return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
          case "s":
            return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
        }
      },
      je = i._equaliseTransform = function(t, e) {
        e = M(e).replace(/\.{3}|\u2026/g, t), t = i.parseTransformString(t) || [], e = i.parseTransformString(e) || [];
        for (var r, n, s, o, a = H(t.length, e.length), l = [], h = [], c = 0; a > c; c++) {
          if (s = t[c] || He(e[c]), o = e[c] || He(s), s[0] != o[0] || "r" == s[0].toLowerCase() && (s[2] != o[2] || s[3] != o[3]) || "s" == s[0].toLowerCase() && (s[3] != o[3] || s[4] != o[4])) return;
          for (l[c] = [], h[c] = [], r = 0, n = H(s.length, o.length); n > r; r++) r in s && (l[c][r] = s[r]), r in o && (h[c][r] = o[r])
        }
        return {
          from: l,
          to: h
        }
      };
    i._getContainer = function(t, e, r, n) {
      var s;
      return s = null != n || i.is(t, "object") ? t : L.doc.getElementById(t), null != s ? s.tagName ? null == e ? {
        container: s,
        width: s.style.pixelWidth || s.offsetWidth,
        height: s.style.pixelHeight || s.offsetHeight
      } : {
        container: s,
        width: e,
        height: r
      } : {
        container: 1,
        x: t,
        y: e,
        width: r,
        height: n
      } : void 0
    }, i.pathToRelative = Oe, i._engine = {}, i.path2curve = ze, i.matrix = function(t, e, i, r, n, s) {
      return new f(t, e, i, r, n, s)
    },
      function(t) {
        function e(t) {
          return t[0] * t[0] + t[1] * t[1]
        }

        function r(t) {
          var i = F.sqrt(e(t));
          t[0] && (t[0] /= i), t[1] && (t[1] /= i)
        }
        t.add = function(t, e, i, r, n, s) {
          var o, a, l, h, c = [
              [],
              [],
              []
            ],
            u = [
              [this.a, this.c, this.e],
              [this.b, this.d, this.f],
              [0, 0, 1]
            ],
            d = [
              [t, i, n],
              [e, r, s],
              [0, 0, 1]
            ];
          for (t && t instanceof f && (d = [
            [t.a, t.c, t.e],
            [t.b, t.d, t.f],
            [0, 0, 1]
          ]), o = 0; 3 > o; o++)
            for (a = 0; 3 > a; a++) {
              for (h = 0, l = 0; 3 > l; l++) h += u[o][l] * d[l][a];
              c[o][a] = h
            }
          this.a = c[0][0], this.b = c[1][0], this.c = c[0][1], this.d = c[1][1], this.e = c[0][2], this.f = c[1][2]
        }, t.invert = function() {
          var t = this,
            e = t.a * t.d - t.b * t.c;
          return new f(t.d / e, -t.b / e, -t.c / e, t.a / e, (t.c * t.f - t.d * t.e) / e, (t.b * t.e - t.a * t.f) / e)
        }, t.clone = function() {
          return new f(this.a, this.b, this.c, this.d, this.e, this.f)
        }, t.translate = function(t, e) {
          this.add(1, 0, 0, 1, t, e)
        }, t.scale = function(t, e, i, r) {
          null == e && (e = t), (i || r) && this.add(1, 0, 0, 1, i, r), this.add(t, 0, 0, e, 0, 0), (i || r) && this.add(1, 0, 0, 1, -i, -r)
        }, t.rotate = function(t, e, r) {
          t = i.rad(t), e = e || 0, r = r || 0;
          var n = +F.cos(t).toFixed(9),
            s = +F.sin(t).toFixed(9);
          this.add(n, s, -s, n, e, r), this.add(1, 0, 0, 1, -e, -r)
        }, t.x = function(t, e) {
          return t * this.a + e * this.c + this.e
        }, t.y = function(t, e) {
          return t * this.b + e * this.d + this.f
        }, t.get = function(t) {
          return +this[M.fromCharCode(97 + t)].toFixed(4)
        }, t.toString = function() {
          return i.svg ? "matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")" : [this.get(0), this.get(2), this.get(1), this.get(3), 0, 0].join()
        }, t.toFilter = function() {
          return "progid:DXImageTransform.Microsoft.Matrix(M11=" + this.get(0) + ", M12=" + this.get(2) + ", M21=" + this.get(1) + ", M22=" + this.get(3) + ", Dx=" + this.get(4) + ", Dy=" + this.get(5) + ", sizingmethod='auto expand')"
        }, t.offset = function() {
          return [this.e.toFixed(4), this.f.toFixed(4)]
        }, t.split = function() {
          var t = {};
          t.dx = this.e, t.dy = this.f;
          var n = [
            [this.a, this.c],
            [this.b, this.d]
          ];
          t.scalex = F.sqrt(e(n[0])), r(n[0]), t.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * t.shear, n[1][1] - n[0][1] * t.shear], t.scaley = F.sqrt(e(n[1])), r(n[1]), t.shear /= t.scaley;
          var s = -n[0][1],
            o = n[1][1];
          return 0 > o ? (t.rotate = i.deg(F.acos(o)), 0 > s && (t.rotate = 360 - t.rotate)) : t.rotate = i.deg(F.asin(s)), t.isSimple = !(+t.shear.toFixed(9) || t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate), t.isSuperSimple = !+t.shear.toFixed(9) && t.scalex.toFixed(9) == t.scaley.toFixed(9) && !t.rotate, t.noRotation = !+t.shear.toFixed(9) && !t.rotate, t
        }, t.toTransformString = function(t) {
          var e = t || this[N]();
          return e.isSimple ? (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [e.dx, e.dy] : E) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : E) + (e.rotate ? "r" + [e.rotate, 0, 0] : E)) : "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)]
        }
      }(f.prototype);
    var Ve = navigator.userAgent.match(/Version\/(.*?)\s/) || navigator.userAgent.match(/Chrome\/(\d+)/);
    _.safari = "Apple Computer, Inc." == navigator.vendor && (Ve && 4 > Ve[1] || "iP" == navigator.platform.slice(0, 2)) || "Google Inc." == navigator.vendor && Ve && 8 > Ve[1] ? function() {
      var t = this.rect(-99, -99, this.width + 99, this.height + 99).attr({
        stroke: "none"
      });
      setTimeout(function() {
        t.remove()
      })
    } : de;
    for (var De = function() {
      this.returnValue = !1
    }, We = function() {
      return this.originalEvent.preventDefault()
    }, Ye = function() {
      this.cancelBubble = !0
    }, Ge = function() {
      return this.originalEvent.stopPropagation()
    }, Xe = function(t) {
      var e = L.doc.documentElement.scrollTop || L.doc.body.scrollTop,
        i = L.doc.documentElement.scrollLeft || L.doc.body.scrollLeft;
      return {
        x: t.clientX + i,
        y: t.clientY + e
      }
    }, Ke = function() {
      return L.doc.addEventListener ? function(t, e, i, r) {
        var n = function(t) {
          var e = Xe(t);
          return i.call(r, t, e.x, e.y)
        };
        if (t.addEventListener(e, n, !1), B && q[e]) {
          var s = function(e) {
            for (var n = Xe(e), s = e, o = 0, a = e.targetTouches && e.targetTouches.length; a > o; o++)
              if (e.targetTouches[o].target == t) {
                e = e.targetTouches[o], e.originalEvent = s, e.preventDefault = We, e.stopPropagation = Ge;
                break
              }
            return i.call(r, e, n.x, n.y)
          };
          t.addEventListener(q[e], s, !1)
        }
        return function() {
          return t.removeEventListener(e, n, !1), B && q[e] && t.removeEventListener(q[e], n, !1), !0
        }
      } : L.doc.attachEvent ? function(t, e, i, r) {
        var n = function(t) {
          t = t || L.win.event;
          var e = L.doc.documentElement.scrollTop || L.doc.body.scrollTop,
            n = L.doc.documentElement.scrollLeft || L.doc.body.scrollLeft,
            s = t.clientX + n,
            o = t.clientY + e;
          return t.preventDefault = t.preventDefault || De, t.stopPropagation = t.stopPropagation || Ye, i.call(r, t, s, o)
        };
        t.attachEvent("on" + e, n);
        var s = function() {
          return t.detachEvent("on" + e, n), !0
        };
        return s
      } : void 0
    }(), Ue = [], Je = function(t) {
      for (var i, r = t.clientX, n = t.clientY, s = L.doc.documentElement.scrollTop || L.doc.body.scrollTop, o = L.doc.documentElement.scrollLeft || L.doc.body.scrollLeft, a = Ue.length; a--;) {
        if (i = Ue[a], B && t.touches) {
          for (var l, h = t.touches.length; h--;)
            if (l = t.touches[h], l.identifier == i.el._drag.id) {
              r = l.clientX, n = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
              break
            }
        } else t.preventDefault();
        var c, u = i.el.node,
          d = u.nextSibling,
          p = u.parentNode,
          f = u.style.display;
        L.win.opera && p.removeChild(u), u.style.display = "none", c = i.el.paper.getElementByPoint(r, n), u.style.display = f, L.win.opera && (d ? p.insertBefore(u, d) : p.appendChild(u)), c && e("raphael.drag.over." + i.el.id, i.el, c), r += o, n += s, e("raphael.drag.move." + i.el.id, i.move_scope || i.el, r - i.el._drag.x, n - i.el._drag.y, r, n, t)
      }
    }, Qe = function(t) {
      i.unmousemove(Je).unmouseup(Qe);
      for (var r, n = Ue.length; n--;) r = Ue[n], r.el._drag = {}, e("raphael.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, t);
      Ue = []
    }, Ze = i.el = {}, $e = z.length; $e--;)(function(t) {
      i[t] = Ze[t] = function(e, r) {
        return i.is(e, "function") && (this.events = this.events || [], this.events.push({
          name: t,
          f: e,
          unbind: Ke(this.shape || this.node || L.doc, t, e, r || this)
        })), this
      }, i["un" + t] = Ze["un" + t] = function(e) {
        for (var r = this.events || [], n = r.length; n--;) r[n].name != t || !i.is(e, "undefined") && r[n].f != e || (r[n].unbind(), r.splice(n, 1), !r.length && delete this.events);
        return this
      }
    })(z[$e]);
    Ze.data = function(t, r) {
      var n = ce[this.id] = ce[this.id] || {};
      if (0 == arguments.length) return n;
      if (1 == arguments.length) {
        if (i.is(t, "object")) {
          for (var s in t) t[A](s) && this.data(s, t[s]);
          return this
        }
        return e("raphael.data.get." + this.id, this, n[t], t), n[t]
      }
      return n[t] = r, e("raphael.data.set." + this.id, this, r, t), this
    }, Ze.removeData = function(t) {
      return null == t ? ce[this.id] = {} : ce[this.id] && delete ce[this.id][t], this
    }, Ze.getData = function() {
      return r(ce[this.id] || {})
    }, Ze.hover = function(t, e, i, r) {
      return this.mouseover(t, i).mouseout(e, r || i)
    }, Ze.unhover = function(t, e) {
      return this.unmouseover(t).unmouseout(e)
    };
    var ti = [];
    Ze.drag = function(t, r, n, s, o, a) {
      function l(l) {
        (l.originalEvent || l).preventDefault();
        var h = L.doc.documentElement.scrollTop || L.doc.body.scrollTop,
          c = L.doc.documentElement.scrollLeft || L.doc.body.scrollLeft;
        this._drag.x = l.clientX + c, this._drag.y = l.clientY + h, this._drag.id = l.identifier, !Ue.length && i.mousemove(Je).mouseup(Qe), Ue.push({
          el: this,
          move_scope: s,
          start_scope: o,
          end_scope: a
        }), r && e.on("raphael.drag.start." + this.id, r), t && e.on("raphael.drag.move." + this.id, t), n && e.on("raphael.drag.end." + this.id, n), e("raphael.drag.start." + this.id, o || s || this, l.clientX + c, l.clientY + h, l)
      }
      return this._drag = {}, ti.push({
        el: this,
        start: l
      }), this.mousedown(l), this
    }, Ze.onDragOver = function(t) {
      t ? e.on("raphael.drag.over." + this.id, t) : e.unbind("raphael.drag.over." + this.id)
    }, Ze.undrag = function() {
      for (var t = ti.length; t--;) ti[t].el == this && (this.unmousedown(ti[t].start), ti.splice(t, 1), e.unbind("raphael.drag.*." + this.id));
      !ti.length && i.unmousemove(Je).unmouseup(Qe), Ue = []
    }, _.circle = function(t, e, r) {
      var n = i._engine.circle(this, t || 0, e || 0, r || 0);
      return this.__set__ && this.__set__.push(n), n
    }, _.rect = function(t, e, r, n, s) {
      var o = i._engine.rect(this, t || 0, e || 0, r || 0, n || 0, s || 0);
      return this.__set__ && this.__set__.push(o), o
    }, _.ellipse = function(t, e, r, n) {
      var s = i._engine.ellipse(this, t || 0, e || 0, r || 0, n || 0);
      return this.__set__ && this.__set__.push(s), s
    }, _.path = function(t) {
      t && !i.is(t, G) && !i.is(t[0], X) && (t += E);
      var e = i._engine.path(i.format[O](i, arguments), this);
      return this.__set__ && this.__set__.push(e), e
    }, _.image = function(t, e, r, n, s) {
      var o = i._engine.image(this, t || "about:blank", e || 0, r || 0, n || 0, s || 0);
      return this.__set__ && this.__set__.push(o), o
    }, _.text = function(t, e, r) {
      var n = i._engine.text(this, t || 0, e || 0, M(r));
      return this.__set__ && this.__set__.push(n), n
    }, _.set = function(t) {
      !i.is(t, "array") && (t = Array.prototype.splice.call(arguments, 0, arguments.length));
      var e = new di(t);
      return this.__set__ && this.__set__.push(e), e.paper = this, e.type = "set", e
    }, _.setStart = function(t) {
      this.__set__ = t || this.set()
    }, _.setFinish = function() {
      var t = this.__set__;
      return delete this.__set__, t
    }, _.setSize = function(t, e) {
      return i._engine.setSize.call(this, t, e)
    }, _.setViewBox = function(t, e, r, n, s) {
      return i._engine.setViewBox.call(this, t, e, r, n, s)
    }, _.top = _.bottom = null, _.raphael = i;
    var ei = function(t) {
      var e = t.getBoundingClientRect(),
        i = t.ownerDocument,
        r = i.body,
        n = i.documentElement,
        s = n.clientTop || r.clientTop || 0,
        o = n.clientLeft || r.clientLeft || 0,
        a = e.top + (L.win.pageYOffset || n.scrollTop || r.scrollTop) - s,
        l = e.left + (L.win.pageXOffset || n.scrollLeft || r.scrollLeft) - o;
      return {
        y: a,
        x: l
      }
    };
    _.getElementByPoint = function(t, e) {
      var i = this,
        r = i.canvas,
        n = L.doc.elementFromPoint(t, e);
      if (L.win.opera && "svg" == n.tagName) {
        var s = ei(r),
          o = r.createSVGRect();
        o.x = t - s.x, o.y = e - s.y, o.width = o.height = 1;
        var a = r.getIntersectionList(o, null);
        a.length && (n = a[a.length - 1])
      }
      if (!n) return null;
      for (; n.parentNode && n != r.parentNode && !n.raphael;) n = n.parentNode;
      return n == i.canvas.parentNode && (n = r), n = n && n.raphael ? i.getById(n.raphaelid) : null
    }, _.getElementsByBBox = function(t) {
      var e = this.set();
      return this.forEach(function(r) {
        i.isBBoxIntersect(r.getBBox(), t) && e.push(r)
      }), e
    }, _.getById = function(t) {
      for (var e = this.bottom; e;) {
        if (e.id == t) return e;
        e = e.next
      }
      return null
    }, _.forEach = function(t, e) {
      for (var i = this.bottom; i;) {
        if (t.call(e, i) === !1) return this;
        i = i.next
      }
      return this
    }, _.getElementsByPoint = function(t, e) {
      var i = this.set();
      return this.forEach(function(r) {
        r.isPointInside(t, e) && i.push(r)
      }), i
    }, Ze.isPointInside = function(t, e) {
      var r = this.realPath = this.realPath || ve[this.type](this);
      return i.isPointInsidePath(r, t, e)
    }, Ze.getBBox = function(t) {
      if (this.removed) return {};
      var e = this._;
      return t ? ((e.dirty || !e.bboxwt) && (this.realPath = ve[this.type](this), e.bboxwt = ke(this.realPath), e.bboxwt.toString = g, e.dirty = 0), e.bboxwt) : ((e.dirty || e.dirtyT || !e.bbox) && ((e.dirty || !this.realPath) && (e.bboxwt = 0, this.realPath = ve[this.type](this)), e.bbox = ke(me(this.realPath, this.matrix)), e.bbox.toString = g, e.dirty = e.dirtyT = 0), e.bbox)
    }, Ze.clone = function() {
      if (this.removed) return null;
      var t = this.paper[this.type]().attr(this.attr());
      return this.__set__ && this.__set__.push(t), t
    }, Ze.glow = function(t) {
      if ("text" == this.type) return null;
      t = t || {};
      var e = {
          width: (t.width || 10) + (+this.attr("stroke-width") || 1),
          fill: t.fill || !1,
          opacity: t.opacity || .5,
          offsetx: t.offsetx || 0,
          offsety: t.offsety || 0,
          color: t.color || "#000"
        },
        i = e.width / 2,
        r = this.paper,
        n = r.set(),
        s = this.realPath || ve[this.type](this);
      s = this.matrix ? me(s, this.matrix) : s;
      for (var o = 1; i + 1 > o; o++) n.push(r.path(s).attr({
        stroke: e.color,
        fill: e.fill ? e.color : "none",
        "stroke-linejoin": "round",
        "stroke-linecap": "round",
        "stroke-width": +(e.width / i * o).toFixed(3),
        opacity: +(e.opacity / i).toFixed(3)
      }));
      return n.insertBefore(this).translate(e.offsetx, e.offsety)
    };
    var ii = function(t, e, r, n, s, o, a, l, u) {
        return null == u ? h(t, e, r, n, s, o, a, l) : i.findDotsAtSegment(t, e, r, n, s, o, a, l, c(t, e, r, n, s, o, a, l, u))
      },
      ri = function(t, e) {
        return function(r, n, s) {
          r = ze(r);
          for (var o, a, l, h, c, u = "", d = {}, p = 0, f = 0, g = r.length; g > f; f++) {
            if (l = r[f], "M" == l[0]) o = +l[1], a = +l[2];
            else {
              if (h = ii(o, a, l[1], l[2], l[3], l[4], l[5], l[6]), p + h > n) {
                if (e && !d.start) {
                  if (c = ii(o, a, l[1], l[2], l[3], l[4], l[5], l[6], n - p), u += ["C" + c.start.x, c.start.y, c.m.x, c.m.y, c.x, c.y], s) return u;
                  d.start = u, u = ["M" + c.x, c.y + "C" + c.n.x, c.n.y, c.end.x, c.end.y, l[5], l[6]].join(), p += h, o = +l[5], a = +l[6];
                  continue
                }
                if (!t && !e) return c = ii(o, a, l[1], l[2], l[3], l[4], l[5], l[6], n - p), {
                  x: c.x,
                  y: c.y,
                  alpha: c.alpha
                }
              }
              p += h, o = +l[5], a = +l[6]
            }
            u += l.shift() + l
          }
          return d.end = u, c = t ? p : e ? d : i.findDotsAtSegment(o, a, l[0], l[1], l[2], l[3], l[4], l[5], 1), c.alpha && (c = {
            x: c.x,
            y: c.y,
            alpha: c.alpha
          }), c
        }
      },
      ni = ri(1),
      si = ri(),
      oi = ri(0, 1);
    i.getTotalLength = ni, i.getPointAtLength = si, i.getSubpath = function(t, e, i) {
      if (1e-6 > this.getTotalLength(t) - i) return oi(t, e).end;
      var r = oi(t, i, 1);
      return e ? oi(r, e).end : r
    }, Ze.getTotalLength = function() {
      var t = this.getPath();
      if (t) return this.node.getTotalLength ? this.node.getTotalLength() : ni(t)
    }, Ze.getPointAtLength = function(t) {
      var e = this.getPath();
      if (e) return si(e, t)
    }, Ze.getPath = function() {
      var t, e = i._getPath[this.type];
      if ("text" != this.type && "set" != this.type) return e && (t = e(this)), t
    }, Ze.getSubpath = function(t, e) {
      var r = this.getPath();
      if (r) return i.getSubpath(r, t, e)
    };
    var ai = i.easing_formulas = {
      linear: function(t) {
        return t
      },
      "<": function(t) {
        return D(t, 1.7)
      },
      ">": function(t) {
        return D(t, .48)
      },
      "<>": function(t) {
        var e = .48 - t / 1.04,
          i = F.sqrt(.1734 + e * e),
          r = i - e,
          n = D(V(r), 1 / 3) * (0 > r ? -1 : 1),
          s = -i - e,
          o = D(V(s), 1 / 3) * (0 > s ? -1 : 1),
          a = n + o + .5;
        return 3 * (1 - a) * a * a + a * a * a
      },
      backIn: function(t) {
        var e = 1.70158;
        return t * t * ((e + 1) * t - e)
      },
      backOut: function(t) {
        t -= 1;
        var e = 1.70158;
        return t * t * ((e + 1) * t + e) + 1
      },
      elastic: function(t) {
        return t == !!t ? t : D(2, -10 * t) * F.sin((t - .075) * 2 * W / .3) + 1
      },
      bounce: function(t) {
        var e, i = 7.5625,
          r = 2.75;
        return 1 / r > t ? e = i * t * t : 2 / r > t ? (t -= 1.5 / r, e = i * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r, e = i * t * t + .9375) : (t -= 2.625 / r, e = i * t * t + .984375), e
      }
    };
    ai.easeIn = ai["ease-in"] = ai["<"], ai.easeOut = ai["ease-out"] = ai[">"], ai.easeInOut = ai["ease-in-out"] = ai["<>"], ai["back-in"] = ai.backIn, ai["back-out"] = ai.backOut;
    var li = [],
      hi = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
        setTimeout(t, 16)
      },
      ci = function() {
        for (var t = +new Date, r = 0; li.length > r; r++) {
          var n = li[r];
          if (!n.el.removed && !n.paused) {
            var s, o, a = t - n.start,
              l = n.ms,
              h = n.easing,
              c = n.from,
              u = n.diff,
              d = n.to,
              p = (n.t, n.el),
              f = {},
              g = {};
            if (n.initstatus ? (a = (n.initstatus * n.anim.top - n.prev) / (n.percent - n.prev) * l, n.status = n.initstatus, delete n.initstatus, n.stop && li.splice(r--, 1)) : n.status = (n.prev + (n.percent - n.prev) * (a / l)) / n.anim.top, !(0 > a))
              if (l > a) {
                var v = h(a / l);
                for (var m in c)
                  if (c[A](m)) {
                    switch (re[m]) {
                      case Y:
                        s = +c[m] + v * l * u[m];
                        break;
                      case "colour":
                        s = "rgb(" + [ui(Z(c[m].r + v * l * u[m].r)), ui(Z(c[m].g + v * l * u[m].g)), ui(Z(c[m].b + v * l * u[m].b))].join(",") + ")";
                        break;
                      case "path":
                        s = [];
                        for (var x = 0, b = c[m].length; b > x; x++) {
                          s[x] = [c[m][x][0]];
                          for (var _ = 1, w = c[m][x].length; w > _; _++) s[x][_] = +c[m][x][_] + v * l * u[m][x][_];
                          s[x] = s[x].join(R)
                        }
                        s = s.join(R);
                        break;
                      case "transform":
                        if (u[m].real)
                          for (s = [], x = 0, b = c[m].length; b > x; x++)
                            for (s[x] = [c[m][x][0]], _ = 1, w = c[m][x].length; w > _; _++) s[x][_] = c[m][x][_] + v * l * u[m][x][_];
                        else {
                          var C = function(t) {
                            return +c[m][t] + v * l * u[m][t]
                          };
                          s = [
                            ["m", C(0), C(1), C(2), C(3), C(4), C(5)]
                          ]
                        }
                        break;
                      case "csv":
                        if ("clip-rect" == m)
                          for (s = [], x = 4; x--;) s[x] = +c[m][x] + v * l * u[m][x];
                        break;
                      default:
                        var T = [][S](c[m]);
                        for (s = [], x = p.paper.customAttributes[m].length; x--;) s[x] = +T[x] + v * l * u[m][x]
                    }
                    f[m] = s
                  }
                p.attr(f),
                  function(t, i, r) {
                    setTimeout(function() {
                      e("raphael.anim.frame." + t, i, r)
                    })
                  }(p.id, p, n.anim)
              } else {
                if (function(t, r, n) {
                  setTimeout(function() {
                    e("raphael.anim.frame." + r.id, r, n), e("raphael.anim.finish." + r.id, r, n), i.is(t, "function") && t.call(r)
                  })
                }(n.callback, p, n.anim), p.attr(d), li.splice(r--, 1), n.repeat > 1 && !n.next) {
                  for (o in d) d[A](o) && (g[o] = n.totalOrigin[o]);
                  n.el.attr(g), y(n.anim, n.el, n.anim.percents[0], null, n.totalOrigin, n.repeat - 1)
                }
                n.next && !n.stop && y(n.anim, n.el, n.next, null, n.totalOrigin, n.repeat)
              }
          }
        }
        i.svg && p && p.paper && p.paper.safari(), li.length && hi(ci)
      },
      ui = function(t) {
        return t > 255 ? 255 : 0 > t ? 0 : t
      };
    Ze.animateWith = function(t, e, r, n, s, o) {
      var a = this;
      if (a.removed) return o && o.call(a), a;
      var l = r instanceof m ? r : i.animation(r, n, s, o);
      y(l, a, l.percents[0], null, a.attr());
      for (var h = 0, c = li.length; c > h; h++)
        if (li[h].anim == e && li[h].el == t) {
          li[c - 1].start = li[h].start;
          break
        }
      return a
    }, Ze.onAnimation = function(t) {
      return t ? e.on("raphael.anim.frame." + this.id, t) : e.unbind("raphael.anim.frame." + this.id), this
    }, m.prototype.delay = function(t) {
      var e = new m(this.anim, this.ms);
      return e.times = this.times, e.del = +t || 0, e
    }, m.prototype.repeat = function(t) {
      var e = new m(this.anim, this.ms);
      return e.del = this.del, e.times = F.floor(H(t, 0)) || 1, e
    }, i.animation = function(t, e, r, n) {
      if (t instanceof m) return t;
      (i.is(r, "function") || !r) && (n = n || r || null, r = null), t = Object(t), e = +e || 0;
      var s, o, a = {};
      for (o in t) t[A](o) && $(o) != o && $(o) + "%" != o && (s = !0, a[o] = t[o]);
      return s ? (r && (a.easing = r), n && (a.callback = n), new m({
        100: a
      }, e)) : new m(t, e)
    }, Ze.animate = function(t, e, r, n) {
      var s = this;
      if (s.removed) return n && n.call(s), s;
      var o = t instanceof m ? t : i.animation(t, e, r, n);
      return y(o, s, o.percents[0], null, s.attr()), s
    }, Ze.setTime = function(t, e) {
      return t && null != e && this.status(t, j(e, t.ms) / t.ms), this
    }, Ze.status = function(t, e) {
      var i, r, n = [],
        s = 0;
      if (null != e) return y(t, this, -1, j(e, 1)), this;
      for (i = li.length; i > s; s++)
        if (r = li[s], r.el.id == this.id && (!t || r.anim == t)) {
          if (t) return r.status;
          n.push({
            anim: r.anim,
            status: r.status
          })
        }
      return t ? 0 : n
    }, Ze.pause = function(t) {
      for (var i = 0; li.length > i; i++) li[i].el.id != this.id || t && li[i].anim != t || e("raphael.anim.pause." + this.id, this, li[i].anim) !== !1 && (li[i].paused = !0);
      return this
    }, Ze.resume = function(t) {
      for (var i = 0; li.length > i; i++)
        if (li[i].el.id == this.id && (!t || li[i].anim == t)) {
          var r = li[i];
          e("raphael.anim.resume." + this.id, this, r.anim) !== !1 && (delete r.paused, this.status(r.anim, r.status))
        }
      return this
    }, Ze.stop = function(t) {
      for (var i = 0; li.length > i; i++) li[i].el.id != this.id || t && li[i].anim != t || e("raphael.anim.stop." + this.id, this, li[i].anim) !== !1 && li.splice(i--, 1);
      return this
    }, e.on("raphael.remove", x), e.on("raphael.clear", x), Ze.toString = function() {
      return "Raphaël’s object"
    };
    var di = function(t) {
        if (this.items = [], this.length = 0, this.type = "set", t)
          for (var e = 0, i = t.length; i > e; e++) !t[e] || t[e].constructor != Ze.constructor && t[e].constructor != di || (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
      },
      pi = di.prototype;
    pi.push = function() {
      for (var t, e, i = 0, r = arguments.length; r > i; i++) t = arguments[i], !t || t.constructor != Ze.constructor && t.constructor != di || (e = this.items.length, this[e] = this.items[e] = t, this.length++);
      return this
    }, pi.pop = function() {
      return this.length && delete this[this.length--], this.items.pop()
    }, pi.forEach = function(t, e) {
      for (var i = 0, r = this.items.length; r > i; i++)
        if (t.call(e, this.items[i], i) === !1) return this;
      return this
    };
    for (var fi in Ze) Ze[A](fi) && (pi[fi] = function(t) {
      return function() {
        var e = arguments;
        return this.forEach(function(i) {
          i[t][O](i, e)
        })
      }
    }(fi));
    return pi.attr = function(t, e) {
      if (t && i.is(t, X) && i.is(t[0], "object"))
        for (var r = 0, n = t.length; n > r; r++) this.items[r].attr(t[r]);
      else
        for (var s = 0, o = this.items.length; o > s; s++) this.items[s].attr(t, e);
      return this
    }, pi.clear = function() {
      for (; this.length;) this.pop()
    }, pi.splice = function(t, e) {
      t = 0 > t ? H(this.length + t, 0) : t, e = H(0, j(this.length - t, e));
      var i, r = [],
        n = [],
        s = [];
      for (i = 2; arguments.length > i; i++) s.push(arguments[i]);
      for (i = 0; e > i; i++) n.push(this[t + i]);
      for (; this.length - t > i; i++) r.push(this[t + i]);
      var o = s.length;
      for (i = 0; o + r.length > i; i++) this.items[t + i] = this[t + i] = o > i ? s[i] : r[i - o];
      for (i = this.items.length = this.length -= e - o; this[i];) delete this[i++];
      return new di(n)
    }, pi.exclude = function(t) {
      for (var e = 0, i = this.length; i > e; e++)
        if (this[e] == t) return this.splice(e, 1), !0
    }, pi.animate = function(t, e, r, n) {
      (i.is(r, "function") || !r) && (n = r || null);
      var s, o, a = this.items.length,
        l = a,
        h = this;
      if (!a) return this;
      n && (o = function() {
        !--a && n.call(h)
      }), r = i.is(r, G) ? r : o;
      var c = i.animation(t, e, r, o);
      for (s = this.items[--l].animate(c); l--;) this.items[l] && !this.items[l].removed && this.items[l].animateWith(s, c, c), this.items[l] && !this.items[l].removed || a--;
      return this
    }, pi.insertAfter = function(t) {
      for (var e = this.items.length; e--;) this.items[e].insertAfter(t);
      return this
    }, pi.getBBox = function() {
      for (var t = [], e = [], i = [], r = [], n = this.items.length; n--;)
        if (!this.items[n].removed) {
          var s = this.items[n].getBBox();
          t.push(s.x), e.push(s.y), i.push(s.x + s.width), r.push(s.y + s.height)
        }
      return t = j[O](0, t), e = j[O](0, e), i = H[O](0, i), r = H[O](0, r), {
        x: t,
        y: e,
        x2: i,
        y2: r,
        width: i - t,
        height: r - e
      }
    }, pi.clone = function(t) {
      t = this.paper.set();
      for (var e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].clone());
      return t
    }, pi.toString = function() {
      return "Raphaël‘s set"
    }, pi.glow = function(t) {
      var e = this.paper.set();
      return this.forEach(function(i) {
        var r = i.glow(t);
        null != r && r.forEach(function(t) {
          e.push(t)
        })
      }), e
    }, pi.isPointInside = function(t, e) {
      var i = !1;
      return this.forEach(function(r) {
        return r.isPointInside(t, e) ? (console.log("runned"), i = !0, !1) : void 0
      }), i
    }, i.registerFont = function(t) {
      if (!t.face) return t;
      this.fonts = this.fonts || {};
      var e = {
          w: t.w,
          face: {},
          glyphs: {}
        },
        i = t.face["font-family"];
      for (var r in t.face) t.face[A](r) && (e.face[r] = t.face[r]);
      if (this.fonts[i] ? this.fonts[i].push(e) : this.fonts[i] = [e], !t.svg) {
        e.face["units-per-em"] = te(t.face["units-per-em"], 10);
        for (var n in t.glyphs)
          if (t.glyphs[A](n)) {
            var s = t.glyphs[n];
            if (e.glyphs[n] = {
              w: s.w,
              k: {},
              d: s.d && "M" + s.d.replace(/[mlcxtrv]/g, function(t) {
                return {
                  l: "L",
                  c: "C",
                  x: "z",
                  t: "m",
                  r: "l",
                  v: "c"
                }[t] || "M"
              }) + "z"
            }, s.k)
              for (var o in s.k) s[A](o) && (e.glyphs[n].k[o] = s.k[o])
          }
      }
      return t
    }, _.getFont = function(t, e, r, n) {
      if (n = n || "normal", r = r || "normal", e = +e || {
        normal: 400,
        bold: 700,
        lighter: 300,
        bolder: 800
      }[e] || 400, i.fonts) {
        var s = i.fonts[t];
        if (!s) {
          var o = RegExp("(^|\\s)" + t.replace(/[^\w\d\s+!~.:_-]/g, E) + "(\\s|$)", "i");
          for (var a in i.fonts)
            if (i.fonts[A](a) && o.test(a)) {
              s = i.fonts[a];
              break
            }
        }
        var l;
        if (s)
          for (var h = 0, c = s.length; c > h && (l = s[h], l.face["font-weight"] != e || l.face["font-style"] != r && l.face["font-style"] || l.face["font-stretch"] != n); h++);
        return l
      }
    }, _.print = function(t, e, r, n, s, o, a, l) {
      o = o || "middle", a = H(j(a || 0, 1), -1), l = H(j(l || 1, 3), 1);
      var h, c = M(r)[N](E),
        u = 0,
        d = 0,
        p = E;
      if (i.is(n, "string") && (n = this.getFont(n)), n) {
        h = (s || 16) / n.face["units-per-em"];
        for (var f = n.face.bbox[N](w), g = +f[0], v = f[3] - f[1], m = 0, y = +f[1] + ("baseline" == o ? v + +n.face.descent : v / 2), x = 0, b = c.length; b > x; x++) {
          if ("\n" == c[x]) u = 0, C = 0, d = 0, m += v * l;
          else {
            var _ = d && n.glyphs[c[x - 1]] || {},
              C = n.glyphs[c[x]];
            u += d ? (_.w || n.w) + (_.k && _.k[c[x]] || 0) + n.w * a : 0, d = 1
          }
          C && C.d && (p += i.transformPath(C.d, ["t", u * h, m * h, "s", h, h, g, y, "t", (t - g) / h, (e - y) / h]))
        }
      }
      return this.path(p).attr({
        fill: "#000",
        stroke: "none"
      })
    }, _.add = function(t) {
      if (i.is(t, "array"))
        for (var e, r = this.set(), n = 0, s = t.length; s > n; n++) e = t[n] || {}, C[A](e.type) && r.push(this[e.type]().attr(e));
      return r
    }, i.format = function(t, e) {
      var r = i.is(e, X) ? [0][S](e) : arguments;
      return t && i.is(t, G) && r.length - 1 && (t = t.replace(T, function(t, e) {
        return null == r[++e] ? E : r[e]
      })), t || E
    }, i.fullfill = function() {
      var t = /\{([^\}]+)\}/g,
        e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,
        i = function(t, i, r) {
          var n = r;
          return i.replace(e, function(t, e, i, r, s) {
            e = e || r, n && (e in n && (n = n[e]), "function" == typeof n && s && (n = n()))
          }), n = (null == n || n == r ? t : n) + ""
        };
      return function(e, r) {
        return (e + "").replace(t, function(t, e) {
          return i(t, e, r)
        })
      }
    }(), i.ninja = function() {
      return k.was ? L.win.Raphael = k.is : delete Raphael, i
    }, i.st = pi,
      function(t, e, r) {
        function n() {
          /in/.test(t.readyState) ? setTimeout(n, 9) : i.eve("raphael.DOMload")
        }
        null == t.readyState && t.addEventListener && (t.addEventListener(e, r = function() {
          t.removeEventListener(e, r, !1), t.readyState = "complete"
        }, !1), t.readyState = "loading"), n()
      }(document, "DOMContentLoaded"), e.on("raphael.DOMload", function() {
      b = !0
    }),
      function() {
        if (i.svg) {
          var t = "hasOwnProperty",
            e = String,
            r = parseFloat,
            n = parseInt,
            s = Math,
            o = s.max,
            a = s.abs,
            l = s.pow,
            h = /[, ]+/,
            c = i.eve,
            u = "",
            d = " ",
            p = "http://www.w3.org/1999/xlink",
            f = {
              block: "M5,0 0,2.5 5,5z",
              classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
              diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
              open: "M6,1 1,3.5 6,6",
              oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"
            },
            g = {};
          i.toString = function() {
            return "Your browser supports SVG.\nYou are running Raphaël " + this.version
          };
          var v = function(r, n) {
              if (n) {
                "string" == typeof r && (r = v(r));
                for (var s in n) n[t](s) && ("xlink:" == s.substring(0, 6) ? r.setAttributeNS(p, s.substring(6), e(n[s])) : r.setAttribute(s, e(n[s])))
              } else r = i._g.doc.createElementNS("http://www.w3.org/2000/svg", r), r.style && (r.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
              return r
            },
            m = function(t, n) {
              var h = "linear",
                c = t.id + n,
                d = .5,
                p = .5,
                f = t.node,
                g = t.paper,
                m = f.style,
                y = i._g.doc.getElementById(c);
              if (!y) {
                if (n = e(n).replace(i._radial_gradient, function(t, e, i) {
                  if (h = "radial", e && i) {
                    d = r(e), p = r(i);
                    var n = 2 * (p > .5) - 1;
                    l(d - .5, 2) + l(p - .5, 2) > .25 && (p = s.sqrt(.25 - l(d - .5, 2)) * n + .5) && .5 != p && (p = p.toFixed(5) - 1e-5 * n)
                  }
                  return u
                }), n = n.split(/\s*\-\s*/), "linear" == h) {
                  var x = n.shift();
                  if (x = -r(x), isNaN(x)) return null;
                  var b = [0, 0, s.cos(i.rad(x)), s.sin(i.rad(x))],
                    _ = 1 / (o(a(b[2]), a(b[3])) || 1);
                  b[2] *= _, b[3] *= _, 0 > b[2] && (b[0] = -b[2], b[2] = 0), 0 > b[3] && (b[1] = -b[3], b[3] = 0)
                }
                var w = i._parseDots(n);
                if (!w) return null;
                if (c = c.replace(/[\(\)\s,\xb0#]/g, "_"), t.gradient && c != t.gradient.id && (g.defs.removeChild(t.gradient), delete t.gradient), !t.gradient) {
                  y = v(h + "Gradient", {
                    id: c
                  }), t.gradient = y, v(y, "radial" == h ? {
                    fx: d,
                    fy: p
                  } : {
                    x1: b[0],
                    y1: b[1],
                    x2: b[2],
                    y2: b[3],
                    gradientTransform: t.matrix.invert()
                  }), g.defs.appendChild(y);
                  for (var C = 0, T = w.length; T > C; C++) y.appendChild(v("stop", {
                    offset: w[C].offset ? w[C].offset : C ? "100%" : "0%",
                    "stop-color": w[C].color || "#fff"
                  }))
                }
              }
              return v(f, {
                fill: "url(#" + c + ")",
                opacity: 1,
                "fill-opacity": 1
              }), m.fill = u, m.opacity = 1, m.fillOpacity = 1, 1
            },
            y = function(t) {
              var e = t.getBBox(1);
              v(t.pattern, {
                patternTransform: t.matrix.invert() + " translate(" + e.x + "," + e.y + ")"
              })
            },
            x = function(r, n, s) {
              if ("path" == r.type) {
                for (var o, a, l, h, c, d = e(n).toLowerCase().split("-"), p = r.paper, m = s ? "end" : "start", y = r.node, x = r.attrs, b = x["stroke-width"], _ = d.length, w = "classic", C = 3, T = 3, A = 5; _--;) switch (d[_]) {
                  case "block":
                  case "classic":
                  case "oval":
                  case "diamond":
                  case "open":
                  case "none":
                    w = d[_];
                    break;
                  case "wide":
                    T = 5;
                    break;
                  case "narrow":
                    T = 2;
                    break;
                  case "long":
                    C = 5;
                    break;
                  case "short":
                    C = 2
                }
                if ("open" == w ? (C += 2, T += 2, A += 2, l = 1, h = s ? 4 : 1, c = {
                  fill: "none",
                  stroke: x.stroke
                }) : (h = l = C / 2, c = {
                  fill: x.stroke,
                  stroke: "none"
                }), r._.arrows ? s ? (r._.arrows.endPath && g[r._.arrows.endPath]--, r._.arrows.endMarker && g[r._.arrows.endMarker]--) : (r._.arrows.startPath && g[r._.arrows.startPath]--, r._.arrows.startMarker && g[r._.arrows.startMarker]--) : r._.arrows = {}, "none" != w) {
                  var L = "raphael-marker-" + w,
                    k = "raphael-marker-" + m + w + C + T;
                  i._g.doc.getElementById(L) ? g[L]++ : (p.defs.appendChild(v(v("path"), {
                    "stroke-linecap": "round",
                    d: f[w],
                    id: L
                  })), g[L] = 1);
                  var I, O = i._g.doc.getElementById(k);
                  O ? (g[k]++, I = O.getElementsByTagName("use")[0]) : (O = v(v("marker"), {
                    id: k,
                    markerHeight: T,
                    markerWidth: C,
                    orient: "auto",
                    refX: h,
                    refY: T / 2
                  }), I = v(v("use"), {
                    "xlink:href": "#" + L,
                    transform: (s ? "rotate(180 " + C / 2 + " " + T / 2 + ") " : u) + "scale(" + C / A + "," + T / A + ")",
                    "stroke-width": (1 / ((C / A + T / A) / 2)).toFixed(4)
                  }), O.appendChild(I), p.defs.appendChild(O), g[k] = 1), v(I, c);
                  var S = l * ("diamond" != w && "oval" != w);
                  s ? (o = r._.arrows.startdx * b || 0, a = i.getTotalLength(x.path) - S * b) : (o = S * b, a = i.getTotalLength(x.path) - (r._.arrows.enddx * b || 0)), c = {}, c["marker-" + m] = "url(#" + k + ")", (a || o) && (c.d = i.getSubpath(x.path, o, a)), v(y, c), r._.arrows[m + "Path"] = L, r._.arrows[m + "Marker"] = k, r._.arrows[m + "dx"] = S, r._.arrows[m + "Type"] = w, r._.arrows[m + "String"] = n
                } else s ? (o = r._.arrows.startdx * b || 0, a = i.getTotalLength(x.path) - o) : (o = 0, a = i.getTotalLength(x.path) - (r._.arrows.enddx * b || 0)), r._.arrows[m + "Path"] && v(y, {
                  d: i.getSubpath(x.path, o, a)
                }), delete r._.arrows[m + "Path"], delete r._.arrows[m + "Marker"], delete r._.arrows[m + "dx"], delete r._.arrows[m + "Type"], delete r._.arrows[m + "String"];
                for (c in g)
                  if (g[t](c) && !g[c]) {
                    var B = i._g.doc.getElementById(c);
                    B && B.parentNode.removeChild(B)
                  }
              }
            },
            b = {
              "": [0],
              none: [0],
              "-": [3, 1],
              ".": [1, 1],
              "-.": [3, 1, 1, 1],
              "-..": [3, 1, 1, 1, 1, 1],
              ". ": [1, 3],
              "- ": [4, 3],
              "--": [8, 3],
              "- .": [4, 3, 1, 3],
              "--.": [8, 3, 1, 3],
              "--..": [8, 3, 1, 3, 1, 3]
            },
            _ = function(t, i, r) {
              if (i = b[e(i).toLowerCase()]) {
                for (var n = t.attrs["stroke-width"] || "1", s = {
                  round: n,
                  square: n,
                  butt: 0
                }[t.attrs["stroke-linecap"] || r["stroke-linecap"]] || 0, o = [], a = i.length; a--;) o[a] = i[a] * n + (a % 2 ? 1 : -1) * s;
                v(t.node, {
                  "stroke-dasharray": o.join(",")
                })
              }
            },
            w = function(r, s) {
              var l = r.node,
                c = r.attrs,
                d = l.style.visibility;
              l.style.visibility = "hidden";
              for (var f in s)
                if (s[t](f)) {
                  if (!i._availableAttrs[t](f)) continue;
                  var g = s[f];
                  switch (c[f] = g, f) {
                    case "blur":
                      r.blur(g);
                      break;
                    case "href":
                    case "title":
                    case "target":
                      var b = l.parentNode;
                      if ("a" != b.tagName.toLowerCase()) {
                        var w = v("a");
                        b.insertBefore(w, l), w.appendChild(l), b = w
                      }
                      "target" == f ? b.setAttributeNS(p, "show", "blank" == g ? "new" : g) : b.setAttributeNS(p, f, g);
                      break;
                    case "cursor":
                      l.style.cursor = g;
                      break;
                    case "transform":
                      r.transform(g);
                      break;
                    case "arrow-start":
                      x(r, g);
                      break;
                    case "arrow-end":
                      x(r, g, 1);
                      break;
                    case "clip-rect":
                      var C = e(g).split(h);
                      if (4 == C.length) {
                        r.clip && r.clip.parentNode.parentNode.removeChild(r.clip.parentNode);
                        var A = v("clipPath"),
                          L = v("rect");
                        A.id = i.createUUID(), v(L, {
                          x: C[0],
                          y: C[1],
                          width: C[2],
                          height: C[3]
                        }), A.appendChild(L), r.paper.defs.appendChild(A), v(l, {
                          "clip-path": "url(#" + A.id + ")"
                        }), r.clip = L
                      }
                      if (!g) {
                        var k = l.getAttribute("clip-path");
                        if (k) {
                          var I = i._g.doc.getElementById(k.replace(/(^url\(#|\)$)/g, u));
                          I && I.parentNode.removeChild(I), v(l, {
                            "clip-path": u
                          }), delete r.clip
                        }
                      }
                      break;
                    case "path":
                      "path" == r.type && (v(l, {
                        d: g ? c.path = i._pathToAbsolute(g) : "M0,0"
                      }), r._.dirty = 1, r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1)));
                      break;
                    case "width":
                      if (l.setAttribute(f, g), r._.dirty = 1, !c.fx) break;
                      f = "x", g = c.x;
                    case "x":
                      c.fx && (g = -c.x - (c.width || 0));
                    case "rx":
                      if ("rx" == f && "rect" == r.type) break;
                    case "cx":
                      l.setAttribute(f, g), r.pattern && y(r), r._.dirty = 1;
                      break;
                    case "height":
                      if (l.setAttribute(f, g), r._.dirty = 1, !c.fy) break;
                      f = "y", g = c.y;
                    case "y":
                      c.fy && (g = -c.y - (c.height || 0));
                    case "ry":
                      if ("ry" == f && "rect" == r.type) break;
                    case "cy":
                      l.setAttribute(f, g), r.pattern && y(r), r._.dirty = 1;
                      break;
                    case "r":
                      "rect" == r.type ? v(l, {
                        rx: g,
                        ry: g
                      }) : l.setAttribute(f, g), r._.dirty = 1;
                      break;
                    case "src":
                      "image" == r.type && l.setAttributeNS(p, "href", g);
                      break;
                    case "stroke-width":
                      (1 != r._.sx || 1 != r._.sy) && (g /= o(a(r._.sx), a(r._.sy)) || 1), r.paper._vbSize && (g *= r.paper._vbSize), l.setAttribute(f, g), c["stroke-dasharray"] && _(r, c["stroke-dasharray"], s), r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1));
                      break;
                    case "stroke-dasharray":
                      _(r, g, s);
                      break;
                    case "fill":
                      var O = e(g).match(i._ISURL);
                      if (O) {
                        A = v("pattern");
                        var S = v("image");
                        A.id = i.createUUID(), v(A, {
                          x: 0,
                          y: 0,
                          patternUnits: "userSpaceOnUse",
                          height: 1,
                          width: 1
                        }), v(S, {
                          x: 0,
                          y: 0,
                          "xlink:href": O[1]
                        }), A.appendChild(S),
                          function(t) {
                            i._preload(O[1], function() {
                              var e = this.offsetWidth,
                                i = this.offsetHeight;
                              v(t, {
                                width: e,
                                height: i
                              }), v(S, {
                                width: e,
                                height: i
                              }), r.paper.safari()
                            })
                          }(A), r.paper.defs.appendChild(A), v(l, {
                          fill: "url(#" + A.id + ")"
                        }), r.pattern = A, r.pattern && y(r);
                        break
                      }
                      var B = i.getRGB(g);
                      if (B.error) {
                        if (("circle" == r.type || "ellipse" == r.type || "r" != e(g).charAt()) && m(r, g)) {
                          if ("opacity" in c || "fill-opacity" in c) {
                            var E = i._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, u));
                            if (E) {
                              var R = E.getElementsByTagName("stop");
                              v(R[R.length - 1], {
                                "stop-opacity": ("opacity" in c ? c.opacity : 1) * ("fill-opacity" in c ? c["fill-opacity"] : 1)
                              })
                            }
                          }
                          c.gradient = g, c.fill = "none";
                          break
                        }
                      } else delete s.gradient, delete c.gradient, !i.is(c.opacity, "undefined") && i.is(s.opacity, "undefined") && v(l, {
                        opacity: c.opacity
                      }), !i.is(c["fill-opacity"], "undefined") && i.is(s["fill-opacity"], "undefined") && v(l, {
                        "fill-opacity": c["fill-opacity"]
                      });
                      B[t]("opacity") && v(l, {
                        "fill-opacity": B.opacity > 1 ? B.opacity / 100 : B.opacity
                      });
                    case "stroke":
                      B = i.getRGB(g), l.setAttribute(f, B.hex), "stroke" == f && B[t]("opacity") && v(l, {
                        "stroke-opacity": B.opacity > 1 ? B.opacity / 100 : B.opacity
                      }), "stroke" == f && r._.arrows && ("startString" in r._.arrows && x(r, r._.arrows.startString), "endString" in r._.arrows && x(r, r._.arrows.endString, 1));
                      break;
                    case "gradient":
                      ("circle" == r.type || "ellipse" == r.type || "r" != e(g).charAt()) && m(r, g);
                      break;
                    case "opacity":
                      c.gradient && !c[t]("stroke-opacity") && v(l, {
                        "stroke-opacity": g > 1 ? g / 100 : g
                      });
                    case "fill-opacity":
                      if (c.gradient) {
                        E = i._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g, u)), E && (R = E.getElementsByTagName("stop"), v(R[R.length - 1], {
                          "stop-opacity": g
                        }));
                        break
                      }
                    default:
                      "font-size" == f && (g = n(g, 10) + "px");
                      var M = f.replace(/(\-.)/g, function(t) {
                        return t.substring(1).toUpperCase()
                      });
                      l.style[M] = g, r._.dirty = 1, l.setAttribute(f, g)
                  }
                }
              T(r, s), l.style.visibility = d
            },
            C = 1.2,
            T = function(r, s) {
              if ("text" == r.type && (s[t]("text") || s[t]("font") || s[t]("font-size") || s[t]("x") || s[t]("y"))) {
                var o = r.attrs,
                  a = r.node,
                  l = a.firstChild ? n(i._g.doc.defaultView.getComputedStyle(a.firstChild, u).getPropertyValue("font-size"), 10) : 10;
                if (s[t]("text")) {
                  for (o.text = s.text; a.firstChild;) a.removeChild(a.firstChild);
                  for (var h, c = e(s.text).split("\n"), d = [], p = 0, f = c.length; f > p; p++) h = v("tspan"), p && v(h, {
                    dy: l * C,
                    x: o.x
                  }), h.appendChild(i._g.doc.createTextNode(c[p])), a.appendChild(h), d[p] = h
                } else
                  for (d = a.getElementsByTagName("tspan"), p = 0, f = d.length; f > p; p++) p ? v(d[p], {
                    dy: l * C,
                    x: o.x
                  }) : v(d[0], {
                    dy: 0
                  });
                v(a, {
                  x: o.x,
                  y: o.y
                }), r._.dirty = 1;
                var g = r._getBBox(),
                  m = o.y - (g.y + g.height / 2);
                m && i.is(m, "finite") && v(d[0], {
                  dy: m
                })
              }
            },
            A = function(t, e) {
              this[0] = this.node = t, t.raphael = !0, this.id = i._oid++, t.raphaelid = this.id, this.matrix = i.matrix(), this.realPath = null, this.paper = e, this.attrs = this.attrs || {}, this._ = {
                transform: [],
                sx: 1,
                sy: 1,
                deg: 0,
                dx: 0,
                dy: 0,
                dirty: 1
              }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), e.top = this, this.next = null
            },
            L = i.el;
          A.prototype = L, L.constructor = A, i._engine.path = function(t, e) {
            var i = v("path");
            e.canvas && e.canvas.appendChild(i);
            var r = new A(i, e);
            return r.type = "path", w(r, {
              fill: "none",
              stroke: "#000",
              path: t
            }), r
          }, L.rotate = function(t, i, n) {
            if (this.removed) return this;
            if (t = e(t).split(h), t.length - 1 && (i = r(t[1]), n = r(t[2])), t = r(t[0]), null == n && (i = n), null == i || null == n) {
              var s = this.getBBox(1);
              i = s.x + s.width / 2, n = s.y + s.height / 2
            }
            return this.transform(this._.transform.concat([
              ["r", t, i, n]
            ])), this
          }, L.scale = function(t, i, n, s) {
            if (this.removed) return this;
            if (t = e(t).split(h), t.length - 1 && (i = r(t[1]), n = r(t[2]), s = r(t[3])), t = r(t[0]), null == i && (i = t), null == s && (n = s), null == n || null == s) var o = this.getBBox(1);
            return n = null == n ? o.x + o.width / 2 : n, s = null == s ? o.y + o.height / 2 : s, this.transform(this._.transform.concat([
              ["s", t, i, n, s]
            ])), this
          }, L.translate = function(t, i) {
            return this.removed ? this : (t = e(t).split(h), t.length - 1 && (i = r(t[1])), t = r(t[0]) || 0, i = +i || 0, this.transform(this._.transform.concat([
              ["t", t, i]
            ])), this)
          }, L.transform = function(e) {
            var r = this._;
            if (null == e) return r.transform;
            if (i._extractTransform(this, e), this.clip && v(this.clip, {
              transform: this.matrix.invert()
            }), this.pattern && y(this), this.node && v(this.node, {
              transform: this.matrix
            }), 1 != r.sx || 1 != r.sy) {
              var n = this.attrs[t]("stroke-width") ? this.attrs["stroke-width"] : 1;
              this.attr({
                "stroke-width": n
              })
            }
            return this
          }, L.hide = function() {
            return !this.removed && this.paper.safari(this.node.style.display = "none"), this
          }, L.show = function() {
            return !this.removed && this.paper.safari(this.node.style.display = ""), this
          }, L.remove = function() {
            if (!this.removed && this.node.parentNode) {
              var t = this.paper;
              t.__set__ && t.__set__.exclude(this), c.unbind("raphael.*.*." + this.id), this.gradient && t.defs.removeChild(this.gradient), i._tear(this, t), "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.removeChild(this.node.parentNode) : this.node.parentNode.removeChild(this.node);
              for (var e in this) this[e] = "function" == typeof this[e] ? i._removedFactory(e) : null;
              this.removed = !0
            }
          }, L._getBBox = function() {
            if ("none" == this.node.style.display) {
              this.show();
              var t = !0
            }
            var e = {};
            try {
              e = this.node.getBBox()
            } catch (i) {} finally {
              e = e || {}
            }
            return t && this.hide(), e
          }, L.attr = function(e, r) {
            if (this.removed) return this;
            if (null == e) {
              var n = {};
              for (var s in this.attrs) this.attrs[t](s) && (n[s] = this.attrs[s]);
              return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n
            }
            if (null == r && i.is(e, "string")) {
              if ("fill" == e && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
              if ("transform" == e) return this._.transform;
              for (var o = e.split(h), a = {}, l = 0, u = o.length; u > l; l++) e = o[l], a[e] = e in this.attrs ? this.attrs[e] : i.is(this.paper.customAttributes[e], "function") ? this.paper.customAttributes[e].def : i._availableAttrs[e];
              return u - 1 ? a : a[o[0]]
            }
            if (null == r && i.is(e, "array")) {
              for (a = {}, l = 0, u = e.length; u > l; l++) a[e[l]] = this.attr(e[l]);
              return a
            }
            if (null != r) {
              var d = {};
              d[e] = r
            } else null != e && i.is(e, "object") && (d = e);
            for (var p in d) c("raphael.attr." + p + "." + this.id, this, d[p]);
            for (p in this.paper.customAttributes)
              if (this.paper.customAttributes[t](p) && d[t](p) && i.is(this.paper.customAttributes[p], "function")) {
                var f = this.paper.customAttributes[p].apply(this, [].concat(d[p]));
                this.attrs[p] = d[p];
                for (var g in f) f[t](g) && (d[g] = f[g])
              }
            return w(this, d), this
          }, L.toFront = function() {
            if (this.removed) return this;
            "a" == this.node.parentNode.tagName.toLowerCase() ? this.node.parentNode.parentNode.appendChild(this.node.parentNode) : this.node.parentNode.appendChild(this.node);
            var t = this.paper;
            return t.top != this && i._tofront(this, t), this
          }, L.toBack = function() {
            if (this.removed) return this;
            var t = this.node.parentNode;
            return "a" == t.tagName.toLowerCase() ? t.parentNode.insertBefore(this.node.parentNode, this.node.parentNode.parentNode.firstChild) : t.firstChild != this.node && t.insertBefore(this.node, this.node.parentNode.firstChild), i._toback(this, this.paper), this.paper, this
          }, L.insertAfter = function(t) {
            if (this.removed) return this;
            var e = t.node || t[t.length - 1].node;
            return e.nextSibling ? e.parentNode.insertBefore(this.node, e.nextSibling) : e.parentNode.appendChild(this.node), i._insertafter(this, t, this.paper), this
          }, L.insertBefore = function(t) {
            if (this.removed) return this;
            var e = t.node || t[0].node;
            return e.parentNode.insertBefore(this.node, e), i._insertbefore(this, t, this.paper), this
          }, L.blur = function(t) {
            var e = this;
            if (0 !== +t) {
              var r = v("filter"),
                n = v("feGaussianBlur");
              e.attrs.blur = t, r.id = i.createUUID(), v(n, {
                stdDeviation: +t || 1.5
              }), r.appendChild(n), e.paper.defs.appendChild(r), e._blur = r, v(e.node, {
                filter: "url(#" + r.id + ")"
              })
            } else e._blur && (e._blur.parentNode.removeChild(e._blur), delete e._blur, delete e.attrs.blur), e.node.removeAttribute("filter");
            return e
          }, i._engine.circle = function(t, e, i, r) {
            var n = v("circle");
            t.canvas && t.canvas.appendChild(n);
            var s = new A(n, t);
            return s.attrs = {
              cx: e,
              cy: i,
              r: r,
              fill: "none",
              stroke: "#000"
            }, s.type = "circle", v(n, s.attrs), s
          }, i._engine.rect = function(t, e, i, r, n, s) {
            var o = v("rect");
            t.canvas && t.canvas.appendChild(o);
            var a = new A(o, t);
            return a.attrs = {
              x: e,
              y: i,
              width: r,
              height: n,
              r: s || 0,
              rx: s || 0,
              ry: s || 0,
              fill: "none",
              stroke: "#000"
            }, a.type = "rect", v(o, a.attrs), a
          }, i._engine.ellipse = function(t, e, i, r, n) {
            var s = v("ellipse");
            t.canvas && t.canvas.appendChild(s);
            var o = new A(s, t);
            return o.attrs = {
              cx: e,
              cy: i,
              rx: r,
              ry: n,
              fill: "none",
              stroke: "#000"
            }, o.type = "ellipse", v(s, o.attrs), o
          }, i._engine.image = function(t, e, i, r, n, s) {
            var o = v("image");
            v(o, {
              x: i,
              y: r,
              width: n,
              height: s,
              preserveAspectRatio: "none"
            }), o.setAttributeNS(p, "href", e), t.canvas && t.canvas.appendChild(o);
            var a = new A(o, t);
            return a.attrs = {
              x: i,
              y: r,
              width: n,
              height: s,
              src: e
            }, a.type = "image", a
          }, i._engine.text = function(t, e, r, n) {
            var s = v("text");
            t.canvas && t.canvas.appendChild(s);
            var o = new A(s, t);
            return o.attrs = {
              x: e,
              y: r,
              "text-anchor": "middle",
              text: n,
              font: i._availableAttrs.font,
              stroke: "none",
              fill: "#000"
            }, o.type = "text", w(o, o.attrs), o
          }, i._engine.setSize = function(t, e) {
            return this.width = t || this.width, this.height = e || this.height, this.canvas.setAttribute("width", this.width), this.canvas.setAttribute("height", this.height), this._viewBox && this.setViewBox.apply(this, this._viewBox), this
          }, i._engine.create = function() {
            var t = i._getContainer.apply(0, arguments),
              e = t && t.container,
              r = t.x,
              n = t.y,
              s = t.width,
              o = t.height;
            if (!e) throw Error("SVG container not found.");
            var a, l = v("svg"),
              h = "overflow:hidden;";
            return r = r || 0, n = n || 0, s = s || 512, o = o || 342, v(l, {
              height: o,
              version: 1.1,
              width: s,
              xmlns: "http://www.w3.org/2000/svg"
            }), 1 == e ? (l.style.cssText = h + "position:absolute;left:" + r + "px;top:" + n + "px", i._g.doc.body.appendChild(l), a = 1) : (l.style.cssText = h + "position:relative", e.firstChild ? e.insertBefore(l, e.firstChild) : e.appendChild(l)), e = new i._Paper, e.width = s, e.height = o, e.canvas = l, e.clear(), e._left = e._top = 0, a && (e.renderfix = function() {}), e.renderfix(), e
          }, i._engine.setViewBox = function(t, e, i, r, n) {
            c("raphael.setViewBox", this, this._viewBox, [t, e, i, r, n]);
            var s, a, l = o(i / this.width, r / this.height),
              h = this.top,
              u = n ? "meet" : "xMinYMin";
            for (null == t ? (this._vbSize && (l = 1), delete this._vbSize, s = "0 0 " + this.width + d + this.height) : (this._vbSize = l, s = t + d + e + d + i + d + r), v(this.canvas, {
              viewBox: s,
              preserveAspectRatio: u
            }); l && h;) a = "stroke-width" in h.attrs ? h.attrs["stroke-width"] : 1, h.attr({
              "stroke-width": a
            }), h._.dirty = 1, h._.dirtyT = 1, h = h.prev;
            return this._viewBox = [t, e, i, r, !!n], this
          }, i.prototype.renderfix = function() {
            var t, e = this.canvas,
              i = e.style;
            try {
              t = e.getScreenCTM() || e.createSVGMatrix()
            } catch (r) {
              t = e.createSVGMatrix()
            }
            var n = -t.e % 1,
              s = -t.f % 1;
            (n || s) && (n && (this._left = (this._left + n) % 1, i.left = this._left + "px"), s && (this._top = (this._top + s) % 1, i.top = this._top + "px"))
          }, i.prototype.clear = function() {
            i.eve("raphael.clear", this);
            for (var t = this.canvas; t.firstChild;) t.removeChild(t.firstChild);
            this.bottom = this.top = null, (this.desc = v("desc")).appendChild(i._g.doc.createTextNode("Created with Raphaël " + i.version)), t.appendChild(this.desc), t.appendChild(this.defs = v("defs"))
          }, i.prototype.remove = function() {
            c("raphael.remove", this), this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas);
            for (var t in this) this[t] = "function" == typeof this[t] ? i._removedFactory(t) : null
          };
          var k = i.st;
          for (var I in L) L[t](I) && !k[t](I) && (k[I] = function(t) {
            return function() {
              var e = arguments;
              return this.forEach(function(i) {
                i[t].apply(i, e)
              })
            }
          }(I))
        }
      }(),
      function() {
        if (i.vml) {
          var t = "hasOwnProperty",
            e = String,
            r = parseFloat,
            n = Math,
            s = n.round,
            o = n.max,
            a = n.min,
            l = n.abs,
            h = "fill",
            c = /[, ]+/,
            u = i.eve,
            d = " progid:DXImageTransform.Microsoft",
            p = " ",
            f = "",
            g = {
              M: "m",
              L: "l",
              C: "c",
              Z: "x",
              m: "t",
              l: "r",
              c: "v",
              z: "x"
            },
            v = /([clmz]),?([^clmz]*)/gi,
            m = / progid:\S+Blur\([^\)]+\)/g,
            y = /-?[^,\s-]+/g,
            x = "position:absolute;left:0;top:0;width:1px;height:1px",
            b = 21600,
            _ = {
              path: 1,
              rect: 1,
              image: 1
            },
            w = {
              circle: 1,
              ellipse: 1
            },
            C = function(t) {
              var r = /[ahqstv]/gi,
                n = i._pathToAbsolute;
              if (e(t).match(r) && (n = i._path2curve), r = /[clmz]/g, n == i._pathToAbsolute && !e(t).match(r)) {
                var o = e(t).replace(v, function(t, e, i) {
                  var r = [],
                    n = "m" == e.toLowerCase(),
                    o = g[e];
                  return i.replace(y, function(t) {
                    n && 2 == r.length && (o += r + g["m" == e ? "l" : "L"], r = []), r.push(s(t * b))
                  }), o + r
                });
                return o
              }
              var a, l, h = n(t);
              o = [];
              for (var c = 0, u = h.length; u > c; c++) {
                a = h[c], l = h[c][0].toLowerCase(), "z" == l && (l = "x");
                for (var d = 1, m = a.length; m > d; d++) l += s(a[d] * b) + (d != m - 1 ? "," : f);
                o.push(l)
              }
              return o.join(p)
            },
            T = function(t, e, r) {
              var n = i.matrix();
              return n.rotate(-t, .5, .5), {
                dx: n.x(e, r),
                dy: n.y(e, r)
              }
            },
            A = function(t, e, i, r, n, s) {
              var o = t._,
                a = t.matrix,
                c = o.fillpos,
                u = t.node,
                d = u.style,
                f = 1,
                g = "",
                v = b / e,
                m = b / i;
              if (d.visibility = "hidden", e && i) {
                if (u.coordsize = l(v) + p + l(m), d.rotation = s * (0 > e * i ? -1 : 1), s) {
                  var y = T(s, r, n);
                  r = y.dx, n = y.dy
                }
                if (0 > e && (g += "x"), 0 > i && (g += " y") && (f = -1), d.flip = g, u.coordorigin = r * -v + p + n * -m, c || o.fillsize) {
                  var x = u.getElementsByTagName(h);
                  x = x && x[0], u.removeChild(x), c && (y = T(s, a.x(c[0], c[1]), a.y(c[0], c[1])), x.position = y.dx * f + p + y.dy * f), o.fillsize && (x.size = o.fillsize[0] * l(e) + p + o.fillsize[1] * l(i)), u.appendChild(x)
                }
                d.visibility = "visible"
              }
            };
          i.toString = function() {
            return "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " + this.version
          };
          var L = function(t, i, r) {
              for (var n = e(i).toLowerCase().split("-"), s = r ? "end" : "start", o = n.length, a = "classic", l = "medium", h = "medium"; o--;) switch (n[o]) {
                case "block":
                case "classic":
                case "oval":
                case "diamond":
                case "open":
                case "none":
                  a = n[o];
                  break;
                case "wide":
                case "narrow":
                  h = n[o];
                  break;
                case "long":
                case "short":
                  l = n[o]
              }
              var c = t.node.getElementsByTagName("stroke")[0];
              c[s + "arrow"] = a, c[s + "arrowlength"] = l, c[s + "arrowwidth"] = h
            },
            k = function(n, l) {
              n.attrs = n.attrs || {};
              var u = n.node,
                d = n.attrs,
                g = u.style,
                v = _[n.type] && (l.x != d.x || l.y != d.y || l.width != d.width || l.height != d.height || l.cx != d.cx || l.cy != d.cy || l.rx != d.rx || l.ry != d.ry || l.r != d.r),
                m = w[n.type] && (d.cx != l.cx || d.cy != l.cy || d.r != l.r || d.rx != l.rx || d.ry != l.ry),
                y = n;
              for (var x in l) l[t](x) && (d[x] = l[x]);
              if (v && (d.path = i._getPath[n.type](n), n._.dirty = 1), l.href && (u.href = l.href), l.title && (u.title = l.title), l.target && (u.target = l.target), l.cursor && (g.cursor = l.cursor), "blur" in l && n.blur(l.blur), (l.path && "path" == n.type || v) && (u.path = C(~e(d.path).toLowerCase().indexOf("r") ? i._pathToAbsolute(d.path) : d.path), "image" == n.type && (n._.fillpos = [d.x, d.y], n._.fillsize = [d.width, d.height], A(n, 1, 1, 0, 0, 0))), "transform" in l && n.transform(l.transform), m) {
                var T = +d.cx,
                  k = +d.cy,
                  O = +d.rx || +d.r || 0,
                  S = +d.ry || +d.r || 0;
                u.path = i.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x", s((T - O) * b), s((k - S) * b), s((T + O) * b), s((k + S) * b), s(T * b)), n._.dirty = 1
              }
              if ("clip-rect" in l) {
                var E = e(l["clip-rect"]).split(c);
                if (4 == E.length) {
                  E[2] = +E[2] + +E[0], E[3] = +E[3] + +E[1];
                  var R = u.clipRect || i._g.doc.createElement("div"),
                    M = R.style;
                  M.clip = i.format("rect({1}px {2}px {3}px {0}px)", E), u.clipRect || (M.position = "absolute", M.top = 0, M.left = 0, M.width = n.paper.width + "px", M.height = n.paper.height + "px", u.parentNode.insertBefore(R, u), R.appendChild(u), u.clipRect = R)
                }
                l["clip-rect"] || u.clipRect && (u.clipRect.style.clip = "auto")
              }
              if (n.textpath) {
                var N = n.textpath.style;
                l.font && (N.font = l.font), l["font-family"] && (N.fontFamily = '"' + l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g, f) + '"'), l["font-size"] && (N.fontSize = l["font-size"]), l["font-weight"] && (N.fontWeight = l["font-weight"]), l["font-style"] && (N.fontStyle = l["font-style"])
              }
              if ("arrow-start" in l && L(y, l["arrow-start"]), "arrow-end" in l && L(y, l["arrow-end"], 1), null != l.opacity || null != l["stroke-width"] || null != l.fill || null != l.src || null != l.stroke || null != l["stroke-width"] || null != l["stroke-opacity"] || null != l["fill-opacity"] || null != l["stroke-dasharray"] || null != l["stroke-miterlimit"] || null != l["stroke-linejoin"] || null != l["stroke-linecap"]) {
                var z = u.getElementsByTagName(h),
                  q = !1;
                if (z = z && z[0], !z && (q = z = B(h)), "image" == n.type && l.src && (z.src = l.src), l.fill && (z.on = !0), (null == z.on || "none" == l.fill || null === l.fill) && (z.on = !1), z.on && l.fill) {
                  var P = e(l.fill).match(i._ISURL);
                  if (P) {
                    z.parentNode == u && u.removeChild(z), z.rotate = !0, z.src = P[1], z.type = "tile";
                    var F = n.getBBox(1);
                    z.position = F.x + p + F.y, n._.fillpos = [F.x, F.y], i._preload(P[1], function() {
                      n._.fillsize = [this.offsetWidth, this.offsetHeight]
                    })
                  } else z.color = i.getRGB(l.fill).hex, z.src = f, z.type = "solid", i.getRGB(l.fill).error && (y.type in {
                    circle: 1,
                    ellipse: 1
                  } || "r" != e(l.fill).charAt()) && I(y, l.fill, z) && (d.fill = "none", d.gradient = l.fill, z.rotate = !1)
                }
                if ("fill-opacity" in l || "opacity" in l) {
                  var H = ((+d["fill-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+i.getRGB(l.fill).o + 1 || 2) - 1);
                  H = a(o(H, 0), 1), z.opacity = H, z.src && (z.color = "none")
                }
                u.appendChild(z);
                var j = u.getElementsByTagName("stroke") && u.getElementsByTagName("stroke")[0],
                  V = !1;
                !j && (V = j = B("stroke")), (l.stroke && "none" != l.stroke || l["stroke-width"] || null != l["stroke-opacity"] || l["stroke-dasharray"] || l["stroke-miterlimit"] || l["stroke-linejoin"] || l["stroke-linecap"]) && (j.on = !0), ("none" == l.stroke || null === l.stroke || null == j.on || 0 == l.stroke || 0 == l["stroke-width"]) && (j.on = !1);
                var D = i.getRGB(l.stroke);
                j.on && l.stroke && (j.color = D.hex), H = ((+d["stroke-opacity"] + 1 || 2) - 1) * ((+d.opacity + 1 || 2) - 1) * ((+D.o + 1 || 2) - 1);
                var W = .75 * (r(l["stroke-width"]) || 1);
                if (H = a(o(H, 0), 1), null == l["stroke-width"] && (W = d["stroke-width"]), l["stroke-width"] && (j.weight = W), W && 1 > W && (H *= W) && (j.weight = 1), j.opacity = H, l["stroke-linejoin"] && (j.joinstyle = l["stroke-linejoin"] || "miter"), j.miterlimit = l["stroke-miterlimit"] || 8, l["stroke-linecap"] && (j.endcap = "butt" == l["stroke-linecap"] ? "flat" : "square" == l["stroke-linecap"] ? "square" : "round"), l["stroke-dasharray"]) {
                  var Y = {
                    "-": "shortdash",
                    ".": "shortdot",
                    "-.": "shortdashdot",
                    "-..": "shortdashdotdot",
                    ". ": "dot",
                    "- ": "dash",
                    "--": "longdash",
                    "- .": "dashdot",
                    "--.": "longdashdot",
                    "--..": "longdashdotdot"
                  };
                  j.dashstyle = Y[t](l["stroke-dasharray"]) ? Y[l["stroke-dasharray"]] : f
                }
                V && u.appendChild(j)
              }
              if ("text" == y.type) {
                y.paper.canvas.style.display = f;
                var G = y.paper.span,
                  X = 100,
                  K = d.font && d.font.match(/\d+(?:\.\d*)?(?=px)/);
                g = G.style, d.font && (g.font = d.font), d["font-family"] && (g.fontFamily = d["font-family"]), d["font-weight"] && (g.fontWeight = d["font-weight"]), d["font-style"] && (g.fontStyle = d["font-style"]), K = r(d["font-size"] || K && K[0]) || 10, g.fontSize = K * X + "px", y.textpath.string && (G.innerHTML = e(y.textpath.string).replace(/</g, "&#60;").replace(/&/g, "&#38;").replace(/\n/g, "<br>"));
                var U = G.getBoundingClientRect();
                y.W = d.w = (U.right - U.left) / X, y.H = d.h = (U.bottom - U.top) / X, y.X = d.x, y.Y = d.y + y.H / 2, ("x" in l || "y" in l) && (y.path.v = i.format("m{0},{1}l{2},{1}", s(d.x * b), s(d.y * b), s(d.x * b) + 1));
                for (var J = ["x", "y", "text", "font", "font-family", "font-weight", "font-style", "font-size"], Q = 0, Z = J.length; Z > Q; Q++)
                  if (J[Q] in l) {
                    y._.dirty = 1;
                    break
                  }
                switch (d["text-anchor"]) {
                  case "start":
                    y.textpath.style["v-text-align"] = "left", y.bbx = y.W / 2;
                    break;
                  case "end":
                    y.textpath.style["v-text-align"] = "right", y.bbx = -y.W / 2;
                    break;
                  default:
                    y.textpath.style["v-text-align"] = "center", y.bbx = 0
                }
                y.textpath.style["v-text-kern"] = !0
              }
            },
            I = function(t, s, o) {
              t.attrs = t.attrs || {};
              var a = (t.attrs, Math.pow),
                l = "linear",
                h = ".5 .5";
              if (t.attrs.gradient = s, s = e(s).replace(i._radial_gradient, function(t, e, i) {
                return l = "radial", e && i && (e = r(e), i = r(i), a(e - .5, 2) + a(i - .5, 2) > .25 && (i = n.sqrt(.25 - a(e - .5, 2)) * (2 * (i > .5) - 1) + .5), h = e + p + i), f
              }), s = s.split(/\s*\-\s*/), "linear" == l) {
                var c = s.shift();
                if (c = -r(c), isNaN(c)) return null
              }
              var u = i._parseDots(s);
              if (!u) return null;
              if (t = t.shape || t.node, u.length) {
                t.removeChild(o), o.on = !0, o.method = "none", o.color = u[0].color, o.color2 = u[u.length - 1].color;
                for (var d = [], g = 0, v = u.length; v > g; g++) u[g].offset && d.push(u[g].offset + p + u[g].color);
                o.colors = d.length ? d.join() : "0% " + o.color, "radial" == l ? (o.type = "gradientTitle", o.focus = "100%", o.focussize = "0 0", o.focusposition = h, o.angle = 0) : (o.type = "gradient", o.angle = (270 - c) % 360), t.appendChild(o)
              }
              return 1
            },
            O = function(t, e) {
              this[0] = this.node = t, t.raphael = !0, this.id = i._oid++, t.raphaelid = this.id, this.X = 0, this.Y = 0, this.attrs = {}, this.paper = e, this.matrix = i.matrix(), this._ = {
                transform: [],
                sx: 1,
                sy: 1,
                dx: 0,
                dy: 0,
                deg: 0,
                dirty: 1,
                dirtyT: 1
              }, !e.bottom && (e.bottom = this), this.prev = e.top, e.top && (e.top.next = this), e.top = this, this.next = null
            },
            S = i.el;
          O.prototype = S, S.constructor = O, S.transform = function(t) {
            if (null == t) return this._.transform;
            var r, n = this.paper._viewBoxShift,
              s = n ? "s" + [n.scale, n.scale] + "-1-1t" + [n.dx, n.dy] : f;
            n && (r = t = e(t).replace(/\.{3}|\u2026/g, this._.transform || f)), i._extractTransform(this, s + t);
            var o, a = this.matrix.clone(),
              l = this.skew,
              h = this.node,
              c = ~e(this.attrs.fill).indexOf("-"),
              u = !e(this.attrs.fill).indexOf("url(");
            if (a.translate(-.5, -.5), u || c || "image" == this.type)
              if (l.matrix = "1 0 0 1", l.offset = "0 0", o = a.split(), c && o.noRotation || !o.isSimple) {
                h.style.filter = a.toFilter();
                var d = this.getBBox(),
                  g = this.getBBox(1),
                  v = d.x - g.x,
                  m = d.y - g.y;
                h.coordorigin = v * -b + p + m * -b, A(this, 1, 1, v, m, 0)
              } else h.style.filter = f, A(this, o.scalex, o.scaley, o.dx, o.dy, o.rotate);
            else h.style.filter = f, l.matrix = e(a), l.offset = a.offset();
            return r && (this._.transform = r), this
          }, S.rotate = function(t, i, n) {
            if (this.removed) return this;
            if (null != t) {
              if (t = e(t).split(c), t.length - 1 && (i = r(t[1]), n = r(t[2])), t = r(t[0]), null == n && (i = n), null == i || null == n) {
                var s = this.getBBox(1);
                i = s.x + s.width / 2, n = s.y + s.height / 2
              }
              return this._.dirtyT = 1, this.transform(this._.transform.concat([
                ["r", t, i, n]
              ])), this
            }
          }, S.translate = function(t, i) {
            return this.removed ? this : (t = e(t).split(c), t.length - 1 && (i = r(t[1])), t = r(t[0]) || 0, i = +i || 0, this._.bbox && (this._.bbox.x += t, this._.bbox.y += i), this.transform(this._.transform.concat([
              ["t", t, i]
            ])), this)
          }, S.scale = function(t, i, n, s) {
            if (this.removed) return this;
            if (t = e(t).split(c), t.length - 1 && (i = r(t[1]), n = r(t[2]), s = r(t[3]), isNaN(n) && (n = null), isNaN(s) && (s = null)), t = r(t[0]), null == i && (i = t), null == s && (n = s), null == n || null == s) var o = this.getBBox(1);
            return n = null == n ? o.x + o.width / 2 : n, s = null == s ? o.y + o.height / 2 : s, this.transform(this._.transform.concat([
              ["s", t, i, n, s]
            ])), this._.dirtyT = 1, this
          }, S.hide = function() {
            return !this.removed && (this.node.style.display = "none"), this
          }, S.show = function() {
            return !this.removed && (this.node.style.display = f), this
          }, S._getBBox = function() {
            return this.removed ? {} : {
              x: this.X + (this.bbx || 0) - this.W / 2,
              y: this.Y - this.H,
              width: this.W,
              height: this.H
            }
          }, S.remove = function() {
            if (!this.removed && this.node.parentNode) {
              this.paper.__set__ && this.paper.__set__.exclude(this), i.eve.unbind("raphael.*.*." + this.id), i._tear(this, this.paper), this.node.parentNode.removeChild(this.node), this.shape && this.shape.parentNode.removeChild(this.shape);
              for (var t in this) this[t] = "function" == typeof this[t] ? i._removedFactory(t) : null;
              this.removed = !0
            }
          }, S.attr = function(e, r) {
            if (this.removed) return this;
            if (null == e) {
              var n = {};
              for (var s in this.attrs) this.attrs[t](s) && (n[s] = this.attrs[s]);
              return n.gradient && "none" == n.fill && (n.fill = n.gradient) && delete n.gradient, n.transform = this._.transform, n
            }
            if (null == r && i.is(e, "string")) {
              if (e == h && "none" == this.attrs.fill && this.attrs.gradient) return this.attrs.gradient;
              for (var o = e.split(c), a = {}, l = 0, d = o.length; d > l; l++) e = o[l], a[e] = e in this.attrs ? this.attrs[e] : i.is(this.paper.customAttributes[e], "function") ? this.paper.customAttributes[e].def : i._availableAttrs[e];
              return d - 1 ? a : a[o[0]]
            }
            if (this.attrs && null == r && i.is(e, "array")) {
              for (a = {}, l = 0, d = e.length; d > l; l++) a[e[l]] = this.attr(e[l]);
              return a
            }
            var p;
            null != r && (p = {}, p[e] = r), null == r && i.is(e, "object") && (p = e);
            for (var f in p) u("raphael.attr." + f + "." + this.id, this, p[f]);
            if (p) {
              for (f in this.paper.customAttributes)
                if (this.paper.customAttributes[t](f) && p[t](f) && i.is(this.paper.customAttributes[f], "function")) {
                  var g = this.paper.customAttributes[f].apply(this, [].concat(p[f]));
                  this.attrs[f] = p[f];
                  for (var v in g) g[t](v) && (p[v] = g[v])
                }
              p.text && "text" == this.type && (this.textpath.string = p.text), k(this, p)
            }
            return this
          }, S.toFront = function() {
            return !this.removed && this.node.parentNode.appendChild(this.node), this.paper && this.paper.top != this && i._tofront(this, this.paper), this
          }, S.toBack = function() {
            return this.removed ? this : (this.node.parentNode.firstChild != this.node && (this.node.parentNode.insertBefore(this.node, this.node.parentNode.firstChild), i._toback(this, this.paper)), this)
          }, S.insertAfter = function(t) {
            return this.removed ? this : (t.constructor == i.st.constructor && (t = t[t.length - 1]), t.node.nextSibling ? t.node.parentNode.insertBefore(this.node, t.node.nextSibling) : t.node.parentNode.appendChild(this.node), i._insertafter(this, t, this.paper), this)
          }, S.insertBefore = function(t) {
            return this.removed ? this : (t.constructor == i.st.constructor && (t = t[0]), t.node.parentNode.insertBefore(this.node, t.node), i._insertbefore(this, t, this.paper), this)
          }, S.blur = function(t) {
            var e = this.node.runtimeStyle,
              r = e.filter;
            return r = r.replace(m, f), 0 !== +t ? (this.attrs.blur = t, e.filter = r + p + d + ".Blur(pixelradius=" + (+t || 1.5) + ")", e.margin = i.format("-{0}px 0 0 -{0}px", s(+t || 1.5))) : (e.filter = r, e.margin = 0, delete this.attrs.blur), this
          }, i._engine.path = function(t, e) {
            var i = B("shape");
            i.style.cssText = x, i.coordsize = b + p + b, i.coordorigin = e.coordorigin;
            var r = new O(i, e),
              n = {
                fill: "none",
                stroke: "#000"
              };
            t && (n.path = t), r.type = "path", r.path = [], r.Path = f, k(r, n), e.canvas.appendChild(i);
            var s = B("skew");
            return s.on = !0, i.appendChild(s), r.skew = s, r.transform(f), r
          }, i._engine.rect = function(t, e, r, n, s, o) {
            var a = i._rectPath(e, r, n, s, o),
              l = t.path(a),
              h = l.attrs;
            return l.X = h.x = e, l.Y = h.y = r, l.W = h.width = n, l.H = h.height = s, h.r = o, h.path = a, l.type = "rect", l
          }, i._engine.ellipse = function(t, e, i, r, n) {
            var s = t.path();
            return s.attrs, s.X = e - r, s.Y = i - n, s.W = 2 * r, s.H = 2 * n, s.type = "ellipse", k(s, {
              cx: e,
              cy: i,
              rx: r,
              ry: n
            }), s
          }, i._engine.circle = function(t, e, i, r) {
            var n = t.path();
            return n.attrs, n.X = e - r, n.Y = i - r, n.W = n.H = 2 * r, n.type = "circle", k(n, {
              cx: e,
              cy: i,
              r: r
            }), n
          }, i._engine.image = function(t, e, r, n, s, o) {
            var a = i._rectPath(r, n, s, o),
              l = t.path(a).attr({
                stroke: "none"
              }),
              c = l.attrs,
              u = l.node,
              d = u.getElementsByTagName(h)[0];
            return c.src = e, l.X = c.x = r, l.Y = c.y = n, l.W = c.width = s, l.H = c.height = o, c.path = a, l.type = "image", d.parentNode == u && u.removeChild(d), d.rotate = !0, d.src = e, d.type = "tile", l._.fillpos = [r, n], l._.fillsize = [s, o], u.appendChild(d), A(l, 1, 1, 0, 0, 0), l
          }, i._engine.text = function(t, r, n, o) {
            var a = B("shape"),
              l = B("path"),
              h = B("textpath");
            r = r || 0, n = n || 0, o = o || "", l.v = i.format("m{0},{1}l{2},{1}", s(r * b), s(n * b), s(r * b) + 1), l.textpathok = !0, h.string = e(o), h.on = !0, a.style.cssText = x, a.coordsize = b + p + b, a.coordorigin = "0 0";
            var c = new O(a, t),
              u = {
                fill: "#000",
                stroke: "none",
                font: i._availableAttrs.font,
                text: o
              };
            c.shape = a, c.path = l, c.textpath = h, c.type = "text", c.attrs.text = e(o), c.attrs.x = r, c.attrs.y = n, c.attrs.w = 1, c.attrs.h = 1, k(c, u), a.appendChild(h), a.appendChild(l), t.canvas.appendChild(a);
            var d = B("skew");
            return d.on = !0, a.appendChild(d), c.skew = d, c.transform(f), c
          }, i._engine.setSize = function(t, e) {
            var r = this.canvas.style;
            return this.width = t, this.height = e, t == +t && (t += "px"), e == +e && (e += "px"), r.width = t, r.height = e, r.clip = "rect(0 " + t + " " + e + " 0)", this._viewBox && i._engine.setViewBox.apply(this, this._viewBox), this
          }, i._engine.setViewBox = function(t, e, r, n, s) {
            i.eve("raphael.setViewBox", this, this._viewBox, [t, e, r, n, s]);
            var a, l, h = this.width,
              c = this.height,
              u = 1 / o(r / h, n / c);
            return s && (a = c / n, l = h / r, h > r * a && (t -= (h - r * a) / 2 / a), c > n * l && (e -= (c - n * l) / 2 / l)), this._viewBox = [t, e, r, n, !!s], this._viewBoxShift = {
              dx: -t,
              dy: -e,
              scale: u
            }, this.forEach(function(t) {
              t.transform("...")
            }), this
          };
          var B;
          i._engine.initWin = function(t) {
            var e = t.document;
            e.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
            try {
              !e.namespaces.rvml && e.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), B = function(t) {
                return e.createElement("<rvml:" + t + ' class="rvml">')
              }
            } catch (i) {
              B = function(t) {
                return e.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')
              }
            }
          }, i._engine.initWin(i._g.win), i._engine.create = function() {
            var t = i._getContainer.apply(0, arguments),
              e = t.container,
              r = t.height,
              n = t.width,
              s = t.x,
              o = t.y;
            if (!e) throw Error("VML container not found.");
            var a = new i._Paper,
              l = a.canvas = i._g.doc.createElement("div"),
              h = l.style;
            return s = s || 0, o = o || 0, n = n || 512, r = r || 342, a.width = n, a.height = r, n == +n && (n += "px"), r == +r && (r += "px"), a.coordsize = 1e3 * b + p + 1e3 * b, a.coordorigin = "0 0", a.span = i._g.doc.createElement("span"), a.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;", l.appendChild(a.span), h.cssText = i.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden", n, r), 1 == e ? (i._g.doc.body.appendChild(l), h.left = s + "px", h.top = o + "px", h.position = "absolute") : e.firstChild ? e.insertBefore(l, e.firstChild) : e.appendChild(l), a.renderfix = function() {}, a
          }, i.prototype.clear = function() {
            i.eve("raphael.clear", this), this.canvas.innerHTML = f, this.span = i._g.doc.createElement("span"), this.span.style.cssText = "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;", this.canvas.appendChild(this.span), this.bottom = this.top = null
          }, i.prototype.remove = function() {
            i.eve("raphael.remove", this), this.canvas.parentNode.removeChild(this.canvas);
            for (var t in this) this[t] = "function" == typeof this[t] ? i._removedFactory(t) : null;
            return !0
          };
          var E = i.st;
          for (var R in S) S[t](R) && !E[t](R) && (E[R] = function(t) {
            return function() {
              var e = arguments;
              return this.forEach(function(i) {
                i[t].apply(i, e)
              })
            }
          }(R))
        }
      }(), k.was ? L.win.Raphael = i : Raphael = i, i
  });
var ANCHOR_TYPE = {
  main: "main",
  middle: "middle",
  first: "first",
  last: "last"
};
Anchor.prototype = {
  uuid: null,
  x: 0,
  y: 0,
  type: ANCHOR_TYPE.main,
  isFirst: !1,
  isLast: !1,
  ndex: 0,
  typeIndex: 0
}, Polyline.prototype = {
  id: null,
  points: [],
  path: [],
  anchors: [],
  strokeWidth: 1,
  radius: 1,
  showDetails: !1,
  paper: null,
  element: null,
  isDefaultConditionAvailable: !1,
  closePath: !1,
  init: function() {
    var t = this.getLinesCount();
    if (!(1 > t)) {
      this.normalizeCoordinates(), this.pushAnchor(ANCHOR_TYPE.first, this.getLine(0).x1, this.getLine(0).y1);
      for (var e = 1; t > e; e++) {
        var i = this.getLine(e - 1);
        this.pushAnchor(ANCHOR_TYPE.main, i.x2, i.y2)
      }
      this.pushAnchor(ANCHOR_TYPE.last, this.getLine(t - 1).x2, this.getLine(t - 1).y2), this.rebuildPath()
    }
  },
  normalizeCoordinates: function() {
    for (var t = 0; this.points.length > t; t++) this.points[t].x = parseFloat(this.points[t].x), this.points[t].y = parseFloat(this.points[t].y)
  },
  getLinesCount: function() {
    return this.points.length - 1
  },
  _getLine: function(t) {
    return this.points.length > t && this.points[t] ? {
      x1: this.points[t].x,
      y1: this.points[t].y,
      x2: this.points[t + 1].x,
      y2: this.points[t + 1].y
    } : void 0
  },
  getLine: function(t) {
    var e = this._getLine(t);
    return void 0 != e && (e.angle = this.getLineAngle(t)), e
  },
  getLineAngle: function(t) {
    var e = this._getLine(t);
    return Math.atan2(e.y2 - e.y1, e.x2 - e.x1)
  },
  getLineLengthX: function(t) {
    var e = this.getLine(t);
    return e.x2 - e.x1
  },
  getLineLengthY: function(t) {
    var e = this.getLine(t);
    return e.y2 - e.y1
  },
  getLineLength: function(t) {
    return Math.sqrt(Math.pow(this.getLineLengthX(t), 2) + Math.pow(this.getLineLengthY(t), 2))
  },
  getAnchors: function() {
    return this.anchors
  },
  getAnchorsCount: function(t) {
    if (t) {
      for (var e = 0, i = 0; this.getAnchorsCount() > i; i++) {
        var r = this.anchors[i];
        r.getType() == t && e++
      }
      return e
    }
    return this.anchors.length
  },
  pushAnchor: function(t, e, i, r) {
    if (t == ANCHOR_TYPE.first) r = 0, typeIndex = 0;
    else if (t == ANCHOR_TYPE.last) r = this.getAnchorsCount(), typeIndex = 0;
    else if (r)
      for (var n = 0; this.getAnchorsCount() > n; n++) {
        var s = this.anchors[n];
        s.index > r && (s.index++, s.typeIndex++)
      } else r = this.anchors.length;
    var s = new Anchor(this.id, ANCHOR_TYPE.main, e, i, r, typeIndex);
    this.anchors.push(s)
  },
  getAnchor: function(t) {
    return this.anchors[t]
  },
  getAnchorByType: function(t, e) {
    if (t == ANCHOR_TYPE.first) return this.anchors[0];
    if (t == ANCHOR_TYPE.last) return this.anchors[this.getAnchorsCount() - 1];
    for (var i = 0; this.getAnchorsCount() > i; i++) {
      var r = this.anchors[i];
      if (r.type == t && e == r.position) return r
    }
    return null
  },
  addNewPoint: function(t, e, i) {
    for (var r = 0; this.getLinesCount() > r; r++) {
      var n = this.getLine(r);
      if (e > n.x1 && n.x2 > e && i > n.y1 && n.y2 > i) {
        this.points.splice(r + 1, 0, {
          x: e,
          y: i
        });
        break
      }
    }
    this.rebuildPath()
  },
  rebuildPath: function() {
    for (var t = [], e = 0; this.getAnchorsCount() > e; e++) {
      var i = this.getAnchor(e),
        r = "";
      r = 0 == e ? "M" : "L";
      var n = i.x,
        s = i.y;
      if (e > 0 && this.getAnchorsCount() - 1 > e) {
        var o = i.x,
          a = i.y,
          l = this.getLineLength(e - 1);
        this.radius > l && (l = this.radius), this.isDefaultConditionAvailable = this.isDefaultConditionAvailable || 1 == e && l > 10;
        var h = this.getLineLengthY(e - 1) * this.radius / l,
          c = this.getLineLengthX(e - 1) * this.radius / l;
        n = i.x - c, s = i.y - h, 2 * this.radius > l && e > 1 && (n = i.x - this.getLineLengthX(e - 1) / 2, s = i.y - this.getLineLengthY(e - 1) / 2);
        var l = this.getLineLength(e);
        this.radius > l && (l = this.radius);
        var h = this.getLineLengthY(e) * this.radius / l,
          c = this.getLineLengthX(e) * this.radius / l,
          u = i.x + c,
          d = i.y + h;
        2 * this.radius > l && this.getAnchorsCount() - 2 > e && (u = i.x + this.getLineLengthX(e) / 2, d = i.y + this.getLineLengthY(e) / 2);
        var p = (o - n) / 3,
          f = (a - s) / 3,
          g = o - p,
          v = a - f,
          m = (o - u) / 3,
          y = (a - d) / 3,
          x = o - m,
          b = a - y,
          _ = u,
          w = d
      } else if (1 == e && 2 == this.getAnchorsCount()) {
        var l = this.getLineLength(e - 1);
        this.radius > l && (l = this.radius), this.isDefaultConditionAvailable = this.isDefaultConditionAvailable || 1 == e && l > 10
      }
      1 == this.strokeWidth % 2 && (n += .5, s += .5), t.push([r, n, s]), e > 0 && this.getAnchorsCount() - 1 > e && t.push(["C", g, v, x, b, _, w])
    }
    this.closePath && t.push(["Z"]), this.path = t
  },
  transform: function(t) {
    this.element.transform(t)
  },
  attr: function(t) {
    this.element.attr(t)
  }
};
var Foo = function() {};
Foo.prototype = Polyline.prototype, Polygone.prototype = new Foo, Polygone.prototype.rebuildPath = function() {
  for (var t = [], e = 0; this.getAnchorsCount() > e; e++) {
    var i = this.getAnchor(e),
      r = "";
    r = 0 == e ? "M" : "L";
    var n = i.x,
      s = i.y;
    1 == this.strokeWidth % 2 && (n += .5, s += .5), t.push([r, n, s])
  }
  this.closePath && t.push(["Z"]), this.path = t
};
var NORMAL_STROKE = 1,
  SEQUENCEFLOW_STROKE = 1.5,
  ASSOCIATION_STROKE = 2,
  TASK_STROKE = 1,
  TASK_HIGHLIGHT_STROKE = 2,
  CALL_ACTIVITY_STROKE = 2,
  ENDEVENT_STROKE = 3,
  COMPLETED_COLOR = "#2632aa",
  TEXT_COLOR = "#373e48",
  CURRENT_COLOR = "#017501",
  HOVER_COLOR = "#666666",
  ACTIVITY_STROKE_COLOR = "#bbbbbb",
  ACTIVITY_FILL_COLOR = "#f9f9f9",
  MAIN_STROKE_COLOR = "#585858",
  TEXT_PADDING = 3,
  ARROW_WIDTH = 4,
  MARKER_WIDTH = 12,
  TASK_FONT = {
    font: "11px Arial",
    opacity: 1,
    fill: Raphael.rgb(0, 0, 0)
  },
  ICON_SIZE = 16,
  ICON_PADDING = 4,
  INITIAL_CANVAS_WIDTH, INITIAL_CANVAS_HEIGHT, paper, viewBox, viewBoxWidth, viewBoxHeight, canvasWidth, canvasHeight, modelDiv = jQuery("#bpmnModel"),
  modelId = modelDiv.attr("data-model-id"),
  historyModelId = modelDiv.attr("data-history-id"),
  processDefinitionId = modelDiv.attr("data-process-definition-id"),
  modelType = modelDiv.attr("data-model-type"),
  messageContainer = jQuery("#errorMessage"),
  customActivityColors = modelDiv.attr("data-activity-color-mapping");
null !== customActivityColors && void 0 !== customActivityColors && customActivityColors.length > 0 && (customActivityColors = JSON.parse(customActivityColors));
var customActivityToolTips = modelDiv.attr("data-activity-tooltips");
null !== customActivityToolTips && void 0 !== customActivityToolTips && customActivityToolTips.length > 0 && (customActivityToolTips = JSON.parse(customActivityToolTips));
var customActivityBackgroundOpacity = modelDiv.attr("data-activity-opacity"),
  elementsAdded = [],
  elementsRemoved = [],
  modelUrl;
"runtime" == modelType ? modelUrl = historyModelId ? ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/history/" + historyModelId + "/model-json" : ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + modelId + "/model-json" : "design" == modelType ? modelUrl = historyModelId ? ACTIVITI.CONFIG.contextRoot + "/app/rest/models/" + modelId + "/history/" + historyModelId + "/model-json" : ACTIVITI.CONFIG.contextRoot + "/app/rest/models/" + modelId + "/model-json" : "process-definition" == modelType && (modelUrl = ACTIVITI.CONFIG.contextRoot + "/app/rest/process-definitions/" + processDefinitionId + "/model-json");
var request = jQuery.ajax({
  type: "get",
  url: modelUrl + "?nocaching=" + (new Date).getTime()
});
request.success(function(data, textStatus, jqXHR) {
  if (data.elements && 0 != data.elements.length || data.pools && 0 != data.pools.length) {
    if (INITIAL_CANVAS_WIDTH = data.diagramWidth, INITIAL_CANVAS_WIDTH += "design" == modelType ? 20 : 30, INITIAL_CANVAS_HEIGHT = data.diagramHeight + 50, canvasWidth = INITIAL_CANVAS_WIDTH, canvasHeight = INITIAL_CANVAS_HEIGHT, viewBoxWidth = INITIAL_CANVAS_WIDTH, viewBoxHeight = INITIAL_CANVAS_HEIGHT, "design" == modelType) {
      var headerBarHeight = 170,
        offsetY = 0;
      jQuery(window).height() > canvasHeight + headerBarHeight && (offsetY = (jQuery(window).height() - headerBarHeight - canvasHeight) / 2), offsetY > 50 && (offsetY = 50), jQuery("#bpmnModel").css("marginTop", offsetY)
    }
    if (jQuery("#bpmnModel").width(INITIAL_CANVAS_WIDTH), jQuery("#bpmnModel").height(INITIAL_CANVAS_HEIGHT), paper = Raphael(document.getElementById("bpmnModel"), canvasWidth, canvasHeight), paper.setViewBox(0, 0, viewBoxWidth, viewBoxHeight, !1), paper.renderfix(), data.pools)
      for (var i = 0; data.pools.length > i; i++) {
        var pool = data.pools[i];
        _drawPool(pool)
      }
    for (var modelElements = data.elements, i = 0; modelElements.length > i; i++) {
      var element = modelElements[i],
        drawFunction = eval("_draw" + element.type);
      drawFunction(element)
    }
    if (data.flows)
      for (var i = 0; data.flows.length > i; i++) {
        var flow = data.flows[i];
        "sequenceFlow" === flow.type ? _drawFlow(flow) : "association" === flow.type && _drawAssociation(flow)
      }
  }
}), request.error(function(t) {
  t && 404 === t.status ? messageContainer.html('<div class="alert warning badge" style="color: black">Process instance already completed</div>') : t && t.status >= 400 && messageContainer.html('<div class="alert error badge ">Error while fetching diagram</div>')
});