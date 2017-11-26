/**
 * Copyright © MageKey. All rights reserved.
 */
'use strict';

const _ = require('underscore'),
  fs = require('fs'),
  themes = require('./themes'),
  projectPath = fs.realpathSync('../../../') + '/',
  themeOptions = {},
  defaultOptions = {
    src: 'images/sprite/*.png',
    dest: 'images/sprite.png',
    destCss: 'css/source/_sprite.less',
    imgPath: '../images/sprite.png'
  };

_.each(themes, function(theme, name) {
  const themePath = projectPath + 'app/design/' + theme.area + '/' + theme.name + '/web/',
    opts = _.extend({}, defaultOptions, theme);
  themeOptions[name] = {
    src: themePath + opts.src,
    dest: themePath + opts.dest,
    padding: 5,
    destCss: themePath + opts.destCss,
    imgPath: opts.imgPath,
    algorithm: 'binary-tree',
    cssVarMap: function (sprite) {
      sprite.name = 'sprite_' + sprite.name;
    }
  };
});
module.exports = themeOptions;
