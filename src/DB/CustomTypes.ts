const User_role = `CREATE TYPE user_role AS ENUM ('student', 'faculty', 'admin');`;
const User_gender = `CREATE TYPE user_gender AS ENUM ('male', 'female');`;
const User_status = `CREATE TYPE user_status AS ENUM ('active', 'inactive', 'suspended');`;
const Entity_status = `CREATE TYPE entity_status AS ENUM ('active', 'inactive');`;
const Extended_status = `CREATE TYPE extended_status AS ENUM ('active', 'graduated', 'inactive');`;
const Publication_status = `CREATE TYPE publication_status AS ENUM ('save', 'published');`;
const Assessment_type = `CREATE TYPE assessment_type AS ENUM ('quiz', 'midterm', 'final', 'project');`;
const Topic_type = `CREATE TYPE topic_type AS ENUM ('Video', 'Docs', 'CheatSheets', 'PPT', 'PDF');`;
const Attendance_status = `CREATE TYPE attendance_status AS ENUM ('present', 'absent', 'late', 'leave');`;
const Request_type = `CREATE TYPE request_type AS ENUM ('registration', 'leave', 'service', 'complaint');`;
const Request_status = `CREATE TYPE request_status AS ENUM ('pending', 'approved', 'rejected', 'resolved');`;

module.exports = {
  User_role,
  User_gender,
  User_status,
  Entity_status,
  Extended_status,
  Publication_status,
  Assessment_type,
  Topic_type,
  Attendance_status,
  Request_type,
  Request_status,
};
