import { Router } from 'express';
import { search, findSubjects } from '../service/searchService';

var router = Router();

/* GET home page. */
router.get('/', async function (_req, res, next) {
  try {
    const rs = await search();

    res.render('index', {
      schools: rs.schools,
      subjects: rs.subjects,
      items: rs.items,
      params: rs.params,
    });
  } catch (err) {
    next(err);
  }
});

/* On click search button */
router.post('/', async function (req, res, next) {
  // Get param from form
  const form = req.body;

  try {
    const rs = await search(form.school, form.subject);
    var errMessage = '';
    if (rs.items && rs.items.length == 0) {
      errMessage = '検索結果が０件です。';
    }
    if (!form.subject || !form.school) {
      errMessage = '学校種別または教科が未選択です。選択してください。';
    }
    res.render('index', {
      schools: rs.schools,
      subjects: rs.subjects,
      items: rs.items,
      params: rs.params,
      errorMessage: errMessage,
    });
  } catch (err) {
    next(err);
  }
});

/* 
  On change school select
  Url sample: http://localhost:3000/findSubjects?school=2
*/
router.get('/findSubjects', async function (req, res, _next) {
  try {
    const subjects = await findSubjects(req.query.school);
    res.json(subjects);
  } catch (err) {
    const e = { status: 404, errno: err.errno, message: err.message };
    res.status(404).json(e);
  }
});

export default router;
