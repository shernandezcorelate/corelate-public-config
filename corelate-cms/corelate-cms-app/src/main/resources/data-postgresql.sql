INSERT INTO HEADER(id, deleted, label, show_image, show_label)
    VALUES
      (1, 'N', 'CORELATE', 't', 't');

WITH DATA(header_id, files)
AS (
  VALUES
    (1, 'corelate-logo.png')
)
INSERT INTO HEADER_FILES(header_id, files)
  SELECT d.header_id, d.files
  FROM DATA d
  WHERE NOT EXISTS (
      SELECT 1
      FROM HEADER_FILES hf
      WHERE
        hf.header_id = d.header_id);

INSERT INTO FOOTER(id, deleted, description, copyright)
    VALUES
      (1, 'N', 'The CORELATE Platform offers growing organizations flexibility to accommodate changing business processes and increasing volumes of data', '<span class="align-middle white-text">© 2017</span> | <a href="#" class="align-middle white-text">Privacy</a> | <a href="#" class="align-middle white-text">Terms</a>');

WITH DATA(footer_id, files)
AS (
  VALUES
    (1, 'corelate-logo.png')
)
INSERT INTO FOOTER_FILES(footer_id, files)
  SELECT d.footer_id, d.files
  FROM DATA d
  WHERE NOT EXISTS (
      SELECT 1
      FROM FOOTER_FILES ff
      WHERE
        ff.footer_id = d.footer_id);



INSERT INTO FOOTER_PANEL(id, deleted, name, footer_id, index)
    VALUES
      (1, 'N', 'Quick Links', 1, 1),
      (2, 'N', 'Projects', 1, 2),
      (3, 'N', 'Community', 1, 3);

WITH DATA(footer_panel_id, name, sym_link)
AS (
  VALUES
    (1, 'Corelate', 'http://www.corelate.net'),
    (1, 'API', 'http://www.corelate.net'),
    (1, 'About Us', 'http://www.corelate.net'),
    (2, 'TradeNet', 'http://iabpi-sandbox.corelate.net'),
    (2, 'Legal Case Management', 'http://dev.legal.corelate.net'),
    (3, 'Twitter', 'https://twitter.com/?lang=en'),
    (3, 'Facebook', 'https://www.facebook.com/'),
    (3, 'Google+', 'https://plus.google.com/')
)
INSERT INTO FOOTER_PANEL_LINK(footer_panel_id, name, sym_link)
  SELECT d.footer_panel_id, d.name, d.sym_link
  FROM DATA d
  WHERE NOT EXISTS (
      SELECT 1
      FROM FOOTER_PANEL_LINK fpl
      WHERE fpl.footer_panel_id = d.footer_panel_id
            AND fpl.name = d.name
            AND fpl.sym_link = d.sym_link);

INSERT INTO SITE_HEAD(id, deleted, title)
    VALUES
      (1, 'N', 'CORELATE');

WITH DATA(site_head_id, files)
AS (
  VALUES
    (1, 'head-favicon.ico')
)
INSERT INTO SITE_HEAD_FILES(site_head_id, files)
  SELECT d.site_head_id, d.files
  FROM DATA d
  WHERE NOT EXISTS (
      SELECT 1
      FROM SITE_HEAD_FILES hf
      WHERE
        hf.site_head_id = d.site_head_id);

INSERT INTO CAROUSEL(id, deleted, interval, link_trigger)
    VALUES
      (1, 'N', 5, 'IMAGE');

INSERT INTO CAROUSEL_SLIDE(id, deleted, header, sub_header, link, button_label, published, link_trigger)
    VALUES
      (1, 'N', 'Corelate', 'Accommodate evolving business processes', 'http://www.corelate.net', 'View Corelate', 'Y', 'IMAGE'),
      (2, 'N', 'TradeNet', 'The Philippines Gateway for Trade Facilitation', 'http://iabpi-sandbox.corelate.net', 'View TradeNet', 'Y', 'IMAGE');


WITH DATA(carousel_slide_id, files)
AS (
  VALUES
    (1, 'corelate-backdrop.jpg'),
    (2, 'trade-backdrop.jpg')
)
INSERT INTO CAROUSEL_SLIDE_FILES(carousel_slide_id, files)
  SELECT d.carousel_slide_id, d.files
  FROM DATA d
  WHERE NOT EXISTS (
      SELECT 1
        FROM CAROUSEL_SLIDE_FILES cpl
        WHERE
          csf.carousel_slide_id = d.carousel_slide_id
              AND csf.files = d.files);


INSERT INTO GENERAL_CONTENT(id, deleted, author, published, auto_post, category, content, title, excerpt, banner_place_holder)
    VALUES
      (1, 'N', 'SYSTEM', 'Y', 'Y', 'ANNOUNCEMENTS', '<p><a href="http://corelate.github.io/files_files/logo-1.png"><img alt="" src="http://corelate.github.io/files_files/logo-1.png" /></a></p><p>&nbsp;</p><p>Corelate ISV 2.0 launched with the following new features</p><p>&nbsp;</p><ul><li>With embedded Oauth2 authentication service</li><li>Customizable Rules Engine</li><li>Dynamic Catalogs</li><li>New UI (using Angular4)</li></ul>','Corelate ISV 2.0', 'Corelate ISV 2.0 Launched with new features', 'Corelate ISV 2.0'),
      (2, 'N', 'SYSTEM', 'Y', 'Y', 'NEWS', '<p>The Duterte administration is finalizing a new, faster system for securing import applications that currently involve more than 60 government agencies, as part of fresh measures to cut red tape and improve the ease of doing business in the country, according to Finance Secretary Carlos Dominguez III.</p><p>&nbsp;</p><p>Dominguez said the government is now consolidating all requirements involving applications for imports to drastically shorten the process and make this new system available online.</p>', 'DOF adopting faster Import Permit System', 'The government is adopting a new online system to further enhance facilitation of import and export permits', 'TradeNet');


WITH DATA(general_content_id, files)
AS (
  VALUES
    (1, 'corelate-logo-black.png'),
    (2, 'ph-gov-logo.png')
)
INSERT INTO GENERAL_CONTENT_FILES(general_content_id, files)
  SELECT d.general_content_id, d.files
  FROM DATA d
  WHERE NOT EXISTS (
      SELECT 1
      FROM GENERAL_CONTENT_FILES gcf
      WHERE
        gcf.general_content_id= d.general_content_id
        AND gcf.files = d.files);

INSERT INTO TEXT_TEMPLATE(id, deleted, key, template)
    VALUES
      (1, 'N', 'USER_PASSWORD_RETRIEVE_TEMPLATE', '<div class="isv-email__container" style=" display: block; width: 100%; background-color: #f5f5f5; margin: auto; padding: 0 0 2rem 0; position: relative; overflow: auto;"> <div class="isv-email__header" style=" display: block; width: 100%; margin: auto; padding: 3rem 0 5rem 0; position: relative; background-color: #212121; z-index: 1;"> <img src="https://isv.corelate.net/assets/images/logo-corelate.png" class="isv-brand" alt="Site Name" style=" display: block; margin: auto; max-width: 100%"> </div> <div class="isv-email__body" style=" display: block; max-width: 780px; width: 80%; position: relative; background-color: #ffffff; z-index: 2; margin: -3rem auto 0 auto; padding: 2rem; border-radius: .25rem; font-family: Arial, Helvetica, sans-serif; text-align: center;"> <h2 class="isv-email__title" style=" text-align: center; font-size: 2.2rem; font-weight: 300; line-height: 2.4rem; padding: 0 0 1rem 0;"> Reset Your Password. </h2> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> Hi {{name}}, </p> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> You requested a password reset. Please visit this link to enter your new password: </p> <p class="isv-email__text" style=" text-align: center; font-size: 1.1rem; line-height: 1.5rem;"> <a href="{{resetCode}}" class="isv-email__link" style=" color: #212121; font-weight: bold; font-size: 1.3rem;"> https://codepen.io/pen/url-here </a> </p> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> For security purposes, this link will expire on {{expirationDate}}. </p> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> Thank you, <br /> Corelate ISV </p> </div> <div class="isv-email__footer" style=" display: block; max-width: 780px; width: 80%; position: relative; z-index: 2; margin: 1rem auto 0 auto; padding: 2rem; font-family: Arial, Helvetica, sans-serif; text-align: center;"> <p class="isv-email__text" style=" font-size: 1rem;"> <a href="#" class="isv-email__link" style=" color: #212121; font-weight: 300;"> Link One </a>&nbsp;&#124;&nbsp; <a href="#" class="isv-email__link" style=" color: #212121; font-weight: 300;"> Link Two </a>&nbsp;&#124;&nbsp; <a href="#" class="isv-email__link" style=" color: #212121; font-weight: 300;"> Link Three </a> </p> <p class="isv-email__text"> <small> Copyright © 2017 Corelate ISV, All rights reserved.<br /> You are receiving this email because of reasons. </small> </p> <p class="isv-email__text"> <small> <strong>Our Mailing Address is:</strong> <br /> <a href="#" class="isv-email__link" style=" color: #212121; text-decoration: underline;"> email@email.com </a><br /> Address Line 1 </small> </p> <p class="isv-email__text"> <small> If these emails get annoying, please feel free to <a href="#" class="isv-email__link" style=" color: #212121; font-weight: 300; text-decoration: underline;"> Unsubscribe </a> </small> </p> </div> </div>'),
      (2, 'N', 'USER_PASSWORD_FORGOT_TEMPLATE', '<div class="isv-email__container" style=" display: block; width: 100%; background-color: #f5f5f5; margin: auto; padding: 0 0 2rem 0; position: relative; overflow: auto;"> <div class="isv-email__header" style=" display: block; width: 100%; margin: auto; padding: 3rem 0 5rem 0; position: relative; background-color: #b71c1c; z-index: 1;"> <img src="https://isv.corelate.net/assets/images/logo-corelate.png" class="isv-brand" alt="Site Name" style=" display: block; margin: auto; max-width: 100%"> </div> <div class="isv-email__body" style=" display: block; max-width: 780px; width: 80%; position: relative; background-color: #ffffff; z-index: 2; margin: -3rem auto 0 auto; padding: 2rem; border-radius: .25rem; font-family: Arial, Helvetica, sans-serif; text-align: center;"> <h2 class="isv-email__title" style=" text-align: center; font-size: 2.2rem; font-weight: 300; line-height: 2.4rem; padding: 0 0 1rem 0;"> Forgot Your Password? </h2> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> Hi {{name}}, </p> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> It seems you have forgotten your password, click below to reset your password: </p> <p style=" text-align: center;"> <a href="#"> <button class="isv-email__button" style=" background-color: #b71c1c; color: #ffffff; font-size: 1.2rem; font-weight: 300; margin: 1rem auto 2rem auto; padding: 1rem 2.4rem; border-radius: .25rem; border: 0; text-transform: uppercase; white-space: normal; word-wrap: break-word;"> Reset </button> </a> </p> </div> <div class="isv-email__footer" style=" display: block; max-width: 780px; width: 80%; position: relative; z-index: 2; margin: 1rem auto 0 auto; padding: 2rem; font-family: Arial, Helvetica, sans-serif; text-align: center;"> <p class="isv-email__text" style=" font-size: 1rem;"> <a href="#" class="isv-email__link" style=" color: #b71c1c; font-weight: 300;"> Link One </a>&nbsp;&#124;&nbsp; <a href="#" class="isv-email__link" style=" color: #b71c1c; font-weight: 300;"> Link Two </a>&nbsp;&#124;&nbsp; <a href="#" class="isv-email__link" style=" color: #b71c1c; font-weight: 300;"> Link Three </a> </p> <p class="isv-email__text"> <small> Copyright © 2017 Corelate ISV, All rights reserved.<br /> You are receiving this email because of reasons. </small> </p> <p class="isv-email__text"> <small> <strong>Our Mailing Address is:</strong> <br /> <a href="#" class="isv-email__link" style=" color: #b71c1c; font-weight: 300; text-decoration: underline;"> email@email.com </a><br /> Address Line 1 </small> </p> <p class="isv-email__text"> <small> If these emails get annoying, please feel free to <a href="#" class="isv-email__link" style=" color: #b71c1c; font-weight: 300; text-decoration: underline;"> Unsubscribe </a> </small> </p> </div> </div>'),
      (3, 'N', 'USER_PASSWORD_MAIL_TEMPLATE', '<div class="isv-email__container" style=" display: block; width: 100%; background-color: #f5f5f5; margin: auto; padding: 0 0 2rem 0; position: relative; overflow: auto;"> <div class="isv-email__header" style=" display: block; width: 100%; margin: auto; padding: 3rem 0 5rem 0; position: relative; background-color: #7cb342; z-index: 1;"> <img src="https://isv.corelate.net/assets/images/logo-corelate.png" class="isv-brand" alt="Site Name" style=" display: block; margin: auto; max-width: 100%"> </div> <div class="isv-email__body" style=" display: block; max-width: 780px; width: 80%; position: relative; background-color: #ffffff; z-index: 2; margin: -3rem auto 0 auto; padding: 2rem; border-radius: .25rem; font-family: Arial, Helvetica, sans-serif; text-align: center;"> <h2 class="isv-email__title" style=" text-align: center; font-size: 2.2rem; font-weight: 300; line-height: 2.4rem; padding: 0 0 1rem 0;"> Your Password Has Been Updated! </h2> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> Hi {{name}}, </p> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> You have successfully updated your Corelate ISV account password. You can log in with your new password below. </p> <p class="isv-email__text" style=" text-align: center; font-size: 1.1rem; line-height: 1.5rem;"> <strong>Username:</strong> {{username}} </p> <p style=" text-align: center;"> <button class="isv-email__button" style=" background-color: #7cb342; color: #ffffff; font-size: 1.2rem; font-weight: 300; margin: 1rem auto 2rem auto; padding: 1rem 2.4rem; border-radius: .25rem; border: 0; text-transform: uppercase; white-space: normal; word-wrap: break-word;"> Log In </button> </p> </div> <div class="isv-email__footer" style=" display: block; max-width: 780px; width: 80%; position: relative; z-index: 2; margin: 1rem auto 0 auto; padding: 2rem; font-family: Arial, Helvetica, sans-serif; text-align: center;"> <p class="isv-email__text" style=" font-size: 1rem;"> <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300;"> Link One </a>&nbsp;&#124;&nbsp; <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300;"> Link Two </a>&nbsp;&#124;&nbsp; <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300;"> Link Three </a> </p> <p class="isv-email__text"> <small> Copyright © 2017 Corelate ISV, All rights reserved.<br /> You are receiving this email because of reasons. </small> </p> <p class="isv-email__text"> <small> <strong>Our Mailing Address is:</strong> <br /> <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300; text-decoration: underline;"> email@email.com </a><br /> Address Line 1 </small> </p> <p class="isv-email__text"> <small> If these emails get annoying, please feel free to <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300; text-decoration: underline;"> Unsubscribe </a> </small> </p> </div> </div>'),
      (4, 'N', 'USER_PASSWORD_RESET_MAIL_TEMPLATE', '<div class="isv-email__container" style=" display: block; width: 100%; background-color: #f5f5f5; margin: auto; padding: 0 0 2rem 0; position: relative; overflow: auto;"> <div class="isv-email__header" style=" display: block; width: 100%; margin: auto; padding: 3rem 0 5rem 0; position: relative; background-color: #7cb342; z-index: 1;"> <img src="https://isv.corelate.net/assets/images/logo-corelate.png" class="isv-brand" alt="Site Name" style=" display: block; margin: auto; max-width: 100%"> </div> <div class="isv-email__body" style=" display: block; max-width: 780px; width: 80%; position: relative; background-color: #ffffff; z-index: 2; margin: -3rem auto 0 auto; padding: 2rem; border-radius: .25rem; font-family: Arial, Helvetica, sans-serif; text-align: center;"> <h2 class="isv-email__title" style=" text-align: center; font-size: 2.2rem; font-weight: 300; line-height: 2.4rem; padding: 0 0 1rem 0;"> Your Password Has Been Reset! </h2> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> Hi {{name}}, </p> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> You have successfully reset your Corelate ISV account password. You can log in with your new password below. </p> <p class="isv-email__text" style=" text-align: center; font-size: 1.1rem; line-height: 1.5rem;"> <strong>Username:</strong> {{username}} </p> <p style=" text-align: center;"> <button class="isv-email__button" style=" background-color: #7cb342; color: #ffffff; font-size: 1.2rem; font-weight: 300; margin: 1rem auto 2rem auto; padding: 1rem 2.4rem; border-radius: .25rem; border: 0; text-transform: uppercase; white-space: normal; word-wrap: break-word;"> Log In </button> </p> </div> <div class="isv-email__footer" style=" display: block; max-width: 780px; width: 80%; position: relative; z-index: 2; margin: 1rem auto 0 auto; padding: 2rem; font-family: Arial, Helvetica, sans-serif; text-align: center;"> <p class="isv-email__text" style=" font-size: 1rem;"> <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300;"> Link One </a>&nbsp;&#124;&nbsp; <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300;"> Link Two </a>&nbsp;&#124;&nbsp; <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300;"> Link Three </a> </p> <p class="isv-email__text"> <small> Copyright © 2017 Corelate ISV, All rights reserved.<br /> You are receiving this email because of reasons. </small> </p> <p class="isv-email__text"> <small> <strong>Our Mailing Address is:</strong> <br /> <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300; text-decoration: underline;"> email@email.com </a><br /> Address Line 1 </small> </p> <p class="isv-email__text"> <small> If these emails get annoying, please feel free to <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300; text-decoration: underline;"> Unsubscribe </a> </small> </p> </div> </div>'),
      (5, 'N', 'ACTIVATION_MAIL_TEMPLATE', '<div class="isv-email__container" style=" display: block; width: 100%; background-color: #f5f5f5; margin: auto; padding: 0 0 2rem 0; position: relative; overflow: auto;"> <div class="isv-email__header" style=" display: block; width: 100%; margin: auto; padding: 3rem 0 5rem 0; position: relative; background-color: #01579b; z-index: 1;"> <img src="https://isv.corelate.net/assets/images/logo-corelate.png" class="isv-brand" alt="Site Name" style=" display: block; margin: auto; max-width: 100%"> </div> <div class="isv-email__body" style=" display: block; max-width: 780px; width: 80%; position: relative; background-color: #ffffff; z-index: 2; margin: -3rem auto 0 auto; padding: 2rem; border-radius: .25rem; font-family: Arial, Helvetica, sans-serif; text-align: center;"> <h2 class="isv-email__title" style=" text-align: center; font-size: 2.2rem; font-weight: 300; line-height: 2.4rem; padding: 0 0 1rem 0;"> Welcome to Corelate ISV. </h2> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> Hi {{name}}, </p> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> Thank you for signing up! Your account details below: </p> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> <strong>Username:</strong> {{username}}<br/> <strong>Password:</strong> {{password}} </p> <p class="isv-email__text" style=" text-align: center; font-size: 1.1rem; line-height: 1.5rem;"> Activate your account to log in: </p> <p style=" text-align: center;"> <a href="{{activationCode}}"> <button class="isv-email__button" style=" background-color: #01579b; color: #ffffff; font-size: 1.2rem; font-weight: 300; margin: 1rem auto 2rem auto; padding: 1rem 2.4rem; border-radius: .25rem; border: 0; text-transform: uppercase; white-space: normal; word-wrap: break-word;"> Activate </button> </a> </p> </div> <div class="isv-email__footer" style=" display: block; max-width: 780px; width: 80%; position: relative; z-index: 2; margin: 1rem auto 0 auto; padding: 2rem; font-family: Arial, Helvetica, sans-serif; text-align: center;"> <p class="isv-email__text" style=" font-size: 1rem;"> <a href="#" class="isv-email__link" style=" color: #01579b; font-weight: 300;"> Link One </a>&nbsp;&#124;&nbsp; <a href="#" class="isv-email__link" style=" color: #01579b; font-weight: 300;"> Link Two </a>&nbsp;&#124;&nbsp; <a href="#" class="isv-email__link" style=" color: #01579b; font-weight: 300;"> Link Three </a> </p> <p class="isv-email__text"> <small> Copyright © 2017 Corelate ISV, All rights reserved.<br /> You are receiving this email because of reasons. </small> </p> <p class="isv-email__text"> <small> <strong>Our Mailing Address is:</strong> <br /> <a href="#" class="isv-email__link" style=" color: #01579b; font-weight: 300; text-decoration: underline;"> email@email.com </a><br /> Address Line 1 </small> </p> <p class="isv-email__text"> <small> If these emails get annoying, please feel free to <a href="#" class="isv-email__link" style=" color: #01579b; font-weight: 300; text-decoration: underline;"> Unsubscribe </a> </small> </p> </div> </div>'),
      (6, 'N', 'ACTIVATION_MAIL_SUCCESS_TEMPLATE', '<div class="isv-email__container" style=" display: block; width: 100%; background-color: #f5f5f5; margin: auto; padding: 0 0 2rem 0; position: relative; overflow: auto;"> <div class="isv-email__header" style=" display: block; width: 100%; margin: auto; padding: 3rem 0 5rem 0; position: relative; background-color: #7cb342; z-index: 1;"> <img src="https://isv.corelate.net/assets/images/logo-corelate.png" class="isv-brand" alt="Site Name" style=" display: block; margin: auto; max-width: 100%"> </div> <div class="isv-email__body" style=" display: block; max-width: 780px; width: 80%; position: relative; background-color: #ffffff; z-index: 2; margin: -3rem auto 0 auto; padding: 2rem; border-radius: .25rem; font-family: Arial, Helvetica, sans-serif; text-align: center;"> <h2 class="isv-email__title" style=" text-align: center; font-size: 2.2rem; font-weight: 300; line-height: 2.4rem; padding: 0 0 1rem 0;"> Your Account Has Been Activated! </h2> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> Hi {{name}}, </p> <p class="isv-email__text" style=" text-align: left; font-size: 1.1rem; line-height: 1.5rem;"> You have successfully activated your Corelate ISV account. You can log in below. </p> <p class="isv-email__text" style=" text-align: center; font-size: 1.1rem; line-height: 1.5rem;"> <strong>Username:</strong> {{username}} </p> <p style=" text-align: center;"> <button class="isv-email__button" style=" background-color: #7cb342; color: #ffffff; font-size: 1.2rem; font-weight: 300; margin: 1rem auto 2rem auto; padding: 1rem 2.4rem; border-radius: .25rem; border: 0; text-transform: uppercase; white-space: normal; word-wrap: break-word;"> Log In </button> </p> </div> <div class="isv-email__footer" style=" display: block; max-width: 780px; width: 80%; position: relative; z-index: 2; margin: 1rem auto 0 auto; padding: 2rem; font-family: Arial, Helvetica, sans-serif; text-align: center;"> <p class="isv-email__text" style=" font-size: 1rem;"> <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300;"> Link One </a>&nbsp;&#124;&nbsp; <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300;"> Link Two </a>&nbsp;&#124;&nbsp; <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300;"> Link Three </a> </p> <p class="isv-email__text"> <small> Copyright © 2017 Corelate ISV, All rights reserved.<br /> You are receiving this email because of reasons. </small> </p> <p class="isv-email__text"> <small> <strong>Our Mailing Address is:</strong> <br /> <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300; text-decoration: underline;"> email@email.com </a><br /> Address Line 1 </small> </p> <p class="isv-email__text"> <small> If these emails get annoying, please feel free to <a href="#" class="isv-email__link" style=" color: #7cb342; font-weight: 300; text-decoration: underline;"> Unsubscribe </a> </small> </p> </div> </div>');

INSERT INTO CONTACT_INFO(id, deleted, address, longitude, latitude)
    VALUES
      (1, 'N', '314 Corporate 101 Mother Ignacia Ave., QC', '121.055641', '14.587580');

INSERT INTO CONTACT_DETAILS(id, deleted, contact_info_id, contact_type, contact_details)
    VALUES
      (1, 'N', 1, 'Phone No.', '+632 921 5326'),
      (2, 'N', 1,  'Mobile No.', '+63 917 8494198'),
      (3, 'N', 1,  'Mobile No.', '+63 917 5793567');

INSERT INTO BLOCK(id, deleted)
    VALUES
      (1, 'N');

WITH DATA(block_panel_id, content, position)
AS(
  VALUES
      (1, 'CAROUSEL', 1),
      (2, 'NEWS', 1),
      (3, 'HELP', 1),
      (4, 'ANNOUNCEMENTS', 1),
      (5, 'FAQ', 1),
      (6, 'CONTACT_FORM', 1),
      (7, 'CONTACT_INFO', 1),
      (8, 'CUSTOM_CONTENT', 1),
      (9, 'GRID', 1),
      (10, 'NEWS', 1),
      (10, 'ANNOUNCEMENTS', 2),
      (11, 'HELP', 1),
      (11, 'FAQ', 2),
      (12, 'CONTACT_FORM', 1),
      (12, 'CONTACT_INFO', 2),
      (13, 'CUSTOM_CONTENT', 1),
      (13, 'GRID', 2)
)
INSERT INTO BLOCK_PANEL_CONTENT(block_panel_id, content, position)
  SELECT d.block_panel_id, d.content, d.position
  FROM DATA d
  WHERE NOT EXISTS (
      SELECT 1
      FROM BLOCK_PANEL_CONTENT bpc
      WHERE
        bpc.block_panel_id = d.block_panel_id
        AND bpc.content = d.content
        AND bpc.position = d.position);


INSERT INTO COLOR_CONFIG(id, deleted, header_background_color, header_text_color, navigation_background_color,
                          navigation_text_color, footer_background_color, footer_text_color, buttons_primary_color,
                          buttons_primary_text_color, buttons_secondary_color, buttons_secondary_text_color)
    VALUES
      (1, 'N', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000', '#000');

INSERT INTO SIMPLE_LAYOUT(id, deleted, content, heading)
    VALUES(1, 'N', 'Sample Content', 'Sample Heading');

INSERT INTO GRID_LAYOUT(id, deleted, description, heading)
    VALUES(1, 'N', 'Sample Grid Description', 'Sample Grid Heading');

INSERT INTO GRID_ITEM(id, deleted, content, excerpt, position, title, grid_layout_id)
    VALUES
      (1, 'N', 'Sample Grid Content', 'Sample Grid Excerpt', 1, 'Sample Grid Title', 1),
      (2, 'N', 'Sample Grid Content', 'Sample Grid Excerpt', 2, 'Sample Grid Title', 1);