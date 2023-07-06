package com.beacon.corelate.rules;

import com.beacon.corelate.rules.config.TestApplicationConfig;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.ComponentScan;

@SpringBootTest
@ComponentScan(basePackageClasses = TestApplicationConfig.class)
public class BaseTest {

}
