import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './componants/Layout'
import Home from './componants/Home'
import Notfound from './componants/Notfound'
import MealDetails from './componants/MealDetails'

export default function App() {

  let routes = createBrowserRouter([{
    path:'/',element:<Layout></Layout>,children:[
      {path:'/', index:true, element:<Home></Home>},  // مسار الصفحة الرئيسية
      {path:'/mealdetails', element:<MealDetails></MealDetails>},  // مسار MealDetails
      {path:'*', element:<Notfound></Notfound>},  // مسار الصفحة الغير موجودة (Notfound)
    ]
  }])
  
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}