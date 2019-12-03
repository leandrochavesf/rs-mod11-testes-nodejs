import request from 'supertest';
import app from '../../src/app';

import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  // Verificação de registro
  it('should be able to register', async () => {
    const response = await request(app)
      .post('/users')
      .send({
        name: 'Diego Fernandes',
        email: 'diego@rocketseat.com.br',
        password_hash: '123456',
      });

    expect(response.body).toHaveProperty('id');
  });

  // Verificação de email duplicado
  it('should be able to register with duplicated email', async () => {
    await request(app)
      .post('/users')
      .send({
        name: 'Diego Fernandes',
        email: 'diego@rocketseat.com.br',
        password_hash: '123456',
      });

    const response = await request(app)
      .post('/users')
      .send({
        name: 'Diego Fernandes',
        email: 'diego@rocketseat.com.br',
        password_hash: '123456',
      });

    expect(response.status).toBe(400);
  });
});
