# Hexo Next Coauthor

Add coauthor post meta for NexT theme

![image](https://user-images.githubusercontent.com/15902347/63995254-7bf17f00-cb2a-11e9-8df5-2a6b07697aea.png)

## Install

```bash
npm i --save theme-next/hexo-next-coauthor
```

Used in front-matter

```yml
title: Hello! NexT Test Site
coauthor: Mr.J
```

```yml
title: Hello! NexT Test Site
coauthor: 
  - Mr.J
  - Jone
```

## Configuration

Modify coauthors info.

```yml
# Add some descriptions to your co-authors
coauthors:
  [Mr.J]:
    # It will display nick
    nick: Jackson
    # When your co-authors is click, will jump to there
    link: https://www.dnocm.com
  # It defines the order of precedence in post meta
  #post_meta_order: 0
```

Add i18n by write in `source/_data/languages.yml`

```yml
default:
  coauthor: 合著者
en:
  coauthor: Coauthor
zh-CN:
  coauthor: 合著者
zh-TW:
  coauthor: 合著者
```
