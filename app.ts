// 1-MASHQ
let ism: String = "Jasur";
let yosh: number = 21;
let talaba: boolean = true;

// 2-MASHQ
function yigindi(a: number, b: number): number {
  return a + b;
}
console.log(yigindi(5, 7));

// 3-MASHQ
// Interface yaratish
interface Iodam {
  ism: String;
  yosh: number;
}
let odam: Iodam = {
  ism: "Abdulloh",
  yosh: 18,
};
console.log(odam);

// 4-MASHQ
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 5-MASHQ
// Enum yaratish va ishlatish
enum Week {
  one = "dushanba",
  two = "seshanba",
  three = "chorshanba",
  four = "payshanba",
  five = "juma",
  six = "shanba",
  seven = "yakshanba",
}
let lesson: Week = Week.one;
console.log(lesson);

function union(a: number | string) {
  console.log(a);
}
union(12); //stringham yozsak boladi

function greeting(a: string, b: number) {
  console.log(`Salom ${a},siz ${b} yoshdasiz`);
}
greeting("Jasur", 21);

function type(a: any) {
  console.log(typeof a);

}
type("salom");

interface IStudent {
  ism: string;
  kurs: number;
}
class StudentInfo {
  ism: string;
  kurs: number;
  constructor(ism: string, kurs: number) {
    this.ism = ism;
    this.kurs = kurs;
  }
  getInfo():String{
    return `Talaba ismi : ${this.ism},kursi:${this.kurs}`
  }
}
const student= new StudentInfo("Azim",3)
console.log(student.getInfo());

function birinchiElement<T>(massiv: T[]): T {
  return massiv[0];
}
console.log(birinchiElement([1, 2, 3]));
console.log(birinchiElement(["salom", "hi"]));

