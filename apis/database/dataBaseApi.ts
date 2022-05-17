import mysql from 'mysql';

let connection: mysql.Connection;

const fetchDataFromDB = async (query: string) =>
  new Promise((resolve, reject) => {
    const config = {
      host: process.env.DDBB_HOST,
      user: process.env.DDBB_USER,
      password: process.env.DDBB_PASSWD,
      database: process.env.DDBB_NAME
    };
    
    connection = mysql.createConnection(config);

    connection.query(query, (error, results) => {
      connection.end();

      if (error) {
        return reject(error);
      }

      return resolve(results);
    });
  });

export default fetchDataFromDB;
