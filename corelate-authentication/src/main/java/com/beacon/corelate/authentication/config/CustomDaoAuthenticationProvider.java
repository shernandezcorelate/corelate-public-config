package com.beacon.corelate.authentication.config;

import com.beacon.corelate.authentication.client.ConfigServerClient;
import com.beacon.corelate.authentication.service.UserClientDetailService;
import org.apache.commons.codec.binary.Base64;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import static com.beacon.corelate.commons.util.EncryptionUtil.bCryptPasswordEncoder;


/**
 * @author ddevera
 */
public class CustomDaoAuthenticationProvider extends DaoAuthenticationProvider {

    private static final Logger LOG = LoggerFactory.getLogger(CustomDaoAuthenticationProvider.class);

    private PasswordEncoder passwordEncoder;
    private ConfigServerClient configServerClient;
    private UserClientDetailService userClientDetailService;

    public CustomDaoAuthenticationProvider(ConfigServerClient configServerClient, UserClientDetailService userClientDetailService) {
        if (this.passwordEncoder == null) {
            this.passwordEncoder = bCryptPasswordEncoder;
        }

        this.configServerClient = configServerClient;
        this.userClientDetailService = userClientDetailService;
    }

    @Override
    protected void additionalAuthenticationChecks(UserDetails userDetails, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {
        if (authentication.getCredentials() == null) {
            this.logger.debug("Authentication failed: no credentials provided");
            throw new BadCredentialsException(this.messages.getMessage("AbstractUserDetailsAuthenticationProvider.badCredentials", "Bad credentials"));
        } else {
            String presentedPassword = authentication.getCredentials().toString();
            if (!this.passwordEncoder.matches(presentedPassword, userDetails.getPassword())) {
                this.logger.debug("Authentication failed: password does not match stored value");
                throw new BadCredentialsException("The email and password you entered don't match.");
            } else {
                String token = userDetails.getUsername() + ":" + presentedPassword;
                String basicAuthentication = new String(Base64.encodeBase64(token.getBytes()));
                String encryptedBasicAuthentication = configServerClient.encrypt(token);

                LOG.debug("User basic token: {}", token);
                LOG.debug("User basic authentication: {}", basicAuthentication);
                LOG.debug("User basic authentication encrypted: {}", encryptedBasicAuthentication);

                userClientDetailService.save(userDetails.getUsername(), encryptedBasicAuthentication);
            }
        }
    }
}
