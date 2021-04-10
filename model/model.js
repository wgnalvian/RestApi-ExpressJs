const conn = require(`../conn`);

const getAllStudents = (result) => {
  conn.query(`SELECT * FROM mahasiswa`, (e, res) => {
    e ? result(e, null) : result(null, res);
  });
};

const getStudentById = (req, result) => {
  conn.query(
    `SELECT * FROM mahasiswa WHERE id = ?`,
    [req.params.id],
    (e, res) => {
      e ? result(e, null) : result(null, res);
    }
  );
};

const storeStudent = (req, result) => {
  let { nama, nim, jurusan } = req.body;

  conn.query(
    `INSERT INTO mahasiswa (nama, nim, jurusan) VALUES (?, ?, ?)`,
    [nama, nim, jurusan],
    (e, res) => {
      e ? result(e, null) : result(null, res);
    }
  );
};

const updateStudent = (req, data, result) => {
  let { nama, nim, jurusan } = req.body;

  conn.query(
    `UPDATE mahasiswa SET nama=?, nim=?, jurusan=? WHERE id=?`,
    [
      nama || data[0].nama,
      nim || data[0].nim,
      jurusan || data[0].jurusan,
      req.params.id,
    ],
    (e, res) => {
      e ? result(e, null) : result(null, res);
    }
  );
};
const destroyStudent = (req, result) => {
  conn.query(`DELETE FROM mahasiswa WHERE id = ?`,[req.params.id],(e, res) => {
    e ? result(e , null) : result(null, res)
  })
}

module.exports = {
  getAllStudents,
  getStudentById,
  storeStudent,
  updateStudent,
  destroyStudent
};
