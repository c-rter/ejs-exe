class Group {

    constructor() {
        this.collection = [];
    }

    add(val) {
        if (this.collection.indexOf(val) === -1) {
            this.collection.push(val);
        }
        else {
            console.log("already in collection");
        }
    }

    delete(val) {
        if (this.collection.indexOf(val) === -1) {
            console.log("not in collection");
        }
        else {
            this.collection.splice(this.collection.indexOf(val), 1);
        }
    }

    has(val) {
        if (this.collection.indexOf(val) === -1) {
            return false;
        }
        else {
            return true;
        }
    }

}

let group = new Group;
group.add(2);
console.log(group.collection);
group.delete(2);
console.log(group.collection);
/*

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
  // → false

*/