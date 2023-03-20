import AppDAO from './repository/appDao';
import KensakuRepository from './repository/kensakuRepo';
import SearchRepository from './repository/searchRepo';

const search = async (school = '', subject = '') => {
  const dao = new AppDAO('db.sqlite3');
  const kensakuRepo = new KensakuRepository(dao);
  const searchRepo = new SearchRepository(dao);
  let schools = [];
  let subjects = [];
  let items = [];

  try {
    schools = await kensakuRepo.findAllSchool();
    if (school) {
      subjects = await kensakuRepo.findAllSubjectBySchool(school);
    }

    if (school && subject) {
      items = await searchRepo.findAll(school, subject);
    }
  } catch (err) {
    throw err;
  } finally {
    dao.closeConnect();
  }
  return {
    schools: schools,
    subjects: subjects,
    items: items,
    params: {
      school: school,
      subject: subject,
    },
  };
};

const findSubjects = async (school) => {
  let subjects = [];
  const dao = new AppDAO('db.sqlite3');
  const kensakuRepo = new KensakuRepository(dao);

  try {
    subjects = await kensakuRepo.findAllSubjectBySchool(school);
  } catch (err) {
    throw err;
  } finally {
    dao.closeConnect();
  }

  return subjects;
};

export { search, findSubjects };
