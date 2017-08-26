const { model, info, router } = require('../../../src')
@model('Demo model')
@model.props({
  id: info.integer().desc('Demo Id').required(),
  name: info.string().desc('Demo name').required(),
  createTime: info.dateTime().desc('Demo create time')
})
class Demo {
  @router('Demo find')
  @router.get('/Demos')
  @router.response.array()
  find(req, res) {
    return [{ id: 0 }]
  }

  @router('Update Demo document by id')
  @router.put('/Demos/{id}')
  @router.body(['name', {
    name: 'examples',
    type: 'array',
    props: ['id', 'name']
  }])
  @router.response(['id'])
  update() {

  }
}

module.exports = Demo