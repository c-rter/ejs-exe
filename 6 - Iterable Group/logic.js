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

    [Symbol.iterator] () {
        return new groupIterator(this);
    }

    static from(iterObj) {
        let group = new Group;
        for (let obj of iterObj) {
            group.add(obj);
        }
        return group;
    }
}

class groupIterator {
    constructor(group) {
        this.groupArr = group.groupArr;
        this.counter = 0;
    }

    next() {
        while (this.counter < this.groupArr.length) {
            this.counter++;
            return { value: this.groupArr[this.counter-1], done: false };
        }
        return { done: true };
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

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}