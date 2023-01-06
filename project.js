//Define charts:
var fertilityCountriesRates = "charts/fertilityCountriesRates.json";
var fertilityWorldRates = "charts/fertilityWorldRates.json";
var fertilityRatePoland = "charts/fertilityRatePoland.json";
var fertilityCompared = "charts/fertilityCompared.json";

// Embed charts:
vegaEmbed('#fertilityCountriesRates', fertilityCountriesRates);
vegaEmbed('#fertilityWorldRates', fertilityWorldRates);
vegaEmbed('#fertilityRatePoland', fertilityRatePoland);
vegaEmbed('#fertilityCompared', fertilityCompared);
