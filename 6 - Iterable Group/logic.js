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

/* class Group {

    constructor() {
        this.storage = [];
    }

    add(v) {
        if (!this.has(v)) {
            this.storage.push(v);
        }
    }

    delete(v) {
        if (this.has(v)) {
            this.storage = this.storage.filter(a => a !== v);
        }
    }

    has(v) {
        let value = false;
        for (let item of this.storage) {
            if (v === item) {
                value = true;
            }
        }
        return value;
    }
  
  	[Symbol.iterator] () {
      return new groupIterator(this.storage);
    }
  
    static from(array) {
        let a = new Group;
        for (let value of array) {
            a.add(value);
        }
        return a;
    }

}

class groupIterator {
  
  constructor (group) {
    this.group = group;
    this.count = 0;
  }
  
  next () {
    if (this.count == this.group.length) {
      return {done: true};
    }
    
    this.count++;
    return {value: "value: " + this.group[this.count-1]};    
    
  }
  
}


for (let value of Group.from(["a", 27, "c"])) {
  console.log(value);
}
// → a
// → b
// → c

 */
