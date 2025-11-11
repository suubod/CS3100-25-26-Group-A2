package register.Models;

import jakarta.persistence.*;

@Entity
@Table(name = "dashboard") 
public class Dashboard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String subjectName;

    @Column(nullable = false)
    private int tasksDueThisWeek;

    @Column(nullable = false)
    private int totalTasks;

    @Column(nullable = false)
    private int completedTasks;

    // Constructors
    public Dashboard() {}

    public Dashboard(String subjectName, int tasksDueThisWeek, int totalTasks, int completedTasks) {
        this.subjectName = subjectName;
        this.tasksDueThisWeek = tasksDueThisWeek;
        this.totalTasks = totalTasks;
        this.completedTasks = completedTasks;
    }

    // Getters and setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getSubjectName() { return subjectName; }
    public void setSubjectName(String subjectName) { this.subjectName = subjectName; }

    public int getTasksDueThisWeek() { return tasksDueThisWeek; }
    public void setTasksDueThisWeek(int tasksDueThisWeek) { this.tasksDueThisWeek = tasksDueThisWeek; }

    public int getTotalTasks() { return totalTasks; }
    public void setTotalTasks(int totalTasks) { this.totalTasks = totalTasks; }

    public int getCompletedTasks() { return completedTasks; }
    public void setCompletedTasks(int completedTasks) { this.completedTasks = completedTasks; }
}
