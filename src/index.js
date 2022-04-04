import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import reducer from './reducers';
import App from './routes/App';
//import Header from './components/Header';
//import Footer from './components/Footer';
const initialState = {
        "user": {},
        "playing": {},
        "mylist": [],
        "trends": [
            {
              "id": 2,
              "slug": "tvshow-2",
              "title": "The Batman",
              "type": "Crime, SuperHero",
              "language": "English",
              "year": 2022,
              "contentRating": "13+",
              "duration": 176,
              "cover": "https://as01.epimg.net/meristation/imagenes/2022/01/27/noticias/1643266354_692817_1643266442_sumario_normal.jpg",
              "description": "Bruce Wayne wants to make the difference...",
              "source": "https://www.youtube.com/embed/-FZ-pPFAjYY"
            },
            {
              "id": 3,
              "slug": "tvshow-3",
              "title": "Inception",
              "type": "Drama, science fiction",
              "language": "English",
              "year": 2010,
              "contentRating": "13+",
              "duration": 148,
              "cover": "https://m.media-amazon.com/images/I/912AErFSBHL._SY550_.jpg",
              "description": "Plant an idea, using the dreams...",
              "source": "https://www.youtube.com/embed/YoHD9XEInc0"
            },
            {
              "id": 4,
              "slug": "tvshow-4",
              "title": "Django Unchained",
              "type": "Dramatic western",
              "language": "English",
              "year": 2012,
              "contentRating": "18+",
              "duration": 170,
              "cover": "https://m.media-amazon.com/images/I/81Z+lBcAYWL._SY445_.jpg",
              "description": "Django takes revenge against slavers...",
              "source": "https://www.youtube.com/embed/0fUCuvNlOCg"
            },
            {
              "id": 5,
              "slug": "tvshow-5",
              "title": "Spider-Man: No Way Home",
              "type": "SuperHero",
              "language": "English",
              "year": 2021,
              "contentRating": "13+",
              "duration": 148,
              "cover": "https://es.web.img2.acsta.net/pictures/21/12/01/12/07/0243323.jpg",
              "description": "The Three spidermans on a movie, OMG...",
              "source": "https://www.youtube.com/embed/JfVOs4VSpmA"
            },
            {
              "id": 6,
              "slug": "tvshow-6",
              "title": "1917",
              "type": "War, drama",
              "language": "English",
              "year": 2019,
              "contentRating": "16+",
              "duration": 119,
              "cover": "https://m.media-amazon.com/images/I/71lDHpvrXRL._SL1500_.jpg",
              "description": "Two british soldiers during the great war...",
              "source": "https://www.youtube.com/embed/SBc69RKIqwg"
            },
            {
              "id": 7,
              "slug": "tvshow-7",
              "title": "Morbius",
              "type": "Comedy",
              "language": "English",
              "year": 2022,
              "contentRating": "16+",
              "duration": 104,
              "cover": "https://sirahmaja.com/wp-content/uploads/2022/01/Cover-Morbius-2022.png",
              "description": "Just kidding :v",
              "source": "https://www.youtube.com/embed/hxMariVQnHM"
            }
          ],
          "originals": [
            {
              "id": 8,
              "slug": "tvshow-8",
              "title": "The Shawshank Redemption",
              "type": "Drama",
              "language": "English",
              "year": 1994,
              "contentRating": "18+",
              "duration": 142,
              "cover": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
              "description": "Unjustly imprisoned, he seeks his freedom...",
              "source": "https://www.youtube.com/embed/6hB3S9bIaco"
            },
            {
              "id": 9,
              "slug": "tvshow-9",
              "title": "The Goodfather",
              "type": "Crime, Drama",
              "language": "English",
              "year": 1972,
              "contentRating": "18+",
              "duration": 177,
              "cover": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
              "description": "One family envolved in crime...",
              "source": "https://www.youtube.com/embed/sY1S34973zA"
            },
            {
              "id": 10,
              "slug": "tvshow-10",
              "title": "The Good, the Bad and the Ugly",
              "type": "Spaghetti western",
              "language": "English, Spanish, Italian",
              "year": 1966,
              "contentRating": "18+",
              "duration": 178,
              "cover": "https://m.media-amazon.com/images/I/81keqIN-tlL._AC_SY445_.jpg",
              "description": "Three western guys looking a treasure...",
              "source": "https://www.youtube.com/embed/WCN5JJY_wiA"
            },
            {
              "id": 11,
              "slug": "tvshow-11",
              "title": "City of God",
              "type": "Action, Crime",
              "language": "Portuguese",
              "year": 2002,
              "contentRating": "18+",
              "duration": 130,
              "cover": "https://m.media-amazon.com/images/I/51QXBFP777L.jpg",
              "description": "Crime surronuds a Favela in Rio de Janeiro... ",
              "source": "https://www.youtube.com/embed/JYKs35P2fZw"
            },
            {
              "id": 12,
              "slug": "tvshow-12",
              "title": "La vita è bella ",
              "type": "Drama",
              "language": "Italian",
              "year": 1997,
              "contentRating": "12+",
              "duration": 116,
              "cover": "https://m.media-amazon.com/images/I/51Mh6JNNGFL._SX355_.jpg",
              "description": "The best parents during the Holocaust...",
              "source": "https://www.youtube.com/embed/pAYEQP8gx3w"
            },
            {
              "id": 13,
              "slug": "tvshow-13",
              "title": "The Matrix",
              "type": "Action, science fiction",
              "language": "English",
              "year": 1999,
              "contentRating": "16+",
              "duration": 136,
              "cover": "https://m.media-amazon.com/images/I/71PfZFFz9yL._AC_SL1000_.jpg",
              "description": "Humans fighting against machines new order ...",
              "source": "https://www.youtube.com/embed/vKQi3bBA1y8"
            }
          ]
      
}
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                      || compose ;
const store = createStore(reducer, initialState, composeEnhacers());
ReactDOM.render(
    <Provider store={store}>
        <App>
        </App>
    </Provider>
, document.getElementById('app'));