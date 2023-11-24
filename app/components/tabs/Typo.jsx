// pages/index.js
import { Heading, Paragraph } from "../components/Typography";
import theme from "./theme";

const Home = () => (
  <div>
    <Heading fontSize={[3, 4]} fontWeight="heading" color="primary">
      Hello, Next.js!
    </Heading>
    <Paragraph fontSize={2} lineHeight="body">
      This is a sample paragraph using styled typography in Next.js.
    </Paragraph>
  </div>
);

export default Home;
