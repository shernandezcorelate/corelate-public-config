package com.beacon.corelate.zuul.filter;

import com.beacon.corelate.zuul.client.ConfigServerClient;
import com.beacon.corelate.zuul.client.UserClient;
import com.netflix.zuul.ZuulFilter;
import com.netflix.zuul.context.RequestContext;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;

import static org.apache.commons.codec.binary.Base64.encodeBase64;

/**
 * @author ddevera
 */
@Component
public class BpmnFilter extends ZuulFilter {

    @Autowired
    private ConfigServerClient configServerClient;

    @Autowired
    private UserClient userClient;

    @Override
    public String filterType() {
        return "pre";
    }

    @Override
    public int filterOrder() {
        return 20;
    }

    @Override
    public boolean shouldFilter() {
        RequestContext ctx = RequestContext.getCurrentContext();

        if (ctx.get("proxy") != null && ctx.get("proxy").equals("bpmn")) {
            return true;
        }
        return false;
    }

    @Override
    public Object run() {
        RequestContext ctx = RequestContext.getCurrentContext();

        HttpServletRequest request = ctx.getRequest();
        String header = request.getHeader("Authorization");

        ctx.getRequest().getRequestURL();

        String encryptedBasicAuth = userClient.getBasicAuth(header);

        if (StringUtils.isNotEmpty(encryptedBasicAuth)) {
            String basicAuth = configServerClient
                    .decrypt(
                            StringUtils
                                    .replace(
                                            encryptedBasicAuth,
                                            "\"",
                                            ""));

            String encodedBasicAuth = new String(encodeBase64(basicAuth.getBytes()));

            ctx.addZuulRequestHeader("Authorization", "Basic " + encodedBasicAuth);
        }
        return null;
    }
}
