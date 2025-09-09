const ADD_FK_USER = `ALTER TABLE "User"
  ADD CONSTRAINT fk_user_batch FOREIGN KEY (batch_id) REFERENCES "Batch"(id),
  ADD CONSTRAINT fk_user_semester FOREIGN KEY (semester_id) REFERENCES "Semester"(id),
  ADD CONSTRAINT fk_user_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_user_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_user_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);
`;

const ADD_FK_DEPARTMENT = `ALTER TABLE "Department"
  ADD CONSTRAINT fk_department_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_department_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_department_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);
`;

const ADD_FK_COURES = `ALTER TABLE "Course"
  ADD CONSTRAINT fk_course_department FOREIGN KEY (department_id) REFERENCES "Department"(id),
  ADD CONSTRAINT fk_course_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_course_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_course_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);
`;

const ADD_FK_SYLLABUS = `ALTER TABLE "Syllabus"
  ADD CONSTRAINT fk_syllabus_course FOREIGN KEY (course_id) REFERENCES "Course"(id),
  ADD CONSTRAINT fk_syllabus_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_syllabus_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_syllabus_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);
`;

const ADD_FK_BATCH = `ALTER TABLE "Batch"
  ADD CONSTRAINT fk_batch_department FOREIGN KEY (department_id) REFERENCES "Department"(id),
  ADD CONSTRAINT fk_batch_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_batch_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_batch_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);
`;

const ADD_FK_PAT = `ALTER TABLE "PAT"
  ADD CONSTRAINT fk_pat_user FOREIGN KEY (user_id) REFERENCES "User"(id);
`;

const ADD_FK_ASSIGNMENT = `ALTER TABLE "Assignment"
  ADD CONSTRAINT fk_assignment_course FOREIGN KEY (course_id) REFERENCES "Course"(id),
  ADD CONSTRAINT fk_assignment_module FOREIGN KEY (module_id) REFERENCES "Syllabus"(id),
  ADD CONSTRAINT fk_assignment_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_assignment_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_assignment_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);
`;

const ADD_FK_SUBMISSION = `ALTER TABLE "Submission"
  ADD CONSTRAINT fk_submission_assignment FOREIGN KEY (assignment_id) REFERENCES "Assignment"(id),
  ADD CONSTRAINT fk_submission_student FOREIGN KEY (student_id) REFERENCES "User"(id),
  ADD CONSTRAINT fk_submission_graded_by FOREIGN KEY (graded_by) REFERENCES "User"(id);
`;

const ADD_FK_ATTENDANCE = `ALTER TABLE "Attendance"
  ADD CONSTRAINT fk_attendance_course FOREIGN KEY (course_id) REFERENCES "Course"(id),
  ADD CONSTRAINT fk_attendance_faculty FOREIGN KEY (faculty_id) REFERENCES "User"(id),
  ADD CONSTRAINT fk_attendance_student FOREIGN KEY (student_id) REFERENCES "User"(id),
  ADD CONSTRAINT fk_attendance_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id);
`;

const ADD_FK_EVALUATION = `ALTER TABLE "Evaluation"
  ADD CONSTRAINT fk_eval_student FOREIGN KEY (student_id) REFERENCES "User"(id),
  ADD CONSTRAINT fk_eval_assessment FOREIGN KEY (assessment_id) REFERENCES "Assessments"(id),
  ADD CONSTRAINT fk_eval_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_eval_updated_by FOREIGN KEY (updated_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_eval_publish_by FOREIGN KEY (publish_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_eval_deleted_by FOREIGN KEY (deleted_by) REFERENCES "User"(id);
`;

const ADD_FK_REQUESTS = `ALTER TABLE "Requests"
  ADD CONSTRAINT fk_requests_sender FOREIGN KEY (sender_id) REFERENCES "User"(id),
  ADD CONSTRAINT fk_requests_receiver FOREIGN KEY (receiver_id) REFERENCES "User"(id);
`;

const ADD_FK_ASSESSMENTS = `ALTER TABLE "Assessments"
  ADD CONSTRAINT fk_assessments_course FOREIGN KEY (course_id) REFERENCES "Course"(id),
  ADD CONSTRAINT fk_assessments_module FOREIGN KEY (module_id) REFERENCES "Syllabus"(id),
  ADD CONSTRAINT fk_assessments_created_by FOREIGN KEY (created_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_assessments_update_by FOREIGN KEY (update_by) REFERENCES "User"(id),
  ADD CONSTRAINT fk_assessments_publish_by FOREIGN KEY (publish_by) REFERENCES "User"(id);
`;

module.exports = {
  ADD_FK_USER,
  ADD_FK_DEPARTMENT,
  ADD_FK_COURES,
  ADD_FK_SYLLABUS,
  ADD_FK_BATCH,
  ADD_FK_PAT,
  ADD_FK_ASSIGNMENT,
  ADD_FK_SUBMISSION,
  ADD_FK_ATTENDANCE,
  ADD_FK_EVALUATION,
  ADD_FK_REQUESTS,
  ADD_FK_ASSESSMENTS,
};
