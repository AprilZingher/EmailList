package com.example.springboot;

import java.util.List;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:80")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    @GetMapping("/users")
    public List<UserExport> getUsers() {
        Iterable<User> users = userRepository.findAll();
        return StreamSupport.stream(users.spliterator(), false)
            .map(user -> new UserExport(user))
            .toList();
    }

    @PostMapping("/users")
    void addUser(@RequestBody UserForm userform) {
        User user1 = new User(userform.getUsername(), userform.getEmail());
        String pass1 = passwordEncoder.encode(userform.getPassword());
        user1.setPassHash(pass1);
        System.out.println(userform.getUsername());
        userRepository.save(user1);

    }
}
