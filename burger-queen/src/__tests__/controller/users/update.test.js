import updateUser from '../../../controller/users/update'
import nock from 'nock';

jest.spyOn(global, 'fetch').mockImplementation(require('node-fetch'));

it.skip('get request1', (done) => {
  nock('http://165.22.166.131:8080')
    .put('/users/1',{
        "_id": '1',
        "email": "amy@gmail.com",
        "password": "abcde123ABC",
        "roles": {
          "admin": true
        }
      }
      )
    .reply(200, [{
        "_id": '1',
        "email": "amy@gmail.com",
        "roles": {
          "admin": true
        }
      }
      ])
  return updateUser( '1', 'asdfghjklWRET12', "amy@gmail.com", 'abcde123ABC', true).then(user => {
    expect(user).toEqual([{
        "_id": '1',
        "email": "amy@gmail.com",
        "roles": {
          "admin": true
        }
      }
      ]);
    done()
  });
});

it.skip('get request2', (done) => {
  nock('http://165.22.166.131:8080')
    .put('/users/1', {
        "_id": '1',
        "email": "amy@gmail.com",
        "password": "abcde123ABC",
        "roles": {
          "admin": true
        }
      })
    .reply(401, { message: 'No existe token válido' });
  return updateUser( '1', 'asdfghjklWRET12', "amy@gmail.com", 'abcde123ABC', true).catch(res => {
    expect(res.message).toBe('No existe token válido');
    done()
  });
});

it.skip('get request32', (done) => {
    nock('http://165.22.166.131:8080')
      .put('/users/1', {
        "_id": '1',
        "email": "amy@gmail.com",
        "password": "abcde123ABC",
        "roles": {
          "admin": true
        }
      })
      .reply(400, { message: 'Es necesario ingresar email y/o contraseña' });
    return updateUser( '1', 'asdfghjklWRET12', "amy@gmail.com", 'abcde123ABC', true).catch(res => {
      expect(res.message).toBe('Es necesario ingresar email y/o contraseña');
      done()
    });
  });

it.skip('get request3', (done) => {
    nock('http://165.22.166.131:8080')
      .put('/users/1', {
        "_id": '1',
        "email": "amy@gmail.com",
        "password": "abcde123ABC",
        "roles": {
          "admin": true
        }
      })
      .reply(403, { message: 'Es necesario ser administrador para realizar esta acción' });
    return updateUser( '1', 'asdfghjklWRET12', "amy@gmail.com", 'abcde123ABC', false).catch(res => {
      expect(res.message).toBe('Es necesario ser administrador para realizar esta acción');
      done()
    });
  });

  it.skip('get request4', (done) => {
    nock('http://165.22.166.131:8080')
      .put('/users/1', {
        "_id": '1',
        "email": "amy@gmail.com",
        "password": "abcde123ABC",
        "roles": {
          "admin": true
        }
      })
      .reply(404, { message: 'Usuario solicitado no existe' });
    return updateUser( '1', 'asdfghjklWRET12', "amy@gmail.com", 'abcde123ABC', true).catch(res => {
      expect(res.message).toBe('Usuario solicitado no existe');
      done()
    });
  });

  it.skip('get request5', (done) => {
    nock('http://165.22.166.131:8080')
      .put('/users/1', {
        "_id": '1',
        "email": "amy@gmail.com",
        "password": "abcde123ABC",
        "roles": {
          "admin": true
        }
      })
      .reply(406, { message: 'Not Acceptable' });
    return updateUser( '1', 'asdfghjklWRET12', "amy@gmail.com", 'abcde123ABC', true).catch(res => {
      expect(res.message).toBe('Not Acceptable');
      done()
    });
  });