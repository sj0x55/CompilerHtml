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
