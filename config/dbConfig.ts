export const config = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "bullyngless",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
    "define": {
      "freezeTableName": true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}
