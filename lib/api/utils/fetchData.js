import axios from "axios";
import { mapMenus } from "../../utils/mapper";

const fetchHeader = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/menus/1?nested&populate=*`
    );
    return mapMenus(response?.data?.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export default fetchHeader;
