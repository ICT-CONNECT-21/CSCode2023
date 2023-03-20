// Constant
const shubetsuCode = { school: "1", subject: "2" };
const deleteFlg = "0";

class KensakuRepository {
  constructor(dao) {
    this.dao = dao;
  }

  findAllSchool() {
    return this.dao.findAll("SELECT * FROM mst_kensaku WHERE shubetsu_code = ? AND delete_flg = ? ORDER BY sort_order", [shubetsuCode.school, deleteFlg]);
  }

  findAllSubjectBySchool(gakkoCode) {
    return this.dao.findAll("SELECT * FROM mst_kensaku WHERE shubetsu_code = ? AND delete_flg = ? AND gakko_code = ? ORDER BY sort_order", [
      shubetsuCode.subject,
      deleteFlg,
      gakkoCode,
    ]);
  }
}

export default KensakuRepository;
