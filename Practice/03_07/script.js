/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const closet = {

    name: "Small Closet" ,
    Volume: 120,
    color: "white",
    Objectnumber: 27,
    ClosetLength: {
        left: 10,
        right: 10,

    },
    closetOpen: false,
    toggleCloset: function (closetstatus) {

        this.closetOpen = closetstatus;
    },

    newClosetLength: function (lengthLeft, lengthRight) {
        this.closetLength.left = lengthLeft;
        this.closetLength.right = lengthRight;
      },
    };

console.log("The Small Closet object:", closet);
console.log("The Objectnumber value:", closet.Objectnumber);
console.log("closet length L: ", closet.ClosetLength.left);

var query = "Objectnumber";

console.log("The Objectnumber value:", closet [query]);
  





