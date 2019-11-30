let a=[84, -15, 1.3, -0.7234, -9, 0, 760, 290];
let x=require('readline-sync')
let i=0;let sum=0;let posative=0;let negative=0;let Sumposativ=0; let Sumnegative=0;let Max; let Min;
console.log("pleas choose the one of the below  \n Sum: to the summation of elements \n NP: to number of posative elements \n NN: to number of negative elements \n SP: to sum of posative elements \n SN: to sum of negative elements \n MX: to find Maximam element \n ")
let input =x.question("Enter ");
switch (input){
    case 'Sum':
        for (i=0;i<a.length;i++)
        {
            sum=sum+a[i];
            console.log(" sum =:" +sum)
        }
        break;
        case 'NP':
                for (i=0;i<a.length;i++)
                {
                if (a[i]>=0)
                
            posative=posative+1; 
                }
                console.log(" number of posative  =:" +posative)
                    break;
                    case 'NN':
                            for (i=0;i<a.length;i++)
                            {
                            if (a[i]<0)
                            
                        negative=negative+1; 
                            }
                            console.log(" number of negative   =:" +negative)
                                break;
                                case 'MX':
                                    Max=a[0];
                for (i=0;i<a.length;i++)
                {
                if (a[i]>Max)
                Max=a[i];
                }
                console.log(" number of max  =:" +Max)
                    break;
                    default:
                        console.log("Error");
                        
        }

