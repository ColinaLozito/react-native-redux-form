const countriesURL = 'https://restcountries.eu/rest/v2/all';

const fileterCountries = (countriesObj: any) =>
    countriesObj.map((country: any) => ({
        label: country.name,
        value: country.name,
    }));

const CountriesRepository: any = {
    countriesList: () => {
      return new Promise((resolve, reject) => {
        fetch(countriesURL)
        .then(response => response.json())
        .then(data =>
            resolve(JSON.stringify(fileterCountries(data)))
        )
        .catch(e => {
          reject(e);
        });
      });
    },
  };

  export default CountriesRepository;
