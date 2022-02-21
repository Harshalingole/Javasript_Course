'user strict';
// String Method Practice---
// String Methods Practice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

/* 
Breaking Problem Into Mini Problem
---Using loop iterate it----
1)Convert string into array --serperator(_)
2)Replace All _  with ' ' from all string get in array
3)a= find indexof(;) then Repalce ; with ' ' first occuring
4)b = Find indexof(;) then replace it with to
5)c = find lastindexof(;) then replacce it with " "
6)a.slice(0,3).toUpperCase to get FAQ
7)b.slice(0,3).toUpperCase to get TXL
7)replace(c+3, with h)
*/

const strArry = flights.split('+');
strArry;

for (const str of strArry) {
  //1
  const [a, b, c, d] = str.split(';');
  // console.log(a, b, c, d);

  //2
  aa = `${a.replaceAll('_', ' ').trim()} from`;
  aa1 = `${aa.startsWith('Delayed') ? `🔴 ${aa}` : aa}`;
  // aa1
  aal = aa.length;
  // aal
  // console.log(aa);
  //3
  bb = `${b.substring(0, 3).toUpperCase()} to`;
  // bb;
  //3
  cc = `${c.substring(0, 3).toUpperCase()}`;
  // cc;
  //4
  dd = `(${d.replace(':', 'h')})`;
  // dd;
  //Joining All 2 + 3 + 4
  const fin = ` ${aa1} ${bb} ${cc} ${dd}`.padStart(36);
  fin;
  // console.log(fin.includes('Delayed'))
  console.log(fin);
}
