// import Student from "./Student.jsx"

import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"

function App() {

   const fruits=[
        {id:1,name:"apple", calories:30},
        {id:2,name:"orange",calories:45},
        {id:3,name:"banana",calories:105},
        {id:4,name:"coconut",calories:159}]

   const vegetables=[
        {id:5,name:"potato", calories:95},
        {id:6,name:"brinjle",calories:45},
        {id:7,name:"little finger",calories:105},
        {id:8,name:"carrots",calories:159},
   ]

  return (
    <>
      {/* <Student name="Patrick" age={42} isStudent={false}/>
      <Student name="Squidward" age={50} isStudent={false}/>
      <Student name="James Bond" age={30} isStudent={false}/>
      <Student /> */}
      {/* <UserGreeting isLoggedIn={1} /> */}


    {fruits.length >0 ? <List items={fruits}/> : null}
    {vegetables.length >0 ? <List items={vegetables} category="vegetable"/> : null }
    </>
  )
}

export default App