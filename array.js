class Array{
    constructor(){
        this.length = 0;
        this.data = {};
    }

    get(index){
        return this.data[index];
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }
    delete(index){
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }
    
    shiftItems(index){
        for (let i = index; i < arr.length - 1; i++) {
            this.data[i] = this.data[i+1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const arr = new Array();
arr.push("Hi");
arr.push("Juyel");
arr.push("!");
// arr.pop();
arr.delete(0);
arr.push("You");
arr.push("are");
arr.push("good");
arr.push("!");

console.log(arr);