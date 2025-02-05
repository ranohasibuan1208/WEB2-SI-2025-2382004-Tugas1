interface PersonalData {
    name: string;
    age: number;
    email: string;
    address: string;
    hobbies: string[];
}

const myBio: PersonalData = {
    name: "John Doe",
    age: 25,
    email: "john.doe@example.com",
    address: "123 Main St, Anytown, USA",
    hobbies: ["reading", "traveling", "coding"]
};

function displayBio(bio: PersonalData) {
    console.log(`Name: ${bio.name}`);
    console.log(`Age: ${bio.age}`);
    console.log(`Email: ${bio.email}`);
    console.log(`Address: ${bio.address}`);
    console.log("Hobbies:");
    for (const hobby of bio.hobbies) {
        console.log(`- ${hobby}`);
    }
}

displayBio(myBio);
