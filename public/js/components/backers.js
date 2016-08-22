const backers = [
  { "url": "https://twitter.com/shirleyxywu", "name": "Shirley Wu" },
  { "url": "https://twitter.com/jamescwaters", "name": "James Waters" },
  { "url": "http://elijahmeeks.com/", "name": "Elijah Meeks" },
  { "url": "http://www.d3noob.org/", "name": "d3noob" },
  { "url": "http://vasir.net", "name": "Erik Hazzard" },
  { "url": "http://blog.zanarmstrong.com/about/", "name": "Zan Armstrong" },
  { "url": "https://twitter.com/milr0c", "name": "Miles McCrocklin" },
  { "url": "https://twitter.com/trinary", "name": "Erik Cunningham" },
  { "url": "http://bl.ocks.org/saraquigley", "name": "Sara Quigley" },
  { "url": "http://owendall.com", "name": "Owen Dall" },
  { "url": "http://ramble.io", "name": "Dow Street" },
  { "url": "https://www.dashingd3js.com", "name": "Sebastian Gutierrez" },
  { "url": "http://encodingpixels.com", "name": "Andrew Thornton" },
  { "url": "http://postarchitectural.com", "name": "Sha Hwang" },
  { "url": "https://twitter.com/gelicia", "name": "Kristina" },
  { "url": "https://twitter.com/maxgoldst", "name": "Max Goldstein" },
  { "url": "https://twitter.com/ReneCNielsen", "name": "René Clausen Nielsen" },
  { "url": "https://twitter.com/N2InformaticsRN", "name": "Charles Boicey" },
  { "url": "http://www.mettihoof.be", "name": "Maarten Vanhoof" },
  { "url": "http://roadtolarissa.com", "name": "Adam Pearce" },
  { "url": "https://twitter.com/timelyportfolio", "name": "Kent Russell" },
  { "url": "http://jyri.codes", "name": "Jyri Tuulos" },
  { "url": "https://twitter.com/laneharrison", "name": "Lane Harrison" },
  { "url": "https://twitter.com/sjengle", "name": "Sophie Engle" },
  { "url": "http://Vallandingham.me", "name": "Jim Vallandingham" },
  { "url": "http://macwright.org/", "name": "Tom MacWright" },
  { "url": "https://uwba.org/Donate", "name": "nthitz" },
  { "url": "https://twitter.com/jinlongyang", "name": "Jinlong Yang" },
  { "url": "http://www.lonriesberg.com/", "name": "Lon Riesberg" },
  { "url": "http://www.brendansudol.com", "name": "Brendan Sudol" },
  { "url": "http://www.susielu.com", "name": "Susie Lu" },
  { "url": "https://twitter.com/samselikoff", "name": "Sam Selikoff" },
  { "url": "http://mfviz.com", "name": "Mike Freeman" },
  { "url": "https://twitter.com/jsundram", "name": "Jason Sundram" },
  { "url": "http://www.austgate.co.uk", "name": "Iain Emsley" },
  { "url": "http://www.noansknv.io", "name": "noansknv" },
  { "url": "https://twitter.com/d3visualization", "name": "Christophe Viau" },
  { "url": "https://github.com/gordonwoodhull", "name": "Gordon Woodhull" },
  { "url": "https://twitter.com/krsanford", "name": "Karl Sanford" },
  { "url": "http://yaniv.bz", "name": "Yaniv Ben-Zaken" },
  { "url": "https://twitter.com/BKilmartinIT", "name": "Brian Kilmartin" },
  { "url": "https://github.com/roundrobin", "name": "Nils Schlomann" },
  { "url": "http://tomvanantwerp.com", "name": "Tom VanAntwerp" },
  { "url": "http://jonsadka.com", "name": "Jon Sadka" },
  { "url": "https://openhatch.org/people/brylie/", "name": "Brylie Christopher Oxley" },
  { "url": "https://twitter.com/herrstucki", "name": "Jeremy Stucki" },
  { "url": "http://twitter.com/grssnbchr", "name": "Timo Grossenbacher" },
  { "url": "https://twitter.com/cherdarchuk", "name": "Joey Cherdarchuk" },
  { "url": "http://www.sketchflow.com/", "name": "paul van slembrouck" },
  { "url": "https://github.com/shobhitg", "name": "Shobhit Gupta" },
  { "url": "https://twitter.com/tonyrgarcia", "name": "Tony Garcia" },
  { "url": "http://twitter.com/blockspring", "name": "Paul Katsen" },
  { "url": "https://twitter.com/onfooty", "name": "Sarah Rudd" },
  { "url": "http://twitter.com/adambreckler", "name": "Adam Breckler" },
  { "url": "http://www.munafassaf.com", "name": "Munaf Assaf" },
  { "url": "http://bit.ly/15iIaY3", "name": "Douglass Turner" },
  { "url": "http://tarekrached.com/", "name": "Tarek Rached" },
  { "url": "https://twitter.com/ba6dotus", "name": "David Mann" },
  { "url": "http://fredbenenson.com/", "name": "Fred Benenson" },
  { "url": "https://twitter.com/SkiWether", "name": "Lynn Wetherell" },
  { "url": "https://twitter.com/jarthurthompson", "name": "John A Thompson" },
  { "url": "https://twitter.com/dcabo", "name": "David Cabo" },
  { "url": "https://www.apricot.com/~scanner", "name": "Scanner" },
  { "url": "http://johnguerra.co", "name": "John Alexis Guerra Gomez" },
  { "url": "http://twitter.com/tonyhschu", "name": "Tony Chu" },
  { "url": "http://twitter.com/bdon", "name": "Brandon Liu" },
  { "url": "http://ninjapixel.io/", "name": "ninjaPixel" },
  { "url": "http://fengshuo.co/", "name": "fengshuo" },
  { "url": "http://economistry.com/", "name": "Jonathan Page" },
  { "url": "http://kbroman.org", "name": "Karl Broman" },
  { "url": "http://mahir.nyc", "name": "Mahir Yavuz" },
  { "url": "http://twitter.com/arrayjam", "name": "Yuri Feldman" },
  { "url": "http://matthieu-martin.com", "name": "Matthieu Martin" },
  { "url": "https://www.facebook.com/draco.paganin", "name": "Enrico Paganin" },
  { "url": "https://twitter.com/Curt_Mitch", "name": "Curtis Mitchell" },
  { "url": "http://twitter.com/georgelmurphy", "name": "George Murphy" },
  { "url": "http://twitter.com/francoisromain", "name": "François Romain" },
  { "url": "http://dcochran.com", "name": "Danny Cochran" },
  { "url": "https://es.linkedin.com/pub/ignacio-campo/25/4b2/b4", "name": "Ignacio Campo" },
  { "url": "https://twitter.com/fabian_dubois", "name": "Fabian Dubois" },
  { "url": "http://www.michael-groncki.com", "name": "Michael Groncki" },
  { "url": "http://phillipadsmith.com/", "name": "Phillip Smith" },
  { "url": "https://www.quora.com/Yassine-Alouini", "name": "Yassine Alouini" },
  { "url": "https://twitter.com/storesyntax", "name": "Geo Miller" },
  { "url": "https://twitter.com/alinelernerLLC", "name": "Aline Lerner" },
  { "url": "https://twitter.com/Claud_Alexander", "name": "Claud Alexander" },
  { "url": "https://twitter.com/jofu_", "name": "Johanna Fulda" },
  { "url": "http://bl.ocks.org/syntagmatic", "name": "Kai Chang" },
  { "url": "http://visualoop.com/geoffmcghee", "name": "Geoff McGhee" },
  { "url": "https://www.linkedin.com/pub/ariel-azoulay/38/615/560", "name": "Ariel Azoulay" }
];

export default backers;
