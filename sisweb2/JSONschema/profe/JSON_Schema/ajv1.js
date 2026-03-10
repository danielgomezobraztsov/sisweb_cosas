const Ajv = require("ajv")
const ajv = new Ajv() // options can be passed. See https://ajv.js.org/options.html 
const schema = {
    type: "object", 
    properties: {
        foo: {type: "integer"}, 
        bar: {type: "string"}
    },
    required: ["foo"], 
    additionalProperties: false
}
const validate = ajv.compile(schema) 
const data = { "foo": 1, "bar": 123} 
const valid = validate(data)
if (valid){
    console.log("Valid!");
} else {
    console.log(validate.errors);
}