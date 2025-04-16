
function checkJAMBScore(score) {
    if (score >= 180) {
      console.log("Passed");
    } else {
      console.log("Failed");
    }
  }

  checkJAMBScore(200);
  checkJAMBScore(120);

  

function checkQualified(age) {
    if (age >= 18) {
      return "Eligible to vote";
    } else {
      return "Not Eligible";
    }
  }
  console.log(checkQualified (12))
  console.log(checkQualified (20))


function gradeStudent(name, score) {
    if (score >= 90) {
      return "Excellent";
    } else if (score >= 75) {
      return "Good";
    } else if (score >= 50) {
      return "Average";
    } else {
      return "Fail";
    }
  }

console.log( gradeStudent("victory", 60));
  
function Access(hasID, isAbove18) {
    return (hasID && isAbove18) ? "Access granted" : "Access denied";
  }

  console.log( Access(true, true));
  console.log(Access(true, false));
  
const Scores = [45, 60, 30, 75, 51];

for (let a = 0; a < Scores.length; a++) {
  if (Scores[a] > 50) {
    console.log("Pass");
  } else {
    console.log("Fail");
  }
}


const passedBothSubjects = (math, english)=>(
    math >= 50 && english >= 50) ? "Yes" : "No";
console.log( passedBothSubjects(70, 80));

  


function signUp (email, number) {
    if (email || number ) {
        return "sign-up allowed";
    }else {
        return "Input email or number to sign up";
    }
}

console.log( signUp("victorynnado@gmail.com", ""));

function takeUser (name = "Victory", password = 419619){
    const message = `Hello, my userName is ${name}, and my password is ${419619}`

    console.log(message)
}

takeUser()
takeUser("Emeka", 64556)


const c = 40

let d

c >= 40 ? "Full-time" : "Part-time"

c >= 40 ? d = 20 : d = 80

console.log(d)


const takeNumbers = (num = 2)=>{
    console.log(num + 5)
}

takeNumbers()
takeNumbers(30)






































