let arg=process.argv[2];
for (let i = 1; i <= arg; i++) {
      let space="";
      let str="";
    for(let j=arg;j>i;j--)
    {
        space=space.concat(" ");
    }
    for (let k=1; k<=i;k++) 
     {
        str =str.concat("* ");
     }
      
    space=space.concat(str);
    console.log(space);
    
}