const data = {
  name: "fred",
  age: 10,
  contact: {
    email: "moo@example.com",
    meta: {
      verified: true,
      tags: ["important"],
    },
  },
};

// data will be
// {
// 	name: 'fred',
// 	age: 40,
// 	contact: {
// 		email: 'baa@example.com',
//         favorite: true,
// 		meta: {
//             verified: true,
//             tags: ['vip', 'important']
//         }
// 	}
// }

Object.prototype.mergeDeepRight = function (...args) {
  const names = Object.getOwnPropertyNames(data);
  console.log(names);
};

const newData = data.mergeDeepRight({
  age: 40,
  contact: {
    email: "baa@example.com",
    favorite: true,
    meta: {
      tags: ["vip"],
    },
  },
});

console.log(newData);
