/*LOOPING PRACTICE
1) Make an array of your friends' names, then loop through it and alert() a hello to each of them.
2) Make a web page that lists out your favorite ice cream flavors. Rather than writing the flavors in the HTML, use a JavaScript loop to insert the flavors into the page from an array.
3) Write a loop to multiply an arbitrary amount of numbers. This should look very similar to the code to sum numbers from the lesson.
4) Make a web page that prints out the lyrics to "99 bottles of beer on the wall". 
*/

/*-----Exercise #1-----*/
	
    
/*option 1*/
function myFriends(array) {
    for (var i = 0; i < array.length; i++) {
    document.write('I love ' + array[i]);
    document.write("<br>");
    }
}

var friends = ['Monica', 'Varessa', 'Melanie', 'Aubrey'];
    
myFriends(friends);

document.write("<br>");

/*option 2*/
for (var i = 0; i < friends.length; i++) {
    var friends = ['Monica', 'Varessa', 'Melanie', 'Aubrey'];
    document.write('Hi ' + friends[i]);
    document.write("<br>");
}
    
document.write("<br>");

/*-----Exercise #2-----*/


var iceCream = ['mint', 'strawberry', 'chocolate', 'vanilla'];

for (var i = 0; i < iceCream.length; i++) {

    document.write('I love ' + iceCream[i]);
    document.write("<br>");
    
}

document.write("<br>");

/*-----Exercise #3-----*/

var numbers = [5,8,7,3,4,2,9];

for (var i = 0; i < numbers.length; i++) {
    document.write('2' + ' * ' + numbers[i] + ' = ' + (2 * numbers[i]));
    document.write("<br>");

}

 document.write("<br>");

/*-----Exercise #4-----*/

    var text = "";
    var i;
    for (i = 99; i > 0; i--) {
         text += (i + ' bottles of beer on the wall' + '<br>');
    }
    document.write(text);


/*BRANCHING PRACTICE
1) A page with information about turtles, snakes, and insects that asks you which animal you'd like to learn about.
2) A page with information about voting that displays different information to minors.
3) A page for an amusement park that only shows you information on rides that you're tall enough to go on.*/
    
/*-----Exercise #1-----*/
    

$(document).ready(function() {
    
    $('li').click(function() {
        var msg = $(this).text();
        document.write('Excellent! I love ' + msg + ' too!');
});
    
});
    
    


