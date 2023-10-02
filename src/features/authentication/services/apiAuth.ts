import axios from '../../../lib/axios';

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await axios.post('/auth/login', {
    email,
    password,
  });

  return response;
};
