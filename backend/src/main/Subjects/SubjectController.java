package subjects;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/subjects")
@CrossOrigin
public class SubjectController {

    @PostMapping
    public ResponseEntity<Subject> addSubject(@RequestBody Subject subject) {
        if (subject.getName() == null || subject.getName().trim().isEmpty()) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.status(201).body(subject);
    }
}
