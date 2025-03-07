import air1 from "../assets/home/zuzu/air1.avif";
import air2 from "../assets/home/zuzu/air2.avif";
import air3 from "../assets/home/zuzu/CcRiz6N2TXCH9BRcGGfBUy-4096x4096.png";
import air4 from "../assets/home/zuzu/CGDzLj5s88GJlvMh77K3zT-4096x4096_1.png";
import air5 from "../assets/home/zuzu/CKYFe3y9KiKJItKe8zEYDa-4096x4096.png";
import air6 from "../assets/home/zuzu/Cu8Xbt205w8Kxi1Z2xivnB-4096x4096.png";
import air7 from "../assets/home/zuzu/Czl4GoQID1pIUIH9phi2fo-4096x4096.png";
import air8 from "../assets/home/zuzu/DgRFjyCDqmJKMh2RsQywtv-4096x4096.png";
import air9 from "../assets/home/zuzu/EWLVDC4rqbrKawpfALGY6X-4096x4096.png";
import air10 from "../assets/home/zuzu/FAA0IR1CjFZFs2hA8SExOE-4096x4096.png";
import air11 from "../assets/home/zuzu/G5m5z1yoFQfHpQ2EgHPeK6-4096x4096.png";
import air12 from "../assets/home/zuzu/GbEhiU0cFKZIsVqzCVR67X-4096x4096_1.png";
import range1 from "../assets/home/range/air1.jpg";
import range2 from "../assets/home/range/air2.jpg";
import range3 from "../assets/home/range/air3.jpg";
import {
  FaSnowflake,
  FaTruck,
  FaShieldAlt,
  FaTools,
  FaMoneyBillWave,
  FaRegClock,
} from "react-icons/fa";

const featuresItems = [
  {
    image: air1,
    name: "Daikin CoolBreeze",
    brand: "Daikin",
    type: "Split AC",
    price: 499.99,
    description:
      "High-efficiency air conditioner with fast cooling and low energy consumption.",
    rating: 4.3,
    sku: "AC-001",
    fullDescription:
      "The AC-001 model from Daikin, priced at $499.99, offers high efficiency and rapid cooling. Manufactured in Japan, this Split AC features advanced energy-saving technology and quiet operation, making it an ideal choice for modern homes.",
  },
  {
    image: air2,
    name: "LG AirFlowTech",
    brand: "LG",
    type: "Window AC",
    price: 549.99,
    description:
      "Modern design air conditioner featuring smart temperature control.",
    rating: 4.5,
    sku: "AC-002",
    fullDescription:
      "The AC-002 from LG, available for $549.99, combines a sleek design with smart temperature control. Made in the USA, this Window AC ensures consistent performance and easy integration into smart home systems.",
  },
  {
    image: air3,
    name: "Samsung EcoCool",
    brand: "Samsung",
    type: "Cassette AC",
    price: 429.99,
    description:
      "Reliable cooling unit with quiet operation and durable build.",
    rating: 4.1,
    sku: "AC-003",
    fullDescription:
      "Experience reliable performance with the AC-003 by Samsung. Priced at $429.99 and manufactured in Germany, this Cassette AC offers quiet operation, durable construction, and efficient cooling for a comfortable environment.",
  },
  {
    image: air4,
    name: "Mitsubishi BreezeMaster",
    brand: "Mitsubishi Electric",
    type: "Floor-Standing AC",
    price: 599.99,
    description:
      "Premium air conditioner with advanced filtration and energy saver mode.",
    rating: 4.6,
    sku: "AC-004",
    fullDescription:
      "The AC-004 from Mitsubishi Electric, costing $599.99, is a premium Floor-Standing AC. Produced in South Korea, it features advanced filtration, energy saver mode, and a robust design for superior indoor air quality.",
  },
  {
    image: air5,
    name: "Daikin FrostAir",
    brand: "Daikin",
    type: "Window AC",
    price: 479.99,
    description:
      "Efficient cooling with modern aesthetics and easy remote control.",
    rating: 4.2,
    sku: "AC-005",
    fullDescription:
      "With a price of $479.99, the AC-005 by Daikin is engineered for efficiency and style. Made in Italy, this Window AC offers a modern aesthetic, user-friendly remote control, and reliable cooling performance for everyday comfort.",
  },
  {
    image: air6,
    name: "LG ChillPro",
    brand: "LG",
    type: "Split AC",
    price: 529.99,
    description:
      "Air conditioner with rapid cooling technology and eco-friendly refrigerant.",
    rating: 4.4,
    sku: "AC-006",
    fullDescription:
      "The AC-006 from LG is available at $529.99 and is designed for rapid cooling. Manufactured in China, this Split AC utilizes eco-friendly refrigerants and cutting-edge technology to deliver efficient performance and long-lasting durability.",
  },
  {
    image: air7,
    name: "Samsung WindCool",
    brand: "Samsung",
    type: "Cassette AC",
    price: 459.99,
    description:
      "Compact design air conditioner perfect for small to medium spaces.",
    rating: 4.0,
    sku: "AC-007",
    fullDescription:
      "Ideal for smaller spaces, the AC-007 by Samsung is priced at $459.99. Made in France, this Cassette AC offers a compact design and reliable performance, making it a versatile choice for both residential and office environments.",
  },
  {
    image: air8,
    name: "Mitsubishi ArcticAir",
    brand: "Mitsubishi Electric",
    type: "Floor-Standing AC",
    price: 619.99,
    description:
      "High-performance air conditioner with multiple fan speeds and smart features.",
    rating: 4.7,
    sku: "AC-008",
    fullDescription:
      "The AC-008 model from Mitsubishi Electric, costing $619.99, is a high-performance Floor-Standing AC featuring multiple fan speeds and smart connectivity. Manufactured in Canada, it delivers exceptional cooling efficiency and durability, ideal for modern living spaces.",
  },
  {
    image: air9,
    name: "Daikin ClimateMaster",
    brand: "Daikin",
    type: "Window AC",
    price: 489.99,
    description:
      "User-friendly air conditioner with energy-efficient performance.",
    rating: 4.3,
    sku: "AC-009",
    fullDescription:
      "Designed with user convenience in mind, the AC-009 from Daikin is priced at $489.99. Made in Mexico, this Window AC balances energy efficiency with effective cooling, ensuring both comfort and cost savings for your home.",
  },
  {
    image: air10,
    name: "LG PolarAir",
    brand: "LG",
    type: "Split AC",
    price: 559.99,
    description:
      "Robust cooling system with innovative design and low noise operation.",
    rating: 4.5,
    sku: "AC-010",
    fullDescription:
      "The AC-010 from LG, available for $559.99, features a robust Split AC cooling system with an innovative design. Manufactured in Spain, it guarantees low noise operation and reliable performance even in demanding conditions.",
  },
  {
    image: air11,
    name: "Samsung TempControl",
    brand: "Samsung",
    type: "Cassette AC",
    price: 519.99,
    description:
      "Reliable air conditioner with adjustable settings and durable components.",
    rating: 4.4,
    sku: "AC-011",
    fullDescription:
      "For a balance of reliability and versatility, the AC-011 by Samsung is priced at $519.99. Made in India, this Cassette AC offers adjustable settings and durable components, ensuring lasting comfort and performance in various environments.",
  },
  {
    image: air12,
    name: "Mitsubishi SmartAir",
    brand: "Mitsubishi Electric",
    type: "Floor-Standing AC",
    price: 589.99,
    description:
      "State-of-the-art air conditioner offering rapid cooling and smart connectivity.",
    rating: 4.6,
    sku: "AC-012",
    fullDescription:
      "Experience state-of-the-art cooling with the AC-012 from Mitsubishi Electric. Priced at $589.99 and manufactured in Brazil, this Floor-Standing AC combines rapid cooling with smart connectivity, making it a top choice for modern, technology-driven homes.",
  },
];

const rangeItems = [
  {
    type: "Split AC",
    image: air1,
    name: "CoolBreeze AC-001",
    price: 499.99,
    description:
      "High-efficiency air conditioner with fast cooling and low energy consumption.",
    rating: 4.3,
    sku: "AC-001",
    fullDescription:
      "The AC-001 model from CoolBreeze, priced at $499.99, offers high efficiency and rapid cooling. Manufactured in Japan, this unit features advanced energy-saving technology and quiet operation, making it an ideal choice for modern homes.",
  },
  {
    type: "Window AC",
    image: range1,
    name: "ChillPro AC-006",
    price: 529.99,
    description:
      "Air conditioner with rapid cooling technology and eco-friendly refrigerant.",
    rating: 4.4,
    sku: "AC-006",
    fullDescription:
      "The AC-006 from ChillPro is available at $529.99 and is designed for rapid cooling. Manufactured in China, it utilizes eco-friendly refrigerants and cutting-edge technology to deliver efficient performance and long-lasting durability.",
  },
  {
    type: "Floor-Standing AC",
    image: range3,
    name: "Hisense 2hp Hisense Floor Standing",
    price: 529.99,
    description:
      "The Hisense 2.0hp Standing Split Air conditioner is designed to create a cool and comfortable living environment.",
    rating: 4.1,
    sku: "AC-006",
    fullDescription:
      "The Hisense 2.0hp Standing Split Air conditioner is designed to create a cool and comfortable living environment. It can be used in residential as well as commercial properties. It has been integrated with an ionizer to ensure refreshing, natural and healthy air. The ionizer generates a high voltage ionization zone through which the air is converted into plasma. Inside the air most of the dust, smoke and pollen particles are captured by the electrostatic filter. With the new technology of Refrigerant Leak Detector (RLD) the air conditioner gives an indication when the outdoor unit detects refrigerant leakage. The system is also produced with the tropical rainforest and hot zones as ours. This so why it has a low energy consumption panel and cost effective in it's purchase and installation.It's is a user friendly and also eco friendly functionality item built to meet your desire for serviceCopper CondenserSuper Cooling Gold FinWide Angel LouversEasy Cleaning PanelMulti Layer Air Purifying Technology.",
  },
  {
    type: "Cassette AC",
    image: range2,
    name: "The Panasonic 2HP Cassette",
    price: 529.99,
    description:
      "The Panasonic 2HP Cassette type air conditioner comes with a 4 Way airflow system.",
    rating: 4.1,
    sku: "AC-006",
    fullDescription:
      "The Panasonic 2HP Cassette type air conditioner comes with a 4 Way airflow system, LCD wireless remote controller, Random Auto Restart and a Removable washable panel. With new and highly improved edge cutting technology, the air flow can be easily adjusted not to blow directly to the human body, which in turn provides healthier airflow and uniform cooling for your space. It also comes with an odor removing function.Panasonic’s low voltage operation design is specifically designed for the Nigerian power situation. With voltages as low as 220V, one can enjoy the superb cooling performance of this split unit even in poor power conditions. Its turbo plus cooling/heating power is designed such that within the first 60 mins of turning it on, cools/heats your room with 40% extra intensity ensuring you avoid a long wait for before it begins to function. Moreover, it can cover large space with 10-metre long airflow reach.",
  },
];

const faqItems = [
  {
    num: 1,
    word: "What types of air conditioners do you offer?",
    description:
      "We offer a wide range of air conditioners, including Split ACs, Window ACs, Cassette ACs, Portable ACs, and Tower ACs, catering to different space and cooling requirements.",
    Icon: FaSnowflake, // Snowflake icon for cooling
  },
  {
    num: 2,
    word: "Do you provide nationwide delivery?",
    description:
      "Yes, we deliver air conditioners across multiple locations. Shipping times may vary depending on your location, and we ensure safe and timely delivery.",
    Icon: FaTruck, // Truck icon for delivery
  },
  {
    num: 3,
    word: "Is there a warranty on the air conditioners?",
    description:
      "Yes, all our air conditioners come with a manufacturer’s warranty. The warranty period and terms vary based on the brand and model.",
    Icon: FaShieldAlt, // Shield icon for warranty and security
  },
  {
    num: 4,
    word: "Do you offer installation services?",
    description:
      "We provide professional installation services for select locations. You can also hire a certified technician for proper setup.",
    Icon: FaTools, // Tools icon for installation services
  },
  {
    num: 5,
    word: "What payment methods do you accept?",
    description:
      "We accept multiple payment options, including credit/debit cards, bank transfers, mobile wallets, and cash on delivery (available in select areas).",
    Icon: FaMoneyBillWave, // Money icon for payment options
  },
  {
    num: 6,
    word: "How long does delivery take?",
    description:
      "Delivery times depend on your location and selected shipping method. Standard delivery usually takes 3-7 business days.",
    Icon: FaRegClock, // Clock icon for delivery time
  },
];

const aboutPeople = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export { featuresItems, rangeItems, faqItems, aboutPeople };
