const getChunkInfo = bundle => Object.values(bundle)[0]
const getChunkKey = bundle => Object.keys(bundle)[0]

const generate = async (params, options, bundle) => {

  const prefix = options.dir ? `${options.dir}/` : ''

  return `{
    "${params.manifestKey}": "${prefix}${getChunkKey(bundle)}"
  }`
}

module.exports = function(params = { manifestKey: 'bundle' }) {
  return {
    name: 'rollup-plugin-asset-manifest',
    generateBundle: async function(options, bundle) {

      const type = 'asset'
      const { name } = getChunkInfo(bundle)
      const source = await generate(params, options, bundle)

      this.emitFile({ type, name, source })
    }
  }
}
