import Project from "./pages/Project"
import Materials from "./pages/Materials"
import Typesofwork from "./pages/Typesofwork"
import Premises from "./pages/Premises"
import Stages from "./pages/Stages"
import {
     PROJECT_ROUTE,
     MATERIALS_ROUTE,
     TYPESOFWORK_ROUTE,
     PREMISES_ROUTE,
     STAGES_ROUTE } from '../src/utils/consts.js'


// export const authRoutes = [
//     {
//         path: ADMIN_ROUTE,
//         Component: Admin
//     },
//     {
//         path: USERLIST_ROUTE,
//         Component: UserList
//     },
//     {
//         path: PROJECT_ROUTE,
//         Component: Project
//     },
//     {
//         path: STATISTICS_ROUTE,
//         Component: Statistics
//     }

// ]
export const publicRoutes = [
    {
        path: PROJECT_ROUTE,
        Component: Project
    },
    {
        path: MATERIALS_ROUTE,
        Component: Materials
    },
    {
        path: TYPESOFWORK_ROUTE,
        Component: Typesofwork
    },
    {
        path: PREMISES_ROUTE,
        Component: Premises
    },
    {
        path: STAGES_ROUTE,
        Component: Stages
    }

]