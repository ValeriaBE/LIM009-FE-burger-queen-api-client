import deleteUser from '../../../controller/users/delete'
import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'));

it('get request1', (done) => {
  nock('http://165.22.166.131:8080')
    .delete('/users/1')
    .reply(200, [{
        "_id": '1',
        "email": "amy@gmail.com",
        "roles": {
          "admin": false
        }
      }
      ])
  return deleteUser('asdfghjklWRET12', '1').then(order => {
    expect(order).toEqual([{
        "_id": '1',
        "email": "amy@gmail.com",
        "roles": {
          "admin": false
        }
      }
      ]);
    done()
  });
});

it('get request2', (done) => {
  nock('http://165.22.166.131:8080')
    .delete('/users/1')
    .reply(401, { message: 'No existe token válido' });
  return deleteUser('asdfghjklWRET12', '1').catch(res => {
    expect(res.message).toBe('No existe token válido');
    done()
  });
});

it('get request3', (done) => {
    nock('http://165.22.166.131:8080')
      .delete('/users/1')
      .reply(403, { message: 'Es necesario ser administrador ' });
    return deleteUser('asdfghjklWRET12', '1').catch(res => {
      expect(res.message).toBe('Es necesario ser administrador ');
      done()
    });
  });

  it('get request4', (done) => {
    nock('http://165.22.166.131:8080')
      .delete('/users/1')
      .reply(404, { message: 'Usuario inexistente' });
    return deleteUser('asdfghjklWRET12', '1').catch(res => {
      expect(res.message).toBe('Usuario inexistente');
      done()
    });
  });

  it('get request4', (done) => {
    nock('http://165.22.166.131:8080')
      .delete('/users/1')
      .reply(406, { message: 'Not Acceptable' });
    return deleteUser('asdfghjklWRET12', '1').catch(res => {
      expect(res.message).toBe('Not Acceptable');
      done()
    });
  });