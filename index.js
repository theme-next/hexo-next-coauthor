/* global hexo */

'use strict';

const {i18n} = require('./i18n')(hexo, __dirname);

function createCoauthorPostMeta(name) {
  let coauthors = hexo.theme.config.coauthors || {};
  let postMeta = `<span>${name}</span>`;
  let coauthor = coauthors[name];

  if (!coauthor) return postMeta;

  if (coauthor.nick) {
    postMeta = `<span>${coauthor.nick}</span>`;
  }
  if (coauthor.link) {
    postMeta = `<a href="${coauthor.link}">${postMeta}</a>`;
  }

  return postMeta;
}

hexo.extend.helper.register('coauthor_post_meta', function(names) {
  if (!Array.isArray(names)) {
    return createCoauthorPostMeta(names);
  }
  return names.map(name => createCoauthorPostMeta(name)).join(' ');
});

hexo.extend.filter.register('theme_inject', function(injects) {
  let coauthors = hexo.theme.config.coauthors || {};

  i18n('languages', 'coauthor');

  injects.postMeta.raw('post-meta-coauthor', `
  {%- if post.coauthor %}
  <span class="post-meta-item">
    <span class="post-meta-item-icon">
      <i class="fa fa-copyright"></i>
    </span>
    <span class="post-meta-item-text">{{ __('coauthor') + __('symbol.colon') }}</span>
    {{- coauthor_post_meta(post.coauthor) }}
  </span>
  {%- endif %}
  `, {}, {}, coauthors.post_meta_order);

});
