import React from 'react'
import Header from './Header';
import { Outlet, useParams } from 'react-router-dom';
import Categories from './Categories';

function Home() {
  const { username } = useParams();
  const { edit } = useParams();
  // let pathParts;
  // let lastName;
  // console.log(path);

  // if (path) {
  //   console.log(path);
  //   pathParts = path.split('/');
  //   lastName = pathParts[pathParts.length - 1];
  //   console.log(lastName);
  // }

  return (
    <>
      <Header />
      <div id="content" className='flex flex-col w-screen min-h-[91.5vh] bg-slate-100 justify-start items-center gap-6 pb-16 overflow-x-hidden'>
        
        {
          (!(username || edit) ) &&
          <Categories />
        }
        <Outlet />
      </div>
    </>
  )
}

export default Home;

/*

When you modify an object in memory, such as updating the age property with storedData.user1.age = 31, it only changes the object in your current session. If you want these changes to persist across page reloads or even in different sessions, you need to update the object in localStorage manually.

In other words, changes made to storedData in your JavaScript code won't automatically persist in localStorage. You need to explicitly update localStorage using localStorage.setItem() to reflect the modified object.
*/

/*

In React Router, you can identify parameters in the route by defining them using a colon (:) followed by the parameter name in the route path. Then, you can use the useParams hook to extract and access those parameters in your components.
The useParams hook in React Router provides an object that contains all the URL parameters declared in your route. Each parameter is a key-value pair in the object.

// 
        If the Home component is rendering under different routes, and you want to extract parameters from different parts of the path for different routes, you should structure your routes accordingly. The useParams hook is specific to the route it is used in, so you should adapt the usage based on the route structure.
*/
