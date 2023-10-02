import axios from 'axios';

export default axios.create({
  baseURL: 'https://mylifeuk.dev/api/therapists/v1',
});
