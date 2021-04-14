import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
                <div className='home_row'>
                    <Product id='123456' title='A Thousand Splendid Suns BY Hosseini, Khaled ( Author )' price={10.44} image='https://images-na.ssl-images-amazon.com/images/I/81DFcrQgjrL.jpg' rating={5}/>
                    <Product id='098765' title='Murder on the Orient Express: A Hercule Poirot Mystery (Hercule Poirot Mysteries, 10)' price={12.95} image='https://images-na.ssl-images-amazon.com/images/I/51Zy+Up9D9L._SX326_BO1,204,203,200_.jpg' rating={5}/>
                </div>
                <div className='home_row'>
                    <Product id='345678' title='Apple iPhone XR, 64GB, Coral - Fully Unlocked (Renewed)' price={374.99} image='https://m.media-amazon.com/images/I/41LRH4zy0fL._AC_.jpg' rating={5}/>
                    <Product id='789345' title='Samsung Galaxy S21 Ultra 5G | Factory Unlocked Android Cell Phone | US Version 5G Smartphone | Pro-Grade Camera, 8K Video, 108MP High Res | 128GB, Phantom Silver (SM-G998UZSAXAA)' price={999.99} image='https://images-na.ssl-images-amazon.com/images/I/61bLefD79-L._AC_SL1020_.jpg' rating={5}/>
                    <Product id='678934' title='OnePlus Nord N10 5G Unlocked Smartphone, Midnight Ice​, 90Hz Refresh Rate, 6GB RAM + 128GB storage, US Version, Model BE2026' price={279.99} image='https://images-na.ssl-images-amazon.com/images/I/61-L1c9vvmL._AC_SL1500_.jpg' rating={4}/>  
                </div>
                <div className='home_row'>
                    <Product id='987345' title='Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED Computer Monitor, 3840 x 1080p Resolution, 1ms Response, FreeSync 2 with HDR' price={1099.66} image='https://images-na.ssl-images-amazon.com/images/I/81e-YkieQ6L._AC_SL1500_.jpg' rating={5}/>
                </div>            
            </div>
            
        </div>
    )
}

export default Home
