[![Travis branch](https://img.shields.io/travis/magekey/magento2-grunt-sprite/master.svg)](https://travis-ci.org/magekey/magento2-grunt-sprite) [![Packagist](https://img.shields.io/packagist/v/magekey/grunt-sprite.svg)](https://packagist.org/packages/magekey/grunt-sprite) [![Packagist](https://img.shields.io/packagist/dt/magekey/grunt-sprite.svg)](https://packagist.org/packages/magekey/grunt-sprite)

# Magento 2 Grunt Sprite Tool
Sprite Generation for Magento 2, based on Grunt

## Installation
1. Run `composer require magekey/grunt-sprite`
2. Go to package directory `cd vendor/magekey/grunt-sprite`
3. Run `npm install`
4. Run `grunt setup` create a convenient symlink `grunt-sprite` and config file `grunt-sprite-config.json.sample` in the project root.
5. Rename `grunt-sprite-config.json.sample` to `grunt-sprite-config.json` and define your themes

LESS Example:
```
{
  "path": {
    "sprite_mytheme": "<%= project %>/app/design/frontend/Vendor/mytheme/web"
  },
  "sprite": {
    "mytheme": {
      "src": "<%= sprite_mytheme %>/images/sprite/*.png",
      "dest": "<%= sprite_mytheme %>/images/sprite.png",
      "destCss": "<%= sprite_mytheme %>/css/source/_sprite.less"
    }
  }
}
```

SCSS Example:
```
{
  "path": {
    "sprite_mymodule": "<%= project %>/app/design/frontend/Vendor/mytheme"
  },
  "sprite": {
    "test_module": {
      "src": "<%= sprite_mymodule %>/MyPackage_Module/web/images/sprite/*.png",
      "dest": "<%= sprite_mymodule %>/MyPackage_Module/web/images/sprite.png",
      "destCss": "<%= sprite_mymodule %>/MyPackage_Module/web/scss/_sprite.scss",
      "cssTemplate": "<%= src %>/templates/scss.template.handlebars"
    }
  }
}
```


## Usage
```
cd grunt-sprite
grunt sprite:<sprite>
```

Add sprites to your theme in *app/design/Vendor/theme/web/css/_styles.less*
```
@import 'source/lib/_lib.less'; // Global lib
@import 'source/_sources.less'; // Theme styles
@import 'source/_components.less'; // Components styles (modal/sliding panel)

// Add new line to import sprites
@import 'source/_sprite.less'; // Sprites
```
