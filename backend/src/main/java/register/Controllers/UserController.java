package register.Controllers;

import register.Models.User;
import register.Repositories.UserRepository; 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000") 
public class UserController {

    @Autowired
    private UserRepository userRepository;


    // Get all users
    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Register a new user
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        
        //Check if the email is already in use
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity
                    .status(HttpStatus.CONFLICT) // HTTP 409 Conflict
                    .body("Error: Email is already in use.");
        }

        //Save the new user
        User savedUser = userRepository.save(user);

        //Response message output for backend confirmation DO NOT confuse with frontend output
        return ResponseEntity.ok("User registered successfully, and welcome email sent!");
    }
}