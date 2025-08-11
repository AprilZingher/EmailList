package com.example.springboot;

public class UserExport {
    private String name;
    private String email;

    public UserExport(User user1){
        this.name = user1.getName();
        this.email = user1.getEmail();
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}
