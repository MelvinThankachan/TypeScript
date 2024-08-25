type User = {
  UserName: string;
  age: number;
};

type Address = { city: string; state: string; country: string };

type UserWithContact = User & {
  phone: string;
  address: Address;
};

let melvin: UserWithContact = {
  UserName: "Melvin",
  age: 25,
  phone: "8289991281",
  address: { city: "Aluva", state: "Kerala", country: "India" },
};

console.log(melvin);
