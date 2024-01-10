// Hasmap that overwrites on collision.
// Bucket size increases when load factor >= 0.75
function hashMap() {
  let buckets = [];
  buckets.length = 16;

//// Need to check for load factor 
//// if factor is >=0.75, extend buckets and change hashcode modulo to bigger number
  const hash = (string) => {
    let hashCode = 0;

    const primeNumber = 17;
    for (let i = 0; i < string.length; i++) {
        hashCode = primeNumber * hashCode + string.charCodeAt(i);
        hashCode = hashCode % 16;
    }
    return hashCode;
  }

  const set = (key, value) => {
    // Use the following snippet whenever you access a bucket through an index. 
    // We want to throw an error if we try to access an out of bound index:
    if (key < 0 || key >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    buckets[key] = value;
  }
    
  const get = (key) => {
    if (buckets[key] == undefined) {
        return null
    }
    return buckets[key];
  }

  const has = (key) => {
    if (buckets[key] != undefined) {
        return true;
    }
    return false;
  }

  const remove = (key) => {
    if (key < 0 || key >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
    buckets[key] = undefined;
  }

  const length = () => {
    let count = 0;
    for (let i = 0; i < buckets.length; i++) {
      if (has(i) == true) {
        count += 1;
      }
    }
    return count;
  }

  
  return {
    buckets,
    hash,
    set, 
    get,
    has,
    remove,
    length
  }
}

let myHashMap1 = hashMap();
console.log(myHashMap1.hash("George"));
console.log(myHashMap1.hash("G Squared"));

myHashMap1.set(myHashMap1.hash("George"), "George");
myHashMap1.set(myHashMap1.hash("G Squared"), "G Squared");

console.log("get 9:", myHashMap1.get(9));

console.log("test:", myHashMap1.length());


let myHashMap1Buckets = myHashMap1.buckets;
console.log(myHashMap1Buckets);



