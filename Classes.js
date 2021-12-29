/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 * - interests: [String]
 *
 * 2. Add the constructor that initializes all properties except the interests array should be empty by default
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021), and returns the age of the person
 * + addInterest(newInterest), that takes  a string of a new interest, and adds it to the interest array, and returns back the array
 * after you are done with the class, create at least 3 objects of type Actor of your favorite actors
 */
class Person {
  constructor(firstName, lastName, gender, birthY, interest) {
    this.fn = firstName;
    this.ln = lastName;
    this.g = gender;
    this.dob = birthY;
    this.intr = [];
  }
  printName = () => {
    console.log(`full name is ${this.firstName}${this.lastName}`);
  };
  calculatingAge = (currentYear) => {
    return currentYear - birthY;
  };
  addIntrest = (newint) => {
    this.intr.push(newint);
  };
}
const p = new Person("bb", "albaq", "female", 1993, "travelling");
const p1=new Person("ff","k","male",1990,"swimming");
const p2=new Person("tj","d","female",1980,"diving");


/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array should be empty by default
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here
  constructor(title,duration,rating){
    this.t=title;
    this.du=duration;
    this.rate=rating;
  }
  addrating=(r)=>{
this.rating.push(r)
  }
  //  ratingrange= r>0 && r<10)
  averagerating=(average)=>{
    const average=sumOfValues/countOfValues;
    this.rate=average;
  }
}

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
class Actor
{
  constructor(firstName, lastName, gender,Movie,rate){
    super(firstName, lastName, gender)
    this.Mov=Movie;
    this.r=rate;
  }
addMovie=(mov)=>
}
const a=new Actor("")
