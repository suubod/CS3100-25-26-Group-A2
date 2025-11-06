package register.Repositories;

import register.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

//Methods for User (SQL)
public interface UserRepository extends JpaRepository<User, Long> {

    boolean existsByEmail(String email);
}