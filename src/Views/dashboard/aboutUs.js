import React from "react";
// img
import HomeNavbar from "../../Components/navbar/HomeNavbar";
import Footer from "../../Components/Footer/Footer";
import About1 from "../../Components/Img/About PartyPop.png";
import About2 from "../../Components/Img/Our Mission.png";
import About3 from "../../Components/Img/JoinParty.png";
import About4 from "../../Components/Img/What We Offer.png";
import About5 from "../../Components/Img/MEET THE TEAM.png";
import Angel from "../../Components/Img/angel.jpg";
import Farid from "../../Components/Img/farid.jpg";
import Pire from "../../Components/Img/pire.jpg";
import sadewa from "../../Components/Img/sadewa.jpg";
import Adam from "../../Components/Img/adam.jpg";

const AboutUs = () => {
  return (
    <>
      <HomeNavbar />
      <div
        className="card-body"
        style={{
          width: "200px",
          height: "75px",
          justifyContent: "center",
          backgroundColor: "#A982BF",
          marginTop: "30px",
        }}
      >
        <div>
          <img src={About1} style={{ width: "200px" }}></img>
        </div>
      </div>
      <div style={{ padding: "50px", paddingTop: "30px" }}>
        <p>
          PartyPop is a leading online platform dedicated to helping event
          organizers create unforgettable experiences. With a passion for
          celebrations and a commitment to excellence, we strive to make event
          planning easier, more efficient, and more enjoyable for both
          professionals and individuals.
        </p>
      </div>

      <div style={{ display: "flex", justifyContent: "right" }}>
        <div>
          <div
            className="card-body"
            style={{
              width: "200px",
              height: "75px",
              justifyContent: "center",
              backgroundColor: "#A982BF",
              marginTop: "30px",
            }}
          >
            <div>
              <img src={About2} style={{ width: "200px" }}></img>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "50px", paddingTop: "30px" }}>
        <p>
          At PartyPop, our mission is to connect event organizers with the
          resources, tools, and inspiration they need to bring their visions to
          life. We believe that every event, whether it's a birthday party,
          wedding, corporate gathering, or charity event, deserves to be
          exceptional. We're here to empower event planners, making their jobs
          more streamlined and enabling them to deliver truly extraordinary
          moments.
        </p>
      </div>

      <div
        className="card-body"
        style={{
          width: "200px",
          height: "75px",
          justifyContent: "center",
          backgroundColor: "#A982BF",
          marginTop: "30px",
        }}
      >
        <div>
          <img src={About4} style={{ width: "200px" }}></img>
        </div>
      </div>
      <div style={{ padding: "50px", paddingTop: "30px" }}>
        <p>
          As a comprehensive event organizing platform, PartyPop offers a wide
          range of features and services:
        </p>
        <br />
        <p>
          <b style={{ color: "orange" }}>Vendor Directory</b> : Discover a vast
          network of trusted vendors and suppliers, including caterers,
          photographers, entertainers, venues, and more. Find the perfect match
          for your event needs and read reviews from previous clients to make
          informed decisions.
        </p>
        <br />
        <p>
          <b style={{ color: "orange" }}>Planning Tools </b> : Take advantage of
          our intuitive planning tools, from budget calculators and guest list
          managers to event timelines and seating arrangement templates. Stay
          organized, track progress, and ensure nothing is overlooked during the
          planning process.
        </p>
        <br />
        <p>
          <b style={{ color: "orange" }}>Inspiration and Ideas </b> : Get
          inspired with our extensive collection of event themes, decoration
          ideas, entertainment suggestions, and unique concepts. Stay up-to-date
          with the latest trends and discover innovative ways to make your event
          stand out.
        </p>
        <br />
        <p>
          <b style={{ color: "orange" }}>Community and Support </b> : Connect
          with a vibrant community of fellow event organizers, share tips, seek
          advice, and exchange ideas. Our dedicated support team is also
          available to assist you every step of the way, providing guidance and
          answering any questions you may have.
        </p>

        <p>
          Whether you're a professional event planner or simply organizing a
          special occasion, PartyPop is your go-to resource for all things
          event-related. Sign up today and unlock a world of possibilities,
          making your event planning journey a breeze.
        </p>
        <div style={{ padding: "50px", paddingTop: "30px", height: "100px" }}>
          <img src={About3}></img>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <div>
          <div
            className="card-body"
            style={{
              width: "200px",
              height: "75px",
              justifyContent: "center",
              backgroundColor: "#A982BF",
              marginTop: "30px",
            }}
          >
            <div>
              <img src={About5} style={{ width: "200px" }}></img>
            </div>
          </div>
        </div>
      </div>

      <div style={{ padding: "50px", paddingTop: "30px", textAlign: "right" }}>
        <p>
          <b>
            Our team always believes in and truly loves what we do for our
            clients.
          </b>
        </p>
        <br />
        <p>
          <b>
            Our togetherness has resulted in the synergy you need for your
            event.
          </b>
        </p>
      </div>

      <div style={{ display: "flex" }}>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Angel} alt="Shoes"></img>
          </figure>
          <div className="card-body" style={{textAlign:'center'}}>
            <p>Angelina Patience M.</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Pire} alt="Shoes"></img>
          </figure>
          <div className="card-body" style={{textAlign:'center'}}>
            <p>Pirelli Rahelya P</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Adam} alt="Shoes"></img>
          </figure>
          <div className="card-body" style={{textAlign:'center'}}>
            <p>Adam Fawazzaky Fardy A.</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={Farid} alt="Shoes"></img>
          </figure>
          <div className="card-body" style={{textAlign:'center'}}>
            <p>Muhammad Faridz A.</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={sadewa} alt="Shoes"></img>
          </figure>
          <div className="card-body" style={{textAlign:'center'}}>
            <p>Filipus Junio S.</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default AboutUs;
