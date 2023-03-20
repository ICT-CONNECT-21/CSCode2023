class SearchRepository {
  constructor(dao) {
    this.dao = dao;
  }

  findAll(school, subject) {
    return this.dao.findAll(
      `
      SELECT
        C.course_study_code
        , C.course_study_text
        , C.course_study_address
        , E.page
        , U.url
        , U.title
      FROM mst_course_study C
      LEFT JOIN mst_course_study_explanation_url U
      ON C.digit01 = U.digit01 AND C.digit02 = U.digit02 AND C.digit03 = U.digit03
      LEFT JOIN mst_course_study_explanation E
      ON C.course_study_code = E.course_study_code
      WHERE
        C.digit02 = ?
        AND C.digit03 = ?
      ORDER BY
        C.sort_order ASC
      `,
      [school, subject]
    );
  }
}

export default SearchRepository;
