import Marquee from "react-fast-marquee";
import img1 from '../images/one.png';
import img2 from '../images/two.png';
import img3 from '../images/three.png';
import img4 from '../images/four.png';
import img5 from '../images/five.png';
import img6 from '../images/six.png';
import img7 from '../images/seven.png';
import img8 from '../images/eight.png';
import img9 from '../images/nine.png';
import img10 from '../images/ten.png';

const Logoslide = () => {
  return (
    <div className="mt-12 text-center">
      <div className="mb-12">
        <h1 className="text-2xl font-bold">Our Technology Partner</h1>
      </div>

      <div>
        <Marquee direction="right" speed={100} delay={1}>
          <div className="mx-7">
            <img src={img1} alt="Technology Partner 1" className="w-20 h-20 object-contain" />
          </div>
          <div className="mx-7">
            <img src={img2} alt="Technology Partner 2" className="w-20 h-20 object-contain" />
          </div>
          <div className="mx-7">
            <img src={img3} alt="Technology Partner 3" className="w-20 h-20 object-contain" />
          </div>
          <div className="mx-7">
            <img src={img4} alt="Technology Partner 4" className="w-20 h-20 object-contain" />
          </div>
          <div className="mx-7">
            <img src={img5} alt="Technology Partner 5" className="w-20 h-20 object-contain" />
          </div>
          <div className="mx-7">
            <img src={img6} alt="Technology Partner 6" className="w-20 h-20 object-contain" />
          </div>
          <div className="mx-7">
            <img src={img7} alt="Technology Partner 7" className="w-20 h-20 object-contain" />
          </div>
          <div className="mx-7">
            <img src={img8} alt="Technology Partner 8" className="w-20 h-20 object-contain" />
          </div>
          <div className="mx-7">
            <img src={img9} alt="Technology Partner 9" className="w-20 h-20 object-contain" />
          </div>
          <div className="mx-7">
            <img src={img10} alt="Technology Partner 10" className="w-20 h-20 object-contain" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Logoslide;
