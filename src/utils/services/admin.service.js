import axios from 'axios';
import endPoints from '../api/endPoints';

class AdminApi {
  async login(body) {
    const url = endPoints.auth.login;
    const response = await axios.post(url, body);
    return response.data;
  }

  async check(body) {
    const url = endPoints.auth.check;
    const response = await axios.post(url, body);
    return response.data;
  }

  async changePassword(body) {
    const url = endPoints.auth.changePassword;
    const response = await axios.post(url, body);
    return response.data;
  }

  async recoveryPassword(body) {
    const url = endPoints.auth.recovery;
    const response = await axios.post(url, body);
    return response.data;
  }
}

export default AdminApi;
