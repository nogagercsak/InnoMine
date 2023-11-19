// Replace this static list with a dynamic one fetched from a server
const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "Austin",
    "Jacksonville",
    "San Jose",
    "Columbus",
    "Charlotte",
    "Indianapolis",
    "San Francisco",
    "Seattle",
    "Denver",
    "Oklahoma City",
    "Nashville",
    "El Paso",
    "Washington",
    "Las Vegas",
    "Boston",
    "Portland",
    "Louisville",
    "Memphis",
    "Detroit",
    "Baltimore",
    "Milwaukee",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Sacramento",
    "Mesa",
    "Kansas City",
    "Atlanta",
    "Colorado Springs",
    "Omaha",
    "Raleigh",
    "Virginia Beach",
    "Long Beach",
    "Miami",
    "Oakland",
    "Minneapolis",
    "Tulsa",
    "Bakersfield",
    "Tampa",
    "Wichita",
    "Arlington",
    "Aurora",
    "Cleveland",
    "Anaheim",
    "Honolulu",
  ];
  
  console.log(cities);
  

// Replace this with a real API call to fetch e-waste centers for the selected city
const dummyData = {
    "New York": [
      { name: "GreenChip Ewaste & ITAD Solutions", website: "https://www.greenchiprecycling.com/" },
    ],
    "Los Angeles": [
      { name: "E-Waste Security", website: "https://www.ewastesecurity.com/onsite-hard-drive-destruction-in-los-angeles-ca/" },
    ],
    "Chicago": [
      { name: "AVA Recycling", website: "http://www.avarecycling.com/" }
    ],
    "Houston": [
      { name: "STS Electronic Recycling", website: "https://www.stselectronicrecyclinginc.com/houston" }
    ],
    "Phoenix": [
      { name: "Westech Recyclers", website: "https://www.westechrecyclers.com/" }
    ],
    "Philadelphia": [
      { name: "Computer Recycling", website: "https://www.computerrecyclinginc.com/" }
    ],
    "San Antonio": [
      { name: "National Steel Recycling", website: "http://nationalsteeltx.com/" }
    ],
    "San Diego": [
      { name: "SA Recycling", website: "https://www.sarecycling.com/yard/sa-recycling-san-diego-commercial-street/" }
    ],
    "Dallas": [
      { name: "E-Cycle Enterprises", website: "http://www.ecycleenterprises.com/" }
    ],
    "Austin": [
      { name: "Austin Recycle & Reuse Drop-off Center", website: "http://www.austintexas.gov/dropoff" }
    ],
    "Jacksonville": [
      { name: "Quick Stop Recycling", website: "http://www.quickstopmetalrecycling.com/" }
    ],
    "San Jose": [
      { name: "San Jose Environmental Innovation Center", website: "https://www.sanjoseca.gov/your-government/departments-offices/environmental-services/energy/green-building/environmental-innovation-center" }
    ],
    "Columbus": [
      { name: "IHS Metal Recycling", website: "https://www.ihsrecycling.com/" }
    ],
    "Charlotte": [
      { name: "All Green Recycling, Inc.", website: "http://www.all-green.com/" }
    ],
    "Indianapolis": [
      { name: "Technology Recyclers", website: "http://www.tech-recyclers.com/" }
    ],
    "San Francisco": [
      { name: "GreenCitizen, Inc.", website: "https://www.greencitizen.com/" }
    ],
    "Seattle": [
      { name: "Living Green Technology", website: "https://www.livinggreentechnology.org/" }
    ],
    "Denver": [
      { name: "Denver Recycling Center", website: "http://www.denvermetalrecycling.com/" }
    ],
    "Oklahoma City": [
      { name: "Recyclers of Oklahoma", website: "http://www.recyclersofoklahoma.com/" }
    ],
    "Nashville": [
      { name: "SA Recycling", website: "https://www.sarecycling.com/yard/sa-recycling-nashville-s-3rd-st/" }
    ],
    "El Paso": [
      { name: "SA Recycling", website: "https://www.sarecycling.com/yard/sa-recycling-socorro/" }
    ],
    "Washington": [
      { name: "eAsset Solutions LLC", website: "http://www.eassetsolutions.com/" }
    ],
    "Las Vegas": [
      { name: "SA Recycling", website: "https://www.sarecycling.com/yard/sa-recycling-las-vegas-nellis-blvd/" }
    ],
    "Boston": [
      { name: "R2 Recycling", website: "https://www.r2-recycling.com/" }
    ],
    "Portland": [
      { name: "Green Century Electronics Recycling", website: "https://greencenturyonline.net/" }
    ],
    "Louisville": [
      { name: "Genie Computer Recycling", website: "http://recyclelouisville.net/" }
    ],
    "Memphis": [
      { name: "ER2", website: "http://www.er2.com/" }
    ],
    "Detroit": [
      { name: "Recycle Here!", website: "http://recyclehere.net/" }
    ],
    "Baltimore": [
      { name: "Electronics Value Recovery", website: "http://electronicsvaluerecovery.com/" }
    ],
    "Milwaukee": [
      { name: "NJT Automation Salvage | Electronics Recycling & Recovery", website: "http://njtautomation.com/" }
    ],
    "Albuquerque": [
      { name: "Albuquerque Computer & Electronics Recycling Co", website: "http://www.albuquerquerecycling.net/" }
    ],
    "Tucson": [
      { name: "Suburban Miners", website: "https://suburbanminers.com/" }
    ],
    "Fresno": [
      { name: "Xtreme Electronic Recycling", website: "https://thekingofrecycling.com/" }
    ],
    "Sacramento": [
      { name: "E-Waste Gurus", website: "http://www.ewastegurus.com/" }
    ],
    "Mesa": [
      { name: "AZStRUT", website: "https://www.azstrut.org/" }
    ],
    "Kansas City": [
      { name: "MRC - Certified Electronics Recycling", website: "https://mrcrecycling.net/" }
    ],
    "Atlanta": [
      { name: "Ecycle Atlanta", website: "https://ecycleatlanta.com/" }
    ],
    "Colorado Springs": [
      { name: "ETech Recyclers", website: "http://www.etechrecyclers.com/" }
    ],
    "Omaha": [
      { name: "Cross Electronic Recycling", website: "https://www.crossrecycling.com/" }
    ],
    "Raleigh": [
      { name: "T T & E Iron & Metal Inc", website: "http://www.ncscrapmetal.com/" }
    ],
    "Virginia Beach": [
      { name: "Virgina Beach Computer Recycling and Disposal", website: "http://virginiabeach-computer-recycling.net/" }
    ],
    "Long Beach": [
      { name: "Secure E-Waste Destruction", website: "http://www.secureewastedestruction.com/" }
    ],
    "Miami": [
      { name: "Electronic Recycling Center", website: "http://www.ercrecycling.com/" }
    ],
    "Oakland": [
      { name: "Bee Green Recycling & Supply", website: "http://www.beegreen.green/" }
    ],
    "Minneapolis": [
      { name: "Electronics Recycling of Minnesota", website: "http://ecyclemn.com/" }
    ],
    "Tulsa": [
      { name: "Upcycle Technology", website: "http://www.upcycletech.org/" }
    ],
    "Bakersfield": [
      { name: "Alianza Recycling and Recovery", website: "https://alianzarecycling.com/" }
    ],
    "Tampa": [
      { name: "Stream Recycling Solutions", website: "https://www.streamrecycling.com/" }
    ],
    "Wichita": [
      { name: "American E-waste Recyclers", website: "http://www.americanewasterecyclers.com/" }
    ],
    "Arlington": [
      { name: "eAsset Solutions ", website: "http://www.eassetsolutions.com/" }
    ],
    "Aurora": [
      { name: "Techno Rescue", website: "https://www.technorescue.com/" }
    ],
    "Cleveland": [
      { name: "Cleveland Computer Recycling", website: "http://clevelandcomputerrecyclingllc.com/" }
    ],
    "Anaheim": [
      { name: "TechWaste Recycling", website: "https://www.techwasterecycling.com/?utm_source=localsearch&utm_medium=organic&utm_campaign=googlemybusiness" }
    ],
    "Honolulu": [
      { name: "E-opala - Computer Recycling Center", website: "http://www.eopala.com/" }
    ],  
};

function loadEwasteCenters() {
    const citySelect = document.getElementById("citySelect");
    const selectedCity = citySelect.value;
    const ewasteCenters = document.getElementById("ewasteCenters");

    const centers = dummyData[selectedCity] || [];

    if (centers.length === 0) {
        ewasteCenters.innerHTML = `<div class="no-data">No data available for e-waste centers in ${selectedCity}.</div>`;
        return;
    }

    const centersHTML = centers.map(center => `
        <div class="center">
            <p><a href="${center.website}" target="_blank">${center.name}</a></p>
        </div>
    `).join("");

    ewasteCenters.innerHTML = `<div class="centers-list">
        <p class="city-title">E-Waste Recycling Center in ${selectedCity}:</p>
        ${centersHTML}
    </div>`;
}

// Populate the dropdown with cities
const citySelect = document.getElementById("citySelect");
cities.forEach(city => {
    const option = document.createElement("option");
    option.value = city;
    option.textContent = city;
    citySelect.appendChild(option);
});

