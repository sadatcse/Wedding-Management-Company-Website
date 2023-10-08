import { useLoaderData, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

const Detailsservice = () => {
  const services = useLoaderData();
  console.log(services);
  const { id } = useParams();

  const service = services.find((service) => service.serviceId == parseInt(id));

  const { serviceId, name, image, price, BeautifulImages, fullDescription, buttonColor, slogan, Elements,keyelements } = service || {};
  console.log(Elements.key);

  const textColour = {
    color: buttonColor, 
  };

  return (
    <div>
      <div className="bg-cover bg-center relative" style={{ backgroundImage: `url(${image})`, height: '50vh' }}>
        <div className="absolute bottom-0 left-0 w-full h-1/5">
          <p style={{ backgroundColor: buttonColor }} className="text-3xl absolute bottom-0 right-0 m-4 text-white p-2">
            {slogan}
          </p>
        </div>
      </div>

      <div className="my-3 mx-5 px-5 container">
        <h1 className="text-4xl font-serif font-black">{name}</h1>
        <p className="my-5 font-light">{fullDescription}</p>

        {Elements && (
          <div className="my-5">
            <h2 className="text-lg font-semibold">{keyelements}</h2>
            <ul className="list-disc mt-5">
              {Object.entries(Elements).map(([key, value]) => (
                <p className="text-lg mb-3" key={key}>
                  <span className="font-bold text-lg">{key}:</span> {value}
                </p>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <h1 className="font-pacifico text-4xl text-red-500 mb-4 text-center">View our {name} Gallery...</h1>
        <div className="flex flex-wrap justify-between">
          {BeautifulImages.map((image) => (
            <div className="w-1/4 p-2" key={image.id}>
              <img src={image.url} alt={image.id} className="max-w-full h-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

Detailsservice.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Detailsservice;
