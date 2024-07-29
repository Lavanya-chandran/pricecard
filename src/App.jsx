import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Card from './Card';

function App() {

  let pContent = ["Single User", "50GB Storage", "Unlimited Public Projects", "Community Access",
    "Unlimited Private Projects",  "Dedicated Phone Support", "Free Sub-domain", "Monthly Status Reports"];

  let cardDetails = [
    {
      planType : 'Free',
      planRate : 0,
      features : pContent.map((ele, index) => ({
        name: ele,
        enabled: index < 4 ? true : false
      }))
    },
    {
      planType : 'Plus',
      planRate : 9,
      features : pContent.map((ele, index) => ({
        name: ele,
        enabled: index === 7 ? false : true
      }))
    },
    {
      planType : 'Pro',
      planRate : 49,
      features : pContent.map((ele, index) => ({
        name: ele,
        enabled: true
      }))
    }
  ];
  
  return (
    <div className='container'>
      <h1 className='h1 text-capitalize text-center my-2 text-primary'>React Price Card Task</h1>
      <div className='row bg-primary my-2 pt-3 px-3 d-flex justify-content-center'>
        {
          cardDetails.map((card, index)=>{
            return <Card key={index} name={card} />
          })
        }
      </div>
    </div>
  );
}

export default App;
