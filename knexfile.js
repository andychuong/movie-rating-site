// Define DB connections for different environments
module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/moviecrud'
  },
  test: {},
  production: {
    client: 'pg',
    connection: 'postgres://dsxjytcymyudng:dcb1e467662d43230e775162c2d278d46afc33f059516a554a494f5d0523dffc@ec2-54-243-187-30.compute-1.amazonaws.com:5432/d1ol9jhcgs6f4e'
  }
}
