
export default function equlitral(args: number): void {
  console.log( 'Equilateral for rows=' + args);
  for (let i = 1; i <= args; i++) {
      let space = ' ';
      let star = '*';
      for (let j = args; j > i; j--) {
          space = space.concat( ' ' ); }
      for (let k = 1; k < i; k++) {
          star = star.concat('* ');
      }
      space = space.concat(star);
      console.log(space);
  }

}
