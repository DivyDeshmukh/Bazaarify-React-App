import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import FormLayout from './Components/Form/FormLayout.jsx';
import Step1 from './Components/Form/formFields/Step1/Step1.jsx';
import { FormProvider } from './Contexts/FormContext.js';
import useStep1 from './Components/Form/formFields/Step1/useStep1.js';
// import Home from './Components/Content/contentFields/Home.jsx';
// import About from './Components/Content/contentFields/About.jsx';
// import Contact from './Components/Content/contentFields/Contact.jsx';
// import ContentLayout from './Components/Content/ContentLayout.jsx';
import Step2 from './Components/Form/formFields/Step2/Step2.jsx';
import useStep2 from './Components/Form/formFields/Step2/useStep2.js';
import useStep3 from './Components/Form/formFields/Step3/useStep3.js';
import Step3 from './Components/Form/formFields/Step3/Step3.jsx';
import Step4 from './Components/Form/formFields/Step4/Step4.jsx';
import useStep4 from './Components/Form/formFields/Step4/useStep4.js';
import Step5 from './Components/Form/formFields/Step5/Step5.jsx';
import useStep5 from './Components/Form/formFields/Step5/useStep5.js';
import useStep6 from './Components/Form/formFields/Step6/useStep6.js';
import Step6 from './Components/Form/formFields/Step6/Step6.jsx'
import Error from './Components/Error/Error.jsx'
import Login from './Components/Login/Login.jsx';

import { Provider, useSelector } from 'react-redux';
import Home from './Components/Content/Home.jsx';
import Cart from './Components/Content/Cart';
import Products from './Components/Content/Products';
import Details from './Components/Content/Details';
import Mens from './Components/Content/Mens';
import Womens, { womensProdLoader } from './Components/Content/Womens';
import Electronics from './Components/Content/Electronics';
import Jewelery from './Components/Content/Jewelery';
import { productInfoLoader } from './Components/Content/Products';
import { mensProdLoader } from './Components/Content/Mens';
import { electronicsProdLoader } from './Components/Content/Electronics';
import { jeweleryProdLoader } from './Components/Content/Jewelery';
import Buy from './Components/Content/Buy';
import Payment from './Components/Content/Payment';
import User from './Components/User/User.jsx';
import Edit from './Components/User/Edit.jsx';
import store from './app/store.js';
import SaveData from './Components/localStorage.js';

const router = createBrowserRouter(
  createRoutesFromElements ([

    <Route path='/' element={<App />} />,
    
    <Route path='/login' element={<Login />} />,

    <Route path='/registration' element={<FormLayout />} >
      <Route path='step1' element={<Step1 />} />
      <Route path='step2' element={<Step2 />} />
      <Route path='step3' element={<Step3 />} />
      <Route path='step4' element={<Step4 />} />
      <Route path='step5' element={<Step5 />} />
      <Route path='step6' element={<Step6 />} />
      <Route path='*' element={<Error />} />
    </Route>,

    // <Route path='content' element={<ContentLayout />}>
    //   <Route path='home' element={<Home />} />
    //   <Route path='about' element={<About />} />
    //   <Route path='contact' element={<Contact />} />
    //   <Route path='*' element={<Error />} />
    // </Route>

    <Route path='/content' element={<Home />}>
      <Route path='all'
      loader={productInfoLoader}
      element={<Products />} />
      <Route path='mens'
      loader={mensProdLoader}
      element={<Mens />} />
      <Route path='womens'
      loader={womensProdLoader}
      element={<Womens />} />
      <Route path='electronics'
      loader={electronicsProdLoader}
      element={<Electronics />} />
      <Route path='jewelery' 
      loader={jeweleryProdLoader}
      element={<Jewelery />} />
       {/* Relative route path under "/content" */}
      <Route path='details/:id' element={<Details />} />
      <Route path='cart' element={<Cart />} />
      <Route path='buy' element={<Buy />} />
      <Route path='payment' element={<Payment />} />
      <Route path='user/:username' element={<User />} />
      <Route path=':edit' element={<Edit />} />
      <Route path='*' element={<Error />} />
    </Route>,

  ])
);

function Main () {

  const step1 = useStep1();
  const step2 = useStep2();
  const step3 = useStep3();
  const step4 = useStep4();
  const step5 = useStep5();
  const step6 = useStep6();

  let [usersData, setUsersData] = useState({});
  let [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem('usersData');
    if (storedData !== null) {
      setUsersData(JSON.parse(storedData));
    }
    
  }, []);

  return (
    <React.StrictMode>
      <FormProvider value={{step1, step2, step3, step4, step5, step6, usersData, setUsersData, currentUser, setCurrentUser}} >
        <Provider store={store}>
          <main className='h-auto overflow-x-hidden w-screen bg-slate-900 '>
            <RouterProvider router={router} />
          </main>
        </Provider>
      </FormProvider>
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
);

