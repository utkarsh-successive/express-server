let arg=process.argv[2];
 arg=arg*2
 let num=arg/2
 let num2=1
for (let i = 1; i <= arg; i++)
 {
      let space=""
      let str=""
      for(let j=1;j<=num;j++)
      {
         space=space.concat(" ")
      }
      for(let k=1;k<=num2;k++)
      {
         str=str.concat("* ")
      }
      if(i ===(arg/2))
      {

      }
      else if(i>(arg/2))
      {
      	num=num+1
      	num2=num2-1

      }
      else 
      {
      	num=num-1
      	num2=num2+1
      }
       space=space.concat(str)
    console.log(space)
}