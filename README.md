# krdict.js

A node.js module to interact with [krdict](https://krdict.korean.go.kr), the Korean Learners' Dictionary, through its [API](https://krdict.korean.go.kr/openApi/openApiInfo). To use this module you'll need an API key from krdict.

An example of a basic query with only the required parameters:
```javascript
const krdict = require('krdict.js');

krdict.dictionarySearch({
    key: API_KEY,
    query: '나무',
}).then((response) => {
    console.log(JSON.stringify(response.data));
});
```
Which would ouput something like this:
```json
{
  "channel": {
    ...
    "item": [
      {
        "word": [ "나무" ],
        "vocabularyGrade": [ "초급" ],
        "partOfSpeech": [ "명사" ],
        ...
        "meaning": [
          {
            "meaningOrder": [ "1" ],
            "definition": [ "단단한 줄기에 가지와 잎이 달린, 여러 해 동안 자라는 식물." ]
          },
          ...
        ]
      },
      ...
    ]
  }
}
```

Additional parameters can be passed in
```javascript
const krdict = require('krdict.js');

krdict.dictionarySearch({
    key: API_KEY,
    query: '나무',
    sortMethod: 'alphabetical',
    shouldTranslate: true,
    translationLanguage: 'english'
}).then((response) => {
    console.log(JSON.stringify(response.requestParameters));
    console.log(JSON.stringify(response.data));
});
```
which are mapped to the parameter names and values expected by the krdict API:
```json
{
  "key": "xyz",
  "q": "나무",
  "sort": "dict",
  "translated": "y",
  "trans_lang": 1
}
```
```json
{
  "channel": {
    ...
    "item": [
        {
            "word": [ "나무" ],
            "vocabularyGrade": [ "초급" ],
            "partOfSpeech": [ "명사" ],
            ...
            "meaning": [
                {
                    "meaningOrder": [ "1" ],
                    "definition": [ "단단한 줄기에 가지와 잎이 달린, 여러 해 동안 자라는 식물." ],
                    "translation": [{
                        "language": [ "영어" ],
                        "word": [ "tree" ],
                        "definition": [ "A plant with a hard stem, branches and leaves." ]
                    }]
                },
                ...
            ]
        },
        ...
    ]
  }
}
```
You can view a complete list of accepted parameters and their values on [the wiki page](https://github.com/Fox-Islam/krdict.js/wiki/Complete-list-of-parameters)
