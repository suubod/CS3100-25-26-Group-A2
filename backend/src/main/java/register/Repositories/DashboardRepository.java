package register.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import register.Models.Dashboard;

// This interface gives you full CRUD (Create, Read, Update, Delete) access
public interface DashboardRepository extends JpaRepository<Dashboard, Long> {

}

