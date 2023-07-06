package com.beacon.corelate.notification.service;


import com.beacon.corelate.notification.dto.SmsDto;

import java.util.List;

/**
 * @author ddevera
 */
public interface SmsService {

    void sendMessage(String mobileNumber, String message);

    void sendMessage(SmsDto smsDto);

    void sendAsyncMessage(SmsDto smsDto);

    void sendMessage(List<String> mobileNumbers, String message);
}
