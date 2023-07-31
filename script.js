var names=[];
names[0]="Yakoov";
names[1]="Jhon";
names[2]="Jen";
names[3]="jason";
names[4]="Paul";
names[5]="Frank";
names[6]="Larry";
names[7]="paula";
names[8]="laura";
names[9]="jim";

for (var i = 0; i < names.length; i++) {
var firstLetter = names[i][0].toLowerCase();  
  if (firstLetter === 'j') {
    console.log("Goodbye " + names[i]);
  } else {
    console.log("Hello " + names[i]);
  }
}






