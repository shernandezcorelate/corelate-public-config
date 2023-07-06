var WORKFLOW_KEYS = {
    FORM_ID: ""
  },
  activitiApp = angular.module("activitiApp", ["http-auth-interceptor", "ngCookies", "ngResource", "ngSanitize", "ngRoute", "ngDragDrop", "mgcrea.ngStrap", "ngFileUpload", "pascalprecht.translate", "ui.grid", "ui.grid.edit", "ui.grid.selection", "ui.grid.autoResize", "angular-loading-bar", "cfp.hotkeys", "ui.bootstrap", "dndLists"]),
  activitiModule = activitiApp;
activitiApp.config(["$provide", "$routeProvider", "$selectProvider", "$datepickerProvider", "cfpLoadingBarProvider", "$translateProvider", function(e, t, o, n, i, r) {
    var s = "workflow";
    e.value("appName", s);
    var a = ACTIVITI.CONFIG.webContextRoot + (ACTIVITI.CONFIG.webContextRoot ? "/" + s + "/" : "");
    e.value("appResourceRoot", a), angular.extend(o.defaults, {
      caretHtml: '&nbsp;<i class="icon icon-caret-down"></i>'
    }), angular.extend(n.defaults, {
      iconLeft: "icon icon-caret-left",
      iconRight: "icon icon-caret-right"
    });
    var l = ["$rootScope", "AuthenticationSharedService", function(e, t) {
      return e.authenticated ? (e.authenticated = !0, !0) : t.authenticate()
    }];
    t.when("/start-process", {
      templateUrl: a + "views/start-process.html",
      controller: "StartProcessController",
      resolve: {
        verify: l
      }
    }).when("/apps/:appDefinitionId/start-process", {
      templateUrl: a + "views/start-process.html",
      controller: "StartProcessController",
      resolve: {
        verify: l
      }
    }).when("/tasks", {
      templateUrl: a + "views/tasks.html",
      controller: "TasksController",
      reloadOnSearch: !1,
      resolve: {
        verify: l
      }
    }).when("/apps/:appDefinitionId/tasks", {
      templateUrl: a + "views/tasks.html",
      controller: "TasksController",
      reloadOnSearch: !1,
      resolve: {
        verify: l
      }
    }).when("/task/:taskId", {
      templateUrl: a + "views/task.html",
      controller: "TaskController",
      resolve: {
        verify: l
      }
    }).when("/processDefinition/:processDefinitionId/start-process", {
      templateUrl: a + "views/start-process-by-definition.html",
      controller: "StartProcessController",
      resolve: {
        verify: l
      }
    }).when("/apps/:appDefinitionId/task/:taskId", {
      templateUrl: a + "views/task.html",
      controller: "TaskController",
      resolve: {
        verify: l
      }
    }).when("/processes", {
      templateUrl: a + "views/processes.html",
      controller: "ProcessesController",
      reloadOnSearch: !1,
      resolve: {
        verify: l
      }
    }).when("/apps/:appDefinitionId/processes", {
      templateUrl: a + "views/processes.html",
      controller: "ProcessesController",
      reloadOnSearch: !1,
      resolve: {
        verify: l
      }
    }).when("/process/:processId", {
      templateUrl: a + "views/process.html",
      controller: "ProcessController",
      resolve: {
        verify: l
      }
    }).when("/apps/:appDefinitionId/process/:processId", {
      templateUrl: a + "views/process.html",
      controller: "ProcessController",
      resolve: {
        verify: l
      }
    }).otherwise({
      redirectTo: ACTIVITI.CONFIG.appDefaultRoute || "/tasks"
    }), i.includeSpinner = !1, r.useSanitizeValueStrategy("sanitizeParameters"), r.useStaticFilesLoader({
      prefix: a + "i18n/",
      suffix: ".json"
    }), r.preferredLanguage(window.ACTIVITI_PREFERRED_LOCALE)
  }]).run(["$rootScope", "$routeParams", "$timeout", "$translate", "$location", "$http", "$window", "appResourceRoot", "AppDefinitionService", function(e, t, o, n, i, r, s, a) {
    e.restRootUrl = function() {
      return ACTIVITI.CONFIG.contextRoot
    }, e.config = ACTIVITI.CONFIG, e.appResourceRoot = a, e.activitiFieldIdPrefix = "activiti-";
    var l = n.proposedLanguage();
    "de" !== l && "en" !== l && "es" !== l && "fr" !== l && "it" !== l && n.use("en"), e.window = {};
    var c = function() {
      e.window.width = s.innerWidth, e.window.height = s.innerHeight
    };
    angular.element(s).bind("resize", function() {
      e.$apply(c())
    }), e.$watch("window.forceRefresh", function(t) {
      t && o(function() {
        c(), e.window.forceRefresh = !1
      })
    }), c(), e.mainNavigation = [{
      id: "login",
      title: "GENERAL.NAVIGATION.LOGIN",
      unauthenticated: !0
    }, {
      id: "tasks",
      title: "GENERAL.NAVIGATION.TASKS",
      path: "/tasks"
    }, {
      id: "processes",
      title: "GENERAL.NAVIGATION.PROCESSES",
      path: "/processes"
    }], e.mainPage = e.mainNavigation[0], e.mainNavigationActions = [{
      id: "processes",
      icon: "plus",
      title: "GENERAL.NAVIGATION.START-PROCESS",
      path: "/processes",
      params: {
        mode: "start"
      }
    }], e.appDefinitions = {}, e.setMainPage = function(t) {
      e.mainPage = t;
      var o;
      if (o = e.activeAppDefinition ? "/apps/" + e.activeAppDefinition.id + t.path : e.mainPage.path, i.url(o), t.params)
        for (var n in t.params) i.search(n, t.params[n])
    }, e.setMainPageById = function(t) {
      for (var o = 0; e.mainNavigation.length > o; o++)
        if (t == e.mainNavigation[o].id) {
          e.mainPage = e.mainNavigation[o];
          break
        }
    }, e.alerts = {
      queue: []
    }, e.showAlert = function(t) {
      t.queue.length > 0 ? (t.current = t.queue.shift(), t.timeout = o(function() {
        0 == t.queue.length ? (t.current = void 0, t.timeout = void 0) : e.showAlert(t)
      }, "error" == t.current.type ? 5e3 : 1e3)) : e.alerts.current = void 0
    }, e.addAlert = function(t, o) {
      var n = {
        message: t,
        type: o
      };
      e.alerts.timeout ? e.alerts.queue.push(n) : (e.alerts.queue.push(n), e.showAlert(e.alerts))
    }, e.dismissAlert = function() {
      e.alerts.timeout ? (o.cancel(e.alerts.timeout), e.alerts.timeout = void 0, e.showAlert(e.alerts)) : e.alerts.current = void 0
    }, e.addAlertPromise = function(t, o) {
      t && t.then(function(t) {
        e.addAlert(t, o)
      })
    }, e.model = {}, e.root = {}, e.officeLauncher = new OfficeLauncher, e.officeLauncher.setConsoleLoggingEnabled(!0), e.openOfficeDocument = function(t) {
      var o = s.location.protocol + "//" + s.location.hostname;
      if (s.location.port && 80 != window.location.port && (o += ":" + window.location.port), !e.officeLauncher.EditDocument(o + t.officeUrl)) {
        var n;
        "word" == t.simpleType ? n = "ms-word" : "excel" == t.simpleType && (n = "ms-excel"), "powerpoint" == t.simpleType && (n = "ms-powerpoint");
        var i = n + ":ofe%7Cu%7C" + e.officeLauncher.encodeUrl(o + t.officeUrl);
        s.location.href = i
      }
    }, e.loadProcessDefinitions = function(t) {
      var o = ACTIVITI.CONFIG.contextRoot + "/app/rest/process-definitions?latest=true";
      t && (o += "&appDefinitionId=" + t), r({
        method: "GET",
        url: o
      }).success(function(t) {
        e.root.processDefinitions = t.data
      }).error(function(e) {
        console.log("Something went wrong: " + e)
      })
    }, e.$on("$locationChangeStart", function(t, o) {
      e.root.headless = o.indexOf("headless") >= 0 ? !0 : !1
    }), e.safeApply = function(e) {
      var t = this.$root.$$phase;
      "$apply" == t || "$digest" == t ? e && "function" == typeof e && e() : this.$apply(e)
    }
  }]).run(["$rootScope", "$location", "$window", "AuthenticationSharedService", "$translate", "appName", "$modal", function(e, t, o, n, i, r, s) {
    var a = "/" + r + "/";
    e.logout = function() {
      n.logout()
    }, e.showAboutActiviti = function() {
      _internalCreateModal({
        template: "../views/modal/about-activiti.html?" + (new Date).getTime(),
        show: !0
      }, s, e)
    };
    var l = function(e) {
      var n, i = t.absUrl(),
        r = i.indexOf(a);
      n = null !== e && void 0 !== e && void 0 !== e.isFromLogout && e.isFromLogout === !0 ? i.substring(0, r) + "/#login" : i.substring(0, r) + "/#login?redirectUrl=" + encodeURIComponent(o.location.pathname + o.location.hash), o.location.href == n ? window.location.reload() : o.location.href = n
    };
    e.$on("event:auth-loginRequired", function() {
      e.authenticated = !1, e.authenticationChecked = !0, l()
    }), e.$on("event:auth-authConfirmed", function() {
      e.authenticated = !0, e.authenticationChecked = !0, ("" == t.path() || "#" == t.path() || "/login" == t.path()) && t.path("/")
    }), e.$on("event:auth-loginConfirmed", function() {
      n.authenticate()
    }), e.$on("event:auth-loginCancelled", function(t, o) {
      e.authenticated = !1, l(o)
    }), e.$on("event:auth-loginFailed", function() {
      e.addAlertPromise(i("LOGIN.MESSAGES.ERROR.AUTHENTICATION"), "error")
    }), e.backToLanding = function() {
      var e = t.absUrl(),
        n = e.indexOf(a);
      n >= 0 && (e = e.substring(0, n) + "/"), o.location.href = e
    }
  }]).filter("dateformat", function() {
  return function(e, t) {
    return e ? "fromNow" == t ? moment(e).fromNow() : "fromNowFull" == t ? moment(e).fromNow() + " (" + moment(e).format("MMMM Do YYYY") + ")" : t ? moment(e).format(t) : moment(e).calendar() : ""
  }
}).filter("duration", ["$translate", function(e) {
    return function(t) {
      if (t) {
        var o = moment.duration(t),
          n = "",
          i = o.hours();
        i > 0 && (n = n + i + " " + e.instant("GENERAL.TIME.HOURS") + " ");
        var r = o.minutes();
        return r > 0 && (n = n + r + " " + e.instant("GENERAL.TIME.MINUTES")), 0 == i && 0 == r && (n = o.seconds() + " " + e.instant("GENERAL.TIME.SECONDS")), n
      }
      return t
    }
  }]).filter("username", function() {
  return function(e) {
    return e ? e.firstName ? e.firstName + " " + e.lastName : e.lastName : ""
  }
}).filter("amount", function() {
  return function(e, t, o) {
    if (e !== void 0 && null !== e && "" !== e) {
      var n = e + "",
        i = n.split(".");
      return n = o || "", n += i[0], t && (i.length > 1 ? (n += ".", n += i[1], 1 === i[1].length && (n += "0")) : n += ".00"), n
    }
    return e
  }
}), angular.module("activitiApp").service("NavigationService", ["$rootScope", "$location", "$q", "$translate", "AppDefinitionService", function(e, t) {
  function o() {
    var t = "";
    return e.activeAppDefinition && !ACTIVITI.CONFIG.integrationProfile && (t = "/apps/" + e.activeAppDefinition.id), t
  }

  function n(e, n) {
    if (t.url(o() + e), n)
      for (var i in n) t.search(i, n[i])
  }
  this.openTaskPage = function(e) {
    e ? n("/tasks", {
      taskId: e
    }) : n("/tasks")
  }, this.openProcessPage = function(e) {
    e ? n("/processes", {
      processId: e
    }) : n("/processes")
  }, this.openProcessPageInStartMode = function() {
    n("/processes", {
      mode: "start"
    })
  }
}]), angular.module("activitiApp").service("FilterService", ["$rootScope", "$http", "$q", "$translate", "AppDefinitionService", function(e, t, o, n) {
  function i() {
    return e.activeAppDefinition || null
  }

  function r(e) {
    return e.appId || i()
  }

  function s(e, t, o) {
    o.filter = angular.copy(t.filter), e.filters.push(o), e.order.push(o.id)
  }

  function a(e, t, o) {
    for (var n = 0; e.length > n; n++)
      if (e[n].id === t.id) {
        e[n] = o, e[n].filter = angular.extend({}, t.filter);
        break
      }
  }

  function l(e, t) {
    if (t.filterId)
      for (var o = 0; e.filters.length > o; o++) e.filters[o].id === t.filterId ? e.filters[o].recent = !0 : (e.filters[o].recent && (e.previousFilterId = e.filters[o].id), e.filters[o].recent = !1)
  }

  function c(e) {
    if (0 === e.filters.length) return void 0;
    for (var t = void 0, o = 0; e.filters.length > o; o++) {
      if (e.filters[o].recent) return e.filters[o];
      e.filters[o].id === e.previousFilterId && (t = e.filters[o])
    }
    return t || e.filters[0]
  }

  function d(e, t) {
    for (var o = 0; e.filters.length > o; o++)
      if (e.filters[o].id === t) {
        e.filters.splice(o, 1), e.order.splice(o, 1);
        break
      }
  }
  var u = {
      tasks: {},
      processes: {}
    },
    p = ["glyphicon-asterisk", "glyphicon-plus", "glyphicon-euro", "glyphicon-cloud", "glyphicon-envelope", "glyphicon-pencil", "glyphicon-glass", "glyphicon-music", "glyphicon-search", "glyphicon-heart", "glyphicon-star", "glyphicon-star-empty", "glyphicon-user", "glyphicon-film", "glyphicon-th-large", "glyphicon-th", "glyphicon-th-list", "glyphicon-ok", "glyphicon-remove", "glyphicon-zoom-in", "glyphicon-zoom-out", "glyphicon-off", "glyphicon-signal", "glyphicon-cog", "glyphicon-trash", "glyphicon-home", "glyphicon-file", "glyphicon-time", "glyphicon-road", "glyphicon-download-alt", "glyphicon-download", "glyphicon-upload", "glyphicon-inbox", "glyphicon-play-circle", "glyphicon-repeat", "glyphicon-refresh", "glyphicon-list-alt", "glyphicon-lock", "glyphicon-flag", "glyphicon-headphones", "glyphicon-volume-up", "glyphicon-tag", "glyphicon-tags", "glyphicon-book", "glyphicon-bookmark", "glyphicon-print", "glyphicon-camera", "glyphicon-list", "glyphicon-facetime-video", "glyphicon-picture", "glyphicon-map-marker", "glyphicon-adjust", "glyphicon-tint", "glyphicon-edit", "glyphicon-share", "glyphicon-check", "glyphicon-move", "glyphicon-play", "glyphicon-eject", "glyphicon-plus-sign", "glyphicon-minus-sign", "glyphicon-remove-sign", "glyphicon-ok-sign", "glyphicon-question-sign", "glyphicon-info-sign", "glyphicon-screenshot", "glyphicon-remove-circle", "glyphicon-ok-circle", "glyphicon-ban-circle", "glyphicon-share-alt", "glyphicon-exclamation-sign", "glyphicon-gift", "glyphicon-leaf", "glyphicon-fire", "glyphicon-eye-open", "glyphicon-eye-close", "glyphicon-warning-sign", "glyphicon-plane", "glyphicon-calendar", "glyphicon-random", "glyphicon-comment", "glyphicon-magnet", "glyphicon-retweet", "glyphicon-shopping-cart", "glyphicon-folder-close", "glyphicon-folder-open", "glyphicon-hdd", "glyphicon-bullhorn", "glyphicon-bell", "glyphicon-certificate", "glyphicon-thumbs-up", "glyphicon-thumbs-down", "glyphicon-hand-left", "glyphicon-globe", "glyphicon-wrench", "glyphicon-tasks", "glyphicon-filter", "glyphicon-briefcase", "glyphicon-dashboard", "glyphicon-paperclip", "glyphicon-heart-empty", "glyphicon-link", "glyphicon-phone", "glyphicon-pushpin", "glyphicon-usd", "glyphicon-gbp", "glyphicon-sort", "glyphicon-flash", "glyphicon-record", "glyphicon-save", "glyphicon-open", "glyphicon-saved", "glyphicon-send", "glyphicon-floppy-disk", "glyphicon-credit-card", "glyphicon-cutlery", "glyphicon-earphone", "glyphicon-phone-alt", "glyphicon-tower", "glyphicon-stats", "glyphicon-cloud-download", "glyphicon-cloud-upload", "glyphicon-tree-conifer", "glyphicon-tree-deciduous"],
    m = function(e) {
      var n = o.defer();
      return t(e).success(function(e) {
        n.resolve(e)
      }).error(function(e) {
        n.reject(e)
      }), n.promise
    };
  this.createTaskFilter = function(e) {
    var n = o.defer();
    return t({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filters/tasks",
      data: e
    }).success(function(t) {
      s(u.tasks[r(e)], e, t), n.resolve(t)
    }), n.promise
  }, this.updateTaskFilter = function(e, n) {
    var i = o.defer();
    return t({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filters/tasks/" + e,
      data: n
    }).success(function(e) {
      a(u.tasks[r(n)].filters, n, e), i.resolve(e)
    }), i.promise
  }, this.deleteTaskFilter = function(e) {
    return d(u.tasks[r(e)], e.id), m({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filters/tasks/" + e.id
    })
  }, this.createDefaultTaskFilters = function(e, i) {
    for (var r = [], s = [{
      id: "involved",
      name: n.instant("TASK.FILTER.INVOLVED-FILTER-NAME"),
      icon: "glyphicon-align-left",
      filter: {
        name: "",
        sort: "created-desc",
        state: "open",
        assignment: "involved"
      },
      settings: {
        required: !0
      }
    }, {
      id: "assignee",
      name: n.instant("TASK.FILTER.ASSIGNEE-FILTER-NAME"),
      icon: "glyphicon-inbox",
      filter: {
        name: "",
        sort: "created-desc",
        state: "open",
        assignment: "assignee"
      },
      settings: {
        selected: !0
      }
    }, {
      id: "candidate",
      name: n.instant("TASK.FILTER.CANDIDATE-FILTER-NAME"),
      icon: "glyphicon-record",
      filter: {
        name: "",
        sort: "created-desc",
        state: "open",
        assignment: "candidate"
      }
    }, {
      id: "completed",
      name: n.instant("TASK.FILTER.COMPLETED-FILTER-NAME"),
      icon: "glyphicon-ok-sign",
      filter: {
        name: "",
        sort: "created-desc",
        state: "completed",
        assignment: "involved"
      },
      settings: {
        selected: !0
      }
    }], a = 0; s.length > a; a++) {
      var l = {
        name: s[a].name,
        index: a,
        icon: s[a].icon,
        filter: s[a].filter,
        appId: e
      };
      r.push(t({
        method: "POST",
        url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filters/tasks",
        data: l
      }))
    }
    o.all(r).then(function(t) {
      for (var o = u.tasks[e] || {
        filters: [],
        order: []
      }, n = 0; s.length > n; n++) {
        var r = t[n].data;
        r.filter = angular.copy(s[n].filter), o.filters.push(r), o.order.push(r.id)
      }
      i({
        filters: o.filters,
        recent: o.filters[0]
      })
    })
  }, this.getRecentTaskFilter = function(e) {
    return c(u.tasks[e])
  }, this.getTaskFilters = function(e) {
    var n = o.defer();
    return u.tasks[e] && u.tasks[e].filters ? n.resolve({
      filters: u.tasks[e].filters,
      recent: c(u.tasks[e])
    }) : t({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filters/tasks",
      params: {
        appId: e
      }
    }).success(function(t) {
      u.tasks[e] = {
        filters: t.data,
        order: []
      };
      for (var o = void 0, i = 0; t.data.length > i; i++) u.tasks[e].order[i] = t.data[i].id, (t.data[i].recent || 0 === i) && (o = t.data[i]);
      n.resolve({
        filters: t.data,
        recent: o
      })
    }), n.promise
  }, this.filterTasks = function(e) {
    return l(u.tasks[e.appDefinitionId], e), m({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filter/tasks",
      data: e
    })
  }, this.checkTaskFiltersOrder = function(e) {
    for (var t = u.tasks[e].filters, o = u.tasks[e].order, n = !1, i = 0; t.length > i; i++) o[i] !== t[i].id && (n = !0, o[i] = t[i].id);
    n && m({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filters/tasks",
      data: {
        appId: e,
        order: o
      }
    })
  }, this.getFilterIcons = function() {
    return p
  }, this.createProcessInstanceFilter = function(e) {
    var n = o.defer();
    return t({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filters/processes",
      data: e
    }).success(function(t) {
      s(u.processes[r(e)], e, t), n.resolve(t)
    }), n.promise
  }, this.createDefaultProcessFilters = function(e, i) {
    for (var r = [], s = [{
      id: "running",
      name: n.instant("PROCESS.FILTER.RUNNING-FILTER-NAME"),
      icon: "glyphicon-random",
      filter: {
        name: "",
        sort: "created-desc",
        state: "running"
      },
      settings: {
        required: !0
      }
    }, {
      id: "completed",
      name: n.instant("PROCESS.FILTER.COMPLETED-FILTER-NAME"),
      icon: "glyphicon-ok-sign",
      filter: {
        name: "",
        sort: "created-desc",
        state: "completed"
      },
      settings: {
        selected: !0
      }
    }, {
      id: "all",
      name: n.instant("PROCESS.FILTER.ALL-FILTER-NAME"),
      icon: "glyphicon-th",
      filter: {
        name: "",
        sort: "created-desc",
        state: "all"
      }
    }], a = 0; s.length > a; a++) {
      var l = {
        name: s[a].name,
        index: a,
        icon: s[a].icon,
        filter: s[a].filter,
        appId: e
      };
      r.push(t({
        method: "POST",
        url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filters/processes",
        data: l
      }))
    }
    o.all(r).then(function(t) {
      for (var o = u.processes[e] || {
        filters: [],
        order: []
      }, n = 0; s.length > n; n++) {
        var r = t[n].data;
        r.filter = angular.copy(s[n].filter), o.filters.push(r), o.order.push(r.id)
      }
      i({
        filters: o.filters,
        recent: o.filters[0]
      })
    })
  }, this.getProcessFilters = function(e) {
    var n = o.defer();
    return u.processes[e] && u.processes[e].filters ? n.resolve({
      filters: u.processes[e].filters,
      recent: c(u.processes[e])
    }) : t({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filters/processes",
      params: {
        appId: e
      }
    }).success(function(t) {
      u.processes[e] = {
        filters: t.data,
        order: []
      };
      for (var o = void 0, i = 0; t.data.length > i; i++) u.processes[e].order[i] = t.data[i].id, (t.data[i].recent || 0 === i) && (o = t.data[i]);
      n.resolve({
        filters: t.data,
        recent: o
      })
    }), n.promise
  }, this.filterProcesses = function(e) {
    return l(u.processes[e.appDefinitionId], e), m({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filter/process-instances",
      data: e
    })
  }, this.updateProcessInstanceFilter = function(e, n) {
    var i = o.defer();
    return t({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filters/processes/" + e,
      data: n
    }).success(function(e) {
      a(u.processes[r(n)].filters, n, e), i.resolve(e)
    }), i.promise
  }, this.deleteProcessInstanceFilter = function(e) {
    return d(u.processes[r(e)], e.id), m({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filters/processes/" + e.id
    })
  }, this.getRecentProcessInstanceFilter = function(e) {
    return c(u.processes[e])
  }, this.checkProcessInstanceFiltersOrder = function(e) {
    for (var t = u.processes[e].filters, o = u.processes[e].order, n = !1, i = 0; t.length > i; i++) o[i] !== t[i].id && (n = !0, o[i] = t[i].id);
    n && m({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/filters/processes",
      data: {
        appId: e,
        order: o
      }
    })
  }
}]), angular.module("activitiApp").service("CommentService", ["$http", "$q", "EventTrackingService", function(e, t, o) {
  this.getTaskComments = function(o) {
    var n = t.defer();
    return e({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + o + "/comments",
      params: {
        latestFirst: !0
      }
    }).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  }, this.createTaskComment = function(n, i) {
    var r = t.defer(),
      s = {
        message: i
      };
    e({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + n + "/comments",
      data: s
    }).success(function(e) {
      r.resolve(e)
    }).error(function(e) {
      r.reject(e)
    });
    var a = r.promise;
    return o.trackEvent("workflow", "task-add-comment"), a
  }, this.getProcessInstanceComments = function(o) {
    var n = t.defer();
    return e({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + o + "/comments",
      params: {
        latestFirst: !0
      }
    }).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  }, this.createProcessInstanceComment = function(n, i) {
    var r = t.defer(),
      s = {
        message: i
      };
    e({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + n + "/comments",
      data: s
    }).success(function(e) {
      r.resolve(e)
    }).error(function(e) {
      r.reject(e)
    });
    var a = r.promise;
    return o.trackEvent("workflow", "processinstance-add-comment"), a
  }
}]), angular.module("activitiApp").service("ProcessService", ["$http", "$q", "$rootScope", "RelatedContentService", "EventTrackingService", function(e, t, o, n, i) {
  var r = function(o) {
    var n = t.defer();
    return e(o).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  };
  this.queryProcessInstances = function(e) {
    return r({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/query/process-instances",
      data: e
    })
  }, this.getProcessDefinitions = function(e) {
    var t = ACTIVITI.CONFIG.contextRoot + "/app/rest/process-definitions?latest=true";
    return e && (t += "&appDefinitionId=" + e), r({
      method: "GET",
      url: t
    })
  }, this.getProcessDefinitionById = function(e) {
    var t = ACTIVITI.CONFIG.contextRoot + "/app/rest/process-definition/" + e;
    return r({
      method: "GET",
      url: t
    })
  }, this.getProcess = function(e) {
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + e
    })
  }, this.createProcess = function(n) {
    var r = t.defer();
    e({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances",
      data: n
    }).success(function(e) {
      o.$broadcast("new-process-created", e), r.resolve(e)
    }).error(function(e) {
      o.addAlert(e.message, "error"), r.reject(e)
    });
    var s = r.promise;
    return i.trackEvent("workflow", "create-standalone-process"), s
  }, this.deleteProcess = function(n) {
    var r = t.defer();
    e({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + n
    }).success(function(e) {
      o.$broadcast("processinstance-deleted", e), r.resolve(e)
    }).error(function(e) {
      o.addAlert(e.message, "error"), r.reject(e)
    });
    var s = r.promise;
    return i.trackEvent("workflow", "delete-processinstance"), s
  }, this.getHistoricProcessInstanceDecisionTasks = function(e) {
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + e + "/decision-tasks"
    })
  }
}]), angular.module("activitiApp").service("TaskService", ["$http", "$q", "$rootScope", "RelatedContentService", "EventTrackingService", function(e, t, o, n, i) {
  var r = function(o) {
    var n = t.defer();
    return e(o).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  };
  this.getProcessInstanceTasks = function(e, t) {
    var o = {
      processInstanceId: e
    };
    return t && (o.state = "completed"), r({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/query/tasks",
      data: o
    })
  }, this.involveUserInTask = function(e, t) {
    var o = {
        userId: e
      },
      n = r({
        method: "PUT",
        url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + t + "/action/involve",
        data: o
      });
    return n.then(function() {
      i.trackEvent("workflow", "task-involve-person")
    }), n
  }, this.involveUserInTaskByEmail = function(e, t) {
    var o = {
        email: e
      },
      n = r({
        method: "PUT",
        url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + t + "/action/involve",
        data: o
      });
    return n.then(function() {
      i.trackEvent("workflow", "task-involve-by-email")
    }), n
  }, this.removeInvolvedUserInTask = function(e, t) {
    var o = {};
    null !== e.id && void 0 !== e.id ? o.userId = e.id : o.email = e.email;
    var n = r({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + t + "/action/remove-involved",
      data: o
    });
    return n.then(function() {
      i.trackEvent("workflow", "task-remove-involved-person")
    }), n
  }, this.queryTasks = function(e) {
    return r({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/query/tasks",
      data: e
    })
  }, this.completeTask = function(n) {
    var r = t.defer();
    e({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + n + "/action/complete"
    }).success(function(e) {
      o.$broadcast("task-completed", {
        taskId: n
      }), "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.taskCompleted !== void 0 && ALFRESCO.formExtensions.taskCompleted(n), r.resolve(e)
    }).error(function(e) {
      o.addAlert(e.message, "error"), "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.taskCompletedError !== void 0 && ALFRESCO.formExtensions.taskCompletedError(n, e.message), r.reject(e)
    });
    var s = r.promise;
    return i.trackEvent("workflow", "task-complete-no-form"), s
  }, this.claimTask = function(e) {
    var t = r({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e + "/action/claim"
    });
    return i.trackEvent("workflow", "task-claim"), t
  }, this.unClaimTask = function(e) {
    var t = r({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e + "/action/unclaim"
    });
    return t
  }, this.getRelatedContent = function(o) {
    var i = t.defer();
    return e({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + o + "/content"
    }).success(function(e) {
      if (e && e.data)
        for (var t = 0; e.data.length > t; t++) n.addUrlToContent(e.data[t]);
      i.resolve(e)
    }).error(function(e) {
      i.reject(e)
    }), i.promise
  }, this.assignTask = function(e, t) {
    var o = {
        assignee: t
      },
      n = r({
        method: "PUT",
        url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e + "/action/assign",
        data: o
      });
    return n.then(function() {
      i.trackEvent("workflow", "task-assign-by-user")
    }), n
  }, this.assignTaskByEmail = function(e, t) {
    var o = r({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e + "/action/assign",
      data: {
        email: t
      }
    });
    return o.then(function() {
      i.trackEvent("workflow", "task-assign-by-email")
    }), o
  }, this.updateTask = function(e, t) {
    return r({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e,
      data: t
    })
  }, this.getTask = function(e) {
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e
    })
  }, this.getChecklist = function(e) {
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e + "/checklist"
    })
  }, this.orderChecklist = function(e, t) {
    return r({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e + "/checklist",
      data: t
    })
  }, this.attachForm = function(e, t) {
    return r({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e + "/action/attach-form",
      data: {
        formId: t
      }
    })
  }, this.removeForm = function(e) {
    return r({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e + "/action/remove-form"
    })
  }, this.createTask = function(n) {
    var r = t.defer();
    e({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks",
      data: n
    }).success(function(e) {
      o.$broadcast("new-task-created", e), r.resolve(e)
    }).error(function(e) {
      o.addAlert(e.message, "error"), r.reject(e)
    });
    var s = r.promise;
    return i.trackEvent("workflow", "create-standalone-task"), s
  }, this.createChecklistTask = function(n, i) {
    var r = t.defer();
    e({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + n + "/checklist",
      data: i
    }).success(function(e) {
      r.resolve(e)
    }).error(function(e) {
      o.addAlert(e.message, "error"), r.reject(e)
    });
    var s = r.promise;
    return s
  }, this.deleteChecklistTask = function(e) {
    return r({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e
    })
  }, this.getProcessInstanceVariables = function(e) {
    var t = {
      taskId: e
    };
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/task-forms/" + e + "/variables",
      data: t
    })
  }
}]), angular.module("activitiApp").service("FormService", ["$http", "$q", "EventTrackingService", function(e, t, o) {
  var n = function(o) {
    var n = t.defer();
    return e(o).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  };
  this.getTaskForm = function(e) {
    return n({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/task-forms/" + e
    })
  }, this.completeTaskForm = function(e, t) {
    var i = n({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/task-forms/" + e,
      data: t
    });
    return i.then(function() {
      o.trackEvent("workflow", "task-complete-with-form")
    }), i
  }, this.saveTaskForm = function(e, t) {
    var i = n({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/task-forms/" + e + "/save-form",
      data: t
    });
    return i.then(function() {
      o.trackEvent("workflow", "task-save-with-form")
    }), i
  }, this.getStartForm = function(e) {
    return n({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-definitions/" + e + "/start-form"
    })
  }, this.getStartFormInstance = function(e) {
    return n({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + e + "/start-form"
    })
  }, this.completeStartForm = function(e) {
    var t = n({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/",
      data: e
    });
    return t.then(function() {
      o.trackEvent("workflow", "processinstance-start-with-form")
    }), t
  }, this.getHistoricInstanceVariables = function(e) {
    return n({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + e + "/historic-variables"
    })
  }
}]), angular.module("activitiApp").service("AppDefinitionService", ["$http", "$q", "$rootScope", "$location", "$translate", function(e, t, o, n, i) {
  var r = function(o) {
    var n = t.defer();
    return e(o).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  };
  this.setActiveAppDefinitionId = function(e) {
    e ? o.appDefinitions[e] ? o.activeAppDefinition = o.appDefinitions[e] : (o.activeAppDefinition = {
      id: e
    }, o.appDefinitions[e] = o.activeAppDefinition, this.getAppDefinition(e).then(function(e) {
      o.appDefinitions[e.id] = e, o.activeAppDefinition && o.activeAppDefinition.id == e.id && (o.activeAppDefinition = e)
    }, function() {
      o.addAlertPromise(i("APP-DEFINITION.MESSAGE.NOT-FOUND"), "error"), n.path("/")
    })) : o.activeAppDefinition = void 0
  }, this.getAppDefinition = function(e) {
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/runtime/app-definitions/" + e
    })
  }, this.getIntegrationAppDefinitionId = function() {
    if (ACTIVITI.CONFIG.integrationProfile) {
      for (var e = o.account.apps, t = 0, n = e.length; n > t; t++)
        if (e[t].name === ACTIVITI.CONFIG.integrationProfile) return e[t].id;
      return !1
    }
    return null
  }
}]), activitiApp.controller("AddCommentController", ["$scope", "$location", "AuthenticationSharedService", "$timeout", function(e) {
  e.popupModel = {
    newComment: "",
    added: !1
  }, e.createComment = function() {
    e.popupModel.added = !0, e.$emit("new-comment-confirm", e.popupModel.newComment), e.$$childHead && e.$$childHead.$hide()
  }, e.$on("tooltip.hide", function() {
    e.popupModel.added ? e.popupModel.added = !1 : e.$emit("new-comment-cancelled", e.popupModel.newComment)
  })
}]), angular.module("activitiApp").controller("DocumentPreviewController", ["$rootScope", "$scope", "$modal", "appResourceRoot", "RelatedContentService", "ContentAccountService", function(e, t, o, n, i, r) {
  t.contentAccounts = {}, r.getAccounts().then(function(e) {
    if (e && e.data)
      for (var o = 0; e.data.length > o; o++) {
        var n = e.data[o];
        t.contentAccounts[n.serviceId] = n
      }
  }), i.checkRenditions(t.content), t.openOfficeDocument = e.openOfficeDocument, t.showDetails = function() {
    var e = _internalCreateModal({
      template: n + "views/modal/content-details.html",
      show: !0
    }, o, t);
    e.$scope.content = t.content, e.$scope.contentAccounts = t.contentAccounts, e.$scope.editable = t.editable, e.$scope.readOnly = t.readOnly, e.$scope.$on("content-deleted", function() {
      e.$scope.$hide(), t.deleted({
        content: t.content
      })
    })
  }, t.deleteContent = function(e, r) {
    var s = _internalCreateModal({
      template: n + "views/modal/delete-content.html",
      show: !0
    }, o, t);
    s.$scope.popup = {
      content: e,
      loading: !1
    }, s.$scope.ok = function() {
      i.deleteContent(e.id, r && r.id).then(function() {
        t.deleted({
          content: e
        }), t.content = null
      })
    }
  }
}]), angular.module("activitiApp").controller("TasksController", ["$rootScope", "$scope", "$translate", "$timeout", "$location", "$modal", "$popover", "filterFilter", "appResourceRoot", "CommentService", "TaskService", "$routeParams", "AppDefinitionService", "FilterService", "NavigationService", function(e, t, o, n, i, r, s, a, l, c, d, u, p, m, f) {
  function v() {
    t.model.filter.loading = !0, d.queryTasks({
      appDefinitionId: t.appDefinitionId,
      taskId: t.model.filter.taskId
    }).then(function(e) {
      t.model.tasks = e.data, t.model.hasNextPage = !1, t.selectedTask = e.data.length > 0 ? e.data[0] : void 0, t.model.filter.loading = !1
    }, function() {
      t.model.tasks = [], t.model.filter.loading = !1
    })
  }

  function h(e) {
    m.getTaskFilters(t.appDefinitionId).then(function(o) {
      t.model.filters = o.filters, o.filters.length > 0 ? I(o, e) : g(e)
    })
  }

  function g(e) {
    m.createDefaultTaskFilters(t.appDefinitionId, function(t) {
      I(t, e)
    })
  }

  function I(e, o) {
    o ? t.selectFilter(e.recent) : t.applyFilter(e.recent)
  }

  function T(e) {
    i.search().taskId && (e && (t.model.filter.taskId = void 0), i.search("taskId", null))
  }
  if (e.setMainPageById("tasks"), t.$on("$routeUpdate", function() {
    t.model.filter.taskId !== i.search().taskId && (t.model.filter.taskId = i.search().taskId, t.model.filter.taskId ? (t.model.filter.expanded = !1, v(t.model.filter.taskId)) : t.filterTasks({
      page: 0,
      filter: t.model.filter.edit.filter
    }))
  }), t.model = {
    page: 0,
    filter: {
      previousName: null,
      loading: !1,
      expanded: !1,
      taskId: i.search().taskId
    },
    filterIconsHeader: {
      expanded: !1
    },
    filterIconsFooter: {
      expanded: !1
    },
    createTask: {
      expanded: !1
    },
    filterSearchTerm: {
      expanded: !1
    }
  }, t.model.sorts = [{
    id: "created-desc",
    title: o.instant("TASK.FILTER.CREATED-DESC"),
    icon: "glyphicon-sort-by-attributes-alt"
  }, {
    id: "created-asc",
    title: o.instant("TASK.FILTER.CREATED-ASC"),
    icon: "glyphicon-sort-by-attributes"
  }, {
    id: "due-desc",
    title: o.instant("TASK.FILTER.DUE-DESC"),
    icon: "glyphicon-sort-by-attributes-alt"
  }, {
    id: "due-asc",
    title: o.instant("TASK.FILTER.DUE-ASC"),
    icon: "glyphicon-sort-by-attributes"
  }], t.model.stateFilterOptions = [{
    id: "open",
    title: "TASK.FILTER.STATE-OPEN"
  }, {
    id: "completed",
    title: "TASK.FILTER.STATE-COMPLETED"
  }], t.model.assignmentOptions = [{
    id: "involved",
    title: o.instant("TASK.FILTER.ASSIGNMENT-INVOLVED")
  }, {
    id: "assignee",
    title: o.instant("TASK.FILTER.ASSIGNMENT-ASSIGNEE")
  }, {
    id: "candidate",
    title: o.instant("TASK.FILTER.ASSIGNMENT-CANDIDATE")
  }], t.account && t.account.groups && t.account.groups.length > 0)
    for (var C = 0; t.account.groups.length > C; C++) 1 == t.account.groups[C].type && t.model.assignmentOptions.push({
      id: "group_" + t.account.groups[C].id,
      title: o.instant("TASK.FILTER.ASSIGNMENT-GROUP", t.account.groups[C])
    });
  t.appDefinitionId = u.appDefinitionId || p.getIntegrationAppDefinitionId(), t.missingAppdefinition = t.appDefinitionId === !1, p.setActiveAppDefinitionId(t.appDefinitionId), t.nextPage = function() {
    t.model.page = t.model.page + 1, t.refreshFilter()
  }, t.resetPaging = function() {
    t.model.page = 0
  }, t.selectFilter = function(e, o) {
    o && t.model.filter.selected && e.id === t.model.filter.selected.id || (T(!0), t.collapseTaskForm(), t.applyFilter(e), t.filterTasks({
      page: 0,
      filterId: e.id,
      filter: e.filter
    }))
  }, t.applyFilter = function(e) {
    t.model.filter.selected = e, t.model.filter.edit = angular.copy(e), t.model.page = 0
  }, t.resetFilter = function() {
    t.model.page = 0, t.model.filter.edit = angular.copy(t.model.filter.selected), t.filterTasks({
      page: 0,
      filter: t.model.filter.edit.filter
    }), t.model.filter.modified = !1
  }, t.filterChanged = function() {
    T(!0), t.model.page = 0, t.filterTasks({
      page: 0,
      filter: t.model.filter.edit.filter
    }), t.model.filter.modified = !0
  }, t.editFilter = function() {
    t.model.filter.expanded = !0, t.collapseTaskForm()
  }, t.createNewFilter = function() {
    var e = {
      icon: "glyphicon-filter"
    };
    e.filter = angular.copy(t.model.filter.edit.filter), t.model.filter.edit = e, t.model.filter.expanded = !0, T()
  }, t.saveFilter = function(e) {
    e.id ? t.updateFilter(e) : t.createFilter(e), t.model.filter.modified = !1
  }, t.createFilter = function(e) {
    var o = {
      name: e.name,
      filter: e.filter,
      appId: t.appDefinitionId
    };
    o.icon = e.icon || "glyphicon-filter", m.createTaskFilter(o).then(function(e) {
      t.selectFilter(e)
    })
  }, t.updateFilter = function(e) {
    m.updateTaskFilter(e.id, e).then(function(e) {
      t.selectFilter(e)
    })
  }, t.deleteFilter = function(e) {
    m.deleteTaskFilter(e).then(function() {
      0 === t.model.filters.length ? g(!0) : t.selectFilter(m.getRecentTaskFilter(t.appDefinitionId))
    })
  }, t.reloadTaskList = function() {
    T(!0), t.filterTasks({
      page: 0,
      filter: t.model.filter.edit.filter
    })
  }, t.refreshFilter = function() {
    T(!0), t.filterTasks({
      page: t.model.page,
      filter: t.model.filter.edit.filter
    })
  }, t.filterTasks = function(e) {
    e.appDefinitionId = t.appDefinitionId, t.model.filter.loading = !0, e.page && 0 !== e.page || (t.model.tasks = []), m.filterTasks(e).then(function(e) {
      if (t.model.filter.loading = !1, 0 === e.start) t.model.tasks = e.data, t.selectedTask = t.model.tasks[0];
      else
        for (var o = 0; e.data.length > o; o++) t.model.tasks.push(e.data[o]);
      t.model.hasNextPage = e.start + e.size < e.total
    })
  }, t.selectTask = function(e) {
    t.selectedTask = e
  }, t.createTask = function() {
    t.newTask = {
      name: "New task"
    }, t.model.createTask.expanded = !0
  }, t.confirmTaskCreation = function(n) {
    if (n || (n = t.newTask), n && n.name) {
      var i = {
        name: n.name,
        description: n.description,
        assignee: {
          id: e.account.id
        }
      };
      e.activeAppDefinition && (i.category = "" + e.activeAppDefinition.id), n.loading = !0, d.createTask(i).then(function(i) {
        n.loading = !1, e.addAlertPromise(o("TASK.ALERT.CREATED", i)), t.collapseTaskForm(), f.openTaskPage(i.id)
      })
    }
  }, t.startProcess = function() {
    f.openProcessPageInStartMode()
  }, t.collapseFilter = function() {
    t.model.filter.expanded = !1, t.model.filter.editName = !1, t.model.filter.modified ? t.resetFilter() : t.model.filter.edit = angular.copy(t.model.filter.selected)
  }, t.collapseTaskForm = function() {
    t.model.createTask.expanded = !1
  }, t.$on("task-completed", function(n, i) {
    e.addAlertPromise(o("TASK.ALERT.COMPLETED", i)), i && i.taskId == t.selectedTask.id && (t.selectedTask = void 0, t.resetPaging(), t.refreshFilter())
  }), t.$on("task-saved", function(t, n) {
    e.addAlertPromise(o("TASK.ALERT.SAVED", n))
  }), t.$on("task-completed-error", function(t, o) {
    e.addAlert(o.error.message, "error")
  }), t.$on("task-save-error", function(t, o) {
    e.addAlert(o.error.message, "error")
  }), t.$on("checklist-task-deleted", function(e, o) {
    if (t.model.tasks && t.model.tasks.length > 0)
      for (var n = 0; t.model.tasks.length > n; n++)
        if (t.model.tasks[n].id === o) {
          t.model.tasks.splice(n, 1);
          break
        }
  }), e.loadProcessDefinitions(t.appDefinitionId);
  var F = t.$watch("root.processDefinitions", function(e) {
    if (null !== e && void 0 != e && e.length > 0) {
      var o = angular.copy(e);
      o.splice(0, 0, {
        name: ""
      }), t.model.processDefinitions = o, F()
    }
  });
  t.model.filter.taskId ? (h(!1), v(t.model.filter.taskId)) : h(!0), t.toggleChangeName = function() {
    t.model.filter.editName || (t.model.filter.previousName = t.model.filter.edit.name), t.model.filter.editName = !t.model.filter.editName, t.model.filterIconsFooter.expanded = !1
  }, t.toggleChangeIcon = function(e) {
    t.model[e].expanded || t.icons || (t.icons = m.getFilterIcons(), t.currentIconPage = 1, t.iconPageSize = 35), t.model[e].expanded = !t.model[e].expanded, t.model.filter.editName = !1
  }, t.selectIcon = function(e) {
    t.model.filter.edit.icon = e, t.model.filterIconsHeader.expanded = !1, t.model.filterIconsFooter.expanded = !1
  }, t.orderFilterlist = function(e) {
    t.model.filters.splice(e, 1), m.checkTaskFiltersOrder(t.appDefinitionId)
  }
}]), angular.module("activitiApp").controller("TaskController", ["$rootScope", "$scope", "$translate", "$timeout", "$location", "$modal", "$popover", "appResourceRoot", "CommentService", "TaskService", "$routeParams", "AppDefinitionService", "NavigationService", function(e, t, o, n, i, r, s, a, l, c, d, u, p) {
  e.setMainPageById("tasks"), t.selectedTask = {
    id: d.taskId
  }, t.appDefinitionId = d.appDefinitionId || u.getIntegrationAppDefinitionId(), t.$on("task-completed", function(n, i) {
    e.addAlertPromise(o("TASK.ALERT.COMPLETED", i)), t.openTasks()
  }), t.openTasks = function() {
    p.openTaskPage()
  }
}]), angular.module("activitiApp").controller("TaskDetailController", ["$rootScope", "$scope", "$translate", "$http", "$location", "$routeParams", "appResourceRoot", "CommentService", "TaskService", "FormService", "RelatedContentService", "EventTrackingService", "$timeout", "$modal", "$popover", "NavigationService", "ProcessService", "$filter", function(e, t, o, n, i, r, s, a, l, c, d, u, p, m, f, v, h, g) {
  t.model = {
    task: t.selectedTask,
    completeButtonDisabled: !1,
    claimButtonDisabled: !1,
    uploadInProgress: !1
  }, t.activeTab = "form", t.model.involvementSummary = {
    loading: !1
  }, t.model.contentSummary = {
    loading: !1
  }, t.model.commentSummary = {
    loading: !1
  }, t.model.checklistSummary = {
    loading: !1
  }, t.resetModel = function() {
    t.taskTabs = [], null != t.model.task.formKey ? (t.taskTabs.push({
      id: "form",
      title: "TASK.TITLE.FORM"
    }), t.activeTab = "form") : t.activeTab = "details", t.taskTabs.push({
      id: "details",
      title: "TASK.TITLE.DETAILS"
    }), t.model.involvementSummary = {
      loading: !0
    }, t.model.contentSummary = {
      loading: !0
    }, t.model.commentSummary = {
      loading: !0
    }, t.model.checklistSummary = {
      loading: !0
    }, t.model.content = void 0, t.model.comments = void 0, p(function() {
      e.window.forceRefresh = !0
    }, 100);
    var o = new Date;
    t.today = new Date(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0, 0)
  }, t.showPeople = function() {
    t.activeTab = "details"
  }, t.showContent = function() {
    t.activeTab = "details"
  }, t.showComments = function() {
    t.activeTab = "details"
  }, t.toggleForm = function() {
    t.activeTab = "form" == t.activeTab ? "details" : "form"
  }, t.$watch("selectedTask", function(e) {
    e && e.id ? (t.model.taskUpdating = !0, t.model.task = e, t.model.task.formKey && t.resetModel(), t.getTask(e.id)) : t.model = {}
  }), e.setMainPageById("tasks"), t.setTaskAssignee = function(n) {
    var i = {
      userName: g("username")(n),
      taskName: t.model.task.name
    };
    l.assignTask(t.model.task.id, n.id).then(function(n) {
      e.addAlertPromise(o("TASK.ALERT.ASSIGNED", i)), t.model.task = n
    })
  }, t.setTaskAssigneeByEmail = function(e) {
    l.assignTaskByEmail(t.model.task.id, e).then(function() {
      t.model.task.assignee = {
        email: e
      }
    })
  }, t.involvePerson = function(n) {
    var i = {
      userName: g("username")(n),
      taskName: t.model.task.name
    };
    l.involveUserInTask(n.id, t.model.task.id).then(function() {
      e.addAlertPromise(o("TASK.ALERT.PERSON-INVOLVED", i)), t.model.task.involvedPeople ? t.model.task.involvedPeople.push(n) : t.model.task.involvedPeople = [n]
    })
  }, t.involvePersonByEmail = function(n) {
    l.involveUserInTaskByEmail(n, t.model.task.id).then(function() {
      t.model.task.involvedPeople ? t.model.task.involvedPeople.push({
        email: n
      }) : t.model.task.involvedPeople = {
        email: n
      }
    }, function() {
      e.addAlertPromise(o("TASK.ALERT.PERSON-INVOLVED-EMAIL-NOT-ALLOWED", {
        emailAddress: n
      }), "error")
    })
  }, t.removeInvolvedUser = function(n) {
    var i = {
      userName: g("username")(n),
      taskName: t.model.task.name
    };
    l.removeInvolvedUserInTask(n, t.model.task.id).then(function() {
      e.addAlertPromise(o("TASK.ALERT.PERSON-NO-LONGER-INVOLVED", i)), t.model.task.involvedPeople.splice($.inArray(n, t.model.task.involvedPeople), 1)
    })
  }, t.getTask = function(e) {
    t.model.loading = !0, t.model.formData = void 0, t.model.hasFormKey = !1, t.model.task.formKey && (t.model.hasFormKey = !0), l.getTask(e).then(function(e) {
      angular.extend(t.model.task, e), t.model.loading = !1, t.noSuchTask = !1, t.model.hasFormKey || t.resetModel(), t.loadComments(), t.loadChecklist(), t.loadRelatedContent(), t.model.task.processInstanceId ? t.loadProcessInstance() : t.model.processInstance = null, t.refreshInvolvmentSummary(), null !== t.model.task.formKey && void 0 !== t.model.task.formKey ? c.getTaskForm(t.model.task.id).then(function(e) {
        t.model.formData = e
      }) : t.model.formData = void 0, t.model.taskUpdating = !1
    }, function() {
      t.model.loading = !1, t.noSuchTask = !0
    })
  }, t.$watch("model.task.involvedPeople", function() {
    t.refreshInvolvmentSummary()
  }, !0), t.refreshInvolvmentSummary = function() {
    if (t.model.task) {
      var e = t.model.task.involvedPeople;
      if (t.model.involvementSummary.loading = !1, e && e.length > 0)
        if (t.model.involvementSummary.count = e.length, e.length > 8) {
          t.model.involvementSummary.overflow = !0, t.model.involvementSummary.items = [];
          for (var o = 0; 8 > o; o++) t.model.involvementSummary.items.push(e[o])
        } else t.model.involvementSummary.overflow = !1, t.model.involvementSummary.items = e;
      else t.model.involvementSummary.count = 0
    }
  }, t.$watch("model.content.data", function(e) {
    if (t.model.task)
      if (t.model.contentSummary.loading = !1, e && e.length > 0)
        if (t.model.contentSummary.count = e.length, e.length > 8) {
          t.model.contentSummary.overflow = !0, t.model.contentSummary.items = [];
          for (var o = 0; 8 > o; o++) t.model.contentSummary.items.push(e[o])
        } else t.model.contentSummary.overflow = !1, t.model.contentSummary.items = e;
      else t.model.contentSummary.count = 0
  }, !0), t.$watch("model.comments.data", function() {
    t.refreshCommentSummary()
  }, !0), t.refreshCommentSummary = function() {
    if (t.model.task) {
      var e = t.model.comments ? t.model.comments.data : void 0;
      t.model.commentSummary.loading = !1, e ? t.model.commentSummary.count = e.length : (t.model.commentSummary.loading = !0, t.model.commentSummary.count = void 0)
    }
  }, t.$watch("model.checklist.data", function() {
    t.refreshChecklistSummary()
  }, !0), t.refreshChecklistSummary = function() {
    if (t.model.task) {
      var e = t.model.checklist ? t.model.checklist.data : void 0;
      t.model.checklistSummary.loading = !1, e ? t.model.checklistSummary.count = e.length : (t.model.checklistSummary.loading = !0, t.model.checklistSummary.count = void 0)
    }
  }, t.dragOverContent = function(e) {
    e && !t.model.contentSummary.addContent && (t.model.contentSummary.addContent = !0)
  }, t.$watch("model.content.data", function() {
    t.model.task
  }, !0), t.loadComments = function() {
    a.getTaskComments(t.model.task.id).then(function(e) {
      t.model.comments = e, t.refreshCommentSummary()
    })
  }, t.loadChecklist = function(e) {
    l.getChecklist(t.model.task.id).then(function(o) {
      t.model.checklist = o;
      for (var n = [], i = 0; o.data.length > i; i++) n.push(o.data[i].id);
      t.model.checklistSummary.order = n, t.refreshChecklistSummary(), e && e()
    })
  }, t.toggleCreateComment = function() {
    t.model.commentSummary.addComment && (t.model.commentSummary.newComment = void 0), t.model.commentSummary.addComment = !t.model.commentSummary.addComment, t.model.commentSummary.addComment && p(function() {
      angular.element(".comment-input .focusable").focus()
    }, 100)
  }, t.toggleCreateContent = function() {
    t.model.contentSummary.addContent = !t.model.contentSummary.addContent
  }, t.toggleCreateChecklistTask = function() {
    t.model.task.endDate || (t.model.checklistSummary.addTask && (t.model.checklistSummary.newTask = void 0), t.model.checklistSummary.addTask = !t.model.checklistSummary.addTask, t.model.checklistSummary.addTask && p(function() {
      angular.element(".checklist-input .focusable").focus()
    }, 100))
  }, t.orderChecklist = function(e) {
    t.model.checklist.data.splice(e, 1);
    for (var o = {
      order: []
    }, n = !1, i = 0; t.model.checklist.data.length > i; i++) t.model.checklistSummary.order[i] !== t.model.checklist.data[i].id && (n = !0), o.order.push(t.model.checklist.data[i].id);
    n && (t.model.checklistSummary.order = o.order, l.orderChecklist(t.model.task.id, o).then(function() {}))
  }, t.showSelectForm = function() {
    var n = _internalCreateModal({
      template: s + "views/modal/select-form.html",
      scope: t,
      show: !0
    }, m, t);
    t.model.formData && (n.$scope.currentForm = angular.extend({}, t.model.formData)), n.$scope.attachForm = function(n) {
      t.model.taskUpdating = !0, l.attachForm(t.model.task.id, n.id).then(function() {
        t.model.taskUpdating = !1, t.getTask(t.model.task.id), e.addAlertPromise(o("TASK.ALERT.FORM-ATTACHED", {
          name: n.name
        }), "info")
      })
    }, n.$scope.removeForm = function() {
      t.model.taskUpdating = !0;
      var n = t.model.formData.name;
      l.removeForm(t.model.task.id).then(function() {
        t.model.taskUpdating = !1, t.getTask(t.model.task.id), e.addAlertPromise(o("TASK.ALERT.FORM-REMOVED", {
          name: n
        }), "info")
      })
    }
  }, t.editTaskNamePopup = function() {
    t.editTaskNamePopover || (t.editTaskName = {
      name: t.model.task.name,
      description: t.model.task.description
    }, t.editTaskNamePopover = f(angular.element("#toggle-edit-task-name"), {
      template: s + "views/popover/edit-task-name-popover.html",
      placement: "bottom-left",
      show: !0,
      scope: t
    }), t.editTaskNamePopover.$scope.$on("tooltip.hide", function() {
      t.editTaskNamePopover.$scope.$destroy(), t.editTaskNamePopover.destroy(), t.editTaskNamePopover = void 0, t.editTaskName = void 0
    }))
  }, t.confirmEditTaskName = function() {
    t.editTaskName && (t.editTaskName.loading = !0, l.updateTask(t.model.task.id, {
      name: t.editTaskName.name,
      description: t.editTaskName.description
    }).then(function() {
      t.editTaskName.loading = !1, t.editTaskNamePopover && (t.editTaskNamePopover.$scope.$destroy(), t.editTaskNamePopover.destroy(), t.editTaskNamePopover = void 0), t.model.task.name = t.editTaskName.name, t.model.task.description = t.editTaskName.description
    }))
  }, t.onContentUploaded = function(n) {
    t.model.content && t.model.content.data && (t.model.content.data.push(n), d.checkRenditions(n), t.model.selectedContent = n), e.addAlertPromise(o("TASK.ALERT.RELATED-CONTENT-ADDED", n), "info"), t.toggleCreateContent()
  }, t.onContentDeleted = function(e) {
    t.model.content && t.model.content.data && t.model.content.data.forEach(function(t, o, n) {
      e === t && n.splice(o, 1)
    })
  }, t.selectContent = function(e) {
    t.model.selectedContent = t.model.selectedContent == e ? void 0 : e
  }, t.confirmNewComment = function() {
    t.model.commentSummary.loading = !0, a.createTaskComment(t.model.task.id, t.model.commentSummary.newComment.trim()).then(function() {
      t.model.commentSummary.newComment = void 0, t.model.commentSummary.addComment = !1, t.model.commentSummary.loading = !1, e.addAlertPromise(o("TASK.ALERT.COMMENT-ADDED", t.model.task)), t.loadComments()
    })
  }, t.confirmChecklistNewTask = function() {
    if (void 0 !== t.model.checklistSummary.newTask && null !== t.model.checklistSummary.newTask && 0 != t.model.checklistSummary.newTask.length) {
      t.model.checklistSummary.loading = !0;
      var n = {
        parentTaskId: t.model.task.id,
        name: t.model.checklistSummary.newTask.trim(),
        assignee: {
          id: e.account.id
        },
        dueDate: t.model.task.dueDate
      };
      e.activeAppDefinition && (n.category = "" + e.activeAppDefinition.id), l.createChecklistTask(t.model.task.id, n).then(function(n) {
        t.model.checklistSummary.newTask = void 0, e.addAlertPromise(o("TASK.ALERT.CHECKLIST-ADDED", n)), t.loadChecklist(function() {
          p(function() {
            t.model.checklistSummary.loading = !1, angular.element(".checklist-input .focusable").focus()
          }, 100)
        })
      })
    }
  }, t.deleteChecklistTask = function(n) {
    t.model.checklistSummary.loading = !0, l.deleteChecklistTask(n.id).then(function() {
      e.$broadcast("checklist-task-deleted", n.id), t.model.checklistSummary.newTask = void 0, t.model.checklistSummary.addTask = !1, t.model.checklistSummary.loading = !1, e.addAlertPromise(o("TASK.ALERT.CHECKLIST-REMOVED", n)), t.loadChecklist()
    })
  }, t.$watch("model.task.dueDate", function(e, o) {
    if (!t.model.taskUpdating && t.model.task) {
      if (null === o && null === e || null === o && void 0 === e || void 0 === o && void 0 === e || void 0 === o && null === e) return;
      if (e && void 0 !== e && e.getHours && 23 != e.getHours() && (e.setHours(23), e.setMinutes(59), e.setSeconds(59), t.model.task.dueDate = e), new Date(o).getTime() != new Date(e).getTime() || null != o && null != e) {
        t.model.taskUpdating = !0;
        var n = {
          dueDate: e ? e : null
        };
        l.updateTask(t.model.task.id, n).then(function() {
          u.trackEvent("workflow", "task-due-date-set"), t.model.taskUpdating = !1
        })
      }
    }
  }), t.createTaskInline = function() {
    t.newTask || (t.newTask = {
      name: "New task",
      inline: !0
    })
  }, t.createProcess = function() {
    e.createProcessInstance = !0, t.openProcessInstance()
  }, t.selectProcessDefinition = function(e) {
    t.newProcessInstance.processDefinitionId = e.id, t.newProcessInstance.name = e.name + " - " + (new moment).format("MMMM Do YYYY"), p(function() {
      angular.element("#start-process-name").focus()
    }, 20)
  }, t.closeInlineTaskCreation = function(e) {
    t.newTask = void 0, e.stopPropagation()
  }, t.completeTask = function() {
    t.model.completeButtonDisabled = !0, l.completeTask(t.model.task.id)
  }, t.claimTask = function() {
    t.model.loading = !0, t.model.claimButtonDisabled = !0, l.claimTask(t.model.task.id).then(function() {
      r.taskId || i.search().taskId ? t.getTask(t.model.task.id) : v.openTaskPage(t.model.task.id), t.model.claimButtonDisabled = !1
    })
  }, t.unClaimTask = function() {
    t.model.loading = !0, t.model.unClaimButtonDisabled = !0, l.unClaimTask(t.model.task.id).then(function() {
      r.taskId || i.search().taskId ? t.getTask(t.model.task.id) : v.openTaskPage(t.model.task.id), t.model.unClaimButtonDisabled = !1
    })
  }, t.loadProcessInstance = function() {
    h.getProcess(t.model.task.processInstanceId).then(function(e) {
      t.model.processInstance = e
    })
  }, t.openTask = function(e) {
    v.openTaskPage(e)
  }, t.openProcessInstance = function(e) {
    v.openProcessPage(e)
  }, t.returnToTaskList = function() {
    r.taskId ? v.openTaskPage() : t.reloadTaskList()
  }, t.loadRelatedContent = function() {
    t.model.content = void 0, l.getRelatedContent(t.model.task.id).then(function(e) {
      t.model.content = e
    })
  }, t.$watch("model.content", function(e) {
    if (e && e.data && e.data.length > 0)
      for (var t = !1, o = 0; e.data.length > o; o++) {
        var n = e.data[o];
        if (!n.contentAvailable) {
          t = !0;
          break
        }
      }
  }, !0), t.editComment = function() {
    t.model.editingComment = !0
  }, t.stopEditComment = function() {
    t.model.editingComment = !1
  }, t.userInvolved = function(n) {
    var i = {
      userName: g("username")(n),
      taskName: t.model.task.name
    };
    l.involveUserInTask(n.id, t.model.task.id).then(function() {
      e.addAlertPromise(o("TASK.ALERT.PERSON-INVOLVED", i)), t.model.task.involvedPeople ? t.model.task.involvedPeople.push(n) : t.model.task.involvedPeople = [n]
    })
  }, t.assigneeSelected = function(n) {
    var i = {
      userName: g("username")(n),
      taskName: t.model.task.name
    };
    l.assignTask(t.model.task.id, n.id).then(function() {
      e.addAlertPromise(o("TASK.ALERT.ASSIGNED", i)), t.model.task.assignee = n
    })
  }, t.revealContent = function(e) {
    t.model.activeTab = "content", t.model.selectedContent = e
  }, t.hasDetails = function() {
    if (1 == t.model.loading || null === t.model.involvementSummary || void 0 === t.model.involvementSummary || t.model.involvementSummary.loading === !0 || null === t.model.contentSummary || void 0 === t.model.contentSummary || t.model.contentSummary.loading === !0 || null === t.model.commentSummary || void 0 === t.model.commentSummary || t.model.commentSummary.loading === !0 || null === t.model.checklistSummary || void 0 === t.model.checklistSummary || t.model.checklistSummary.loading === !0) return !1;
    if (null !== t.model.task && void 0 !== t.model.task) {
      var e = !1,
        o = !1,
        n = !1,
        i = !1;
      return null !== t.model.task.involvedPeople && void 0 !== t.model.task.involvedPeople && t.model.task.involvedPeople.length > 0 && (e = !0), null !== t.model.content && void 0 !== t.model.content && t.model.content.data.length > 0 && (o = !0), null !== t.model.comments && void 0 !== t.model.comments && t.model.comments.data.length > 0 && (n = !0), null !== t.model.checklist && void 0 !== t.model.checklist && t.model.checklist.data.length > 0 && (i = !0), e || o || n || i
    }
    return !1
  }, t.uploadInProgress = function(e) {
    "undefined" !== e && (t.model.uploadInProgress = e)
  }
}]), angular.module("activitiApp").controller("CreateTaskController", ["$rootScope", "$scope", "$translate", "$http", "$location", "TaskService", function(e, t, o, n, i, r) {
  t.createTask = function() {
    t.newTask.assignee = {
      id: e.account.id
    }, r.createTask(t.newTask).then(function(n) {
      t.resetModel(), e.addAlertPromise(o("TASK.ALERT.CREATED", n))
    })
  }, t.resetModel = function() {
    t.newTask = {
      name: "",
      description: ""
    }
  }, t.resetModel()
}]), angular.module("activitiApp").controller("ContentDetailsController", ["$rootScope", "$scope", "$translate", "$modal", "appResourceRoot", "RelatedContentService", function(e, t, o, n, i, r) {
  t.model = {
    selectedContent: t.content,
    selectedTask: t.task
  };
  var s;
  s = t.content ? "CONTENT.SIMPLE-TYPE." + t.content.simpleType.toUpperCase() : "CONTENT.SIMPLE-TYPE.CONTENT", o(s).then(function(e) {
    t.model.contentType = e
  }), t.getPdfViewerUrl = function(e) {
    var t = encodeURIComponent(e.pdfUrl);
    return i + "views/templates/viewer.html?file=" + t
  }, t.deleteContent = function(e, o) {
    var s = _internalCreateModal({
      template: i + "views/modal/delete-content.html",
      show: !0
    }, n, t);
    s.$scope.popup = {
      content: e,
      loading: !1
    }, s.$scope.ok = function() {
      r.deleteContent(e.id, o && o.id).then(function() {
        t.$emit("content-deleted", {
          content: e
        }), t.model.selectedContent = null, t.model.selectedTask = null
      })
    }
  }
}]), angular.module("activitiApp").controller("ProcessesController", ["$rootScope", "$scope", "$translate", "$http", "$timeout", "$location", "$modal", "$routeParams", "$popover", "appResourceRoot", "AppDefinitionService", "EventTrackingService", "FilterService", "ProcessService", "NavigationService", function(e, t, o, n, i, r, s, a, l, c, d, u, p, m, f) {
  function v(e) {
    t.model.filter.loading = !0, m.queryProcessInstances({
      appDefinitionId: t.appDefinitionId,
      processInstanceId: e
    }).then(function(e) {
      t.model.processInstances = e.data, t.model.hasNextPage = !1, e.data.length > 0 ? (t.selectedProcessInstance = e.data[0], t.state = {
        noProcesses: !1
      }, t.startForm = {}) : (t.selectedProcessInstance = void 0, t.state = {
        noProcesses: !0
      }, t.startForm = {}), t.model.filter.loading = !1
    })
  }

  function h(e) {
    p.getProcessFilters(t.appDefinitionId).then(function(o) {
      t.model.filters = o.filters, o.filters.length > 0 ? I(o, e) : g(e)
    })
  }

  function g(e) {
    p.createDefaultProcessFilters(t.appDefinitionId, function(t) {
      I(t, e)
    })
  }

  function I(e, o) {
    o ? t.selectFilter(e.recent) : t.applyFilter(e.recent)
  }
  e.setMainPageById("processes"), t.startForm = {}, t.model = {
    page: 0,
    filter: {
      previousName: null,
      loading: !1,
      expanded: !1,
      processId: r.search().processId
    },
    filterIconsHeader: {
      expanded: !1
    },
    filterIconsFooter: {
      expanded: !1
    },
    mode: r.search().mode ? "process-create" : "process-list"
  }, t.$on("$routeUpdate", function() {
    r.search().mode ? t.createProcessInstance() : (r.search().processId ? (t.collapseFilter(!0), t.newProcessInstance = void 0, t.startFormError = void 0, v(r.search().processId)) : ("process-list" !== t.model.mode || t.model.filter.processId) && (t.resetToListMode(), t.filterProcessInstances({
      page: 0,
      filter: t.model.filter.edit.filter
    })), t.model.filter.processId = r.search().processId, t.model.mode = "process-list")
  }), t.model.runtimeSorts = [{
    id: "created-desc",
    title: "PROCESS.FILTER.CREATED-DESC",
    icon: "glyphicon-sort-by-attributes-alt"
  }, {
    id: "created-asc",
    title: "PROCESS.FILTER.CREATED-ASC",
    icon: "glyphicon-sort-by-attributes"
  }], t.model.completedSorts = [], t.model.completedSorts.push(t.model.runtimeSorts[0]), t.model.completedSorts.push(t.model.runtimeSorts[1]), t.model.completedSorts.push({
    id: "ended-asc",
    title: "PROCESS.FILTER.ENDED-DESC",
    icon: "glyphicon-sort-by-attributes-alt"
  }), t.model.completedSorts.push({
    id: "ended-desc",
    title: "PROCESS.FILTER.ENDED-ASC",
    icon: "glyphicon-sort-by-attributes"
  }), t.model.sorts = t.model.runtimeSorts, t.model.stateFilterOptions = [{
    id: "running",
    title: "PROCESS.FILTER.STATE-RUNNING"
  }, {
    id: "completed",
    title: "PROCESS.FILTER.STATE-COMPLETED"
  }, {
    id: "all",
    title: "PROCESS.FILTER.STATE-ALL"
  }], t.model.stateSortOptions = {
    running: t.model.runtimeSorts,
    completed: t.model.completedSorts,
    all: t.model.runtimeSorts
  }, t.appDefinitionId = a.appDefinitionId || d.getIntegrationAppDefinitionId(), t.missingAppdefinition = t.appDefinitionId === !1, d.setActiveAppDefinitionId(t.appDefinitionId), t.selectProcessInstance = function(e) {
    t.selectedProcessInstance = e, t.state = {
      noProcesses: !1
    }, t.startForm = {}
  }, t.nextPage = function() {
    t.loadProcessInstances(!0)
  }, t.loadProcessInstances = function(e) {
    e ? t.model.page += 1 : t.model.page = 0, t.filterProcessInstances({
      page: t.model.page,
      filter: t.model.filter.edit.filter
    })
  }, t.selectProcessDefinition = function(e) {
    t.newProcessInstance.processDefinitionId = e.id, t.newProcessInstance.name = e.name + " - " + (new moment).format("MMMM Do YYYY"), t.newProcessInstance.processDefinition = e
  }, t.sortChanged = function() {
    t.selectedProcessInstance = void 0
  }, t.selectDefaultDefinition = function() {
    if (t.model.processDefinitions && t.model.processDefinitions.length > 0)
      for (var e = 0; t.model.processDefinitions.length > e; e++) {
        var o = t.model.processDefinitions[e];
        if (o.id && "default" != o.id) {
          t.selectProcessDefinition(o);
          break
        }
      }
  }, t.resetToListMode = function() {
    t.newProcessInstance = void 0, t.model.mode = "process-list", t.model.filter.processId = void 0, t.startFormError = void 0
  }, t.reloadProcessList = function() {
    t.resetToListMode(), t.filterProcessInstances({
      page: 0,
      filter: t.model.filter.edit.filter
    })
  }, t.backToList = function(e) {
    t.resetToListMode(), f.openProcessPage(), e && (t.selectedProcessInstance = void 0, t.loadProcessInstances())
  }, t.createProcessInstance = function() {
    t.collapseFilter(!0), t.model.mode = "process-create", t.model.filter.processId = void 0, t.newProcessInstance = {}, t.selectDefaultDefinition(), f.openProcessPageInStartMode()
  }, t.$on("process-started", function(e, o) {
    t.newProcessInstance = void 0, t.startFormError = void 0, f.openProcessPage(o.id)
  }), t.startProcessInstanceWithoutForm = function() {
    t.newProcessInstance.loading = !0;
    var e = {
      processDefinitionId: t.newProcessInstance.processDefinition.id,
      name: t.newProcessInstance.name
    };
    n({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances",
      data: e
    }).success(function(e) {
      t.newProcessInstance = void 0, t.startFormError = void 0, u.trackEvent("workflow", "processinstance-start-no-form"), f.openProcessPage(e.id)
    }).error(function(e) {
      t.newProcessInstance.loading = !1, e && e.messageKey && o(e.messageKey, e.customData).then(function(e) {
        t.errorMessage = e, console.log(e)
      })
    })
  }, e.loadProcessDefinitions(t.appDefinitionId);
  var T = t.$watch("root.processDefinitions", function(e) {
    if (null !== e && void 0 != e && e.length > 0) {
      var o = angular.copy(e);
      o.splice(0, 0, {
        name: ""
      }), t.model.processDefinitions = o, T()
    }
    "process-create" === t.model.mode && t.createProcessInstance()
  });
  t.selectFilter = function(e, o) {
    o && t.model.filter.selected && e.id === t.model.filter.selected.id || (t.applyFilter(e), (t.model.filter.processId || "process-create" === t.model.mode) && t.backToList(), t.filterProcessInstances({
      page: 0,
      filterId: e.id,
      filter: e.filter
    }))
  }, t.applyFilter = function(e) {
    t.model.filter.selected = e, t.model.filter.edit = angular.copy(e), t.model.page = 0
  }, t.filterProcessInstances = function(o) {
    t.model.filter.loading = !0, o.appDefinitionId = t.appDefinitionId, o.page && 0 !== o.page || (t.model.processInstances = []), p.filterProcesses(o).then(function(o) {
      var n = o.data;
      if (o.start > 0)
        for (var i = 0; n.length > i; i++) t.model.processInstances.push(n[i]);
      else t.model.processInstances = n, 0 === n.length ? (t.state = {
        noProcesses: !0
      }, t.selectedProcessInstance = void 0, t.startForm = {}) : (t.state = {
        noProcesses: !1
      }, t.selectedProcessInstance = n[0], t.startForm = {});
      t.model.hasNextPage = o.start + o.size < o.total, t.model.filter.loading = !1, e.window.forceRefresh = !0
    })
  }, t.collapseFilter = function(e) {
    t.model.filter.expanded = !1, t.model.filter.editName = !1, t.resetFilter(e)
  }, t.resetFilter = function(e) {
    t.model.page = 0, t.model.filter.edit = angular.copy(t.model.filter.selected), t.model.filter.modified && !e && t.filterProcessInstances({
      page: 0,
      filter: t.model.filter.edit.filter
    }), t.model.filter.modified = !1
  }, t.filterChanged = function() {
    t.model.page = 0, t.filterProcessInstances({
      page: 0,
      filter: t.model.filter.edit.filter
    }), t.model.filter.modified = !0, (t.model.filter.processId || "process-create" === t.model.mode) && t.backToList()
  }, t.editFilter = function() {
    t.model.filter.expanded = !0
  }, t.createNewFilter = function() {
    var e = {
      icon: "glyphicon-filter"
    };
    e.filter = angular.copy(t.model.filter.edit.filter), t.model.filter.edit = e, t.model.filter.expanded = !0, (t.model.filter.processId || "process-create" === t.model.mode) && t.backToList(t.model.filter.processId || "process-create" === t.model.mode)
  }, t.saveFilter = function(e) {
    e.id ? t.updateFilter(e) : t.createFilter(e), t.model.filter.modified = !1
  }, t.createFilter = function(e) {
    var o = {
      name: e.name,
      filter: e.filter,
      appId: t.appDefinitionId
    };
    o.icon = e.icon || "glyphicon-filter", p.createProcessInstanceFilter(o).then(function(e) {
      t.selectFilter(e)
    })
  }, t.updateFilter = function(e) {
    p.updateProcessInstanceFilter(e.id, e).then(function(e) {
      t.selectFilter(e)
    })
  }, t.deleteFilter = function(e) {
    p.deleteProcessInstanceFilter(e).then(function() {
      0 === t.model.filters.length ? g(!0) : t.selectFilter(p.getRecentProcessInstanceFilter(t.appDefinitionId))
    })
  }, t.refreshFilter = function() {
    t.filterProcessInstances({
      page: t.model.page,
      filter: t.model.filter.edit.filter
    })
  }, "process-create" === t.model.mode ? h(!1) : t.model.filter.processId ? (h(!1), v(t.model.filter.processId)) : h(!0), t.toggleChangeName = function() {
    t.model.filter.editName || (t.model.filter.previousName = t.model.filter.edit.name), t.model.filter.editName = !t.model.filter.editName, t.model.filterIconsFooter.expanded = !1
  }, t.toggleChangeIcon = function(e) {
    t.model[e].expanded || t.icons || (t.icons = p.getFilterIcons(), t.currentIconPage = 1, t.iconPageSize = 35), t.model[e].expanded = !t.model[e].expanded, t.model.filter.editName = !1
  }, t.selectIcon = function(e) {
    t.model.filter.edit.icon = e, t.model.filterIconsHeader.expanded = !1, t.model.filterIconsFooter.expanded = !1
  }, t.orderFilterlist = function(e) {
    t.model.filters.splice(e, 1), p.checkProcessInstanceFiltersOrder(t.appDefinitionId)
  }
}]), angular.module("activitiApp").controller("ProcessController", ["$rootScope", "$scope", "$translate", "$http", "$timeout", "$location", "$modal", "$routeParams", "AppDefinitionService", "NavigationService", function(e, t, o, n, i, r, s, a, l, c) {
  e.setMainPageById("processes"), t.startForm = {}, t.selectedProcessInstance = {
    id: a.processId
  }, t.appDefinitionId = a.appDefinitionId || l.getIntegrationAppDefinitionId(), t.$on("processinstance-deleted", function() {
    t.openProcesses()
  }), t.openProcesses = function() {
    c.openProcessPage()
  }
}]), angular.module("activitiApp").controller("ProcessDetailController", ["$rootScope", "$scope", "$translate", "$http", "$timeout", "$location", "$route", "$modal", "$routeParams", "$popover", "appResourceRoot", "TaskService", "CommentService", "RelatedContentService", "EventTrackingService", "ProcessService", "NavigationService", function(e, t, o, n, i, r, s, a, l, c, d, u, p, m, f, v, h) {
  t.model = {
    processInstance: t.selectedProcessInstance,
    showingForm: !1,
    showingDecisionTable: !1,
    decisionTableAudit: {}
  }, t.$watch("selectedProcessInstance", function(e) {
    e && e.id ? (t.model.processUpdating = !0, t.model.processInstance = e, t.model.showingForm = !1, t.model.showingDecisionTable = !1, t.noSuchProcess = !1, t.getProcessInstance(e.id)) : (t.model.processInstance = void 0, t.model.showingForm = !1, t.model.showingDecisionTable = !1)
  }), t.getProcessInstance = function(e) {
    v.getProcess(e).then(function(e) {
      t.model.processInstance ? angular.extend(t.model.processInstance, e) : t.model.processInstance = e, t.loadProcessTasks(), t.loadComments(), t.loadContent()
    }, function() {
      t.noSuchProcess = !0
    })
  }, t.loadProcessTasks = function() {
    u.getProcessInstanceTasks(t.model.processInstance.id, !1).then(function(e) {
      t.model.processTasks = e.data
    }), u.getProcessInstanceTasks(t.model.processInstance.id, !0).then(function(e) {
      t.model.completedProcessTasks = e.data && e.data.length > 0 ? e.data : [];
      for (var o = 0; e.data.length > o; o++) {
        var n = e.data[o];
        n.duration && (n.duration = moment.duration(n.duration).humanize())
      }
    }), v.getHistoricProcessInstanceDecisionTasks(t.model.processInstance.id, !1).then(function(e) {
      t.model.completedDecisionTasks = e
    })
  }, t.toggleCreateComment = function() {
    t.model.addComment = !t.model.addComment, t.model.addComment && i(function() {
      angular.element(".focusable").focus()
    }, 100)
  }, t.cancelProcess = function(e) {
    if (t.model.processInstance) {
      var o = _internalCreateModal({
        template: d + "views/modal/process-cancel.html",
        scope: t,
        show: !0
      }, a, t);
      e && (o.$scope.finalDelete = !0)
    }
  }, t.deleteProcess = function() {
    t.cancelProcess(!0)
  }, t.$on("processinstance-deleted", function() {
    s.reload()
  }), t.openTask = function(e) {
    h.openTaskPage(e.id)
  }, t.openStartForm = function() {
    t.startForm.processInstanceId = t.model.processInstance.id
  }, t.openDecisionTableAudit = function(e) {
    t.model.showingDecisionTable = !0, t.model.decisionTableAudit.id = e.id, t.model.decisionTableAudit.activityId = e.activityId, t.model.decisionTableAudit.executionId = e.executionId, t.model.decisionTableAudit.decisionKey = e.decisionKey
  }, t.popupShown = function() {}, t.closeDiagramPopup = function() {
    jQuery(".qtip").qtip("destroy", !0)
  }, t.loadComments = function() {
    p.getProcessInstanceComments(t.model.processInstance.id).then(function(e) {
      t.model.comments = e
    })
  }, t.loadContent = function() {
    m.getProcessContent(t.model.processInstance.id).then(function(e) {
      t.model.content = e
    })
  }, t.confirmNewComment = function() {
    t.model.commentLoading = !0, p.createProcessInstanceComment(t.model.processInstance.id, t.model.newComment.trim()).then(function() {
      t.model.newComment = void 0, t.model.commentLoading = !1, e.addAlertPromise(o("PROCESS.ALERT.COMMENT-ADDED")), t.toggleCreateComment(), t.loadComments()
    })
  }, t.showDiagram = function() {
    _internalCreateModal({
      template: d + "views/modal/process-instance-graphical.html",
      scope: t,
      show: !0
    }, a, t), f.trackEvent("workflow", "processinstance-show-diagram")
  }, t.returnToProcessList = function() {
    l.processId ? h.openProcessPage() : t.reloadProcessList()
  }
}]), angular.module("activitiApp").controller("ShowProcessDiagramCtrl", ["$scope", "$timeout", "ResourceService", "appResourceRoot", function(e, t, o, n) {
  t(function() {
    jQuery("#bpmnModel").attr("data-model-id", e.model.processInstance.id), jQuery("#bpmnModel").attr("data-model-type", "runtime"), jQuery("#bpmnModel").attr("message-container");
    var t = n + "../display/displaymodel.html?version=" + Date.now(),
      i = window.define;
    window.define = void 0, o.loadFromHtml(t, function() {
      window.define = i
    })
  }, 100)
}]), angular.module("activitiApp").controller("CancelProcessCtrl", ["$scope", "$http", "$route", "EventTrackingService", "ProcessService", function(e, t, o, n, i) {
  e.popup = {
    loading: !1
  }, e.ok = function() {
    e.popup.loading = !0, i.deleteProcess(e.model.processInstance.id).then(function() {
      e.$hide(), n.trackEvent("workflow", "processinstance-cancel")
    }).finally(function() {
      e.popup.loading = !1
    })
  }, e.cancel = function() {
    e.$hide()
  }
}]), angular.module("activitiApp").controller("RenderFormController", ["$rootScope", "$scope", "$http", "$translate", "$modal", "appResourceRoot", "FormService", "RelatedContentService", "$sce", "$timeout", "TaskService", "FormUtilService", "hotkeys", "uiGridConstants", function($rootScope, $scope, $http, $translate, $modal, appResourceRoot, FormService, RelatedContentService, $sce, $timeout, TaskService, FormUtilService, hotkeys, uiGridConstants) {
  function focusFormElement(e, t) {
    e && null != e && (e = "radio-buttons" == e.type ? angular.element("#activiti-" + e.id + ">div>label>input:nth-child(1)") : angular.element("#activiti-" + e.id), e[0] && (typeOf("HTMLLIElement", e[0]) ? t.preventDefault() : (e[0].focus(), t.preventDefault())))
  }

  function typeOf(e, t) {
    return Object.prototype.toString.call(t) === "[object " + e + "]"
  }

  function initModel() {
    $scope.model = {
      loading: !1,
      valid: !1,
      uploads: {},
      collapsedGroups: {},
      completeButtonDisabled: !1,
      saveButtonDisabled: !1,
      uploadInProgress: !1,
      isTaskForm: !1,
      customFieldListeners: []
    }, $scope.restData = {
      restValues: {}
    }
  }

  function filterAndSortElements(e) {
    for (var t = 3, o = [], n = 0; e.length > n; n++) o.push(e[n]);
    return o = o.filter(function(e) {
      return !(0 == e.isVisible || "people" === e.type || "functional-group" === e.type || "readonly-text" === e.type || "upload" === e.type || "readonly" === e.type || "container" === e.type || "dynamic-table" === e.type || "group" === e.type)
    }), o = o.sort(function(e, o) {
      var n = angular.element("#activiti-" + e.id),
        i = angular.element("#activiti-" + o.id),
        r = 999999,
        s = 999999,
        a = 999999,
        l = 999999;
      if (n && n.length > 0) {
        var c = n[0].getBoundingClientRect();
        r = c.left, s = c.top
      }
      if (i && i.length > 0) {
        var d = i[0].getBoundingClientRect();
        a = d.left, l = d.top
      }
      return t > Math.abs(s - l) ? r == a ? 0 : (r - a) / Math.abs(r - a) : (s - l) / Math.abs(s - l)
    })
  }
  hotkeys.bindTo($scope).add({
    combo: "tab",
    description: "forward tab navigation",
    allowIn: ["INPUT", "SELECT", "TEXTAREA"],
    callback: function(e) {
      var t = $scope.detectCurrentFormElement(e.target),
        o = $scope.getNextTabFormElement(t);
      focusFormElement(o, e)
    }
  }).add({
    combo: "shift+tab",
    description: "Backward tab navigation",
    allowIn: ["INPUT", "SELECT", "TEXTAREA"],
    callback: function(e) {
      var t = $scope.detectCurrentFormElement(e.target),
        o = $scope.getPrevTabFormElement(t);
      focusFormElement(o, e)
    }
  }), initModel(), $scope.registerCustomFieldListener = function(e) {
    $scope.model.customFieldListeners.push(e)
  }, $scope.removeCustomFieldListener = function(e) {
    var t = $scope.model.customFieldListeners.indexOf(e);
    $scope.model.customFieldListeners.splice(t, 1)
  }, $scope.detectCurrentFormElement = function(e) {
    var t = e.id;
    typeOf("HTMLInputElement", e) && "radio" == e.type && (t = "activiti-" + e.name);
    var o = $scope.allFormFields,
      n = 0,
      i = null;
    for (n = 0; o.length > n && null == i; n++) null == i && "activiti-" + o[n].id == t && (i = o[n]);
    return i
  }, $scope.getNextTabFormElement = function(e) {
    var t = null;
    if (e && null != e) {
      var o = $scope.allFormFields,
        n = filterAndSortElements(o),
        i = 0,
        r = -1;
      for (i = 0; n.length > i && -1 == r; i++) n[i].id == e.id && (r = i);
      if (r >= 0 && n.length > r)
        for (; n.length - 1 > r && null == t;) t = n[++r]
    }
    return t
  }, $scope.getPrevTabFormElement = function(e) {
    var t = null;
    if (e && null != e) {
      var o = $scope.allFormFields,
        n = filterAndSortElements(o),
        i = 0,
        r = -1;
      for (i = 0; n.length > i && -1 == r; i++) n[i].id == e.id && (r = i);
      if (r > 0)
        for (; r > 0 && null == t;) t = n[--r]
    }
    return t
  }, $scope.isEmpty = function(e) {
    return void 0 === e.value || null == e.value || 0 == e.value.length
  }, $scope.isEmptyDropdown = function(e) {
    if ("rest" === e.optionType) {
      if ($scope.restData.restValues && $scope.restData.restValues[e.id] && $scope.restData.restValues[e.id].length > 0)
        for (var t = $scope.restData.restValues[e.id], o = 0; t.length > o; o++)
          if (t[o].id === e.value.id) return !1;
      return !0
    }
    if (null !== e.hasEmptyValue && void 0 !== e.hasEmptyValue && e.hasEmptyValue === !0) {
      if (null !== e.options && void 0 !== e.options && e.options.length > 0) {
        var n = e.options[0];
        if (n === e.value) return !0
      }
    } else if ("" === e.value) return !0;
    return !1
  }, $scope.appResourceRoot = appResourceRoot, $scope.showContentDetails = function(e, t) {
    var o = _internalCreateModal({
        template: appResourceRoot + "views/modal/content-details.html",
        show: !0
      }, $modal, $scope),
      n = t && t.params && t.params.documentsEditable;
    o.$scope.content = e, o.$scope.readOnly = !0, o.$scope.editable = n
  }, $scope.model.outcomesOnly = null !== $scope.outcomesOnly && void 0 !== $scope.outcomesOnly && ($scope.outcomesOnly === !0 || "true" === $scope.outcomesOnly), $scope.customJavascriptEvents = {}, $scope.clearDate = function(e, t) {
    e.value = "", t && t(e.value), jQuery("#" + $rootScope.activitiFieldIdPrefix + e.id).blur()
  }, $scope.selectToday = function(e, t) {
    var o = new Date;
    o = new Date(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0, 0), e.value = o, t && t(e.value), jQuery("#" + $rootScope.activitiFieldIdPrefix + e.id).blur()
  }, $scope.closeDatePopup = function(e) {
    jQuery("#" + $rootScope.activitiFieldIdPrefix + e.id).blur()
  }, $scope.invokeRestUrl = function(e) {
    $scope.restData.restValues[e.id] = [], $scope.taskId ? $http({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/task-forms/" + $scope.taskId + "/form-values/" + e.id
    }).success(function(t) {
      if ($scope.restData.restValues[e.id] = t, e.value && t && t.length)
        for (var o = 0; t.length > o; o++)
          if (t[o].id === e.value) {
            e.value = t[o];
            break
          }
      if ($scope.model.customFieldListeners.length > 0)
        for (var o = 0; $scope.model.customFieldListeners.length > o; o++) $scope.model.customFieldListeners[o].formFieldRestValuesSet && $scope.model.customFieldListeners[o].formFieldRestValuesSet($scope.formData, e, $scope);
      "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formFieldRestValuesSet !== void 0 && ALFRESCO.formExtensions.formFieldRestValuesSet($scope.formData, e, $scope), $scope.customJavascriptEvents.formFieldRestValuesSet && $scope.customJavascriptEvents.formFieldRestValuesSet($scope.formData, e, $scope), $scope.validateField()
    }) : $scope.processDefinitionId && $http({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-definitions/" + $scope.processDefinitionId + "/start-form-values/" + e.id
    }).success(function(t) {
      if ($scope.restData.restValues[e.id] = t, e.value && t && t.length)
        for (var o = 0; t.length > o; o++) t[o].id == e.value && (e.value = t[o]);
      if ($scope.model.customFieldListeners.length > 0)
        for (var o = 0; $scope.model.customFieldListeners.length > o; o++) $scope.model.customFieldListeners[o].formFieldRestValuesSet && $scope.model.customFieldListeners[o].formFieldRestValuesSet($scope.formData, e, $scope);
      "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formFieldRestValuesSet !== void 0 && ALFRESCO.formExtensions.formFieldRestValuesSet($scope.formData, e, $scope), $scope.customJavascriptEvents.formFieldRestValuesSet && $scope.customJavascriptEvents.formFieldRestValuesSet($scope.formData, e, $scope), $scope.validateField()
    })
  }, $scope.evaluateAllItemVisibilityConditions = function() {
    var e = $scope.allFormFields;
    if (e)
      for (var t = 0; e.length > t; t++) e[t].isVisible = e[t].visibilityCondition && (e[t].visibilityCondition.leftFormFieldId || e[t].visibilityCondition.leftRestResponseId) ? $scope.setItemVisibility(e[t].visibilityCondition) : !0;
    var o = $scope.formData.tabs;
    if (o)
      for (var n = 0; o.length > n; n++) o[n].isVisible = o[n].visibilityCondition && (o[n].visibilityCondition.leftFormFieldId || o[n].visibilityCondition.leftRestResponseId) ? $scope.setItemVisibility(o[n].visibilityCondition) : !0
  }, $scope.combineFormVariables = function(e) {
    for (var t = $scope.allFormFields, o = [], n = 0; t.length > n; n++) "readonly-text" !== t[n].type && "group" !== t[n].type && "dynamic-table" !== t[n].type && o.push(t[n]);
    $scope.currentAndHistoricFormFields = e && e.length > 0 ? e.concat(o) : o
  }, $scope.setItemVisibility = function(visibilityCondition) {
    if (visibilityCondition) {
      for (var conditionResults = []; visibilityCondition;) conditionResults.push($scope.evaluateItemCondition(visibilityCondition)), conditionResults.push(visibilityCondition.nextConditionOperator), visibilityCondition = visibilityCondition.nextCondition;
      for (var expression = "", i = 0; conditionResults.length > i; i++) {
        var conditionResult = conditionResults[i];
        0 == i || 0 == i % 2 ? expression += conditionResult : "and" === conditionResult ? expression += " && " : "and-not" === conditionResult ? expression += " && !" : "or" === conditionResult ? expression += " || " : "or-not" === conditionResult && (expression += " || !")
      }
      return eval(expression)
    }
    return !0
  }, $scope.findPreviousVisibleField = function(e, t) {
    if (e.previousField && e.previousField.length > 0) {
      var o = $scope.findFormFieldWithId($scope.allFormFields, e.previousField);
      return o ? o.isVisible ? t.sameRowAsField && t.sameRowAsField == o.id ? o.row + (o.sizeY - 1) : o.row + 1 + (o.sizeY - 1) : $scope.findPreviousVisibleField(o, t) : 0
    }
    return 0
  }, $scope.evaluateItemCondition = function(e) {
    var t = !1;
    if (e && (e.leftFormFieldId || e.leftRestResponseId)) {
      var o;
      if (e.leftFormFieldId) {
        var n = $scope.findFormFieldWithId($scope.currentAndHistoricFormFields, e.leftFormFieldId);
        if (!n) return !1;
        if ("dropdown" === n.type || "radio-buttons" === n.type || "typeahead" === n.type || n && n.params && n.params.field && "dropdown" === n.params.field.type || n && n.params && n.params.field && "radio-buttons" === n.params.field.type || n && n.params && n.params.field && "typeahead" === n.params.field.type) {
          if (!n.value) return !1;
          o = -1 !== e.leftFormFieldId.indexOf("_LABEL", e.leftFormFieldId - "_LABEL".length) ? n.value.name : n.value.id ? n.value.id : n.value
        } else "boolean" === n.type || n && n.params && n.params.field && "boolean" === n.params.field.type ? (o = n.value, (null === o || void 0 === o || "" === o) && (o = !1)) : o = n.value
      } else {
        if (!e.leftRestResponseId) return !0;
        var i = $scope.findFormFieldWithId($scope.currentAndHistoricFormFields, e.leftRestResponseId);
        if (!i) return !1;
        o = i.value
      }
      var r;
      if (e.rightValue && "" != e.rightValue || 0 === e.rightValue) r = e.rightValue;
      else if (e.rightFormFieldId) {
        var s = $scope.findFormFieldWithId($scope.currentAndHistoricFormFields, e.rightFormFieldId);
        if (!s) return !1;
        if ("dropdown" === s.type || "radio-buttons" === s.type || "typeahead" === s.type || s && s.params && s.params.field && "dropdown" === s.params.field.type || s && s.params && s.params.field && "radio-buttons" === s.params.field.type || s && s.params && s.params.field && "typeahead" === s.params.field.type) {
          if (!s.value) return !1;
          r = -1 !== e.rightFormFieldId.indexOf("_LABEL", e.rightFormFieldId - "_LABEL".length) ? s.value.name : s.value.id ? s.value.id : s.value
        } else "boolean" === s.type || s && s.params && s.params.field && "boolean" === s.params.field.type ? (r = s.value, r = null === r || void 0 === r || "" === r ? !1 : s.value) : r = s.value
      } else {
        if (!e.rightRestResponseId) return !0;
        var a = $scope.findFormFieldWithId($scope.currentAndHistoricFormFields, e.rightRestResponseId);
        if (!a) return !1;
        r = a.value
      }
      if (n && "boolean" === n.type || n && n.params && n.params.field && "boolean" === n.params.field.type || i && "boolean" === i.type) {
        (null === o || void 0 === o) && (o = !1);
        var l = function(e) {
          return e ? "TRUE" === e || "true" === e || e === !0 ? !0 : "FALSE" === e || "false" === e || e === !1 ? !1 : null : !1
        };
        o = l(o), r = l(r), o = o ? "true" : "false", r = r ? "true" : "false"
      }
      if (n && "date" === n.type || n && n.params && n.params.field && "date" === n.params.field.type || i && "date" === i.type || s && "date" === s.type || s && s.params && s.params.field && "date" === s.params.field.type || a && "date" === a.type) {
        if (!o || 0 == o.length || !r || 0 == r.length) return !1;
        try {
          o = Date.parse(o), r = Date.parse(r)
        } catch (c) {
          return !1
        }
      }
      var d = !1;
      if (n && "integer" === n.type || n && n.params && n.params.field && "integer" === n.params.field.type || i && "integer" === i.type || s && "integer" === s.type || s && s.params && s.params.field && "integer" === s.params.field.type || a && "integer" === a.type) {
        d = !0;
        try {
          o = parseInt(o), r = parseInt(r)
        } catch (c) {
          return !1
        }
      }
      if (n && "amount" === n.type || n && n.params && n.params.field && "amount" === n.params.field.type || i && "amount" === i.type || s && "amount" === s.type || s && s.params && s.params.field && "amount" === s.params.field.type || a && "amount" === a.type) {
        d = !0;
        try {
          o = parseFloat(o), r = parseFloat(r)
        } catch (c) {
          return !1
        }
      }
      var u = e.operator;
      return u && ("==" === u ? t = d ? _valueIsNaN(o) && _valueIsNaN(r) ? !0 : _valueIsNaN(o) && "" === r || "" === o && _valueIsNaN(r) ? !0 : o === r : o === r : "!=" === u ? t = d ? _valueIsNaN(o) && _valueIsNaN(r) === !1 || _valueIsNaN(o) === !1 && _valueIsNaN(r) ? !0 : _valueIsNaN(o) && _valueIsNaN(r) ? !1 : o !== r : o !== r : "<" === u ? t = r > o : "<=" === u ? t = r >= o : ">" === u ? t = o > r : ">=" === u && (t = o >= r)), t
    }
    return !0
  };
  var _valueIsNaN = function(e) {
    return e !== e
  };
  $scope.findFormFieldWithId = function(e, t) {
    if (e && e.length > 0) {
      var o, n = !1; - 1 !== t.indexOf("_LABEL", t - "_LABEL".length) ? (n = !0, o = t.substr(0, t.length - "_LABEL".length)) : o = t;
      for (var i = 0; e.length > i; i++)
        if (e[i].id === o && e[i].hasOwnProperty("isVisible")) {
          if (n && e[i].value && e[i].value.name) return e[i];
          if (!n) return e[i]
        }
      for (var i = 0; e.length > i; i++)
        if (e[i].id === t) return e[i]
    }
    return void 0
  }, $scope.openRowEditor = function(e, t, o) {
    $rootScope.currentField = t, $scope.dynamicTableReadOnly = o, $rootScope.selectedRow = e ? e.entity : $scope["selectedRow" + t.id], $scope.showRowEditor(t)
  }, $scope.showRowEditor = function(e) {
    $rootScope.currentField = e, $scope.tableRowEditModal = _internalCreateModal({
      template: appResourceRoot + "views/templates/dynamic-table-row-edit-template.html?version=" + Date.now(),
      scope: $scope,
      backdrop: "static"
    }, $modal, $scope)
  }, $scope.preProcessFields = function(e, t) {
    for (var o = 0; e.length > o; o++) {
      var n = e[o];
      if (n.visibilityCondition || (n.isVisible = !0), "amount" === n.type || n.params && n.params.field && "amount" === n.params.field.type) {
        if (n.numberValue = "", n.fractionsValue = "", n.value !== void 0 && null !== n.value && "" !== n.value) {
          var i = n.value + "",
            r = i.split(".");
          n.numberValue = r[0], (n.enableFractions || n.params && n.params.field && n.params.field.enableFractions) && (n.fractionsValue = r[1] || "00", 1 === n.fractionsValue.length && (n.fractionsValue += "0")), "string" == typeof n.value && (n.value = parseFloat(n.value))
        }
      } else if ("group" == n.type && n.params && n.params.allowCollapse) $scope.model.collapsedGroups[n.id] = n.params.collapseByDefault;
      else if ("typeahead" == n.type || ("dropdown" == n.type || "radio-buttons" == n.type) && "rest" == n.optionType && (n.restUrl || n.endpoint)) $scope.invokeRestUrl(n);
      else if (("dropdown" == n.type || "radio-buttons" == n.type) && "rest" != n.optionType && n.value && n.options)
        for (var s = 0; n.options.length > s; s++) {
          if (n.options[s].id && n.options[s].id === n.value) {
            n.value = n.options[s];
            break
          }
          if (n.options[s].name === n.value) {
            n.value = n.options[s];
            break
          }
        } else if ("upload" == n.type && n.value)
        if ($scope.model.uploads[n.id] = [], Array.isArray(n.value)) {
          for (var a = "", s = 0; n.value.length > s; s++) $scope.model.uploads[n.id].push(n.value[s]), a.length > 0 && (a += ","), a += n.value[s].id;
          n.value = a
        } else t && t.model && t.model.uploads && t.model.uploads[n.id] && ($scope.model.uploads[n.id] = t.model.uploads[n.id]);
      else if ("readonly" == n.type && n.params && n.params.field) {
        if ("upload" == n.params.field.type) {
          if (n.value && n.value.length > 0)
            for (var s = 0; n.value.length > s; s++) RelatedContentService.addUrlToContent(n.value[s])
        } else if ("dynamic-table" == n.params.field.type) n.params.tableEditable ? $scope.addTable(n, !1) : $scope.addTable(n, !0);
        else if ("date" == n.params.field.type) {
          var l = n.value;
          l && (n.value = new moment(l).format("LL"))
        }
      } else if ("readonly-text" == n.type && n.params && n.params.placeholders) {
        for (var s = 0; n.params.placeholders.length > s; s++) {
          var c = n.params.placeholders[s];
          if ("date" == c.type) n.value = n.value.replace(c.placeholder, new moment(c.value).format("MMMM Do YYYY"));
          else if ("upload" == c.type) {
            for (var d = "", u = 0; c.value.length > u; u++) {
              var p = c.value[u];
              RelatedContentService.addUrlToContent(p), RelatedContentService.checkRenditions(p), 0 != u && (d += ", "), d = d + '<a id="content-' + p.id + '">' + p.name + "</a>"
            }
            n.value && (n.value = n.value.replace(c.placeholder, d))
          }
        }
        n.value && (n.value = $sce.trustAsHtml(n.value))
      } else "dynamic-table" === n.type && n.columnDefinitions ? $scope.addTable(n, !1) : "readonly-text" == n.type && angular.isString(n.value) && (n.value = n.value.replace(/\n/g, "<br/>"))
    }
  };
  var prepareFormFields = function(e) {
    if ($scope.allFormFields = FormUtilService.flattenFields(e.fields), $scope.restData.restValues = {}, $scope.outcomesOnly)
      for (var t = 0; $scope.allFormFields.length > t; t++) {
        var o = $scope.allFormFields[t];
        ("typeahead" == o.type || ("dropdown" == o.type || "radio-buttons" == o.type) && "rest" == o.optionType && (o.restUrl || o.endpoint)) && $scope.invokeRestUrl(o)
      } else $scope.preProcessFields($scope.allFormFields, e)
  };
  $scope.moveRows = function(e, t, o) {
    for (var n = 0; e.length > n; n++) e[n].layout && e[n].layout.row > t && (e[n].layout.row = e[n].layout.row + o)
  }, $scope.validateField = function() {
    function e(e, t, o) {
      var n = !1;
      if (e && e.length > 0)
        for (var i = 0; e.length > i; i++)
          if (e[i][t] === o) {
            n = !0;
            break
          }
      return n
    }

    function t(e, t, o) {
      var n = void 0;
      if (e && e.length > 0)
        for (var i = 0; e.length > i; i++)
          if (e[i][t] === o) {
            n = e[i];
            break
          }
      return n
    }

    function o(e, t) {
      if (e && e.length > 0)
        for (var o = 0; e.length > o; o++) e[o].disabled = t
    }
    if ((void 0 == $scope.hideButtons || !$scope.hideButtons) && $scope.allFormFields) {
      for (var n = !0, i = 0; $scope.allFormFields.length > i; i++) {
        var r = $scope.allFormFields[i];
        if (r) {
          if (r.required) {
            switch (r.type) {
              case "boolean":
                (void 0 === r.value || 0 == r.value || null == r.value) && (n = !1);
                break;
              case "radio-buttons":
                var s = [];
                if (s = "rest" === r.optionType ? $scope.restData.restValues[r.id] : r.options, void 0 === r.value || "" == r.value || null == r.value) n = !1;
                else if (r.value.name) {
                  var a = e(s, "name", r.value.name);
                  a === !1 && (n = !1)
                }
                break;
              case "dropdown":
                if ("rest" === r.optionType && $scope.restData.restValues && $scope.restData.restValues[r.id] && $scope.restData.restValues[r.id].length > 0) {
                  for (var l = $scope.restData.restValues[r.id], c = !1, d = 0; l.length > d; d++)
                    if (l[d].id === r.value.id) {
                      c = !0;
                      break
                    }
                  c || (n = !1)
                }
                var u;
                if (null !== r.hasEmptyValue && void 0 !== r.hasEmptyValue && r.hasEmptyValue === !0 && null !== r.options && null !== r.options && r.options.length > 0 && (u = r.options[0]), void 0 !== u && null !== u)
                  if (r.value.name && r.value.name !== u.name) {
                    if (r.value.name && "rest" !== r.optionType) {
                      var a = e(r.options, "name", r.value.name);
                      a === !1 && (n = !1)
                    }
                  } else n = !1;
                break;
              case "typeahead":
                if (void 0 === r.value || "" === r.value || null === r.value) n = !1;
                else if (!r.value.id) {
                  var p = t($scope.restData.restValues[r.id], "name", r.value);
                  p ? r.value = p : n = !1
                }
                break;
              default:
                (void 0 === r.value || "" === r.value || null === r.value || 0 === r.value.length) && (n = !1)
            }
            if (n === !1) break
          } else if ("typeahead" === r.type && void 0 !== r.value && "" !== r.value && null !== r.value && !r.value.id) {
            var p = t($scope.restData.restValues[r.id], "name", r.value);
            if (!p) {
              n = !1;
              break
            }
            r.value = p
          }
          if ($scope.model.customFieldListeners.length > 0)
            for (var m = 0; $scope.model.customFieldListeners.length > m; m++)
              if ($scope.model.customFieldListeners[m].formValidateField) {
                var f = $scope.model.customFieldListeners[m].formValidateField($scope.formData, r, $scope);
                if (f === !1) {
                  n = f;
                  break
                }
              }
          if ("undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formValidateField !== void 0 && n) {
            var f = ALFRESCO.formExtensions.formValidateField($scope.formData, r, $scope);
            f === !1 && (n = f)
          }
          if ($scope.customJavascriptEvents.formValidateField && n) {
            var f = $scope.customJavascriptEvents.formValidateField($scope.formData, r, $scope);
            f === !1 && (n = f)
          }
          if (n === !1) break
        }
      }(n === !1 || n === !0) && (o(angular.element(document.querySelectorAll("#form_complete_button")), !n), o(angular.element(document.querySelectorAll("#form_start_button")), !n)), $scope.model.valid = n
    }
  }, $scope.addTable = function(e) {
    var t, o = [];
    if (e.columnDefinitions ? t = e.columnDefinitions : e.params && e.params.field && e.params.field.columnDefinitions && (t = e.params.field.columnDefinitions), t)
      for (var n = 0; t.length > n; n++) {
        var i = t[n];
        if (i.visible)
          if ("Date" === i.type) o.push({
            field: i.id,
            displayName: i.name,
            sortable: i.sortable,
            cellFilter: "date:'dd-MM-yyyy'"
          });
          else if ("Dropdown" === i.type) o.push({
            field: i.id + ".name",
            displayName: i.name,
            sortable: i.sortable
          });
          else if ("Boolean" === i.type) o.push({
            field: i.id,
            displayName: i.name,
            sortable: i.sortable,
            cellTemplate: '<div class="ui-grid-cell-contents">{{ row.entity[col.field] ? "' + $translate.instant("GENERAL.MESSAGE.YES") + '" : "' + $translate.instant("GENERAL.MESSAGE.NO") + '"}}</div>'
          });
          else if ("Amount" === i.type) {
            var r = "amount:" + (i.amountEnableFractions || !1) + ':"' + (i.amountCurrency || "$") + '"';
            o.push({
              field: i.id,
              displayName: i.name,
              sortable: i.sortable,
              cellFilter: r
            })
          } else o.push({
            field: i.id,
            displayName: i.name,
            sortable: i.sortable
          })
      }
    $scope["selectedRow" + e.id] = void 0, e.value || (e.value = []), $scope["gridOptions" + e.id] = {
      data: e.value,
      enableRowSelection: !0,
      headerRowHeight: 28,
      enableRowHeaderSelection: !1,
      multiSelect: !1,
      modifierKeysToMultiSelect: !1,
      enableColumnMenus: !1,
      enableSorting: !1,
      columnDefs: o,
      enableHorizontalScrollbar: uiGridConstants.scrollbars.NEVER
    }, $scope["gridOptions" + e.id].onRegisterApi = function(t) {
      $scope["gridApi" + e.id] = t, t.selection.on.rowSelectionChanged($scope, function(t) {
        $scope["selectedRow" + e.id] = t.isSelected ? t.entity : void 0
      })
    }
  }, $scope.getGridOptions = function(e) {
    return $scope[e]
  }, $scope.$watch("formData", function() {
    $scope.validateField()
  }, !0), $scope.isTableColumnInvalid = function(e, t) {
    var o = !1;
    if (e && t) {
      var n = e[t];
      o = n.$invalid
    }
    return o
  }, $scope.processFormDataWithVariables = function(e) {
    $scope.processJavascriptEvents(e), $scope.formData = e, $scope.formData.tabs && $scope.formData.tabs.length > 0 && ($scope.activeFormTab = $scope.formData.tabs[0]), prepareFormFields($scope.formData), $scope.model.outcomesOnly !== !0 && ($scope.taskId && $scope.formDefinition.processDefinitionId ? TaskService.getProcessInstanceVariables($scope.taskId).then(function(e) {
      $scope.combineFormVariables(e), $scope.evaluateAllItemVisibilityConditions(), $scope.model.loading = !1
    }) : ($scope.combineFormVariables(void 0), $scope.evaluateAllItemVisibilityConditions(), $scope.model.loading = !1), $scope.processFormRenderedEvent()), $scope.model.loading = !1
  }, $scope.processFormDataWithProvidedVariables = function(e, t) {
    $scope.processJavascriptEvents(e), $scope.formData = e, $scope.formData.tabs && $scope.formData.tabs.length > 0 && ($scope.activeFormTab = $scope.formData.tabs[0]), prepareFormFields($scope.formData), $scope.model.loading = !1, $scope.combineFormVariables(t), $scope.evaluateAllItemVisibilityConditions(), $scope.processFormRenderedEvent()
  }, $scope.processJavascriptEvents = function(e) {
    if (e.javascriptEvents && e.javascriptEvents.length > 0)
      for (var t = 0; e.javascriptEvents.length > t; t++) {
        var o = e.javascriptEvents[t].event,
          n = e.javascriptEvents[t].javascriptLogic;
        "formRendered" === o ? $scope.customJavascriptEvents[o] = Function("form", "scope", n) : "formFieldValueChanged" === o || "formFieldFocus" === o || "formFieldBlur" === o || "formFieldPersonSelected" === o || "formFieldPersonEmailSelected" === o || "formFieldPersonRemoved" === o || "formFieldGroupSelected" === o || "formFieldGroupRemoved" === o || "formFieldContentUploaded" === o || "formFieldContentRemoved" === o || "formFieldRestValuesSet" === o || "formValidateField" === o || "formValidateFieldValueChanged" === o ? $scope.customJavascriptEvents[o] = Function("form", "field", "scope", n) : "formBeforeComplete" === o || "formValidateBeforeSubmit" === o ? $scope.customJavascriptEvents[o] = Function("form", "outcome", "scope", n) : "formTableFieldValueChanged" === o || "formTableFieldFocus" === o || "formTableFieldBlur" === o || "formTableFieldRestValuesSet" === o || "formTableRendered" === o || "formTableValidateField" === o || "formTableValidateFieldValueChanged" === o ? $scope.customJavascriptEvents[o] = Function("form", "field", "columnDefinition", "editRow", "scope", n) : "formTableBeforeComplete" === o || "formTableBeforeCancel" === o || "formTableValidateBeforeComplete" === o ? $scope.customJavascriptEvents[o] = Function("form", "field", "editRow", "scope", n) : "taskCompleted" === o || "taskSaved" === o ? $scope.customJavascriptEvents[o] = Function("taskId", "form", "scope", n) : "taskCompletedError" === o || "taskSavedError" === o ? $scope.customJavascriptEvents[o] = Function("taskId", "errorResponse", "form", "scope", n) : "taskBeforeSaved" === o ? $scope.customJavascriptEvents[o] = Function("taskId", "form", "data", "scope", n) : "formTabActivated" == o && ($scope.customJavascriptEvents[o] = Function("form", "tab", "scope", n))
      }
  }, $scope.processFormRenderedEvent = function() {
    $timeout(function() {
      if ($scope.model.customFieldListeners.length > 0)
        for (var e = 0; $scope.model.customFieldListeners.length > e; e++) $scope.model.customFieldListeners[e].formRendered && $scope.model.customFieldListeners[e].formRendered($scope.formData, $scope)
    }), "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formRendered !== void 0 && $timeout(function() {
      ALFRESCO.formExtensions.formRendered($scope.formData, $scope)
    }), $scope.customJavascriptEvents.formRendered && $timeout(function() {
      $scope.customJavascriptEvents.formRendered($scope.formData, $scope)
    })
  };
  var fetchAndRenderForm = function() {
    $scope.model.loading = !0, $scope.activeFormTab = void 0, $scope.formDefinition ? $scope.processFormDataWithVariables($scope.formDefinition) : $scope.taskId ? FormService.getTaskForm($scope.taskId).then(function(e) {
      $scope.processFormDataWithVariables(e)
    }) : $scope.processInstanceId ? FormService.getStartFormInstance($scope.processInstanceId).then(function(e) {
      FormService.getHistoricInstanceVariables($scope.processInstanceId).then(function(t) {
        $scope.processFormDataWithProvidedVariables(e, t)
      })
    }) : $scope.processDefinitionId && FormService.getStartForm($scope.processDefinitionId).then(function(e) {
      $scope.processFormDataWithProvidedVariables(e, void 0)
    })
  };
  fetchAndRenderForm(), $scope.$watch("processDefinitionId", function(e, t) {
    e !== t && (initModel(), fetchAndRenderForm())
  }, !0), $scope.$watch("processInstanceId", function(e, t) {
    e !== t && (initModel(), fetchAndRenderForm())
  }, !0), $scope.getDefaultCompleteButtonText = function() {
    return $scope.processDefinitionId ? $translate.instant("FORM.DEFAULT-OUTCOME.START-PROCESS") : $translate.instant("FORM.DEFAULT-OUTCOME.COMPLETE")
  }, $scope.completeForm = function(e) {
    $scope.model.loading = !0, $scope.model.completeButtonDisabled = !0;
    var t = !0;
    if ($scope.model.customFieldListeners.length > 0)
      for (var o = 0; $scope.model.customFieldListeners.length > o; o++)
        if ($scope.model.customFieldListeners[o].formValidateBeforeSubmit) {
          var n = $scope.model.customFieldListeners[o].formValidateBeforeSubmit($scope.formData, e, $scope);
          if (void 0 !== n && (t = n), t === !1) break
        }
    if ("undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formValidateBeforeSubmit !== void 0 && t) {
      var n = ALFRESCO.formExtensions.formValidateBeforeSubmit($scope.formData, e, $scope);
      void 0 !== n && (t = n)
    }
    if ($scope.customJavascriptEvents.formValidateBeforeSubmit && t) {
      var n = $scope.customJavascriptEvents.formValidateBeforeSubmit($scope.formData, e, $scope);
      void 0 !== n && (t = n)
    }
    if (t === !1) return $scope.model.loading = !1, $scope.model.completeButtonDisabled = !1, void 0;
    if ($scope.model.customFieldListeners.length > 0)
      for (var o = 0; $scope.model.customFieldListeners.length > o; o++) $scope.model.customFieldListeners[o].formBeforeComplete && $scope.model.customFieldListeners[o].formBeforeComplete($scope.formData, e, $scope);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formBeforeComplete !== void 0 && ALFRESCO.formExtensions.formBeforeComplete($scope.formData, e, $scope), $scope.customJavascriptEvents.formBeforeComplete && $scope.customJavascriptEvents.formBeforeComplete($scope.formData, e, $scope);
    var i = $scope.createPostData();
    e && (i.outcome = e.name), $scope.processDefinitionId ? (i.processDefinitionId = $scope.processDefinitionId, $scope.processName && (i.name = $scope.processName), FormService.completeStartForm(i).then(function(e) {
      $scope.$emit("process-started", e), $scope.model.completeButtonDisabled = !1, $scope.model.loading = !1
    }, function(e) {
      $scope.model.completeButtonDisabled = !1, $scope.model.loading = !1, $scope.$emit("process-started-error", {
        processDefinitionId: $scope.processDefinitionId,
        error: e
      })
    })) : FormService.completeTaskForm($scope.taskId, i).then(function() {
      if ($scope.$emit("task-completed", {
        taskId: $scope.taskId
      }), $scope.model.customFieldListeners.length > 0)
        for (var e = 0; $scope.model.customFieldListeners.length > e; e++) $scope.model.customFieldListeners[e].taskCompleted && $scope.model.customFieldListeners[e].taskCompleted($scope.taskId, $scope.formData, $scope);
      "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.taskCompleted !== void 0 && ALFRESCO.formExtensions.taskCompleted($scope.taskId, $scope.formData, $scope), $scope.customJavascriptEvents.taskCompleted && $scope.customJavascriptEvents.taskCompleted($scope.taskId, $scope.formData, $scope), $scope.model.completeButtonDisabled = !1, $scope.model.loading = !1
    }, function(e) {
      if ($scope.model.completeButtonDisabled = !1, $scope.model.loading = !1, $scope.$emit("task-completed-error", {
        taskId: $scope.taskId,
        error: e
      }), $scope.model.customFieldListeners.length > 0)
        for (var t = 0; $scope.model.customFieldListeners.length > t; t++) $scope.model.customFieldListeners[t].taskCompletedError && $scope.model.customFieldListeners[t].taskCompletedError($scope.taskId, e.message, $scope.formData, $scope);
      "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.taskCompletedError !== void 0 && ALFRESCO.formExtensions.taskCompletedError($scope.taskId, e.message, $scope.formData, $scope), $scope.customJavascriptEvents.taskCompletedError && $scope.customJavascriptEvents.taskCompletedError($scope.taskId, e.message, $scope.formData, $scope)
    })
  }, $scope.saveForm = function() {
    $scope.model.loading = !0, $scope.model.saveButtonDisabled = !0;
    var e = $scope.createPostData(),
      t = !1;
    if ("undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.taskBeforeSaved !== void 0 && (t = ALFRESCO.formExtensions.taskBeforeSaved($scope.taskId, $scope.formData, e, $scope), t === !0)) return $scope.model.saveButtonDisabled = !1, $scope.model.loading = !1, void 0;
    if ($scope.customJavascriptEvents.taskBeforeSaved && (t = $scope.customJavascriptEvents.taskBeforeSaved($scope.taskId, $scope.formData, e, $scope), t === !0)) return $scope.model.saveButtonDisabled = !1, $scope.model.loading = !1, void 0;
    if ($scope.model.customFieldListeners.length > 0)
      for (var o = 0; $scope.model.customFieldListeners.length > o; o++)
        if ($scope.model.customFieldListeners[o].taskBeforeSaved && (t = $scope.model.customFieldListeners[o].taskBeforeSaved($scope.taskId, $scope.formData, e, $scope), t === !0)) return $scope.model.saveButtonDisabled = !1, $scope.model.loading = !1, void 0;
    FormService.saveTaskForm($scope.taskId, e).then(function() {
      if ($scope.$emit("task-saved", {
        taskId: $scope.taskId
      }), $scope.model.customFieldListeners.length > 0)
        for (var e = 0; $scope.model.customFieldListeners.length > e; e++) $scope.model.customFieldListeners[e].taskSaved && $scope.model.customFieldListeners[e].taskSaved($scope.taskId, $scope.formData, $scope);
      "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.taskSaved !== void 0 && ALFRESCO.formExtensions.taskSaved($scope.taskId, $scope.formData, $scope), $scope.customJavascriptEvents.taskSaved && $scope.customJavascriptEvents.taskSaved($scope.taskId, $scope.formData, $scope), $scope.model.saveButtonDisabled = !1, $scope.model.loading = !1
    }, function(e) {
      if ($scope.model.saveButtonDisabled = !1, $scope.model.loading = !1, $scope.$emit("task-save-error", {
        taskId: $scope.taskId,
        error: e
      }), $scope.model.customFieldListeners.length > 0)
        for (var t = 0; $scope.model.customFieldListeners.length > t; t++) $scope.model.customFieldListeners[t].taskSavedError && $scope.model.customFieldListeners[t].taskSavedError($scope.taskId, e.message, $scope.formData, $scope);
      "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.taskSavedError !== void 0 && ALFRESCO.formExtensions.taskSavedError($scope.taskId, e.message, $scope.formData, $scope), $scope.customJavascriptEvents.taskSavedError && $scope.customJavascriptEvents.taskSavedError($scope.taskId, e.message, $scope.formData, $scope)
    })
  }, $scope.fieldPersonSelected = function(e, t) {
    if (t.value = e, $scope.model.customFieldListeners.length > 0)
      for (var o = 0; $scope.model.customFieldListeners.length > o; o++) $scope.model.customFieldListeners[o].formFieldPersonSelected && $scope.model.customFieldListeners[o].formFieldPersonSelected($scope.formData, t, $scope);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formFieldPersonSelected !== void 0 && ALFRESCO.formExtensions.formFieldPersonSelected($scope.formData, t, $scope), $scope.customJavascriptEvents.formFieldPersonSelected && $scope.customJavascriptEvents.formFieldPersonSelected($scope.formData, t, $scope)
  }, $scope.fieldPersonEmailSelected = function(e, t) {
    if (t.value = e, $scope.model.customFieldListeners.length > 0)
      for (var o = 0; $scope.model.customFieldListeners.length > o; o++) $scope.model.customFieldListeners[o].formFieldPersonEmailSelected && $scope.model.customFieldListeners[o].formFieldPersonEmailSelected($scope.formData, t, $scope);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formFieldPersonEmailSelected !== void 0 && ALFRESCO.formExtensions.formFieldPersonEmailSelected($scope.formData, t, $scope), $scope.customJavascriptEvents.formFieldPersonEmailSelected && $scope.customJavascriptEvents.formFieldPersonEmailSelected($scope.formData, t, $scope)
  }, $scope.fieldPersonRemoved = function(e, t) {
    if (t.value = void 0, $scope.model.customFieldListeners.length > 0)
      for (var o = 0; $scope.model.customFieldListeners.length > o; o++) $scope.model.customFieldListeners[o].formFieldPersonRemoved && $scope.model.customFieldListeners[o].formFieldPersonRemoved($scope.formData, t, $scope);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formFieldPersonRemoved !== void 0 && ALFRESCO.formExtensions.formFieldPersonRemoved($scope.formData, t, $scope), $scope.customJavascriptEvents.formFieldPersonRemoved && $scope.customJavascriptEvents.formFieldPersonRemoved($scope.formData, t, $scope)
  }, $scope.fieldGroupSelected = function(e, t) {
    if (t.value = e, $scope.model.customFieldListeners.length > 0)
      for (var o = 0; $scope.model.customFieldListeners.length > o; o++) $scope.model.customFieldListeners[o].formFieldGroupSelected && $scope.model.customFieldListeners[o].formFieldGroupSelected($scope.formData, t, $scope);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formFieldGroupSelected !== void 0 && ALFRESCO.formExtensions.formFieldGroupSelected($scope.formData, t, $scope), $scope.customJavascriptEvents.formFieldGroupSelected && $scope.customJavascriptEvents.formFieldGroupSelected($scope.formData, t, $scope)
  }, $scope.fieldGroupRemoved = function(e, t) {
    if (t.value = void 0, $scope.model.customFieldListeners.length > 0)
      for (var o = 0; $scope.model.customFieldListeners.length > o; o++) $scope.model.customFieldListeners[o].formFieldGroupRemoved && $scope.model.customFieldListeners[o].formFieldGroupRemoved($scope.formData, t, $scope);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formFieldGroupRemoved !== void 0 && ALFRESCO.formExtensions.formFieldGroupRemoved($scope.formData, t, $scope), $scope.customJavascriptEvents.formFieldGroupRemoved && $scope.customJavascriptEvents.formFieldGroupRemoved($scope.formData, t, $scope)
  }, $scope.contentUploaded = function(e, t) {
    if ($scope.model.uploads[t.id] || ($scope.model.uploads[t.id] = []), $scope.model.uploads[t.id].push(e), $scope.updateContentValue(t), $scope.model.customFieldListeners.length > 0)
      for (var o = 0; $scope.model.customFieldListeners.length > o; o++) $scope.model.customFieldListeners[o].formFieldContentUploaded && $scope.model.customFieldListeners[o].formFieldContentUploaded($scope.formData, t, $scope);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formFieldContentUploaded !== void 0 && ALFRESCO.formExtensions.formFieldContentUploaded($scope.formData, t, $scope), $scope.customJavascriptEvents.formFieldContentUploaded && $scope.customJavascriptEvents.formFieldContentUploaded($scope.formData, t, $scope)
  }, $scope.removeContent = function(e, t) {
    if ($scope.model.uploads[t.id]) {
      if ($scope.model.uploads[t.id] = jQuery.grep($scope.model.uploads[t.id], function(t) {
        return t !== e
      }), $scope.updateContentValue(t), $scope.model.customFieldListeners.length > 0)
        for (var o = 0; $scope.model.customFieldListeners.length > o; o++) $scope.model.customFieldListeners[o].formFieldContentRemoved && $scope.model.customFieldListeners[o].formFieldContentRemoved($scope.formData, t, $scope);
      "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formFieldContentRemoved !== void 0 && ALFRESCO.formExtensions.formFieldContentRemoved($scope.formData, t, $scope), $scope.customJavascriptEvents.formFieldContentRemoved && $scope.customJavascriptEvents.formFieldContentRemoved($scope.formData, t, $scope)
    }
  }, $scope.updateContentValue = function(e) {
    if ($scope.model.uploads[e.id]) {
      for (var t = "", o = 0; $scope.model.uploads[e.id].length > o; o++) o > 0 && (t += ","), t += $scope.model.uploads[e.id][o].id;
      e.value = t
    } else e.value = void 0
  }, $scope.handleReadonlyClick = function(e, t) {
    if (0 == e.target.id.indexOf("content-")) {
      var o, n = e.target.id.substring(8);
      if (t.params && t.params.placeholders)
        for (var i = 0; t.params.placeholders.length > i; i++) {
          var r = t.params.placeholders[i];
          if ("upload" == r.type)
            for (var s = 0; r.value.length > s; s++) {
              var a = r.value[s];
              if (a.id == n) {
                o = a;
                break
              }
            }
          if (o) break
        }
      o && $scope.showContentDetails(o)
    }
  }, $scope.onFieldValueChange = function(e) {
    if ("amount" === e.type)
      if ("" === e.numberValue || void 0 === e.numberValue) e.value = null;
      else {
        var t = e.numberValue || "0";
        e.enableFractions ? (t += "." + (e.fractionsValue || "0"), e.value = parseFloat(t)) : e.value = parseInt(t)
      }
    var o = !0,
      n = !1;
    if ($scope.model.customFieldListeners.length > 0)
      for (var i = 0; $scope.model.customFieldListeners.length > i; i++)
        if ($scope.model.customFieldListeners[i].formValidateFieldValueChanged) {
          var r = $scope.model.customFieldListeners[i].formValidateFieldValueChanged($scope.formData, e, $scope);
          void 0 !== r && (o = r), n = !0
        }
    if ("undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formValidateFieldValueChanged !== void 0 && o) {
      var r = ALFRESCO.formExtensions.formValidateFieldValueChanged($scope.formData, e, $scope);
      void 0 !== r && (o = r), n = !0
    }
    if ($scope.customJavascriptEvents.formValidateFieldValueChanged && o) {
      var r = $scope.customJavascriptEvents.formValidateFieldValueChanged($scope.formData, e, $scope);
      void 0 !== r && (o = r), n = !0
    }
    if (n) {
      var s = function(e, t) {
        if (e && e.length > 0)
          for (var o = 0; e.length > o; o++) e[o].disabled = t
      };
      (o === !1 || o === !0) && (s(angular.element(document.querySelectorAll("#form_complete_button")), !o), s(angular.element(document.querySelectorAll("#form_start_button")), !o))
    }
    if ($scope.model.customFieldListeners.length > 0)
      for (var i = 0; $scope.model.customFieldListeners.length > i; i++) $scope.model.customFieldListeners[i].formFieldValueChanged && $scope.model.customFieldListeners[i].formFieldValueChanged($scope.formData, e, $scope);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formFieldValueChanged !== void 0 && ALFRESCO.formExtensions.formFieldValueChanged($scope.formData, e, $scope), $scope.customJavascriptEvents.formFieldValueChanged && $scope.customJavascriptEvents.formFieldValueChanged($scope.formData, e, $scope), $scope.evaluateAllItemVisibilityConditions()
  }, $scope.onFieldFocus = function(e) {
    if ($scope.model.customFieldListeners.length > 0)
      for (var t = 0; $scope.model.customFieldListeners.length > t; t++) $scope.model.customFieldListeners[t].formFieldFocus && $scope.model.customFieldListeners[t].formFieldFocus($scope.formData, e, $scope);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formFieldFocus !== void 0 && ALFRESCO.formExtensions.formFieldFocus($scope.formData, e, $scope), $scope.customJavascriptEvents.formFieldFocus && $scope.customJavascriptEvents.formFieldFocus($scope.formData, e, $scope)
  }, $scope.onFieldBlur = function(e) {
    if ($scope.model.customFieldListeners.length > 0)
      for (var t = 0; $scope.model.customFieldListeners.length > t; t++) $scope.model.customFieldListeners[t].formFieldBlur && $scope.model.customFieldListeners[t].formFieldBlur($scope.formData, e, $scope);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formFieldBlur !== void 0 && ALFRESCO.formExtensions.formFieldBlur($scope.formData, e, $scope), $scope.customJavascriptEvents.formFieldBlur && $scope.customJavascriptEvents.formFieldBlur($scope.formData, e, $scope)
  }, $scope.addDynamicTableRow = function(e) {
    delete $rootScope.selectedRow, $scope.showRowEditor(e)
  }, $scope.removeDynamicTableRow = function(e) {
    if ($scope["selectedRow" + e.id]) {
      var t = e.value.indexOf($scope["selectedRow" + e.id]);
      $scope["gridApi" + e.id].selection.toggleRowSelection($scope["selectedRow" + e.id]), e.value.splice(t, 1), $timeout(function() {
        e.value.length > 0 ? $scope["gridApi" + e.id].selection.toggleRowSelection(e.value[0]) : $scope["selectedRow" + e.id] = void 0
      })
    }
  }, $scope.noRowSelected = function(e) {
    var t = !0;
    return $scope["selectedRow" + e.id] && (t = !1), t
  }, $scope.moveDynamicTableRowUp = function(e) {
    if ($scope["selectedRow" + e.id]) {
      var t = e.value.indexOf($scope["selectedRow" + e.id]);
      if (0 != t) {
        var o = e.value[t];
        e.value.splice(t, 1), $scope["gridApi" + e.id].selection.clearSelectedRows(), $timeout(function() {
          e.value.splice(t + -1, 0, o), $timeout(function() {
            $scope["gridApi" + e.id].selection.toggleRowSelection(o)
          })
        })
      }
    }
  }, $scope.moveDynamicTableRowDown = function(e) {
    if ($scope["selectedRow" + e.id]) {
      var t = e.value.indexOf($scope["selectedRow" + e.id]);
      if (t != e.value.length - 1) {
        var o = e.value[t];
        e.value.splice(t, 1), $scope["gridApi" + e.id].selection.clearSelectedRows(), $timeout(function() {
          e.value.splice(t + 1, 0, o), $timeout(function() {
            $scope["gridApi" + e.id].selection.toggleRowSelection(o)
          })
        })
      }
    }
  }, $scope.formTabClicked = function(e) {
    $scope.activeFormTab = e, "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formTabActivated !== void 0 && $timeout(function() {
      ALFRESCO.formExtensions.formTabActivated($scope.formData, e, $scope)
    }), $scope.customJavascriptEvents.formTabActivated && $scope.customJavascriptEvents.formTabActivated($scope.formData, e, $scope)
  }, $scope.uploadInProgress = function(e) {
    "undefined" !== e && ($scope.model.uploadInProgress = e)
  }, $scope.createPostData = function() {
    var e = {
      values: {}
    };
    if ($scope.allFormFields)
      for (var t = 0; $scope.allFormFields.length > t; t++) {
        var o = $scope.allFormFields[t];
        if (o && o.isVisible && "container" != o.type && o && "readonly-text" !== o.type && ("boolean" === o.type && null == o.value && (o.value = !1), "readonly" !== o.type || o.params && (o.params.tableEditable || o.params.documentsEditable)))
          if ("readonly" === o.type && o.params && o.params.documentsEditable) {
            if (o.value && o.value.length > 0) {
              for (var n = "", i = 0; o.value.length > i; i++) n.length > 0 && (n += ","), n += o.value[i].id;
              var r = o.id;
              "readonly" === o.type && (r = o.params.field.id), e.values[r] = n
            }
          } else if ("dropdown" === o.type && null !== o.hasEmptyValue && void 0 !== o.hasEmptyValue && o.hasEmptyValue === !0 || "radio-buttons" === o.type) {
            if ("rest" === o.optionType)
              if (o.value && o.value.id) {
                if ($scope.restData.restValues && $scope.restData.restValues[o.id] && $scope.restData.restValues[o.id].length > 0)
                  for (var s = $scope.restData.restValues[o.id], a = 0; s.length > a; a++)
                    if (s[a].id === o.value.id) {
                      e.values[o.id] = o.value;
                      break
                    }
              } else e.values[o.id] = {
                id: void 0,
                name: void 0
              };
            else if (null !== o.options && void 0 !== o.options && o.options.length > 0)
              if ("dropdown" === o.type) {
                var l = o.options[0];
                e.values[o.id] = l.name !== o.value.name ? o.value : {
                  id: void 0,
                  name: void 0
                }
              } else "radio-buttons" === o.type && (e.values[o.id] = o.value)
          } else e.values[o.id] = "typeahead" === o.type && "string" == typeof o.value ? null : o.value
      }
    return e
  }, $scope.getFieldLabelDisplayValue = function(e) {
    if (e && e.id && e.params && e.params.field && e.params.field.id && $scope.currentAndHistoricFormFields && 0 !== $scope.currentAndHistoricFormFields.length) {
      if (-1 === e.params.field.id.indexOf("_LABEL", e.params.field.id - "_LABEL".length))
        for (var t = e.params.field.id + "_LABEL", o = 0; $scope.currentAndHistoricFormFields.length > o; o++)
          if ($scope.currentAndHistoricFormFields[o].id === t) {
            var n = e.value + " (" + $scope.currentAndHistoricFormFields[o].value + ")";
            return n
          }
      return e.value
    }
  }, $scope.controlCallbacks = {
    onFieldValueChange: $scope.onFieldValueChange,
    onFieldFocus: $scope.onFieldFocus,
    onFieldBlur: $scope.onFieldBlur,
    isEmpty: $scope.isEmpty,
    isEmptyDropdown: $scope.isEmptyDropdown,
    fieldPersonSelected: $scope.fieldPersonSelected,
    fieldPersonEmailSelected: $scope.fieldPersonEmailSelected,
    fieldPersonRemoved: $scope.fieldPersonRemoved,
    fieldGroupSelected: $scope.fieldGroupSelected,
    fieldGroupRemoved: $scope.fieldGroupRemoved,
    getGridOptions: $scope.getGridOptions,
    noRowSelected: $scope.noRowSelected,
    moveDynamicTableRowUp: $scope.moveDynamicTableRowUp,
    moveDynamicTableRowDown: $scope.moveDynamicTableRowDown,
    addDynamicTableRow: $scope.addDynamicTableRow,
    removeDynamicTableRow: $scope.removeDynamicTableRow,
    openRowEditor: $scope.openRowEditor,
    removeContent: $scope.removeContent,
    contentUploaded: $scope.contentUploaded,
    uploadInProgress: $scope.uploadInProgress,
    handleReadonlyClick: $scope.handleReadonlyClick,
    clearDate: $scope.clearDate,
    selectToday: $scope.selectToday,
    closeDatePopup: $scope.closeDatePopup,
    registerCustomFieldListener: $scope.registerCustomFieldListener,
    removeCustomFieldListener: $scope.removeCustomFieldListener,
    getFieldLabelDisplayValue: $scope.getFieldLabelDisplayValue
  }, $scope.taskId && ($scope.model.isTaskForm = !0), $scope.shareModel && ($scope.formData.model = $scope.model, $scope.formData.saveForm = $scope.saveForm, $scope.formData.completeForm = $scope.completeForm)
}]), angular.module("activitiApp").controller("DynamicTableRowEditController", ["$rootScope", "$scope", "$http", "$translate", "$modal", "$timeout", "appResourceRoot", function(e, t, o, n, i, r, s) {
  t.popup = {
    model: {
      valid: !1
    }
  };
  var a = {},
    l = [];
  t.tableRestValues = {}, t.tableAmountValues = {}, t.invokeDynamicTableRestUrl = function(e, n, i) {
    t.tableRestValues[n.id] = [], t.taskId ? o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/task-forms/" + t.taskId + "/form-values/" + e.id + "/" + n.id
    }).success(function(o) {
      if (t.tableRestValues[n.id] = o, i && o && o.length)
        for (var r = 0; o.length > r; r++) o[r].id === i && (t.editRow[n.id] = o[r]);
      if (t.model.customFieldListeners.length > 0)
        for (var r = 0; t.model.customFieldListeners.length > r; r++) t.model.customFieldListeners[r].formTableFieldRestValuesSet && t.model.customFieldListeners[r].formTableFieldRestValuesSet(t.formData, e, n, t.editRow, t);
      "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formTableFieldRestValuesSet !== void 0 && ALFRESCO.formExtensions.formTableFieldRestValuesSet(t.formData, e, n, t.editRow, t), t.customJavascriptEvents.formTableFieldRestValuesSet && t.customJavascriptEvents.formTableFieldRestValuesSet(t.formData, e, n, t.editRow, t)
    }) : t.processDefinitionId && o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-definitions/" + t.processDefinitionId + "/start-form-values/" + e.id + "/" + n.id
    }).success(function(o) {
      if (t.tableRestValues[n.id] = o, i && o && o.length)
        for (var r = 0; o.length > r; r++) o[r].id === i && (t.editRow[n.id] = o[r]);
      if (t.model.customFieldListeners.length > 0)
        for (var r = 0; t.model.customFieldListeners.length > r; r++) t.model.customFieldListeners[r].formTableFieldRestValuesSet && t.model.customFieldListeners[r].formTableFieldRestValuesSet(t.formData, e, n, t.editRow, t);
      "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formTableFieldRestValuesSet !== void 0 && ALFRESCO.formExtensions.formTableFieldRestValuesSet(t.formData, e, n, t.editRow, t), t.customJavascriptEvents.formTableFieldRestValuesSet && t.customJavascriptEvents.formTableFieldRestValuesSet(t.formData, e, n, t.editRow, t)
    })
  }, e.currentField.columnDefinitions ? (l = e.currentField.columnDefinitions, t.currentField = e.currentField) : e.currentField.params.field.columnDefinitions && (l = e.currentField.params.field.columnDefinitions, t.currentField = e.currentField.params.field);
  for (var c = 0; l.length > c; c++) {
    var d = l[c].id;
    if ("Dropdown" === l[c].type) {
      var u;
      if (u = e.selectedRow && e.selectedRow[d] && e.selectedRow[d].name ? e.selectedRow[d].name : l[c].value, "rest" === l[c].optionType && (l[c].endpoint && l[c].endpoint.id || l[c].restUrl)) {
        var p;
        if (e.selectedRow && e.selectedRow[d] && e.selectedRow[d].id && (p = e.selectedRow[d]), l[c].editable && !t.dynamicTableReadOnly) {
          var m;
          p && p.id && (m = p.id), t.invokeDynamicTableRestUrl(e.currentField, l[c], m)
        } else p && p.name && (a[d] = p.name)
      } else if (l[c].options && l[c].options.length > 1 && u) {
        for (var f = 0; l[c].options.length > f; f++)
          if (l[c].options[f].name === u) {
            a[d] = l[c].options[f];
            break
          }
        a[d] || (a[d] = l[c].options[0])
      }
    } else if ("Amount" === l[c].type) {
      var v = e.selectedRow ? e.selectedRow[d] : void 0,
        h = {
          numberValue: "",
          fractionsValue: ""
        };
      if (v !== void 0 && null !== v) {
        var g = v + "",
          I = g.split(".");
        h.numberValue = I[0], l[c].amountEnableFractions && (h.fractionsValue = I[1] || "00", 1 === h.fractionsValue.length && (h.fractionsValue += "0")), "string" == typeof v && (v = parseFloat(v))
      }
      t.tableAmountValues[d] = h, a[d] = v
    } else a[d] = e.selectedRow ? e.selectedRow[d] : ""
  }
  if (t.appResourceRoot = s, t.editRow = a, t.cancelForm = function(o) {
    if (t.model.customFieldListeners.length > 0)
      for (var n = 0; t.model.customFieldListeners.length > n; n++) t.model.customFieldListeners[n].formTableBeforeCancel && t.model.customFieldListeners[n].formTableBeforeCancel(t.formData, e.currentField, t.editRow, t);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formTableBeforeCancel !== void 0 && ALFRESCO.formExtensions.formTableBeforeCancel(t.formData, e.currentField, t.editRow, t), t.customJavascriptEvents.formTableBeforeCancel && t.customJavascriptEvents.formTableBeforeCancel(t.formData, e.currentField, t.editRow, t), o.hide()
  }, t.completeForm = function(o) {
    if (t.model.customFieldListeners.length > 0)
      for (var n = 0; t.model.customFieldListeners.length > n; n++)
        if (t.model.customFieldListeners[n].formTableValidateBeforeComplete) {
          var i = t.model.customFieldListeners[n].formTableValidateBeforeComplete(t.formData, e.currentField, t.editRow, t);
          if (i === !1) return
        }
    if ("undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formTableValidateBeforeComplete !== void 0) {
      var i = ALFRESCO.formExtensions.formTableValidateBeforeComplete(t.formData, e.currentField, t.editRow, t);
      if (i === !1) return
    }
    if (t.customJavascriptEvents.formTableValidateBeforeComplete) {
      var i = t.customJavascriptEvents.formTableValidateBeforeComplete(t.formData, e.currentField, t.editRow, t);
      if (i === !1) return
    }
    if (t.model.customFieldListeners.length > 0)
      for (var n = 0; t.model.customFieldListeners.length > n; n++) t.model.customFieldListeners[n].formTableBeforeComplete && t.model.customFieldListeners[n].formTableBeforeComplete(t.formData, e.currentField, t.editRow, t);
    if ("undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formTableBeforeComplete !== void 0 && ALFRESCO.formExtensions.formTableBeforeComplete(t.formData, e.currentField, t.editRow, t), t.customJavascriptEvents.formTableBeforeComplete && t.customJavascriptEvents.formTableBeforeComplete(t.formData, e.currentField, t.editRow, t), e.selectedRow) {
      var r = [];
      e.currentField.columnDefinitions ? r = e.currentField.columnDefinitions : e.currentField.params.field.columnDefinitions && (r = e.currentField.params.field.columnDefinitions);
      for (var n = 0; r.length > n; n++) {
        var s = r[n].id;
        e.selectedRow[s] = a[s]
      }
    } else e.currentField.value || (e.currentField.value = []), e.currentField.value.push(a);
    delete t.editRow, o.hide()
  }, t.$watch("editRow", function() {
    t.validateField()
  }, !0), t.validateField = function() {
    if (t.editRow) {
      var o = !0,
        n = [];
      e.currentField.columnDefinitions ? n = e.currentField.columnDefinitions : e.currentField.params.field.columnDefinitions && (n = e.currentField.params.field.columnDefinitions);
      for (var i = 0; n.length > i; i++) {
        var r = t.editRow[n[i].id];
        if (n[i].required && !r) {
          if ("Boolean" === n[i].type || "Amount" === n[i].type && 0 === r) continue;
          o = !1;
          break
        }
        if (t.model.customFieldListeners.length > 0)
          for (var i = 0; t.model.customFieldListeners.length > i; i++)
            if (t.model.customFieldListeners[i].formTableValidateField) {
              var s = t.model.customFieldListeners[i].formTableValidateField(t.formData, r, n[i], t.editRow, t);
              if (s === !1) {
                o = s;
                break
              }
            }
        if ("undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formTableValidateField !== void 0 && o) {
          var s = ALFRESCO.formExtensions.formTableValidateField(t.formData, r, n[i], t.editRow, t);
          s === !1 && (o = s)
        }
        if (t.customJavascriptEvents.formTableValidateField && o) {
          var s = t.customJavascriptEvents.formTableValidateField(t.formData, r, n[i], t.editRow, t);
          s === !1 && (o = s)
        }
        if (o === !1) break
      }
      t.popup.model.valid = o
    }
  }, t.clearDateEditRow = function(e, o) {
    t.editRow[e.id] = "", o && o(t.editRow[e.id]), jQuery("#" + e.id).blur()
  }, t.selectTodayEditRow = function(e, o) {
    var n = new Date;
    n = new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0, 0), t.editRow[e.id] = n, o && o(t.editRow[e.id]), jQuery("#" + e.id).blur()
  }, t.closeDatePopupEditRow = function(e) {
    jQuery("#" + e.id).blur()
  }, t.onTableFieldValueChange = function(o) {
    if ("Amount" === o.type) {
      var n, i = t.tableAmountValues[o.id];
      o.amountEnableFractions ? (n = i.fractionsValue ? (i.numberValue ? i.numberValue : "0") + "." + i.fractionsValue : i.numberValue, n && (n = parseFloat(n))) : (n = i.numberValue, n && (n = parseInt(n))), t.editRow[o.id] = n
    }
    var r = !0,
      s = !1;
    if (t.model.customFieldListeners.length > 0)
      for (var a = 0; t.model.customFieldListeners.length > a; a++)
        if (t.model.customFieldListeners[a].formTableValidateFieldValueChanged) {
          var l = t.model.customFieldListeners[a].formTableValidateFieldValueChanged(t.formData, e.currentField, o, t.editRow, t);
          if (void 0 !== l && (r = l), s = !0, 0 == r) break
        }
    if ("undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formTableValidateFieldValueChanged !== void 0 && r) {
      var l = ALFRESCO.formExtensions.formTableValidateFieldValueChanged(t.formData, e.currentField, o, t.editRow, t);
      void 0 !== l && (r = l), s = !0
    }
    if (t.customJavascriptEvents.formTableValidateFieldValueChanged && r) {
      var l = t.customJavascriptEvents.formTableValidateFieldValueChanged(t.formData, e.currentField, o, t.editRow, t);
      void 0 !== l && (r = l), s = !0
    }
    if (s) {
      var c = function(e, t) {
        if (e && e.length > 0)
          for (var o = 0; e.length > o; o++) e[o].disabled = t
      };
      (r === !1 || r === !0) && c(angular.element(document.querySelectorAll("#table_form_complete_button")), !r)
    }
    if (t.model.customFieldListeners.length > 0)
      for (var a = 0; t.model.customFieldListeners.length > a; a++) t.model.customFieldListeners[a].formTableFieldValueChanged && t.model.customFieldListeners[a].formTableFieldValueChanged(t.formData, e.currentField, o, t.editRow, t);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formTableFieldValueChanged !== void 0 && ALFRESCO.formExtensions.formTableFieldValueChanged(t.formData, e.currentField, o, t.editRow, t), t.customJavascriptEvents.formTableFieldValueChanged && t.customJavascriptEvents.formTableFieldValueChanged(t.formData, e.currentField, o, t.editRow, t)
  }, t.onTableFieldFocus = function(o) {
    if (t.model.customFieldListeners.length > 0)
      for (var n = 0; t.model.customFieldListeners.length > n; n++) t.model.customFieldListeners[n].formTableFieldFocus && t.model.customFieldListeners[n].formTableFieldFocus(t.formData, e.currentField, o, t.editRow, t);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formTableFieldFocus !== void 0 && ALFRESCO.formExtensions.formTableFieldFocus(t.formData, e.currentField, o, t.editRow, t), t.customJavascriptEvents.formTableFieldFocus && t.customJavascriptEvents.formTableFieldFocus(t.formData, e.currentField, o, t.editRow, t)
  }, t.onTableFieldBlur = function(o) {
    if (t.model.customFieldListeners.length > 0)
      for (var n = 0; t.model.customFieldListeners.length > n; n++) t.model.customFieldListeners[n].formTableFieldBlur && t.model.customFieldListeners[n].formTableFieldBlur(t.formData, e.currentField, o, t.editRow, t);
    "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formTableFieldBlur !== void 0 && ALFRESCO.formExtensions.formTableFieldBlur(t.formData, e.currentField, o, t.editRow, t), t.customJavascriptEvents.formTableFieldBlur && t.customJavascriptEvents.formTableFieldBlur(t.formData, e.currentField, o, t.editRow, t)
  }, t.model.customFieldListeners.length > 0)
    for (var c = 0; t.model.customFieldListeners.length > c; c++) t.model.customFieldListeners[c].formTableRendered && r(function() {
      t.model.customFieldListeners[c].formTableRendered(t.formData, e.currentField, l, t.editRow, t)
    });
  "undefined" != typeof ALFRESCO && ALFRESCO.formExtensions !== void 0 && ALFRESCO.formExtensions.formTableRendered !== void 0 && r(function() {
    ALFRESCO.formExtensions.formTableRendered(t.formData, e.currentField, l, t.editRow, t)
  }), t.customJavascriptEvents.formTableRendered && r(function() {
    t.customJavascriptEvents.formTableRendered(t.formData, e.currentField, l, t.editRow, t)
  })
}]), angular.module("activitiApp").controller("StartFormController", ["$rootScope", "$scope", "$translate", "$http", "$location", "NavigationService", function(e, t, o, n, i, r) {
  t.$watch("processInstanceId", function() {
    t.getProcessInstance(t.processInstanceId)
  }), t.getProcessInstance = function(e) {
    n({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + e
    }).success(function(e) {
      t.model.processInstance = e
    }).error(function(e) {
      console.log("Something went wrong: " + e)
    })
  }, t.openProcessInstance = function(e) {
    r.openProcessPage(e)
  }, t.backToProcessInstance = function() {
    t.$parent.startForm = {}
  }
}]), angular.module("activitiApp").controller("StartProcessController", ["$rootScope", "$scope", "$translate", "$http", "$timeout", "$location", "$route", "$modal", "$routeParams", "$q", "AppDefinitionService", "ProcessService", "FormService", "RelatedContentService", "FormUtilService", "NavigationService", function(e, t, o, n, i, r, s, a, l, c, d, u, p, m, f, v) {
  e.setMainPageById("start"), t.processDefinitionId = l.processDefinitionId, t.appDefinitionId = l.appDefinitionId || d.getIntegrationAppDefinitionId(), t.missingAppdefinition = t.appDefinitionId === !1, d.setActiveAppDefinitionId(t.appDefinitionId), l.processDefinitionId ? u.getProcessDefinitionById(t.processDefinitionId).then(function(e) {
    t.processDefinitions = [e], t.selectProcessDefinition(e)
  }) : u.getProcessDefinitions(t.appDefinitionId).then(function(e) {
    t.processDefinitions = e.data
  }), t.processName = "", t.processDefinition = null, t.processDefinitionWithStartFormId = null, t.startFormDefinition = null, ACTIVITI.CONFIG.workflow && ACTIVITI.CONFIG.workflow.addStartProcessContent && (t.startProcessContent = ACTIVITI.CONFIG.workflow.addStartProcessContent, t.startProcessContentQueued = !1), t.addedStartProcessContent = null, t.selectProcessDefinition = function(e) {
    t.processDefinition == e ? (t.processDefinition = null, t.processDefinitionWithStartFormId = null, t.startFormDefinition = null) : (t.processDefinition = e, e.hasStartForm ? t.loadStartForm(e) : (t.processName = e.name + " - " + (new moment).format("MMMM Do YYYY"), t.processDefinitionWithStartFormId = null, t.startFormDefinition = null))
  }, t.loadStartForm = function() {
    t.startProcessContent ? t.startProcessContent && (t.addedStartProcessContent ? t.setStartForm() : t.startProcessContentQueued || (t.startProcessContentQueued = !0, "function" == typeof t.startProcessContent ? t.startProcessContent(function(e) {
      t.startProcessContent = e, t.queueStartProcessContent().then(function() {
        t.setStartForm()
      })
    }, function(t, o) {
      e.addAlert(o, "error")
    }) : t.queueStartProcessContent().then(function() {
      t.setStartForm()
    }))) : t.setStartForm()
  }, t.queueStartProcessContent = function() {
    for (var n, i = [], r = c.defer(), s = t.startProcessContent, a = 0; s.length > a; a++) n = s[a], m.addRelatedContentFromSource(null, null, n.source, n.sourceId, n.name, null, null, n.link, null).then(function(e) {
      i.push(e), i.length == s.length && (t.addedStartProcessContent = i, r.resolve())
    }, function() {
      e.addAlert(o("PROCESS.ALERT.START-PROCESS-CONTENT-ADD-FAILED", {
        noOfFiles: s.length
      }), "error"), r.reject()
    });
    return r.promise
  }, t.setStartForm = function() {
    var e = t.processDefinition;
    e.hasStartForm && p.getStartForm(e.id).then(function(o) {
      if (t.addedStartProcessContent) {
        var n, i = f.flattenFields(o.fields);
        for (var r in i)
          if (n = i[r], "upload" == n.type) {
            n.value = t.addedStartProcessContent;
            break
          }
      }
      t.processName = e.name + " - " + (new moment).format("MMMM Do YYYY"), t.processDefinition = e, t.processDefinitionWithStartFormId = e.id, t.startFormDefinition = o
    })
  }, t.navigateToView = function(e) {
    t.appDefinitionId && !ACTIVITI.CONFIG.integrationProfile ? r.path("/apps/" + encodeURIComponent(t.appDefinitionId) + e) : r.path(e)
  }, t.createProcessInstance = function() {
    u.createProcess({
      processDefinitionId: t.processDefinition.id,
      name: t.processName
    }).then(function() {
      v.openProcessPage(t.processDefinition.id)
    })
  };
  var h = t.$on("process-started", function(e, t) {
    h(), v.openProcessPage(t.id)
  })
}]), angular.module("activitiApp").controller("FormSelectPopupCrtl", ["$rootScope", "$scope", "$http", "$q", "$filter", function(e, t, o, n, i) {
  function r(e) {
    t.activeFormTab = e.tabs && e.tabs.length > 0 ? e.tabs[0] : void 0
  }
  t.state = {
    loadingForms: !0,
    formsError: !1
  }, t.currentForm ? (r(t.currentForm), t.selectedForm = t.currentForm) : t.selectedForm = {
    loading: !0
  }, t.formTabClicked = function(e) {
    t.activeFormTab = e
  }, t.selectForm = function(e) {
    null === e.fields ? t.loadForm(e) : (r(e), t.selectedForm = e)
  }, t.loadForms = function() {
    n.all([o({
        mehtod: "GET",
        url: ACTIVITI.CONFIG.contextRoot + "/app/rest/models?filter=myReusableForms&modelType=2&sort=modifiedDesc"
      }), o({
        mehtod: "GET",
        url: ACTIVITI.CONFIG.contextRoot + "/app/rest/models?filter=sharedWithMe&modelType=2&sort=modifiedDesc"
      })]).then(function(e) {
      t.state.loadingForms = !1, t.state.formsError = 200 !== e[0].status || 200 !== e[1].status, t.state.formsError ? 200 === e[0].status ? t.forms = e[0].data.data : 200 === e[1].status && (t.forms = e[1].data.data) : t.forms = i("orderBy")(e[0].data.data.concat(e[1].data.data), "lastUpdated", !0);
      for (var o = 0; t.forms.length > o; o++) t.forms[o].fields = null;
      t.selectedForm.loading && t.forms.length > 0 && t.selectForm(t.forms[0])
    })
  }, t.loadForm = function(e) {
    e.loading = !0, o.get(ACTIVITI.CONFIG.contextRoot + "/app/rest/form-models/" + e.id).success(function(o) {
      e.loadingError = !1, e.loading = !1, e.customFieldTemplates = o.formDefinition.customFieldTemplates, e.tabs = o.formDefinition.tabs, e.fields = o.formDefinition.fields, e.outcomes = o.formDefinition.outcomes, r(e), t.selectedForm = e
    }).error(function() {
      e.loading = !1, e.loadingError = !0
    })
  }, t.loadForms()
}]), angular.module("activitiApp").controller("DecisionTableDisplayController", ["$scope", "$rootScope", "$translate", "$http", "uiGridConstants", "appResourceRoot", function(e, t, o, n, i, r) {
  e.model = {
    loading: !0,
    decisionTableDefinition: {},
    decisionTableRules: [],
    columnDefs: [],
    columnVariableIdMap: {},
    columnVariableTypeVariableIdMap: {},
    decisionTableExpanded: !0,
    metadataVariablesColumnDefs: [],
    inputVariableValues: [],
    inputListExpanded: !1,
    outputVariableValues: [],
    outputListExpanded: !1
  }, e.model.metadataVariablesColumnDefs.push({
    name: "name",
    displayName: o.instant("PROCESS.DECISION.TABLE.METADATA-NAME"),
    field: "name",
    type: "string",
    headerCellClass: "header-expression",
    sort: {
      direction: i.ASC,
      priority: 1
    }
  }), e.model.metadataVariablesColumnDefs.push({
    name: "value",
    displayName: o.instant("PROCESS.DECISION.TABLE.METADATA-VALUE"),
    field: "value",
    type: "string",
    headerCellClass: "header-expression",
    cellTemplate: '<div class="ui-grid-cell-contents">       <span class="contents-value">{{grid.appScope.formatVariableValue(COL_FIELD, row)}}</span>   </div>'
  }), e.gridOptions = {
    data: e.model.decisionTableRules,
    enableRowHeaderSelection: !1,
    multiSelect: !1,
    modifierKeysToMultiSelect: !1,
    enableHorizontalScrollbar: 0,
    enableColumnMenus: !0,
    enableSorting: !1,
    enableCellEditOnFocus: !1,
    columnDefs: e.model.columnDefs,
    headerTemplate: r + "views/templates/decision-table-header-template.html"
  }, e.gridOptions.onRegisterApi = function(t) {
    e.gridApi = t;
    var o = l();
    e.gridApi.core.addRowHeaderColumn({
      name: "rowHeaderCol",
      displayName: "",
      width: 35,
      cellTemplate: o
    })
  }, e.inputVariablesGridOptions = {
    data: e.model.inputVariableValues,
    columnDefs: e.model.metadataVariablesColumnDefs,
    headerTemplate: r + "views/templates/decision-table-header-template.html",
    enableSorting: !0,
    enableCellEditOnFocus: !1,
    enableRowHeaderSelection: !1,
    multiSelect: !1,
    modifierKeysToMultiSelect: !1,
    enableHorizontalScrollbar: 0,
    enableColumnMenus: !1
  }, e.inputVariablesGridOptions.onRegisterApi = function(t) {
    e.inputVariableGridApi = t;
    var o = l();
    e.inputVariableGridApi.core.addRowHeaderColumn({
      name: "rowHeaderCol",
      displayName: "",
      width: 35,
      cellTemplate: o
    })
  }, e.outputVariablesGridOptions = {
    data: e.model.outputVariableValues,
    columnDefs: e.model.metadataVariablesColumnDefs,
    headerTemplate: r + "views/templates/decision-table-header-template.html",
    enableSorting: !0,
    enableCellEditOnFocus: !1,
    enableRowHeaderSelection: !1,
    multiSelect: !1,
    modifierKeysToMultiSelect: !1,
    enableHorizontalScrollbar: 0,
    enableColumnMenus: !1
  }, e.outputVariablesGridOptions.onRegisterApi = function(t) {
    e.outputVariableGridApi = t;
    var o = l();
    e.outputVariableGridApi.core.addRowHeaderColumn({
      name: "rowHeaderCol",
      displayName: "",
      width: 35,
      cellTemplate: o
    })
  }, e.getDecisionTableInfo = function(r, s, a) {
    n({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/decisions/audit?id=" + encodeURIComponent(r)
    }).success(function(t) {
      e.model.loading = !1;
      var o = JSON.parse(t.decisionModelJson),
        n = JSON.parse(t.auditTrailJson);
      e.auditTrail = n, e.model.decisionTableDefinition = o;
      var r = [];
      for (var s in n.inputVariables) n.inputVariables.hasOwnProperty(s) && r.push({
        name: s,
        value: n.inputVariables[s]
      });
      Array.prototype.push.apply(e.model.inputVariableValues, r), e.inputVariableGridApi.core.notifyDataChange(i.dataChange.ALL);
      var a = [];
      for (var s in n.outputVariables) n.outputVariables.hasOwnProperty(s) && a.push({
        name: s,
        value: n.outputVariables[s]
      });
      Array.prototype.push.apply(e.model.outputVariableValues, a), e.outputVariableGridApi.core.notifyDataChange(i.dataChange.ALL), o.inputExpressions.forEach(function(t) {
        t.id += "", e.model.columnVariableIdMap[t.id] = t.variableId, e.model.columnVariableTypeVariableIdMap[t.variableId] = t.type
      }), o.outputExpressions.forEach(function(t) {
        t.id += "", e.model.columnVariableIdMap[t.id] = t.variableId, e.model.columnVariableTypeVariableIdMap[t.variableId] = t.type
      }), o.rules && o.rules.length > 0 && Array.prototype.push.apply(e.model.decisionTableRules, o.rules), e.getColumnDefinitions(o)
    }).error(function() {
      var e = o.instant("PROCESS.DECISION.TABLE.LOAD-ERROR", {
        executionId: a,
        activityId: s
      });
      t.addAlert(e, "error")
    })
  }, e.backToProcessInstance = function() {
    e.$parent.model.decisionTableAudit = {}
  }, e.getVariableNameColumnId = function(t) {
    var o = t.name;
    return o ? e.model.columnVariableIdMap[o] ? e.model.columnVariableIdMap[o] : "" : ""
  }, e.getVariableValueColumnId = function(t) {
    var o = t.name;
    if (!o) return "";
    if (e.model.columnVariableIdMap[o]) {
      var n = e.model.columnVariableIdMap[o];
      if (e.auditTrail && e.auditTrail.inputVariables && e.auditTrail.inputVariables.hasOwnProperty(n)) {
        var i = e.auditTrail.inputVariables[n],
          r = e.model.columnVariableTypeVariableIdMap[n];
        return i && "date" == r && (i = new moment(i).format("LL")), i
      }
    }
    return ""
  }, e.formatVariableValue = function(t, o) {
    var n = o.entity.name,
      i = e.model.columnVariableTypeVariableIdMap[n];
    return i || (i = e.auditTrail.inputVariableTypes[n]), e.formatValue(t, i)
  }, e.formatValue = function(e, t) {
    return e && "date" == t && (e = new moment(e).format("LL")), e
  };
  var s = function() {
      return '<div role="columnheader" ui-grid-one-bind-aria-labelledby-grid="col.uid + \'-header-text \' + col.uid + \'-sortdir-text\'">   <div class="ui-grid-cell-contents ui-grid-header-cell-primary-focus" col-index="renderIndex" title="TOOLTIP">       <div class="text-center text-label" title="{{ col.displayName CUSTOM_FILTERS }}"><span>{{ col.displayName CUSTOM_FILTERS }}</span></div>       <div class="text-center text-value" title="{{ grid.appScope.getVariableNameColumnId(col) }}"><span ui-grid-one-bind-id-grid="col.uid + \'-header-text\'">{{ grid.appScope.getVariableNameColumnId(col) }}</span></div>       <div class="text-center text-value" title="{{ grid.appScope.getVariableValueColumnId(col) }}"><span ui-grid-one-bind-id-grid="col.uid + \'-header-text\'">{{ grid.appScope.getVariableValueColumnId(col) }}</span></div>       <div class="text-center subtle"><span>{{ \'PROCESS.DECISION.TABLE.INPUT-VARIABLE\' | translate }}</span></div>   </div></div>'
    },
    a = function() {
      return '<div role="columnheader" ui-grid-one-bind-aria-labelledby-grid="col.uid + \'-header-text \' + col.uid + \'-sortdir-text\'">   <div class="ui-grid-cell-contents ui-grid-header-cell-primary-focus" col-index="renderIndex" title="TOOLTIP">       <div class="text-center text-label" title="{{ col.displayName CUSTOM_FILTERS }}"><span>{{ col.displayName CUSTOM_FILTERS }}</span></div>       <div class="text-center text-value" title="{{ grid.appScope.getVariableNameColumnId(col) }}"><span ui-grid-one-bind-id-grid="col.uid + \'-header-text\'">{{ grid.appScope.getVariableNameColumnId(col) }}</span></div>       <div class="text-center text-value"><span></span></div>       <div class="text-center subtle"><span>{{ \'PROCESS.DECISION.TABLE.OUTPUT-VARIABLE\' | translate }}</span></div>   </div></div>'
    },
    l = function() {
      return '<div class="ui-grid-disable-selection"><div class="ui-grid-cell-contents text-center customRowHeader">{{rowRenderIndex + 1}}</div></div>'
    },
    c = function() {
      var e = '<div class="ui-grid-cell-contents" ng-class="grid.appScope.getInputClass(rowRenderIndex, colRenderIndex)" title="{{grid.appScope.getInputTooltip(rowRenderIndex, colRenderIndex, COL_FIELD)}}">   <span class="contents-value">{{COL_FIELD}}</span></div>';
      return e
    },
    d = function() {
      var e = '<div class="ui-grid-cell-contents" ng-class="grid.appScope.getOutputClass(rowRenderIndex, colRenderIndex)" title="{{grid.appScope.getOutputTooltip(rowRenderIndex, colRenderIndex, COL_FIELD)}}">   <span class="contents-value">{{grid.appScope.getResult(rowRenderIndex, colRenderIndex, row)}}</span></div>';
      return e
    },
    u = "decision-table-display";
  e.getInputClass = function(t, o) {
    var n = o,
      i = e.auditTrail.ruleExecutions;
    if (i && i[t] && i[t].conditionResults && i[t].conditionResults.length > n) {
      var r = i[t].conditionResults[n];
      return r.exception ? u + "-cell-exception" : u + (r.result ? "-cell-match" : "-cell-nomatch")
    }
    return u + "-cell-notexecuted"
  }, e.getInputTooltip = function(t, n, i) {
    var r = n,
      s = e.auditTrail.ruleExecutions;
    if (s && s[t] && s[t].conditionResults && s[t].conditionResults.length > r) {
      var a = s[t].conditionResults[r];
      return a.exception ? o.instant("PROCESS.DECISION.TABLE.TOOLTIP.INPUT-EXCEPTION", {
        error: a.exception
      }) : a.result ? i && i.trim().length > 0 ? o.instant("PROCESS.DECISION.TABLE.TOOLTIP.INPUT-MATCH") : o.instant("PROCESS.DECISION.TABLE.TOOLTIP.INPUT-EMPTYEXPRESSION", {
        expression: i
      }) : o.instant("PROCESS.DECISION.TABLE.TOOLTIP.INPUT-NOMATCH")
    }
    return o.instant("PROCESS.DECISION.TABLE.TOOLTIP.INPUT-NOTEXECUTED")
  }, e.getOutputClass = function(t, o) {
    var n = o - e.model.decisionTableDefinition.inputExpressions.length,
      i = e.auditTrail.ruleExecutions;
    if (i && i[t] && i[t].conclusionResults && i[t].conclusionResults.length > n) {
      var r = i[t].conclusionResults[n];
      return r.exception ? u + "-cell-exception" : u + (r.hasOwnProperty("result") ? "-cell-match" : "-cell-nomatch")
    }
    return u + "-cell-notexecuted"
  }, e.getOutputTooltip = function(t, n, i) {
    var r = n - e.model.decisionTableDefinition.inputExpressions.length,
      s = e.auditTrail.ruleExecutions;
    if (s && s[t] && s[t].conclusionResults && s[t].conclusionResults.length > r) {
      var a = s[t].conclusionResults[r];
      return a.exception ? o.instant("PROCESS.DECISION.TABLE.TOOLTIP.OUTPUT-EXCEPTION", {
        expression: i,
        error: a.exception
      }) : o.instant("PROCESS.DECISION.TABLE.TOOLTIP.OUTPUT-RESULT", {
        expression: i
      })
    }
    return o.instant("PROCESS.DECISION.TABLE.TOOLTIP.OUTPUT-NOTEXECUTED", {
      expression: i
    })
  }, e.getResult = function(t, o) {
    var n = o - e.model.decisionTableDefinition.inputExpressions.length,
      i = e.auditTrail.ruleExecutions;
    if (i && i[t] && i[t].conclusionResults && i[t].conclusionResults.length > n) {
      var r = i[t].conclusionResults[n];
      if (!r.exception && r.hasOwnProperty("result")) {
        var s = e.model.columnVariableIdMap[o],
          a = e.model.columnVariableTypeVariableIdMap[s],
          l = e.formatValue(r.result, a);
        return l
      }
    }
    return ""
  }, e.getColumnDefinitions = function(t) {
    if (t) {
      var o = [];
      t.inputExpressions && t.inputExpressions.length > 0 && t.inputExpressions.forEach(function(e, n) {
        o.push({
          name: e.id,
          displayName: e.label ? e.label : "",
          field: e.id,
          type: "string",
          headerCellClass: "header-expression header-input-expression" + (n == t.inputExpressions.length - 1 ? " header-input-expression-last" : ""),
          headerCellTemplate: s(),
          cellClass: "cell-expression cell-input-expression" + (0 == n ? " cell-input-expression-first" : ""),
          cellTemplate: c(),
          enableHiding: !1,
          enableCellEditOnFocus: !1
        })
      }), t.outputExpressions && t.outputExpressions.length > 0 && t.outputExpressions.forEach(function(e, t) {
        o.push({
          name: e.id,
          displayName: e.label ? e.label : "",
          field: e.id,
          type: "string",
          headerCellTemplate: a(),
          headerCellClass: "header-expression header-output-expression" + (0 == t ? " header-output-expression-first" : ""),
          cellClass: "cell-expression cell-output-expression" + (0 == t ? " cell-output-expression-first" : ""),
          cellTemplate: d(),
          enableHiding: !1,
          enableCellEditOnFocus: !1
        })
      }), e.model.columnDefs ? e.model.columnDefs.length = 0 : e.model.columnDefs = [], Array.prototype.push.apply(e.model.columnDefs, o), e.gridApi.core.notifyDataChange(i.dataChange.ALL)
    }
  }, e.$watch("id", function() {
    e.getDecisionTableInfo(e.id, e.activityId, e.executionId, e.decisionKey)
  })
}]), angular.module("activitiApp").directive("documentPreview", ["$parse", "appResourceRoot", function(e, t) {
  return {
    restrict: "E",
    templateUrl: t + "views/templates/document-preview.html",
    scope: {
      content: "=",
      task: "=",
      deleted: "&onDelete",
      editable: "=",
      readOnly: "="
    },
    controller: "DocumentPreviewController"
  }
}]), angular.module("activitiApp").directive("activitiForm", ["$rootScope", "appResourceRoot", function(e, t) {
  return {
    restrict: "E",
    templateUrl: t + "views/templates/form-template.html",
    scope: {
      taskId: "=taskId",
      formDefinition: "=formDefinition",
      shareModel: "=shareModel",
      processName: "=processName",
      processInstanceId: "=processInstanceId",
      processDefinitionId: "=processDefinitionId",
      outcomesOnly: "=outcomesOnly",
      disableForm: "=disableForm",
      disableFormText: "=disableFormText",
      hideButtons: "=hideButtons"
    },
    link: function() {
      e.window.forceRefresh = !0
    }
  }
}]), angular.module("activitiApp").directive("activitiFormOutcomes", ["$rootScope", "appResourceRoot", function(e, t) {
  return {
    restrict: "E",
    templateUrl: t + "views/templates/form-outcomes-template.html",
    scope: {
      formData: "=formData",
      model: "=model",
      saveForm: "=saveForm",
      completeForm: "=completeForm",
      disableForm: "=disableForm",
      hideButtons: "=hideButtons",
      unClaim: "=unClaim",
      unClaimButtonDisabled: "=unClaimButtonDisabled",
      onUnclaim: "=onUnclaim"
    },
    link: function() {}
  }
}]), angular.module("activitiApp").directive("optimalGrid", ["$compile", "$http", function() {
  var e = {};
  return e.restrict = "A", e.replace = !0, e.scope = {
    toWatch: "=optimalGrid"
  }, e.controller = ["$scope", "$element", "$timeout", function(e, t) {
    e.$watch("toWatch", function() {
      var e, o = 0;
      t.children().each(function() {
        var t = angular.element(this);
        t.hasClass("col-xs-6") ? t.hasClass("ng-hide") || o++ : t.hasClass("col-xs-12") && (t.hasClass("seperator") ? 2 == o ? (o = 0, t.removeClass("hidden")) : t.addClass("hidden") : (e && o > 0 && e.removeClass("hidden"), o = 0)), e = t
      }), o > 0 && e && e.removeClass("hidden")
    }, !0)
  }], e
}]), angular.module("activitiApp").directive("jumpers", ["$compile", "$http", function() {
  var e = {};
  return e.restrict = "A", e.replace = !0, e.transclude = !0, e.template = '<div><ul class="jumpers"><li ng-repeat="jumper in jumpers" ng-show="jumper.show || !jumper.static" ng-click="jumperClicked(jumper)" ng-class="{\'pending\': !jumper.show}">{{jumper.title | translate}} <span ng-show="jumper.badge != undefined">{{jumper.badge}}</span></li></ul></div>', e.scope = {
    jumpers: "=jumpers",
    activeJumperReference: "=activeJumper"
  }, e.controller = ["$scope", "$element", "$timeout", function(e, t, o) {
    e.state = {}, e.$watch("activeJumperReference", function(t) {
      if (!e.activeJumper || e.activeJumper.id != t) {
        var o = e.findJumper(t);
        o && e.jumperClicked(o)
      }
    }), e.findJumper = function(t) {
      if (e.jumpers)
        for (var o = 0; e.jumpers.length > o; o++)
          if (e.jumpers[o].id == t) return e.jumpers[o];
      return void 0
    }, e.jumperClicked = function(t) {
      t.show || (t.show = !0), t ? (e.activeJumperReference = t.id, e.activeJumper = t, t.anchor && o(function() {
        var e = angular.element("#" + t.anchor);
        if (e.length) {
          var o = e.parent(),
            n = e.position().top - o.position().top + o.scrollTop(),
            i = n + e.outerHeight(),
            r = o.scrollTop() + o.innerHeight(),
            s = r - o.innerHeight();
          s >= n ? o.scrollTop(n) : i > r && o.scrollTop(n)
        }
      }, 100)) : (e.activeJumperReference = void 0, e.activeJumper = void 0)
    }
  }], e
}]), angular.module("activitiApp").directive("input", ["$compile", "$http", function() {
  return {
    restrict: "E",
    require: "?ngModel",
    link: function(e, t, o, n) {
      function i(e) {
        return e.format(s.format)
      }

      function r(e) {
        return [i(e.startDate), i(e.endDate)].join(s.separator)
      }
      if ("daterange" === o.type && null !== n) {
        var s = {};
        s.format = o.format || "YYYY-MM-DD", s.separator = o.separator || " - ", s.minDate = o.minDate && moment(o.minDate), s.maxDate = o.maxDate && moment(o.maxDate), s.dateLimit = o.limit && moment.duration.apply(this, o.limit.split(" ").map(function(e, t) {
          return 0 === t && parseInt(e, 10) || e
        })), s.ranges = o.ranges && $parse(o.ranges)(e), s.locale = o.locale && $parse(o.locale)(e), s.opens = o.opens && $parse(o.opens)(e), n.$formatters.unshift(function(e) {
          return e ? e : ""
        }), n.$parsers.unshift(function(e) {
          return e
        }), n.$render = function() {
          n.$viewValue && n.$viewValue.startDate && t.val(r(n.$viewValue))
        }, e.$watch(o.ngModel, function(e) {
          return e && e.startDate ? (t.data("daterangepicker").startDate = e.startDate, t.data("daterangepicker").endDate = e.endDate, t.data("daterangepicker").updateView(), t.data("daterangepicker").updateCalendars(), t.data("daterangepicker").updateInputText(), void 0) : (n.$setViewValue({
            startDate: moment().startOf("day"),
            endDate: moment().startOf("day")
          }), void 0)
        }), t.daterangepicker(s, function(t, o, i) {
          e.$apply(function() {
            n.$setViewValue({
              startDate: t,
              endDate: o,
              rangeName: i
            }), n.$render()
          })
        })
      }
    }
  }
}]), angular.module("activitiApp").directive("userPicture", ["$compile", "$http", function() {
  var e = {};
  return e.restrict = "A", e.replace = !0, e.transclude = !1, e.template = '<div class="{{userPic.class}}" ng-style="{\'background-image\': userPic.style}" title="{{userPic.userName}}"><span>{{userPic.text}}</span></div>', e.scope = {
    user: "=userPicture"
  }, e.controller = ["$scope", "$element", "$timeout", function(e, t) {
    e.$watch("user", function(t) {
      e.refreshUser(t)
    }), t.bind("error", function() {
      console.log("No picture")
    }), e.refreshUser = function(t) {
      if (t) {
        var o = {
          text: ""
        };
        t.pictureId ? (o.class = "user-picture", o.style = 'url("' + ACTIVITI.CONFIG.contextRoot + "/app/rest/users/" + t.id + '/picture")') : o.class = "user-picture no-picture", t.firstName && t.lastName ? (o.text = t.firstName.substring(0, 1).toUpperCase() + t.lastName.substring(0, 1).toUpperCase(), o.userName = t.firstName + " " + t.lastName) : void 0 != t.lastName && null != t.lastName ? (t.lastName.length > 1 ? o.text = t.lastName.substring(0, 2).toUpperCase() : 1 == t.lastName.length && (o.text = t.lastName.substring(0, 1).toUpperCase()), o.userName = t.lastName) : void 0 != t.firstName && null != t.firstName ? (t.firstName.length > 1 ? o.text = t.firstName.substring(0, 2).toUpperCase() : 1 == t.firstName.length && (o.text = t.firstName.substring(0, 1).toUpperCase()), o.userName = t.firstName) : (o.text = "??", o.userName = "")
      }
      e.userPic = o
    }, e.refreshUser(e.user)
  }], e
}]), angular.module("activitiApp").directive("formElement", ["$rootScope", "$timeout", "$modal", "$http", "$templateCache", "$translate", "$compile", "$interpolate", "appResourceRoot", "RecursionHelper", function(e, t, o, n, i, r, s, a, l, c) {
  return {
    restrict: "E",
    templateUrl: l + "views/templates/form-element-template.html",
    transclude: !1,
    scope: {
      field: "=",
      customFieldTemplates: "=",
      taskId: "=",
      taskForm: "=",
      controlCallbacks: "=",
      model: "=",
      restData: "="
    },
    compile: function(e) {
      return c.compile(e, this.link)
    },
    link: function(t) {
      t.appResourceRoot = l, t.activitiFieldIdPrefix = e.activitiFieldIdPrefix, t.getHtmlTemplate = function(e) {
        return t.customFieldTemplates[e.type]
      }, t.toFormFieldColumnArray = function(e) {
        var t = [],
          o = [];
        for (columnKey in e) e[columnKey] && o.push(parseInt(columnKey));
        o.sort(function(e, t) {
          return e - t
        });
        for (var n = 0; o.length > n; n++) t.push(e["" + o[n]]);
        return t
      }, t.determineColumnClass = function(e, t) {
        var o = 2;
        e.numberOfColumns && (o = e.numberOfColumns);
        var n = 1;
        return t && t.length > 0 && t[0].colspan && (n = t[0].colspan), 1 == o ? "col-sm-12" : 2 == o ? n >= 2 ? "col-sm-12" : "col-sm-6" : 3 == o ? n >= 3 ? "col-sm-12" : n >= 2 ? "col-sm-8" : "col-sm-4" : 4 == o ? n >= 4 ? "col-sm-12" : n >= 3 ? "col-sm-9" : n >= 2 ? "col-sm-6" : "col-sm-3" : 6 == o ? n >= 6 ? "col-sm-12" : n >= 5 ? "col-sm-10" : n >= 4 ? "col-sm-8" : n >= 3 ? "col-sm-6" : n >= 2 ? "col-sm-4" : "col-sm-2" : 12 == o ? n >= 12 ? "col-sm-12" : n >= 11 ? "col-sm-11" : n >= 10 ? "col-sm-10" : n >= 9 ? "col-sm-9" : n >= 8 ? "col-sm-8" : n >= 7 ? "col-sm-7" : n >= 6 ? "col-sm-6" : n >= 5 ? "col-sm-5" : n >= 4 ? "col-sm-4" : n >= 3 ? "col-sm-3" : n >= 2 ? "col-sm-2" : "col-sm-1" : "col-sm-6"
      }, t.onFieldValueChange = function(e) {
        return t.controlCallbacks.onFieldValueChange(e)
      }, t.onFieldBlur = function(e) {
        return t.controlCallbacks.onFieldBlur(e)
      }, t.onFieldFocus = function(e) {
        return t.controlCallbacks.onFieldFocus(e)
      }, t.isEmpty = function(e) {
        return t.controlCallbacks.isEmpty(e)
      }, t.isEmptyDropdown = function(e) {
        return t.controlCallbacks.isEmptyDropdown(e)
      }, t.fieldPersonSelected = function(e, o) {
        return t.controlCallbacks.fieldPersonSelected(e, o)
      }, t.fieldPersonEmailSelected = function(e, o) {
        return t.controlCallbacks.fieldPersonEmailSelected(e, o)
      }, t.fieldPersonRemoved = function(e, o) {
        return t.controlCallbacks.fieldPersonRemoved(e, o)
      }, t.fieldGroupSelected = function(e, o) {
        return t.controlCallbacks.fieldGroupSelected(e, o)
      }, t.fieldGroupRemoved = function(e, o) {
        return t.controlCallbacks.fieldGroupRemoved(e, o)
      }, t.getGridOptions = function(e) {
        return t.controlCallbacks.getGridOptions(e)
      }, t.noRowSelected = function(e) {
        return t.controlCallbacks.noRowSelected(e)
      }, t.moveDynamicTableRowUp = function(e) {
        return t.controlCallbacks.moveDynamicTableRowUp(e)
      }, t.moveDynamicTableRowDown = function(e) {
        return t.controlCallbacks.moveDynamicTableRowDown(e)
      }, t.addDynamicTableRow = function(e) {
        return t.controlCallbacks.addDynamicTableRow(e)
      }, t.removeDynamicTableRow = function(e) {
        return t.controlCallbacks.removeDynamicTableRow(e)
      }, t.openRowEditor = function(e, o, n) {
        return t.controlCallbacks.openRowEditor(e, o, n)
      }, t.removeContent = function(e, o) {
        return t.controlCallbacks.removeContent(e, o)
      }, t.contentUploaded = function(e, o) {
        return t.controlCallbacks.contentUploaded(e, o)
      }, t.uploadInProgress = function(e) {
        return t.controlCallbacks.uploadInProgress(e)
      }, t.handleReadonlyClick = function(e, o) {
        return t.controlCallbacks.handleReadonlyClick(e, o)
      }, t.clearDate = function(e, o) {
        return t.controlCallbacks.clearDate(e, o)
      }, t.selectToday = function(e, o) {
        return t.controlCallbacks.selectToday(e, o)
      }, t.closeDatePopup = function(e) {
        return t.controlCallbacks.closeDatePopup(e)
      }, t.registerCustomFieldListener = function(e) {
        return t.controlCallbacks.registerCustomFieldListener(e)
      }, t.removeCustomFieldListener = function(e) {
        return t.controlCallbacks.removeCustomFieldListener(e)
      }, t.getFieldLabelDisplayValue = function(e) {
        return t.controlCallbacks.getFieldLabelDisplayValue(e)
      }
    }
  }
}]), angular.module("activitiApp").directive("fieldPreview", ["appResourceRoot", "RecursionHelper", function(e, t) {
  return {
    restrict: "E",
    templateUrl: e + "views/templates/field-preview-template.html",
    transclude: !1,
    scope: {
      field: "=",
      customFieldTemplates: "="
    },
    compile: function(e) {
      return t.compile(e, this.link)
    },
    link: function(e) {
      function t(t) {
        for (var o = [], n = 0; t.length > n; n++) t[n].visible && o.push({
          field: t[n].name,
          displayName: t[n].name,
          enableColumnMenu: !1
        });
        e.gridOptions = {
          columnDefs: o,
          enableRowSelection: !1,
          enableSorting: !1,
          enableRowHeaderSelection: !1,
          multiSelect: !1,
          enableHorizontalScrollbar: 0,
          modifierKeysToMultiSelect: !1
        }
      }
      e.getHtmlTemplate = function(t) {
        return e.customFieldTemplates[t.type]
      }, "dynamic-table" === e.field.type ? e.field.columnDefinitions && e.field.columnDefinitions.length > 0 && t(e.field.columnDefinitions) : "readonly" === e.field.type && e.field.params && e.field.params.field.columnDefinitions && e.field.params.field.columnDefinitions.length > 0 && t(e.field.params.field.columnDefinitions)
    }
  }
}]), angular.module("activitiApp").directive("startForm", ["appResourceRoot", function(e) {
  return {
    restrict: "E",
    templateUrl: e + "views/start-form.html",
    link: function(e, t, o) {
      e.processInstanceId = o.processInstanceId
    },
    controller: "StartFormController"
  }
}]), angular.module("activitiApp").directive("compileHtml", ["$compile", function(e) {
  return {
    restrict: "A",
    replace: !0,
    link: function(t, o, n) {
      t.$watch(n.compileHtml, function(n) {
        o.html(n), e(o.contents())(t)
      })
    }
  }
}]), angular.module("activitiApp").directive("decisionTableDisplay", ["appResourceRoot", function(e) {
  return {
    restrict: "E",
    templateUrl: e + "views/templates/decision-table-display.html",
    scope: {
      id: "=",
      activityId: "=",
      executionId: "=",
      decisionKey: "="
    },
    controller: "DecisionTableDisplayController"
  }
}]),
  function() {
    angular.module("http-auth-interceptor", ["http-auth-interceptor-buffer"]).factory("authService", ["$rootScope", "httpBuffer", function(e, t) {
        return {
          loginConfirmed: function(o, n) {
            var i = n || function(e) {
              return e
            };
            e.$broadcast("event:auth-loginConfirmed", o), t.retryAll(i)
          },
          loginCancelled: function(o, n) {
            t.rejectAll(n), e.$broadcast("event:auth-loginCancelled", o)
          }
        }
      }]).config(["$httpProvider", function(e) {
        var t = ["$rootScope", "$q", "httpBuffer", "$translate", function(e, t, o, n) {
          return {
            responseError: function(i) {
              if (401 === i.status && !i.config.ignoreAuthModule) {
                var r = t.defer();
                return o.append(i.config, r), e.$broadcast("event:auth-loginRequired", i), r.promise
              }
              return 401 === i.status && (e.invalidCredentials = !0), i.status >= 500 && 599 >= i.status && i.config && !i.config.ignoreErrors && (i.data && i.data.messageKey ? e.addAlertPromise(n(i.data.messageKey), "error") : i.data && i.data.message ? e.addAlert(i.data.message, "error") : e.addAlertPromise(n("GENERAL.ERROR.GENERIC"), "error")), t.reject(i)
            }
          }
        }];
        e.interceptors.push(t)
      }]), angular.module("http-auth-interceptor-buffer", []).factory("httpBuffer", ["$injector", function(e) {
      function t(t, n) {
        function i(e) {
          n.resolve(e)
        }

        function r(e) {
          n.reject(e)
        }
        o = o || e.get("$http"), o(t).then(i, r)
      }
      var o, n = [];
      return {
        append: function(e, t) {
          n.push({
            config: e,
            deferred: t
          })
        },
        rejectAll: function(e) {
          if (e)
            for (var t = 0; n.length > t; ++t) n[t].deferred.reject(e);
          n = []
        },
        retryAll: function(e) {
          for (var o = 0; n.length > o; ++o) t(e(n[o].config), n[o].deferred);
          n = []
        }
      }
    }])
  }(), activitiApp.factory("AuthenticationSharedService", ["$rootScope", "$http", "authService", "$q", "$location", "$window", function(e, t, o, n) {
  return {
    authenticate: function() {
      var o = n.defer();
      return t.get(ACTIVITI.CONFIG.contextRoot + "/app/rest/authenticate", {
        ignoreErrors: !0,
        ignoreAuthModule: "ignoreAuthModule"
      }).success(function() {
        var n = ACTIVITI.CONFIG.contextRoot + "/app/rest/account";
        ACTIVITI.CONFIG.integrationProfile && (n += "?includeApps=true"), t.get(n).success(function(t) {
          e.account = t, e.invalidCredentials = !1, e.$broadcast("event:auth-authConfirmed"), o.resolve()
        }).error(function(t) {
          o.reject(t), e.$broadcast("event:auth-loginRequired")
        })
      }).error(function(t) {
        o.reject(t), e.$broadcast("event:auth-loginRequired")
      }), o.promise
    },
    login: function(n) {
      var i = "j_username=" + encodeURIComponent(n.username) + "&j_password=" + encodeURIComponent(n.password) + "&_spring_security_remember_me=true&submit=Login";
      t.post(ACTIVITI.CONFIG.contextRoot + "/app/authentication", i, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        ignoreAuthModule: "ignoreAuthModule"
      }).success(function(t, i, r, s) {
        e.authenticationError = !1, n.success && n.success(t, i, r, s), o.loginConfirmed()
      }).error(function(t, o, i, r) {
        e.$broadcast("event:auth-loginFailed"), n.error && n.error(t, o, i, r)
      })
    },
    logout: function() {
      e.authenticated = !1, e.authenticationError = !1, t.get(ACTIVITI.CONFIG.contextRoot + "/app/logout").success(function() {
        e.login = null, e.authenticated = !1, o.loginCancelled({
          isFromLogout: !0
        })
      })
    },
    hasCapability: function(t) {
      return e.account && e.account.capabilities ? e.account.capabilities.indexOf(t) > -1 : !1
    },
    hasTenantManagementCapability: function() {
      return this.hasCapability("tenant-mgmt")
    },
    hasTenantAdminCapability: function() {
      return this.hasCapability("tenant-admin")
    },
    hasAccessReportsCapability: function() {
      return this.hasCapability("access-reports")
    }
  }
}]), activitiModule.service("UserService", ["$http", "$q", function(e, t) {
  var o = function(o) {
    var n = t.defer();
    return e(o).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  };
  this.getFilteredUsers = function(e, t, n, i, r) {
    var s = {};
    return "string" == typeof e ? s.filter = e : s = e, t && (s.excludeTaskId = t), n && (s.excludeProcessId = n), i && i > 0 && (s.tenantId = i), r && r.id && (s.groupId = r.id), o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/workflow-users",
      params: s
    })
  }, this.getFilteredUsersStrict = function(e, t, n) {
    var i = {};
    return i.status = "active", null !== e && void 0 !== e && (i.filter = e), null !== t && void 0 !== t && t > -1 && (i.tenantId = t), n && n.id && (i.groupId = n.id), o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/users",
      params: i
    })
  }, this.getRecentUsers = function(e, t) {
    var n = {};
    return t && (n.excludeTaskId = t), o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/workflow-users/" + e + "/recent-users",
      params: n
    })
  }
}]), activitiModule.service("FunctionalGroupService", ["$http", "$q", function(e, t) {
  var o = function(o) {
    var n = t.defer();
    return e(o).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  };
  this.getFilteredGroups = function(e, t, n) {
    var i = {};
    return null !== e && void 0 !== e && (i.filter = e), t && t.id && (i.groupId = t.id), null !== n && void 0 !== n && (i.tenantId = n), o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/workflow-groups",
      params: i
    })
  }
}]), activitiModule.service("RelatedContentService", ["$http", "$q", "$rootScope", "$translate", "$location", "Upload", "EventTrackingService", "$timeout", function(e, t, o, n, i, r, s, a) {
  var l = function(o) {
    var n = t.defer();
    return e(o).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  };
  this.deleteContent = function(e, t) {
    var o = l({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/content/" + e
    });
    return o.then(function() {
      t ? s.trackEvent("workflow", "task-remove-related-content") : s.trackEvent("workflow", "remove-related-content")
    }), o
  }, this.addRelatedContent = function(e, o, n, i, a) {
    var l, c, d = t.defer();
    if (e) {
      var u = "";
      a && (u += "?isRelatedContent=true"), c = i ? ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e + "/raw-content/text" + u : ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e + "/raw-content" + u, l = r.upload({
        url: c,
        method: "POST",
        file: n
      })
    } else o ? (c = i ? ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + o + "/raw-content/text" : ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + o + "/raw-content", l = r.upload({
      url: c,
      method: "POST",
      file: n
    })) : (c = i ? ACTIVITI.CONFIG.contextRoot + "/app/rest/content/raw/text" : ACTIVITI.CONFIG.contextRoot + "/app/rest/content/raw", l = r.upload({
      url: c,
      method: "POST",
      file: n
    }));
    var p = this;
    l.success(function(e) {
      e && e.id && p.addUrlToContent(e), d.resolve(e)
    }).error(function(e) {
      d.reject(e)
    });
    var m = d.promise;
    return m.progress = function(e) {
      return l.progress(e), m
    }, m.then(function() {
      e ? s.trackEvent("workflow", "task-add-related-content") : o ? s.trackEvent("workflow", "processinstance-add-related-content") : s.trackEvent("workflow", "add-related-content")
    }), m
  }, this.addRelatedContentFromSource = function(o, n, i, r, a, l, c, d, u) {
    var p, m = "";
    u && (m += "?isRelatedContent=true"), p = o ? ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + o + "/content" + m : n ? ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + n + "/content" : ACTIVITI.CONFIG.contextRoot + "/app/rest/content", d = 1 == d;
    var f = {
        source: i,
        sourceId: r,
        name: a,
        link: d,
        mimeType: l,
        simpleType: c
      },
      v = this,
      h = t.defer();
    e({
      method: "POST",
      url: p,
      data: f
    }).success(function(e) {
      e && e.id && v.addUrlToContent(e), h.resolve(e)
    }).error(function(e) {
      h.reject(e)
    });
    var g = h.promise;
    return g.then(function() {
      o ? s.trackEvent("workflow", "task-add-related-content") : n ? s.trackEvent("workflow", "processinstance-add-related-content") : s.trackEvent("workflow", "add-related-content")
    }), g
  }, this.getRelatedContent = function(o) {
    var n = ACTIVITI.CONFIG.contextRoot + "/app/rest/content/" + o,
      i = t.defer();
    e({
      method: "GET",
      url: n
    }).success(function(e) {
      i.resolve(e)
    }).error(function(e) {
      i.reject(e)
    });
    var r = i.promise;
    return r
  }, this.checkRenditions = function(e, t) {
    void 0 == t ? t = 10 : 0 == t && (e.previewStatus = "unsupported", e.thumbnailStatus = "unsupported"), "processing" == e.previewStatus || "queued" == e.previewStatus || "processing" == e.thumbnailStatus || "queued" == e.thumbnailStatus ? this.scheduleRefresh(e, t) : this.addUrlToContent(e)
  }, this.scheduleRefresh = function(e, t) {
    var o = this;
    e && t > 0 && a(function() {
      o.getRelatedContent(e.id).then(function(n) {
        angular.extend(e, n), o.checkRenditions(e, t - 1)
      })
    }, 2e3)
  }, this.getProcessContent = function(o) {
    var n = this,
      i = t.defer();
    return e({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + o + "/field-content"
    }).success(function(e) {
      if (e.data && e.data.length > 0)
        for (var t = 0; e.data.length > t; t++) {
          var o = e.data[t];
          if (o.content && o.content.length > 0)
            for (var r = 0; o.content.length > r; r++) n.addUrlToContent(o.content[r])
        }
      i.resolve(e)
    }).error(function(e) {
      i.reject(e)
    }), i.promise
  }, this.addUrlToContent = function(e) {
    if (e && e.id) {
      e.rawUrl = ACTIVITI.CONFIG.contextRoot + "/app/rest/content/" + e.id + "/raw";
      var t = e.name.split(".").pop();
      e.link || "word" != e.simpleType && "excel" != e.simpleType && "powerpoint" != e.simpleType || (e.officeUrl = ACTIVITI.CONFIG.contextRoot + "/aos/" + e.id + "/" + e.name), "created" == e.thumbnailStatus && (e.thumbnailUrl || (e.thumbnailUrl = ACTIVITI.CONFIG.contextRoot + "/app/rest/content/" + e.id + "/rendition/thumbnail?noCache=" + (new Date).getTime())), "created" == e.previewStatus ? e.pdfUrl = ACTIVITI.CONFIG.contextRoot + "/app/rest/content/" + e.id + "/rendition/preview?noCache=" + (new Date).getTime() : "image" === e.simpleType || "jpg" === t || "jpeg" === t || "png" === t ? (e.imageUrl = e.rawUrl, !e.thumbnailUrl && e.contentAvailable && (e.thumbnailUrl = e.rawUrl)) : "pdf" == e.simpleType && (e.pdfUrl = e.rawUrl)
    }
  }
}]), activitiModule.service("ContentAccountService", ["$http", "$q", "$rootScope", "$translate", "$location", function(e, t, o, n) {
  var i = function(n, i) {
    var r = t.defer();
    return e(n).success(function(e) {
      r.resolve(e)
    }).error(function(e, t) {
      409 == t ? o.$broadcast("integration.account.autherror", i) : o.$broadcast("integration.account.error", i), r.reject(e)
    }), r.promise
  };
  this.getAccounts = function() {
    return i({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration",
      transformResponse: function(e) {
        return angular.isString(e) && (e = JSON.parse(e)), angular.isArray(e.data) && e.data.forEach(function(e) {
          var t = "COMMON.ACCOUNTS." + e.serviceId;
          e.serviceName = n.instant(t, e), e.serviceName == t && (e.serviceName = n.instant(t.replace(/[0-9]+/g, "*"), e))
        }), e
      }
    })
  }, this.getNetworks = function() {
    return i({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco-cloud/networks"
    }, "alfresco-cloud")
  }, this.getCloudSites = function(e) {
    return i({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco-cloud/networks/" + e + "/sites"
    }, "alfresco-cloud")
  }, this.getSites = function(e) {
    var t = e.replace("alfresco-", "");
    return i({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco/" + t + "/sites"
    }, e)
  }, this.getCloudContentInSite = function(e, t) {
    return i({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco-cloud/networks/" + e + "/sites/" + t + "/content"
    }, "alfresco-cloud")
  }, this.getContentInSite = function(e, t) {
    var o = e.replace("alfresco-", "");
    return i({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco/" + o + "/sites/" + t + "/content"
    }, e)
  }, this.getCloudContentInFolder = function(e, t) {
    return i({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco-cloud/networks/" + e + "/folders/" + t + "/content"
    }, "alfresco-cloud")
  }, this.getContentInFolder = function(e, t) {
    var o = e.replace("alfresco-", "");
    return i({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco/" + o + "/folders/" + t + "/content"
    }, e)
  }, this.getGoogleDriveFiles = function(e, t, o) {
    var n = {
      filter: e,
      parent: t,
      currentFolderOnly: o
    };
    return i({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/google-drive/files",
      params: n
    }, "google-drive")
  }, this.getBoxFiles = function(e, t) {
    var o = {
      filter: e,
      parent: t
    };
    return i({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/box/files",
      params: o
    }, "box")
  }, this.isBoxMetaDataAllowed = function() {
    return i({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/box/metadata-status"
    })
  }
}]), activitiApp.service("RuntimeAppDefinitionService", ["$http", "$q", "$location", "EventTrackingService", "AuthenticationSharedService", "appName", function(e, t, o, n, i, r) {
  var s = function(o) {
    var n = t.defer();
    return e(o).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  };
  this.getApplications = function() {
    var e = i.hasTenantManagementCapability() || i.hasTenantAdminCapability(),
      t = [],
      n = o.absUrl(),
      a = n.indexOf("/#");
    a >= 0 && (n = n.substring(0, a)), a = n.indexOf("?"), a >= 0 && (n = n.substring(0, a)), "/" == n[n.length - 1] && (n = n.substring(0, n.length - 1)), r.length > 0 && n.substring(n.length - r.length) == r && (n = n.substring(0, n.length - r.length - 1));
    var l = {
        editor: n + "/editor/",
        identity: n + "/idm/",
        workflow: n + "/workflow/",
        admin: "http://localhost:8080/activiti-admin",
        analytics: n + "/analytics/"
      },
      c = function(o) {
        for (var i = JSON.parse(o), r = [], s = 0; i.data.length > s; s++) {
          var a = i.data[s];
          if (void 0 !== a.defaultAppId && null !== a.defaultAppId)
            if ("kickstart" === a.defaultAppId) t.push({
              id: "kickstart",
              titleKey: "APP.KICKSTART.TITLE",
              descriptionKey: "APP.KICKSTART.DESCRIPTION",
              defaultAppId: a.defaultAppId,
              theme: "theme-1",
              icon: "icon icon-choice",
              fixedBaseUrl: l.editor + "/#/",
              fixedUrl: l.editor,
              pages: ["processes", "forms", "apps", "stencils", "decision-tables"]
            });
            else if ("tasks" === a.defaultAppId) t.push({
              id: "tasks",
              titleKey: "APP.TASKS.TITLE",
              descriptionKey: "APP.TASKS.DESCRIPTION",
              defaultAppId: a.defaultAppId,
              theme: "theme-2",
              icon: "icon icon-clock",
              fixedBaseUrl: l.workflow + "/#/",
              fixedUrl: l.workflow,
              pages: ["tasks", "processes", "processes?mode=start"]
            });
            else if ("identity" === a.defaultAppId) {
              var c = {
                id: "identity",
                titleKey: e ? "APP.IDENTITY-MANAGEMENT.TITLE-TENANT-ADMIN" : "APP.IDENTITY-MANAGEMENT.TITLE",
                descriptionKey: e ? "APP.IDENTITY-MANAGEMENT.DESCRIPTION-TENANT-ADMIN" : "APP.IDENTITY-MANAGEMENT.DESCRIPTION",
                defaultAppId: a.defaultAppId,
                theme: "theme-3",
                icon: "icon icon-user",
                fixedBaseUrl: l.identity + "/#/",
                fixedUrl: l.identity
              };
              e && (c.pages = ["tenant-mgmt", "user-mgmt", "system-group-mgmt", "functional-group-mgmt", "profile"]), t.push(c)
            } else "analytics" === a.defaultAppId && t.push({
              id: "analytics",
              titleKey: "APP.ANALYTICS.TITLE",
              descriptionKey: "APP.ANALYTICS.DESCRIPTION",
              defaultAppId: a.defaultAppId,
              theme: "theme-6",
              icon: "glyphicon glyphicon-stats",
              fixedBaseUrl: l.analytics + "/#/",
              fixedUrl: l.analytics
            });
          else a.icon = "glyphicon " + a.icon, a.fixedBaseUrl = n + "/workflow/#/apps/" + a.id + "/", a.fixedUrl = a.fixedBaseUrl + "tasks", a.pages = ["tasks", "processes", "processes?mode=start"], a.deletable = !0, r.push(a)
        }
        return {
          defaultApps: t,
          customApps: r
        }
      };
    return s({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/runtime/app-definitions",
      transformResponse: c
    })
  }, this.deleteAppDefinition = function(e) {
    var t = s({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/runtime/app-definitions/" + e
    });
    return t.then(function() {
      n.trackEvent("landing", "runtime-app-delete")
    }), t
  }
}]), activitiModule.directive("appLinks", ["$popover", "$timeout", "appResourceRoot", function(e) {
  return {
    restrict: "E",
    templateUrl: ACTIVITI.CONFIG.webContextRoot + "/views/common/popover/app-links-button.html",
    replace: !0,
    link: function() {},
    scope: {},
    controller: ["$scope", "$element", "RuntimeAppDefinitionService", "$translate", function(t, o, n, i) {
      var r;
      t.goToLink = function(e) {
        t.onDestroyPopover(), window.location.href = e
      }, t.onDestroyPopover = function() {
        r && (r.$scope.$destroy(), r.destroy(), r = void 0)
      }, t.showAppLinks = function() {
        t.apps = [], n.getApplications().then(function(e) {
          for (var o = e.defaultApps.concat(e.customApps), n = 0; o.length > n; n++) {
            var r = o[n];
            if (null !== r.pages && void 0 !== r.pages && r.pages.length > 0) {
              for (var s = 0, a = 0; r.pages.length > a; a++) {
                var l = {};
                l.name = r.pages[a], l.theme = r.theme, l.icon = r.icon, null !== r.defaultAppId && void 0 !== r.defaultAppId ? (l.titleKey = r.titleKey + "-" + l.name.toUpperCase(), l.fixedUrl = r.fixedUrl + "#/" + r.pages[a]) : (l.titleKey = i.instant("APP.CUSTOM-APP.TITLE-" + l.name.toUpperCase(), r), l.fixedUrl = r.fixedBaseUrl + r.pages[a]), o.splice(n + a + 1, 0, l), s++
              }
              o.splice(n, 1), n = n + s - 1
            }
          }
          t.apps = o
        }), r = e(o, {
          template: ACTIVITI.CONFIG.webContextRoot + "/views/common/popover/app-links-popover.html",
          placement: "bottom-right",
          show: !0,
          scope: t,
          autoClose: !0
        }), r.$scope.$on("tooltip.hide", function() {
          t.onDestroyPopover()
        })
      }
    }]
  }
}]), activitiModule.directive("variableIdentifier", ["$rootScope", "$timeout", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(e, t, o, n) {
      function i(e, t) {
        var o = "",
          n = 0;
        for (n = 0; e.length > n; n++) t.test(o + e[n]) && (o += e[n]);
        return o
      }
      e.identifierRegExp = /^[a-zA-Z][_a-zA-Z0-9]*$/, e.forbidenNames = ["abstract", "continue", "for", "new", "switch", "assert", "default", "if", "package", "synchronized", "boolean", "do", "goto", "private", "this", "break", "double", "implements", "protected", "throw", "byte", "else", "import", "public", "throws", "case", "enum", "instanceof", "return", "transient", "catch", "extends", "int", "short", "try", "char", "final", "interface", "static", "void", "class", "finally", "long", "strictfp", "volatile", "const", "float", "native", "super", "while", "null"], e.$watch(o.ngModel, function(t) {
        var r = !0;
        if (t && t.length > 0) {
          var s = i(t, e.identifierRegExp);
          s != t ? (n.$setViewValue(s), n.$render()) : r = e.identifierRegExp.test(s) ? -1 == e.forbidenNames.indexOf(s) : !1
        }
        n.$setValidity(o.ngModel, r)
      })
    }
  }
}]), activitiModule.directive("ngTrim", function() {
  return {
    require: "ngModel",
    priority: 300,
    link: function(e, t, o, n) {
      "false" === o.ngTrim && n.$parsers.unshift(function() {
        return t.val()
      })
    }
  }
}), activitiModule.directive("spacelessValue", ["$rootScope", "$timeout", function() {
  return {
    restrict: "A",
    require: "ngModel",
    link: function(e, t, o, n) {
      function i(e, t) {
        var o = "",
          n = 0;
        for (n = 0; e.length > n; n++) t.test(o + e[n]) && (o += e[n]);
        return o
      }
      e.identifierRegExp = /^\S*$/, e.$watch(o.ngModel, function(t) {
        var r = !0;
        if (t && t.length > 0) {
          var s = i(t, e.identifierRegExp);
          s != t ? (n.$setViewValue(s), n.$render()) : e.identifierRegExp.test(s) || (r = !1)
        }
        n.$setValidity(o.ngModel, r)
      })
    }
  }
}]), activitiModule.directive("restrictInput", ["$parse", function() {
  return {
    restrict: "A",
    require: "ngModel",
    priority: 1002,
    link: function(e, t, o, n) {
      function i(e) {
        var t = e.toUpperCase(),
          o = t.replace(/-D-/, "-DD-").replace(/^D-/, "DD-").replace(/-D$/, "-DD"),
          n = t.replace(/-M-/, "-MM-").replace(/^M-/, "MM-").replace(/-M$/, "-MM"),
          i = o.replace(/-M-/, "-MM-").replace(/^M-/, "MM-").replace(/-M$/, "-MM");
        return [t, o, n, i]
      }

      function r(e, t) {
        if (void 0 === e || null == e || "" === e) return !0;
        if (e.length > t.length) return !1;
        for (var o = 0; Math.min(t.length, e.length) > o; o++) {
          var n = t[o];
          if (n.toUpperCase().match(/D|M|Y/)) {
            if (null == e[o].match(/\d/)) return !1
          } else if (e[o] != n) return !1
        }
        return !0
      }
      var s = o.restrictInput;
      (void 0 == s || null == s || "" == s) && (s = o.dateFormat), e.field.acceptedFormat = s;
      var a = i(s),
        l = !1;
      (void 0 == s || null == s || "" == s) && (l = !0);
      var c = n.$render;
      n.$render = function() {
        t.val(n.$viewValue), n.$dateValue && !isNaN(n.$dateValue.getTime()) && c && c()
      }, n.$parsers.unshift(function(e) {
        if (l) return e;
        for (var t = !1, o = 0; a.length > o && !t; o++) t |= r(e, a[o]);
        return t ? (n.$lastValidText = e, (void 0 === e || null == e || "" === e) && (n.$dateValue = null), e) : (n.$dateValue = null, n.$setViewValue(n.$lastValidText), n.$render(), n.$lastValidText)
      })
    }
  }
}]), activitiModule.directive("autoHeight", ["$rootScope", "$timeout", function(e, t) {
  return {
    restrict: "AC",
    scope: {
      toWatch: "=autoHeight"
    },
    compile: function() {
      return function(o, n, i) {
        var r = 0;
        i.offset && (r = parseInt(i.offset), (0 / 0 == r || void 0 == r) && (r = 0));
        var s = function(e) {
          t(function() {
            var t = e.parent().outerHeight() - r,
              o = !1;
            e.parent().children().filter(":visible").each(function() {
              o || (e[0] == this ? o = !0 : t -= angular.element(this).outerHeight())
            }), o && e.height(t)
          }, 0)
        };
        o.$watch("toWatch", function() {
          s(n)
        }), o.unregisterWatcher && o.unregisterWatcher(), o.unregisterWatcher = e.$watch("window.height", function() {
          s(n)
        }), o.unregisterForceWatcher && o.unregisterForceWatcher(), o.unregisterForceWatcher = e.$watch("window.forceRefresh", function() {
          s(n)
        }), o.$on("$destroy", function() {
          o.unregisterWatcher && o.unregisterWatcher(), o.unregisterForceWatcher && o.unregisterForceWatcher()
        })
      }
    }
  }
}]), activitiModule.directive("scrollToActive", ["$timeout", function(e) {
  return {
    restrict: "AC",
    scope: {
      toWatch: "=scrollToActiveModel"
    },
    compile: function() {
      return function(t, o, n) {
        t.$watch("toWatch", function() {
          e(function() {
            var e = n.useParent,
              t = n.offsetTop;
            t && (t = parseInt(t), 0 / 0 == t && (t = 0)), t || (t = 0);
            var i = o.children(".active");
            if (i && i.length > 0) {
              var r = angular.element(i[0]);
              e && (o = angular.element(o.parent()));
              var s = r.position().top - o.position().top + o.scrollTop(),
                a = s + r.outerHeight(),
                l = o.scrollTop() + o.innerHeight(),
                c = l - o.innerHeight();
              c >= s ? o.scrollTop(s - r.outerHeight() - t) : a > l && o.scrollTop(c + r.outerHeight() - t)
            }
          }, 0)
        })
      }
    }
  }
}]), activitiModule.directive("autoScroll", ["$timeout", function(e) {
  return {
    restrict: "AC",
    compile: function() {
      return function(t, o) {
        t.$on("tooltip.show", function() {
          e(function() {
            for (var e = o[0]; e && !(e.className && e.className.indexOf("scroll-container") >= 0);) e = e.parentNode;
            if (e) {
              e = angular.element(e);
              var t = o.offset().top - e.offset().top + o.scrollTop(),
                n = t + o.outerHeight();
              n + 30 >= e.outerHeight() && e.scrollTop(t)
            }
          }, 50)
        })
      }
    }
  }
}]), activitiModule.directive("userName", function() {
  var e = {};
  return e.template = '{{user.firstName && user.firstName || ""}} {{user.lastName && user.lastName || ""}} {{ (user.email && !user.firstName && !user.lastName) && user.email || ""}}', e.scope = {
    user: "=userName"
  }, e
}), activitiModule.directive("clickAnywhere", ["$document", "$parse", function(e, t) {
  var o = function(o, n, i) {
    var r = i.clickAnywhere,
      s = t(r),
      a = i.ignore,
      l = i.ignoreClass,
      c = "true" == i.ignorePopupEvents,
      d = function(e) {
        for (var t = e.target; t;) {
          if (t == n[0] || a && t.id == a || l && t.className && t.className.indexOf(l) >= 0) return e.stopPropagation(), e.preventDefault(), void 0;
          t = t.parentNode
        }
        o.$apply(function() {
          s(o, {
            $event: e
          })
        })
      };
    e.on("click", d), o.$on("$destroy", function() {
      e.off("click", d)
    });
    var u = o.$on("tooltip.hide", function() {
      c || (e.off("click", d), u())
    })
  };
  return o
}]), activitiModule.directive("autoFocus", ["$timeout", "$parse", function(e, t) {
  return {
    restrict: "AC",
    compile: function(o, n) {
      var i;
      return n.selectText && (i = t(n.selectText)),
        function(t, o, n) {
          var r = void 0 !== n.focusFirstChild;
          e(function() {
            if (r) {
              var e = o.find("input");
              e && e.length > 0 && (e[0].focus(), i && i(t.$parent) && input[0].setSelectionRange(0, input[0].value.length))
            } else o[0].focus(), i && i(t.$parent) && o[0].setSelectionRange(0, o[0].value.length)
          }, 100)
        }
    }
  }
}]), activitiModule.directive("focusWhen", ["$timeout", function(e) {
  return {
    link: function(t, o, n) {
      t.$watch(n.ngFocus, function(t) {
        angular.isDefined(t) && t && e(function() {
          o[0].focus()
        })
      }, !0), o.bind("blur", function() {
        angular.isDefined(n.ngFocusLost) && t.safeApply(n.ngFocusLost)
      })
    }
  }
}]), activitiModule.directive("loading", [function() {
  var e = {};
  return e.restrict = "A", e.template = '<div class="loading" ng-show="loading"><div class="l1"></div><div class="l2"></div><div class="l3"></div></div>', e.scope = {
    loading: "=loading",
    loadingText: "=loadingText"
  }, e
}]), activitiModule.directive("activitiFixDropdownBug", function() {
  return {
    restrict: "AEC",
    link: function(e, t) {
      t.on("hidden.bs.dropdown	", function() {
        t.show()
      })
    }
  }
}), activitiModule.directive("userLink", function() {
  var e = {};
  return e.template = '{{user.firstName && user.firstName || ""}} {{user.lastName && user.lastName || ""}} {{ (user.email && !user.firstName && !user.lastName) && user.email || ""}}', e.scope = {
    user: "=userLink"
  }, e.compile = function(e) {
    e.addClass("people-link")
  }, e
}), activitiModule.directive("formField", function() {
  var e = {};
  return e.template = ' {{field.name || ""}} - {{field.id}}', e.scope = {
    field: "=formField"
  }, e.compile = function(e) {
    e.addClass("form-field")
  }, e
}), activitiModule.directive("customKeys", ["$parse", function(e) {
  var t = {};
  return t.compile = function(t, o) {
    var n, i, r, s;
    return o.upPressed && (n = e(o.upPressed)), o.downPressed && (i = e(o.downPressed)), o.enterPressed && (r = e(o.enterPressed)), o.escapePressed && (s = e(o.escapePressed)),
      function(e, t) {
        t.on("keyup", function(t) {
          38 === t.keyCode ? e.$apply(function() {
            n && n(e, {
              $event: t
            })
          }) : 40 === t.keyCode ? e.$apply(function() {
            i && i(e, {
              $event: t
            })
          }) : 13 === t.keyCode ? e.$apply(function() {
            r && r(e, {
              $event: t
            })
          }) : 27 === t.keyCode && e.$apply(function() {
            s && s(e, {
              $event: t
            })
          })
        }), t.on("keydown", t, function(e) {
          (38 === e.keyCode || 40 === e.keyCode || 13 === e.keyCode || 27 === e.keyCode) && e.preventDefault()
        })
      }
  }, t
}]), activitiModule.directive("delayedModel", ["$timeout", function(e) {
  return {
    scope: {
      targetModel: "=delayedModel"
    },
    link: function(t, o, n) {
      o.val(t.targetModel), t.$watch("targetModel", function(n, r) {
        i && e.cancel(i), n !== r && o.val(t.targetModel)
      });
      var i;
      o.on("keyup paste search", function() {
        o.val() !== t.targetModel && (i && e.cancel(i), i = e(function() {
          t.targetModel = o[0].value, o.val(t.targetModel), t.$apply()
        }, n.delay || 200))
      })
    }
  }
}]), activitiModule.directive("ngDebounce", ["$timeout", function(e) {
  return {
    restrict: "A",
    require: "ngModel",
    priority: 99,
    link: function(t, o, n, i) {
      if ("radio" !== n.type && "checkbox" !== n.type) {
        o.unbind("input");
        var r;
        o.bind("input", function() {
          e.cancel(r), r = e(function() {
            t.$apply(function() {
              i.$setViewValue(o.val())
            })
          }, n.ngDebounce || 1e3)
        }), o.bind("blur", function() {
          t.$apply(function() {
            i.$setViewValue(o.val())
          })
        })
      }
    }
  }
}]), activitiModule.directive("externalContentAuthenticator", ["$parse", "$timeout", function() {
  var e = {};
  return e.restrict = "A", e.templateUrl = ACTIVITI.CONFIG.webContextRoot + "/views/common/templates/external-content-authenticator-template.html", e.scope = {
    taskId: "=taskId",
    accountType: "@accountType"
  }, e.controller = ["$scope", "$element", "ContentAccountService", "$modal", "$window", "$translate", "$rootScope", function(e, t, o, n, i, r, s) {
    e.$on("integration.account.error", function(t, o) {
      e.currentAccount && o == e.currentAccount.serviceId && e.contentBrowseModal && ("alfresco-cloud" === o ? r("INTEGRATION.ALERT.ALFRESCO-ERROR").then(function(t) {
        e.contentBrowseModal.$scope.errorMessage = t, e.currentAccount.loading = !1
      }) : "google-drive" === o ? r("INTEGRATION.ALERT.GOOGLE-DRIVE-ERROR").then(function(t) {
        e.contentBrowseModal.$scope.errorMessage = t, e.currentAccount.loading = !1
      }) : "box" === o && r("INTEGRATION.ALERT.BOX-ERROR").then(function(t) {
        e.contentBrowseModal.$scope.errorMessage = t, e.currentAccount.loading = !1
      }))
    }), e.openAuthenticationPopup = function(t, o) {
      e.openContentAccountAuth(t, o)
    }, e.clearPopupError = function() {
      e.contentBrowseModal && (e.contentBrowseModal.$scope.errorMessage = void 0)
    }, e.$on("integration.account.autherror", function(t, o) {
      o && (e.contentAccounts[o].authorized = !1, "alfresco-cloud" === o ? r("INTEGRATION.ALERT.ALFRESCO-CLOUD-NOT-AUTHORIZED").then(function(t) {
        s.addAlert(t, "error"), e.errorMessage = t
      }) : "google-drive" === o ? r("INTEGRATION.ALERT.GOOGLE-DRIVE-NOT-AUTHORIZED").then(function(t) {
        s.addAlert(t, "error"), e.errorMessage = t
      }) : "box" === o && r("INTEGRATION.ALERT.BOX-NOT-AUTHORIZED").then(function(t) {
        s.addAlert(t, "error"), e.errorMessage = t
      }), e.contentBrowseModal && e.contentBrowseModal.$scope.$hide())
    }), e.openContentAccountAuth = function(t, o) {
      var n = angular.element(i),
        r = (n.width() - 500) / 2,
        s = (n.height() - 400) / 2,
        a = i.open(e.contentAccounts[o].authorizationUrl, o, "width= 500, height=400, toolbar=no, status=no, titlebar=no, location=no, menubar=no, top=" + s + ", left=" + r);
      i.contentAccountAuthConfirmed = function() {
        e.$apply(function() {
          e.contentAccounts[o].authorizationUrl = void 0, e.contentAccounts[o].authorized = !0, e.currentAccount = e.contentAccounts[o], a.close(), e.$emit("task-completed", {
            taskId: e.taskId
          })
        })
      }
    }, e.loadAccounts = function() {
      e.contentAccounts = {
        loading: !0
      }, o.getAccounts().then(function(t) {
        if (t && t.data)
          for (var o = 0; t.data.length > o; o++) {
            var n = t.data[o];
            e.contentAccounts[n.serviceId] = n
          }
        e.contentAccounts.rawList = t.data, e.contentAccounts.loading = !1
      })
    }, e.loadAccounts()
  }], e
}]), activitiModule.directive("externalContent", ["$parse", "$timeout", function(e, t) {
  var o = {};
  return o.restrict = "A", o.templateUrl = ACTIVITI.CONFIG.webContextRoot + "/views/common/templates/external-content-template.html", o.scope = {
    taskId: "=taskId",
    processInstanceId: "=formDefinition",
    folderSelect: "=folderSelect",
    linkOnly: "=linkOnly",
    preSelectedAccount: "=account",
    uploadInProgress: "=uploadInProgress",
    isRelatedContent: "=isRelatedContent",
    contentSource: "=?contentSource"
  }, o.link = function(o, n, i) {
    i.onContentUpload && (o.uploadedCallback = e(i.onContentUpload)), i.onFolderSelect && (o.folderSelectCallback = e(i.onFolderSelect)), i.onUploadInProgress && (o.uploadInProgressCallback = e(i.onUploadInProgress)), t(function() {
      n.find("div.select-file").click(function() {
        n.find('input[type="file"]').click()
      })
    }, 200)
  }, o.controller = ["$scope", "$element", "RelatedContentService", "ContentAccountService", "$modal", "$window", "$translate", "$rootScope", function(e, t, o, n, i, r, s, a) {
    e.uploadModel = {
      uploading: !1
    }, e.BOX_DRIVE_ACCOUNT_ID = "box", e.GOOGLE_DRIVE_ACCOUNT_ID = "google-drive", e.ALFRESCO_ACCOUNT_ID_PREFIX = "alfresco-", e.ALFRESCO_CLOUD_ACCOUNT_ID = "alfresco-cloud", e.ALL_SOURCES_ACCOUNT_ID = "all-file-sources", e.LOCAL_FILE_ACCOUNT_ID = "local-file", e.filterNavigableContent = function(t) {
      return !t.folder || (!e.contentSource || e.contentSource && !e.contentSource.notAllowNavigateFolders) && t.folder
    }, e.browseButtonIsVisible = function() {
      return !e.linkOnly && (e.contentSource && (e.contentSource.serviceId === e.ALL_SOURCES_ACCOUNT_ID || e.contentSource.serviceId === e.LOCAL_FILE_ACCOUNT_ID) || !e.contentSource)
    }, e.contentAccountsByServiceId = function(t) {
      return !e.contentSource || e.contentSource.serviceId === e.ALL_SOURCES_ACCOUNT_ID || e.contentSource.serviceId === t.serviceId
    }, e.selectFolder = function(t) {
      if (e.preSelectedAccount || e.folderSelect) {
        var o = e.folderSelect;
        o.substring(0, 9) === e.ALFRESCO_ACCOUNT_ID_PREFIX && (o = e.ALFRESCO_CLOUD_ACCOUNT_ID), (o === e.ALFRESCO_CLOUD_ACCOUNT_ID || o === e.GOOGLE_DRIVE_ACCOUNT_ID || o === e.BOX_DRIVE_ACCOUNT_ID) && e.browseRepositoryContent(t, o, e.preSelectedAccount)
      }
    }, e.$on("integration.account.error", function(t, o) {
      e.currentAccount && o == e.currentAccount.serviceId && (e.contentBrowseModal && s("INTEGRATION.ALERT.ALFRESCO-ERROR").then(function(t) {
        e.contentBrowseModal.$scope.errorMessage = t, e.currentAccount.loading = !1
      }), e.contentBrowseModal && s("INTEGRATION.ALERT.BOX-ERROR").then(function(t) {
        e.contentBrowseModal.$scope.errorMessage = t, e.currentAccount.loading = !1
      }))
    }), e.clearPopupError = function() {
      e.contentBrowseModal && (e.contentBrowseModal.$scope.errorMessage = void 0)
    }, e.$on("integration.account.autherror", function(t, o) {
      o && (e.contentAccounts[o].authorized = !1, o === e.ALFRESCO_CLOUD_ACCOUNT_ID ? (s("INTEGRATION.ALERT.ALFRESCO-CLOUD-NOT-AUTHORIZED").then(function(t) {
        a.addAlert(t, "error"), e.errorMessage = t
      }), e.contentBrowseModal && e.contentBrowseModal.$scope.$hide()) : o == e.GOOGLE_DRIVE_ACCOUNT_ID ? (s("INTEGRATION.ALERT.GOOGLE-DRIVE-NOT-AUTHORIZED").then(function(t) {
        a.addAlert(t, "error"), e.errorMessage = t
      }), e.contentBrowseModal && e.contentBrowseModal.$scope.$hide()) : "box" == o && (s("INTEGRATION.ALERT.BOX-NOT-AUTHORIZED").then(function(t) {
        a.addAlert(t, "error"), e.errorMessage = t
      }), e.contentBrowseModal && e.contentBrowseModal.$scope.$hide()))
    }), e.openFileSelect = function(t) {
      e.errorMessage = void 0;
      var o = angular.element(t).parent();
      o.children("input").click()
    }, e.confirmFolderSelection = function() {
      if (e.currentFolderTree && e.folderSelectCallback) {
        var t = e.createContentBrowserPayload(e.currentAccount);
        e.folderSelectCallback(e.$parent, {
          folder: t
        }), e.contentBrowseModal.$scope.$hide()
      }
    }, e.confirmBoxFolderSelection = function() {
      var t = 0;
      if (e.folderSelectCallback) {
        var o = "";
        if (e.currentFolderTree && e.currentFolderTree.length > 0) {
          for (var n = 0; e.currentFolderTree.length > n; n++) n > 0 && (o += " > "), o += e.currentFolderTree[n].title;
          t = e.currentFolderTree[e.currentFolderTree.length - 1].id
        } else o += "/", t = 0;
        var i = {
          account: {
            id: e.currentAccount.serviceId,
            name: e.currentAccount.name
          },
          path: {
            id: t,
            title: o
          }
        };
        e.folderSelectCallback(e.$parent, {
          folder: i
        }), e.contentBrowseModal.$scope.$hide()
      }
    }, e.onFileSelect = function(t, n) {
      if (e.errorMessage = void 0, !e.linkOnly && (e.errorMessage = void 0, !e.folderSelect && !e.uploadModel.uploading && t.length > 0)) {
        e.uploadInProgressCallback && e.uploadInProgressCallback(e.$parent, {
          status: !0
        }), e.uploadModel.uploading = !0;
        var i = t[0];
        e.clearPopupError(), o.addRelatedContent(e.taskId, e.processInstanceId, i, n, e.isRelatedContent).progress(function(t) {
          e.uploadModel.uploadProgress = parseInt(100 * t.loaded / t.total)
        }).then(function(t) {
          e.uploadInProgressCallback && e.uploadInProgressCallback(e.$parent, {
            status: !1
          }), e.uploadModel.uploading = !1, e.uploadedCallback && e.uploadedCallback(e.$parent, {
            content: t
          })
        }, function(t) {
          if (e.uploadInProgressCallback && e.uploadInProgressCallback(e.$parent, {
            status: !1
          }), t && t.messageKey) {
            var o = {};
            t.customData && (o.quota = e.formatFileSize(t.customData.quota)), s(t.messageKey, o).then(function(t) {
              e.errorMessage = t
            })
          }
          e.uploadModel.uploading = !1
        })
      }
    }, e.selectAccountContent = function(t, o) {
      e.currentAccount = o, o.serviceId === e.GOOGLE_DRIVE_ACCOUNT_ID ? e.selectGoogleDriveContent(t) : o.serviceId == e.BOX_DRIVE_ACCOUNT_ID ? e.selectBoxContent(t) : e.browseRepositoryContent(t, e.ALFRESCO_CLOUD_ACCOUNT_ID, o)
    }, e.selectGoogleDriveContent = function(t) {
      e.errorMessage = void 0, e.contentAccounts[e.GOOGLE_DRIVE_ACCOUNT_ID] && (e.contentAccounts[e.GOOGLE_DRIVE_ACCOUNT_ID].authorized ? e.openGoogleDriveBrowser(t) : e.openContentAccountAuth(t, e.GOOGLE_DRIVE_ACCOUNT_ID))
    }, e.selectBoxContent = function(t) {
      e.errorMessage = void 0, e.contentAccounts[e.BOX_DRIVE_ACCOUNT_ID] && (e.contentAccounts[e.BOX_DRIVE_ACCOUNT_ID].authorized ? e.openBoxBrowser(t) : e.openContentAccountAuth(t, e.BOX_DRIVE_ACCOUNT_ID))
    }, e.browseRepositoryContent = function(t, o, n) {
      n && n.serviceId !== e.BOX_DRIVE_ACCOUNT_ID && n.serviceId !== e.ALFRESCO_CLOUD_ACCOUNT_ID && n.serviceId !== e.GOOGLE_DRIVE_ACCOUNT_ID ? (e.currentAccount = n, e.openContentAccountBrowser(t, o)) : (e.errorMessage = void 0, e.account && e.account.authorized ? (e.currentAccount = n, e.openContentAccountBrowser(t, o)) : e.contentAccounts[o] && e.contentAccounts[o].authorized ? (e.currentAccount = e.contentAccounts[o], e.openContentAccountBrowser(t, o)) : e.openContentAccountAuth(t, o))
    }, e.openContentAccountAuth = function(t, o) {
      var n = angular.element(r),
        i = (n.width() - 500) / 2,
        s = (n.height() - 400) / 2,
        a = r.open(e.contentAccounts[o].authorizationUrl, o, "width= 500, height=400, toolbar=no, status=no, titlebar=no, location=no, menubar=no, top=" + s + ", left=" + i);
      r.contentAccountAuthConfirmed = function() {
        e.$apply(function() {
          e.contentAccounts[o].authorizationUrl = void 0, e.contentAccounts[o].authorized = !0, e.currentAccount = e.contentAccounts[o], a.close(), e.openContentAccountBrowser(t, o)
        })
      }
    }, e.openContentAccountBrowser = function(t, o) {
      o === e.GOOGLE_DRIVE_ACCOUNT_ID ? e.openGoogleDriveBrowser(t) : o === e.ALFRESCO_CLOUD_ACCOUNT_ID ? e.openAlfrescoBrowser(t) : o === e.BOX_DRIVE_ACCOUNT_ID && e.openBoxBrowser(t)
    }, e.openAlfrescoBrowser = function() {
      if (e.currentFolderTree = [], e.selectedNetwork = void 0, e.selectedSite = void 0, e.alfrescoSites = void 0, e.contentSource && e.contentSource.serviceId.substring(0, 9) === e.ALFRESCO_ACCOUNT_ID_PREFIX) {
        var t = e.contentSource.selectedFolder;
        t && (e.selectedNetwork = {
          id: t.network
        }, e.selectedSite = {
          id: t.siteId,
          title: t.site
        }, e.selectedFolder = {
          id: t.pathId
        }, e.currentFolderTree = t.folderTree)
      }
      e.contentSource && e.contentSource.serviceId === e.ALFRESCO_CLOUD_ACCOUNT_ID ? e.loadAlfrescoNetworks(function() {
        e.loadAlfrescoSites(e.loadFolderContent)
      }) : e.currentAccount && e.currentAccount.serviceId === e.ALFRESCO_CLOUD_ACCOUNT_ID ? (e.uploadModel.noNetwork = !1, e.loadAlfrescoNetworks()) : (e.uploadModel.noNetwork = !0, e.loadAlfrescoSites(e.loadFolderContent)), e.createContentBrowserPayload = function(t) {
        for (var o = "", n = 0; e.currentFolderTree.length > n; n++) n > 0 && (o += " > "), o += e.currentFolderTree[n].title;
        var i = null;
        e.currentFolderTree.length > 0 && (i = e.currentFolderTree[e.currentFolderTree.length - 1].id);
        var r = {
          path: {
            id: i,
            title: o,
            folderTree: e.currentFolderTree
          }
        };
        return e.uploadModel.noNetwork ? r.account = {
          id: t.serviceId,
          name: t.name
        } : r.network = e.selectedNetwork.id, r.site = {
          id: e.selectedSite.id,
          title: e.selectedSite.title
        }, r
      }, e.contentBrowseModal = _internalCreateModal({
        template: ACTIVITI.CONFIG.webContextRoot + "/views/common/modal/browse-alfresco-cloud.html",
        show: !0,
        scope: e
      }, i, e)
    }, e.selectNetwork = function(t) {
      e.currentAccount.loading || e.currentAccount.serviceId === e.ALFRESCO_CLOUD_ACCOUNT_ID && (e.selectedNetwork = t, e.selectedSite = void 0, e.alfrescoSites = void 0, t && e.loadAlfrescoSites())
    }, e.selectSite = function(t) {
      e.currentAccount.loading || (e.selectedSite = t, e.alfrescoFolders = void 0, t && e.loadSiteContent())
    }, e.loadAlfrescoNetworks = function(t) {
      e.currentAccount.loading || (e.currentAccount.loading = !0, e.clearPopupError(), n.getNetworks().then(function(o) {
        e.alfrescoNetworks = o, e.currentAccount.loading = !1, t && t()
      }))
    }, e.loadAlfrescoSites = function(t) {
      e.currentAccount.loading || (e.currentAccount.loading = !0, e.clearPopupError(), e.currentAccount && e.currentAccount.serviceId !== e.ALFRESCO_CLOUD_ACCOUNT_ID ? n.getSites(e.currentAccount.serviceId).then(function(o) {
        e.alfrescoSites = o, e.currentAccount.loading = !1, t && t()
      }) : e.selectedNetwork ? n.getCloudSites(e.selectedNetwork.id).then(function(o) {
        e.alfrescoSites = o, e.currentAccount.loading = !1, t && t()
      }) : (e.currentAccount.loading = !1, t && t()))
    }, e.loadSiteContent = function() {
      e.currentAccount.loading || (e.currentAccount.loading = !0, e.currentFolderTree = [], e.currentContent = void 0, e.clearPopupError(), e.currentAccount.serviceId === e.ALFRESCO_CLOUD_ACCOUNT_ID ? n.getCloudContentInSite(e.selectedNetwork.id, e.selectedSite.id).then(function(t) {
        e.currentContent = t, e.currentAccount.loading = !1
      }) : n.getContentInSite(e.currentAccount.serviceId, e.selectedSite.id).then(function(t) {
        e.currentContent = t, e.currentAccount.loading = !1
      }))
    }, e.navigateToFolder = function(t) {
      var o = e.currentFolderTree[t];
      o && (e.currentFolderTree.splice(t + 1, e.currentFolderTree.length - t - 1), e.selectedFolder = o, e.loadFolderContent())
    }, e.loadFolderContent = function(t) {
      e.selectedFolder && (e.currentAccount.loading || (e.currentContent = void 0, e.currentAccount.loading = !0, e.clearPopupError(), e.currentAccount.serviceId === e.ALFRESCO_CLOUD_ACCOUNT_ID ? n.getCloudContentInFolder(e.selectedNetwork.id, e.selectedFolder.id).then(function(o) {
        e.currentContent = o, e.currentAccount.loading = !1, t && t()
      }) : n.getContentInFolder(e.currentAccount.serviceId, e.selectedFolder.id).then(function(o) {
        e.currentContent = o, e.currentAccount.loading = !1, t && t()
      })))
    }, e.openBoxBrowser = function() {
      if (e.currentFolderTree = [], e.contentSource && e.contentSource.serviceId === e.BOX_DRIVE_ACCOUNT_ID) {
        var t = e.contentSource.selectedFolder;
        t && (e.selectedFolder = {
          id: t.pathId
        }, e.currentFolderTree = t.folderTree)
      }
      e.createContentBrowserPayload = function(t) {
        for (var o = "/", n = 0; e.currentFolderTree.length > n; n++) n > 0 && (o += " > "), o += e.currentFolderTree[n].title;
        var i = null;
        return e.currentFolderTree.length > 0 && (i = e.currentFolderTree[e.currentFolderTree.length - 1].id), {
          path: {
            id: i,
            title: o,
            folderTree: e.currentFolderTree
          },
          account: {
            id: t.serviceId,
            name: t.name
          }
        }
      }, e.contentBrowseModal = _internalCreateModal({
        template: ACTIVITI.CONFIG.webContextRoot + "/views/common/modal/browse-box.html",
        show: !0,
        scope: e
      }, i, e), e.contentBrowseModal.$scope.$watch("filter", function(t) {
        e.loadBoxFiles(t)
      })
    }, e.navigateToBoxFolder = function(t) {
      var o = e.currentFolderTree[t];
      o && (e.currentFolderTree.splice(t + 1, e.currentFolderTree.length - t - 1), "" != e.contentBrowseModal.$scope.filter ? e.contentBrowseModal.$scope.filter = "" : e.loadBoxFiles(""))
    }, e.navigateToBoxRoot = function() {
      e.currentFolderTree = [], "" != e.contentBrowseModal.$scope.filter ? e.contentBrowseModal.$scope.filter = "" : e.loadBoxFiles("")
    }, e.loadBoxFiles = function(t) {
      e.contentAccounts[e.BOX_DRIVE_ACCOUNT_ID] && (e.contentAccounts[e.BOX_DRIVE_ACCOUNT_ID].loading = !0), t || (e.boxFiles = void 0);
      var o;
      e.currentFolderTree && e.currentFolderTree.length > 0 && (o = e.currentFolderTree[e.currentFolderTree.length - 1].id), n.getBoxFiles(t, o).then(function(t) {
        e.boxFiles = t, e.contentAccounts[e.BOX_DRIVE_ACCOUNT_ID].loading = !1
      })
    }, e.openGoogleDriveBrowser = function() {
      if (e.currentFolderTree = [], e.contentSource && e.contentSource.serviceId === e.GOOGLE_DRIVE_ACCOUNT_ID) {
        var t = e.contentSource.selectedFolder;
        t && (e.selectedFolder = {
          id: t.pathId
        }, e.currentFolderTree = t.folderTree)
      }
      e.createContentBrowserPayload = function(t) {
        for (var o = "", n = 0; e.currentFolderTree.length > n; n++) n > 0 && (o += " > "), o += e.currentFolderTree[n].title;
        var i = null;
        return e.currentFolderTree.length > 0 && (i = e.currentFolderTree[e.currentFolderTree.length - 1].id), {
          path: {
            id: i,
            title: o,
            folderTree: e.currentFolderTree
          },
          account: {
            id: t.serviceId,
            name: t.name
          }
        }
      }, e.contentBrowseModal = _internalCreateModal({
        template: ACTIVITI.CONFIG.webContextRoot + "/views/common/modal/browse-google-drive.html",
        show: !0,
        scope: e
      }, i, e), e.contentBrowseModal.$scope.$watch("filter", function(t) {
        e.loadGoogleDriveFiles(t)
      })
    }, e.navigateToGoogleDriveFolder = function(t) {
      var o = e.currentFolderTree[t];
      o && (e.currentFolderTree.splice(t + 1, e.currentFolderTree.length - t - 1), "" != e.contentBrowseModal.$scope.filter ? e.contentBrowseModal.$scope.filter = "" : e.loadGoogleDriveFiles(""))
    }, e.navigateToGoogleDriveRoot = function() {
      e.currentFolderTree = [], "" != e.contentBrowseModal.$scope.filter ? e.contentBrowseModal.$scope.filter = "" : e.loadGoogleDriveFiles("")
    }, e.loadGoogleDriveFiles = function(t) {
      e.contentAccounts[e.GOOGLE_DRIVE_ACCOUNT_ID] && (e.contentAccounts[e.GOOGLE_DRIVE_ACCOUNT_ID].loading = !0), t || (e.googleDriveFiles = void 0);
      var o;
      e.currentFolderTree && e.currentFolderTree.length > 0 && (o = e.currentFolderTree[e.currentFolderTree.length - 1].id);
      var i = !1;
      e.contentSource && e.contentSource.notAllowNavigateFolders && 1 == e.contentSource.notAllowNavigateFolders && (i = !0), n.getGoogleDriveFiles(t, o, i).then(function(t) {
        e.googleDriveFiles = t, e.contentAccounts[e.GOOGLE_DRIVE_ACCOUNT_ID].loading = !1
      })
    }, e.addContentFromSource = function(t, n, i, r, s, a, l) {
      o.addRelatedContentFromSource(e.taskId, e.processInstanceId, t, n, i, r, s, e.linkOnly, e.isRelatedContent).then(function(t) {
        e.uploadedCallback && e.uploadedCallback(e.$parent, {
          content: t
        }), a && a(t)
      }, function(e) {
        l && l(e)
      })
    }, e.boxContentSelected = function(t) {
      t.folder ? (e.currentFolderTree && 0 != e.currentFolderTree.length ? e.currentFolderTree.push(t) : e.currentFolderTree = [t], "" != e.contentBrowseModal.$scope.filter ? e.contentBrowseModal.$scope.filter = "" : e.loadBoxFiles("")) : (e.contentAccounts.box.loading = !0, e.addContentFromSource("box", t.id, t.title, t.mimeType, t.simpleType, function() {
        e.contentBrowseModal.$scope.$hide()
      }, function() {
        e.contentBrowseModal.$scope.$hide()
      }), t.title = "Uploading: " + t.title, e.boxFiles.data = [t])
    }, e.googleDriveContentSelected = function(t) {
      t.folder ? (e.currentFolderTree && 0 != e.currentFolderTree.length ? e.currentFolderTree.push(t) : e.currentFolderTree = [t], "" != e.contentBrowseModal.$scope.filter ? e.contentBrowseModal.$scope.filter = "" : e.loadGoogleDriveFiles("")) : (e.contentAccounts[e.GOOGLE_DRIVE_ACCOUNT_ID].loading = !0, e.addContentFromSource(e.GOOGLE_DRIVE_ACCOUNT_ID, t.id, t.title, t.mimeType, t.simpleType, function() {
        e.contentBrowseModal.$scope.$hide()
      }, function() {
        e.contentBrowseModal.$scope.$hide()
      }), t.title = "Uploading: " + t.title, e.googleDriveFiles.data = [t])
    }, e.selectAlfrescoContent = function(t) {
      if (!e.currentAccount.loading)
        if (e.clearPopupError(), t.folder) e.currentFolderTree.push(t), e.selectedFolder = t, e.loadFolderContent();
        else if (!e.folderSelect) {
          e.currentAccount.loading = !0;
          var o;
          o = e.currentAccount && e.currentAccount.serviceId === e.ALFRESCO_CLOUD_ACCOUNT_ID ? t.id + "@" + e.selectedSite.id + "@" + e.selectedNetwork.id : t.id + "@" + e.selectedSite.id, e.addContentFromSource(e.currentAccount.serviceId, o, t.title, t.mimeType, t.simpleType, function() {
            e.contentBrowseModal.$scope.$hide(), e.currentAccount.loading = !1
          }, function() {
            e.contentBrowseModal.$scope.$hide(), e.currentAccount.loading = !1
          }), t.title = "Uploading: " + t.title, e.currentContent.data = [t]
        }
    }, e.formatFileSize = function(e) {
      var t = Math.floor(Math.log(e) / Math.log(1024));
      return 1 * (e / Math.pow(1024, t)).toFixed(2) + " " + ["B", "kB", "MB", "GB", "TB"][t]
    }, e.loadAccounts = function() {
      e.contentAccounts = {
        loading: !0
      }, n.getAccounts().then(function(t) {
        if (t && t.data)
          for (var o = 0; t.data.length > o; o++) {
            var n = t.data[o];
            e.contentAccounts[n.serviceId] = n
          }
        e.contentAccounts.rawList = t.data, e.contentAccounts.loading = !1
      })
    }, e.loadAccounts()
  }], o
}]), activitiModule.directive("selectPeoplePopover", ["$rootScope", "$http", "$popover", "appResourceRoot", "UserService", "SystemPropertiesService", "$parse", function(e, t, o, n, i, r, s) {
  var a = {};
  return a.restrict = "A", a.scope = {
    excludeTaskId: "=excludeTaskId",
    excludeProcessId: "=excludeProcessId",
    excludeUserId: "=excludeUserId",
    excludeUserIds: "=excludeUserIds",
    tenantId: "=tenantId",
    type: "=type",
    restrictWithGroup: "=restrictWithGroup",
    selectPeopleFormFields: "=selectPeopleFormFields",
    ignoreContainer: "=ignoreContainer",
    emailModeDisabled: "=emailModeDisabled"
  }, a.link = function(t, n, a) {
    var l = "bottom";
    n.addClass("toggle-people-select"), a.placement && (l = a.placement);
    var c = a.selectYourselfMode,
      d = !0;
    void 0 !== a.closeOnSelect && (d = a.closeOnSelect), t.popover = o(n, {
      template: ACTIVITI.CONFIG.webContextRoot + "/views/common/popover/select-people-popover.html?" + Date.now(),
      placement: l
    });
    var u, p, m;
    a.onPeopleSelected && (u = s(a.onPeopleSelected)), a.onCancel && (p = s(a.onCancel)), a.onEmailSelected && (m = s(a.onEmailSelected));
    var f = "workflow";
    null !== t.type && void 0 !== t.type && (f = t.type);
    var v = t.popover.$scope;
    if (v.title = a.popoverTitle, v.popupModel = {
      emailMode: !1,
      showRecentResults: !1,
      userResults: [],
      userField: {},
      userFieldFilter: ["people"],
      loading: !1
    }, t.selectPeopleFormFields && (v.popupModel.formFields = t.selectPeopleFormFields), a.emailModeDisabled || t.emailModeDisabled) {
      var h = t.emailModeDisabled || a.emailModeDisabled;
      ("true" === h || h === !0) && (v.popupModel.emailDisabled = !0)
    }(void 0 == v.popupModel.emailDisabled || 0 == v.popupModel.emailDisabled) && r.getSystemProperties().then(function(e) {
      v.popupModel.emailDisabled = !e.allowInvolveByEmail
    });
    var g = function() {
      if (v.popupModel.emailMode = !1, e.account && e.account.capabilities) {
        var t = e.account.capabilities.indexOf("tenant-mgmt") > -1 || e.account.capabilities.indexOf("tenant-admin") > -1;
        t === !1 && (null === v.account.tenantId || void 0 === v.account.tenantId) && (v.popupModel.emailMode = !0)
      }
    };
    g(), v.setSearchType = function() {
      v.popupModel.userSourceType = "search"
    }, v.setFormFieldType = function() {
      v.popupModel.userSourceType = "field"
    }, v.$watch("popupModel.userField", function() {
      if (v.popupModel.userField && v.popupModel.userField.id) {
        if (u) {
          var e = {
            id: v.popupModel.userField.id,
            name: v.popupModel.userField.name,
            email: v.popupModel.userField.email,
            type: v.popupModel.userField.type
          };
          u(t.$parent, {
            userField: e
          }), v.popupModel.userField = {}
        }(d || "true" === d) && v.$hide()
      }
    }), v.$watch("popupModel.filter", function() {
      if (v.popupModel.filter && v.popupModel.filter.length > 0) {
        v.popupModel.loading = !0;
        var e;
        e = "idm" === f ? i.getFilteredUsersStrict(v.popupModel.filter, t.tenantId, t.restrictWithGroup) : i.getFilteredUsers(v.popupModel.filter, t.excludeTaskId, t.excludeProcessId, t.tenantId, t.restrictWithGroup), e.then(function(e) {
          v.popupModel.showRecentResults = !1, v.popupModel.loading = !1;
          var o = [],
            n = null !== t.excludeUserId && void 0 !== t.excludeUserId,
            i = null !== t.excludeUserIds && void 0 !== t.excludeUserIds;
          if (n === !0 || i === !0)
            for (var r = 0; e.data.length > r; r++) {
              var s = !1;
              n === !0 && e.data[r].id === t.excludeUserId && (s = !0), i === !0 && t.excludeUserIds.indexOf(e.data[r].id) >= 0 && (s = !0), s || o.push(e.data[r])
            } else o = e.data;
          v.popupModel.userResults = o, v.resetSelection()
        })
      } else v.resetSelection(), v.popupModel.userResults = []
    }), v.resetSelection = function() {
      v.popupModel.selectedUser = void 0, v.popupModel.selectedIndex = -1
    }, v.nextUser = function() {
      var e = v.popupModel.userResults;
      e && e.length > 0 && v.popupModel.selectedIndex < e.length - 1 && (v.popupModel.selectedIndex += 1, v.popupModel.selectedUser = e[v.popupModel.selectedIndex])
    }, v.previousUser = function() {
      var e = v.popupModel.userResults;
      e && e.length > 0 && v.popupModel.selectedIndex > 0 && (v.popupModel.selectedIndex -= 1, v.popupModel.selectedUser = e[v.popupModel.selectedIndex])
    }, v.confirmUser = function(e) {
      if (!e) {
        var o = v.popupModel.userResults;
        v.popupModel.selectedIndex >= 0 && v.popupModel.selectedIndex < o.length && (e = o[v.popupModel.selectedIndex])
      }
      if (e)
        if (u && u(t.$parent, {
          user: e
        }), "true" === d) v.$hide();
        else {
          var o = v.popupModel.userResults;
          o.splice(jQuery.inArray(e, o), 1), v.popupModel.selectedIndex = 0, v.popupModel.selectedUser = o[v.popupModel.selectedIndex]
        }
    }, v.selectPersonByEmail = function(e) {
      e && m && (m(t.$parent, {
        email: v.popupModel.email
      }), v.$hide())
    }, v.getSelectYourselfLabelKey = function() {
      return "INVOLVE-PEOPLE." + c.toUpperCase() + "-YOURSELF"
    }, v.isCurrentUserSelectable = function() {
      return c && !(t.excludeUserId && t.excludeUserId == e.account.id || t.excludeUserIds && -1 != t.excludeUserIds.indexOf(e.account.id))
    }, v.selectYourself = function() {
      u && (u(t.$parent, {
        user: e.account
      }), v.$hide())
    }, v.$on("tooltip.hide", function() {
      v.popupModel.showRecentResults && v.popupModel.added && (v.popupModel.recentUsers = []), v.popupModel.userResults = [], v.popupModel.filter = "", v.popupModel.emailMode = !1, g(), v.popupModel.added ? v.popupModel.added = !1 : p && p(t.$parent)
    })
  }, a
}]), activitiModule.directive("selectFunctionalGroupPopover", ["$rootScope", "$http", "$popover", "FunctionalGroupService", "$parse", function(e, t, o, n, i) {
  var r = {};
  return r.restrict = "A", r.scope = {
    type: "=type",
    restrictWithGroup: "=restrictWithGroup",
    excludeGroupIds: "=excludeGroupIds"
  }, r.link = function(t, r, s) {
    var a = "bottom";
    r.addClass("toggle-functional-group-select"), s.placement && (a = s.placement);
    var l = !0;
    void 0 !== s.closeOnSelect && (l = s.closeOnSelect), t.popover = o(r, {
      template: ACTIVITI.CONFIG.webContextRoot + "/views/common/popover/select-functional-group-popover.html?" + Date.now(),
      placement: a
    });
    var c, d;
    s.onGroupSelected && (c = i(s.onGroupSelected)), s.onCancel && (d = i(s.onCancel));
    var u = t.popover.$scope;
    u.title = s.popoverTitle, u.popupModel = {
      groupResults: []
    }, u.$watch("popupModel.filter", function() {
      if (u.popupModel.filter && u.popupModel.filter.length > 0) {
        var o;
        null !== e.common && void 0 !== e.common && null !== e.common.selectedTenantId && void 0 !== e.common.selectedTenantId && (o = e.common.selectedTenantId > 0 ? e.common.selectedTenantId : void 0), n.getFilteredGroups(u.popupModel.filter, t.restrictWithGroup, o).then(function(e) {
          var o = [];
          if (null != t.excludeGroupId && t.excludeGroupId)
            for (var n = 0; e.data.length > n; n++) e.data[n].id !== t.excludeGroupId && o.push(e.data[n]);
          else if (null != t.excludeGroupIds && void 0 !== t.excludeGroupIds)
            for (var n = 0; e.data.length > n; n++) 0 > t.excludeGroupIds.indexOf(e.data[n].id) && o.push(e.data[n]);
          else o = e.data;
          u.popupModel.groupResults = o, u.resetSelection()
        })
      } else u.resetSelection(), u.popupModel.groupResults = []
    }), u.resetSelection = function() {
      u.popupModel.selectedGroup = void 0, u.popupModel.selectedIndex = -1
    }, u.nextGroup = function() {
      var e = u.popupModel.groupResults;
      e && e.length > 0 && u.popupModel.selectedIndex < e.length - 1 && (u.popupModel.selectedIndex += 1, u.popupModel.groupUser = e[u.popupModel.selectedIndex])
    }, u.previousGroup = function() {
      var e = u.popupModel.groupResults;
      e && e.length > 0 && u.popupModel.selectedIndex > 0 && (u.popupModel.selectedIndex -= 1, u.popupModel.selectedGroup = e[u.popupModel.selectedIndex])
    }, u.confirmGroup = function(e) {
      if (!e) {
        var o = u.popupModel.groupResults;
        u.popupModel.selectedIndex >= 0 && u.popupModel.selectedIndex < o.length && (e = o[u.popupModel.selectedIndex])
      }
      if (e)
        if (c && c(t.$parent, {
          group: e
        }), "true" === l) u.$hide();
        else {
          var o = u.popupModel.groupResults;
          o.splice(jQuery.inArray(e, o), 1), u.popupModel.selectedIndex = 0, u.popupModel.selectedGroup = o[u.popupModel.selectedIndex]
        }
    }, u.$on("tooltip.hide", function() {
      u.popupModel.groupResults = [], u.popupModel.filter = "", u.popupModel.added ? u.popupModel.added = !1 : d && d(t.$parent)
    })
  }, r
}]), activitiModule.directive("tabControl", ["$compile", "$http", "$templateCache", function(e, t, o) {
  var n = function(n, i) {
      if (!n.activeTemplate || n.activeTemplate != n.activeTab.id) {
        var r = $(i.children()[1]),
          s = angular.element(i.children()[1]).scope();
        if (n.activeTemplate && s != n && s.$destroy(), n.activeTab && n.activeTab.templateUrl) {
          var a = t.get(n.activeTab.templateUrl, {
            cache: o
          });
          a.success(function(e) {
            r.html(e)
          }).then(function() {
            n.activeTemplate = n.activeTab.id, r.replaceWith(e(r.html())(n))
          })
        } else r.empty()
      }
    },
    i = {};
  return i.restrict = "A", i.replace = !0, i.transclude = !0, i.template = '<div><div class="clearfix"><ul class="tabs clearfix"><li ng-repeat="tab in tabs" ng-class="{\'active\': tab.id == activeTab.id}"><a ng-click="tabClicked(tab)">{{tab.title && (tab.title | translate) || (tab.name | translate)}}</a></li></ul></div><div></div></div>', i.scope = {
    possibleTabs: "=tabControl",
    model: "=model",
    activeTabReference: "=activeTab"
  }, i.controller = ["$scope", "$element", function(e, t) {
    e.refreshTabs = function() {
      for (var t = [], o = 0; e.possibleTabs.length > o; o++) {
        var n = e.possibleTabs[o];
        n.hide || t.push(n)
      }
      e.tabs = t
    }, e.$watch("possibleTabs", function() {
      e.refreshTabs()
    }, !0), e.$watch("activeTabReference", function(t) {
      if (!e.activeTab || e.activeTab.id != t) {
        var o = e.findTab(t);
        o && e.tabClicked(o)
      }
    }), e.findTab = function(t) {
      if (e.possibleTabs)
        for (var o = 0; e.possibleTabs.length > o; o++)
          if (e.possibleTabs[o].id == t) return e.possibleTabs[o];
      return void 0
    }, e.tabClicked = function(o) {
      o.hide && (o.hide = !1, e.refreshTabs()), e.activeTab = o, e.activeTabReference = o ? o.id : void 0, n(e, t)
    }, e.refreshTabs(), e.tabs && e.tabs.length > 0 && (e.activeTabReference && (e.activeTab = e.findTab(e.activeTabReference)), e.activeTab || (e.activeTab = e.tabs[0]), e.tabClicked(e.activeTab))
  }], i.link = n, i
}]), activitiModule.directive("toggleDragover", ["$document", "$parse", function(e, t) {
  var o = function(e, o, n) {
    var i = n.toggleDragover,
      r = t(i),
      s = o[0];
    s.addEventListener("dragenter", function() {
      return e.$apply(function() {
        r(e, {
          over: !0
        })
      }), !1
    }, !1), s.addEventListener("dragleave", function() {
      return e.$apply(function() {
        r(e, {
          over: !1
        })
      }), !1
    }, !1)
  };
  return o
}]), activitiModule.directive("editInPlace", function() {
  return {
    restrict: "E",
    scope: {
      value: "="
    },
    template: '<span ng-click="edit()" ng-bind="value"></span><span class="glyphicon glyphicon-pencil edit-in-place-icon"></span><input ng-model="value" class="inline-edit-value form-control" ng-blur="stopEdit()" custom-keys enter-pressed="stopEdit()">',
    link: function(e, t) {
      angular.element(t.children()[1]);
      var o = angular.element(t.children()[2]);
      t.addClass("edit-in-place"), e.editing = !1, e.edit = function() {
        e.editing = !0, t.addClass("active"), o[0].focus()
      }, e.stopEdit = function() {
        e.editing = !1, t.removeClass("active")
      }
    }
  }
});
var _internalCreateModal = function(e, t, o) {
  return null !== o && void 0 !== o ? (o.modal = t(e), o.$on("$routeChangeStart", function() {
    o.modal && o.modal.hide()
  }), o.modal) : t(e)
};
activitiModule.directive("numberInputCheck", function() {
  return {
    require: "ngModel",
    link: function(e, t, o, n) {
      n.$parsers.push(function(e) {
        var t;
        return e && 0 == e.indexOf("-") ? (t = e.substr(1).replace(/([^0-9])/g, ""), t = "-" + t) : t = e.replace(/([^0-9])/g, ""), t != e && (n.$setViewValue(t), n.$render()), t
      })
    }
  }
}), activitiModule.directive("columnListScroll", ["$rootScope", "$timeout", "$interval", function(e, t, o) {
  return {
    restrict: "A",
    scope: {},
    link: function(e, n, i) {
      n.addClass("column-container-scroll"), e.columnHeaderClass = i.columnListScroll || "column-header", e.updateHeight = function() {
        var t;
        e.header ? t = e.header.outerHeight() : n.parent().children("." + e.columnHeaderClass).each(function() {
          if (e.header = angular.element(this), e.header.addClass("column-header-fixed"), e.resizeSensor = new ResizeSensor(this, e.updateHeight), e.header.hasClass("ng-hide")) var n = o(function() {
            e.header.hasClass("ng-hide") || (o.cancel(n), e.updateHeight())
          }, 20, 400, !1);
          else t = e.header.outerHeight()
        }), t && (e.emptyChild || (e.emptyChild = n.children(".column-list-scroll-push")), e.emptyChild && e.emptyChild.height(t))
      }, t(e.updateHeight, 1), e.$on("$destroy", function() {
        e.header && e.resizeSensor.detach(e.header[0])
      })
    }
  }
}]), activitiModule.directive("externalTarget", function() {
  return {
    restrict: "A",
    scope: {
      href: "@"
    },
    link: function(e, t, o) {
      var n = t[0];
      e.$watch("href", function() {
        (n.protocol != location.protocol || n.host != location.host) && (n.target = o.externalTarget)
      })
    }
  }
}), activitiModule.filter("startFrom", function() {
  return function(e, t) {
    return e ? (t = +t, e.slice(t)) : []
  }
}), activitiModule.filter("regex", function() {
  return function(e, t, o) {
    2 == arguments.length && (o = t);
    for (var n = RegExp(o), i = [], r = 0; e.length > r; r++) n.test(e[r][t]) && i.push(e[r]);
    return i
  }
}), activitiModule.config(["$httpProvider", "$translateProvider", function(e) {
  e.defaults.headers.get || (e.defaults.headers.get = {}), e.defaults.headers.get["Cache-Control"] = "no-cache, no-store, must-revalidate", e.defaults.headers.get.Pragma = "no-cache", e.defaults.headers.get.Expires = "0"
}]),
  function() {
    if (null !== ACTIVITI.CONFIG.isEventTrackingEnabled && void 0 !== ACTIVITI.CONFIG.isEventTrackingEnabled && ACTIVITI.CONFIG.isEventTrackingEnabled === !0)
      if (null !== ACTIVITI.CONFIG.trackingCode && void 0 !== ACTIVITI.CONFIG.trackingCode) {
        (function(e, t, o, n, i, r, s) {
          e.GoogleAnalyticsObject = i, e[i] = e[i] || function() {
            (e[i].q = e[i].q || []).push(arguments)
          }, e[i].l = 1 * new Date, r = t.createElement(o), s = t.getElementsByTagName(o)[0], r.async = 1, r.src = n, s.parentNode.insertBefore(r, s)
        })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
        var e;
        e = null !== ACTIVITI.CONFIG.isDevMode && void 0 !== ACTIVITI.CONFIG.isDevMode && ACTIVITI.CONFIG.isDevMode === !0 ? {
          cookieDomain: "none"
        } : "auto", ga("create", ACTIVITI.CONFIG.trackingCode, e), ga("require", "displayfeatures"), ga("send", "pageview")
      } else console.log("Could not initialise event tracking: no tracking code found (set property in ACTIVITI.CONFIG.trackingCode)")
  }(), activitiModule.run(["$rootScope", "$location", "EventTrackingService", function(e, t, o) {
  e.$on("$locationChangeSuccess", function() {
    var e = t.url();
    null !== e && void 0 !== e && e.length > 0 && o.trackPageView(t.url())
  })
}]), activitiModule.config(["$provide", function(e) {
  e.decorator("$exceptionHandler", ["$delegate", "EventTrackingService", function(e, t) {
    return function(o, n) {
      if (e(o, n), o) {
        var i;
        o && o.stack && (i = angular.toJson(o.stack)), i && t.trackException(i, !1)
      }
    }
  }])
}]), activitiModule.service("EventTrackingService", [function() {
  var e = function() {
      return null !== ACTIVITI.CONFIG.isEventTrackingEnabled && void 0 !== ACTIVITI.CONFIG.isEventTrackingEnabled && ACTIVITI.CONFIG.isEventTrackingEnabled === !0
    },
    t = function(e) {
      null !== ACTIVITI.CONFIG.isDevMode && void 0 !== ACTIVITI.CONFIG.isDevMode && ACTIVITI.CONFIG.isDevMode === !0 && console.log("[Event Tracker] " + e)
    };
  this.trackPageView = function(o) {
    e() && (t("pageview : " + o), ga("set", "page", o), ga("send", "pageview"))
  }, this.trackEvent = function(o, n, i, r) {
    e() && (t("custom event : " + o + " - " + n), ga("send", "event", o, n, i, r))
  }, this.trackException = function(o, n) {
    e() && (t("exception : " + o + ", is fatal: " + n), ga("send", "event", "exception", "webapp", o.substring(0, 400)))
  }
}]), activitiModule.filter("trackEvent", ["EventTrackingService", function(e) {
  return function(t, o, n, i, r) {
    return e.trackEvent(o, n, i, r), t
  }
}]), activitiModule.service("ResourceService", ["$http", "$q", "appResourceRoot", function(e, t, o) {
  function n(e, t) {
    var n = o + e;
    if (!t || !a[n])
      if (t && (a[n] = !0), document.createStyleSheet) try {
        document.createStyleSheet(e)
      } catch (i) {} else {
        var r = document.createElement("link");
        r.rel = "stylesheet", r.type = "text/css", r.media = "all", r.href = n, document.getElementsByTagName("head")[0].appendChild(r)
      }
  }

  function i(e, t, n) {
    var i = o + e;
    if (n && a[i] && t) t();
    else {
      n && (a[i] = !0);
      var r = document.createElement("script");
      if (r.type = "text/javascript", r.src = i, t) {
        var s = !1;
        r.onload = r.onreadystatechange = function() {
          s || this.readyState && "loaded" != this.readyState && "complete" != this.readyState || (s = !0, t())
        }
      }
      var l = document.getElementsByTagName("head")[0];
      l.appendChild(r)
    }
  }

  function r(e, t, o) {
    function n() {
      var r = e.shift();
      r ? i.call(this, r, n.bind(this), o) : t && t()
    }
    n.call(this)
  }

  function s(t, o, i) {
    e.get(t).success(function(e) {
      var t;
      if (window.DOMParser) {
        var s = new DOMParser;
        t = s.parseFromString(e, "text/xml")
      } else t = new ActiveXObject("Microsoft.XMLDOM"), t.async = !1, t.loadXML(e);
      for (var a, l = t.getElementsByTagName("link"), c = [], d = 0, u = l.length; u > d; d++) a = l[d].getAttribute("href"), a && n(a, i);
      for (l = t.getElementsByTagName("script"), d = 0, u = l.length; u > d; d++) a = l[d].getAttribute("src"), a && c.push(a);
      r(c, o, i)
    })
  }
  var a = {};
  this.loadFromHtml = s, this.loadScript = i, this.loadStylesheet = n
}]), activitiModule.factory("RecursionHelper", ["$compile", function(e) {
  return {
    compile: function(t, o) {
      angular.isFunction(o) && (o = {
        post: o
      });
      var n, i = t.contents().remove();
      return {
        pre: o && o.pre ? o.pre : null,
        post: function(t, r) {
          n || (n = e(i)), n(t, function(e) {
            r.append(e)
          }), o && o.post && o.post.apply(null, arguments)
        }
      }
    }
  }
}]), activitiApp.service("FormUtilService", [function() {
  var e = function(t, o) {
    var o = o || [];
    return t && t.forEach(function(t) {
      if (o.push(t), ("container" === t.type || "group" === t.type) && t.fields)
        for (var n in t.fields) e(t.fields[n], o)
    }), o
  };
  this.flattenFields = e;
  var t = function(e, t) {
    var o = e.indexOf(t);
    if (o >= 0) return o;
    for (var n = 0; e.length > n; n++)
      if ("container" === e[n].type)
        for (var i in e[n].fields)
          if (e[n].fields[i].indexOf(t) >= 0) return n
  };
  this.determineContainerIndex = t;
  var o = function(e, t) {
    var o = e.indexOf(t);
    o >= 0 && e.splice(o, 1);
    for (var n = function(t) {
      var o;
      e.forEach(function(e, n) {
        if ("container" === e.type && e.fields) {
          var i = !1,
            r = !0;
          for (var s in e.fields) e.fields[s] === t && (i = !0), e.fields[s] && e.fields[s].length > 0 && (r = !1);
          i && r && (o = n)
        }
      }), void 0 !== o && o > -1 && e.splice(o, 1)
    }, i = 0; e.length > i; i++)
      if ("container" === e[i].type)
        for (var r in e[i].fields)
          if (e[i].fields[r].indexOf(t) >= 0) {
            e[i].fields[r].splice(e[i].fields[r].indexOf(t), 1), n(e[i].fields[r]);
            break
          }
  };
  this.removeFormElement = o
}]), activitiApp.service("SystemPropertiesService", ["$http", "$q", function(e, t) {
  var o = function(o) {
    var n = t.defer();
    return e(o).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  };
  this.getSystemProperties = function() {
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/system/properties"
    })
  }
}]), activitiApp.controller("AboutActivitiPopupCrtl", ["$rootScope", "$scope", "$http", "$translate", "$interval", "$dateFormatter", function(e, t, o, n, i, r) {
  t.popup = {
    loading: !0,
    activitiVersion: {},
    licenseHolder: ""
  }, o({
    method: "GET",
    url: ACTIVITI.CONFIG.contextRoot + "/app/rest/about-info"
  }).success(function(e) {
    t.popup.licenseHolder = e.holder, t.popup.activitiVersion = e.versionInfo.edition + " v" + e.versionInfo.majorVersion + "." + e.versionInfo.minorVersion + "." + e.versionInfo.revisionVersion, t.popup.activitiVersionType = e.versionInfo.type, e.goodBeforeDate && (t.popup.goodBeforeDate = r.formatDate(new Date(e.goodBeforeDate))), t.popup.loading = !1
  }).error(function() {
    t.popup.loading = !1
  }), t.cancel = function() {
    t.close()
  }, t.close = function() {
    t.$hide()
  }
}]);