import katieZaferesImg from "../images/katie-zaferes.png";
import weddingPhotographyImg from "../images/wedding-photography.png";
import mountainBikeImg from "../images/mountain-bike.png";
import aceImg from "../images/Ace.jpeg";
import fujiImg from "../images/fuji.jpeg";
import nightViewImg from "../images/night-view.jpeg";
import templeImg from "../images/temple.jpeg";

export default [
    {
        id: 1,
        title: "Life Lessons with Katie Zaferes",
        description: "I will share with you what I call 'Positively Impactful Moments of Disappointment.' Throughout my career, many of my highest moments only came after setbacks and losses. But learning from those difficult moments is what gave me the ability to rise above them and reach my goals.",
        price: 136,
        coverImg: katieZaferesImg,
        stats: {
            rating: 5.0,
            reviewCount: 6
        },
        location: "Online",
        openSpots: 0,
    },
    {
        id: 2,
        title: "Learn Wedding Photography",
        description: "Interested in becoming a wedding photographer? For beginner and experienced photographers alike, join us in learning techniques required to leave the happy couple with memories that'll last a lifetime.",
        price: 125,
        coverImg: weddingPhotographyImg,
        stats: {
            rating: 5.0,
            reviewCount: 30
        },
        location: "Online",
        openSpots: 27,
    },
    {
        id: 3,
        title: "Group Mountain Biking",
        description: "Experience the beautiful Norwegian landscape and meet new friends all while conquering rugged terrain on your mountain bike. (Bike provided!)",
        price: 50,
        coverImg: mountainBikeImg,
        stats: {
            rating: 4.8,
            reviewCount: 2
        },
        location: "Norway",
        openSpots: 3,
    },
    {
        id: 4,
        title: "Ace Card",
        description: "This is the Ace card, a symbol of excellence and high value in many card games. Add it to your collection today!",
        price: 5,
        coverImg: aceImg,
        stats: {
            rating: 4.5,
            reviewCount: 10
        },
        location: "Online",
        openSpots: 15,
    },
    {
        id: 5,
        title: "Scenic Fuji Mountain",
        description: "Enjoy the breathtaking view of Mount Fuji, one of Japan's most iconic landmarks. Join us for a memorable experience.",
        price: 75,
        coverImg: fujiImg,
        stats: {
            rating: 4.9,
            reviewCount: 15
        },
        location: "Japan",
        openSpots: 8,
    },
    {
        id: 6,
        title: "City Night View Photography",
        description: "Capture the city's beauty at night. Learn the art of nighttime photography with our expert photographers.",
        price: 60,
        coverImg: nightViewImg,
        stats: {
            rating: 4.7,
            reviewCount: 5
        },
        location: "Urban",
        openSpots: 12,
    },
    {
        id: 7,
        title: "Temple Exploration Tour",
        description: "Embark on a journey to explore ancient temples and immerse yourself in rich history and culture.",
        price: 40,
        coverImg: templeImg,
        stats: {
            rating: 4.6,
            reviewCount: 8
        },
        location: "Asia",
        openSpots: 10,
    },
]
