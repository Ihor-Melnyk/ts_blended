let age: number;
age = 50;
let name1: string;
name1 = "Max";
let toggle: boolean;
toggle = true;
let empty = null;
empty = null;
let notInitialize = undefined;
notInitialize = undefined;
let callback: (a: number) => number;
callback = (a) => {
  return 100 + a;
};

//==============================================================

let anything: any;
anything = -20;
anything = "Text";
anything = {};

//==============================================================

let some: unknown;
some = "Text";

let str: string;
if (typeof some === "string") {
  str = some;
}

//==============================================================

let person: [string, number];
person = ["Max", 21];

//==============================================================

enum Load {
  LOADING,
  READY,
}
const page = {
  load: Load.READY,
};

if (page.load === Load.LOADING) {
  console.log("Сторінка завантажується");
}
if (page.load === Load.READY) {
  console.log("Сторінка завантажена");
}
//==============================================================

let union: string | number;

//==============================================================

let literal: "enable" | "disable";

//==============================================================

function showMessage(message: any): void {
  console.log(message);
}

function calc(num1: number, num2: number): number {
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

//==============================================================

type Page = {
  title: string;
  likes: number;
  accounts: string[];
  status: "open" | "close";
  details?: {
    createAt: string;
    updateAt: string;
  };
};
const page1: Page = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: "2021-01-01",
    updateAt: "2021-05-01",
  },
};

const page2: {
  title: string;
  likes: number;
  accounts: string[];
  status: string;
} = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
