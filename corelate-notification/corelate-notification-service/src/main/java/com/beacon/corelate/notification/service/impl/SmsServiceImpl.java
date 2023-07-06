package com.beacon.corelate.notification.service.impl;

import com.beacon.corelate.notification.dto.SmsDto;
import com.beacon.corelate.notification.service.SmsService;
import com.google.common.collect.Lists;
import org.apache.http.NameValuePair;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.message.BasicNameValuePair;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

/**
 * @author ddevera
 */
@Service
public class SmsServiceImpl implements SmsService {

    private static final Logger LOG = LoggerFactory.getLogger(SmsServiceImpl.class);

    private static final String CONNECTION = "http";
    private static final String URL = "www.semaphore.co";
    private static final String URL_PATH = "/api/sms";

    private static final String MESSAGE_FROM = "TRADE";

    @Value("${sms.semaphore.connection}")
    private String smsConnectionType;

    @Value("${sms.semaphore.url.domain}")
    private String smsUrl;

    @Value("${sms.semaphore.url.path}")
    private String smsUrlPath;

    @Value("${sms.semaphore.enabled}")
    private String smsEnabled;

    @Value("${sms.semaphore.key}")
    private String smsKey;

    @Value("${sms.semaphore.sender}")
    private String smsSender;

    @Override
    public void sendMessage(List<String> mobileNumbers, String message) {
        mobileNumbers.parallelStream().forEach(mobileNumber -> sendMessage(mobileNumber, message));
    }

    @Override
    public void sendMessage(SmsDto smsDto) {
        sendMessage(smsDto.getMobileNumber(), smsDto.getText());
    }

    @Async
    @Override
    public void sendAsyncMessage(SmsDto smsDto) {
        sendMessage(smsDto);
    }

    @Async
    @Override
    public void sendMessage(String mobileNumber, String message) {
        if ("Y".equalsIgnoreCase(smsEnabled)) {
            LOG.info("Sending Message to : {} with message : {}", mobileNumber, message);

            CloseableHttpClient httpClient = HttpClients.createDefault();

            try {
                URI uri = new URIBuilder()
                        .setScheme(CONNECTION)
                        .setHost(URL)
                        .setPath(URL_PATH)
                        .build();

                List<NameValuePair> nameValuePairs = Lists.newArrayList();
                nameValuePairs.add(new BasicNameValuePair("api", smsKey));
                nameValuePairs.add(new BasicNameValuePair("message", message));
                nameValuePairs.add(new BasicNameValuePair("number", mobileNumber));
                nameValuePairs.add(new BasicNameValuePair("from", MESSAGE_FROM));

                HttpPost httpPost = new HttpPost(uri);
                httpPost.setEntity(new UrlEncodedFormEntity(nameValuePairs));

                LOG.info("Executing request {}", httpPost.getRequestLine());

                CloseableHttpResponse response = httpClient.execute(httpPost);
                int statusCode = response.getStatusLine().getStatusCode();
                if (statusCode >= 200) {
                    LOG.info("Successfully sent message : {} to : {}", message, mobileNumber);
                } else {
                    LOG.error("Unable to send message to : {} with message : {} with error code : {}", message, mobileNumber, statusCode);
                }

                response.close();

            } catch (URISyntaxException | IOException e) {
                LOG.error(e.getMessage(), e);
            } finally {
                try {
                    httpClient.close();
                } catch (IOException e) {
                    LOG.error(e.getMessage(), e);
                }
            }
        }
    }
}
