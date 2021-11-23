import { Container } from '@material-ui/core';
import { useEffect, useState } from 'react';
import AdMediaCard, { Advert } from './components/AdMediaCard';
import Header from './components/Header';

function App() {
  const [ data, setData ] = useState([]);

  const getData = () => {
    fetch('data.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response) {
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
    <Container>
      <Header title="Liquidity Ads" />
      <div style={{display:'flex', flexWrap: 'wrap'}}>
        {
          data && data.length > 0 &&
          data.map((ad: Advert) => <div style={{margin:'5px 9px'}}><AdMediaCard key={ad.compactLease} ad={ad}></AdMediaCard></div>)
        }
      </div>
    </Container>

    </>
  );
}

export default App;
