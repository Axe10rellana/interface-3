import Classic from "./Classic";

//imagenes
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpeg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";
import image12 from "../assets/image12.jpg";

const classics = [
  {
    id: 1,
    title: "three berries",
    image: image1,
  },
  {
    id: 2,
    title: "lime meringue",
    image: image2,
  },
  {
    id: 3,
    title: "pecan",
    image: image3,
  },
  {
    id: 4,
    title: "budino",
    image: image4,
  },
  {
    id: 5,
    title: "creme brulee",
    image: image5,
  },
  {
    id: 6,
    title: "passion fruit",
    image: image6,
  },
  {
    id: 7,
    title: "araguani",
    image: image7,
  },
  {
    id: 8,
    title: "yuzu",
    image: image8,
  },
  {
    id: 9,
    title: "sea salt caramel",
    image: image9,
  },
  {
    id: 10,
    title: "tiramisu",
    image: image10,
  },
  {
    id: 11,
    title: "snowball",
    image: image11,
  },
  {
    id: 12,
    title: "baileys puff",
    image: image12,
  },
];

const Classics = () => {
  return (
    <div className="container">
      <div className="row">
        {classics.map((classic, index) => (
          <div key={index} className="col-md-3">
            <Classic title={classic.title} image={classic.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classics;
