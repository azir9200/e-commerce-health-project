import moment from "moment";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="mt-8">
      <div className="text-center">
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex">
        <Marquee className="text-danger" speed={100}>
          ✅ Improves Cardiovascular Health – Regular exercise strengthens the
          heart and improves circulation. ✅ Builds Strength & Muscle Mass –
          Weight training and resistance exercises help increase muscle
          strength. ✅ Aids in Weight Management – Burns calories, helps with
          fat loss, and maintains a healthy weight. ✅ Boosts Flexibility &
          Mobility – Stretching, yoga, and functional training enhance movement
          and flexibility. ✅ Strengthens Bones & Joints – Resistance training
          increases bone density and reduces the risk of osteoporosis. ✅
          Enhances Immune System – Regular workouts help improve overall
          immunity and reduce illness frequency.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
