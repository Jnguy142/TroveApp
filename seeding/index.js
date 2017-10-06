module.exports = (table, seedData, tableName) => {
    return table.bulkCreate(seedData)
    .then(() => {
      console.log(`data successfully seeded for ${tableName}`);
    })
    .catch(err => console.log(`error seeding data for ${tableName}`));
};