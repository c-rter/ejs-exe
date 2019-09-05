class Group {

    constructor() {
        this.groupArr = [];
    }

    add(newVal) {
        if (!this.groupArr.includes(newVal)) {
            this.groupArr.push(newVal);
        }
    }

    delete(delVal) {
        this.groupArr = this.groupArr.filter(val => val != delVal);
    }

    has(testVal) {
        return this.groupArr.includes(testVal);
    }

    static from(iterObj) {
        let group = new Group;
        for (let obj of iterObj) {
            group.add(obj);
        }
        return group;
    }

}



let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
  // → false