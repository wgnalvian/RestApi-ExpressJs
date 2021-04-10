const {
  getAllStudents,
  getStudentById,
  storeStudent,
  updateStudent,
  destroyStudent
} = require(`../model/model`);
const { ok, error, created } = require("../res");


const getStudents = (req, res) => {
  getAllStudents((e, result) => {
    result ? ok(result, res) : error(e, res);
  });
};

const getStudent = (req, res) => {
  getStudentById(req, (e, result) => {
    result ? ok(result, res) : error(e, res);
  });
};

const postStudent = (req, res) => {
  storeStudent(req, (e, result) => {
    result ? created(result, res) : error(e, res);
  });
};
const putStudent = (req, res) => {
  getStudentById(req, (e, data) => {
    e
      ? error(e, res)
      : updateStudent(req, data, (e, result) => {
          result ? ok(result, res) : error(e, res);
        });
  });
};
const deleteStudent = (req, res) => {
  destroyStudent(req, (e, result) => {
    result ? ok(result, res) : error(e, res)
  })
}
module.exports = { getStudents, getStudent, postStudent, putStudent, deleteStudent };
