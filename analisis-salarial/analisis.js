//Analisis Personal

function findPerson (name) {
    return salarios.find(a => a.name == name)
}

function medianForPeople (name) {
    const jobs = findPerson(name).trabajos
    const wages = jobs.map(e => e.salario)

    return PlatziMath.findMedian(wages)
}

function personalSalaryProjection (name) {
    const jobs = findPerson(name).trabajos
    let growthPercentages = []

    for (let i = 1; i < jobs.length; i++) {
        const growth = jobs[i].salario - jobs[i - 1].salario // Primer salario menos el segundo(en relacion a los que se van a comparar en esa iteracion)
        const individualGrowth = growth / jobs[i - 1].salario // Porcentaje de crecimiento de esa iteracion
        growthPercentages.push(individualGrowth)
    }

    const percentageIncrase =  jobs.at(-1).salario * PlatziMath.findMedian(growthPercentages) //Equivalencia del porcentaje de crecimiento respecto al ultimo salario
    const projectionIncrase = jobs.at(-1).salario + percentageIncrase                                              // Sumar el invremento al ultimo salario para obtener la proyeccion esperada

    return projectionIncrase
}

//Analisis por Empresa 

const companies = {}

for (const person of salarios) {
    for (const trabajo of person.trabajos) {
        if(!companies[trabajo.empresa]) {
            companies[trabajo.empresa] = {}
        }

        if(!companies[trabajo.empresa] [trabajo.year]) {
            companies[trabajo.empresa] [trabajo.year] = []
        }

        companies[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}
console.log({companies});