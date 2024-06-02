import store from "../../Redux/store";

const logoFavorite = "";
let logoImage = store.getState().storeSetting.settingData.Header_Logo_image;
const imagesCard =
  "https://img.freepik.com/free-vector/realistic-fitness-trackers-concept_23-2148515597.jpg?t=st=1716721662~exp=1716725262~hmac=c146c98a2685149ce5613dc4daf745593383f20f95b5cd1ff70bc3f6afd4ae59&w=740";

export { logoImage, imagesCard, logoFavorite };
