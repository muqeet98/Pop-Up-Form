import React from "react";
import HomePage from '../pages/HomePage/index';
import Step1 from '../pages/Step1/index';
import Step2 from '../pages/Step2/index';
import Step3 from '../pages/Step3/index'
const routes = [
    {
        path: '/',
        component: HomePage,
        exact: true
    },
    {
        path: '/step1',
        component: Step1,
        exact: true
    },
    {
        path: '/step2',
        component: Step2,
        exact: true
    },
    {
        path: '/step3',
        component: Step3,
        exact: true
    },

]
export default routes;