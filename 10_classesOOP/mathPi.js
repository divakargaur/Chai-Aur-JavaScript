const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(descriptor);



const dev = {
    name: "web",
    price: 499,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptors(dev));

for (let [key, value] of Object.entries(dev)) {
    if (typeof value !== "function") {
        console.log(`${key} : ${value}`);
    }
}

Object.defineProperty(dev, "name", {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptors(dev));