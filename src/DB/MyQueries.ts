const CREATE_USER = `CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    enrollment VARCHAR(50) UNIQUE NOT NULL,
    role user_role NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    gender user_gender NOT NULL,
    dob DATE NOT NULL,
    batch_id INT,
    semester_id INT,
    status user_status NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by INT,
    updated_at TIMESTAMP,
    updated_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT
);
`;

const CREATE_DEPARTMENT = `CREATE TABLE "Department" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    code VARCHAR(50) NOT NULL,
    status status_active_inactive NOT NULL,
    notes JSONB,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by INT,
    updated_at TIMESTAMP,
    updated_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT
);
`;

const CREATE_COURES = `CREATE TABLE "Course" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status status_active_inactive NOT NULL,
    department_id INT,
    code VARCHAR(50) NOT NULL,
    notes JSONB,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by INT NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT,
    UNIQUE(department_id, code)
);
`;

const CREATE_SYLLABUS = `CREATE TABLE "Syllabus" (
    id SERIAL PRIMARY KEY,
    course_id INT,
    module_name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    documents JSONB,
    order_no INT NOT NULL,
    notes JSONB,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by INT NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT,
    UNIQUE(course_id, order_no)
);
`;

const CREATE_BATCH = `CREATE TABLE "Batch" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    start_year INT NOT NULL,
    end_year INT NOT NULL,
    department_id INT,
    status batch_status NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by INT NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT
);
`;

const CREATE_PAT = `CREATE TABLE "PAT" (
    id SERIAL PRIMARY KEY,
    user_id INT,
    token VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    expires_at TIMESTAMP NOT NULL,
    revoked BOOLEAN NOT NULL DEFAULT FALSE
);
`;

const CREATE_ASSIGNMENT = `CREATE TABLE "Assignment" (
    id SERIAL PRIMARY KEY,
    course_id INT,
    module_id INT,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status assignment_status NOT NULL,
    publish_at TIMESTAMP NOT NULL,
    start_date TIMESTAMP NOT NULL,
    due_date TIMESTAMP NOT NULL,
    attempts INT NOT NULL DEFAULT 1,
    max_marks INT NOT NULL,
    notes JSONB,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by INT NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT
);
`;

const CREATE_SUBMISSION = `CREATE TABLE "Submission" (
    id SERIAL PRIMARY KEY,
    assignment_id INT,
    student_id INT,
    attachment JSONB,
    submitted_at TIMESTAMP NOT NULL,
    score INT,
    graded_by INT,
    feedback TEXT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);
`;

const CREATE_ATTENDANCE = `CREATE TABLE "Attendance" (
    id SERIAL PRIMARY KEY,
    course_id INT NOT NULL,
    faculty_id INT NOT NULL,
    student_id INT NOT NULL,
    session_timestamp TIMESTAMPTZ NOT NULL,
    status attendance_status NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT,
    UNIQUE(course_id, faculty_id, student_id, session_timestamp)
);
`;

const CREATE_EVALUATION = `CREATE TABLE "Evaluation" (
    id SERIAL PRIMARY KEY,
    student_id INT,
    assessment_id INT,
    marks_obtained DECIMAL(5,2) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by INT,
    updated_at TIMESTAMP,
    updated_by INT,
    publish_at TIMESTAMP,
    publish_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT
);
`;

const CREATE_REQUESTS = `CREATE TABLE "Requests" (
    id SERIAL PRIMARY KEY,
    sender_id INT,
    receiver_id INT,
    type request_type NOT NULL,
    subject VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status request_status NOT NULL,
    attachment JSONB,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);
`;

const CREATE_ASSESSMENTS = `CREATE TABLE "Assessments" (
    id SERIAL PRIMARY KEY,
    course_id INT,
    module_id INT,
    title VARCHAR(255) NOT NULL,
    type assessment_type NOT NULL,
    description TEXT NOT NULL,
    weightage DECIMAL(5,2) NOT NULL,
    max_marks INT NOT NULL,
    min_marks INT NOT NULL,
    scheduled_at TIMESTAMP NOT NULL,
    notes JSONB,
    duration_minutes INT,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    publish_at TIMESTAMP,
    updated_at TIMESTAMP,
    created_by INT,
    update_by INT,
    publish_by INT
);
`;

const CREATE_SEMESTER = `CREATE TABLE "Semester" (
    id SERIAL PRIMARY KEY,
    number INT UNIQUE NOT NULL,
    name VARCHAR(255)
);
`;

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
  CREATE_USER,
  CREATE_DEPARTMENT,
  CREATE_COURES,
  CREATE_SYLLABUS,
  CREATE_BATCH,
  CREATE_PAT,
  CREATE_ASSIGNMENT,
  CREATE_SUBMISSION,
  CREATE_ATTENDANCE,
  CREATE_EVALUATION,
  CREATE_REQUESTS,
  CREATE_ASSESSMENTS,
  CREATE_SEMESTER,
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
