const API = import.meta.env.VITE_API_URL;

const endPoints = {
  auth: {
    login: `${API}/login`,
    check: `${API}/check`,
    recovery: `${API}/recovery`,
    changePassword: `${API}/change-password`,
  },
  clients: {
    getAll: `${API}/api/v1/clients`,
    getOne: (id) => `${API}/api/v1/clients/${id}`,
    create: `${API}/api/v1/clients`,
    update: (id) => `${API}/api/v1/clients/${id}`,
    delete: (id) => `${API}/api/v1/clients/${id}`,
  },
  pendingsClient: {
    getAll: `${API}/api/v1/pendings-client`,
    getOne: (id) => `${API}/api/v1/pendings-client/${id}`,
    create: `${API}/api/v1/pendings-client`,
    update: (id) => `${API}/api/v1/pendings-client/${id}`,
    delete: (id) => `${API}/api/v1/pendings-client/${id}`,
  },
  activities: {
    getAll: `${API}/api/v1/extra-activities`,
    getOne: (id) => `${API}/api/v1/extra-activities/${id}`,
    create: `${API}/api/v1/extra-activities`,
    update: (id) => `${API}/api/v1/extra-activities/${id}`,
    delete: (id) => `${API}/api/v1/extra-activities/${id}`,
  },
  typesOfClient: {
    getAll: `${API}/api/v1/types-of-client`,
    getOne: (id) => `${API}/api/v1/types-of-client/${id}`,
    create: `${API}/api/v1/types-of-client`,
    update: (id) => `${API}/api/v1/types-of-client/${id}`,
    delete: (id) => `${API}/api/v1/types-of-client/${id}`,
  },
  providers: {
    getAll: `${API}/api/v1/providers`,
    getOne: (id) => `${API}/api/v1/providers/${id}`,
    create: `${API}/api/v1/providers`,
    update: (id) => `${API}/api/v1/providers/${id}`,
    delete: (id) => `${API}/api/v1/providers/${id}`,
  },
};

export default endPoints;
