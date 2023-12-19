package com.example.demo.Model;

public class Client {

    private Long id;
    private String name;
    private String email;
    private String FirstName;
    private String LastName;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
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
    public String getFirstName() {
        return FirstName;
    }
    public void setFirstName(String firstName) {
        FirstName = firstName;
    }

    @Override
    public String toString() {
        return "AddClient{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                ", FirstName='" + FirstName + '\'' +
                ", LastName='" + LastName + '\'' +
                '}';
    }

    public Client(Long id, String name, String email, String firstName, String lastName) {
        this.id = id;
        this.name = name;
        this.email = email;
        FirstName = firstName;
        LastName = lastName;
    }
    public Client( String name, String email, String firstName, String lastName) {
        this.name = name;
        this.email = email;
        FirstName = firstName;
        LastName = lastName;
    }


    public String getLastName() {
        return LastName;
    }
    public void setLastName(String lastName) {
        LastName = lastName;
    }
}
