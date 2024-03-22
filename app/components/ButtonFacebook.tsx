// Import necessary modules/components
import { FacebookShareButton, FacebookIcon } from "next-share"; // Adjust as needed

// Define a functional component
const MyComponent = () => {
  return (
    <FacebookShareButton
      url={"https://github.com/next-share"}
      quote={"next-share is a social share buttons for your next React apps."}
      hashtag={"#nextshare"}
    >
      <FacebookIcon size={32} round />
    </FacebookShareButton>
  );
};

// Export the functional component
export default MyComponent;
