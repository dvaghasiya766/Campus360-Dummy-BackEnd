const ADD_FK_USER = `ALTER TABLE "User"
  ADD CONSTRAINT fk_user_batch FOREIGN KEY (batch_id) REFERENCES "Batch"(id),
  ADD CONSTRAINT fk_user_semester FOREIGN KEY (semester_id) REFERENCES "Semester"(id),
  ADD CONSTRAINT fk_user_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_user_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_user_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);`;

const ADD_FK_BATCH = `ALTER TABLE "Batch"
  ADD CONSTRAINT fk_batch_department FOREIGN KEY (department_id) REFERENCES "Department"(id),
  ADD CONSTRAINT fk_batch_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_batch_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_batch_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);`;

const ADD_FK_DEPARTMENT = `ALTER TABLE "Department"
  ADD CONSTRAINT fk_department_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_department_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_department_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);`;

const ADD_FK_COURES = `ALTER TABLE "Course"
  ADD CONSTRAINT fk_course_department FOREIGN KEY (department_id) REFERENCES "Department"(id),
  ADD CONSTRAINT fk_course_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_course_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_course_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);`;

const ADD_FK_MODULE = `ALTER TABLE "Module"
  ADD CONSTRAINT fk_module_course FOREIGN KEY (course_id) REFERENCES "Course"(id),
  ADD CONSTRAINT fk_module_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_module_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_module_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);`;

const ADD_FK_PAT = `ALTER TABLE "PAT"
  ADD CONSTRAINT fk_pat_user FOREIGN KEY (user_id) REFERENCES "User"(id);`;

const ADD_FK_ASSIGNMENT = `ALTER TABLE "Assignment"
  ADD CONSTRAINT fk_assignment_module FOREIGN KEY (module_id) REFERENCES "Module"(id),
  ADD CONSTRAINT fk_assignment_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_assignment_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_assignment_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);`;

const ADD_FK_SUBMISSION = `ALTER TABLE "Submission"
  ADD CONSTRAINT fk_submission_assignment FOREIGN KEY (assignment_id) REFERENCES "Assignment"(id),
  ADD CONSTRAINT fk_submission_student FOREIGN KEY (student_id) REFERENCES "User"(id),
  ADD CONSTRAINT fk_submission_graded_by FOREIGN KEY (graded_by) REFERENCES "User"(id);`;

const ADD_FK_ATTENDANCE = `ALTER TABLE "Attendance"
  ADD CONSTRAINT fk_attendance_course FOREIGN KEY (course_id) REFERENCES "Course"(id),
  ADD CONSTRAINT fk_attendance_faculty FOREIGN KEY (faculty_id) REFERENCES "User"(id),
  ADD CONSTRAINT fk_attendance_student FOREIGN KEY (student_id) REFERENCES "User"(id),
  ADD CONSTRAINT fk_attendance_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id);`;

const ADD_FK_ASSESSMENTS = `ALTER TABLE "Assessment"
  ADD CONSTRAINT fk_assessment_module FOREIGN KEY (module_id) REFERENCES "Module"(id),
  ADD CONSTRAINT fk_assessment_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_assessment_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_assessment_publish_by FOREIGN KEY (publish_by) REFERENCES "User"(id);`;

const ADD_FK_EVALUATION = `ALTER TABLE "Evaluation"
  ADD CONSTRAINT fk_evaluation_student FOREIGN KEY (student_id) REFERENCES "User"(id),
  ADD CONSTRAINT fk_evaluation_assessment FOREIGN KEY (assessment_id) REFERENCES "Assessment"(id),
  ADD CONSTRAINT fk_evaluation_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_evaluation_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_evaluation_publish_by FOREIGN KEY (publish_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_evaluation_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);`;

const ADD_FK_REQUESTS = `ALTER TABLE "Requests"
  ADD CONSTRAINT fk_requests_sender FOREIGN KEY (sender_id) REFERENCES "User"(id),
  ADD CONSTRAINT fk_requests_receiver FOREIGN KEY (receiver_id) REFERENCES "User"(id);`;

const ADD_FK_TOPICS = `ALTER TABLE "Topics"
  ADD CONSTRAINT fk_topics_module FOREIGN KEY (module_id) REFERENCES "Module"(id),
  ADD CONSTRAINT fk_topics_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_topics_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_topics_publish_by FOREIGN KEY (publish_by) REFERENCES "User"(id);`;

module.exports = {
  ADD_FK_USER,
  ADD_FK_BATCH,
  ADD_FK_DEPARTMENT,
  ADD_FK_COURES,
  ADD_FK_MODULE,
  ADD_FK_PAT,
  ADD_FK_ASSIGNMENT,
  ADD_FK_SUBMISSION,
  ADD_FK_ATTENDANCE,
  ADD_FK_ASSESSMENTS,
  ADD_FK_EVALUATION,
  ADD_FK_REQUESTS,
  ADD_FK_TOPICS,
};
