package com.beacon.corelate.rules.config.support;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.NestedConfigurationProperty;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties("isv.storage")
public class FileStorageProperties {

    private ClientType clientType;
    @NestedConfigurationProperty
    private LocalConfig local = new LocalConfig();
    @NestedConfigurationProperty
    private RemoteConfig remote = new RemoteConfig();


    public enum ClientType {
        LOCAL, REMOTE
    }

    public static class LocalConfig {
        private String rootFolder = System.getProperty("java.io.tmpdir");

        public String getRootFolder() {
            return rootFolder;
        }

        public void setRootFolder(String rootFolder) {
            this.rootFolder = rootFolder;
        }
    }

    public static class RemoteConfig {
        private String url;
        private String accessKey;
        private String secretKey;
        private String secure;
        private String region;

        public String getUrl() {
            return url;
        }

        public void setUrl(String url) {
            this.url = url;
        }

        public String getAccessKey() {
            return accessKey;
        }

        public void setAccessKey(String accessKey) {
            this.accessKey = accessKey;
        }

        public String getSecretKey() {
            return secretKey;
        }

        public void setSecretKey(String secretKey) {
            this.secretKey = secretKey;
        }

        public String getSecure() {
            return secure;
        }

        public void setSecure(String secure) {
            this.secure = secure;
        }

        public String getRegion() {
            return region;
        }

        public void setRegion(String region) {
            this.region = region;
        }
    }

    public ClientType getClientType() {
        return clientType;
    }

    public void setClientType(ClientType clientType) {
        this.clientType = clientType;
    }

    public LocalConfig getLocal() {
        return local;
    }

    public void setLocal(LocalConfig local) {
        this.local = local;
    }

    public RemoteConfig getRemote() {
        return remote;
    }

    public void setRemote(RemoteConfig remote) {
        this.remote = remote;
    }
}
