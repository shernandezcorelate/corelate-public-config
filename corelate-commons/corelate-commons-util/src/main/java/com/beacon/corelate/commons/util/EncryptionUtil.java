package com.beacon.corelate.commons.util;

import org.apache.commons.lang3.StringUtils;
import org.springframework.security.authentication.encoding.ShaPasswordEncoder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.regex.Pattern;


public class EncryptionUtil {

    public static final BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();

    public static final ShaPasswordEncoder shaPasswordEncoder = new ShaPasswordEncoder();

    private static final Pattern IGNORED_CHARS_PATTERN = Pattern.compile("\\p{Punct}");

    public static String encryptPassword(String password) {
        return bCryptPasswordEncoder.encode(password);
    }

    public static Collection<String> splitSearchTermAndRemoveIgnoredCharacters(String searchTerm) {
        String[] searchTerms = StringUtils.split(searchTerm, " ");
        List<String> result = new ArrayList(searchTerms.length);
        for (String term : searchTerms) {
            if (StringUtils.isNotEmpty(term)) {
                result.add(IGNORED_CHARS_PATTERN.matcher(term).replaceAll(" "));
            }
        }
        return result;
    }

    public static String encryptDataStore(String name) {
        return shaPasswordEncoder.encodePassword(name, null);
    }

    public static String quote(String text) {
        return "\"".concat(text).concat("\"");
    }
}
