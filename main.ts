function exact<T>() {
  return <U = T>(value: T extends U ? (U extends T ? T : never) : never) => {
    return value;
  };
}

type User = {
  username: string;
  email: string;
};

const user = { username: 'x', email: 'y' };
const userWithFoo = { ...user, foo: 'z' };

const user1: User = user; // OK
const user2: User = userWithFoo; // OK

const user3 = exact<User>()(user); // OK
const user4 = exact<User>()(userWithFoo); // Error
