import mysql from 'mysql';

let connection: mysql.Connection;

const fetchDataFromDB = async (query: string) =>
  new Promise((resolve, reject) => {
    connection = mysql.createConnection({
      host: process.env.DDBB_HOST,
      user: process.env.DDBB_USER,
      password: process.env.DDBB_PASSWD,
      database: process.env.DDDBB_NAME
    });

    connection.query(query, (error, results) => {
      if (error) {
        return reject(error);
      }

      return resolve(results);
    });
  });

export default fetchDataFromDB;
