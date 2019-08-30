const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

module.exports = (hexo,pluginDir) => {
  return {
    i18n (dir,key) {
      let lang = hexo.config.language;
      let i18n = hexo.theme.i18n;

      const mergeLang = (lang) => {
        let themeLang = i18n.get(lang);
        if(themeLang[key]) return;
        try {
          let coauthorLang = yaml.safeLoad(fs.readFileSync(path.join(pluginDir, dir, lang + '.yml'), 'utf-8'));
          themeLang[key] = coauthorLang[key];
          i18n.set(lang, themeLang);
        } catch (e) {
          hexo.log.warn(`Coauthor hasn't ${lang} language configuration.`);
        }
      }

      if (Array.isArray(lang)) {
        lang.forEach(item => mergeLang(item));
      } else {
        mergeLang(lang);
      }
    }
  }
}
