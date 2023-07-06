"use strict";
var activitiApp = angular.module("activitiLanding", ["http-auth-interceptor", "ngCookies", "ngResource", "ngSanitize", "ngRoute", "mgcrea.ngStrap", "ngAnimate", "pascalprecht.translate"]),
  activitiModule = activitiApp;
activitiApp.config(["$provide", "$routeProvider", "$selectProvider", "$datepickerProvider", "$translateProvider", function(e, t, o, n, r) {
    var i = "";
    e.value("appName", i);
    var c = ACTIVITI.CONFIG.webContextRoot,
      a = c + (c && "/" !== c.charAt(c.length - 1) ? "/" : "");
    e.value("appResourceRoot", a), angular.extend(o.defaults, {
      caretHtml: '&nbsp;<i class="icon icon-caret-down"></i>'
    }), angular.extend(n.defaults, {
      iconLeft: "icon icon-caret-left",
      iconRight: "icon icon-caret-right"
    });
    var l = ["$rootScope", "AuthenticationSharedService", function(e, t) {
        return e.authenticated ? (e.authenticated = !0, !0) : t.authenticate()
      }],
      s = ["$rootScope", function(e) {
        e.authenticationChecked = !0
      }];
    t.when("/login", {
      templateUrl: "views/login.html",
      controller: "LoginController",
      resolve: {
        verify: s
      }
    }).when("/signup", {
      templateUrl: "views/signup.html",
      controller: "SignupController"
    }).when("/reset-password", {
      templateUrl: "views/request-reset-password.html",
      controller: "ResetPasswordRequestController"
    }).when("/account/activate/:token", {
      templateUrl: "views/activate-account.html",
      controller: "ActivateAccountController"
    }).when("/account/reset-password/:token", {
      templateUrl: "views/reset-password.html",
      controller: "ResetPasswordController"
    }).when("/", {
      templateUrl: "views/landing.html",
      controller: "LandingController",
      resolve: {
        verify: l
      }
    }).otherwise({
      redirectTo: ACTIVITI.CONFIG.appDefaultRoute || "/"
    }), r.useSanitizeValueStrategy("sanitizeParameters"), r.useStaticFilesLoader({
      prefix: a + "i18n/",
      suffix: ".json"
    }), r.preferredLanguage(window.ACTIVITI_PREFERRED_LOCALE)
  }]).run(["$rootScope", function(e) {
    e.$on("$routeChangeStart", function(t, o) {
      null !== o && void 0 !== o && (e.onLogin = "views/login.html" === o.templateUrl)
    })
  }]).run(["$rootScope", "$timeout", "$translate", "$location", "$http", "$window", "$popover", "appResourceRoot", "RuntimeAppDefinitionService", function(e, t, o, n, r, i, c, a) {
    e.config = ACTIVITI.CONFIG, e.appResourceRoot = a, e.alerts = {
      queue: []
    }, e.webRootUrl = function() {
      return ACTIVITI.CONFIG.webContextRoot
    }, e.restRootUrl = function() {
      return ACTIVITI.CONFIG.contextRoot
    }, e.showAlert = function(o) {
      o.queue.length > 0 ? (o.current = o.queue.shift(), o.timeout = t(function() {
        0 == o.queue.length ? (o.current = void 0, o.timeout = void 0) : e.showAlert(o)
      }, "error" == o.current.type ? 5e3 : 1e3)) : e.alerts.current = void 0
    }, e.addAlert = function(t, o) {
      var n = {
        message: t,
        type: o
      };
      e.alerts.timeout ? e.alerts.queue.push(n) : (e.alerts.queue.push(n), e.showAlert(e.alerts))
    }, e.dismissAlert = function() {
      e.alerts.timeout ? (t.cancel(e.alerts.timeout), e.alerts.timeout = void 0, e.showAlert(e.alerts)) : e.alerts.current = void 0
    }, e.addAlertPromise = function(t, o) {
      t && t.then(function(t) {
        e.addAlert(t, o)
      })
    }
  }]).run(["$rootScope", "$location", "$window", "AuthenticationSharedService", "$translate", "$modal", function(e, t, o, n, r, i) {
    var c = r.proposedLanguage();
    "de" !== c && "en" !== c && "es" !== c && "fr" !== c && "it" !== c && r.use("en"), e.window = {};
    var a = function() {
      e.window.width = o.innerWidth, e.window.height = o.innerHeight
    };
    angular.element(o).bind("resize", function() {
      e.$apply(a())
    }), e.$watch("window.forceRefresh", function(t) {
      t && $timeout(function() {
        a(), e.window.forceRefresh = !1
      })
    }), a(), e.hasTenantManagementCapability = function() {
      return n.hasTenantManagementCapability()
    }, e.hasTenantAdminCapability = function() {
      return n.hasTenantAdminCapability()
    }, e.hasAccessReportsCapability = function() {
      return n.hasAccessReportsCapability()
    }, e.logout = function() {
      n.logout()
    }, e.showAboutActiviti = function() {
      _internalCreateModal({
        template: "views/modal/about-activiti.html?" + (new Date).getTime(),
        show: !0
      }, i, e)
    }, e.$on("event:auth-loginRequired", function() {
      e.authenticated = !1, e.authenticationChecked = !0, t.path("/login").replace()
    }), e.$on("event:auth-authConfirmed", function() {
      e.authenticated = !0, e.authenticationChecked = !0;
      var n = t.search().redirectUrl;
      if (null !== n && void 0 !== n && n.length > 0) {
        var r = ACTIVITI.CONFIG.webContextRoot;
        if (n.slice(0, r.length) === r) {
          var i = n.slice(r.length + 1);
          ("analytics/" === i.slice(0, "analytics/".length) || "editor/" === i.slice(0, "editor/".length) || "idm/" === i.slice(0, "idm/".length) || "workflow/" === i.slice(0, "workflow/".length)) && (o.location.href = n)
        }
        t.path("/")
      } else {
        var c = t.path();
        ("" == c || "#" == c || "/login" == c || c.indexOf("/account/activate/") >= 0 || c.indexOf("/account/reset-password/") >= 0) && t.path("/")
      }
    }), e.$on("event:auth-loginConfirmed", function() {
      n.authenticate()
    }), e.$on("event:auth-loginCancelled", function() {
      e.authenticated = !1, t.path("/login")
    }), e.$on("event:auth-loginFailed", function() {
      e.addAlertPromise(r("LOGIN.MESSAGES.ERROR.AUTHENTICATION"), "error")
    }), e.backToLanding = function() {
      var e = t.absUrl(),
        n = e.indexOf("/#");
      n >= 0 && (e = e.substring(0, n), e += "/"), o.location.href = e
    }, e.showGettingStarted = function() {
      _internalCreateModal({
        template: "views/modal/getting-started.html?" + (new Date).getTime(),
        show: !0
      }, i, e)
    }
  }]),
  function() {
    angular.module("http-auth-interceptor", ["http-auth-interceptor-buffer"]).factory("authService", ["$rootScope", "httpBuffer", function(e, t) {
        return {
          loginConfirmed: function(o, n) {
            var r = n || function(e) {
              return e
            };
            e.$broadcast("event:auth-loginConfirmed", o), t.retryAll(r)
          },
          loginCancelled: function(o, n) {
            t.rejectAll(n), e.$broadcast("event:auth-loginCancelled", o)
          }
        }
      }]).config(["$httpProvider", function(e) {
        var t = ["$rootScope", "$q", "httpBuffer", "$translate", function(e, t, o, n) {
          return {
            responseError: function(r) {
              if (401 === r.status && !r.config.ignoreAuthModule) {
                var i = t.defer();
                return o.append(r.config, i), e.$broadcast("event:auth-loginRequired", r), i.promise
              }
              return 401 === r.status && (e.invalidCredentials = !0), r.status >= 500 && 599 >= r.status && r.config && !r.config.ignoreErrors && (r.data && r.data.messageKey ? e.addAlertPromise(n(r.data.messageKey), "error") : r.data && r.data.message ? e.addAlert(r.data.message, "error") : e.addAlertPromise(n("GENERAL.ERROR.GENERIC"), "error")), t.reject(r)
            }
          }
        }];
        e.interceptors.push(t)
      }]), angular.module("http-auth-interceptor-buffer", []).factory("httpBuffer", ["$injector", function(e) {
      function t(t, n) {
        function r(e) {
          n.resolve(e)
        }

        function i(e) {
          n.reject(e)
        }
        o = o || e.get("$http"), o(t).then(r, i)
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
      var r = "j_username=" + encodeURIComponent(n.username) + "&j_password=" + encodeURIComponent(n.password) + "&_spring_security_remember_me=true&submit=Login";
      t.post(ACTIVITI.CONFIG.contextRoot + "/app/authentication", r, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        ignoreAuthModule: "ignoreAuthModule"
      }).success(function(t, r, i, c) {
        e.authenticationError = !1, n.success && n.success(t, r, i, c), o.loginConfirmed()
      }).error(function(t, o, r, i) {
        e.$broadcast("event:auth-loginFailed"), n.error && n.error(t, o, r, i)
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
}]), activitiModule.service("ContentAccountService", ["$http", "$q", "$rootScope", "$translate", "$location", function(e, t, o, n) {
  var r = function(n, r) {
    var i = t.defer();
    return e(n).success(function(e) {
      i.resolve(e)
    }).error(function(e, t) {
      409 == t ? o.$broadcast("integration.account.autherror", r) : o.$broadcast("integration.account.error", r), i.reject(e)
    }), i.promise
  };
  this.getAccounts = function() {
    return r({
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
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco-cloud/networks"
    }, "alfresco-cloud")
  }, this.getCloudSites = function(e) {
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco-cloud/networks/" + e + "/sites"
    }, "alfresco-cloud")
  }, this.getSites = function(e) {
    var t = e.replace("alfresco-", "");
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco/" + t + "/sites"
    }, e)
  }, this.getCloudContentInSite = function(e, t) {
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco-cloud/networks/" + e + "/sites/" + t + "/content"
    }, "alfresco-cloud")
  }, this.getContentInSite = function(e, t) {
    var o = e.replace("alfresco-", "");
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco/" + o + "/sites/" + t + "/content"
    }, e)
  }, this.getCloudContentInFolder = function(e, t) {
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco-cloud/networks/" + e + "/folders/" + t + "/content"
    }, "alfresco-cloud")
  }, this.getContentInFolder = function(e, t) {
    var o = e.replace("alfresco-", "");
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco/" + o + "/folders/" + t + "/content"
    }, e)
  }, this.getGoogleDriveFiles = function(e, t, o) {
    var n = {
      filter: e,
      parent: t,
      currentFolderOnly: o
    };
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/google-drive/files",
      params: n
    }, "google-drive")
  }, this.getBoxFiles = function(e, t) {
    var o = {
      filter: e,
      parent: t
    };
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/box/files",
      params: o
    }, "box")
  }, this.isBoxMetaDataAllowed = function() {
    return r({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/box/metadata-status"
    })
  }
}]), activitiModule.service("RelatedContentService", ["$http", "$q", "$rootScope", "$translate", "$location", "Upload", "EventTrackingService", "$timeout", function(e, t, o, n, r, i, c, a) {
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
      t ? c.trackEvent("workflow", "task-remove-related-content") : c.trackEvent("workflow", "remove-related-content")
    }), o
  }, this.addRelatedContent = function(e, o, n, r, a) {
    var l, s, d = t.defer();
    if (e) {
      var u = "";
      a && (u += "?isRelatedContent=true"), s = r ? ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e + "/raw-content/text" + u : ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + e + "/raw-content" + u, l = i.upload({
        url: s,
        method: "POST",
        file: n
      })
    } else o ? (s = r ? ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + o + "/raw-content/text" : ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + o + "/raw-content", l = i.upload({
      url: s,
      method: "POST",
      file: n
    })) : (s = r ? ACTIVITI.CONFIG.contextRoot + "/app/rest/content/raw/text" : ACTIVITI.CONFIG.contextRoot + "/app/rest/content/raw", l = i.upload({
      url: s,
      method: "POST",
      file: n
    }));
    var p = this;
    l.success(function(e) {
      e && e.id && p.addUrlToContent(e), d.resolve(e)
    }).error(function(e) {
      d.reject(e)
    });
    var f = d.promise;
    return f.progress = function(e) {
      return l.progress(e), f
    }, f.then(function() {
      e ? c.trackEvent("workflow", "task-add-related-content") : o ? c.trackEvent("workflow", "processinstance-add-related-content") : c.trackEvent("workflow", "add-related-content")
    }), f
  }, this.addRelatedContentFromSource = function(o, n, r, i, a, l, s, d, u) {
    var p, f = "";
    u && (f += "?isRelatedContent=true"), p = o ? ACTIVITI.CONFIG.contextRoot + "/app/rest/tasks/" + o + "/content" + f : n ? ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + n + "/content" : ACTIVITI.CONFIG.contextRoot + "/app/rest/content", d = 1 == d;
    var v = {
        source: r,
        sourceId: i,
        name: a,
        link: d,
        mimeType: l,
        simpleType: s
      },
      g = this,
      h = t.defer();
    e({
      method: "POST",
      url: p,
      data: v
    }).success(function(e) {
      e && e.id && g.addUrlToContent(e), h.resolve(e)
    }).error(function(e) {
      h.reject(e)
    });
    var I = h.promise;
    return I.then(function() {
      o ? c.trackEvent("workflow", "task-add-related-content") : n ? c.trackEvent("workflow", "processinstance-add-related-content") : c.trackEvent("workflow", "add-related-content")
    }), I
  }, this.getRelatedContent = function(o) {
    var n = ACTIVITI.CONFIG.contextRoot + "/app/rest/content/" + o,
      r = t.defer();
    e({
      method: "GET",
      url: n
    }).success(function(e) {
      r.resolve(e)
    }).error(function(e) {
      r.reject(e)
    });
    var i = r.promise;
    return i
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
      r = t.defer();
    return e({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/process-instances/" + o + "/field-content"
    }).success(function(e) {
      if (e.data && e.data.length > 0)
        for (var t = 0; e.data.length > t; t++) {
          var o = e.data[t];
          if (o.content && o.content.length > 0)
            for (var i = 0; o.content.length > i; i++) n.addUrlToContent(o.content[i])
        }
      r.resolve(e)
    }).error(function(e) {
      r.reject(e)
    }), r.promise
  }, this.addUrlToContent = function(e) {
    if (e && e.id) {
      e.rawUrl = ACTIVITI.CONFIG.contextRoot + "/app/rest/content/" + e.id + "/raw";
      var t = e.name.split(".").pop();
      e.link || "word" != e.simpleType && "excel" != e.simpleType && "powerpoint" != e.simpleType || (e.officeUrl = ACTIVITI.CONFIG.contextRoot + "/aos/" + e.id + "/" + e.name), "created" == e.thumbnailStatus && (e.thumbnailUrl || (e.thumbnailUrl = ACTIVITI.CONFIG.contextRoot + "/app/rest/content/" + e.id + "/rendition/thumbnail?noCache=" + (new Date).getTime())), "created" == e.previewStatus ? e.pdfUrl = ACTIVITI.CONFIG.contextRoot + "/app/rest/content/" + e.id + "/rendition/preview?noCache=" + (new Date).getTime() : "image" === e.simpleType || "jpg" === t || "jpeg" === t || "png" === t ? (e.imageUrl = e.rawUrl, !e.thumbnailUrl && e.contentAvailable && (e.thumbnailUrl = e.rawUrl)) : "pdf" == e.simpleType && (e.pdfUrl = e.rawUrl)
    }
  }
}]), activitiApp.service("RuntimeAppDefinitionService", ["$http", "$q", "$location", "EventTrackingService", "AuthenticationSharedService", "appName", function(e, t, o, n, r, i) {
  var c = function(o) {
    var n = t.defer();
    return e(o).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  };
  this.getApplications = function() {
    var e = r.hasTenantManagementCapability() || r.hasTenantAdminCapability(),
      t = [],
      n = o.absUrl(),
      a = n.indexOf("/#");
    a >= 0 && (n = n.substring(0, a)), a = n.indexOf("?"), a >= 0 && (n = n.substring(0, a)), "/" == n[n.length - 1] && (n = n.substring(0, n.length - 1)), i.length > 0 && n.substring(n.length - i.length) == i && (n = n.substring(0, n.length - i.length - 1));
    var l = {
        editor: n + "/editor/",
        identity: n + "/idm/",
        workflow: n + "/workflow/",
        admin: "http://localhost:8080/activiti-admin",
        analytics: n + "/analytics/"
      },
      s = function(o) {
        for (var r = JSON.parse(o), i = [], c = 0; r.data.length > c; c++) {
          var a = r.data[c];
          if (void 0 !== a.defaultAppId && null !== a.defaultAppId)
            if ("kickstart" === a.defaultAppId) t.push({
              id: "kickstart",
              titleKey: "APP.KICKSTART.TITLE",
              descriptionKey: "APP.KICKSTART.DESCRIPTION",
              defaultAppId: a.defaultAppId,
              theme: "theme-1",
              icon: "build",
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
              icon: "autorenew",
              fixedBaseUrl: l.workflow + "/#/",
              fixedUrl: l.workflow,
              pages: ["tasks", "processes", "processes?mode=start"]
            });
            /*
            else if ("identity" === a.defaultAppId) {
              var s = {
                id: "identity",
//                titleKey: e ? "APP.IDENTITY-MANAGEMENT.TITLE-TENANT-ADMIN" : "APP.IDENTITY-MANAGEMENT.TITLE",
//                descriptionKey: e ? "APP.IDENTITY-MANAGEMENT.DESCRIPTION-TENANT-ADMIN" : "APP.IDENTITY-MANAGEMENT.DESCRIPTION",
                titleKey: "APP.IDENTITY-MANAGEMENT.TITLE",
                descriptionKey: "APP.IDENTITY-MANAGEMENT.DESCRIPTION",
                defaultAppId: a.defaultAppId,
                theme: "theme-3",
                icon: "icon icon-user",
                fixedBaseUrl: l.identity + "/#/",
                fixedUrl: l.identity
              };
              e && (s.pages = ["tenant-mgmt", "user-mgmt", "system-group-mgmt", "functional-group-mgmt", "profile"]), t.push(s)
            */
            else "analytics" === a.defaultAppId && t.push({
              id: "analytics",
              titleKey: "APP.ANALYTICS.TITLE",
              descriptionKey: "APP.ANALYTICS.DESCRIPTION",
              defaultAppId: a.defaultAppId,
              theme: "theme-6",
              icon: "assessment",
              fixedBaseUrl: l.analytics + "/#/",
              fixedUrl: l.analytics
            });
          else a.icon = "glyphicon " + a.icon, a.fixedBaseUrl = n + "/workflow/#/apps/" + a.id + "/", a.fixedUrl = a.fixedBaseUrl + "tasks", a.pages = ["tasks", "processes", "processes?mode=start"], a.deletable = !0, i.push(a)
        }
        return {
          defaultApps: t,
          customApps: i
        }
      };
    return c({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/runtime/app-definitions",
      transformResponse: s
    })
  }, this.deleteAppDefinition = function(e) {
    var t = c({
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
    controller: ["$scope", "$element", "RuntimeAppDefinitionService", "$translate", function(t, o, n, r) {
      var i;
      t.goToLink = function(e) {
        t.onDestroyPopover(), window.location.href = e
      }, t.onDestroyPopover = function() {
        i && (i.$scope.$destroy(), i.destroy(), i = void 0)
      }, t.showAppLinks = function() {
        t.apps = [], n.getApplications().then(function(e) {
          for (var o = e.defaultApps.concat(e.customApps), n = 0; o.length > n; n++) {
            var i = o[n];
            if (null !== i.pages && void 0 !== i.pages && i.pages.length > 0) {
              for (var c = 0, a = 0; i.pages.length > a; a++) {
                var l = {};
                l.name = i.pages[a], l.theme = i.theme, l.icon = i.icon, null !== i.defaultAppId && void 0 !== i.defaultAppId ? (l.titleKey = i.titleKey + "-" + l.name.toUpperCase(), l.fixedUrl = i.fixedUrl + "#/" + i.pages[a]) : (l.titleKey = r.instant("APP.CUSTOM-APP.TITLE-" + l.name.toUpperCase(), i), l.fixedUrl = i.fixedBaseUrl + i.pages[a]), o.splice(n + a + 1, 0, l), c++
              }
              o.splice(n, 1), n = n + c - 1
            }
          }
          t.apps = o
        }), i = e(o, {
          template: ACTIVITI.CONFIG.webContextRoot + "/views/common/popover/app-links-popover.html",
          placement: "bottom-right",
          show: !0,
          scope: t,
          autoClose: !0
        }), i.$scope.$on("tooltip.hide", function() {
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
      function r(e, t) {
        var o = "",
          n = 0;
        for (n = 0; e.length > n; n++) t.test(o + e[n]) && (o += e[n]);
        return o
      }
      e.identifierRegExp = /^[a-zA-Z][_a-zA-Z0-9]*$/, e.forbidenNames = ["abstract", "continue", "for", "new", "switch", "assert", "default", "if", "package", "synchronized", "boolean", "do", "goto", "private", "this", "break", "double", "implements", "protected", "throw", "byte", "else", "import", "public", "throws", "case", "enum", "instanceof", "return", "transient", "catch", "extends", "int", "short", "try", "char", "final", "interface", "static", "void", "class", "finally", "long", "strictfp", "volatile", "const", "float", "native", "super", "while", "null"], e.$watch(o.ngModel, function(t) {
        var i = !0;
        if (t && t.length > 0) {
          var c = r(t, e.identifierRegExp);
          c != t ? (n.$setViewValue(c), n.$render()) : i = e.identifierRegExp.test(c) ? -1 == e.forbidenNames.indexOf(c) : !1
        }
        n.$setValidity(o.ngModel, i)
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
      function r(e, t) {
        var o = "",
          n = 0;
        for (n = 0; e.length > n; n++) t.test(o + e[n]) && (o += e[n]);
        return o
      }
      e.identifierRegExp = /^\S*$/, e.$watch(o.ngModel, function(t) {
        var i = !0;
        if (t && t.length > 0) {
          var c = r(t, e.identifierRegExp);
          c != t ? (n.$setViewValue(c), n.$render()) : e.identifierRegExp.test(c) || (i = !1)
        }
        n.$setValidity(o.ngModel, i)
      })
    }
  }
}]), activitiModule.directive("restrictInput", ["$parse", function() {
  return {
    restrict: "A",
    require: "ngModel",
    priority: 1002,
    link: function(e, t, o, n) {
      function r(e) {
        var t = e.toUpperCase(),
          o = t.replace(/-D-/, "-DD-").replace(/^D-/, "DD-").replace(/-D$/, "-DD"),
          n = t.replace(/-M-/, "-MM-").replace(/^M-/, "MM-").replace(/-M$/, "-MM"),
          r = o.replace(/-M-/, "-MM-").replace(/^M-/, "MM-").replace(/-M$/, "-MM");
        return [t, o, n, r]
      }

      function i(e, t) {
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
      var c = o.restrictInput;
      (void 0 == c || null == c || "" == c) && (c = o.dateFormat), e.field.acceptedFormat = c;
      var a = r(c),
        l = !1;
      (void 0 == c || null == c || "" == c) && (l = !0);
      var s = n.$render;
      n.$render = function() {
        t.val(n.$viewValue), n.$dateValue && !isNaN(n.$dateValue.getTime()) && s && s()
      }, n.$parsers.unshift(function(e) {
        if (l) return e;
        for (var t = !1, o = 0; a.length > o && !t; o++) t |= i(e, a[o]);
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
      return function(o, n, r) {
        var i = 0;
        r.offset && (i = parseInt(r.offset), (0 / 0 == i || void 0 == i) && (i = 0));
        var c = function(e) {
          t(function() {
            var t = e.parent().outerHeight() - i,
              o = !1;
            e.parent().children().filter(":visible").each(function() {
              o || (e[0] == this ? o = !0 : t -= angular.element(this).outerHeight())
            }), o && e.height(t)
          }, 0)
        };
        o.$watch("toWatch", function() {
          c(n)
        }), o.unregisterWatcher && o.unregisterWatcher(), o.unregisterWatcher = e.$watch("window.height", function() {
          c(n)
        }), o.unregisterForceWatcher && o.unregisterForceWatcher(), o.unregisterForceWatcher = e.$watch("window.forceRefresh", function() {
          c(n)
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
            var r = o.children(".active");
            if (r && r.length > 0) {
              var i = angular.element(r[0]);
              e && (o = angular.element(o.parent()));
              var c = i.position().top - o.position().top + o.scrollTop(),
                a = c + i.outerHeight(),
                l = o.scrollTop() + o.innerHeight(),
                s = l - o.innerHeight();
              s >= c ? o.scrollTop(c - i.outerHeight() - t) : a > l && o.scrollTop(s + i.outerHeight() - t)
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
  var o = function(o, n, r) {
    var i = r.clickAnywhere,
      c = t(i),
      a = r.ignore,
      l = r.ignoreClass,
      s = "true" == r.ignorePopupEvents,
      d = function(e) {
        for (var t = e.target; t;) {
          if (t == n[0] || a && t.id == a || l && t.className && t.className.indexOf(l) >= 0) return e.stopPropagation(), e.preventDefault(), void 0;
          t = t.parentNode
        }
        o.$apply(function() {
          c(o, {
            $event: e
          })
        })
      };
    e.on("click", d), o.$on("$destroy", function() {
      e.off("click", d)
    });
    var u = o.$on("tooltip.hide", function() {
      s || (e.off("click", d), u())
    })
  };
  return o
}]), activitiModule.directive("autoFocus", ["$timeout", "$parse", function(e, t) {
  return {
    restrict: "AC",
    compile: function(o, n) {
      var r;
      return n.selectText && (r = t(n.selectText)),
        function(t, o, n) {
          var i = void 0 !== n.focusFirstChild;
          e(function() {
            if (i) {
              var e = o.find("input");
              e && e.length > 0 && (e[0].focus(), r && r(t.$parent) && input[0].setSelectionRange(0, input[0].value.length))
            } else o[0].focus(), r && r(t.$parent) && o[0].setSelectionRange(0, o[0].value.length)
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
    var n, r, i, c;
    return o.upPressed && (n = e(o.upPressed)), o.downPressed && (r = e(o.downPressed)), o.enterPressed && (i = e(o.enterPressed)), o.escapePressed && (c = e(o.escapePressed)),
      function(e, t) {
        t.on("keyup", function(t) {
          38 === t.keyCode ? e.$apply(function() {
            n && n(e, {
              $event: t
            })
          }) : 40 === t.keyCode ? e.$apply(function() {
            r && r(e, {
              $event: t
            })
          }) : 13 === t.keyCode ? e.$apply(function() {
            i && i(e, {
              $event: t
            })
          }) : 27 === t.keyCode && e.$apply(function() {
            c && c(e, {
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
      o.val(t.targetModel), t.$watch("targetModel", function(n, i) {
        r && e.cancel(r), n !== i && o.val(t.targetModel)
      });
      var r;
      o.on("keyup paste search", function() {
        o.val() !== t.targetModel && (r && e.cancel(r), r = e(function() {
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
    link: function(t, o, n, r) {
      if ("radio" !== n.type && "checkbox" !== n.type) {
        o.unbind("input");
        var i;
        o.bind("input", function() {
          e.cancel(i), i = e(function() {
            t.$apply(function() {
              r.$setViewValue(o.val())
            })
          }, n.ngDebounce || 1e3)
        }), o.bind("blur", function() {
          t.$apply(function() {
            r.$setViewValue(o.val())
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
  }, e.controller = ["$scope", "$element", "ContentAccountService", "$modal", "$window", "$translate", "$rootScope", function(e, t, o, n, r, i, c) {
    e.$on("integration.account.error", function(t, o) {
      e.currentAccount && o == e.currentAccount.serviceId && e.contentBrowseModal && ("alfresco-cloud" === o ? i("INTEGRATION.ALERT.ALFRESCO-ERROR").then(function(t) {
        e.contentBrowseModal.$scope.errorMessage = t, e.currentAccount.loading = !1
      }) : "google-drive" === o ? i("INTEGRATION.ALERT.GOOGLE-DRIVE-ERROR").then(function(t) {
        e.contentBrowseModal.$scope.errorMessage = t, e.currentAccount.loading = !1
      }) : "box" === o && i("INTEGRATION.ALERT.BOX-ERROR").then(function(t) {
        e.contentBrowseModal.$scope.errorMessage = t, e.currentAccount.loading = !1
      }))
    }), e.openAuthenticationPopup = function(t, o) {
      e.openContentAccountAuth(t, o)
    }, e.clearPopupError = function() {
      e.contentBrowseModal && (e.contentBrowseModal.$scope.errorMessage = void 0)
    }, e.$on("integration.account.autherror", function(t, o) {
      o && (e.contentAccounts[o].authorized = !1, "alfresco-cloud" === o ? i("INTEGRATION.ALERT.ALFRESCO-CLOUD-NOT-AUTHORIZED").then(function(t) {
        c.addAlert(t, "error"), e.errorMessage = t
      }) : "google-drive" === o ? i("INTEGRATION.ALERT.GOOGLE-DRIVE-NOT-AUTHORIZED").then(function(t) {
        c.addAlert(t, "error"), e.errorMessage = t
      }) : "box" === o && i("INTEGRATION.ALERT.BOX-NOT-AUTHORIZED").then(function(t) {
        c.addAlert(t, "error"), e.errorMessage = t
      }), e.contentBrowseModal && e.contentBrowseModal.$scope.$hide())
    }), e.openContentAccountAuth = function(t, o) {
      var n = angular.element(r),
        i = (n.width() - 500) / 2,
        c = (n.height() - 400) / 2,
        a = r.open(e.contentAccounts[o].authorizationUrl, o, "width= 500, height=400, toolbar=no, status=no, titlebar=no, location=no, menubar=no, top=" + c + ", left=" + i);
      r.contentAccountAuthConfirmed = function() {
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
  }, o.link = function(o, n, r) {
    r.onContentUpload && (o.uploadedCallback = e(r.onContentUpload)), r.onFolderSelect && (o.folderSelectCallback = e(r.onFolderSelect)), r.onUploadInProgress && (o.uploadInProgressCallback = e(r.onUploadInProgress)), t(function() {
      n.find("div.select-file").click(function() {
        n.find('input[type="file"]').click()
      })
    }, 200)
  }, o.controller = ["$scope", "$element", "RelatedContentService", "ContentAccountService", "$modal", "$window", "$translate", "$rootScope", function(e, t, o, n, r, i, c, a) {
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
      e.currentAccount && o == e.currentAccount.serviceId && (e.contentBrowseModal && c("INTEGRATION.ALERT.ALFRESCO-ERROR").then(function(t) {
        e.contentBrowseModal.$scope.errorMessage = t, e.currentAccount.loading = !1
      }), e.contentBrowseModal && c("INTEGRATION.ALERT.BOX-ERROR").then(function(t) {
        e.contentBrowseModal.$scope.errorMessage = t, e.currentAccount.loading = !1
      }))
    }), e.clearPopupError = function() {
      e.contentBrowseModal && (e.contentBrowseModal.$scope.errorMessage = void 0)
    }, e.$on("integration.account.autherror", function(t, o) {
      o && (e.contentAccounts[o].authorized = !1, o === e.ALFRESCO_CLOUD_ACCOUNT_ID ? (c("INTEGRATION.ALERT.ALFRESCO-CLOUD-NOT-AUTHORIZED").then(function(t) {
        a.addAlert(t, "error"), e.errorMessage = t
      }), e.contentBrowseModal && e.contentBrowseModal.$scope.$hide()) : o == e.GOOGLE_DRIVE_ACCOUNT_ID ? (c("INTEGRATION.ALERT.GOOGLE-DRIVE-NOT-AUTHORIZED").then(function(t) {
        a.addAlert(t, "error"), e.errorMessage = t
      }), e.contentBrowseModal && e.contentBrowseModal.$scope.$hide()) : "box" == o && (c("INTEGRATION.ALERT.BOX-NOT-AUTHORIZED").then(function(t) {
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
        var r = {
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
          folder: r
        }), e.contentBrowseModal.$scope.$hide()
      }
    }, e.onFileSelect = function(t, n) {
      if (e.errorMessage = void 0, !e.linkOnly && (e.errorMessage = void 0, !e.folderSelect && !e.uploadModel.uploading && t.length > 0)) {
        e.uploadInProgressCallback && e.uploadInProgressCallback(e.$parent, {
          status: !0
        }), e.uploadModel.uploading = !0;
        var r = t[0];
        e.clearPopupError(), o.addRelatedContent(e.taskId, e.processInstanceId, r, n, e.isRelatedContent).progress(function(t) {
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
            t.customData && (o.quota = e.formatFileSize(t.customData.quota)), c(t.messageKey, o).then(function(t) {
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
      var n = angular.element(i),
        r = (n.width() - 500) / 2,
        c = (n.height() - 400) / 2,
        a = i.open(e.contentAccounts[o].authorizationUrl, o, "width= 500, height=400, toolbar=no, status=no, titlebar=no, location=no, menubar=no, top=" + c + ", left=" + r);
      i.contentAccountAuthConfirmed = function() {
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
        var r = null;
        e.currentFolderTree.length > 0 && (r = e.currentFolderTree[e.currentFolderTree.length - 1].id);
        var i = {
          path: {
            id: r,
            title: o,
            folderTree: e.currentFolderTree
          }
        };
        return e.uploadModel.noNetwork ? i.account = {
          id: t.serviceId,
          name: t.name
        } : i.network = e.selectedNetwork.id, i.site = {
          id: e.selectedSite.id,
          title: e.selectedSite.title
        }, i
      }, e.contentBrowseModal = _internalCreateModal({
        template: ACTIVITI.CONFIG.webContextRoot + "/views/common/modal/browse-alfresco-cloud.html",
        show: !0,
        scope: e
      }, r, e)
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
        var r = null;
        return e.currentFolderTree.length > 0 && (r = e.currentFolderTree[e.currentFolderTree.length - 1].id), {
          path: {
            id: r,
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
      }, r, e), e.contentBrowseModal.$scope.$watch("filter", function(t) {
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
        var r = null;
        return e.currentFolderTree.length > 0 && (r = e.currentFolderTree[e.currentFolderTree.length - 1].id), {
          path: {
            id: r,
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
      }, r, e), e.contentBrowseModal.$scope.$watch("filter", function(t) {
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
      var r = !1;
      e.contentSource && e.contentSource.notAllowNavigateFolders && 1 == e.contentSource.notAllowNavigateFolders && (r = !0), n.getGoogleDriveFiles(t, o, r).then(function(t) {
        e.googleDriveFiles = t, e.contentAccounts[e.GOOGLE_DRIVE_ACCOUNT_ID].loading = !1
      })
    }, e.addContentFromSource = function(t, n, r, i, c, a, l) {
      o.addRelatedContentFromSource(e.taskId, e.processInstanceId, t, n, r, i, c, e.linkOnly, e.isRelatedContent).then(function(t) {
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
}]), activitiModule.directive("selectPeoplePopover", ["$rootScope", "$http", "$popover", "appResourceRoot", "UserService", "SystemPropertiesService", "$parse", function(e, t, o, n, r, i, c) {
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
    var s = a.selectYourselfMode,
      d = !0;
    void 0 !== a.closeOnSelect && (d = a.closeOnSelect), t.popover = o(n, {
      template: ACTIVITI.CONFIG.webContextRoot + "/views/common/popover/select-people-popover.html?" + Date.now(),
      placement: l
    });
    var u, p, f;
    a.onPeopleSelected && (u = c(a.onPeopleSelected)), a.onCancel && (p = c(a.onCancel)), a.onEmailSelected && (f = c(a.onEmailSelected));
    var v = "workflow";
    null !== t.type && void 0 !== t.type && (v = t.type);
    var g = t.popover.$scope;
    if (g.title = a.popoverTitle, g.popupModel = {
      emailMode: !1,
      showRecentResults: !1,
      userResults: [],
      userField: {},
      userFieldFilter: ["people"],
      loading: !1
    }, t.selectPeopleFormFields && (g.popupModel.formFields = t.selectPeopleFormFields), a.emailModeDisabled || t.emailModeDisabled) {
      var h = t.emailModeDisabled || a.emailModeDisabled;
      ("true" === h || h === !0) && (g.popupModel.emailDisabled = !0)
    }(void 0 == g.popupModel.emailDisabled || 0 == g.popupModel.emailDisabled) && i.getSystemProperties().then(function(e) {
      g.popupModel.emailDisabled = !e.allowInvolveByEmail
    });
    var I = function() {
      if (g.popupModel.emailMode = !1, e.account && e.account.capabilities) {
        var t = e.account.capabilities.indexOf("tenant-mgmt") > -1 || e.account.capabilities.indexOf("tenant-admin") > -1;
        t === !1 && (null === g.account.tenantId || void 0 === g.account.tenantId) && (g.popupModel.emailMode = !0)
      }
    };
    I(), g.setSearchType = function() {
      g.popupModel.userSourceType = "search"
    }, g.setFormFieldType = function() {
      g.popupModel.userSourceType = "field"
    }, g.$watch("popupModel.userField", function() {
      if (g.popupModel.userField && g.popupModel.userField.id) {
        if (u) {
          var e = {
            id: g.popupModel.userField.id,
            name: g.popupModel.userField.name,
            email: g.popupModel.userField.email,
            type: g.popupModel.userField.type
          };
          u(t.$parent, {
            userField: e
          }), g.popupModel.userField = {}
        }(d || "true" === d) && g.$hide()
      }
    }), g.$watch("popupModel.filter", function() {
      if (g.popupModel.filter && g.popupModel.filter.length > 0) {
        g.popupModel.loading = !0;
        var e;
        e = "idm" === v ? r.getFilteredUsersStrict(g.popupModel.filter, t.tenantId, t.restrictWithGroup) : r.getFilteredUsers(g.popupModel.filter, t.excludeTaskId, t.excludeProcessId, t.tenantId, t.restrictWithGroup), e.then(function(e) {
          g.popupModel.showRecentResults = !1, g.popupModel.loading = !1;
          var o = [],
            n = null !== t.excludeUserId && void 0 !== t.excludeUserId,
            r = null !== t.excludeUserIds && void 0 !== t.excludeUserIds;
          if (n === !0 || r === !0)
            for (var i = 0; e.data.length > i; i++) {
              var c = !1;
              n === !0 && e.data[i].id === t.excludeUserId && (c = !0), r === !0 && t.excludeUserIds.indexOf(e.data[i].id) >= 0 && (c = !0), c || o.push(e.data[i])
            } else o = e.data;
          g.popupModel.userResults = o, g.resetSelection()
        })
      } else g.resetSelection(), g.popupModel.userResults = []
    }), g.resetSelection = function() {
      g.popupModel.selectedUser = void 0, g.popupModel.selectedIndex = -1
    }, g.nextUser = function() {
      var e = g.popupModel.userResults;
      e && e.length > 0 && g.popupModel.selectedIndex < e.length - 1 && (g.popupModel.selectedIndex += 1, g.popupModel.selectedUser = e[g.popupModel.selectedIndex])
    }, g.previousUser = function() {
      var e = g.popupModel.userResults;
      e && e.length > 0 && g.popupModel.selectedIndex > 0 && (g.popupModel.selectedIndex -= 1, g.popupModel.selectedUser = e[g.popupModel.selectedIndex])
    }, g.confirmUser = function(e) {
      if (!e) {
        var o = g.popupModel.userResults;
        g.popupModel.selectedIndex >= 0 && g.popupModel.selectedIndex < o.length && (e = o[g.popupModel.selectedIndex])
      }
      if (e)
        if (u && u(t.$parent, {
          user: e
        }), "true" === d) g.$hide();
        else {
          var o = g.popupModel.userResults;
          o.splice(jQuery.inArray(e, o), 1), g.popupModel.selectedIndex = 0, g.popupModel.selectedUser = o[g.popupModel.selectedIndex]
        }
    }, g.selectPersonByEmail = function(e) {
      e && f && (f(t.$parent, {
        email: g.popupModel.email
      }), g.$hide())
    }, g.getSelectYourselfLabelKey = function() {
      return "INVOLVE-PEOPLE." + s.toUpperCase() + "-YOURSELF"
    }, g.isCurrentUserSelectable = function() {
      return s && !(t.excludeUserId && t.excludeUserId == e.account.id || t.excludeUserIds && -1 != t.excludeUserIds.indexOf(e.account.id))
    }, g.selectYourself = function() {
      u && (u(t.$parent, {
        user: e.account
      }), g.$hide())
    }, g.$on("tooltip.hide", function() {
      g.popupModel.showRecentResults && g.popupModel.added && (g.popupModel.recentUsers = []), g.popupModel.userResults = [], g.popupModel.filter = "", g.popupModel.emailMode = !1, I(), g.popupModel.added ? g.popupModel.added = !1 : p && p(t.$parent)
    })
  }, a
}]), activitiModule.directive("selectFunctionalGroupPopover", ["$rootScope", "$http", "$popover", "FunctionalGroupService", "$parse", function(e, t, o, n, r) {
  var i = {};
  return i.restrict = "A", i.scope = {
    type: "=type",
    restrictWithGroup: "=restrictWithGroup",
    excludeGroupIds: "=excludeGroupIds"
  }, i.link = function(t, i, c) {
    var a = "bottom";
    i.addClass("toggle-functional-group-select"), c.placement && (a = c.placement);
    var l = !0;
    void 0 !== c.closeOnSelect && (l = c.closeOnSelect), t.popover = o(i, {
      template: ACTIVITI.CONFIG.webContextRoot + "/views/common/popover/select-functional-group-popover.html?" + Date.now(),
      placement: a
    });
    var s, d;
    c.onGroupSelected && (s = r(c.onGroupSelected)), c.onCancel && (d = r(c.onCancel));
    var u = t.popover.$scope;
    u.title = c.popoverTitle, u.popupModel = {
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
        if (s && s(t.$parent, {
          group: e
        }), "true" === l) u.$hide();
        else {
          var o = u.popupModel.groupResults;
          o.splice(jQuery.inArray(e, o), 1), u.popupModel.selectedIndex = 0, u.popupModel.selectedGroup = o[u.popupModel.selectedIndex]
        }
    }, u.$on("tooltip.hide", function() {
      u.popupModel.groupResults = [], u.popupModel.filter = "", u.popupModel.added ? u.popupModel.added = !1 : d && d(t.$parent)
    })
  }, i
}]), activitiModule.directive("tabControl", ["$compile", "$http", "$templateCache", function(e, t, o) {
  var n = function(n, r) {
      if (!n.activeTemplate || n.activeTemplate != n.activeTab.id) {
        var i = $(r.children()[1]),
          c = angular.element(r.children()[1]).scope();
        if (n.activeTemplate && c != n && c.$destroy(), n.activeTab && n.activeTab.templateUrl) {
          var a = t.get(n.activeTab.templateUrl, {
            cache: o
          });
          a.success(function(e) {
            i.html(e)
          }).then(function() {
            n.activeTemplate = n.activeTab.id, i.replaceWith(e(i.html())(n))
          })
        } else i.empty()
      }
    },
    r = {};
  return r.restrict = "A", r.replace = !0, r.transclude = !0, r.template = '<div><div class="clearfix"><ul class="tabs clearfix"><li ng-repeat="tab in tabs" ng-class="{\'active\': tab.id == activeTab.id}"><a ng-click="tabClicked(tab)">{{tab.title && (tab.title | translate) || (tab.name | translate)}}</a></li></ul></div><div></div></div>', r.scope = {
    possibleTabs: "=tabControl",
    model: "=model",
    activeTabReference: "=activeTab"
  }, r.controller = ["$scope", "$element", function(e, t) {
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
  }], r.link = n, r
}]), activitiModule.directive("toggleDragover", ["$document", "$parse", function(e, t) {
  var o = function(e, o, n) {
    var r = n.toggleDragover,
      i = t(r),
      c = o[0];
    c.addEventListener("dragenter", function() {
      return e.$apply(function() {
        i(e, {
          over: !0
        })
      }), !1
    }, !1), c.addEventListener("dragleave", function() {
      return e.$apply(function() {
        i(e, {
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
    link: function(e, n, r) {
      n.addClass("column-container-scroll"), e.columnHeaderClass = r.columnListScroll || "column-header", e.updateHeight = function() {
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
}), activitiModule.config(["$httpProvider", "$translateProvider", function(e) {
  e.defaults.headers.get || (e.defaults.headers.get = {}), e.defaults.headers.get["Cache-Control"] = "no-cache, no-store, must-revalidate", e.defaults.headers.get.Pragma = "no-cache", e.defaults.headers.get.Expires = "0"
}]), activitiApp.controller("LoginController", ["$scope", "$location", "AuthenticationSharedService", "$timeout", function(e, t, o, n) {
  e.model = {
    loading: !1
  }, e.login = function() {
    e.model.loading = !0, jQuery("#username").trigger("change"), jQuery("#password").trigger("change"), n(function() {
      o.login({
        username: e.username,
        password: e.password,
        success: function() {
          e.model.loading = !1
        },
        error: function() {
          e.model.loading = !1
        }
      })
    })
  }
}]), activitiApp.controller("AddAppDefinitionPopupCrtl", ["$rootScope", "$scope", "$http", "EventTrackingService", "$translate", function(e, t, o, n, r) {
  t.popup = {
    loading: !0,
    selectedApps: []
  }, o({
    method: "GET",
    url: ACTIVITI.CONFIG.contextRoot + "/app/rest/editor/app-definitions"
  }).success(function(e) {
    t.popup.apps = e, t.popup.loading = !1
  }).error(function() {
    t.popup.loading = !1
  }), t.selectApp = function(e) {
    var o = t.popup.selectedApps.indexOf(e.id);
    o >= 0 ? t.popup.selectedApps.splice(o, 1) : t.popup.selectedApps.push(e.id)
  }, t.isAppSelected = function(e) {
    return t.popup.selectedApps.indexOf(e.id) >= 0 ? !0 : !1
  }, t.cancel = function() {
    t.close()
  }, t.deploy = function() {
    t.popup.loading = !0;
    for (var e = [], i = 0; t.popup.selectedApps.length > i; i++) e.push({
      id: t.popup.selectedApps[i]
    });
    var c = {
      appDefinitions: e
    };
    delete Array.prototype.toJSON, t.errorMessage = void 0, o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/runtime/app-definitions",
      data: c
    }).success(function() {
      t.loadApps(), n.trackEvent("landing", "runtime-app-deploy"), t.popup.loading = !1, t.close()
    }).error(function(e) {
      t.popup.loading = !1, e && e.messageKey && r(e.messageKey, e.customData).then(function(e) {
        t.errorMessage = e
      })
    })
  }, t.close = function() {
    t.$hide()
  }
}]), activitiApp.controller("LandingController", ["$scope", "$window", "$location", "$http", "$translate", "$modal", "RuntimeAppDefinitionService", "$rootScope", function(e, t, o, n, r, i, c, a) {
  e.model = {
    loading: !0
  }, r("APP.ACTION.DELETE").then(function(t) {
    e.appActions = [{
      text: t,
      click: "deleteApp(app); "
    }]
  }), e.loadApps = function() {
    e.model.customAppsFetched = !1, c.getApplications().then(function(t) {
      e.model.apps = t.defaultApps.concat(t.customApps), e.model.customAppsFetched = !0, e.model.customApps = t.customApps.length > 0;
      var n = o.absUrl(),
        r = n.indexOf("/#");
      r >= 0 && (n = n.substring(0, r)), r = n.indexOf("?"), r >= 0 && (n = n.substring(0, r)), "/" == n[n.length - 1] && (n = n.substring(0, n.length - 1)), e.urls = {
        editor: n + "/editor/",
        identity: n + "/idm/",
        workflow: n + "/workflow/",
        admin: "http://localhost:8080/activiti-admin",
        analytics: n + "/analytics/"
      }
    })
  }, e.appSelected = function(e) {
    e.fixedUrl && (t.location.href = e.fixedUrl)
  }, e.addAppDefinition = function() {
    _internalCreateModal({
      template: "views/modal/add-app-definition-modal.html",
      scope: e
    }, i, e)
  }, e.deleteApp = function(t) {
    t && t.id && c.deleteAppDefinition(t.id).then(function() {
      a.addAlertPromise(r("APP.MESSAGE.DELETED"), "info");
      for (var o = -1, n = 0; e.model.apps.length > n; n++)
        if (e.model.apps[n].id == t.id) {
          o = n;
          break
        }
      o >= 0 && e.model.apps.splice(o, 1)
    })
  }, e.loadApps()
}]), activitiApp.controller("ResetPasswordRequestController", ["$rootScope", "$scope", "$translate", "$http", "$routeParams", "$location", "$timeout", "AuthenticationSharedService", function(e, t, o, n) {
  t.model = {
    error: ""
  }, t.submitForm = function(e) {
    if (e) {
      t.model.loading = !0;
      var o = {
        email: t.model.email
      };
      n({
        method: "POST",
        url: ACTIVITI.CONFIG.contextRoot + "/app/rest/idm/passwords",
        ignoreErrors: !0,
        data: o
      }).success(function() {
        t.model.error = "", t.model.loading = !1, t.model.success = !0
      }).error(function(e) {
        t.model.error = "", e && e.messageKey && (t.model.error = e.messageKey), t.model.loading = !1
      })
    }
  }
}]), activitiApp.controller("SignupController", ["$rootScope", "$scope", "$translate", "$http", "$routeParams", "$location", "$timeout", "AuthenticationSharedService", function(e, t, o, n, r) {
  t.model = {
    error: ""
  }, r.email && (t.model.email = r.email), t.passwordsNotMatching = function() {
    return t.model.password && t.model.password.length > 0 && t.model.passwordRepeat && t.model.passwordRepeat.length > 0 ? t.model.password !== t.model.passwordRepeat : !1
  }, t.submitForm = function(e) {
    if (e) {
      t.model.loading = !0;
      var o = {
        email: t.model.email,
        firstName: t.model.firstName,
        lastName: t.model.lastName,
        company: t.model.company,
        password: t.model.password
      };
      n({
        method: "POST",
        url: ACTIVITI.CONFIG.contextRoot + "/app/rest/idm/signups",
        ignoreErrors: !0,
        data: o
      }).success(function() {
        t.model.error = "", t.model.loading = !1, t.model.success = !0
      }).error(function(e) {
        t.model.error = "", e && e.messageKey && (t.model.error = e.messageKey), t.model.loading = !1
      })
    }
  }
}]), activitiApp.controller("ActivateAccountController", ["$rootScope", "$scope", "$translate", "$http", "$routeParams", "$location", "$timeout", "AuthenticationSharedService", function(e, t, o, n, r, i, c, a) {
  t.model = {
    token: r.token,
    loading: !0,
    success: !1
  }, t.login = function() {
    a.login({
      username: t.model.email,
      password: t.model.password
    })
  }, t.model.token ? n({
    method: "GET",
    url: ACTIVITI.CONFIG.contextRoot + "/app/rest/idm/email-actions/" + t.model.token,
    ignoreErrors: !0
  }).success(function(e) {
    n({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/idm/email-actions/" + t.model.token,
      ignoreErrors: !0,
      data: {}
    }).success(function() {
      t.model.userFullname = e.userFullname, t.model.email = e.userEmail, t.model.loading = !1, t.model.success = !0, c(function() {
        jQuery("#password").focus()
      }, 200)
    }).error(function() {
      t.model.loading = !1, t.model.success = !1
    })
  }).error(function() {
    t.model.loading = !1, t.model.success = !1
  }) : i.path("/")
}]), activitiApp.controller("ResetPasswordController", ["$rootScope", "$scope", "$translate", "$http", "$routeParams", "$location", "$timeout", "AuthenticationSharedService", function(e, t, o, n, r, i, c, a) {
  t.model = {
    token: r.token,
    loading: !0,
    success: !1,
    validToken: !1
  }, t.model.token ? (n({
    method: "GET",
    url: ACTIVITI.CONFIG.contextRoot + "/app/rest/idm/email-actions/" + t.model.token,
    ignoreErrors: !0
  }).success(function(e) {
    t.model.loading = !1, t.model.validToken = !0, t.model.userEmail = e.userEmail, c(function() {
      jQuery("#password").focus()
    }, 200)
  }).error(function() {
    t.model.loading = !1, t.model.success = !1
  }), t.confirm = function() {
    t.model.loading = !0;
    var r = {
      password: t.model.password
    };
    n({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/idm/email-actions/" + t.model.token,
      ignoreErrors: !1,
      data: r
    }).success(function() {
      t.model.success = !0, a.login({
        username: t.model.userEmail,
        password: t.model.password,
        success: function() {
          e.addAlertPromise(o("ACCOUNT.RESET-PASSWORD.SUCCESS-MESSAGE"), "info")
        }
      })
    })
  }) : i.path("/")
}]),
  function() {
    if (null !== ACTIVITI.CONFIG.isEventTrackingEnabled && void 0 !== ACTIVITI.CONFIG.isEventTrackingEnabled && ACTIVITI.CONFIG.isEventTrackingEnabled === !0)
      if (null !== ACTIVITI.CONFIG.trackingCode && void 0 !== ACTIVITI.CONFIG.trackingCode) {
        (function(e, t, o, n, r, i, c) {
          e.GoogleAnalyticsObject = r, e[r] = e[r] || function() {
            (e[r].q = e[r].q || []).push(arguments)
          }, e[r].l = 1 * new Date, i = t.createElement(o), c = t.getElementsByTagName(o)[0], i.async = 1, i.src = n, c.parentNode.insertBefore(i, c)
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
        var r;
        o && o.stack && (r = angular.toJson(o.stack)), r && t.trackException(r, !1)
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
  }, this.trackEvent = function(o, n, r, i) {
    e() && (t("custom event : " + o + " - " + n), ga("send", "event", o, n, r, i))
  }, this.trackException = function(o, n) {
    e() && (t("exception : " + o + ", is fatal: " + n), ga("send", "event", "exception", "webapp", o.substring(0, 400)))
  }
}]), activitiModule.filter("trackEvent", ["EventTrackingService", function(e) {
  return function(t, o, n, r, i) {
    return e.trackEvent(o, n, r, i), t
  }
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
}]), activitiApp.controller("AboutActivitiPopupCrtl", ["$rootScope", "$scope", "$http", "$translate", "$interval", "$dateFormatter", function(e, t, o, n, r, i) {
  t.popup = {
    loading: !0,
    activitiVersion: {},
    licenseHolder: ""
  }, o({
    method: "GET",
    url: ACTIVITI.CONFIG.contextRoot + "/app/rest/about-info"
  }).success(function(e) {
    t.popup.licenseHolder = e.holder, t.popup.activitiVersion = e.versionInfo.edition + " v" + e.versionInfo.majorVersion + "." + e.versionInfo.minorVersion + "." + e.versionInfo.revisionVersion, t.popup.activitiVersionType = e.versionInfo.type, e.goodBeforeDate && (t.popup.goodBeforeDate = i.formatDate(new Date(e.goodBeforeDate))), t.popup.loading = !1
  }).error(function() {
    t.popup.loading = !1
  }), t.cancel = function() {
    t.close()
  }, t.close = function() {
    t.$hide()
  }
}]);