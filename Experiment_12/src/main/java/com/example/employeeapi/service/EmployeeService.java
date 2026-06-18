package com.example.employeeapi.service;

import com.example.employeeapi.model.Employee;
import com.example.employeeapi.repository.EmployeeRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    private final EmployeeRepository repository;

    public EmployeeService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public Employee addEmployee(Employee employee) {
        return repository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return repository.findById(id);
    }

    public Employee updateEmployee(Long id, Employee employeeDetails) {
        Employee employee = repository.findById(id).orElseThrow();

        employee.setName(employeeDetails.getName());
        employee.setDepartment(employeeDetails.getDepartment());
        employee.setSalary(employeeDetails.getSalary());

        return repository.save(employee);
    }

    public void deleteEmployee(Long id) {
        repository.deleteById(id);
    }
}
