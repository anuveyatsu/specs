const util = require('util')
const {assert} = require('chai')
const glob = util.promisify(require('glob'))
const readFile = util.promisify(require('fs').readFile)


// Tests

describe('schemas', () => {

  it('[all]', async () => {
    const files = await glob('build/schemas/*.*')
    assert.include(files, 'build/schemas/csv-dialect.json')
    assert.include(files, 'build/schemas/data-package.json')
    assert.include(files, 'build/schemas/data-resource.json')
    assert.include(files, 'build/schemas/fiscal-data-package.json')
    assert.include(files, 'build/schemas/registry.csv')
    assert.include(files, 'build/schemas/registry.json')
    assert.include(files, 'build/schemas/table-schema.json')
    assert.include(files, 'build/schemas/tabular-data-package.json')
    assert.include(files, 'build/schemas/tabular-data-resource.json')
  })

  it('csv-dialect', async () => {
    const schema = require('../build/schemas/csv-dialect.json')
    assert.deepEqual(schema.title, 'CSV Dialect')
  })

  it('data-package', async () => {
    const schema = require('../build/schemas/data-package.json')
    assert.deepEqual(schema.title, 'Data Package')
  })

  it('data-resource', async () => {
    const schema = require('../build/schemas/data-resource.json')
    assert.deepEqual(schema.title, 'Data Resource')
  })

  it('fiscal-data-package', async () => {
    const schema = require('../build/schemas/fiscal-data-package.json')
    assert.deepEqual(schema.title, 'Fiscal Data Package')
  })

  it('registry.csv', async () => {
    const contents = await readFile('build/schemas/registry.csv', 'utf-8')
    assert.include(contents, 'Data Package')
    assert.include(contents, 'Tabular Data Package')
    assert.include(contents, 'Fiscal Data Package')
    assert.include(contents, 'Data Resource')
    assert.include(contents, 'Tabular Data Resource')
    assert.include(contents, 'Table Schema')
  })

  it('registry.json', async () => {
    const registry = require('../build/schemas/registry.json')
    const titles = registry.map(item => item.title)
    assert.include(titles, 'Data Package')
    assert.include(titles, 'Tabular Data Package')
    assert.include(titles, 'Fiscal Data Package')
    assert.include(titles, 'Data Resource')
    assert.include(titles, 'Tabular Data Resource')
    assert.include(titles, 'Table Schema')
  })

  it('table-schema', async () => {
    const schema = require('../build/schemas/table-schema.json')
    assert.deepEqual(schema.title, 'Table Schema')
  })

  it('tabular-data-package', async () => {
    const schema = require('../build/schemas/tabular-data-package.json')
    assert.deepEqual(schema.title, 'Tabular Data Package')
  })

  it('tabular-data-resource', async () => {
    const schema = require('../build/schemas/tabular-data-resource.json')
    assert.deepEqual(schema.title, 'Tabular Data Resource')
  })

})
