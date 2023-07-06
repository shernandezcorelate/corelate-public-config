// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  proxyUrl: '',
  imageSourceUrl: '/header/download',
  versionInfoUrl: '',
  production: false,
  activiti: {
    configPath: 'assets/configs/app.config.json',
    bpmnUrl: ''
  },
  apiDocsUrl: 'http://localhost:8002/api/',
  oauthLoginUrl: 'http://localhost:8004/authentication/oauth/authorize',
  oauthLogoutUrl: 'http://localhost:8004/authentication/logout',
  oauthDashboardUrl: 'http://localhost:4200/dashboard',
  oauthRedirectUrl: 'http://localhost:4200'
};
