import Curiou from "./Curiou";

//imagenes
import image13 from "../assets/image13.jpg";
import image14 from "../assets/image14.jpg";
import image15 from "../assets/image15.jpg";
import image16 from "../assets/image16.jpg";

const curious = [
  {
    id: 1,
    title: "green tea",
    image: image13,
  },
  {
    id: 2,
    title: "black pepper",
    image: image14,
  },
  {
    id: 3,
    title: "wasabi",
    image: image15,
  },
  {
    id: 4,
    title: "mont blanc",
    image: image16,
  },
];

const Curious = () => {
  return (
    <div className="container">
      <div className="row">
        {curious.map((curiou, index) => (
          <div key={index} className="col-md-3">
            <Curiou title={curiou.title} image={curiou.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Curious;
