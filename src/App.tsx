import React from 'react';
import './App.css';
import Accordion from "./Components/Accordion/Accordion";
import Rating from "./Components/Rating/Rating";
import PageTitle from "./Components/PageTitle/PageTitle";
import OnOff from "./Components/OnOff/OnOff";
import UncontrolledAccordion from "./Components/UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledStar from "./Components/UncontrolledRating/Star/UncontrolledStar";
import UncontrolledRating from "./Components/UncontrolledRating/UncontrolledRating";

export type activeStateType = {
  active: boolean
}



function App() {
  console.log('App rendering');

  return (
    <div className="App">
      {/*<PageTitle title={'This is APP component'}/>*/}
      {/*<PageTitle title={'My friends'}/>*/}
      {/*<Accordion title={'Menu'} collapsed={false}/>*/}
      {/*<Accordion title={'Users'} collapsed={true}/>*/}
      <UncontrolledAccordion title={'tasks'}/>
      {/*<Rating value={0}/>*/}
      {/*<Rating value={1}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
      <UncontrolledRating />
      {/*<OnOff />*/}
      <OnOff />
    </div>
  )
}

export default App;
