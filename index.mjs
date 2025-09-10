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

    // console.log("sugars: " + donutWithMostSugar.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars)
    return donutWithMostSugar;

}

console.log("")
let realdonutMaxSugar = donutWithMostSugar();
console.log("Donut's with highes sugars: " + realdonutMaxSugar.name + " With " + realdonutMaxSugar.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars)

console.log("")

// console.log(donuts[0].nutrition_facts.nutrition.vitamins)

function donutWithMostIron ()
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

                // console.log(ironPercent)

                if(maxIron < ironPercent)
                {
                    maxIron = ironPercent;

                    donutWithMostIron = donuts[i]

                }
         
            }
        }
        
    }
    // console.log(maxIron)


    return donutWithMostIron;
}
let donutWithMaxIron = donutWithMostIron()

console.log("Donut with great amounts of Iron: " + donutWithMaxIron.name)

console.log(donutWithMaxIron.nutrition_facts.nutrition.vitamins)

//donut con más proteína (+ 50 exp)

function findDonutWithMostProtein ()
{
    let donutWithMostProtein = null;
    
    let maxProtein = 0;

    for (let i = 0; i < donuts.length; ++i)
    {

        let proteinNumbers = parseInt(donuts[i].nutrition_facts.nutrition.protein)


        if(maxProtein < proteinNumbers)
        {
            maxProtein = proteinNumbers;

            donutWithMostProtein = donuts[i]
        }
    }
    return donutWithMostProtein;
}

let donutWithMostProtein = findDonutWithMostProtein();

console.log(" ")

console.log("Donut with most Protein: " + donutWithMostProtein.name + " With " + donutWithMostProtein.nutrition_facts.nutrition.protein)

//donut con menos fibra (+ 50 exp)

function findTheMostFibre()
{
    let donutWIthMostFibre = null;
    
    let maxFibre = 0;

    for (let i = 0; i < donuts.length; ++i)
    {
        let fibreNumbers = parseInt(donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre)

        if (maxFibre < fibreNumbers)
        {
            maxFibre = fibreNumbers;

            donutWIthMostFibre = donuts[i];
        }
    }
    return donutWIthMostFibre;
}

console.log(" ")

let donutWithMostFibre = findTheMostFibre()

console.log("Donut With Most Fibre: " + donutWithMostFibre.name + " With " + donutWithMostFibre.nutrition_facts.nutrition.carbohydrate.carbs_detail.type.fibre)

//donut con más calorías (+ 50 exp)


function findDonutWithMostCal ()
{
    let donutWithMostCal = null;

    let maxCalFound = 0;
     
    for (let i = 0; i < donuts.length; ++i)
    {
        if (maxCalFound < donuts[i].nutrition_facts.nutrition.calories)
        {
            maxCalFound = donuts[i].nutrition_facts.nutrition.calories;

            donutWithMostCal = donuts[i]
        }
    }
    return donutWithMostCal;
}

let donutWithMostCal = findDonutWithMostCal();

console.log(" ");
console.log("Donut with highest calories: " + donutWithMostCal.name + " With " + donutWithMostCal.nutrition_facts.nutrition.calories)


//2



