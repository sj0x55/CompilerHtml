# Example
```JavaScript
import Compiler from './modules/compiler';
import Tags from './modules/tags';
import Directives from './modules/directives';
import Attributes from './modules/attributes';

let compiler = new Compiler({
  preprocessors: [Tags, Directives, Attributes]
});

let result = compiler.compile(`
  <div directive1 class="test1">
    <div directive2>
      <div class="div">
        Test 1
      </div>
      <div directive3 class="test2"></div>
    </div>
  </div>
`);

console.log(JSON.stringify(result, null, 2));
```

# Output
```JSON
[
  {
    "openTagName": "div",
    "directives": [],
    "attributes": [
      {
        "name": "directive1"
      },
      {
        "name": "class",
        "value": "test1"
      }
    ]
  },
  {
    "openTagName": "div",
    "directives": [],
    "attributes": [
      {
        "name": "directive2"
      }
    ]
  },
  {
    "openTagName": "div",
    "directives": [],
    "attributes": [
      {
        "name": "class",
        "value": "div"
      }
    ]
  },
  {
    "content": "Test 1"
  },
  {
    "closeTagName": "div"
  },
  {
    "openTagName": "div",
    "directives": [],
    "attributes": [
      {
        "name": "directive3"
      },
      {
        "name": "class",
        "value": "test2"
      }
    ]
  },
  {
    "closeTagName": "div"
  },
  {
    "closeTagName": "div"
  },
  {
    "closeTagName": "div"
  }
]
```
