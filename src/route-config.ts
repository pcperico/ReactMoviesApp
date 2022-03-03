import GendersIndex from "./Components/GendersIndex";
import LandingPage from "./Components/LandingPage";

const routes =[
    {path: '/genders',component: GendersIndex},
    {path: '/',component: LandingPage, exact:true}
];

export default routes;
