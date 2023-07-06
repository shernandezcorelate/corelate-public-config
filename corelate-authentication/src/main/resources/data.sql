DELETE FROM OAUTH_CLIENT_DETAILS;

INSERT INTO OAUTH_CLIENT_DETAILS
(id, deleted, access_token_validity, additional_information, authorities, authorized_grant_types,
 autoapprove, client_id, client_secret, web_server_redirect_uri, resource_ids,
 scope, refresh_token_validity)
VALUES
  (1, 'N', 3000, NULL, NULL, 'password,authorization_code,refresh_token',
      'read,write', 'corelate_password_client', '$2a$10$LehROxvGOls7KBbZuegOju3SDKYRb9GyPP9UpqIaJWiGjXvss0JUa', NULL, NULL,
      'read,write', 3000);

INSERT INTO OAUTH_CLIENT_DETAILS
(id, deleted, access_token_validity, additional_information, authorities, authorized_grant_types,
 autoapprove, client_id, client_secret, web_server_redirect_uri, resource_ids,
 scope, refresh_token_validity)
VALUES
  (2, 'N', 3000, NULL, NULL, 'implicit',
      'read,write,foo,bar', 'corelate_implicit_client', NULL, NULL, NULL,
      'read,write,foo,bar', 3000);