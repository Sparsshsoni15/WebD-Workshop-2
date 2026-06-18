package com.example.student_rest_api;

import org.springframework.web.bind.annotation.*;

@RestController
public class StudentController {

    @GetMapping("/")
    public String welcome() {
        return "Welcome to Student Management REST API";
    }

    @GetMapping("/student")
    public Student getStudent() {
        return new Student(101, "Animesh Gautam", "Computer Science");
    }

    @PostMapping("/student")
    public Student addStudent(@RequestBody Student student) {
        return student;
    }
}
