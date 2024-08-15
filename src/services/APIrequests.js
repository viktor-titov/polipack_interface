export const handleAuth = async (data) => {
  try {
    const response = await fetch(
      //  http://localhost:8000/api/v1 можно вынести в константу юзается много где. 
      // будешь везде править если урл поменятется например на api/v2
      'http://localhost:8000/api/v1/api-token-auth/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    if (!response.ok) {
      throw new Error(`Ошибка! Статус: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Ошибка!', error);
    return null;
  }
};

export const handleRequestOrders = async (token, page = 1, pageSize = 10) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/workorders/?page=${page}&page_size=${pageSize}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Ошибка! Статус: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Ошибка!', error);
    return null;
  }
};

export const handleOrderById = async (order_id, token) => {
  try {
    const response = await fetch(
      `http://localhost:8000/api/v1/workorders/${order_id}/`,
      {
        method: 'GET',
        headers: {
          Authorization: `Token ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Ошибка! Статус: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log('Ошибка!', error);
    return null;
  }
};
