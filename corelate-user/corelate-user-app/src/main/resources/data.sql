INSERT INTO USERS(id, deleted, username, password, account_non_expired, account_non_locked, credentials_non_expired, enabled)
  VALUES
    (1, 'N', 'admin@isv.corelate.net', '$2a$10$LehROxvGOls7KBbZuegOju3SDKYRb9GyPP9UpqIaJWiGjXvss0JUa', 'Y', 'Y','Y','Y');

INSERT INTO USER_ACCOUNT(id, family_name, given_name)
  VALUES
    (1, 'USER', 'CORELATE');