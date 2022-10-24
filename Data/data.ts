// Series data

class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    banner: string;

    constructor(id: number, name: string, channel: string, seasons: number, description: string, link: string, banner: string) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.banner = banner;
    }

}

const series = [
    new Serie (1,"Breaking Bad","AMC", 5,"Set and filmed in Albuquerque, New Mexico, the series tells the story of Walter White, a struggling and depressed high school chemistry teacher who is diagnosed with lung cancer" ,
    "https://www.amc.com/shows/breaking-bad","/Assets/Breaking-bad.jpg") ,
    
    new Serie (2,"Orange Is the New Black", "Netflix", 6, "The series begins revolving around Piper Chapman, a woman in her thirties living in New York City who is sentenced to 15 months in Litchfield Penitentiary", 
    "https://www.netflix.com/co/title/70242311","/Assets/Orange-is-the-new-black.jpg"),
    
    new Serie (3, "Game of Thrones","HBO", 7, "In the mythical continent of Westeros, nine families of higher nobility (Targaryen, Lannisters, Starks, Tyrell, Martell, Greyjoys, Baratheons and Boltons) scramble bitterly to gain power over the seven kingdoms and the Iron throne.",
        "https://www.hbo.com/game-of-thrones",
        "/Assets/Game-of-thrones.jpg"),

    new Serie (4, "The Big Bang Theory", "CBS", 12, "Leonard and Sheldon are brilliant physicists—geniuses in the laboratory but socially challenged everywhere else. Enter beautiful, street-smart neighbor Penny, who aims to teach them a thing or two about life.",
        "https://www.cbs.com/shows/big_bang_theory/about/", "/Assets/The-big-bang-theory.jpg"),
    
    new Serie (5, "Sherlock", "BBC",  4, "Sherlock depicts consulting detective Sherlock Holmes (Benedict Cumberbatch) solving various mysteries in modern-day London. Holmes is assisted by his flatmate and friend, Dr John Watson (Martin Freeman).",
        "https://www.bbc.co.uk/programmes/b018ttws", "/Assets/Sherlock.jpg"),

    new Serie (6, "A Very English Scandal", "BBC", 2, "A Very English Scandal is a fact-based three-part British television comedy-drama miniseries based on John Preston's book of the same name.",
        "https://www.bbc.co.uk/programmes/p065smy4", "/Assets/A-very-english-scandal.jpg"),
];

let average = 0;
for (let i = 0; i<series.length; i++){
    average += series[i].seasons;
}
average = average/series.length;

// Insert caption on table

let captiontext = "Seasons average: " + average;
let caption = document.createTextNode(captiontext);
let captionelement = document.getElementById("tablecaption");
captionelement?.appendChild(caption);

// Add series to the DOM tbody

let tbody = document.getElementById("seriestable")?.querySelector("tbody");

for (let i=0; i<series.length; i++) {
    let serie = series[i];
    let row = document.createElement("tr");
    let th = document.createElement("th");
    th.setAttribute("scope", "row");
    th.innerHTML = serie.id.toString();
    row.appendChild(th);
    let tdname = document.createElement("td");
    tdname.innerHTML = createNameText(serie);
    row.appendChild(tdname);
    let tdchannel = document.createElement("td");
    tdchannel.innerHTML = serie.channel;
    row.appendChild(tdchannel);
    let tdseasons = document.createElement("td");
    tdseasons.innerHTML = serie.seasons.toString();
    row.appendChild(tdseasons);
    tbody?.appendChild(row);
}
// Card information and change

let card = document.getElementById("cardblock");
let cardimg = card?.querySelector("img"); // Will be used
let cardbody = card?.querySelector(".card-body");
let cardtitle = cardbody?.querySelector("#title"); // Will be used
let cardtext = cardbody?.querySelector("#text"); // Will be used
let cardlink = cardbody?.querySelector("#link"); // Will be used

function setCardData(id: number) {
    setCardEmptyData();
    let serie = series[id-1];
    cardimg?.setAttribute("src", serie.banner);
    cardimg?.setAttribute("alt", serie.name);
    let name = document.createTextNode(serie.name);
    cardtitle?.appendChild(name);
    let text = document.createTextNode(serie.description);
    cardtext?.appendChild(text);
    cardlink?.setAttribute("href", serie.link);
}

function setCardEmptyData() {
    cardimg?.setAttribute("src", "");
    cardimg?.setAttribute("alt", "");
    if (cardtitle != null) {
        cardtitle.innerHTML = "";
    }
    if (cardtext != null) {
        cardtext.innerHTML = "";
    }
    cardlink?.setAttribute("href", "");
}

// Set card data to index 1 by default
setCardData(1);

// Function to create name with onclick action

function createNameText(serie: Serie) {
    let namebody = document.createElement("a");
    namebody.setAttribute("href", "#");
    namebody.setAttribute("onclick", "setCardData("+serie.id+")");
    let nametext = document.createTextNode(serie.name);
    namebody.appendChild(nametext);
    return namebody.outerHTML;
}