'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     *
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Insects', [
      {
        name: "Western Pygmy Blue Butterfly",
        millimeters: 12
      },
      {
        name: "Patu Digua Spider",
        millimeters: 0.3
      },
      {
        name: "Scarlet Dwarf Dragonfly",
        millimeters: 20
      },
      {
        name: "Midget Moths",
        millimeters: 3
      },
      {
        name: "Bolbe Pygmaea Mantis",
        millimeters: 10
      },
      {
        name: "Microtityus Minimus Scorpion",
        millimeters: 11
      },
      {
        name: "Euryplatea Nanaknihali Fly",
        millimeters: 0.5
      },
      {
        name: "Uranotaenia lowii Mosquito",
        millimeters: 2.5
      },
      {
        name: "Fairyfly Wasp",
        millimeters: 1
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Insects', {
      name: [
        "Western Pygmy Blue Butterfly",
        "Patu Digua Spider",
        "Scarlet Dwarf Dragonfly",
        "Midget Moths",
        "Bolbe Pygmaea Mantis",
        "Microtityus Minimus Scorpion",
        "Euryplatea Nanaknihali Fly",
        "Uranotaenia lowii Mosquito",
        "Fairyfly Wasp",
      ]
    });
  }
};
