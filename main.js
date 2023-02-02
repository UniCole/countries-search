'use strict';

(() => {

    searchAllBtn.addEventListener("click", async function showAllCountries() {
        try {
            const url = "https://restcountries.com/v3.1/all";
            const response = await fetch(url);
            const countries = await response.json();
            displayCountries(countries);

            const countriesAmount = countries.length;
            countriesAmountPar.innerHTML = "Total amount of countries: " + countriesAmount;

            const countriesPopulation = totalPopulation(countries);
            totalPopulationPar.innerHTML = "Total countries population: " + countriesPopulation;

            const avgPopulation = (countriesPopulation / countriesAmount);
            averagePopulationPar.innerHTML = "Average population of countries: " + avgPopulation;

            const par1 = document.getElementById("countriesAmountPar");
            par1.style.visibility = "visible";
            const par2 = document.getElementById("totalPopulationPar");
            par2.style.visibility = "visible";
            const par3 = document.getElementById("averagePopulationPar");
            par3.style.visibility = "visible";
        }
        catch (err) {
            alert(err.message);
        }
    });


    searchSpecificBtn.addEventListener("click", async function showAllCountries() {
        try {
            let countryName = searchSpecific.value;
            searchSpecific.style.border = "";
            if (countryName === "") {
                searchSpecific.style.border = "2px solid #a23438";
                //    alert("Please select a country");
            }
            const url = `https://restcountries.com/v3.1/name/${countryName}`;
            const response = await fetch(url);
            const countries = await response.json();
            displayCountries(countries);

            const countriesAmount = countries.length;
            countriesAmountPar.innerHTML = "Total amount of countries: " + countriesAmount;

            const countriesPopulation = totalPopulation(countries);
            totalPopulationPar.innerHTML = "Total countries population: " + countriesPopulation;

            const avgPopulation = (countriesPopulation / countriesAmount);
            averagePopulationPar.innerHTML = "Average population of countries: " + avgPopulation;

            const par1 = document.getElementById("countriesAmountPar");
            par1.style.visibility = "visible";
            const par2 = document.getElementById("totalPopulationPar");
            par2.style.visibility = "visible";
            const par3 = document.getElementById("averagePopulationPar");
            par3.style.visibility = "visible";
        }
        catch (err) {
            alert(err.message);
        }
    });


    function displayCountries(countries) {
        let content = "";
        for (const country of countries) {
            const tr = `
            <tr>
                <td>${country.name.official}</td> 
                <td>${country.population}</td>
            </tr>`;
            content += tr;
        }
        tBody.innerHTML = content;
        const table = document.getElementsByTagName("table")[0];
        table.style.visibility = "visible";
    }


    function totalPopulation(countries) {
        let totalPopulation = 0;
        for (const country of countries) {
            const population = country.population;
            totalPopulation += population;
        }
        return totalPopulation;
    }



})();





