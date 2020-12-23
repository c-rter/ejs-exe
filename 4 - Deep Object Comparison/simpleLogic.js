let deepEqual = (obj1, obj2) => {

    let obj1Keys = Object.keys(obj1);

    for (i = 0; i < obj1Keys.length; i++) {



        if (typeof obj1[obj1Keys[i]] !== typeof {}) {
            if (obj1[obj1Keys[i]] !== obj2[obj1Keys[i]]) {
                //   console.log("false 1");
                return false;
            }
        }
        else if (obj1[obj1Keys[i]] == null) {
            if (obj2[obj1Keys[i]] !== null) {
                //    console.log("false 2")
                return false;
            }
        }
        else {
            if (deepEqual(obj1[obj1Keys[i]], obj2[obj1Keys[i]]) == false) {
                //   console.log("false 3")
                return false;
            }
        }
        return true;
    }
    return true;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
