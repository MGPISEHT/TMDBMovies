import ImagesAndVideos from "./ImagesAndVideos.jsx";

const ProductionHouse = () => {
  return (
    <div className="flex justify-center items-center mt-5 p-5 ">
      {ImagesAndVideos.map((item) => {
        return (
          <div
            className={`flex flex-col mx-1 relative items-center  md:mx-5 border-[2px]
                 border-gray-400 transition-all   hover:scale-110 md:rounded-2xl rounded-lg
                 hover:shadow-2xl hover:shadow-amber-300  duration-300 ease-in-out cursor-pointer`}
            key={item.id}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="md:rounded-2xl lg:rounded-xl w-full object-cover absolute top-0 opacity-0 hover:opacity-50 transition-opacity duration-300 ease-in-out"
              src={item.video}
            />
            <img className="" src={item.image} alt={item.title} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductionHouse;
