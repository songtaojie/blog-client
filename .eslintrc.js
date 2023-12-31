
module.exports = {
	root: true,
	env: {
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
		'plugin:vue/essential',
		'eslint:recommended'
	],
	'rules': { // 0 off, 1 warn, 2 error
		'no-constant-condition': 2, // 禁止在条件中使用常量表达式
		'no-alert': 1, // 禁止使用alert confirm prompt
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁用console，有助于代码发布前精简代码，调试时可忽略此规则
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // 禁止使用debugger
		'no-dupe-args': 2, // 禁止在 function 定义中出现重复的参数
		'no-dupe-keys': 2, // 禁止在对象字面量中出现重复的键
		'no-duplicate-case': 2, // 禁止在 switch 语句中的 case 子句中出现重复的测试表达式
		'no-func-assign': 2, // 禁止对 function 声明重新赋值
		'no-obj-calls': 2, // 禁止把全局对象 (Math 和 JSON) 作为函数调用  错误：var math = Math();
		'no-regex-spaces': 2, // 禁止正则表达式字面量中出现多个空格
		'no-sparse-arrays': 2, // 禁用稀疏数组, e.g.[,,]
		'no-unexpected-multiline': 2, // 禁止使用令人困惑的多行表达式。
		'no-unreachable': 2, // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
		'use-isnan': 2, // 禁止比较时使用NaN，只能用isNaN()
		'valid-typeof': 2, // 强制 typeof 表达式与有效的字符串进行比较
		'eqeqeq': 1, // 使用 === 和 !== 代替 == 和 !=
		'no-caller': 0, // 禁用 arguments.caller 或 arguments.callee
		'no-eval': 1, // 禁用 eval()
		'no-redeclare': 2, // 不允许重复声明
		'no-undef': 2, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
		'no-unused-vars': 1, // 禁止出现未使用过的变量
		'no-use-before-define': 2, // 禁止定义前使用
		'comma-dangle': [1, 'never'], // 多行对象字面量中要求拖尾逗号
		'no-const-assign': 2, // 不允许改变用const声明的变量
		'no-class-assign': 2, // 禁止修改类声明的变量
		'no-confusing-arrow': 2, // 不允许箭头功能，在那里他们可以混淆的比较
		'no-catch-shadow': 2, // 不允许 catch 子句的参数与外层作用域中的变量同名
		'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称

		'no-mixed-spaces-and-tabs': 2, // 禁止使用 空格 和 tab 混合缩进
		'no-multi-spaces': 2, // 禁止出现多个空格而且不是用来作缩进的
		'array-bracket-spacing': [2, 'never'], // 数组紧贴括号部分不允许包含空格。
		'object-curly-spacing': [0, 'never'], // 对象紧贴花括号部分不允许包含空格。
		'block-spacing': [2, 'never'], // 单行代码块中紧贴括号部分不允许包含空格。
		'comma-spacing': [2, {
			'before': false,
			'after': true
		}], // 在变量声明、数组字面量、对象字面量、函数参数 和 序列中禁止在逗号前使用空格,要求在逗号后使用一个或多个空格
		'semi-spacing': [2, {
			'before': false,
			'after': true
		}], // 禁止分号周围的空格
		'computed-property-spacing': [2, 'never'], // 禁止括号和其内部值之间的空格
		'no-trailing-spaces': 2, // 禁用行尾空格
		'no-spaced-func': 2, // 函数调用时 函数名与()之间不能有空格
		'space-before-function-paren': 0, // 函数定义时括号前面要有空格
		'space-before-blocks': [2, 'always'], // 禁止语句块之前的空格
		'space-in-parens': [2, 'never'], // 小括号里面要不要有空格
		'space-infix-ops': [2, {
			'int32Hint': false
		}], // 要求中缀操作符周围有空格,设置 int32Hint 选项为 true (默认 false) 允许 a|0 不带空格。
		'space-unary-ops': 2, // 要求或禁止在一元操作符之前或之后存在空格,new、delete、typeof、void、yield要求有空格，-、+、--、++、!、!!要求无空格。
		'spaced-comment': 1, // 要求在注释前有空格
		'arrow-spacing': 2, // 要求箭头函数的箭头之前和之后有空格
		'generator-star-spacing': [2, {
			'before': false,
			'after': true
		}], // 强制 generator 函数中 * 号前有空格，后无空格。
		'yield-star-spacing': [2, {
			'before': true,
			'after': false
		}], // 强制 yield* 表达式中  * 号前有空格，后无空格。
		'no-irregular-whitespace': 2, // 禁止不规则的空白。
		'template-curly-spacing': [2, 'never'], // 强制模板字符串中花括号内不能出现空格

		'curly': [2, 'multi-line'], // if、else if、else、for、while强制使用大括号，但允许在单行中省略大括号。
		'semi': [2, 'never'], // 不得省略语句结束的分号
		'camelcase': [2, {
			'properties': 'never'
		}], // 要求使用骆驼拼写法

		'no-var': 0, // 用let/const代替var
		'prefer-const': 2, // 如果一个变量不会被重新赋值，最好使用const进行声明。

		'no-cond-assign': 1, // 禁止在条件语句中出现赋值操作符
		'default-case': 2, // 要求 Switch 语句中有 Default 分支
		'no-else-return': 2, // 如果 if 块中包含了一个 return 语句，else 块就成了多余的了。可以将其内容移至块外。
		'no-fallthrough': 2, // 禁止 case 语句落空
		'no-unneeded-ternary': 2, // 禁止可以在有更简单的可替代的表达式时使用三元操作符

		'radix': 2, // 在parseInt()中始终使用基数以消除意想不到的后果。

		'quotes': [2, 'single'], // 字符串开头和结束使用单引号
		'prefer-template': 1, // 使用模板而非字符串连接
		'no-useless-concat': 2, // 禁止没有必要的字符拼接

		'no-prototype-builtins': 0, // 禁止直接使用 Object.prototypes 的内置属性
		'dot-notation': [2, {
			'allowKeywords': true
		}], // 强制在任何允许的时候使用点号访问属性
		'no-extend-native': 2, // 禁止扩展原生对象
		'no-new-object': 2, // 禁止使用 Object 构造函数
		'object-shorthand': [0, 'always'], // 要求对象字面量简写语法

		'no-array-constructor': 2, // 禁止使用 Array 构造函数

		'no-new-func': 0, // 禁用Function构造函数
		'no-return-assign': 2, // 禁止在返回语句中赋值
		// "newline-before-return": 1, // 要求 return 语句之前有一空行

		'new-cap': 0, // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用

		'strict': 0, // 使用强制模式开关use strict;
		'no-empty': [2, {
			'allowEmptyCatch': true
		}], // 禁止空块语句,但允许出现空的 catch 子句
		'no-extra-boolean-cast': 2, // 禁止不必要的布尔类型转换
		'no-extra-parens': 2, // 禁止冗余的括号
		'no-extra-semi': 2, // 禁用不必要的分号
		'no-with': 2, // 禁用 with 语句
		'no-unsafe-finally': 2, // 禁止在 finally 语句块中出现控制流语句
		'no-case-declarations': 2, // 禁止在 case 或 default 子句中出现词法声明
		'no-new-wrappers': 2, // 禁止通过 new 操作符使用 String、Number 和 Boolean
		'no-useless-escape': 2, // 禁用不必要的转义
		'handle-callback-err': 2 // 强制回调错误处理
	}
}
// {
// 	"extends": "vue",
// 	// Your overrides...
// 	"parser": "babel-eslint",
// 	"rules": { // 0 off, 1 warn, 2 error
// 		"no-constant-condition": 2, // 禁止在条件中使用常量表达式
// 		"no-alert": 1, // 禁止使用alert confirm prompt
// 		"no-console": 1, // 禁用console，有助于代码发布前精简代码，调试时可忽略此规则
// 		"no-debugger": 1, // 禁止使用debugger
// 		"no-dupe-args": 2, // 禁止在 function 定义中出现重复的参数
// 		"no-dupe-keys": 2, // 禁止在对象字面量中出现重复的键
// 		"no-duplicate-case": 2, // 禁止在 switch 语句中的 case 子句中出现重复的测试表达式
// 		"no-func-assign": 2, // 禁止对 function 声明重新赋值
// 		"no-obj-calls": 2, // 禁止把全局对象 (Math 和 JSON) 作为函数调用  错误：var math = Math();
// 		"no-regex-spaces": 2, // 禁止正则表达式字面量中出现多个空格
// 		"no-sparse-arrays": 2, // 禁用稀疏数组, e.g.[,,]
// 		"no-unexpected-multiline": 2, // 禁止使用令人困惑的多行表达式。
// 		"no-unreachable": 2, // 禁止在 return、throw、continue 和 break 语句后出现不可达代码
// 		"use-isnan": 2, // 禁止比较时使用NaN，只能用isNaN()
// 		"valid-typeof": 2, // 强制 typeof 表达式与有效的字符串进行比较
// 		"eqeqeq": 1, // 使用 === 和 !== 代替 == 和 !=
// 		"no-caller": 0, // 禁用 arguments.caller 或 arguments.callee
// 		"no-eval": 1, // 禁用 eval()
// 		"no-redeclare": 2, //不允许重复声明
// 		"no-undef": 2, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
// 		"no-unused-vars": 1, // 禁止出现未使用过的变量
// 		"no-use-before-define": 2, // 禁止定义前使用
// 		"comma-dangle": [1, "never"], // 多行对象字面量中要求拖尾逗号
// 		"no-const-assign": 2, // 不允许改变用const声明的变量
// 		"no-class-assign": 2, // 禁止修改类声明的变量
// 		"no-confusing-arrow": 2, // 不允许箭头功能，在那里他们可以混淆的比较
// 		"no-catch-shadow": 2, // 不允许 catch 子句的参数与外层作用域中的变量同名
// 		"no-dupe-class-members": 2, // 禁止类成员中出现重复的名称

// 		"no-mixed-spaces-and-tabs": 2, // 禁止使用 空格 和 tab 混合缩进
// 		"no-multi-spaces": 2, // 禁止出现多个空格而且不是用来作缩进的
// 		"array-bracket-spacing": [2, "never"], // 数组紧贴括号部分不允许包含空格。
// 		"object-curly-spacing": [0, "never"], // 对象紧贴花括号部分不允许包含空格。
// 		"block-spacing": [2, "never"], // 单行代码块中紧贴括号部分不允许包含空格。
// 		"comma-spacing": [2, {
// 			"before": false,
// 			"after": true
// 		}], // 在变量声明、数组字面量、对象字面量、函数参数 和 序列中禁止在逗号前使用空格,要求在逗号后使用一个或多个空格
// 		"semi-spacing": [2, {
// 			"before": false,
// 			"after": true
// 		}], // 禁止分号周围的空格
// 		"computed-property-spacing": [2, "never"], // 禁止括号和其内部值之间的空格
// 		"no-trailing-spaces": 2, // 禁用行尾空格
// 		"no-spaced-func": 2, // 函数调用时 函数名与()之间不能有空格
// 		"space-before-function-paren": 0, // 函数定义时括号前面要有空格
// 		"space-before-blocks": [2, "always"], // 禁止语句块之前的空格
// 		"space-in-parens": [2, "never"], // 小括号里面要不要有空格
// 		"space-infix-ops": [2, {
// 			"int32Hint": false
// 		}], // 要求中缀操作符周围有空格,设置 int32Hint 选项为 true (默认 false) 允许 a|0 不带空格。
// 		"space-unary-ops": 2, // 要求或禁止在一元操作符之前或之后存在空格,new、delete、typeof、void、yield要求有空格，-、+、--、++、!、!!要求无空格。
// 		"spaced-comment": 1, // 要求在注释前有空格
// 		"arrow-spacing": 2, // 要求箭头函数的箭头之前和之后有空格
// 		"generator-star-spacing": [2, {
// 			"before": false,
// 			"after": true
// 		}], // 强制 generator 函数中 * 号前有空格，后无空格。
// 		"yield-star-spacing": [2, {
// 			"before": true,
// 			"after": false
// 		}], // 强制 yield* 表达式中  * 号前有空格，后无空格。
// 		"no-irregular-whitespace": 2, // 禁止不规则的空白。
// 		"template-curly-spacing": [2, "never"], // 强制模板字符串中花括号内不能出现空格

// 		"curly": [2, "multi-line"], // if、else if、else、for、while强制使用大括号，但允许在单行中省略大括号。
// 		// "semi": [2, "always"], // 不得省略语句结束的分号
// 		"camelcase": [2, {
// 			"properties": "never"
// 		}], // 要求使用骆驼拼写法

// 		"no-var": 0, // 用let/const代替var
// 		"prefer-const": 2, // 如果一个变量不会被重新赋值，最好使用const进行声明。

// 		"no-cond-assign": 1, // 禁止在条件语句中出现赋值操作符
// 		"default-case": 2, // 要求 Switch 语句中有 Default 分支
// 		"no-else-return": 2, // 如果 if 块中包含了一个 return 语句，else 块就成了多余的了。可以将其内容移至块外。
// 		"no-fallthrough": 2, // 禁止 case 语句落空
// 		"no-unneeded-ternary": 2, // 禁止可以在有更简单的可替代的表达式时使用三元操作符

// 		"radix": 2, // 在parseInt()中始终使用基数以消除意想不到的后果。

// 		"quotes": [2, "single"], // 字符串开头和结束使用单引号
// 		"prefer-template": 1, // 使用模板而非字符串连接
// 		"no-useless-concat": 2, // 禁止没有必要的字符拼接

// 		"no-prototype-builtins": 0, // 禁止直接使用 Object.prototypes 的内置属性
// 		"dot-notation": [2, {
// 			"allowKeywords": true
// 		}], // 强制在任何允许的时候使用点号访问属性
// 		"no-extend-native": 2, // 禁止扩展原生对象
// 		"no-new-object": 2, // 禁止使用 Object 构造函数
// 		"object-shorthand": [0, "always"], // 要求对象字面量简写语法

// 		"no-array-constructor": 2, // 禁止使用 Array 构造函数

// 		"no-new-func": 0, // 禁用Function构造函数
// 		"no-return-assign": 2, // 禁止在返回语句中赋值
// 		"newline-before-return": 1, // 要求 return 语句之前有一空行

// 		"new-cap": 2, // 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用

// 		"strict": 0, // 使用强制模式开关use strict;
// 		"no-empty": [2, {
// 			"allowEmptyCatch": true
// 		}], // 禁止空块语句,但允许出现空的 catch 子句
// 		"no-extra-boolean-cast": 2, // 禁止不必要的布尔类型转换
// 		"no-extra-parens": 2, // 禁止冗余的括号
// 		"no-extra-semi": 2, // 禁用不必要的分号
// 		"no-with": 2, // 禁用 with 语句
// 		"no-unsafe-finally": 2, // 禁止在 finally 语句块中出现控制流语句
// 		"no-case-declarations": 2, // 禁止在 case 或 default 子句中出现词法声明
// 		"no-new-wrappers": 2, // 禁止通过 new 操作符使用 String、Number 和 Boolean
// 		"no-useless-escape": 2, // 禁用不必要的转义
// 		"handle-callback-err": 2 // 强制回调错误处理
// 	}
// }