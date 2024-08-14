import axios from 'axios';
import endPoints from '../api/endPoints';

class ActivitiesApi {
  async create(body) {
    const response = await axios.post(endPoints.activities.create, body);
    return response.data;
  }

  async findAll() {
    const response = await axios.get(endPoints.activities.getAll);
    return response.data;
  }

  async findOne(id) {
    const response = await axios.get(endPoints.activities.getOne(id));
    return response.data;
  }

  async update(id, body) {
    const response = await axios.patch(endPoints.activities.update(id), body);
    return response.data;
  }
  async delete(id) {
    const response = await axios.delete(endPoints.activities.delete(id));
    return response.data;
  }
}

export default ActivitiesApi;
