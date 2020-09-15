# rollup-plugin-asset-manifest

## Install
```
# With yarn:
yarn add rollup-plugin-asset-manifest --dev
# With npm:
npm i rollup-plugin-asset-manifest --save-dev
```

## Options
- `manifestKey` - change the key used in the manifest from the deafult `bundle`

## Examples
```
import assetManifest from 'rollup-plugin-asset-manifest'

export default {
  input: { name: 'index.js' },
  output: {
    dir: 'dist',
    entryFileNames: '[name].[hash].js'
    assetFileNames: '[name].assets.json',
    plugins: [
      assetManifest({ manifestKey: 'key' })
    ]
  }
}
```
