import axios from 'axios';
import endPoints from '../api/endPoints';

class TypesOfClientApi {
  async create(body) {
    const response = await axios.post(endPoints.typesOfClient.create, body);
    return response.data;
  }

  async findAll() {
    const response = await axios.get(endPoints.typesOfClient.getAll);
    return response.data;
  }

  async findOne(id) {
    const response = await axios.get(endPoints.typesOfClient.getOne(id));
    return response.data;
  }

  async update(id, body) {
    const response = await axios.patch(
      endPoints.typesOfClient.update(id),
      body
    );
    return response.data;
  }
  async delete(id) {
    const response = await axios.delete(endPoints.typesOfClient.delete(id));
    return response.data;
  }
}

export default TypesOfClientApi;
