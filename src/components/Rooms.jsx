// components/Rooms.js
import React from "react";

export default function Rooms() {
  const rooms = [
    { name: "Suite Deluxe", price: "€189" ,image: "/g1.jfif" 
},
    { name: "Chambre Standard", price: "€129" ,image: "/g2.jfif" },
    { name: "Suite Familiale", price: "€249" ,image:"/g3.jfif"},
  ];

  return (
  <section className="rooms">
    <h2>Nos Chambres</h2>

    <div className="grid">
      {rooms.map((room, i) => (
        <div key={i} className="card">

          <img 
            src={room.image} 
            alt={room.name}
            className="room-img"
          />

          <h3>{room.name}</h3>
          <p>{room.price} / nuit</p>
          <button className="btn">Réserver</button>
        </div>
      ))}
    </div>
  </section>
);
}