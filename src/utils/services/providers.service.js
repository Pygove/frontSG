import axios from 'axios';
import endPoints from '../api/endPoints';

class ProvidersApi {
  async create(body) {
    const response = await axios.post(endPoints.providers.create, {provider:body});
    return response.data;
  }

  async findAll() {
    const response = await axios.get(endPoints.providers.getAll);
    return response.data;
  }

  async findOne(id) {
    const response = await axios.get(endPoints.providers.getOne(id));
    return response.data;
  }

  async update(id, body) {
    const response = await axios.patch(endPoints.providers.update(id), {provider:body});
    return response.data;
  }
  async delete(id) {
    const response = await axios.delete(endPoints.providers.delete(id));
    return response.data;
  }
}

export default ProvidersApi;