export {};

type Mojiretsu = string;

const fooStr: string = 'test';
const fooMoji: Mojiretsu = 'test';

const example1 = {
    name: 'test',
    age: 23
};

type Profile = {
    name: string;
    age: number;
};

const example2: Profile = {
    name: 'test',
    age: 23
};

type Profile2 = typeof example1;