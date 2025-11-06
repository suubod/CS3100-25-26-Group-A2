package register.Models;

import jakarta.persistence.*;

//User Table generation
@Entity
@Table(name = "users") 
public class User {
    
    //Define the fields in table
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    private Long id;
    
    @Column(nullable = false, unique = true)
    private String email;
    
    @Column(nullable = false)
    private String password;
    
    @Column(nullable = false)
    private String role;
    
    @Column(nullable = false)
    private String address;
    
    //Constructors
    public User() {}

    public User(String role, String email, String address, String password) {
        this.role = role;
        this.email = email;
        this.address = address;
        this.password = password;
    }

    //Getters & Setters Methods
    public Long getId() {
        return id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}