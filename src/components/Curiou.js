const Curiou = ({ title, image }) => {
  return (
    <section>
      <div className="card text-left animate__animated animate__fadeInUp">
        <div className="overflow">
          <img src={image} alt={title} className="card__img card-img-top" />
        </div>
        <div className="card-body">
          <h4 className="card-title subtitle">{title}</h4>
          <p className="card-text text-secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            praesentium commodi ullam nostrum quia mollitia illo ea, deserunt,
            incidunt ratione eum eaque doloribus eligendi perspiciatis
            laudantium! Nulla tenetur vel necessitatibus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Curiou;
