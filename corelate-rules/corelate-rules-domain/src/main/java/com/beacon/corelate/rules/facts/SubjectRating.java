package com.beacon.corelate.rules.facts;

public class SubjectRating {

    private String subject;
    private int rating;

    public SubjectRating(String subject, int rating) {
        this.subject = subject;
        this.rating = rating;
    }

    public String getSubject() {
        return subject;
    }

    public int getRating() {
        return rating;
    }
}
