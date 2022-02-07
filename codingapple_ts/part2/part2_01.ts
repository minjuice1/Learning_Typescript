let person = { student : true, age : 20 }

function 함수({student, age} :{student : boolean, age : number}){
  console.log(student, age)
}
함수({ student : true, age : 20 })


// 숙제 1
function 최댓값(...param: number[]) {

  let result = 0;
  
  param.forEach((i) => {
    if (result < i) {
      result = i
    }
  });

  return result;
}

console.log(최댓값(4,6,3,2)) 

// 숙제 2

interface UserType {
  user : string, comment : number[], admin : boolean
}

function 함수2 ({ user, comment, admin } :UserType ) :void {
  console.log(user, comment, admin)
}

함수2({ user : 'kim', comment : [3,5,4], admin : false })

// 숙제 3

type 타입 = (number | string | boolean)[];

function 함수3([a,b,c] : 타입) {
  console.log(a,b,c)
}

함수3([40, 'wine', false])