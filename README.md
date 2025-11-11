# // I've made a new react-app with typescript - ( Create Project )

 npx create-react-app practice-part1 --template typescript

# // ----------------basic types:
* Primitive ( num , str , bol )
* Arrays
* Tuples
* Enums
* Any , unknow , void , null , undefined , never

#  ?? Primitive types - without () {} []
ex.
var a = 12
var b = a
result: b = 12

# ?? Reference types - with () {} []
ex.
var a = [ 1, 2, 3, 4, 5 ]
var b = a
result: b = a means b have the refernce of a , b can't have the values of a 
-> if we change b = [ 1 , 2 ,3 ,4] then a will also change

#  Typescript will identify the type of the var automatically
ex: when you hover on it, it will show the type number | string 
let arr = [ 1, 2, 3, 4, 5 , { name: "amna" }, { name: 12 } ]

# Tuples - fix the types
ex: 1st string 2nd number
let arr: [string, number] = [ "amna" , 22 ]

# Enums
ex. jo bhi chahia hoga UserRoles. kregy to options ajy gy!
enum UserRoles {
    ADMIN = "admin",
    GUEST = "guest",
    -------------
}

# Any - make sure k apk var ki type any ni honi chahia - r wo kb hogi?
let a; 
so, do this! - type will be number in future
let a: number;

# diff btw any & unknown 
- any k sth hr trh ki tcs off ho jati ha, koe error ni ata glti pr bi
ex. - string k lia chal jy ga number k lia nhi chaly ga, error ni ay ga ( jo k glt ha )
let a;
a = 12;
a = "amna"

a.toUpperCase();

- unknow k sth apko condition deni hogi to make that thing work
ex. - yha ye error de ga 
let a: unknown;
a = 12;
a = "amna"
a.toUpperCase();

so, do this..
if ( typeof a === "string" )
    a.toUpperCase();


# Void - agr ek fn. kuch bhi return ni kr rh to hm void likh deigy
ex.
function abc(): void {
    console.log( "hello" )
}

- lekn agr return kr rh ha to apko uski type btani hogi
ex.
function abc(): string {
    return "amna"
}

function abc(): number {
    return 1
}

# Null - jb ap kuch find kr rhe ho r wo ni milti to null mily ga
ex. - apko type bhi deni hogi null as an option
let a: string | null;
a  = "amna"
a = 12; ---error---

# Undefined
let a: undefined;

# Never - aesy kuch codes jo agy ka code ni chalne deigy , kuch return ni kregy , throw errors
ex.
function abc( ): never {
    while (true) { }
}

abc()
console.log( " hey ") - nhi chaly ga

# type inference - jo tcs khudhe se smjh jy k type kya gha jb hm usy value dei
ex.
let a = "12";   --string

# type annotations - jo hm usy btay k type kya hogi
ex.
let a: number;

## //-------------------------- section 2

# Interface - object ki shakal
ex.

interface User = {
    name: string,
    email: string,
    password: string,
    gender?: "female"  ----> optional hojy ga
}

<!-- const obj = {
    name: "amna",
    email: "amna@gmail.com",
    password: "abcd"
} -->

---tcs ye janti ha k apko fn. ko call krwaty wqt obj pass krna ha 
---obj ki shakal user k jesi honi chahia
---r extra cheez ap pass ni kr skty

function example( obj: User ) { }

example( { name: "amna" ,email: "amna@gmail.com" , password: "abcd" })

# Extending interfaces 
ex.

interface User = {
    name: string,
    email: string,
    password: string,
}


interface Admin extends User = {
    admin: boolean
}


function example( obj: User ) {
   obj. ( this can access name,email,pass )
}


function example( obj: Admin ) {
   obj. ( this can access name,email,pass & admin also --user+Admin both )
}


** agr 2 sem name k interfaces bna dei to wo dono merge hojy gy na k overlap


# type aliases

ex. 
type value = string | number | null;

let a: value;

# //--------------section 3

# classes

ex.
class Device = {
    name: "abcd",
    price: 209,
    -----------
}
let d1 = new Device()


# constructor - wo mangta ha jo hme set krna ha

ex.
class HumanMaker{
    age = 0;
    constructor( public name: string) {}
}

new HumanMaker("amna")

ex.2 - without public it will not declare
class BottleMaker{
    age = 0;
    constructor( public brand: string , public price: number , public color: string ) {}
}

 let b1 = new BottleMaker("Militon" , 1200 , "yellow" )

# this keyword
- apk class k andr bny kse var ko agr ap kse method me access krna chahty ho to this. ka use krogy
- class k andr koe fn. bnty hn to usy fn. nhi method khty hn
- jo bhi ap andr access kr rhe ho wo bahr bni bhi honi chahia

ex.
class HumanMaker{
    name = "amna"
    changeName( ) {
        this.name
        console.log(this.name)
    }
}

# Access Modifiers - private/public/protected

ex.1 -public me var ki value change hojy gi
class BottleMaker{
    constructor( public brand: string  ) {}
}

 let b1 = new BottleMaker("Militon" )
 b1.brand = "heloo"

e.2 - in private it'll give an error but q k tcs error pr bhi compile kr deta ha to wo result show krega
class BottleMaker{
    constructor( private brand: string  ) {}
}

 let b1 = new BottleMaker("Militon" )
 b1.brand = "heloo"

** public ko change kr skty ho class k andr r 
extended wali class me access/change kr skty
r class k bahr this. kr k change kr skty ho

** protected ko ap uski apni class k andr change kr skty ho sth 
he extended wali class me bhi access/change kr skty 
but us sy bahr change ni kr skty

** private ko change kr skty ho class k andr but 
extended wali class me access/change nhi kr skty
but class k bahr change ni kr skty

# getters & setters

if we want to get or set the name from console
getter - andr ki koe bhi value utha kr bahr dena
setters - value set krna

ex. 
class User{
    constructor( public _name: string , public age: number ) {}

    get name(){
        return this._name
    }

    set name(value:string){
       this._name = value;
    }
}

 let u1 = new User("amna" , 12 )
 u1.name - in console

 # readonly properties
- agr hm ni chahty k ye cheex baad me change ho
class BottleMaker{
    constructor( public readonly brand: string , public price: number) {}
}


 # static members
- koe instance agr na bhi bnau to bhi accessable ho
- agr kse method/var pe static lga dia to ap bina usk instance ko bny, 
directly class k andr se usy access kr skty ho
- static members ko ap bina new kre chala skty ho

 ex.
 class Formula{
    static version = 1.0

    static getRandomNumber(){
        return Math.random()
    }
 }

Formula.version()   - in console

# Function Overloadig

//tcs fnc signature
function abc(a:string):void;
function abc(a:string, b:number):number;

function abc(a:any , b?:any){
    if(typeof a === "string" && b === undefined){
        console.log("hey")
    }
    if(typeof a === "string" && typeof b === "number"){
        return 123;
        else throw new Error("error)
    }
}

abc("hey")
abc("hey",12)

# Function types - Rest Parameters

** function k parameter me agr ... lgaya to ap wha pe dei gy sary 
arguments ko ek hi var me as an array rkh rhe ho

// ...rest/spread
ex.
function sum(...arr: number[]){
    ------------
}

sum(1,2,3,4,5,6,7)

# Generics 
## Generic Functions

** ek fn. jo koe bhi value accept kr k usy print krega
** hm ek fn. ko use krte wqt bta skty hn k fn. arg ko kestype se treat kre

ex. T ki value chnage ho jati ha
function abc<T>(a:T){ }

abc<string>("hey")
abc<number>(12)

# Generic interfaces
// obj ki trh 

interface hello<T>{
    name: string;
    age: number;
    key: T;
}

function abc(obj: hello<string>){ }

abc({ name: "foo" , age: 24 , key: "tyhj" })


# Generic classes
ex.

class abc<T>{ 
    construnctor(public key: T){ }
}

ley b1 = new abc<string>("hey")
ley b2 = new abc<number>(12)
console.log(b1 , b2)

*** this is string - a
*** this is string literal - "hello"

so in ex.
function abc<T>(a:T, b:T):T {

    return "helo"; ----- gives error
    return a; ----- ok
    return "helo" as T; ----ok
    return <T>"helo"; -----ok
}

abc<string>("helo","hey")

# Type assertion

** tc ko btana k particular cheex ka type kya ha 
- ye ap tb krte ho jb ap tc se zyada us vlue ka type janty ho

ex.
let a:any = 12;
(a as number).valueOf

another method:
<number>a. - sary methos mily gy jo number me hn

# type casting 
------------

# Non-null assertion operator

let a:null | undefined | string;
a = "hey"

a!. - iska mtlb k it is confirmed k ye null ya undefined to bilkul ni ha

# Type Guards - type narrowing
- agr ap sure ni ho k type kya ha to ap if else condition lgao 
r phir apk pass woho methos show hongy jo type ha

## -------------------------------------- Create functional component 

* MyBtn.tsx
* const MyBtn : React.FC

## --------------------------------------- handle props