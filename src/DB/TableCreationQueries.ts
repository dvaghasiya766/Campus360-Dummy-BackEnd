const PGFunction = `CREATE OR REPLACE FUNCTION set_timestamps()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    IF NEW.created_at IS NULL THEN
      NEW.created_at = NOW();
    END IF;
  END IF;

  IF TG_OP = 'UPDATE' THEN
    NEW.updated_at = NOW();
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
`;

const USER = `CREATE TABLE "User" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    enrollment VARCHAR(50) UNIQUE,
    role user_role NOT NULL,
    phone_number VARCHAR(20) NOT NULL,
    gender user_gender NOT NULL,
    dob DATE NOT NULL,
    batch_id INT,
    semester_id INT,
    status user_status NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    created_by INT,
    updated_at TIMESTAMP,
    updated_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT
);`;

const SEMESTER = `CREATE TABLE "Semester" (
    id SERIAL PRIMARY KEY,
    number INT UNIQUE NOT NULL,
    name VARCHAR(100)
);`;

const BATCH = `CREATE TABLE "Batch" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    start_year INT NOT NULL,
    end_year INT NOT NULL,
    department_id INT NOT NULL,
    status extended_status NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    created_by INT,
    updated_at TIMESTAMP,
    updated_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT
);
`;

const DEPARTMENT = `CREATE TABLE "Department" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    code VARCHAR(50) NOT NULL,
    status entity_status NOT NULL,
    notes JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    created_by INT,
    updated_at TIMESTAMP,
    updated_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT
);`;

const COURSE = `CREATE TABLE "Course" (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status entity_status NOT NULL,
    department_id INT NOT NULL,
    code VARCHAR(50) NOT NULL,
    notes JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    created_by INT NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT,
    UNIQUE(department_id, code)
);`;

const MODULE = `CREATE TABLE "Module" (
    id SERIAL PRIMARY KEY,
    course_id INT NOT NULL,
    module_name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    order_no INT NOT NULL,
    notes JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    created_by INT NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT,
    UNIQUE(course_id, order_no)
);`;

const PAT = `CREATE TABLE "PAT" (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    token VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    expires_at TIMESTAMP NOT NULL,
    revoked BOOLEAN NOT NULL
);`;

const ASSIGNMENT = `CREATE TABLE "Assignment" (
    id SERIAL PRIMARY KEY,
    module_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status publication_status NOT NULL,
    publish_at TIMESTAMP,
    start_date TIMESTAMP NOT NULL,
    due_date TIMESTAMP NOT NULL,
    attempts INT NOT NULL DEFAULT 1,
    max_marks INT NOT NULL,
    notes JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    created_by INT NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT
);`;

const SUBMISSION = `CREATE TABLE "Submission" (
    id SERIAL PRIMARY KEY,
    assignment_id INT NOT NULL,
    student_id INT NOT NULL,
    attachment JSONB,
    submitted_at TIMESTAMP NOT NULL,
    score INT,
    graded_by INT,
    feedback TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);`;

const ATTENDANCE = `CREATE TABLE "Attendance" (
    id SERIAL PRIMARY KEY,
    course_id INT NOT NULL,
    faculty_id INT NOT NULL,
    student_id INT NOT NULL,
    session_timestamp TIMESTAMPTZ NOT NULL,
    status attendance_status NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT,
    UNIQUE(course_id, faculty_id, student_id, session_timestamp)
);`;

const ASSESSMENT = `CREATE TABLE "Assessment" (
    id SERIAL PRIMARY KEY,
    module_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    type assessment_type NOT NULL,
    description TEXT NOT NULL,
    weightage DECIMAL(5,2) NOT NULL,
    max_marks INT NOT NULL,
    min_marks INT NOT NULL,
    scheduled_at TIMESTAMP NOT NULL,
    notes JSONB,
    status publication_status NOT NULL,
    duration_minutes INT,
    created_at TIMESTAMP DEFAULT NOW(),
    publish_at TIMESTAMP,
    updated_at TIMESTAMP,
    created_by INT NOT NULL,
    updated_by INT,
    publish_by INT
);`;

const EVALUATION = `CREATE TABLE "Evaluation" (
    id SERIAL PRIMARY KEY,
    student_id INT NOT NULL,
    assessment_id INT NOT NULL,
    marks_obtained DECIMAL(5,2) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    created_by INT NOT NULL,
    updated_at TIMESTAMP,
    updated_by INT,
    publish_at TIMESTAMP,
    publish_by INT,
    deleted_at TIMESTAMP,
    deleted_by INT
);`;

const REQUESTS = `CREATE TABLE "Requests" (
    id SERIAL PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    type request_type NOT NULL,
    subject VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status request_status NOT NULL,
    attachment JSONB,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP
);`;

const TOPICS = `CREATE TABLE "Topics" (
    id SERIAL PRIMARY KEY,
    module_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    type topic_type NOT NULL,
    description TEXT,
    status publication_status NOT NULL,
    created_at TIMESTAMP DEFAULT NOW(),
    publish_at TIMESTAMP,
    updated_at TIMESTAMP,
    created_by INT,
    updated_by INT,
    publish_by INT
);`;

module.exports = {
  PGFunction,
  USER,
  SEMESTER,
  BATCH,
  DEPARTMENT,
  COURSE,
  MODULE,
  PAT,
  ASSIGNMENT,
  SUBMISSION,
  ATTENDANCE,
  ASSESSMENT,
  EVALUATION,
  REQUESTS,
  TOPICS,
};
