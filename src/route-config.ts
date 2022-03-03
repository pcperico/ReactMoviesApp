import ActorsIndex from "./Components/Actors/ActorsIndex";
import CreateActor from "./Components/Actors/CreateActor";
import EditActor from "./Components/Actors/EditActor";
import CreateGender from "./Components/Genders/CreateGender";
import EditGender from "./Components/Genders/EditGender";
import GendersIndex from "./Components/Genders/GendersIndex";
import LandingPage from "./Components/LandingPage";
import CreateMovie from "./Components/Movies/CreateMovie";
import EditMovie from "./Components/Movies/EditMovie";
import MoviesFilter from "./Components/Movies/MoviesFilter";
import RedirectComponent from "./Components/RedirectComponent";

const routes =[    
    {path: '/genders/create',component: CreateGender},
    {path: '/genders/edit/:id(\\d+)',component: EditGender},
    {path: '/genders',component: GendersIndex,exact:true},

    {path: '/actors',component: ActorsIndex,exact:true},
    {path: '/actors/create',component: CreateActor},
    {path: '/actors/edit/:id(\\d+)',component: EditActor},

    {path: '/movies/filter',component: MoviesFilter},
    {path: '/movies/create',component: CreateMovie},
    {path: '/movies/edit/:id(\\d+)',component: EditMovie},

    /*Route for landing page  */
    {path: '/',component: LandingPage, exact:true},
    /*Route for not found pages, redirect to landing page */
    {path: '*',component: RedirectComponent},
];

export default routes;
