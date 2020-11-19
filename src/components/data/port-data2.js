export function Port(){
    return [
        {
          country: "Ireland",
          name: "Dublin",
          lat: 53.349805,
          lng: -6.26031,
        },
        {
          country: "Ireland",
          name: "Galway",
          lat: 53.270668,
          lng: -9.0567905,
        },
        {
          country: "Faroe Islands",
          name: "Torshavn",
          lat: 	62.007864,
          lng: -6.790982,
        },
        {
          country: "Iceland",
          name: "Torshavn",
          lat: 		64.133333,
          lng: -21.933333,
        },
        {
          country: "Iceland",
          name: "Vopnafjordur",
          lat: 		65.14610,
          lng: 14.4946159,
        },
        {
          country: "England",
          name: "Vopnafjordur",
          lat: 		41.958446,
          lng: -70.667262,
        },
        {
          country: "England",
          name: "Falmouth",
          lat: 		50.152571,
          lng: -5.06627,
        },
        {
          country: "England",
          name: "Falmouth",
          lat: 		50.816667,
          lng: -1.083333,
        },
        {
          country: "England",
          name: "London",
          lat: 		51.5073509,
          lng: -0.1277583,
        },
        {
          country: "England",
          name: "Liverpool",
          lat: 			41.7056291,
          lng: -70.2286681,
        },
        {
          country: "Scotland",
          name: "Aberdeen",
          lat: 				57.088199,
          lng: -2.087524,
        },
        {
          country: "Scotland",
          name: "Tarbert",
          lat: 			55.8667,
          lng: -5.4333,
        },
        {
          country: "Scotland",
          name: "Edimbourg",
          lat: 			55.916270,
          lng: -3.218940,
        },
      
        {
          country: "Ireland",
          name: "Edimbourg",
          lat: 			53.349805,
          lng: 	-6.260310,
        },
        {
          country: "Ireland",
          name: "Limerick",
          lat: 			52.6680204,
          lng: 	-8.6304975,
        },
        
        {
          country: "Denmark",
          name: "Esjberg",
          lat: 			55.476466,
          lng: 	8.459405,
        },
        {
          country: "Denmark",
          name: "Aalborg",
          lat: 			57.048820,
          lng: 	9.921747,
        },
      
        {
          country: "Denmark",
          name: "Nyborg",
          lat: 			55.313071,
          lng: 	10.803167,
        },
        {
          country: "Denmark",
          name: "Copenhague",
          lat: 			55.552423,
          lng: 	11.673314,
        },
        
        {
          country: "Norway",
          name: "Oslo",
          lat: 			59.85214,
          lng: 	10.569188,
        },
        {
          country: "Norway",
          name: "Stavanger",
          lat: 			59.022619,
          lng: 	5.301244,
        },
        
        {
          country: "Norway",
          name: "Bergen",
          lat: 			60.431896,
          lng: 	4.955174,
        },
        {
          country: "Norway",
          name: "Trondelag",
          lat: 			63.537918,
          lng: 	9.761693,
        },
        {
          country: "Norway",
          name: "Hammerfest",
          lat: 			70.717473,
          lng: 	22.978246,
        },
      
        {
          country: "Sweden",
          name: "Malmo",
          lat: 			55.574167,
          lng: 	13.013646,
        },
        {
          country: "Sweden",
          name: "Trelleborg",
          lat: 			55.372571,
          lng: 	13.157841,
        },
        
        {
          country: "Sweden",
          name: "Ystad",
          lat: 			55.429496,
          lng: 	13.823888,
        },
        {
          country: "Sweden",
          name: "Kristianstad",
          lat: 			56.034166,
          lng: 	14.178197,
        },
        
        {
          country: "Sweden",
          name: "Kalmar",
          lat: 			56.659713,
          lng: 	16.367223,
        },
        {
          country: "Sweden",
          name: "Stockholm",
          lat: 			59.314005,
          lng: 	18.08109,
        },
        
        {
          country: "Finland",
          name: "Oulu",
          lat: 			64.972748,
          lng: 	25.485875,
        },
          
        {
          country: "Finland",
          name: "Vaasa",
          lat: 			63.077738,
          lng: 	21.684605,
        },
        {
          country: "Finland",
          name: "Turku",
          lat: 			60.449511,
          lng: 	22.189976,
        },
        {
          country: "Finland",
          name: "Helsinki",
          lat: 			60.177461,
          lng: 	24.936558,
        },
        {
          country: "Estonia",
          name: "Tallinn",
          lat: 			59.392408,
          lng: 	24.650914,
        },
        
        {
          country: "Lithuania",
          name: "Klaipéda",
          lat: 			55.712119,
          lng: 	21.168248,
        },
        {
          country: "Germany",
          name: "Stralsund",
          lat: 			54.312213,
          lng: 	13.085057,
        },
        {
          country: "Germany",
          name: "Lübeck",
          lat:  53.911311,
          lng: 	10.813634,
        },
        {
          country: "Poland",
          name: "Koszalin",
          lat: 			54.196688,
          lng: 	16.177708,
        },
      ];
}
  export function renderCityName(state, val) {
    return (
        state.name.toLowerCase().indexOf(val.toLowerCase()) !== -1
    );
  }