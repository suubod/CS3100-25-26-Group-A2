package register.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import register.Models.Dashboard;
import register.Repositories.DashboardRepository;

import java.util.List;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin(origins = "http://localhost:3000") 
public class DashboardController {

    @Autowired
    private DashboardRepository dashboardRepository;

    // ✅ Get all dashboard items
    @GetMapping
    public List<Dashboard> getAllItems() {
        return dashboardRepository.findAll();
    }

    // ✅ Add a new dashboard item
    @PostMapping
    public Dashboard addItem(@RequestBody Dashboard item) {
        return dashboardRepository.save(item);
    }

    // ✅ Delete a dashboard item by ID
    @DeleteMapping("/{id}")
    public void deleteItem(@PathVariable Long id) {
        dashboardRepository.deleteById(id);
    }
}

