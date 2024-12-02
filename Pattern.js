// Start Pattern

// Inverse Pyramid

// * * * * *
//  * * * *
//   * * *
//    * *
//     *

let n = 5;
for(let i = 1;i<=n;i++){
    let row = "";
     for(let j = 1;j<i;j++){
        row += " ";
    }
    for(let j = n;j>=i;j--){
        row += "*" + " ";
    }
    console.log(row);
}

// Inverse Right angled Triangle
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 


for(let i = 1;i<=n;i++){
    let row = "";
    for(let j = n;j>=i;j--){
        row += "*" + " ";
    }
    console.log(row);
}

// Square Pattern
// 11111
// 11111
// 11111
// 11111
// 11111


for(let i=0;i<n;i++){
    let row = "";
    for(let j=0;j<n;j++){
        row += "1";
    }
    console.log(row);
}


//Hollow Square
// 11111
// 1   1
// 1   1
// 1   1
// 11111

for(let i=0;i<n;i++){
    let row = "";
    for(let j=0;j<n;j++){
        if( i===0 || j === 0 || j === n-1 || i===n-1){
            row += "1";
        }else{
            row += " ";
        }
    }
    console.log(row);
}

