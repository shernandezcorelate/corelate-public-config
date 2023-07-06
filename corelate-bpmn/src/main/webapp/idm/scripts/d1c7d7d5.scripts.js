"use strict";
var activitiApp = angular.module("activitiApp", ["http-auth-interceptor", "ngCookies", "ngResource", "ngSanitize", "ngRoute", "mgcrea.ngStrap", "ngAnimate", "ngFileUpload", "pascalprecht.translate", "ui.grid", "ui.grid.edit", "ui.grid.selection", "ui.grid.autoResize", "ui.grid.cellNav"]),
  activitiModule = activitiApp;
activitiApp.config(["$provide", "$routeProvider", "$translateProvider", function(e, t, o) {
    var n = "idm";
    e.value("appName", n);
    var i = ACTIVITI.CONFIG.webContextRoot + (ACTIVITI.CONFIG.webContextRoot ? "/" + n + "/" : "");
    e.value("appResourceRoot", i);
    var r = ["$rootScope", "AuthenticationSharedService", function(e, t) {
      return e.authenticated ? (e.authenticated = !0, !0) : t.authenticate()
    }];
    t.when("/tenant-mgmt", {
      controller: "IdmTenantMgmtController",
      templateUrl: i + "views/idm-tenant-mgmt.html",
      resolve: {
        verify: r
      }
    }).when("/user-mgmt", {
      controller: "IdmUserMgmtController",
      templateUrl: i + "views/idm-user-mgmt.html",
      resolve: {
        verify: r
      }
    }).when("/system-group-mgmt", {
      controller: "IdmSystemGroupMgmtController",
      templateUrl: i + "views/idm-system-group-mgmt.html",
      resolve: {
        verify: r
      }
    }).when("/functional-group-mgmt", {
      controller: "IdmFunctionalGroupMgmtController",
      templateUrl: i + "views/idm-functional-group-mgmt.html",
      resolve: {
        verify: r
      }
    }).when("/profile", {
      controller: "IdmProfileMgmtController",
      templateUrl: i + "views/idm-profile-mgmt.html",
      resolve: {
        verify: r
      }
    }).when("/logout", {
      templateUrl: i + "views/empty.html",
      controller: "LogoutController"
    }).otherwise({
      redirectTo: ACTIVITI.CONFIG.appDefaultRoute || "/profile"
    }), o.useSanitizeValueStrategy("sanitizeParameters"), o.useStaticFilesLoader({
      prefix: i + "i18n/",
      suffix: ".json"
    }), o.preferredLanguage(window.ACTIVITI_PREFERRED_LOCALE)
  }]).run(["$rootScope", "$location", "$window", "AuthenticationSharedService", "$translate", "appResourceRoot", "$modal", function(e, t, o, n, i, r, a) {
    e.appResourceRoot = r;
    var l = "/idm/";
    e.logout = function() {
      n.logout()
    }, e.showAboutActiviti = function() {
      _internalCreateModal({
        template: "../views/modal/about-activiti.html?" + (new Date).getTime(),
        show: !0
      }, a, e)
    };
    var d = function(e) {
      var n, i = t.absUrl(),
        r = i.indexOf(l);
      n = null !== e && void 0 !== e && void 0 !== e.isFromLogout && e.isFromLogout === !0 ? i.substring(0, r) + "/#login" : i.substring(0, r) + "/#login?redirectUrl=" + encodeURIComponent(o.location.pathname + o.location.hash), o.location.href == n ? window.location.reload() : o.location.href = n
    };
    e.$on("event:auth-loginRequired", function() {
      e.authenticated = !1, e.authenticationChecked = !0, d()
    }), e.$on("event:auth-authConfirmed", function() {
      e.authenticated = !0, e.authenticationChecked = !0, ("" == t.path() || "#" == t.path() || "/login" == t.path()) && t.path("/");
      var o = t.url();
      (o && ("/user-mgmt" === o || "/system-group-mgmt" === o) || "functional-group-mgmt" === o || "/tenant-mgmt" === o) && (e.hasTenantManagementCapability() || e.hasTenantAdminCapability() || t.path("/profile"))
    }), e.$on("event:auth-loginConfirmed", function() {
      n.authenticate(), e.common = {}
    }), e.$on("event:auth-loginCancelled", function(t, o) {
      e.authenticated = !1, d(o)
    }), e.$on("event:auth-loginFailed", function() {
      e.addAlertPromise(i("LOGIN.MESSAGES.ERROR.AUTHENTICATION"), "error")
    }), e.backToLanding = function() {
      var e = t.absUrl(),
        n = e.indexOf(l);
      n >= 0 && (e = e.substring(0, n), e += "/"), o.location.href = e
    }
  }]).run(["$rootScope", "$timeout", "$translate", "$location", "$window", "AuthenticationSharedService", function(e, t, o, n, i, r) {
    var a = o.proposedLanguage();
    "de" !== a && "en" !== a && "es" !== a && "fr" !== a && "it" !== a && o.use("en"), e.common = {}, e.webRootUrl = function() {
      return ACTIVITI.CONFIG.webContextRoot
    }, e.restRootUrl = function() {
      return ACTIVITI.CONFIG.contextRoot
    }, e.window = {};
    var l = function() {
      e.window.width = i.innerWidth, e.window.height = i.innerHeight
    };
    angular.element(i).bind("resize", function() {
      e.$apply(l())
    }), e.$watch("window.forceRefresh", function(o) {
      o && t(function() {
        l(), e.window.forceRefresh = !1
      })
    }), l(), e.hasTenantManagementCapability = function() {
      return r.hasTenantManagementCapability()
    }, e.hasTenantAdminCapability = function() {
      return r.hasTenantAdminCapability()
    }, e.$watch("account", function() {
      e.mainNavigation = [{
        id: "tenantMgmt",
        title: "IDM.GENERAL.NAVIGATION.TENANT-MGMT",
        path: "/tenant-mgmt",
        isVisible: function() {
//          return r.hasTenantManagementCapability() || r.hasTenantAdminCapability()
          return 0
        }
      }, {
        id: "userMgmt",
        title: "IDM.GENERAL.NAVIGATION.USER-MGMT",
        path: "/user-mgmt",
        isVisible: function() {
//          return r.hasTenantManagementCapability() || r.hasTenantAdminCapability()
          return 0
        }
      }, {
        id: "systemGroupMgmt",
        title: "IDM.GENERAL.NAVIGATION.SYSTEM-GROUP-MGMT",
        path: "/system-group-mgmt",
        isVisible: function() {
//          return r.hasTenantManagementCapability() || r.hasTenantAdminCapability()
          return 0
        }
      }, {
        id: "functionalGroupMgmt",
        title: "IDM.GENERAL.NAVIGATION.FUNCTIONAL-GROUP-MGMT",
        path: "/functional-group-mgmt",
        isVisible: function() {
//          return r.hasTenantManagementCapability() || r.hasTenantAdminCapability()
          return 0
        }
      }, {
        id: "profile",
        title: "IDM.GENERAL.NAVIGATION.PROFILE",
        path: "/profile",
        isVisible: function() {
          return !0
        }
      }], e.setMainPage = function(t) {
        e.mainPage = t, n.path(e.mainPage.path)
      }, e.setMainPageById = function(t) {
        for (var o = 0; e.mainNavigation.length > o; o++)
          if (t == e.mainNavigation[o].id) {
            e.mainPage = e.mainNavigation[o];
            break
          }
      }
    })
  }]).run(["$rootScope", "$timeout", "$translate", "$location", "$http", "$window", function(e, t) {
    e.alerts = {
      queue: []
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
  }]).filter("dateformat", function() {
  return function(e, t) {
    return e ? t ? moment(e).format(t) : moment(e).calendar() : ""
  }
}), angular.module("activitiApp").service("IdmService", ["$http", "$q", "$rootScope", function(e, t) {
  var o = function(o) {
    var n = t.defer();
    return e(o).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  };
  this.getIdmInfo = function() {
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/idm-info"
    })
  }, this.getProfile = function() {
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/profile"
    })
  }, this.updateProfileDetails = function(o, n, i) {
    var r = t.defer();
    e({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/profile",
      data: o
    }).success(function(e) {
      n && n(e), r.resolve(e)
    }).error(function(e, t) {
      i && i(e, t), r.reject(e)
    });
    var a = r.promise;
    return a
  }, this.changePassword = function(e, t) {
    return o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/profile-password",
      data: {
        oldPassword: e,
        newPassword: t
      }
    })
  }, this.getTenants = function() {
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tenants"
    })
  }, this.getTenant = function(e) {
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tenants/" + e
    })
  }, this.createTenant = function(e) {
    return o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tenants",
      data: e
    })
  }, this.updateTenant = function(e, t) {
    return o({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tenants/" + e,
      data: {
        name: t.name,
        domain: t.domain,
        maxUsers: t.maxUsers,
        active: t.active
      }
    })
  }, this.deleteTenant = function(e) {
    return o({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tenants/" + e
    })
  }, this.getTenantEvents = function(e) {
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tenants/" + e + "/events"
    })
  }, this.getTenantUsers = function(e, t) {
    var n = {};
    return n.status = "active", null !== e && void 0 !== e && (n.filter = e), null !== t && void 0 !== t && t > -1 && (n.tenantId = t), o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/users",
      params: n
    })
  }, this.getGroups = function(e) {
    var t = {};
    return null !== e && void 0 !== e && e > -1 && (t.tenantId = e), o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups",
      params: t
    })
  }, this.getFunctionalGroups = function(e) {
    var t = {};
    return null !== e && void 0 !== e && e > -1 && (t.tenantId = e), t.functional = "true", o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups",
      params: t
    })
  }, this.getGroup = function(e, t) {
    var n = {};
    return null !== t && void 0 !== t && (n.includeAllUsers = t), o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e,
      params: n
    })
  }, this.getUsersForGroup = function(e, t, n, i) {
    var r = {};
    return null !== t && void 0 !== t && (r.filter = t), null !== n && void 0 !== n && (r.page = n), null !== i && void 0 !== i && (r.pageSize = i), o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e + "/users",
      params: r
    })
  }, this.getGroupsForSystemGroup = function(e) {
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e + "/related-groups"
    })
  }, this.addGroupToSystemGroup = function(e, t) {
    return o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e + "/related-groups/" + t,
      params: {
        type: "system-to-functional"
      }
    })
  }, this.deleteGroupFromSystemGroup = function(e, t) {
    return o({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e + "/related-groups/" + t
    })
  }, this.createGroup = function(e, t, n, i) {
    return null !== t && void 0 !== t && -1 !== t && (e.tenantId = t), n && n >= 0 && (e.type = n), null !== i && void 0 !== i && (e.parentGroupId = i), o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups",
      data: e
    })
  }, this.updateGroup = function(e, t, n) {
    var i = {
      name: n.name
    };
    return null !== t && void 0 !== t && -1 !== t && (i.tenantId = t), o({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e,
      data: i
    })
  }, this.deleteGroup = function(e) {
    return o({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e
    })
  }, this.activateGroup = function(e) {
    return o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e + "/action/activate"
    })
  }, this.deleteGroupMember = function(e, t) {
    return o({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e + "/members/" + t
    })
  }, this.addAllUsers = function(e) {
    return o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e + "/add-all-users"
    })
  }, this.addGroupMember = function(e, t) {
    return o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e + "/members/" + t
    })
  }, this.getPotentialCapabilities = function(e) {
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e + "/potential-capabilities"
    })
  }, this.deleteGroupCapability = function(e, t) {
    return o({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e + "/capabilities/" + t
    })
  }, this.addGroupCapabilities = function(e, t) {
    return o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/groups/" + e + "/capabilities",
      data: {
        capabilities: t
      }
    })
  }, this.getAllTenantConfigs = function(e) {
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tenant_config",
      params: {
        tenantId: e
      }
    })
  }, this.getTenantConfigProperty = function(e, t) {
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tenant_config",
      params: {
        tenantId: e,
        propertyKey: t
      }
    })
  }, this.createTenantConfig = function(e) {
    return o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tenant_config",
      data: e
    })
  }, this.updateTenantConfig = function(e) {
    return o({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tenant_config/" + e.id,
      data: e
    })
  }, this.deleteTenantConfig = function(e) {
    return o({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/tenant_config/" + e.id
    })
  }, this.getAllAlfrescoRepositories = function(e, t) {
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco",
      params: {
        tenantId: e,
        includeAccounts: t
      }
    })
  }, this.createAlfrescoRepository = function(e) {
    return o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco",
      data: e
    })
  }, this.updateAlfrescoRepository = function(e) {
    return o({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco/" + e.id,
      data: e
    })
  }, this.deleteAlfrescoRepository = function(e) {
    return o({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco/" + e.id
    })
  }, this.createAlfrescoRepositoryAccount = function(e, t, n) {
    return o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco/" + e + "/account",
      data: {
        username: t,
        password: n
      }
    })
  }, this.updateAlfrescoRepositoryAccount = function(e, t, n) {
    return o({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco/" + e + "/account",
      data: {
        username: t,
        password: n
      }
    })
  }, this.deleteAlfrescoRepositoryAccount = function(e) {
    return o({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/alfresco/" + e + "/account"
    })
  }, this.createBoxRepositoryAccount = function(e, t, n) {
    return o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/box/" + e + "/account",
      data: {
        username: t,
        password: n
      }
    })
  }, this.updateBoxRepositoryAccount = function(e, t, n) {
    return o({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/box/" + e + "/account",
      data: {
        username: t,
        password: n
      }
    })
  }, this.deleteBoxRepositoryAccount = function(e) {
    return o({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/box/" + e + "/account"
    })
  }, this.loadBoxRepositoryAccount = function(e) {
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/box/" + e + "/account"
    })
  }, this.checkBoxRepositoryIsEnabled = function() {
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/integration/box/status"
    })
  }, this.getAllBasicAuthentications = function(e) {
    var t = {};
    return null !== e && void 0 !== e && e > -1 && (t.tenantId = e), o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/basic-auths",
      params: t
    })
  }, this.createBasicAuthentication = function(e, t) {
    return e.tenantId = t, o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/basic-auths",
      data: e
    })
  }, this.updateBasicAuthentication = function(e, t) {
    var n = {
      tenantId: t,
      name: e.name,
      username: e.username,
      password: e.password
    };
    return o({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin//basic-auths/" + e.id,
      data: n
    })
  }, this.removeBasicAuthConfiguration = function(e, t) {
    var n = {};
    return null !== t && void 0 !== t && t > -1 && (n.tenantId = t), o({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/basic-auths/" + e,
      params: n
    })
  }, this.getAllEndointConfigurations = function(e) {
    var t = {};
    return null !== e && void 0 !== e && e > -1 && (t.tenantId = e), o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/endpoints",
      params: t
    })
  }, this.removeEndpointConfiguration = function(e, t) {
    var n = {};
    return null !== t && void 0 !== t && t > -1 && (n.tenantId = t), o({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/endpoints/" + e,
      params: n
    })
  }, this.createEndpointConfiguration = function(e, t) {
    return e.tenantId = t, o({
      method: "POST",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/endpoints",
      data: e
    })
  }, this.updateEndpointConfiguration = function(e, t) {
    return e.tenantId = t, o({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/endpoints/" + e.id,
      data: e
    })
  }
}]), activitiApp.controller("IdmTenantMgmtController", ["$rootScope", "$scope", "$translate", "$http", "$timeout", "$location", "$modal", "IdmService", function(e, t, o, n, i, r, a, l) {
  var d = !0,
    s = !1;
  e.hasTenantManagementCapability() || (e.hasTenantAdminCapability() ? s = !0 : (d = !1, r.path("/profile"))), t.alfrescoRepositories = {
    data: []
  }, t.versions = [{
    id: null,
    label: ""
  }, {
    id: "4.0",
    label: "4.0"
  }, {
    id: "4.1",
    label: "4.1"
  }, {
    id: "4.2",
    label: "4.2 (or higher)"
  }], e.setMainPageById("tenantMgmt"), t.model = {
    loading: !0,
    lockTenant: s,
    currentTab: "logo"
  }, t.showCreateTenantPopup = function() {
    t.model.editedTenant = {
      active: !0,
      maxUsers: 10
    }, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-tenant-create.html",
      show: !0
    }, a, t)
  }, t.loadAlfrescoRepositories = function() {
    var e = t.model.selectedTenant.id;
    t.alfrescoRepositories.data.length = 0, l.getAllAlfrescoRepositories(e).then(function(e) {
      for (var o = 0; e.data.length > o; o++) t.alfrescoRepositories.data.push(e.data[o])
    })
  }, t.isSaveTenantButtonEnabled = function() {
    return null !== t.model.editedTenant.name && void 0 !== t.model.editedTenant.name && t.model.editedTenant.name.length > 0 && null !== t.model.editedTenant.maxUsers && t.model.editedTenant.maxUsers
  }, t.saveTenant = function() {
    t.model.editedTenant.id ? (t.model.loadingTenant = !0, l.updateTenant(t.model.editedTenant.id, t.model.editedTenant).then(function(e) {
      t.selectTenant(e.id);
      for (var o = 0; t.model.tenants.length > o; o++) t.model.tenants[o].id === e.id && (t.model.tenants[o].name = e.name);
      t.model.loadingTenant = !1
    })) : (t.model.loading = !0, l.createTenant(t.model.editedTenant).then(function(e) {
      u(e.id), t.model.loading = !1
    }))
  }, t.selectTenant = function(e) {
    t.selectedAlfrescoRepository = void 0, t.selectedAlfrescoRepositoryClone = void 0, t.selectedBasicAuthConfiguration = void 0, t.selectedBasicAuthConfigurationClone = void 0, t.selectedEndpointConfiguration = void 0, t.selectedEndpointConfigurationClone = void 0, t.model.currentTab = "logo", t.model.loadingTenant = !0, t.model.selectedTenant = void 0, t.model.tenantEvents = [], l.getTenant(e).then(function(e) {
      t.model.selectedTenant = e, t.model.loadingTenant = !1, t.loadAlfrescoRepositories()
    })
  }, t.showDeleteTenantModal = function() {
    _internalCreateModal({
      scope: t,
      template: "views/popup/idm-delete-tenant.html",
      show: !0
    }, a, t)
  }, t.showEditTenantModal = function() {
    t.model.editedTenant = t.model.selectedTenant, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-tenant-create.html",
      show: !0
    }, a, t)
  }, t.showUploadTenantLogoModal = function() {
    _internalCreateModal({
      scope: t,
      template: "views/popup/idm-tenant-logo-upload.html",
      show: !0
    }, a, t)
  }, t.deleteTenant = function() {
    t.model.loadingTenant = !0, l.deleteTenant(t.model.selectedTenant.id).then(function() {
      t.model.loadingTenant = !1, c(), u()
    })
  };
  var c = function() {
      delete t.model.tenants, delete t.model.selectedTenant
    },
    u = function(e) {
      null !== t.model.tenants && void 0 !== t.model.tenants && (t.model.tenants.length = 0), t.model.loading = !0, l.getTenants().then(function(o) {
        if (t.model.tenants = o, e)
          for (var n = 0; o.length > n; n++) o[n].id === e && t.selectTenant(e);
        else t.model.lockTenant && o.length > 0 && t.selectTenant(o[0].id);
        t.model.loading = !1
      })
    };
  d && u(), t.selectedAlfrescoRepository = void 0, t.selectedAlfrescoRepositoryClone = void 0;
  var p = o.instant("IDM.TENANT-MGMT.ALFRESCO-REPO-ID"),
    m = o.instant("IDM.TENANT-MGMT.ALFRESCO-REPO-NAME"),
    f = o.instant("IDM.TENANT-MGMT.ALFRESCO-REPO-TENANT"),
    g = o.instant("IDM.TENANT-MGMT.ALFRESCO-REPO-URL"),
    h = [{
      field: "id",
      displayName: p,
      allowCellFocus: !1
    }, {
      field: "name",
      displayName: m,
      allowCellFocus: !1
    }, {
      field: "alfrescoTenantId",
      displayName: f,
      allowCellFocus: !1
    }, {
      field: "repositoryUrl",
      displayName: g,
      allowCellFocus: !1
    }];
  t.gridOptionsAlfrescoRepositories = {
    data: t.alfrescoRepositories.data,
    headerRowHeight: 28,
    enableRowSelection: !0,
    enableCellSelection: !1,
    enableRowHeaderSelection: !1,
    multiSelect: !1,
    modifierKeysToMultiSelect: !1,
    enableHorizontalScrollbar: 0,
    columnDefs: h
  }, t.gridOptionsAlfrescoRepositories.onRegisterApi = function(e) {
    t.gridApiAlfrescoRepositories = e, e.selection.on.rowSelectionChanged(t, function(e) {
      e.isSelected ? (t.selectedAlfrescoRepository = e.entity, t.selectedAlfrescoRepositoryClone = {
        id: e.entity.id,
        name: e.entity.name,
        alfrescoTenantId: e.entity.alfrescoTenantId,
        repositoryUrl: e.entity.repositoryUrl,
        shareUrl: e.entity.shareUrl,
        version: e.entity.version
      }, t.focusFirstFieldAlfrescoRepository()) : (t.selectedAlfrescoRepository = void 0, t.selectedAlfrescoRepositoryClone = void 0)
    })
  }, t.focusFirstFieldAlfrescoRepository = function() {
    i(function() {
      var e = document.getElementById("alfrescoRepoNameField");
      e && e.focus()
    }, 100)
  }, t.showAddNewAlfrescoRepository = function() {
    t.editAlfrescoRepository = {
      name: "",
      tenantId: t.model.selectedTenant.id,
      alfrescoTenantId: "",
      repositoryUrl: "",
      shareUrl: "",
      version: ""
    }, t.gridApiAlfrescoRepositories.selection.clearSelectedRows(), _internalCreateModal({
      scope: t,
      template: "views/popup/idm-tenant-repo-create.html",
      show: !0
    }, a, t)
  }, t.showEditAlfrescoRepository = function() {
    t.editAlfrescoRepository = {
      id: t.selectedAlfrescoRepository.id,
      name: t.selectedAlfrescoRepository.name,
      tenantId: t.selectedAlfrescoRepository.tenantId,
      alfrescoTenantId: t.selectedAlfrescoRepository.alfrescoTenantId,
      repositoryUrl: t.selectedAlfrescoRepository.repositoryUrl,
      shareUrl: t.selectedAlfrescoRepository.shareUrl,
      useShareConnector: t.selectedAlfrescoRepository.useShareConnector,
      secret: null,
      version: t.selectedAlfrescoRepository.version
    }, t.shareConnectorSecretPlaceholder = t.selectedAlfrescoRepository.useShareConnector ? "IDM.TENANT-MGMT.ALFRESCO-REPO-SECRET-PLACEHOLDER" : "", t.gridApiAlfrescoRepositories.selection.clearSelectedRows(), _internalCreateModal({
      scope: t,
      template: "views/popup/idm-tenant-repo-create.html",
      show: !0
    }, a, t)
  }, t.removeAlfrescoRepository = function() {
    t.selectedAlfrescoRepository && l.deleteAlfrescoRepository(t.selectedAlfrescoRepository).then(function() {
      var e = t.alfrescoRepositories.data.indexOf(t.selectedAlfrescoRepository);
      t.gridApiAlfrescoRepositories.selection.toggleRowSelection(t.selectedAlfrescoRepository), t.alfrescoRepositories.data.splice(e, 1), i(function() {
        t.alfrescoRepositories.data.length > 0 ? t.gridApiAlfrescoRepositories.selection.toggleRowSelection(t.alfrescoRepositories.data[0]) : t.selectedAlfrescoRepository = void 0
      })
    })
  }, t.createOrUpdateAlfrescoRepository = function(e) {
    e.id ? l.updateAlfrescoRepository(e).then(function(e) {
      t.selectedAlfrescoRepository.name = e.name, t.selectedAlfrescoRepository.alfrescoTenantId = e.alfrescoTenantId, t.selectedAlfrescoRepository.repositoryUrl = e.repositoryUrl, t.selectedAlfrescoRepository.shareUrl = e.shareUrl, t.selectedAlfrescoRepository.useShareConnector = e.useShareConnector, t.selectedAlfrescoRepository.version = e.version
    }) : l.createAlfrescoRepository(e).then(function(o) {
      e.id = o.id, t.alfrescoRepositories.data.push(e), t.gridApiAlfrescoRepositories.selection.clearSelectedRows(), i(function() {
        t.gridApiAlfrescoRepositories.selection.toggleRowSelection(e)
      })
    })
  }
}]), activitiApp.controller("UploadTenantLogoController", ["$rootScope", "$scope", "Upload", "$modal", function(e, t, o) {
  t.popup = {
    loading: !1
  }, t.onFileSelect = function(e, n) {
    for (var i = 0; e.length > i; i++) {
      var r, a = e[i];
      r = n ? ACTIVITI.CONFIG.contextRoot + "/app/rest/tenants/" + t.model.selectedTenant.id + "/logo/text" : ACTIVITI.CONFIG.contextRoot + "/app/rest/tenants/" + t.model.selectedTenant.id + "/logo", o.upload({
        url: r,
        method: "POST",
        file: a
      }).progress(function(e) {
        t.popup.loading = !0, t.popup.uploadProgress = parseInt(100 * e.loaded / e.total)
      }).success(function(e) {
        t.popup.loading = !1, t.model.selectedTenant.logoImageId = e.id, t.$hide(), t.selectTenant(t.model.selectedTenant.id)
      }).error(function(e) {
        e && e.message && (t.popup.errorMessage = e.message), t.popup.error = !0, t.popup.loading = !1
      })
    }
  }, t.cancel = function() {
    t.popup.loading || t.$hide()
  }
}]), activitiApp.controller("EndpointConfiguratorController", ["$rootScope", "$scope", "$translate", "$timeout", "$modal", "IdmService", function(e, t, o, n, i, r) {
  t.selectedBasicAuthConfiguration = void 0, t.basicAuthConfigurations = [], t.loadBasicAuthentications = function() {
    t.loadingBasicAuths = !0, t.basicAuthConfigurations.length = 0, r.getAllBasicAuthentications(t.model.selectedTenant.id).then(function(e) {
      for (var o = 0; e.length > o; o++) t.basicAuthConfigurations.push(e[o]);
      t.loadingBasicAuths = !1
    })
  };
  var a = o.instant("IDM.TENANT-MGMT.ENDPOINT_CONFIGURATOR.BASIC-AUTH-NAME-HEADER"),
    l = o.instant("IDM.TENANT-MGMT.ENDPOINT_CONFIGURATOR.BASIC-AUTH-USERNAME-HEADER"),
    d = [{
      field: "name",
      displayName: a,
      allowCellFocus: !1
    }, {
      field: "username",
      displayName: l,
      allowCellFocus: !1
    }];
  t.gridOptionsBasicAuth = {
    data: t.basicAuthConfigurations,
    headerRowHeight: 28,
    enableRowSelection: !0,
    enableCellSelection: !1,
    enableRowHeaderSelection: !1,
    multiSelect: !1,
    modifierKeysToMultiSelect: !1,
    enableHorizontalScrollbar: 0,
    columnDefs: d
  }, t.gridOptionsBasicAuth.onRegisterApi = function(e) {
    t.gridApiBasicAuth = e, e.selection.on.rowSelectionChanged(t, function(e) {
      t.selectedBasicAuthConfiguration = e.isSelected ? e.entity : void 0
    })
  }, t.showAddNewBasicAuthConfiguration = function() {
    t.gridApiBasicAuth.selection.clearSelectedRows(), t.editBasicAuthConfiguration = {
      name: "",
      username: "",
      password: ""
    }, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-tenant-basicauth-edit.html",
      show: !0
    }, i, t)
  }, t.showEditBasicAuthConfiguration = function() {
    t.editBasicAuthConfiguration = {
      id: t.selectedBasicAuthConfiguration.id,
      name: t.selectedBasicAuthConfiguration.name,
      username: t.selectedBasicAuthConfiguration.username
    }, t.gridApiBasicAuth.selection.clearSelectedRows(), _internalCreateModal({
      scope: t,
      template: "views/popup/idm-tenant-basicauth-edit.html",
      show: !0
    }, i, t)
  }, t.removeBasicAuthConfiguration = function() {
    t.selectedBasicAuthConfiguration && r.removeBasicAuthConfiguration(t.selectedBasicAuthConfiguration.id, t.model.selectedTenant.id).then(function() {
      var e = t.basicAuthConfigurations.indexOf(t.selectedBasicAuthConfiguration);
      t.gridApiBasicAuth.selection.toggleRowSelection(t.selectedBasicAuthConfiguration), t.basicAuthConfigurations.splice(e, 1), n(function() {
        t.basicAuthConfigurations.length > 0 ? t.gridApiBasicAuth.selection.toggleRowSelection(t.basicAuthConfigurations[0]) : t.selectedBasicAuthConfiguration = void 0
      })
    })
  }, t.createOrUpdateBasicAuthConfiguration = function(e) {
    e.id ? r.updateBasicAuthentication(e, t.model.selectedTenant.id).then(function(e) {
      t.selectedBasicAuthConfiguration.name = e.name, t.selectedBasicAuthConfiguration.username = e.username, n(function() {
        t.gridApiBasicAuth.selection.toggleRowSelection(t.selectedBasicAuthConfiguration)
      });
      for (var o = 0; t.endpointConfigurations.length > o; o++) t.endpointConfigurations[o].basicAuthId === e.id && (t.endpointConfigurations[o].basicAuthName = e.name)
    }) : r.createBasicAuthentication(e, t.model.selectedTenant.id).then(function(o) {
      e.id = o.id, t.basicAuthConfigurations.push(e), t.gridApiBasicAuth.selection.clearSelectedRows(), n(function() {
        t.gridApiBasicAuth.selection.toggleRowSelection(e)
      })
    })
  }, t.loadBasicAuthentications(), t.selectedEndpointConfiguration = void 0, t.endpointConfigurations = [];
  var s = [];
  s.nameLabel = o.instant("IDM.TENANT-MGMT.ENDPOINT_CONFIGURATOR.ENDPOINT-NAME-HEADER"), s.protocolLabel = o.instant("IDM.TENANT-MGMT.ENDPOINT_CONFIGURATOR.ENDPOINT-PROTOCOL-HEADER"), s.hostLabel = o.instant("IDM.TENANT-MGMT.ENDPOINT_CONFIGURATOR.ENDPOINT-HOST-HEADER"), s.portLabel = o.instant("IDM.TENANT-MGMT.ENDPOINT_CONFIGURATOR.ENDPOINT-PORT-HEADER"), s.pathLabel = o.instant("IDM.TENANT-MGMT.ENDPOINT_CONFIGURATOR.ENDPOINT-PATH-HEADER"), s.basicAuthLabel = o.instant("IDM.TENANT-MGMT.ENDPOINT_CONFIGURATOR.ENDPOINT-BASIC-AUTH-HEADER");
  var c = [{
    field: "name",
    displayName: s.nameLabel,
    allowCellFocus: !1
  }, {
    field: "host",
    displayName: s.hostLabel,
    allowCellFocus: !1
  }, {
    field: "path",
    displayName: s.pathLabel,
    allowCellFocus: !1
  }, {
    field: "basicAuthName",
    displayName: s.basicAuthLabel,
    allowCellFocus: !1
  }];
  t.gridOptionsEndpoint = {
    data: t.endpointConfigurations,
    headerRowHeight: 28,
    enableRowSelection: !0,
    enableRowHeaderSelection: !1,
    multiSelect: !1,
    modifierKeysToMultiSelect: !1,
    enableHorizontalScrollbar: 0,
    columnDefs: c
  }, t.gridOptionsEndpoint.onRegisterApi = function(e) {
    t.gridApiEndpoint = e, e.selection.on.rowSelectionChanged(t, function(e) {
      t.selectedEndpointConfiguration = e.isSelected ? e.entity : void 0
    })
  }, t.showAddNewEndpointConfiguration = function() {
    t.gridApiEndpoint.selection.clearSelectedRows(), t.editEndpointConfiguration = {
      name: "",
      protocol: "HTTPS",
      host: "",
      port: "",
      path: "",
      basicAuthId: "",
      basicAuthName: "",
      requestHeaders: []
    }, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-tenant-endpoint-edit.html",
      show: !0
    }, i, t)
  }, t.showEditEndpointConfiguration = function() {
    t.gridApiEndpoint.selection.clearSelectedRows(), t.editEndpointConfiguration = {
      id: t.selectedEndpointConfiguration.id,
      name: t.selectedEndpointConfiguration.name,
      protocol: t.selectedEndpointConfiguration.protocol,
      host: t.selectedEndpointConfiguration.host,
      port: t.selectedEndpointConfiguration.port,
      path: t.selectedEndpointConfiguration.path,
      basicAuthId: t.selectedEndpointConfiguration.basicAuthId,
      basicAuthName: t.selectedEndpointConfiguration.basicAuthName,
      requestHeaders: t.selectedEndpointConfiguration.requestHeaders
    }, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-tenant-endpoint-edit.html",
      show: !0
    }, i, t)
  }, t.removeEndpointConfiguration = function() {
    t.selectedEndpointConfiguration && r.removeEndpointConfiguration(t.selectedEndpointConfiguration.id, t.model.selectedTenant.id).then(function() {
      var e = t.endpointConfigurations.indexOf(t.selectedEndpointConfiguration);
      t.gridApiEndpoint.selection.toggleRowSelection(t.selectedEndpointConfiguration), t.endpointConfigurations.splice(e, 1), n(function() {
        t.endpointConfigurations.length > 0 ? t.gridApiEndpoint.selection.toggleRowSelection(t.endpointConfigurations[0]) : t.selectedEndpointConfiguration = void 0
      })
    })
  }, t.loadEndpointConfigurations = function() {
    t.loadingEndpointConfigurations = !0, t.endpointConfigurations.length = 0, r.getAllEndointConfigurations(t.model.selectedTenant.id).then(function(e) {
      for (var o = 0; e.length > o; o++) t.endpointConfigurations.push(e[o]);
      t.loadingEndpointConfigurations = !1
    })
  }, t.createOrUpdateEndpointConfiguration = function(e) {
    if (e.requestHeaders && e.requestHeaders.length > 0) {
      for (var o = [], i = 0; e.requestHeaders.length > i; i++) e.requestHeaders[i].name && "" !== e.requestHeaders[i].name && o.push(e.requestHeaders[i]);
      e.requestHeaders = o
    }
    e.id ? (r.updateEndpointConfiguration(e, t.model.selectedTenant.id).then(function(e) {
      t.selectedEndpointConfiguration.name = e.name, t.selectedEndpointConfiguration.protocol = e.protocol, t.selectedEndpointConfiguration.host = e.host, t.selectedEndpointConfiguration.port = e.port, t.selectedEndpointConfiguration.path = e.path, t.selectedEndpointConfiguration.basicAuthId = e.basicAuthId, t.selectedEndpointConfiguration.basicAuthName = e.basicAuthName, t.selectedEndpointConfiguration.requestHeaders = e.requestHeaders
    }), n(function() {
      t.gridApiEndpoint.selection.toggleRowSelection(t.selectedEndpointConfiguration)
    })) : r.createEndpointConfiguration(e, t.model.selectedTenant.id).then(function(o) {
      e.id = o.id, e.basicAuthName = o.basicAuthName, t.endpointConfigurations.push(e), t.gridApiEndpoint.selection.clearSelectedRows(), n(function() {
        t.gridApiEndpoint.selection.toggleRowSelection(e)
      })
    })
  }, t.endPointProtocols = [{
    id: "HTTP",
    label: "HTTP"
  }, {
    id: "HTTPS",
    label: "HTTPS"
  }], t.loadEndpointConfigurations()
}]), activitiApp.controller("IdmTenantEventController", ["$rootScope", "$scope", "$modal", "IdmService", function(e, t, o, n) {
  t.model.loadingTenantEvents = !0, n.getTenantEvents(t.model.selectedTenant.id).then(function(e) {
    t.model.tenantEvents = e, t.model.loadingTenantEvents = !1
  })
}]), activitiApp.controller("IdmDocumentTemplateController", ["$rootScope", "$scope", "$modal", "Upload", "$timeout", "DocumentTemplateService", function(e, t, o, n, i, r) {
  t.documentTemplateModel = {
    nameFilter: "",
    sort: "sort_by_name_asc",
    page: 0,
    pageSize: 50,
    possibleSorts: [{
      id: "sort_by_name_asc",
      title: "IDM.TENANT-MGMT.DOCUMENT-TEMPLATE.SORT-NAME-ASC"
    }, {
      id: "sort_by_name_desc",
      title: "IDM.TENANT-MGMT.DOCUMENT-TEMPLATE.SORT-NAME-DESC"
    }, {
      id: "sort_by_create_date_asc",
      title: "IDM.TENANT-MGMT.DOCUMENT-TEMPLATE.SORT-CREATED-ASC"
    }, {
      id: "sort_by_create_date_desc",
      title: "IDM.TENANT-MGMT.DOCUMENT-TEMPLATE.SORT-CREATED-DESC"
    }]
  };
  var a = function() {
    t.documentTemplateModel.loadingDocumentTemplates = !0, r.findAllDocumentTemplates(t.model.selectedTenant.id, t.documentTemplateModel.nameFilter, t.documentTemplateModel.sort, t.documentTemplateModel.page, t.documentTemplateModel.pageSize).then(function(e) {
      t.documentTemplateModel.templates = e, t.documentTemplateModel.moreTemplates = e.total > (t.documentTemplateModel.page + 1) * t.documentTemplateModel.pageSize;
      for (var o = 0; t.documentTemplateModel.templates.data.length > o; o++) t.documentTemplateModel.templates.data[o].downloadUrl = ACTIVITI.CONFIG.contextRoot + "/app/rest/document-templates/" + t.documentTemplateModel.templates.data[o].id + "/file?version=" + Date.now();
      t.documentTemplateModel.loadingDocumentTemplates = !1
    })
  };
  t.showUploadTemplateModal = function() {
    t.documentTemplateModel.selectedDocumentTemplate = void 0, t.showUploadTemplateModalInternal()
  }, t.showUploadTemplateModalInternal = function() {
    t.documentTemplateModel.error = void 0, t.documentTemplateModel.errorMessage = void 0, t.uploadNewPopup = _internalCreateModal({
      template: "views/popup/upload-new-document-template.html?version=" + Date.now(),
      scope: t
    }, o, t)
  }, t.cancelUploadNew = function() {
    t.uploadNewPopup.$scope.$hide(), t.documentTemplateModel.selectedDocumentTemplate = void 0
  }, t.sortChanged = function() {
    t.documentTemplateModel.page = 0, a()
  }, t.refreshDelayed = function() {
    t.model.waiting ? t.model.delayed = !0 : t.scheduleDelayedRefresh()
  }, t.scheduleDelayedRefresh = function() {
    t.model.waiting = !0, i(function() {
      t.model.waiting = !1, t.model.delayed ? (t.model.delayed = !1, t.scheduleDelayedRefresh()) : (t.documentTemplateModel.page = 0, a())
    }, 100)
  }, t.onNewUploadSelected = function(e, o) {
    for (var i = 0; e.length > i; i++) {
      var r = e[i],
        l = ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/document-templates";
      null !== t.documentTemplateModel.selectedDocumentTemplate && void 0 !== t.documentTemplateModel.selectedDocumentTemplate && (l += "/" + t.documentTemplateModel.selectedDocumentTemplate.id), o && (l += "/text"), n.upload({
        url: l,
        method: "POST",
        params: {
          tenantId: t.model.selectedTenant.id
        },
        file: r
      }).progress(function(e) {
        t.model.loading = !0, t.model.uploadProgress = parseInt(100 * e.loaded / e.total)
      }).success(function() {
        t.documentTemplateModel.sort = "sort_by_create_date_desc", t.documentTemplateModel.page = 0, a(), t.model.loading = !1, t.uploadNewPopup.$scope.$hide()
      }).error(function(e) {
        e && e.message && (t.documentTemplateModel.errorMessage = e.message), t.documentTemplateModel.error = !0, t.model.loading = !1
      })
    }
  }, t.showPreviousTemplates = function() {
    t.documentTemplateModel.page--, a()
  }, t.showNextTemplates = function() {
    t.documentTemplateModel.page++, a()
  }, t.showUploadNewDocumentTemplateVersion = function(e) {
    t.documentTemplateModel.selectedDocumentTemplate = e, t.showUploadTemplateModalInternal()
  }, t.showDeleteTemplateModal = function(e) {
    t.documentTemplateModel.documentTemplateToDelete = e, _internalCreateModal({
      scope: t,
      template: "views/popup/delete-document-template.html?version=" + Date.now(),
      show: !0
    }, o, t)
  }, t.deleteDocumentTemplate = function() {
    r.deleteDocumentTemplate(t.documentTemplateModel.documentTemplateToDelete.id).then(function() {
      t.documentTemplateModel.documentTemplateToDelete = void 0, a()
    })
  }, a()
}]), activitiApp.controller("IdmTenantConfigController", ["$rootScope", "$scope", "$modal", "Upload", "$timeout", "$translate", "IdmService", function(e, t, o, n, i, r, a) {
  t.tenantConfigs = {
    data: []
  }, t.model.boxMetaDataSupport = !1, t.model.decisionTableValidation = !0, t.loadTenantConfigs = function() {
    var e = t.model.selectedTenant.id;
    t.tenantConfigs.data.length = 0, t.model.boxMetaDataSupportProperty = {
      propertyKey: "boxMetaDataSupport",
      propertyValue: !1,
      tenantId: e
    }, t.model.decisionTableValidationProperty = {
      propertyKey: "validator.editor.dmn.expression",
      propertyValue: !1,
      tenantId: e
    }, a.getAllTenantConfigs(e).then(function(e) {
      for (var o = 0; e.data.length > o; o++) "boxMetaDataSupport" === e.data[o].propertyKey ? (t.model.boxMetaDataSupportProperty = e.data[o], t.model.boxMetaDataSupport = t.model.boxMetaDataSupportProperty.propertyValue) : "validator.editor.dmn.expression" === e.data[o].propertyKey && (t.model.decisionTableValidationProperty = e.data[o], t.model.decisionTableValidation = t.model.decisionTableValidationProperty.propertyValue)
    })
  }, t.updateBoxMetaDataSupport = function() {
    t.model.boxMetaDataSupportProperty.propertyValue = t.model.boxMetaDataSupport, t.createOrUpdateTenantConfig(t.model.boxMetaDataSupportProperty)
  }, t.updateDecisionTableValidation = function() {
    t.model.decisionTableValidationProperty.propertyValue = t.model.decisionTableValidation, t.createOrUpdateTenantConfig(t.model.decisionTableValidationProperty)
  }, t.createOrUpdateTenantConfig = function(e) {
    if (e.id) a.updateTenantConfig(e).then(function(e) {
      "boxMetaDataSupport" === e.propertyKey ? t.model.boxMetaDataSupportProperty = e : "validator.editor.dmn.expression" === e.propertyKey && (t.model.decisionTableValidationProperty = e)
    });
    else {
      var o = {
        propertyKey: e.propertyKey,
        propertyValue: e.propertyValue,
        tenantId: t.model.selectedTenant.id
      };
      a.createTenantConfig(o).then(function(e) {
        "boxMetaDataSupport" === e.propertyKey ? t.model.boxMetaDataSupportProperty = e : "validator.editor.dmn.expression" === e.propertyKey && (t.model.decisionTableValidationProperty = e)
      })
    }
  }, t.loadTenantConfigs()
}]), activitiApp.controller("EndpointRequestHeadersController", ["$rootScope", "$scope", "$q", "$translate", "$http", "$timeout", "$location", "$modal", "$routeParams", "$popover", "uiGridConstants", function(e, t, o, n, i, r, a, l, d, s, c) {
  t.selectedRequestHeaders = [], t.labels = [], t.showRequestHeaders = !0, t.editEndpointConfiguration.requestHeaders && 0 !== t.editEndpointConfiguration.requestHeaders.length || (t.editEndpointConfiguration.requestHeaders = [], t.showRequestHeaders = !1), t.selectedRequestHeader = void 0, t.labels.nameLabel = n.instant("IDM.TENANT-MGMT.ENDPOINT_CONFIGURATOR.REQUEST-HEADER-NAME"), t.labels.valueLabel = n.instant("IDM.TENANT-MGMT.ENDPOINT_CONFIGURATOR.REQUEST-HEADER-VALUE"), t.gridOptions = {
    data: t.editEndpointConfiguration.requestHeaders,
    headerRowHeight: 28,
    enableRowSelection: !0,
    enableRowHeaderSelection: !1,
    multiSelect: !1,
    modifierKeysToMultiSelect: !1,
    enableHorizontalScrollbar: 0,
    enableColumnMenus: !1,
    enableSorting: !1,
    columnDefs: [{
      field: "name",
      displayName: t.labels.nameLabel,
      cellClass: function(e, t, o) {
        return "" === e.getCellValue(t, o) || 0 == e.getCellValue(t, o) ? "dynamicTable-cellError" : void 0
      }
    }, {
      field: "value",
      displayName: t.labels.valueLabel,
      cellClass: function(e, t, o) {
        return "" === e.getCellValue(t, o) || 0 == e.getCellValue(t, o) ? "dynamicTable-cellError" : void 0
      }
    }]
  }, t.gridOptions.onRegisterApi = function(e) {
    t.gridApi = e, e.selection.on.rowSelectionChanged(t, function(e) {
      t.selectedRequestHeader = e.entity, t.focusFirstField()
    })
  }, t.focusFirstField = function() {
    r(function() {
      var e = document.getElementById("headerName");
      e && e.focus()
    }, 100)
  }, t.$watch("selectedRequestHeader.name", function() {
    t.gridApi.core.notifyDataChange(c.dataChange.ALL)
  }, !0), t.$watch("selectedRequestHeader.value", function() {
    t.gridApi.core.notifyDataChange(c.dataChange.ALL)
  }, !0), t.removeDynamicTableOption = function(e) {
    t.selectedRequestHeader.options.splice(e, 1)
  }, t.addNewDefinition = function() {
    var e = {
      name: "",
      value: ""
    };
    t.editEndpointConfiguration.requestHeaders.push(e), t.gridApi.selection.clearSelectedRows(), r(function() {
      t.gridApi.selection.toggleRowSelection(e)
    })
  }, t.removeDefinition = function() {
    if (t.selectedRequestHeader) {
      var e = t.editEndpointConfiguration.requestHeaders.indexOf(t.selectedRequestHeader);
      t.gridApi.selection.toggleRowSelection(t.selectedRequestHeader), t.editEndpointConfiguration.requestHeaders.splice(e, 1), r(function() {
        t.editEndpointConfiguration.requestHeaders.length > 0 ? t.gridApi.selection.toggleRowSelection(t.editEndpointConfiguration.requestHeaders[0]) : t.selectedRequestHeader = void 0
      })
    }
  }, t.moveDefinitionUp = function() {
    if (t.selectedRequestHeader) {
      var e = t.editEndpointConfiguration.requestHeaders.indexOf(t.selectedRequestHeader);
      if (0 != e) {
        var o = t.editEndpointConfiguration.requestHeaders[e];
        t.editEndpointConfiguration.requestHeaders.splice(e, 1), t.gridApi.selection.clearSelectedRows(), r(function() {
          t.editEndpointConfiguration.requestHeaders.splice(e + -1, 0, o), r(function() {
            t.gridApi.selection.toggleRowSelection(o)
          })
        })
      }
    }
  }, t.moveDefinitionDown = function() {
    if (t.selectedRequestHeader) {
      var e = t.editEndpointConfiguration.requestHeaders.indexOf(t.selectedRequestHeader);
      if (e != t.editEndpointConfiguration.requestHeaders.length - 1) {
        var o = t.editEndpointConfiguration.requestHeaders[e];
        t.editEndpointConfiguration.requestHeaders.splice(e, 1), t.gridApi.selection.clearSelectedRows(), r(function() {
          t.editEndpointConfiguration.requestHeaders.splice(e + 1, 0, o), r(function() {
            t.gridApi.selection.toggleRowSelection(o)
          })
        })
      }
    }
  }
}]), activitiApp.controller("IdmUserMgmtController", ["$rootScope", "$scope", "$translate", "$http", "$timeout", "$location", "$modal", "IdmService", function(e, t, o, n, i, r, a, l) {
  if (e.hasTenantManagementCapability() || e.hasTenantAdminCapability() || r.path("/profile"), e.setMainPageById("userMgmt"), t.model = {
    loading: !1,
    statusFilters: [{
      id: "all",
      name: o.instant("IDM.USER-MGMT.FILTERS.STATUS-ANY")
    }, {
      id: "active",
      name: o.instant("IDM.USER-MGMT.FILTERS.STATUS-ACTIVE")
    }, {
      id: "inactive",
      name: o.instant("IDM.USER-MGMT.FILTERS.STATUS-INACTIVE")
    }, {
      id: "pending",
      name: o.instant("IDM.USER-MGMT.FILTERS.STATUS-PENDING")
    }, {
      id: "deleted",
      name: o.instant("IDM.USER-MGMT.FILTERS.STATUS-DELETED")
    }],
    typeFilters: [{
      id: "all",
      name: o.instant("IDM.USER-MGMT.FILTERS.TYPE-ANY")
    }, {
      id: "trial",
      name: o.instant("IDM.USER-MGMT.FILTERS.TYPE-TRIAL")
    }, {
      id: "enterprise",
      name: o.instant("IDM.USER-MGMT.FILTERS.TYPE-ENTERPRISE")
    }],
    sorts: [{
      id: "createdDesc",
      name: o.instant("IDM.USER-MGMT.FILTERS.SORT-DATE-NEWEST")
    }, {
      id: "createdAsc",
      name: o.instant("IDM.USER-MGMT.FILTERS.SORT-DATE-OLDEST")
    }, {
      id: "emailAsc",
      name: o.instant("IDM.USER-MGMT.FILTERS.SORT-EMAIL-A")
    }, {
      id: "emailDesc",
      name: o.instant("IDM.USER-MGMT.FILTERS.SORT-EMAIL-Z")
    }],
    waiting: !1,
    delayed: !1,
    selectedUsers: {},
    selectedUserCount: 0,
    start: 0
  }, t.model.activeStatusFilter = t.model.statusFilters[0], t.model.activeTypeFilter = t.model.typeFilters[0], t.model.activeSort = t.model.sorts[0], t.loadUserSummary = function() {
    t.model.loading = !0;
    var o = {}; - 1 !== e.common.selectedTenantId && (o.tenantId = e.common.selectedTenantId), n({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/users/summary",
      params: o
    }).success(function(e) {
      t.model.summary = e
    }).error(function(t, o) {
      403 == o && e.backToLanding()
    })
  }, t.clearSelectedUsers = function() {
    t.model.selectedUsers = {}, t.model.selectedUserCount = 0
  }, t.loadUsers = function() {
    t.clearSelectedUsers(), t.model.loading = !0;
    var o = {
      status: t.model.activeStatusFilter.id,
      accountType: t.model.activeTypeFilter.id,
      filter: t.model.pendingFilterText,
      company: t.model.pendingCompanyText,
      sort: t.model.activeSort.id,
      start: t.model.start
    }; - 1 !== e.common.selectedTenantId && (o.tenantId = e.common.selectedTenantId), n({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/users",
      params: o
    }).success(function(e) {
      e.moreUsers = e.start + e.size < e.total, t.model.users = e, t.model.loading = !1
    }).error(function(e, o) {
      t.model.loading = !1, 403 == o && console.log("Forbidden!")
    })
  }, t.refreshDelayed = function() {
    t.model.waiting ? t.model.delayed = !0 : t.scheduleDelayedRefresh()
  }, t.scheduleDelayedRefresh = function() {
    t.model.waiting = !0, i(function() {
      t.model.waiting = !1, t.model.delayed ? (t.model.delayed = !1, t.scheduleDelayedRefresh()) : (t.model.start = 0, t.loadUsers(), t.loadUserSummary())
    }, 100)
  }, t.showNextUsers = function() {
    t.model.users && (t.model.start = t.model.users.start + t.model.users.size, t.loadUsers())
  }, t.showPreviousUsers = function() {
    t.model.users && (t.model.start = Math.max(0, t.model.users.start - t.model.users.size), t.loadUsers())
  }, t.activateStatusFilter = function(e) {
    t.model.activeStatusFilter = e, t.model.start = 0, t.loadUsers()
  }, t.activateTypeFilter = function(e) {
    t.model.activeTypeFilter = e, t.model.start = 0, t.loadUsers()
  }, t.activateSort = function(e) {
    t.model.activeSort = e, t.model.start = 0, t.loadUsers()
  }, t.toggleUserSelection = function(e) {
    t.model.selectedUsers[e.id] ? (delete t.model.selectedUsers[e.id], t.model.selectedUserCount -= 1) : (t.model.selectedUsers[e.id] = !0, t.model.selectedUserCount += 1)
  }, t.editUserStatus = function() {
    t.model.mode = "status", _internalCreateModal({
      scope: t,
      template: "views/popup/idm-user-status-edit.html",
      show: !0
    }, a, t)
  }, t.addUser = function() {
    t.model.errorMessage = void 0, t.model.user = void 0, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-user-create.html?version=" + (new Date).getTime(),
      show: !0
    }, a, t)
  }, t.editUserAccountType = function() {
    t.model.mode = "type", _internalCreateModal({
      scope: t,
      template: "views/popup/idm-user-type-edit.html",
      show: !0
    }, a, t)
  }, t.editUserDetails = function() {
    t.model.user = void 0;
    var e = t.getSelectedUsers();
    e && 1 == e.length && (t.model.user = e[0]), t.model.errorMessage = void 0, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-user-create.html?version=" + (new Date).getTime(),
      show: !0
    }, a, t)
  }, t.editUserPassword = function() {
    t.model.mode = "password", _internalCreateModal({
      scope: t,
      template: "views/popup/idm-user-password-change.html",
      show: !0
    }, a, t)
  }, t.editUserTenant = function() {
    t.model.mode = "tenant", _internalCreateModal({
      scope: t,
      template: "views/popup/idm-user-tenant-change.html",
      show: !0
    }, a, t)
  }, t.getSelectedUsers = function() {
    for (var e = [], o = 0; t.model.users.size > o; o++) {
      var n = t.model.users.data[o];
      if (n)
        for (var i in t.model.selectedUsers)
          if (n.id == i) {
            e.push(n);
            break
          }
    }
    return e
  }, t.getTenantNameForUser = function(e) {
    if (t.model.tenants && e.tenantId)
      for (var o = 0; t.model.tenants.length > o; o++)
        if (t.model.tenants[o].id === e.tenantId) return t.model.tenants[o].name;
    return ""
  }, t.hasTenantManagementCapability()) {
    var d = function() {
      t.model.loading = !0, l.getTenants().then(function(n) {
        if (t.model.tenants = [{
          id: -1,
          name: o.instant("IDM.GENERAL.NO-TENANT")
        }], e.common.selectedTenantId || (e.common.selectedTenantId = -1), n && n.length > 0)
          for (var i = 0; n.length > i; i++) t.model.tenants.push(n[i]);
        t.model.loading = !1
      })
    };
    d()
  } else t.hasTenantAdminCapability && (e.common.selectedTenantId = t.account.tenantId);
  t.loadUsers(), t.loadUserSummary()
}]), activitiApp.controller("IdmCreateUserPopupController", ["$rootScope", "$scope", "$http", function(e, t, o) {
  (null === t.model.user || void 0 === t.model.user) && (t.model.user = {
    status: t.model.statusFilters[1],
    type: t.model.typeFilters[2],
    tenantId: -1
  }, t.hasTenantAdminCapability() && (t.model.user.tenantId = e.common.selectedTenantId)), t.createNewUser = function() {
    if (t.model.user.email && t.model.user.status && t.model.user.type) {
      var n = t.model;
      n.loading = !0;
      var i = {
        email: n.user.email,
        firstName: n.user.firstName,
        lastName: n.user.lastName,
        status: n.user.status.id,
        type: n.user.type.id,
        password: n.user.password,
        company: n.user.company
      };
      t.model.user.tenantId > 0 && (i.tenantId = t.model.user.tenantId), o({
        method: "POST",
        url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/users",
        data: i
      }).success(function() {
        e.addAlert("New user created", "info"), t.loadUsers(), t.loadUserSummary(), t.model.loading = !1, t.$hide()
      }).error(function(o, n) {
        t.model.loading = !1, o && o.message ? e.addAlert(o.message, "error") : e.addAlert("Error while updating user status", "error"), 403 == n ? t.model.errorMessage = "Forbidden" : 409 == n ? t.model.errorMessage = "A user with that email address already exists" : t.$hide()
      })
    }
  }, t.editUserDetails = function() {
    if (t.model.user.email) {
      var n = t.model;
      n.loading = !0;
      var i = {
        email: n.user.email,
        firstName: n.user.firstName,
        lastName: n.user.lastName,
        company: n.user.company
      };
      o({
        method: "PUT",
        url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/users/" + t.model.user.id,
        data: i
      }).success(function() {
        t.loadUsers(), t.loadUserSummary(), t.model.loading = !1, t.$hide()
      }).error(function(o, n) {
        t.model.loading = !1, o && o.message ? e.addAlert(o.message, "error") : e.addAlert("Error while updating user status", "error"), 403 == n ? t.model.errorMessage = "Forbidden" : 409 == n ? t.model.errorMessage = "A user with that email address already exists" : t.$hide()
      })
    }
  }, t.setStatus = function(e) {
    t.model.user.status = e
  }, t.setType = function(e) {
    t.model.user.type = e
  }, t.cancel = function() {
    t.model.loading || t.$hide()
  }
}]), activitiApp.controller("IdmUserBulkUpdatePopupController", ["$rootScope", "$scope", "$http", function(e, t, o) {
  t.model.updateUsers = "status" == t.model.mode ? {
    status: t.model.statusFilters[1],
    sendNotifications: !1
  } : "type" == t.model.mode ? {
    type: t.model.typeFilters[1]
  } : "password" == t.model.mode ? {
    password: ""
  } : {
    tenantId: e.common.selectedTenantId
  }, t.updateUsers = function() {
    t.model.loading = !0;
    for (var n = t.getSelectedUsers(), i = [], r = 0; n.length > r; r++) {
      var a = n[r];
      a && a.id && i.push(a.id)
    }
    var l = {
      users: i
    };
    "status" == t.model.mode ? (l.status = t.model.updateUsers.status.id, l.sendNotifications = t.model.updateUsers.sendNotifications) : "type" == t.model.mode ? l.accountType = t.model.updateUsers.type.id : "password" == t.model.mode ? l.password = t.model.updateUsers.password : l.tenantId = t.model.updateUsers.tenantId, o({
      method: "PUT",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/users",
      data: l
    }).success(function() {
      t.$hide(), t.model.loading = !1, e.addAlert(t.model.selectedUserCount + " user(s) updated", "info"), t.loadUsers(), t.loadUserSummary()
    }).error(function(o, n) {
      t.model.loading = !1, o && o.message ? e.addAlert(o.message, "error") : e.addAlert("Error while updating user status", "error"), t.$hide(), 403 == n && console.log("Not permitted!")
    })
  }, t.setStatus = function(e) {
    t.model.updateUsers.status = e
  }, t.setType = function(e) {
    t.model.updateUsers.type = e
  }, t.cancel = function() {
    t.model.loading || t.$hide()
  }
}]), activitiApp.controller("IdmSystemGroupMgmtController", ["$rootScope", "$scope", "$translate", "$http", "$timeout", "$location", "$modal", "$popover", "IdmService", function(e, t, o, n, i, r, a, l, d) {
  var s = !0;
  e.hasTenantManagementCapability() || e.hasTenantAdminCapability() || (s = !1, r.path("/profile")), e.setMainPageById("systemGroupMgmt"), t.model = {
    loading: !0
  }, t.showCreateGroupPopup = function() {
    t.model.editedGroup = {}, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-group-create.html",
      show: !0
    }, a, t)
  };
  var c = function() {
      t.model.loadingUsers = !0, d.getUsersForGroup(t.model.selectedGroup.id, t.model.userFilter, t.model.userPage, t.model.pageSize).then(function(e) {
        t.model.users = e, t.model.moreUsers = t.model.selectedGroup.userCount > (t.model.userPage + 1) * t.model.pageSize, t.model.loadingUsers = !1
      })
    },
    u = function() {
      t.model.loadingGroups = !0, d.getGroupsForSystemGroup(t.model.selectedGroup.id).then(function(e) {
        t.model.organizationalGroups = e, t.model.currentGroupIds = [];
        for (var o = 0; e.length > o; o++) t.model.currentGroupIds.push(e[o].id);
        t.model.loadingGroups = !1
      })
    };
  t.selectGroup = function(e) {
    t.model.loadingGroup = !0, d.getGroup(e, !1).then(function(e) {
      t.model.selectedGroup = e, t.model.loadingGroup = !1, t.model.userPage = 0, t.model.pageSize = 50, c(), u()
    })
  }, t.showPreviousUsers = function() {
    t.model.userPage--, c()
  }, t.showNextUsers = function() {
    t.model.userPage++, c()
  }, t.refreshDelayed = function() {
    t.model.waiting ? t.model.delayed = !0 : t.scheduleDelayedRefresh()
  }, t.scheduleDelayedRefresh = function() {
    t.model.waiting = !0, i(function() {
      t.model.waiting = !1, t.model.delayed ? (t.model.delayed = !1, t.scheduleDelayedRefresh()) : (t.model.userPage = 0, c())
    }, 100)
  }, t.saveGroup = function() {
    t.model.editedGroup.id ? (t.model.loadingGroup = !0, d.updateGroup(t.model.editedGroup.id, e.common.selectedTenantId, t.model.editedGroup).then(function(e) {
      t.model.selectedGroup = e;
      for (var o = 0; t.model.groups.length > o; o++) t.model.groups[o].id === e.id && (t.model.groups[o].name = e.name);
      t.model.loadingGroup = !1
    })) : (t.model.loading = !0, d.createGroup(t.model.editedGroup, e.common.selectedTenantId).then(function(e) {
      t.fetchGroups(e.id), t.model.loading = !1
    }))
  }, t.showDeleteGroupModal = function() {
    _internalCreateModal({
      scope: t,
      template: "views/popup/idm-delete-group.html",
      show: !0
    }, a, t)
  }, t.deleteGroup = function() {
    t.model.loading = !0, d.deleteGroup(t.model.selectedGroup.id).then(function() {
      t.model.loading = !1, p(), t.fetchGroups()
    })
  };
  var p = function() {
    delete t.model.groups, delete t.model.selectedGroup
  };
  if (t.showEditGroupModal = function() {
    t.model.editedGroup = t.model.selectedGroup, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-group-create.html",
      show: !0
    }, a, t)
  }, t.showRemoveMemberModal = function(e) {
    t.model.userToRemove = e, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-group-member-delete.html",
      show: !0
    }, a, t)
  }, t.deleteGroupMember = function() {
    d.deleteGroupMember(t.model.selectedGroup.id, t.model.userToRemove.id).then(function() {
      for (var e = 0; t.model.users.data.length > e; e++)
        if (t.model.users.data[e].id === t.model.userToRemove.id) {
          t.model.users.data.splice(e, 1), delete t.model.userToRemove;
          break
        }
      c()
    })
  }, t.addGroupMember = function(e) {
    d.addGroupMember(t.model.selectedGroup.id, e.id).then(function() {
      t.selectGroup(t.model.selectedGroup.id)
    })
  }, t.addAllUsers = function() {
    t.model.loadingUsers = !0, d.addAllUsers(t.model.selectedGroup.id).then(function() {
      t.model.loadingUsers = !1, t.selectGroup(t.model.selectedGroup.id)
    })
  }, t.showRemoveCapabilityModal = function(e) {
    t.model.capabilityToRemove = e, t.deleteCapabilityModal = _internalCreateModal({
      scope: t,
      template: "views/popup/idm-group-capability-delete.html",
      show: !0
    }, a, t)
  }, t.deleteCapability = function() {
    t.model.deletingCapability = !0, d.deleteGroupCapability(t.model.selectedGroup.id, t.model.capabilityToRemove.id).then(function() {
      for (var e = 0; t.model.selectedGroup.capabilities.length > e; e++)
        if (t.model.selectedGroup.capabilities[e].id === t.model.capabilityToRemove.id) {
          t.model.selectedGroup.capabilities.splice(e, 1), delete t.model.capabilityToRemove;
          break
        }
      t.model.deletingCapability = !1, t.deleteCapabilityModal.hide()
    })
  }, t.showAddCapabilityPopover = function(e) {
    t.addCapabilityPopover && (t.addCapabilityPopover.$scope.$destroy(), t.addCapabilityPopover.destroy(), delete t.addCapabilityPopover), t.addCapabilityPopover = l(angular.element(e.target), {
      template: "views/popover/add-group-capability-popover.html",
      placement: "bottom-left",
      show: !0,
      scope: t
    }), t.addCapabilityPopover.$scope.$on("tooltip.hide", function() {
      t.addCapabilityPopover.$scope.$destroy(), t.addCapabilityPopover.destroy(), delete t.addCapabilityPopover
    })
  }, t.addOrganizationalGroup = function(e) {
    d.addGroupToSystemGroup(t.model.selectedGroup.id, e.id).then(function() {
      u()
    })
  }, t.deleteOrganizationalGroup = function(e) {
    t.model.loadingGroups = !0, d.deleteGroupFromSystemGroup(t.model.selectedGroup.id, e.id).then(function() {
      u()
    })
  }, t.fetchGroups = function(o) {
    t.model.loading = !0, p();
    var n; - 1 !== e.common.selectedTenantId && (n = e.common.selectedTenantId), d.getGroups(n).then(function(e) {
      if (t.model.groups = e, o)
        for (var n = 0; e.length > n; n++) e[n].id === o && t.selectGroup(o);
      t.model.loading = !1
    })
  }, t.hasTenantManagementCapability()) {
    var m = function() {
      t.model.loading = !0, d.getTenants().then(function(n) {
        if (t.model.tenants = [{
          id: -1,
          name: o.instant("IDM.GENERAL.NO-TENANT")
        }], e.common.selectedTenantId || (e.common.selectedTenantId = -1), n && n.length > 0) {
          for (var i = 0; n.length > i; i++) t.model.tenants.push(n[i]);
          t.model.loading = !1
        }
      })
    };
    m()
  } else t.hasTenantAdminCapability && (e.common.selectedTenantId = t.account.tenantId);
  s && t.fetchGroups()
}]), activitiApp.controller("AddCapabilityPopoverController", ["$rootScope", "$scope", "$translate", "$q", "IdmService", function(e, t, o, n, i) {
  t.model.capabilitiesLoading = !0, t.model.selectedCapabilities = [], t.model.potentialCapabilities = [], t.model.nrSelectedCapabilities = 0, i.getPotentialCapabilities(t.model.selectedGroup.id).then(function(e) {
    t.model.potentialCapabilities = e, t.model.capabilitiesLoading = !1
  }), t.selectCapability = function(e) {
    var o = t.model.selectedCapabilities.indexOf(e);
    o >= 0 ? t.model.selectedCapabilities.splice(o, 1) : t.model.selectedCapabilities.push(e), t.model.nrSelectedCapabilities = t.model.selectedCapabilities.length
  }, t.isSelectedCapability = function(e) {
    return t.model.selectedCapabilities.indexOf(e) >= 0
  }, t.addCapabilitiesToGroup = function() {
    t.model.capabilitiesLoading = !0, i.addGroupCapabilities(t.model.selectedGroup.id, t.model.selectedCapabilities).then(function() {
      t.addCapabilityPopover.$scope.$destroy(), t.addCapabilityPopover.destroy(), t.addCapabilityPopover = void 0, t.model.capabilitiesLoading = !1, e.addAlertPromise(o("IDM.SYSTEM-GROUP-MGMT.CAPABILITIES-ADDED")), t.selectGroup(t.model.selectedGroup.id)
    })
  }
}]), activitiApp.controller("IdmFunctionalGroupMgmtController", ["$rootScope", "$scope", "$translate", "$http", "$timeout", "$location", "$modal", "$popover", "IdmService", function(e, t, o, n, i, r, a, l, d) {
  var s = !0;
  e.hasTenantManagementCapability() || e.hasTenantAdminCapability() || (s = !1, r.path("/profile")), e.setMainPageById("functionalGroupMgmt"), t.model = {
    loading: !0,
    expanded: {}
  }, t.showCreateGroupPopup = function() {
    t.model.editedGroup = {}, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-group-create.html",
      show: !0
    }, a, t)
  }, t.groupListToParentMap = function(e) {
    var t = function(e, o, n) {
        if (e && e.length > 0)
          for (var i = 0; e.length > i; i++) o && (n[e[i].id] = o), t(e[i].groups, e[i], n)
      },
      o = {};
    return t(e, void 0, o), o
  };
  var c = function() {
    t.model.loadingUsers = !0, d.getUsersForGroup(t.model.selectedGroup.id, t.model.userFilter, t.model.userPage, t.model.pageSize).then(function(e) {
      t.model.users = e, t.model.moreUsers = t.model.selectedGroup.userCount > (t.model.userPage + 1) * t.model.pageSize, t.model.loadingUsers = !1
    })
  };
  t.selectGroup = function(e, o) {
    var n = !0;
    (null === o || void 0 === o || o === !1) && e && t.model.selectedGroup && e === t.model.selectedGroup.id && (n = !1);
    var i = function() {
      var e = t.model.expanded[t.model.selectedGroup.id];
      t.model.expanded[t.model.selectedGroup.id] = null === e || void 0 === e ? !0 : !e
    };
    n ? (t.model.loadingGroup = !0, d.getGroup(e).then(function(e) {
      t.model.selectedGroup = e, t.model.expanded[e.id] = !0;
      for (var o = t.groupListToParentMap(t.model.groups), n = o[e.id]; n;) t.model.expanded[n.id] = !0, n = o[n.id];
      t.model.userPage = 0, t.model.pageSize = 50, c(), t.model.loadingGroup = !1
    })) : i()
  }, t.showPreviousUsers = function() {
    t.model.userPage--, c()
  }, t.showNextUsers = function() {
    t.model.userPage++, c()
  }, t.refreshDelayed = function() {
    t.model.waiting ? t.model.delayed = !0 : t.scheduleDelayedRefresh()
  }, t.scheduleDelayedRefresh = function() {
    t.model.waiting = !0, i(function() {
      t.model.waiting = !1, t.model.delayed ? (t.model.delayed = !1, t.scheduleDelayedRefresh()) : (t.model.userPage = 0, c())
    }, 100)
  }, t.saveGroup = function() {
    t.model.editedGroup.id ? (t.model.loadingGroup = !0, d.updateGroup(t.model.editedGroup.id, e.common.selectedTenantId, t.model.editedGroup).then(function(e) {
      t.model.selectedGroup = e;
      for (var o = 0; t.model.groups.length > o; o++) t.model.groups[o].id === e.id && (t.model.groups[o].name = e.name);
      t.model.loadingGroup = !1
    })) : (t.model.loading = !0, d.createGroup(t.model.editedGroup, e.common.selectedTenantId, 1).then(function(e) {
      t.fetchGroups(e.id), t.model.loading = !1
    }))
  }, t.showDeleteGroupModal = function() {
    _internalCreateModal({
      scope: t,
      template: "views/popup/idm-delete-group.html",
      show: !0
    }, a, t)
  }, t.deleteGroup = function() {
    t.model.loading = !0, d.deleteGroup(t.model.selectedGroup.id).then(function() {
      t.model.loading = !1, u(), t.fetchGroups()
    })
  }, t.showActivateGroupModal = function() {
    _internalCreateModal({
      scope: t,
      template: "views/popup/idm-activate-group.html",
      show: !0
    }, a, t)
  }, t.activateGroup = function() {
    t.model.loading = !0, d.activateGroup(t.model.selectedGroup.id).then(function() {
      t.model.loading = !1, u(), t.fetchGroups()
    })
  };
  var u = function() {
    delete t.model.groups, delete t.model.selectedGroup
  };
  if (t.showEditGroupModal = function() {
    t.model.editedGroup = t.model.selectedGroup, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-group-create.html",
      show: !0
    }, a, t)
  }, t.showRemoveMemberModal = function(e) {
    t.model.userToRemove = e, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-group-member-delete.html",
      show: !0
    }, a, t)
  }, t.deleteGroupMember = function() {
    d.deleteGroupMember(t.model.selectedGroup.id, t.model.userToRemove.id).then(function() {
      for (var e = 0; t.model.users.data.length > e; e++)
        if (t.model.users.data[e].id === t.model.userToRemove.id) {
          t.model.users.data.splice(e, 1), delete t.model.userToRemove;
          break
        }
      c()
    })
  }, t.addGroupMember = function(e) {
    d.addGroupMember(t.model.selectedGroup.id, e.id).then(function() {
      t.selectGroup(t.model.selectedGroup.id, !0)
    })
  }, t.showCreateSubgroupPopup = function() {
    t.model.editedGroup = {
      parentGroupId: t.model.selectedGroup.id
    }, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-group-create.html",
      show: !0
    }, a, t)
  }, t.fetchGroups = function(o) {
    t.model.loading = !0, u();
    var n; - 1 !== e.common.selectedTenantId && (n = e.common.selectedTenantId), d.getFunctionalGroups(n).then(function(e) {
      t.model.groups = e;
      var n;
      for (t.model.expanded = {}, o && t.selectGroup(o), n = 0; e.length > n; n++) t.model.expanded[e[n].id] = !0;
      t.model.loading = !1
    })
  }, t.hasTenantManagementCapability()) {
    var p = function() {
      t.model.loading = !0, d.getTenants().then(function(n) {
        if (t.model.tenants = [{
          id: -1,
          name: o.instant("IDM.GENERAL.NO-TENANT")
        }], e.common.selectedTenantId || (e.common.selectedTenantId = -1), n && n.length > 0) {
          for (var i = 0; n.length > i; i++) t.model.tenants.push(n[i]);
          t.model.loading = !1
        }
      })
    };
    p()
  } else t.hasTenantAdminCapability && (e.common.selectedTenantId = t.account.tenantId);
  s && t.fetchGroups()
}]), activitiApp.controller("IdmProfileMgmtController", ["$rootScope", "$scope", "$modal", "$window", "IdmService", "$translate", function(e, t, o, n, i, r) {
  e.setMainPageById("profile"), t.model = {
    loading: !0
  }, t.showUploadPictureModal = function() {
    _internalCreateModal({
      scope: t,
      template: "views/popup/idm-profile-picture-upload.html",
      show: !0
    }, o, t)
  }, t.emailChanged = function() {
    t.model.profile.emailErrorMessage = void 0, null !== t.model.profile.email && void 0 !== t.model.profile.email && "" !== t.model.profile.email ? (t.model.loading = !0, i.updateProfileDetails(t.model.profile, function() {
      t.model.editingEmail = !1, t.loadProfile()
    }, function(e, o) {
      t.model.loading = !1, 409 === o && (t.model.profile.emailErrorMessage = r.instant(e.message))
    })) : t.model.profile.email = t.model.originalEmail
  }, t.firstNameChanged = function() {
    t.model.loading = !0, i.updateProfileDetails(t.model.profile, function() {
      t.model.editingFirstName = !1, t.model.loading = !1
    })
  }, t.lastNameChanged = function() {
    t.model.loading = !0, i.updateProfileDetails(t.model.profile, function() {
      t.model.editingLastName = !1, t.model.loading = !1
    })
  }, t.companyChanged = function() {
    t.model.loading = !0, i.updateProfileDetails(t.model.profile, function() {
      t.model.editingCompany = !1, t.model.loading = !1
    })
  }, t.showChangePasswordModal = function() {
    t.model.changePassword = {}, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-change-password.html",
      show: !0
    }, o, t)
  }, t.loadAlfrescoRepositories = function() {
    i.getAllAlfrescoRepositories(void 0, !0).then(function(e) {
      t.alfrescoRepositories = e
    })
  }, t.loadBoxRepositories = function() {
    t.checkBoxRepositoryIsEnabled(function() {
      t.boxRepositoryIsEnabled && (t.boxRepository = {
        name: "Box cloud"
      }, i.loadBoxRepositoryAccount(t.model.profile.id).then(function(e) {
        t.boxRepository.authenticationURL = e.authenticationURL, t.boxRepository.ownerEmail = e.ownerEmail, t.boxRepository.expireDate = e.expireDate
      }))
    })
  }, t.checkBoxRepositoryIsEnabled = function(e) {
    i.checkBoxRepositoryIsEnabled().then(function(o) {
      t.boxRepositoryIsEnabled = o, e && e.apply()
    })
  }, t.configureBoxRepository = function() {
    t.model.editedRepository = {
      authenticationURL: t.boxRepository.authenticationURL,
      ownerEmail: t.boxRepository.ownerEmail,
      edit: void 0 != t.boxRepository.ownerEmail,
      expireDate: t.boxRepository.expireDate
    }, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-user-box-account-authorize.html",
      show: !0
    }, o, t)
  }, t.authorizeAndSaveBoxRepository = function() {
    if (t.model.editedRepository) {
      var e = angular.element(n),
        o = (e.width() - 500) / 2,
        i = (e.height() - 600) / 2,
        r = n.open(t.model.editedRepository.authenticationURL, "alfrescoAuth", "width= 500, height=600, toolbar=no, status=no, titlebar=no, location=no, menubar=no, top=" + i + ", left=" + o);
      n.contentAccountAuthConfirmed = function() {
        t.$apply(function() {
          r.close(), t.loadBoxRepositories()
        })
      }
    }
  }, t.removeBoxRepository = function() {
    i.deleteBoxRepositoryAccount(t.model.profile.id).then(function() {
      t.loadBoxRepositories()
    })
  }, t.configureAlfrescoRepository = function(e) {
    t.model.editedRepository = {
      accountUsername: e.accountUsername,
      id: e.id,
      edit: void 0 != e.accountUsername,
      password: "",
      name: e.name
    }, _internalCreateModal({
      scope: t,
      template: "views/popup/idm-user-alfresco-account-create.html",
      show: !0
    }, o, t)
  }, t.saveAlfrescoRepository = function() {
    t.model.editedRepository && (t.model.editedRepository.edit ? i.updateAlfrescoRepositoryAccount(t.model.editedRepository.id, t.model.editedRepository.accountUsername, t.model.editedRepository.password).then(function() {
      t.loadAlfrescoRepositories()
    }) : i.createAlfrescoRepositoryAccount(t.model.editedRepository.id, t.model.editedRepository.accountUsername, t.model.editedRepository.password).then(function() {
      t.loadAlfrescoRepositories()
    }))
  }, t.removeAlfrescoRepository = function(e) {
    i.deleteAlfrescoRepositoryAccount(e.id).then(function() {
      t.loadAlfrescoRepositories()
    })
  }, t.loadProfile = function() {
    i.getProfile().then(function(e) {
      t.model.originalEmail = e.email, t.model.profile = e, t.model.loading = !1, e.tenantId && t.loadAlfrescoRepositories(), t.loadBoxRepositories()
    })
  }, t.loadProfile(), i.getIdmInfo().then(function(e) {
    t.model.showChangePasswordButton = null !== e && void 0 !== e && "default" === e
  })
}]), activitiApp.controller("UploadUserPictureController", ["$rootScope", "$scope", "Upload", function(e, t, o) {
  t.popup = {
    loading: !1
  }, t.onFileSelect = function(e) {
    for (var n = 0; e.length > n; n++) {
      var i = e[n];
      o.upload({
        url: ACTIVITI.CONFIG.contextRoot + "/app/rest/admin/profile-picture",
        method: "POST",
        file: i
      }).progress(function(e) {
        t.popup.loading = !0, t.popup.uploadProgress = parseInt(100 * e.loaded / e.total)
      }).success(function() {
        t.popup.loading = !1, t.$hide(), t.loadProfile()
      }).error(function(e) {
        e && e.message && (t.popup.errorMessage = e.message), t.popup.error = !0, t.popup.loading = !1
      })
    }
  }, t.cancel = function() {
    t.popup.loading || t.$hide()
  }
}]), activitiApp.controller("IdmChangePasswordController", ["$rootScope", "$scope", "IdmService", function(e, t, o) {
  t.isConfirmButtonDisabled = function() {
    return !t.model.changePassword.originalPassword || 0 == t.model.changePassword.originalPassword.length || !t.model.changePassword.newPassword || 0 === t.model.changePassword.newPassword.length || !t.model.changePassword.newPassword2 || 0 === t.model.changePassword.newPassword2.length || t.model.changePassword.newPassword !== t.model.changePassword.newPassword2
  }, t.showPasswordsDontMatch = function() {
    return t.model.changePassword.originalPassword && t.model.changePassword.originalPassword.length > 0 && t.model.changePassword.newPassword && t.model.changePassword.newPassword.length > 0 && t.model.changePassword.newPassword2 && t.model.changePassword.newPassword2.length > 0 && t.model.changePassword.newPassword !== t.model.changePassword.newPassword2
  }, t.changePassword = function() {
    t.model.changePassword.error = !1, o.changePassword(t.model.changePassword.originalPassword, t.model.changePassword.newPassword).then(function() {
      t.$hide()
    }, function() {
      t.model.changePassword.error = !0
    })
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
    var a = {};
    return "string" == typeof e ? a.filter = e : a = e, t && (a.excludeTaskId = t), n && (a.excludeProcessId = n), i && i > 0 && (a.tenantId = i), r && r.id && (a.groupId = r.id), o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/workflow-users",
      params: a
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
      }).success(function(t, i, r, a) {
        e.authenticationError = !1, n.success && n.success(t, i, r, a), o.loginConfirmed()
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
              for (var a = 0, l = 0; r.pages.length > l; l++) {
                var d = {};
                d.name = r.pages[l], d.theme = r.theme, d.icon = r.icon, null !== r.defaultAppId && void 0 !== r.defaultAppId ? (d.titleKey = r.titleKey + "-" + d.name.toUpperCase(), d.fixedUrl = r.fixedUrl + "#/" + r.pages[l]) : (d.titleKey = i.instant("APP.CUSTOM-APP.TITLE-" + d.name.toUpperCase(), r), d.fixedUrl = r.fixedBaseUrl + r.pages[l]), o.splice(n + l + 1, 0, d), a++
              }
              o.splice(n, 1), n = n + a - 1
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
          var a = i(t, e.identifierRegExp);
          a != t ? (n.$setViewValue(a), n.$render()) : r = e.identifierRegExp.test(a) ? -1 == e.forbidenNames.indexOf(a) : !1
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
          var a = i(t, e.identifierRegExp);
          a != t ? (n.$setViewValue(a), n.$render()) : e.identifierRegExp.test(a) || (r = !1)
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
      var a = o.restrictInput;
      (void 0 == a || null == a || "" == a) && (a = o.dateFormat), e.field.acceptedFormat = a;
      var l = i(a),
        d = !1;
      (void 0 == a || null == a || "" == a) && (d = !0);
      var s = n.$render;
      n.$render = function() {
        t.val(n.$viewValue), n.$dateValue && !isNaN(n.$dateValue.getTime()) && s && s()
      }, n.$parsers.unshift(function(e) {
        if (d) return e;
        for (var t = !1, o = 0; l.length > o && !t; o++) t |= r(e, l[o]);
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
        var a = function(e) {
          t(function() {
            var t = e.parent().outerHeight() - r,
              o = !1;
            e.parent().children().filter(":visible").each(function() {
              o || (e[0] == this ? o = !0 : t -= angular.element(this).outerHeight())
            }), o && e.height(t)
          }, 0)
        };
        o.$watch("toWatch", function() {
          a(n)
        }), o.unregisterWatcher && o.unregisterWatcher(), o.unregisterWatcher = e.$watch("window.height", function() {
          a(n)
        }), o.unregisterForceWatcher && o.unregisterForceWatcher(), o.unregisterForceWatcher = e.$watch("window.forceRefresh", function() {
          a(n)
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
              var a = r.position().top - o.position().top + o.scrollTop(),
                l = a + r.outerHeight(),
                d = o.scrollTop() + o.innerHeight(),
                s = d - o.innerHeight();
              s >= a ? o.scrollTop(a - r.outerHeight() - t) : l > d && o.scrollTop(s + r.outerHeight() - t)
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
      a = t(r),
      l = i.ignore,
      d = i.ignoreClass,
      s = "true" == i.ignorePopupEvents,
      c = function(e) {
        for (var t = e.target; t;) {
          if (t == n[0] || l && t.id == l || d && t.className && t.className.indexOf(d) >= 0) return e.stopPropagation(), e.preventDefault(), void 0;
          t = t.parentNode
        }
        o.$apply(function() {
          a(o, {
            $event: e
          })
        })
      };
    e.on("click", c), o.$on("$destroy", function() {
      e.off("click", c)
    });
    var u = o.$on("tooltip.hide", function() {
      s || (e.off("click", c), u())
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
    var n, i, r, a;
    return o.upPressed && (n = e(o.upPressed)), o.downPressed && (i = e(o.downPressed)), o.enterPressed && (r = e(o.enterPressed)), o.escapePressed && (a = e(o.escapePressed)),
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
            a && a(e, {
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
  }, e.controller = ["$scope", "$element", "ContentAccountService", "$modal", "$window", "$translate", "$rootScope", function(e, t, o, n, i, r, a) {
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
        a.addAlert(t, "error"), e.errorMessage = t
      }) : "google-drive" === o ? r("INTEGRATION.ALERT.GOOGLE-DRIVE-NOT-AUTHORIZED").then(function(t) {
        a.addAlert(t, "error"), e.errorMessage = t
      }) : "box" === o && r("INTEGRATION.ALERT.BOX-NOT-AUTHORIZED").then(function(t) {
        a.addAlert(t, "error"), e.errorMessage = t
      }), e.contentBrowseModal && e.contentBrowseModal.$scope.$hide())
    }), e.openContentAccountAuth = function(t, o) {
      var n = angular.element(i),
        r = (n.width() - 500) / 2,
        a = (n.height() - 400) / 2,
        l = i.open(e.contentAccounts[o].authorizationUrl, o, "width= 500, height=400, toolbar=no, status=no, titlebar=no, location=no, menubar=no, top=" + a + ", left=" + r);
      i.contentAccountAuthConfirmed = function() {
        e.$apply(function() {
          e.contentAccounts[o].authorizationUrl = void 0, e.contentAccounts[o].authorized = !0, e.currentAccount = e.contentAccounts[o], l.close(), e.$emit("task-completed", {
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
  }, o.controller = ["$scope", "$element", "RelatedContentService", "ContentAccountService", "$modal", "$window", "$translate", "$rootScope", function(e, t, o, n, i, r, a, l) {
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
      e.currentAccount && o == e.currentAccount.serviceId && (e.contentBrowseModal && a("INTEGRATION.ALERT.ALFRESCO-ERROR").then(function(t) {
        e.contentBrowseModal.$scope.errorMessage = t, e.currentAccount.loading = !1
      }), e.contentBrowseModal && a("INTEGRATION.ALERT.BOX-ERROR").then(function(t) {
        e.contentBrowseModal.$scope.errorMessage = t, e.currentAccount.loading = !1
      }))
    }), e.clearPopupError = function() {
      e.contentBrowseModal && (e.contentBrowseModal.$scope.errorMessage = void 0)
    }, e.$on("integration.account.autherror", function(t, o) {
      o && (e.contentAccounts[o].authorized = !1, o === e.ALFRESCO_CLOUD_ACCOUNT_ID ? (a("INTEGRATION.ALERT.ALFRESCO-CLOUD-NOT-AUTHORIZED").then(function(t) {
        l.addAlert(t, "error"), e.errorMessage = t
      }), e.contentBrowseModal && e.contentBrowseModal.$scope.$hide()) : o == e.GOOGLE_DRIVE_ACCOUNT_ID ? (a("INTEGRATION.ALERT.GOOGLE-DRIVE-NOT-AUTHORIZED").then(function(t) {
        l.addAlert(t, "error"), e.errorMessage = t
      }), e.contentBrowseModal && e.contentBrowseModal.$scope.$hide()) : "box" == o && (a("INTEGRATION.ALERT.BOX-NOT-AUTHORIZED").then(function(t) {
        l.addAlert(t, "error"), e.errorMessage = t
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
            t.customData && (o.quota = e.formatFileSize(t.customData.quota)), a(t.messageKey, o).then(function(t) {
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
        a = (n.height() - 400) / 2,
        l = r.open(e.contentAccounts[o].authorizationUrl, o, "width= 500, height=400, toolbar=no, status=no, titlebar=no, location=no, menubar=no, top=" + a + ", left=" + i);
      r.contentAccountAuthConfirmed = function() {
        e.$apply(function() {
          e.contentAccounts[o].authorizationUrl = void 0, e.contentAccounts[o].authorized = !0, e.currentAccount = e.contentAccounts[o], l.close(), e.openContentAccountBrowser(t, o)
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
    }, e.addContentFromSource = function(t, n, i, r, a, l, d) {
      o.addRelatedContentFromSource(e.taskId, e.processInstanceId, t, n, i, r, a, e.linkOnly, e.isRelatedContent).then(function(t) {
        e.uploadedCallback && e.uploadedCallback(e.$parent, {
          content: t
        }), l && l(t)
      }, function(e) {
        d && d(e)
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
}]), activitiModule.directive("selectPeoplePopover", ["$rootScope", "$http", "$popover", "appResourceRoot", "UserService", "SystemPropertiesService", "$parse", function(e, t, o, n, i, r, a) {
  var l = {};
  return l.restrict = "A", l.scope = {
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
  }, l.link = function(t, n, l) {
    var d = "bottom";
    n.addClass("toggle-people-select"), l.placement && (d = l.placement);
    var s = l.selectYourselfMode,
      c = !0;
    void 0 !== l.closeOnSelect && (c = l.closeOnSelect), t.popover = o(n, {
      template: ACTIVITI.CONFIG.webContextRoot + "/views/common/popover/select-people-popover.html?" + Date.now(),
      placement: d
    });
    var u, p, m;
    l.onPeopleSelected && (u = a(l.onPeopleSelected)), l.onCancel && (p = a(l.onCancel)), l.onEmailSelected && (m = a(l.onEmailSelected));
    var f = "workflow";
    null !== t.type && void 0 !== t.type && (f = t.type);
    var g = t.popover.$scope;
    if (g.title = l.popoverTitle, g.popupModel = {
      emailMode: !1,
      showRecentResults: !1,
      userResults: [],
      userField: {},
      userFieldFilter: ["people"],
      loading: !1
    }, t.selectPeopleFormFields && (g.popupModel.formFields = t.selectPeopleFormFields), l.emailModeDisabled || t.emailModeDisabled) {
      var h = t.emailModeDisabled || l.emailModeDisabled;
      ("true" === h || h === !0) && (g.popupModel.emailDisabled = !0)
    }(void 0 == g.popupModel.emailDisabled || 0 == g.popupModel.emailDisabled) && r.getSystemProperties().then(function(e) {
      g.popupModel.emailDisabled = !e.allowInvolveByEmail
    });
    var T = function() {
      if (g.popupModel.emailMode = !1, e.account && e.account.capabilities) {
        var t = e.account.capabilities.indexOf("tenant-mgmt") > -1 || e.account.capabilities.indexOf("tenant-admin") > -1;
        t === !1 && (null === g.account.tenantId || void 0 === g.account.tenantId) && (g.popupModel.emailMode = !0)
      }
    };
    T(), g.setSearchType = function() {
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
        }(c || "true" === c) && g.$hide()
      }
    }), g.$watch("popupModel.filter", function() {
      if (g.popupModel.filter && g.popupModel.filter.length > 0) {
        g.popupModel.loading = !0;
        var e;
        e = "idm" === f ? i.getFilteredUsersStrict(g.popupModel.filter, t.tenantId, t.restrictWithGroup) : i.getFilteredUsers(g.popupModel.filter, t.excludeTaskId, t.excludeProcessId, t.tenantId, t.restrictWithGroup), e.then(function(e) {
          g.popupModel.showRecentResults = !1, g.popupModel.loading = !1;
          var o = [],
            n = null !== t.excludeUserId && void 0 !== t.excludeUserId,
            i = null !== t.excludeUserIds && void 0 !== t.excludeUserIds;
          if (n === !0 || i === !0)
            for (var r = 0; e.data.length > r; r++) {
              var a = !1;
              n === !0 && e.data[r].id === t.excludeUserId && (a = !0), i === !0 && t.excludeUserIds.indexOf(e.data[r].id) >= 0 && (a = !0), a || o.push(e.data[r])
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
        }), "true" === c) g.$hide();
        else {
          var o = g.popupModel.userResults;
          o.splice(jQuery.inArray(e, o), 1), g.popupModel.selectedIndex = 0, g.popupModel.selectedUser = o[g.popupModel.selectedIndex]
        }
    }, g.selectPersonByEmail = function(e) {
      e && m && (m(t.$parent, {
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
      g.popupModel.showRecentResults && g.popupModel.added && (g.popupModel.recentUsers = []), g.popupModel.userResults = [], g.popupModel.filter = "", g.popupModel.emailMode = !1, T(), g.popupModel.added ? g.popupModel.added = !1 : p && p(t.$parent)
    })
  }, l
}]), activitiModule.directive("selectFunctionalGroupPopover", ["$rootScope", "$http", "$popover", "FunctionalGroupService", "$parse", function(e, t, o, n, i) {
  var r = {};
  return r.restrict = "A", r.scope = {
    type: "=type",
    restrictWithGroup: "=restrictWithGroup",
    excludeGroupIds: "=excludeGroupIds"
  }, r.link = function(t, r, a) {
    var l = "bottom";
    r.addClass("toggle-functional-group-select"), a.placement && (l = a.placement);
    var d = !0;
    void 0 !== a.closeOnSelect && (d = a.closeOnSelect), t.popover = o(r, {
      template: ACTIVITI.CONFIG.webContextRoot + "/views/common/popover/select-functional-group-popover.html?" + Date.now(),
      placement: l
    });
    var s, c;
    a.onGroupSelected && (s = i(a.onGroupSelected)), a.onCancel && (c = i(a.onCancel));
    var u = t.popover.$scope;
    u.title = a.popoverTitle, u.popupModel = {
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
        }), "true" === d) u.$hide();
        else {
          var o = u.popupModel.groupResults;
          o.splice(jQuery.inArray(e, o), 1), u.popupModel.selectedIndex = 0, u.popupModel.selectedGroup = o[u.popupModel.selectedIndex]
        }
    }, u.$on("tooltip.hide", function() {
      u.popupModel.groupResults = [], u.popupModel.filter = "", u.popupModel.added ? u.popupModel.added = !1 : c && c(t.$parent)
    })
  }, r
}]), activitiModule.directive("tabControl", ["$compile", "$http", "$templateCache", function(e, t, o) {
  var n = function(n, i) {
      if (!n.activeTemplate || n.activeTemplate != n.activeTab.id) {
        var r = $(i.children()[1]),
          a = angular.element(i.children()[1]).scope();
        if (n.activeTemplate && a != n && a.$destroy(), n.activeTab && n.activeTab.templateUrl) {
          var l = t.get(n.activeTab.templateUrl, {
            cache: o
          });
          l.success(function(e) {
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
      a = o[0];
    a.addEventListener("dragenter", function() {
      return e.$apply(function() {
        r(e, {
          over: !0
        })
      }), !1
    }, !1), a.addEventListener("dragleave", function() {
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
}), activitiModule.config(["$httpProvider", "$translateProvider", function(e) {
  e.defaults.headers.get || (e.defaults.headers.get = {}), e.defaults.headers.get["Cache-Control"] = "no-cache, no-store, must-revalidate", e.defaults.headers.get.Pragma = "no-cache", e.defaults.headers.get.Expires = "0"
}]),
  function() {
    if (null !== ACTIVITI.CONFIG.isEventTrackingEnabled && void 0 !== ACTIVITI.CONFIG.isEventTrackingEnabled && ACTIVITI.CONFIG.isEventTrackingEnabled === !0)
      if (null !== ACTIVITI.CONFIG.trackingCode && void 0 !== ACTIVITI.CONFIG.trackingCode) {
        (function(e, t, o, n, i, r, a) {
          e.GoogleAnalyticsObject = i, e[i] = e[i] || function() {
            (e[i].q = e[i].q || []).push(arguments)
          }, e[i].l = 1 * new Date, r = t.createElement(o), a = t.getElementsByTagName(o)[0], r.async = 1, r.src = n, a.parentNode.insertBefore(r, a)
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
}]), activitiApp.service("RuntimeAppDefinitionService", ["$http", "$q", "$location", "EventTrackingService", "AuthenticationSharedService", "appName", function(e, t, o, n, i, r) {
  var a = function(o) {
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
      l = n.indexOf("/#");
    l >= 0 && (n = n.substring(0, l)), l = n.indexOf("?"), l >= 0 && (n = n.substring(0, l)), "/" == n[n.length - 1] && (n = n.substring(0, n.length - 1)), r.length > 0 && n.substring(n.length - r.length) == r && (n = n.substring(0, n.length - r.length - 1));
    var d = {
        editor: n + "/editor/",
        identity: n + "/idm/",
        workflow: n + "/workflow/",
        admin: "http://localhost:8080/activiti-admin",
        analytics: n + "/analytics/"
      },
      s = function(o) {
        for (var i = JSON.parse(o), r = [], a = 0; i.data.length > a; a++) {
          var l = i.data[a];
          if (void 0 !== l.defaultAppId && null !== l.defaultAppId)
            if ("kickstart" === l.defaultAppId) t.push({
              id: "kickstart",
              titleKey: "APP.KICKSTART.TITLE",
              descriptionKey: "APP.KICKSTART.DESCRIPTION",
              defaultAppId: l.defaultAppId,
              theme: "theme-1",
              icon: "icon icon-choice",
              fixedBaseUrl: d.editor + "/#/",
              fixedUrl: d.editor,
              pages: ["processes", "forms", "apps", "stencils", "decision-tables"]
            });
            else if ("tasks" === l.defaultAppId) t.push({
              id: "tasks",
              titleKey: "APP.TASKS.TITLE",
              descriptionKey: "APP.TASKS.DESCRIPTION",
              defaultAppId: l.defaultAppId,
              theme: "theme-2",
              icon: "icon icon-clock",
              fixedBaseUrl: d.workflow + "/#/",
              fixedUrl: d.workflow,
              pages: ["tasks", "processes", "processes?mode=start"]
            });
            else if ("identity" === l.defaultAppId) {
              var s = {
                id: "identity",
                titleKey: e ? "APP.IDENTITY-MANAGEMENT.TITLE-TENANT-ADMIN" : "APP.IDENTITY-MANAGEMENT.TITLE",
                descriptionKey: e ? "APP.IDENTITY-MANAGEMENT.DESCRIPTION-TENANT-ADMIN" : "APP.IDENTITY-MANAGEMENT.DESCRIPTION",
                defaultAppId: l.defaultAppId,
                theme: "theme-3",
                icon: "icon icon-user",
                fixedBaseUrl: d.identity + "/#/",
                fixedUrl: d.identity
              };
              e && (s.pages = ["tenant-mgmt", "user-mgmt", "system-group-mgmt", "functional-group-mgmt", "profile"]), t.push(s)
            } else "analytics" === l.defaultAppId && t.push({
              id: "analytics",
              titleKey: "APP.ANALYTICS.TITLE",
              descriptionKey: "APP.ANALYTICS.DESCRIPTION",
              defaultAppId: l.defaultAppId,
              theme: "theme-6",
              icon: "glyphicon glyphicon-stats",
              fixedBaseUrl: d.analytics + "/#/",
              fixedUrl: d.analytics
            });
          else l.icon = "glyphicon " + l.icon, l.fixedBaseUrl = n + "/workflow/#/apps/" + l.id + "/", l.fixedUrl = l.fixedBaseUrl + "tasks", l.pages = ["tasks", "processes", "processes?mode=start"], l.deletable = !0, r.push(l)
        }
        return {
          defaultApps: t,
          customApps: r
        }
      };
    return a({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/runtime/app-definitions",
      transformResponse: s
    })
  }, this.deleteAppDefinition = function(e) {
    var t = a({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/runtime/app-definitions/" + e
    });
    return t.then(function() {
      n.trackEvent("landing", "runtime-app-delete")
    }), t
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
}]), angular.module("activitiApp").service("DocumentTemplateService", ["$http", "$q", "$rootScope", "$translate", function(e, t) {
  var o = function(o) {
    var n = t.defer();
    return e(o).success(function(e) {
      n.resolve(e)
    }).error(function(e) {
      n.reject(e)
    }), n.promise
  };
  this.findAllDocumentTemplates = function(e, t, n, i, r) {
    var a = {
      tenantId: e,
      nameFilter: t,
      start: i,
      size: r,
      sort: n
    };
    return o({
      method: "GET",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/document-templates",
      params: a
    })
  }, this.deleteDocumentTemplate = function(e) {
    return o({
      method: "DELETE",
      url: ACTIVITI.CONFIG.contextRoot + "/app/rest/document-templates/" + e
    })
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
}]), activitiModule.filter("startFrom", function() {
  return function(e, t) {
    return e ? (t = +t, e.slice(t)) : []
  }
}), activitiModule.filter("regex", function() {
  return function(e, t, o) {
    2 == arguments.length && (o = t);
    for (var n = RegExp(o), i = [], r = 0; e.length > r; r++) n.test(e[r][t]) && i.push(e[r]);
    return i
  }
});