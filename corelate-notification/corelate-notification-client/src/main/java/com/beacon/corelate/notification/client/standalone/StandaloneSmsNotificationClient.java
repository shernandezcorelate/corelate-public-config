package com.beacon.corelate.notification.client.standalone;

import com.beacon.corelate.notification.client.SmsNotificationClient;
import com.beacon.corelate.notification.dto.SmsDto;

import java.util.List;

/**
 * @author ddevera
 */
public class StandaloneSmsNotificationClient implements SmsNotificationClient {

    @Override
    public void sendSingleSms(SmsDto smsDto) {

    }

    @Override
    public void sendAsyncSingleSms(SmsDto smsDto) {

    }

    @Override
    public void sendMultipleSms(List<String> mobileNumbers, String message) {

    }
}
