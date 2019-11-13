import Home from './pages/Home/HomePage';
import Modeler from './pages/Modeler/ModelerPage';
import Framework from './pages/Frameworks/FrameworksPage';


const Routes = [
    {
        path: '/',
        name: 'Home',
        component : Home,
        isExact: true
    },
    {
        path: '/modeler',
        name: 'Modeler',
        component : Modeler,
        isExact: false
    },
    {
        path: '/frameworks',
        name: 'Frameworks',
        component : Framework,
        isExact: true
    }
];

export default Routes;