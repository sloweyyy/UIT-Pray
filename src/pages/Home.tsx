import { FunctionComponent } from "react";
import Banner from "../components/Banner";
import Divider from "../components/Divider";
import Form from "../components/Form";
import GitHubIcon from "../components/Contact"; // Thay đổi đường dẫn tới tệp GitHubIcon.tsx

const Home: FunctionComponent = () => {
  return (
    <div className="flex items-center w-full flex-col py-8">
      <Banner />
      <Divider />
      <Form />
      <GitHubIcon />
    </div>
  );
};

export default Home;
