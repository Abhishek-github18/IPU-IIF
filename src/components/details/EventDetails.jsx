import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../inc/Navbar/Navbar";
import Footer from "../inc/Footer/footer";
import "./EventDetails.css";
import axios from "axios";

const EventDetails = () => {
  const { id } = useParams();
  const [post, setpost] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(`https://ipu-iif.onrender.com/eventdetail/${id}`);
      // console.log(data.data);
      setpost(data.data);
    };
    fetchData();
    //eslint-disable-next-line
  }, []);
  return (
    <div className="headerFooter eventDivision ">
      <Navbar />
      <div className="container mt-5">
        <figure className="image-post-container">
        {/* eslint-disable-next-line */}
          <img src={post.image} alt="Event Image" />
        </figure>
        <div className="post-title mt-2">
          <p>{post.title}</p>
          <p>{post.date}</p>
        </div>
        <p>{post.content}</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          faucibus ultricies sollicitudin. Donec elementum ligula nec bibendum
          ultrices. Nullam vestibulum gravida erat. Nam lectus risus, imperdiet
          quis risus ut, egestas mattis metus. Donec malesuada ipsum augue, quis
          pulvinar nibh varius sed. Proin vehicula lorem eget mi vulputate
          tempor. Morbi nec dolor turpis. Duis ultrices semper lectus eu
          pellentesque. Mauris a risus sed erat venenatis ultrices. Phasellus
          sit amet lectus at ipsum consectetur egestas sed eget turpis. Donec
          ornare nisi vitae augue posuere, sed mattis quam elementum. Nullam
          pretium ex eget turpis varius, vel vehicula dui tincidunt. Nunc in
          orci ac dui vulputate congue. Vestibulum eget lacinia quam. Donec sit
          amet libero urna. Proin laoreet sem at porta porta. Phasellus ac odio
          ac quam placerat dapibus. Nunc fermentum dolor fermentum dolor mollis,
          sed imperdiet metus bibendum. Donec orci urna, aliquet nec
          sollicitudin ut, ullamcorper ut ipsum. Nunc venenatis leo et hendrerit
          hendrerit. Praesent eget ultricies nibh. Ut malesuada arcu in lorem
          luctus, a euismod metus semper. Cras a tincidunt massa. Nullam vel
          lacinia felis. Sed tellus ex, molestie ut purus at, bibendum laoreet
          ante. Suspendisse aliquet facilisis enim vitae consectetur.
          Suspendisse vel sagittis libero. Ut at dolor at justo iaculis feugiat.
          Morbi porta, quam quis sagittis hendrerit, neque velit cursus magna,
          nec cursus turpis augue sit amet dui. Duis posuere enim non diam
          elementum aliquam. Sed eleifend justo non nulla dapibus suscipit.
          Maecenas ut mattis dui. Donec pretium elementum est, id imperdiet erat
          maximus nec. Proin facilisis lectus quis purus ullamcorper
          scelerisque. Morbi facilisis eget ligula et tempus. In interdum neque
          et diam efficitur, ut consectetur lacus dapibus. Aenean maximus
          efficitur neque, sit amet viverra lorem iaculis non. Fusce lorem diam,
          commodo ut tincidunt in, viverra eu ipsum. Phasellus pulvinar ligula
          vitae pulvinar pharetra. Maecenas ultricies porttitor metus a
          eleifend. Nam consequat, eros ut posuere egestas, ligula risus
          fermentum lacus, sed tristique elit eros at nisl.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetails;
