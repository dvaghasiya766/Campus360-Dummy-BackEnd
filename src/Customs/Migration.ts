const client = require("../DB/DBConnection");
const types = require("../DB/CustomTypes");
const tables = require("../DB/TableCreationQueries");
const fks = require("../DB/AddFKQueries");

const MigrationTypes = async () => {
  try {
    for (const [name, query] of Object.entries(types)) {
      await client.query(query);
      console.log(`✅ ${name} created successfully`);
    }
  } catch (error) {
    console.error("❌ Migration failed:", error);
  }
};

const MigrationTable = async () => {
  try {
    for (const [name, query] of Object.entries(tables)) {
      let result = await client.query(query);
      console.log(`✅ ${name} created successfully`, result);
    }
  } catch (err) {
    console.error("❌ Migration failed:", err);
  }
};

const MigrationFKs = async () => {
  try {
    for (const [name, query] of Object.entries(fks)) {
      await client.query(query);
      console.log(`✅ ${name} created successfully`);
    }
  } catch (err) {
    console.error("❌ Migration failed:", err);
  }
};

const Migration = async () => {
  await MigrationTypes();
  await MigrationTable();
  await MigrationFKs();
};

module.exports = Migration;
