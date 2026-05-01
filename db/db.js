import { Sequelize } from "sequelize";

const connectToDB = async (dbURI) => {
  console.log(`Connecting to DB: ${dbURI}`);

  const sequelize = new Sequelize(dbURI, {
    logging: console.log,
    username: 'postgres',
    dialect: 'postgres',
    define: {
      timestamps: false,
      underscored: true,
    },
    password: 'admin'
  });

  try {
    await sequelize.authenticate();
    console.log('Connected to DB successfully');
  } catch(error) {
    console.log('Unable to connect to DB:', error);
  };

  return sequelize;
}

export default connectToDB;
