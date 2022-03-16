let movie = String(prompt("What's your favorite movie?"))
console.log(movie)

if (movie !='Batman'){
    alert('Batman is suppose to be your favorite movie!');
    let movie = String(prompt("What's your favorite movie?"));
    console.log(movie)
};

const age = Number(prompt(("Please enter your age to see if you are allowed to watch the movie:")))
if (age > 16) {
    console.log('You are eligible to watch the movie!')
} else{
    console.log(`It seems you are ${age} years old. You are not allowed to watch the movie!`)
}
