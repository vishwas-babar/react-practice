import axios from "axios";

const getMyGithubInfo = async () => {
   const res = await axios.get(`https://api.github.com/users/vishwas-babar`)
        
   return res.data;
}

export default getMyGithubInfo;