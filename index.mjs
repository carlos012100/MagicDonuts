import {data} from "./donutData.mjs"

let donuts = data.items.item

// 1

function donutWithMostSugar()
{
    let maxSugarinDonut = donuts[0].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars

    let donutWithMostSugar = donuts[0];

    for (let i = 0; i < donuts.length; i++)

    {
        let currentSugarDonut = data.items.item[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars

        if(maxSugarinDonut < currentSugarDonut)
        {
           maxSugarinDonut = currentSugarDonut;

           donutWithMostSugar = donuts[i];

        }

    }

    console.log("sugars: " + donutWithMostSugar.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars)
    return donutWithMostSugar;

}
// console.log(donuts)
// console.log(maxSugarinDonut)

let realdonutMaxSugar = donutWithMostSugar();
// console.log(realdonutMaxSugar)
// console.log("Donut's Name: " + realdonutMaxSugar.name)

console.log(donuts[0].nutrition_facts.nutrition.vitamins)

function findIronInDonut ()
{
    let donutWithMostIron = null;

    let maxIron = 0;

    for (let i = 0; i < donuts.length; ++i)
    {
        for (let j = 0; j < donuts[i].nutrition_facts.nutrition.vitamins.length; ++j)
        {
            let donutVitamin = donuts[i].nutrition_facts.nutrition.vitamins;


            if (donutVitamin[j].type === "Iron")
            {

                let ironPercent = parseInt(donutVitamin[j].percent)

                console.log(ironPercent)

                if(maxIron < ironPercent)
                {
                    maxIron = ironPercent;

                    console.log(maxIron)

                    donutWithMostIron = donutVitamin[j]

                    console.log(donutVitamin[j])
                }
         
            }
        }
        
    }

}
let ironInDonut = findIronInDonut()
//2



