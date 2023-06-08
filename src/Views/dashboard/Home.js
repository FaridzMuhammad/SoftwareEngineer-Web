import React from 'react';
import HomeNavbar from '../../Components/Navbar/HomeNavbar';
import { Button } from 'antd';
import HomeDashboard1 from '../../Components/Img/HomeDahboard1.png';
import HomeDashboard2 from '../../Components/Img/HomeDashboard2.png';
import HomeDashboard3 from '../../Components/Img/HomeDashboard3.png';
import OurProject from '../../Components/Img/OUR PROJECTS.png';
import ProjectDone from '../../Components/Img/PROJECTS DONE.png';
import Vendors from '../../Components/Img/VENDORS.png';
import Brands from '../../Components/Img/BRANDS.png';
import BrandsNum from '../../Components/Img/131.png';
import VendorsNum from '../../Components/Img/96.png';
import ProjectNum from '../../Components/Img/204+.png';
import Footer from '../../Components/Footer/Footer';


const Home = () => {
    return (
        <>
            <HomeNavbar />
            <div style={{ marginTop: '40px' }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={HomeDashboard1} style={{ width: "100%" }}></img>
                    <img src={HomeDashboard2} style={{ width: "100%" }}></img>
                    <img src={HomeDashboard3} style={{ width: "100%" }}></img>
                </div>
                <div className='card-body' style={{ width: '200px', height: '75px', justifyContent: 'center', backgroundColor: '#A982BF', marginTop: '30px' }}>
                    <div>
                        <h3 className='card-title'>Why PartyPOP</h3>
                    </div>
                </div>
                <div style={{ padding: '50px', paddingTop: '30px', textAlign: 'center' }}>
                    <p>
                        PartyPop Event Organizer merupakan jasa event organizer (EO) terbaik di Malang sesuai dengan kebutuhan anda. Sebagai perusahaan dengan legalitas dan profesionalitas
                        dalam menyelenggarakan bermacam event indoor atau outdoor sejak 2015, banyak event seperti birthday, sweet seventeen, tingjing, wedding, engagement, dan lain
                        sebagainya yang dirancang dengan yang istimewa dan menarik.
                    </p>
                    <p>
                        Seluruh team event organizer (EO) PartyPop siap memberikan konsep kegiatan sesuai dengan kebutuhan klien serta membuka dialog/diskusi untuk bertukar ide dan
                        konsep kegiatan yang akan diselenggarakan nantinya. Cukup banyak client yang sudah mempercayakan event gathering, launching, wedding, birthday sesuai dengan
                        visi kami sebagai EO Malang yang handal.
                    </p>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "50px" }}>
                    <hr style={{ width: '45%', height: '1px', backgroundColor: '#A982BF', marginRight: '20px' }}></hr>
                    <img src={OurProject} style={{ width: "15%" }}></img>
                    <hr style={{ width: '45%', height: '1px', backgroundColor: '#A982BF', marginLeft: '20px' }}></hr>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"space-between" }}>
                        <img src={BrandsNum} style={{ width: "50%" }}></img>
                        <img src={Brands} style={{ width: "50%" }}></img>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"space-between" }}>
                        <img src={ProjectNum} style={{ width: "50%" }}></img>
                        <img src={ProjectDone} style={{ width: "50%" }}></img>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent:"space-between" }}>
                        <img src={VendorsNum} style={{ width: "50%" }}></img>
                        <img src={Vendors} style={{ width: "50%" }}></img>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
};

export default Home;

