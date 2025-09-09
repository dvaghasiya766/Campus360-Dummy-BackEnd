const Role_User = `CREATE TYPE user_role AS ENUM ('student', 'faculty', 'admin');`;

const Gender_User = `CREATE TYPE user_gender AS ENUM ('male', 'female');`;

const User_status = `CREATE TYPE user_status AS ENUM ('active', 'inactive', 'suspended');`;

const Generic_status_for_Department_Course = `CREATE TYPE status_active_inactive AS ENUM ('active', 'inactive');`;

const Batch_status = `CREATE TYPE batch_status AS ENUM ('active', 'graduated', 'inactive');`;

const Assignment_status = `CREATE TYPE assignment_status AS ENUM ('save', 'published');`;

const Attendance_status = `CREATE TYPE attendance_status AS ENUM ('present', 'absent', 'late', 'leave');`;

const Request_type = `CREATE TYPE request_type AS ENUM ('registration', 'leave', 'service', 'complaint');`;

const Request_status = `CREATE TYPE request_status AS ENUM ('pending', 'approved', 'rejected', 'resolved');`;

const Assessment_type = `CREATE TYPE assessment_type AS ENUM ('quiz', 'midterm', 'final', 'project');`;

module.exports = {
  Role_User,
  Gender_User,
  User_status,
  Generic_status_for_Department_Course,
  Batch_status,
  Assignment_status,
  Attendance_status,
  Request_type,
  Request_status,
  Assessment_type,
};
