const User = `CREATE TRIGGER trg_user_timestamps BEFORE INSERT OR UPDATE ON "User" FOR EACH ROW EXECUTE FUNCTION set_timestamps();`;
const Batch = `CREATE TRIGGER trg_batch_timestamps BEFORE INSERT OR UPDATE ON "Batch" FOR EACH ROW EXECUTE FUNCTION set_timestamps();`;
const Department = `CREATE TRIGGER trg_department_timestamps BEFORE INSERT OR UPDATE ON "Department" FOR EACH ROW EXECUTE FUNCTION set_timestamps();`;
const Course = `CREATE TRIGGER trg_course_timestamps BEFORE INSERT OR UPDATE ON "Course" FOR EACH ROW EXECUTE FUNCTION set_timestamps();`;
const Module = `CREATE TRIGGER trg_module_timestamps BEFORE INSERT OR UPDATE ON "Module" FOR EACH ROW EXECUTE FUNCTION set_timestamps();`;
const Assignment = `CREATE TRIGGER trg_assignment_timestamps BEFORE INSERT OR UPDATE ON "Assignment" FOR EACH ROW EXECUTE FUNCTION set_timestamps();`;
const Submission = `CREATE TRIGGER trg_submission_timestamps BEFORE INSERT OR UPDATE ON "Submission" FOR EACH ROW EXECUTE FUNCTION set_timestamps();`;
const Attendance = `CREATE TRIGGER trg_attendance_timestamps BEFORE INSERT OR UPDATE ON "Attendance" FOR EACH ROW EXECUTE FUNCTION set_timestamps();`;
const Assessment = `CREATE TRIGGER trg_assessment_timestamps BEFORE INSERT OR UPDATE ON "Assessment" FOR EACH ROW EXECUTE FUNCTION set_timestamps();`;
const Evaluation = `CREATE TRIGGER trg_evaluation_timestamps BEFORE INSERT OR UPDATE ON "Evaluation" FOR EACH ROW EXECUTE FUNCTION set_timestamps();`;
const Requests = `CREATE TRIGGER trg_requests_timestamps BEFORE INSERT OR UPDATE ON "Requests" FOR EACH ROW EXECUTE FUNCTION set_timestamps();`;
const Topics = `CREATE TRIGGER trg_topics_timestamps BEFORE INSERT OR UPDATE ON "Topics" FOR EACH ROW EXECUTE FUNCTION set_timestamps();`;

module.exports = {
  User,
  Batch,
  Department,
  Course,
  Module,
  Assignment,
  Submission,
  Attendance,
  Assessment,
  Evaluation,
  Requests,
  Topics,
};
