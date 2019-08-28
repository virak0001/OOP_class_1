

export default class Animal {
    // Name
    setName(name) {
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
    walk() {
        console.log("walk on the road");
    }
}