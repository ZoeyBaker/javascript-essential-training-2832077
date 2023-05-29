/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

const laptop = {

    name: "Zoeys Macbook",
    color: "silver",
    ram: 32,
    storagespace: 500,
    laptoplength: {
    left: 32,
    right: 32,

    },
togglepower: function (powerStatus) {
    this.poweron = powerStatus;
  },
  newlaptopLength: function (lengthLeft, lengthRight) 
  {
    this.laptopLength.left = lengthLeft;
    this.laptopLength.right = lengthRight;
  },

};


