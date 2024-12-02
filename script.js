let map;
let view;

const data = {
    continents: ['Africa', 'Asia', 'Europe', 'North America', 'South America', 'Oceania'],
    countries: {
        'North America': [
            'US',
            'Canada'
        ],
        'Asia': [
            'China',
            'Hong Kong',
            'India',
            'Indonesia',
            'Israel',
            'Japan',
            'Korea',
            'Malaysia',
            'Pakistan',
            'Philippines',
            'Singapore',
            'Taiwan',
            'Thailand',
            'Turkey',
            'Vietnam'
        ],
        'Europe': [
            'France',
            'Germany',
            'Italy',
            'Spain',
            'United Kingdom'
        ],
        'Africa': [
            'South Africa',
            'Nigeria',
            'Egypt',
            'Kenya'
        ],
        'Australia': [
            'Australia'
        ],
        'Oceania': [
            'New Zealand',
            'Fiji'
        ],
        'South America': [
            'Argentina',
            'Brazil',
            'Chile',
            'Colombia',
            'Peru'
        ],
        'Central America': [
            'Costa Rica',
            'Panama'
        ],
        'Caribbean': [
            'Jamaica',
            'Puerto Rico'
        ],
        'Middle East': [
            'Saudi Arabia',
            'United Arab Emirates',
            'Iran',
            'Iraq',
            'Jordan'
        ]
    },
    states: {
        'US': [
            'Alabama',
            'Alaska',
            'Arizona',
            'Arkansas',
            'California',
            'Colorado',
            'Connecticut',
            'Delaware',
            'District of Columbia',
            'Florida',
            'Georgia',
            'Hawaii',
            'Idaho',
            'Illinois',
            'Indiana',
            'Iowa',
            'Kansas',
            'Kentucky',
            'Louisiana',
            'Maine',
            'Maryland',
            'Massachusetts',
            'Michigan',
            'Minnesota',
            'Mississippi',
            'Missouri',
            'Montana',
            'Nebraska',
            'Nevada',
            'New Hampshire',
            'New Jersey',
            'New Mexico',
            'New York',
            'North Carolina',
            'North Dakota',
            'Ohio',
            'Oklahoma',
            'Oregon',
            'Pennsylvania',
            'Rhode Island',
            'South Carolina',
            'South Dakota',
            'Tennessee',
            'Texas',
            'Utah',
            'Vermont',
            'Virginia',
            'Washington',
            'West Virginia',
            'Wisconsin',
            'Wyoming'
        ],
        'Canada': [
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland and Labrador',
            'Nova Scotia',
            'Ontario',
            'Prince Edward Island',
            'Quebec',
            'Saskatchewan'
        ],
        'China': [
            'Beijing Municipality'
        ],
        'Hong Kong': [
            'Hong Kong Special Administrative Region'
        ],
        'India': [
            'Delhi Territory'
        ],
        'Indonesia': [
            'Jakarta Special Capital Region'
        ],
        'Israel': [
            'Tel Aviv District'
        ],
        'Japan': [
            'Tokyo Metropolis'
        ],
        'Korea': [
            'Seoul Special City'
        ],
        'Malaysia': [
            'Federal Territory of Kuala Lumpur'
        ],
        'Pakistan': [
            'Sindh'
        ],
        'Philippines': [
            'Metro Manila'
        ],
        'Singapore': [
            'Central Region'
        ],
        'Taiwan': [
            'Taipei City'
        ],
        'Thailand': [
            'Bangkok'
        ],
        'Turkey': [
            'Istanbul Province'
        ],
        'Vietnam': [
            'Ho Chi Minh Municipality'
        ],
        'France': [
            '\u00cele-de-France'
        ],
        'Germany': [
            'Berlin State'
        ],
        'Italy': [
            'Lazio'
        ],
        'Spain': [
            'Community of Madrid'
        ],
        'United Kingdom': [
            'England'
        ],
        'South Africa': [
            'Western Cape'
        ],
        'Nigeria': [
            'Lagos State'
        ],
        'Egypt': [
            'Cairo Governorate'
        ],
        'Kenya': [
            'Nairobi County'
        ],
        'Australia': [
            'New South Wales'
        ],
        'New Zealand': [
            'Auckland Region'
        ],
        'Fiji': [
            'Central Division'
        ],
        'Argentina': [
            'Buenos Aires Province'
        ],
        'Brazil': [
            'S\u00e3o Paulo State'
        ],
        'Chile': [
            'Santiago Metropolitan Region'
        ],
        'Colombia': [
            'Capital District'
        ],
        'Peru': [
            'Lima Region'
        ],
        'Costa Rica': [
            'San Jos\u00e9 Province'
        ],
        'Panama': [
            'Panama Province'
        ],
        'Jamaica': [
            'Kingston Parish'
        ],
        'Puerto Rico': [
            'San Juan Municipio'
        ],
        'Saudi Arabia': [
            'Riyadh Province'
        ],
        'United Arab Emirates': [
            'Dubai Emirate'
        ],
        'Iran': [
            'Tehran Province'
        ],
        'Iraq': [
            'Baghdad Governorate'
        ],
        'Jordan': [
            'Amman Governorate'
        ]
    },
    cities: {
        'Alabama': [
            'auburn'
        ],
        'Alaska': [
            'anchorage'
        ],
        'Arizona': [
            'phoenix'
        ],
        'Arkansas': [
            'fayetteville'
        ],
        'California': [
            'los angeles'
        ],
        'Colorado': [
            'denver'
        ],
        'Connecticut': [
            'hartford'
        ],
        'Delaware': [
            'delaware'
        ],
        'District of Columbia': [
            'washington'
        ],
        'Florida': [
            'miami'
        ],
        'Georgia': [
            'atlanta'
        ],
        'Hawaii': [
            'honolulu'
        ],
        'Idaho': [
            'boise'
        ],
        'Illinois': [
            'chicago'
        ],
        'Indiana': [
            'indianapolis'
        ],
        'Iowa': [
            'des moines'
        ],
        'Kansas': [
            'lawrence'
        ],
        'Kentucky': [
            'lexington'
        ],
        'Louisiana': [
            'baton rouge'
        ],
        'Maine': [
            'maine'
        ],
        'Maryland': [
            'baltimore'
        ],
        'Massachusetts': [
            'boston'
        ],
        'Michigan': [
            'detroit'
        ],
        'Minnesota': [
            'minneapolis'
        ],
        'Mississippi': [
            'jackson'
        ],
        'Missouri': [
            'st louis'
        ],
        'Montana': [
            'billings'
        ],
        'Nebraska': [
            'omaha'
        ],
        'Nevada': [
            'las vegas'
        ],
        'New Hampshire': [
            'manchester'
        ],
        'New Jersey': [
            'newark'
        ],
        'New Mexico': [
            'albuquerque'
        ],
        'New York': [
            'new york city'
        ],
        'North Carolina': [
            'charlotte'
        ],
        'North Dakota': [
            'fargo'
        ],
        'Ohio': [
            'columbus'
        ],
        'Oklahoma': [
            'oklahoma city'
        ],
        'Oregon': [
            'portland'
        ],
        'Pennsylvania': [
            'philadelphia'
        ],
        'Rhode Island': [
            'providence'
        ],
        'South Carolina': [
            'columbia'
        ],
        'South Dakota': [
            'sioux falls'
        ],
        'Tennessee': [
            'nashville'
        ],
        'Texas': [
            'houston'
        ],
        'Utah': [
            'salt lake city'
        ],
        'Vermont': [
            'montpelier'
        ],
        'Virginia': [
            'richmond'
        ],
        'Washington': [
            'seattle'
        ],
        'West Virginia': [
            'charleston'
        ],
        'Wisconsin': [
            'milwaukee'
        ],
        'Wyoming': [
            'cheyenne'
        ],
        'Alberta': [
            'calgary'
        ],
        'British Columbia': [
            'vancouver'
        ],
        'Manitoba': [
            'winnipeg'
        ],
        'New Brunswick': [
            'moncton'
        ],
        'Newfoundland and Labrador': [
            'st john\'s'
        ],
        'Nova Scotia': [
            'halifax'
        ],
        'Ontario': [
            'toronto'
        ],
        'Prince Edward Island': [
            'charlottetown'
        ],
        'Quebec': [
            'montreal'
        ],
        'Saskatchewan': [
            'regina'
        ],
        'Beijing Municipality': [
            'Beijing'
        ],
        'Hong Kong Special Administrative Region': [
            'Hong Kong'
        ],
        'Delhi Territory': [
            'Delhi'
        ],
        'Jakarta Special Capital Region': [
            'Jakarta'
        ],
        'Tel Aviv District': [
            'Tel Aviv'
        ],
        'Tokyo Metropolis': [
            'Tokyo'
        ],
        'Seoul Special City': [
            'Seoul'
        ],
        'Federal Territory of Kuala Lumpur': [
            'Kuala Lumpur'
        ],
        'Sindh': [
            'Karachi'
        ],
        'Metro Manila': [
            'Manila'
        ],
        'Central Region': [
            'Singapore'
        ],
        'Taipei City': [
            'Taipei'
        ],
        'Bangkok': [
            'Bangkok'
        ],
        'Istanbul Province': [
            'Istanbul'
        ],
        'Ho Chi Minh Municipality': [
            'Ho Chi Minh City'
        ],
        '\u00cele-de-France': [
            'Paris'
        ],
        'Berlin State': [
            'Berlin'
        ],
        'Lazio': [
            'Rome'
        ],
        'Community of Madrid': [
            'Madrid'
        ],
        'England': [
            'London'
        ],
        'Western Cape': [
            'Cape Town'
        ],
        'Lagos State': [
            'Lagos'
        ],
        'Cairo Governorate': [
            'Cairo'
        ],
        'Nairobi County': [
            'Nairobi'
        ],
        'New South Wales': [
            'Sydney'
        ],
        'Auckland Region': [
            'Auckland'
        ],
        'Central Division': [
            'Suva'
        ],
        'Buenos Aires Province': [
            'Buenos Aires'
        ],
        'S\u00e3o Paulo State': [
            'S\u00e3o Paulo'
        ],
        'Santiago Metropolitan Region': [
            'Santiago'
        ],
        'Capital District': [
            'Bogot\u00e1'
        ],
        'Lima Region': [
            'Lima'
        ],
        'San Jos\u00e9 Province': [
            'San Jos\u00e9'
        ],
        'Panama Province': [
            'Panama City'
        ],
        'Kingston Parish': [
            'Kingston'
        ],
        'San Juan Municipio': [
            'San Juan'
        ],
        'Riyadh Province': [
            'Riyadh'
        ],
        'Dubai Emirate': [
            'Dubai'
        ],
        'Tehran Province': [
            'Tehran'
        ],
        'Baghdad Governorate': [
            'Baghdad'
        ],
        'Amman Governorate': [
            'Amman'
        ]
    },
    coordinates: {
        'auburn': [
            -85.4808,
            32.6096
        ],
        'anchorage': [
            -149.8991,
            61.2174
        ],
        'phoenix': [
            -112.074,
            33.4484
        ],
        'fayetteville': [
            -94.1574,
            36.0626
        ],
        'los angeles': [
            -118.2437,
            34.0522
        ],
        'denver': [
            -104.9903,
            39.7392
        ],
        'hartford': [
            -72.6734,
            41.7658
        ],
        'delaware': [
            -75.5277,
            38.9108
        ],
        'washington': [
            -77.0369,
            38.9072
        ],
        'miami': [
            -80.1918,
            25.7617
        ],
        'atlanta': [
            -84.388,
            33.749
        ],
        'honolulu': [
            -157.8583,
            21.3069
        ],
        'boise': [
            -116.2023,
            43.615
        ],
        'chicago': [
            -87.6298,
            41.8781
        ],
        'indianapolis': [
            -86.158,
            39.7684
        ],
        'des moines': [
            -93.625,
            41.5868
        ],
        'lawrence': [
            -95.2353,
            38.9717
        ],
        'lexington': [
            -84.5037,
            38.0406
        ],
        'baton rouge': [
            -91.1395,
            30.6954
        ],
        'maine': [
            -69.3819,
            44.6937
        ],
        'baltimore': [
            -76.6122,
            39.2904
        ],
        'boston': [
            -71.0589,
            42.3601
        ],
        'detroit': [
            -83.0458,
            42.3314
        ],
        'minneapolis': [
            -93.265,
            44.9778
        ],
        'jackson': [
            -90.1848,
            32.2988
        ],
        'st louis': [
            -90.1994,
            38.627
        ],
        'billings': [
            -108.5007,
            45.7833
        ],
        'omaha': [
            -95.9345,
            41.2565
        ],
        'las vegas': [
            -115.1398,
            36.1699
        ],
        'manchester': [
            -71.4548,
            42.9956
        ],
        'newark': [
            -74.1724,
            40.7357
        ],
        'albuquerque': [
            -106.6504,
            35.0844
        ],
        'new york city': [
            -74.006,
            40.7128
        ],
        'charlotte': [
            -80.8431,
            35.2271
        ],
        'fargo': [
            -96.7898,
            46.8772
        ],
        'columbus': [
            -82.9988,
            39.9612
        ],
        'oklahoma city': [
            -97.5164,
            35.4676
        ],
        'portland': [
            -122.675,
            45.5051
        ],
        'philadelphia': [
            -75.1652,
            39.9526
        ],
        'providence': [
            -71.4222,
            41.8236
        ],
        'columbia': [
            -81.0348,
            34.0007
        ],
        'sioux falls': [
            -96.7311,
            43.5446
        ],
        'nashville': [
            -86.7816,
            36.1627
        ],
        'houston': [
            -95.3698,
            29.7604
        ],
        'salt lake city': [
            -111.891,
            40.7608
        ],
        'montpelier': [
            -72.5754,
            44.2601
        ],
        'richmond': [
            -77.436,
            37.5407
        ],
        'seattle': [
            -122.3321,
            47.6062
        ],
        'charleston': [
            -81.6326,
            38.3498
        ],
        'milwaukee': [
            -87.9065,
            43.0389
        ],
        'cheyenne': [
            -104.8202,
            41.14
        ],
        'calgary': [
            -114.0719,
            51.0447
        ],
        'vancouver': [
            -123.1207,
            49.2827
        ],
        'winnipeg': [
            -97.1384,
            49.8951
        ],
        'moncton': [
            -64.7782,
            46.0878
        ],
        'st john\'s': [
            -52.7126,
            47.5615
        ],
        'halifax': [
            -63.5752,
            44.6488
        ],
        'toronto': [
            -79.347,
            43.651
        ],
        'charlottetown': [
            -63.1311,
            46.2382
        ],
        'montreal': [
            -73.5673,
            45.5017
        ],
        'regina': [
            -104.6189,
            50.4454
        ],
        'Beijing': [
            116.4074,
            39.9042
        ],
        'Hong Kong': [
            114.1694,
            22.3193
        ],
        'Delhi': [
            77.209,
            28.6139
        ],
        'Jakarta': [
            106.8456,
            -6.2088
        ],
        'Tel Aviv': [
            34.7818,
            32.0853
        ],
        'Tokyo': [
            139.6503,
            35.6762
        ],
        'Seoul': [
            126.978,
            37.5665
        ],
        'Kuala Lumpur': [
            101.6869,
            3.139
        ],
        'Karachi': [
            67.0011,
            24.8607
        ],
        'Manila': [
            120.9842,
            14.5995
        ],
        'Singapore': [
            103.8198,
            1.3521
        ],
        'Taipei': [
            121.5654,
            25.0329
        ],
        'Bangkok': [
            100.5018,
            13.7563
        ],
        'Istanbul': [
            28.9784,
            41.0082
        ],
        'Ho Chi Minh City': [
            106.6297,
            10.8231
        ],
        'Paris': [
            2.3522,
            48.8566
        ],
        'Berlin': [
            13.405,
            52.52
        ],
        'Rome': [
            12.4964,
            41.9028
        ],
        'Madrid': [
            -3.7038,
            40.4168
        ],
        'London': [
            -0.1278,
            51.5074
        ],
        'Cape Town': [
            18.4241,
            -33.9249
        ],
        'Lagos': [
            3.3792,
            6.5244
        ],
        'Cairo': [
            31.2357,
            30.0444
        ],
        'Nairobi': [
            36.8219,
            -1.2867
        ],
        'Sydney': [
            151.2093,
            -33.8688
        ],
        'Auckland': [
            174.7633,
            -36.8485
        ],
        'Suva': [
            178.4419,
            -18.1416
        ],
        'Buenos Aires': [
            -58.3816,
            -34.6037
        ],
        'S\u00e3o Paulo': [
            -46.6333,
            -23.5505
        ],
        'Santiago': [
            -70.6693,
            -33.4489
        ],
        'Bogot\u00e1': [
            -74.0721,
            4.711
        ],
        'Lima': [
            -77.0428,
            -12.0464
        ],
        'San Jos\u00e9': [
            -84.0907,
            9.9281
        ],
        'Panama City': [
            -79.5167,
            8.9833
        ],
        'Kingston': [
            -76.7936,
            17.997
        ],
        'San Juan': [
            -66.1057,
            18.4655
        ],
        'Riyadh': [
            46.6753,
            24.7136
        ],
        'Dubai': [
            55.296249,
            25.276987
        ],
        'Tehran': [
            51.389,
            35.6892
        ],
        'Baghdad': [
            44.3661,
            33.3152
        ],
        'Amman': [
            35.9106,
            31.9539
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    view = new ol.View({
        center: ol.proj.fromLonLat([-74.0060, 40.7128]), // Default to New York
        zoom: 4
    });

    map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: view
    });

    populateDropdown('continent-dropdown', data.continents);
    updateMap(); // Initial map load
});

function populateDropdown(id, options) {
    const dropdown = document.getElementById(id);
    dropdown.innerHTML = '';
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        dropdown.appendChild(opt);
    });
}

function updateCountries() {
    const continent = document.getElementById('continent-dropdown').value;
    populateDropdown('country-dropdown', data.countries[continent] || []);
    updateStates(); // Clear lower-level dropdowns
}

function updateStates() {
    const country = document.getElementById('country-dropdown').value;
    populateDropdown('state-dropdown', data.states[country] || []);
    updateCities(); // Clear lower-level dropdowns
}

function updateCities() {
    const state = document.getElementById('state-dropdown').value;
    populateDropdown('city-dropdown', data.cities[state] || []);
    updateMap(); // Clear lower-level dropdowns
}

function updateMap() {
    const city = document.getElementById('city-dropdown').value;
    const coords = data.coordinates[city];
    if (coords) {
        view.setCenter(ol.proj.fromLonLat(coords));
        view.setZoom(10); // Adjust zoom level as needed
    }
}
