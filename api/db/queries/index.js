const CREATE_COACH = `INSERT INTO coaches (coach_name, email, password) VALUES ($1, $2, $3) RETURNING coach_name`;

const SEARCH_FOR_UNIQUE_COACH_EMAIL = `SELECT email FROM COACHES WHERE EMAIL=(email) VALUES ($1) RETURNING email`;

const SEARCH_FOR_UNIQUE_COACH_EMAIL2 = `SELECT email FROM COACHES WHERE EMAIL= $1 RETURNING email`;


const CREATE_ADMIN = `INSERT INTO admin (admin_name, email, password) VALUES ($1, $2, $3) RETURNING coach_name`;

const CREATE_WRESTLER = `INSERT INTO wrestler(user_name, dob, weight) VALUES ($1, $2, $3) RETURNING user_name`;

const REMOVE_COACH_BY_ID = `DELETE FROM coaches WHERE id = $1`;

const REMOVE_ADMIN_BY_ID = `DELETE FROM admin WHERE id = $1`;

const REMOVE_WRESTLER_BY_ID = `DELETE FROM wrestler WHERE id = $1`;


module.exports = {
  CREATE_COACH,
  CREATE_ADMIN,
  CREATE_WRESTLER,
  REMOVE_COACH_BY_ID,
  REMOVE_ADMIN_BY_ID,
  REMOVE_WRESTLER_BY_ID,
  SEARCH_FOR_UNIQUE_COACH_EMAIL
};
