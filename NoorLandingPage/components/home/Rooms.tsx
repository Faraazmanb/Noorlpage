import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../../index.module.css";
import {
  FaBed,
  FaBath,
  FaWifi,
  FaSnowflake,
  FaElevator,
  FaBellConcierge,
  FaShirt,
  FaNewspaper,
  FaTv,
  FaFire,
} from "react-icons/fa6";
import { FaParking } from "react-icons/fa";
import { MdCleaningServices, MdSmokeFree } from "react-icons/md";
import { GiHairStrands, GiWaterDrop, GiTeapot } from "react-icons/gi";

// Enhanced Room Data type with more details
interface RoomData {
  title: string;
  image: string;
  bathCount: number;
  bedCount: number;
  hasWifi: boolean;
  description: string;
  pricePerNight: number;
  featured?: boolean;
  amenities: string[];
  inclusions: string[];
}

// Map amenity names to icons
const amenityIcons: Record<string, JSX.Element> = {
  Fridge: <FaSnowflake />,
  Lift: <FaElevator />,
  "Wi-Fi": <FaWifi />,
  "Free Parking": <FaParking />,
  "24×7 Room Service": <FaBellConcierge />,
  "Laundry(PAID)": <FaShirt />,
  "Power Backup": <FaFire />,
  Newspaper: <FaNewspaper />,
  Housekeeping: <MdCleaningServices />,
  "Hair Conditioning": <GiHairStrands />,
  "Smoke Detector": <MdSmokeFree />,
  TV: <FaTv />,
  "Electric Kettle": <GiTeapot />,
  Toiletries: <GiWaterDrop />,
};

// Branch data
interface BranchData {
  name: string;
  phone: string;
  email: string;
}

const branches: BranchData[] = [
  {
    name: "Chennai Branch",
    phone: "7338944222",
    email: "booking@alnoorpalace.in",
  },
  {
    name: "Parrys Branch",
    phone: "7338955111",
    email: "booking@alnoorresidency.in",
  },
  {
    name: "Bangalore Branch",
    phone: "8951777883",
    email: "booking.blr@alnoorpalace.in",
  },
];

// Define common amenities and default rooms to prevent compilation errors
// This is just a placeholder since the commented code suggests these would be defined
const commonAmenities = [
  "Fridge",
  "Power Backup",
  "Free Parking",
  "Newspaper",
  "Wi-Fi",
  "Housekeeping",
];

const defaultRooms: RoomData[] = [
  {
    title: "Deluxe",
    image: "/Images/room-1 1.png",
    bathCount: 1,
    bedCount: 1,
    hasWifi: true,
    description:
      "Our cozy Deluxe room offers comfort and convenience for your stay.",
    pricePerNight: 2500,
    amenities: commonAmenities,
    inclusions: ["TV", "Electric Kettle", "Toiletries"],
  },
  {
    title: "Deluxe Triple ",
    image: "/Images/room-1 1.png",
    bathCount: 1,
    bedCount: 3,
    hasWifi: true,
    description: "Perfect for families or small groups.",
    pricePerNight: 3500,
    amenities: commonAmenities,
    inclusions: ["TV", "Electric Kettle", "Toiletries"],
  },
  {
    title: "Deluxe Quad",
    image: "/Images/room-1 1.png",
    bathCount: 1,
    bedCount: 4,
    hasWifi: true,
    description: "Our Deluxe Quad room provides ample space for four guests.",
    pricePerNight: 4000,
    amenities: commonAmenities,
    inclusions: ["TV", "Electric Kettle", "Toiletries"],
  },
  {
    title: "King Suite",
    image: "/Images/room-1 1.png",
    bathCount: 1,
    bedCount: 2,
    hasWifi: true,
    description: "Experience luxury in our King Suite.",
    pricePerNight: 4500,
    featured: true,
    amenities: commonAmenities,
    inclusions: ["TV", "Electric Kettle", "Toiletries"],
  },
  {
    title: "Residential Suite",
    image: "/Images/room-1 1.png",
    bathCount: 2,
    bedCount: 3,
    hasWifi: true,
    description:
      "Our premium Residential Suite offers home-away-from-home experience.",
    pricePerNight: 6000,
    featured: true,
    amenities: commonAmenities,
    inclusions: ["TV", "Electric Kettle", "Toiletries"],
  },
];

interface RoomsProps {
  rooms?: RoomData[];
  onBookNow?: (room: RoomData) => void;
}

const Rooms: React.FC<RoomsProps> = ({ rooms = defaultRooms, onBookNow }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<RoomData | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [displayCount, setDisplayCount] = useState(5); // Default to showing 5 rooms, adjust as needed

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Determine how many rooms to display based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1400) {
        setDisplayCount(5); // Show 5 rooms on very large screens
      } else if (width > 1200) {
        setDisplayCount(4); // Show 4 rooms on large screens
      } else if (width > 768) {
        setDisplayCount(3); // Show 3 rooms on medium screens
      } else {
        setDisplayCount(2); // Show 2 rooms on small screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Format price with comma separators
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Get amenity icon or default to text
  const getAmenityIcon = (amenity: string) => {
    return amenityIcons[amenity] || null;
  };

  // Handle view details button click
  const handleViewDetails = (index: number) => {
    if (flippedIndex === index) {
      setFlippedIndex(null);
    } else {
      setFlippedIndex(index);
    }
  };

  // Handle book now button click
  const handleBookNow = (room: RoomData) => {
    setSelectedRoom(room);
    setShowModal(true);

    // If an external onBookNow function is provided, call it
    if (onBookNow) {
      onBookNow(room);
    }
  };

  // Handle branch selection for booking
  const handleBranchSelection = (branchEmail: string) => {
    window.location.href = `mailto:${branchEmail}?subject=Booking for ${selectedRoom?.title} Room&body=Hello, I would like to book a ${selectedRoom?.title} room. Please provide availability and booking details.`;
    setShowModal(false);
  };

  // Slice rooms to display only the needed amount
  const visibleRooms = rooms.slice(0, displayCount);

  return (
    <section className={`${styles.roomsSection} fade-in-element`} id="rooms">
      <div className={styles.sectionHeader}>
        <Image
          className={styles.sectionDivider}
          width={51}
          height={2}
          alt=""
          src="/Icons/Line 4.svg"
        />
        <h2 className={styles.sectionTitle}>Our Luxury Rooms</h2>
        <Image
          className={styles.sectionDivider}
          width={51}
          height={2}
          alt=""
          src="/Icons/Line 3.svg"
        />
      </div>
      <h3 className={styles.subHeading}>
        <span>More than </span>
        <span className={styles.accentText}>75+ ROOMS</span>
        <span> available across 3 branches</span>
      </h3>

      <div className={styles.roomsGrid}>
        {visibleRooms.map((room, index) => (
          <div
            key={`room-${index}`}
            className={`${styles.flipCard} ${isLoading ? styles.shimmer : ""}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div
              className={`${styles.flipCardInner} ${
                flippedIndex === index ? styles.flipped : ""
              }`}
            >
              {/* FRONT */}
              <div className={styles.flipCardFront}>
                {room.featured && <div className={styles.ribbon}>Featured</div>}
                <Image
                  className={styles.roomImage}
                  src={room.image}
                  alt={room.title}
                  width={400}
                  height={180} // Reduced height
                  priority={index < 2}
                />
                <div className={styles.cardTitle}>
                  <h3>{room.title}</h3>
                  <p className={styles.cardPrice}>
                    ₹{formatPrice(room.pricePerNight)}
                  </p>
                </div>
                <div className={styles.amenitiesGrid}>
                  {room.amenities?.slice(0, 5).map(
                    (
                      amenity,
                      idx // Show fewer amenities
                    ) => (
                      <span key={idx}>
                        {getAmenityIcon(amenity)} {amenity}
                      </span>
                    )
                  )}
                  {room.amenities && room.amenities.length > 5 && (
                    <span>+{room.amenities.length - 5} more</span>
                  )}
                </div>
                <button
                  className={styles.viewDetailsBtn}
                  onClick={() => handleViewDetails(index)}
                >
                  View Details
                </button>
              </div>

              {/* BACK */}
              <div className={styles.flipCardBack}>
                <button
                  className={styles.closeDetailsBtn}
                  onClick={() => setFlippedIndex(null)}
                >
                  ×
                </button>
                <h3 className={styles.backTitle}>{room.title}</h3>

                <p className={styles.cardDescription}>{room.description}</p>

                <div className={styles.iconRow}>
                  <span>
                    <FaBed className={styles.iconBlue} /> {room.bedCount}{" "}
                    {room.bedCount > 1 ? "Beds" : "Bed"}
                  </span>
                  <span>
                    <FaBath className={styles.iconBlue} /> {room.bathCount}{" "}
                    {room.bathCount > 1 ? "Baths" : "Bath"}
                  </span>
                  {room.hasWifi && (
                    <span>
                      <FaWifi className={styles.iconBlue} /> Free WiFi
                    </span>
                  )}
                </div>

                <div className={styles.roomHighlights}>
                  <p className={styles.highlightsTitle}>Room Inclusions:</p>
                  <ul className={styles.highlightsList}>
                    {room.inclusions?.map((inclusion, idx) => (
                      <li key={idx} className={styles.highlightItem}>
                        {inclusion}
                      </li>
                    ))}
                    {!room.inclusions ||
                      (room.inclusions.length === 0 && (
                        <li className={styles.highlightItem}>
                          No inclusions available
                        </li>
                      ))}
                  </ul>
                </div>
                <button
                  className={styles.bookNowBtn}
                  onClick={() => handleBookNow(room)}
                >
                  Book Now • ₹{formatPrice(room.pricePerNight)}/night
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Branch Selection Modal */}
      {showModal && selectedRoom && (
        <>
          <div
            className={styles.modalOverlay}
            onClick={() => setShowModal(false)}
          />
          <div className={styles.modal}>
            <h3>Choose Branch to Book {selectedRoom.title}</h3>
            {branches.map((branch, index) => (
              <div
                key={`branch-${index}`}
                className={styles.branchOption}
                onClick={() => handleBranchSelection(branch.email)}
              >
                {branch.name} - {branch.phone}
              </div>
            ))}
            <button
              className={styles.modalButton}
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default Rooms;
