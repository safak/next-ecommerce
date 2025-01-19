import { Fade, Slide } from "react-awesome-reveal";

const AboutSession = () => {
  return (
    <div className="bg-[#F3F4F6] w-full py-10 flex items-end justify-center h-fit md:h-[550px] overflow-hidden">
      <div className="w-[90%] h-full flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[45%] flex justify-center items-center">
          <div className="w-full h-[90%] flex items-center justify-center flex-col">
            <div className="w-full h-[97%] flex flex-col justify-center gap-5">
              <div className="text-[20px] md:text-[25px] leading-[28px] md:leading-[35px] text-[black]">
                <Fade>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                  minus facere magnam repudiandae quis deleniti repellendus
                  sapiente adipisci necessitatibus assumenda, voluptate,
                  accusantium culpa autem recusandae eum doloribus fugit minima
                  perferendis quisquam, praesentium corporis officia ea
                  voluptas! Omnis laborum dolorum nisi.
                </Fade>
              </div>
              <button className="bg-[#F27E98] w-[120px] py-[10px] text-white rounded-[5px] hover:bg-white hover:text-[var(--myColor)] hover:cursor-pointer transition duration-300 ease-in-out hover:scale-[1.05]">
                Hurry Up!
              </button>
            </div>
          </div>
        </div>

        <Slide className="md:w-[50%] flex items-center justify-center">
          <div className="w-full md:w-[95%] flex items-center justify-center md:h-full h-[400px] mt-2 md:mt-0">
            <img
              src="https://images.pexels.com/photos/2249249/pexels-photo-2249249.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Makeup"
              className="h-[90%] w-[90%] object-fill rounded-[20px]"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default AboutSession;
