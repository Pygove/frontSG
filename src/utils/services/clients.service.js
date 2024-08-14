import axios from 'axios';
import endPoints from '../api/endPoints';

class ClientsApi {
  async create(body) {
    const response = await axios.post(endPoints.clients.create, body);
    return response.data;
  }

  async findAll() {
    const response = await axios.get(endPoints.clients.getAll);
    return response.data;
  }

  async findOne(id) {
    const response = await axios.get(endPoints.clients.getOne(id));
    return response.data;
  }

  async update(id, body) {
    const response = await axios.patch(endPoints.clients.update(id), body);
    return response.data;
  }
  async delete(id) {
    const response = await axios.delete(endPoints.clients.delete(id));
    return response.data;
  }
}

export default ClientsApi;
